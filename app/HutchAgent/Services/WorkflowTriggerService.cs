using System.Diagnostics;
using System.IO.Compression;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;
using HutchAgent.Config;
using HutchAgent.Constants;
using HutchAgent.Data.Entities;
using Microsoft.Extensions.Options;
using Microsoft.FeatureManagement;
using ROCrates;
using ROCrates.Exceptions;
using ROCrates.Models;
using File = System.IO.File;

namespace HutchAgent.Services;

public class WorkflowTriggerService
{
  private readonly WorkflowTriggerOptions _workflowOptions;
  private readonly ILogger<WorkflowTriggerService> _logger;
  private readonly string _activateVenv;
  private const string _bashCmd = "bash";
  private readonly ROCrate _roCrate = new();
  private readonly WfexsJobService _wfexsJobService;
  readonly IFeatureManager _featureManager;

  public WorkflowTriggerService(
    IOptions<WorkflowTriggerOptions> workflowOptions,
    ILogger<WorkflowTriggerService> logger,
    IServiceProvider serviceProvider,
    IFeatureManager featureManager
  )
  {
    _logger = logger;
    _featureManager = featureManager;
    _workflowOptions = workflowOptions.Value;
    _activateVenv = "source " + _workflowOptions.VirtualEnvironmentPath;
    _wfexsJobService = serviceProvider.GetService<WfexsJobService>() ?? throw new InvalidOperationException();
  }

  /// <summary>
  /// Parse ROCrate metadata using the ROCrates library
  /// </summary>
  /// <param name="jsonFile"> JSON Metadata file</param>
  /// <returns> ROCrate object </returns>
  private ROCrate ParseCrate(string jsonFile)
  {
    try
    {
      // get metadata from manifest
      var metadataProperties = JsonNode.Parse(jsonFile)?.AsObject();
      if (metadataProperties is null) throw new Exception("Unable to get metadata properties.");
      metadataProperties.TryGetPropertyValue("@graph", out var graph);
      if (graph is null) throw new Exception("Unable to get @graph from metadata.");
      // get RootDataset Properties and add them to an ROCrates object
      var rootDatasetProperties = graph.AsArray().First(g => g?["@id"]?.ToString() == "./");
      if (rootDatasetProperties is null) throw new Exception("Unable to get root dataset from metadata.");
      var datasetRoot = RootDataset.Deserialize(rootDatasetProperties.ToString(), _roCrate);
      _roCrate.Add(datasetRoot ?? throw new InvalidOperationException());

      return _roCrate;
    }
    catch
    {
      throw new Exception("Metadata JSON could not be parsed");
    }
  }

  /// <summary>
  /// Unpack an ROCrate
  /// </summary>
  /// <param name="stream"></param>
  /// <exception cref="FileNotFoundException"></exception>
  private WfexsJob UnpackCrate(Stream stream)
  {
    var wfexsJob = new WfexsJob
    {
      UnpackedPath = Path.Combine(_workflowOptions.CrateExtractPath, Guid.NewGuid().ToString()),
      RunFinished = false
    };
    ExtractCrate(wfexsJob, stream);
    var fileJson = ValidateCrate(wfexsJob.UnpackedPath);
    // Parse Crate metadata
    var crate = ParseCrate(fileJson);
    // Get mainEntity from metadata
    var mainEntity = crate.RootDataset.GetProperty<Part>("mainEntity");
    if (mainEntity is null) throw new Exception("mainEntity is not defined in the root dataset.");
    var mainEntityPath = Path.Combine(wfexsJob.UnpackedPath, mainEntity.Id);
    // Check main entity is present and a stage file
    if (File.Exists(mainEntityPath) && (mainEntityPath.EndsWith(".stage") || mainEntityPath.EndsWith(".yaml") ||
                                        mainEntityPath.EndsWith(".yml")))
    {
      _logger.LogInformation($"main Entity is a Wfexs stage file and can be found at {mainEntityPath}");
      _workflowOptions.StageFilePath = mainEntityPath;
      // Create a copy of the wfexs stage file
      var copyFilePath = Path.Combine(wfexsJob.UnpackedPath, "copy_" + mainEntity.Id);
      try
      {
        File.Copy(mainEntityPath, copyFilePath, true);
      }
      // Catch exception if the file was already copied.
      catch (IOException copyError)
      {
        _logger.LogError(copyError.Message);
      }

      // Rewrite stage file parameter inputs to an absolute path
      // based on "crate" protocol
      using (var stageFileWriter = new StreamWriter(mainEntityPath))
      using (var stageFileReader = new StreamReader(copyFilePath))
      {
        string? line;
        while ((line = stageFileReader.ReadLine()) != null)
        {
          if (line.Trim().StartsWith("- crate://"))
          {
            _logger.LogInformation($"Found line matching crate protocol {line}");
            stageFileWriter.WriteLine(RewritePath(wfexsJob, line));
          }
          else
          {
            stageFileWriter.WriteLine(line);
          }
        }
      }
    }
    else
    {
      throw new FileNotFoundException($"No file named {mainEntity.Id} found in the working directory");
    }

    // Tell the queue were the crate was extracted
    return _wfexsJobService.Create(wfexsJob).Result;
  }

