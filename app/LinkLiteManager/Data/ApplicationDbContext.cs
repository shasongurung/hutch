using LinkLiteManager.Data.Entities;
using LinkLiteManager.Data.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LinkLiteManager.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    : base(options) { }

  public DbSet<RegistrationAllowlistEntry> RegistrationAllowlist => Set<RegistrationAllowlistEntry>();

  public DbSet<FeatureFlag> FeatureFlags => Set<FeatureFlag>();

  public DbSet<ActivitySource> ActivitySources => Set<ActivitySource>();

  public DbSet<SourceType> SourceTypes => Set<SourceType>();

  public DbSet<Logs> Logs => Set<Logs>();

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
  }

}