  public async Task<WfexsJob> FetchCrate(Stream stream)
  {
    var wfexsJob = new WfexsJob
    {
      UnpackedPath = Path.Combine(_workflowOptions.CrateExtractPath, Guid.NewGuid().ToString()),
      RunFinished = false
    };
    ExtractCrate(wfexsJob, stream);
    _logger.LogInformation($"Crate extracted at {wfexsJob.UnpackedPath}");
    var cratePath = Path.Combine(wfexsJob.UnpackedPath, "data");
    // Initialise Crate
    var crate = new ROCrate();
    try
    {
      crate.Initialise(cratePath);
    }
    catch (CrateReadException e)
    {
      _logger.LogError(exception: e, "RO-Crate cannot be read, or is invalid.");
      throw;
    }
    catch (MetadataException e)
    {
      _logger.LogError(exception: e, "RO-Crate Metadata cannot be read, or is invalid.");
      throw;
    }

    // Get mainEntity from metadata
    // Contains workflow location
    var mainEntity = crate.RootDataset.GetProperty<Part>("mainEntity");
    if (mainEntity is null) throw new Exception("mainEntity is not defined in the root dataset.");
    var workflowId = Regex.Match(mainEntity.Id, @"\d+").Value;
    // Compose download url for workflowHub
    var downloadAddress = Regex.Replace(mainEntity.Id, @"([0-9]+)(\?version=[0-9]+)?$", @"$1/ro_crate$2");
    DateTime downloadStartTime = DateTime.Now;
    using (var client = new HttpClient())
    {
      var clientStream = await client.GetStreamAsync(downloadAddress);
      await using var file = File.OpenWrite(Path.Combine(cratePath, "workflows.zip"));
      await clientStream.CopyToAsync(file);
      _logger.LogInformation("Successfully downloaded workflow from Workflow Hub.");
    }

    DateTime downloadEndTime = DateTime.Now;

    using (var archive = new ZipArchive(File.OpenRead(Path.Combine(cratePath, "workflows.zip"))))
    {
      Directory.CreateDirectory(Path.Combine(cratePath, "workflow", workflowId));
      archive.ExtractToDirectory(Path.Combine(cratePath, "workflow", workflowId));
      _logger.LogInformation($"Unpacked workflow to {Path.Combine(cratePath, "workflow", workflowId)}");
    }

    var downloadActionId = $"#download-{Guid.NewGuid()}";
    var downloadAction = new ContextEntity(crate, downloadActionId);
    crate.Add(downloadAction);
    downloadAction.SetProperty("@type", "DownloadAction");
    downloadAction.SetProperty("name", "Downloaded workflow RO-Crate via proxy");
    downloadAction.SetProperty("startTime", downloadStartTime);
    downloadAction.SetProperty("endTime", downloadEndTime);
    downloadAction.SetProperty("object", new Part()
    {
      Id = downloadAddress
    });
    downloadAction.SetProperty("result", new Part()
    {
      Id = Path.Combine("workflow", workflowId)
    });
    downloadAction.SetProperty("agent", new Part()
    {
      Id = "http://proxy.example.com/"
    });
    downloadAction.SetProperty("actionStatus", new Part()
    {
      Id = "https://schema.org/DownloadAction"
    });

    var workflowEntity = new Entity(crate);
    workflowEntity.SetProperty("@id", Path.Combine("workflow", workflowId));
    var property = crate.Entities[mainEntity.Id];
    workflowEntity.SetProperty("sameAs", new Part()
    {
      Id = property.Id
    });
    workflowEntity.SetProperty("@type", property.Properties["@type"]);
    workflowEntity.SetProperty("name", property.Properties["name"]);
    workflowEntity.SetProperty("conformsTo", property.Properties["conformsTo"]);
    workflowEntity.SetProperty("distribution", property.Properties["distribution"]);
    crate.Add(workflowEntity);
    crate.RootDataset.AppendTo("mentions", downloadAction);
    crate.Save(location: cratePath);
    _logger.LogInformation("Updated crate metadata.");
    return wfexsJob;
  }

  /// <summary>
  /// Install and run WfExS given 
  /// </summary>
  /// <param name="stream"></param>
  /// <exception cref="Exception"></exception>
  public async Task TriggerWfexs(Stream stream)
  {
    WfexsJob wfexsJob;
    // Unpack the crate and get the queued message to track the WfExS job.
    if (await _featureManager.IsEnabledAsync(FeatureFlags.UseFiveSafesCrate))
    {
      wfexsJob = await FetchCrate(stream);
    }
    else
    {
      wfexsJob = UnpackCrate(stream);
    }

    // Commands to install WfExS and execute a workflow
    // given a path to the local config file and a path to the stage file of a workflow
    var commands = new List<string>()
    {
      $"./WfExS-backend.py  -L {_workflowOptions.LocalConfigPath} execute -W {_workflowOptions.StageFilePath}"
    };

    var processStartInfo = new ProcessStartInfo
    {
      RedirectStandardOutput = true,
      RedirectStandardInput = true,
      RedirectStandardError = true,
      UseShellExecute = false,
      CreateNoWindow = true,
      FileName = _bashCmd,
      WorkingDirectory = _workflowOptions.ExecutorPath
    };

    // start process
    var process = Process.Start(processStartInfo);
    if (process == null)
      throw new Exception("Could not start process");

    // Get process PID
    wfexsJob.Pid = process.Id;

    await using var streamWriter = process.StandardInput;
    if (streamWriter.BaseStream.CanWrite)
    {
      // activate python virtual environment
      await streamWriter.WriteLineAsync(_activateVenv);
      foreach (var command in commands)
      {
        await streamWriter.WriteLineAsync(command);
      }

      await streamWriter.FlushAsync();
      streamWriter.Close();
    }

    // Read the stdout of the WfExS run to get the run ID
    var reader = process.StandardOutput;
    while (!process.HasExited && string.IsNullOrEmpty(wfexsJob.WfexsRunId))
    {
      var stdOutLine = await reader.ReadLineAsync();
      if (stdOutLine is null) continue;
      var runName = _findRunName(stdOutLine);
      if (runName is null) continue;
      wfexsJob.WfexsRunId = runName;
    }

    // close our connection to the process
    process.Close();

    // Update the job in the queue.
    await _wfexsJobService.Set(wfexsJob);
  }

  private string RewritePath(WfexsJob wfexsJob, string line)
  {
    var (linePrefix, relativePath) = line.Split("crate://") switch
    {
      { Length: 2 } a => (a[0], a[1]),
      _ => (null, null)
    };
    if (relativePath is null) return line;

    var absolutePath = Path.Combine(Path.GetFullPath(wfexsJob.UnpackedPath), relativePath);
    var newLine = linePrefix + "file://" + absolutePath;

    _logger.LogInformation($"Writing absolute input path {newLine}");

    return newLine;
  }

  private string? _findRunName(string text)
  {
    var pattern =
      @".*-\sInstance\s([0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}).*";
    var regex = new Regex(pattern);

    var match = regex.Match(text);
    if (!match.Success)
    {
      _logger.LogError("Didn't match the pattern!");
      return null;
    }

    // Get the matched UUID pattern
    var uuid = match.Groups[1].Value;
    return Guid.TryParse(uuid, out var validUuid) ? validUuid.ToString() : null;
  }

  public string ValidateCrate(string cratePath)
  {
    // Validate it is an ROCrate
    var file = Directory.GetFiles(cratePath, searchPattern: "ro-crate-metadata.json");
    if (file.Length == 0)
      throw new FileNotFoundException($"No metadata JSON found in directory {cratePath}");
    var fileJson = File.ReadAllText(file[0]);
    return fileJson;
  }

  public void ExtractCrate(WfexsJob wfexsJob, Stream stream)
  {
    using var archive = new ZipArchive(stream);
    {
      // Extract to Directory
      Directory.CreateDirectory(wfexsJob.UnpackedPath);
      archive.ExtractToDirectory(wfexsJob.UnpackedPath, true);
    }
    _logger.LogInformation($"Crate extracted at {wfexsJob.UnpackedPath}");
  }
}
