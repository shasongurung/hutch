"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4738],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(2203),r=(n(79),n(8570));const i={sidebar_position:2},o="Configuration",l={unversionedId:"devs/deprecated/manager/configuration",id:"devs/deprecated/manager/configuration",title:"Configuration",description:"The Hutch Manager is now deprecated and will be removed soon.",source:"@site/docs/devs/deprecated/manager/configuration.md",sourceDirName:"devs/deprecated/manager",slug:"/devs/deprecated/manager/configuration",permalink:"/hutch/docs/devs/deprecated/manager/configuration",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/deprecated/manager/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devGuide",previous:{title:"Hutch Manager",permalink:"/hutch/docs/devs/deprecated/manager/"},next:{title:"Installation",permalink:"/hutch/docs/devs/deprecated/manager/install"}},s={},u=[{value:"Available values and defaults",id:"available-values-and-defaults",level:2},{value:"Sample Production Configuration guidance",id:"sample-production-configuration-guidance",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{title:"Deprecated",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The Hutch Manager is now deprecated and will be removed soon.")),(0,r.kt)("p",null,"The app can be configured in any standard way an ASP.NET Core application can. Typically from the Azure Portal (Environment variables) or an ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.json"),"."),(0,r.kt)("h2",{id:"available-values-and-defaults"},"Available values and defaults"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'Root:\n  Username: "" # Super Admin username. Prefix \'@\' will be added to the username. If not supplied, \'admin\' will be used, which becomes \'@admin\'.\n  Password: "" # Super Admin password\n  EmailAddress: "" # If not supplied, \'admin@local\' will be used.\n\nConnectionStrings:\n  Default: "" # the main application SQL Server database\nSerilog:\n  # ...\nOutboundEmail:\n  ServiceName: Hutch\n  FromName: No Reply\n  FromAddress: noreply@example.com\n  ReplyToAddress: ""\n  Provider: local\n\n  # If Provider == "local"\n  LocalPath: ~/temp\n\n  # If Provider == "sendgrid"\n  SendGridApiKey: ""\n\n  # If Provider == "smtp"\n  SmtpHost: "" # SMTP host name\n  SmtpPort:    # SMTP port\n  SmtpUsername: "" # SMTP username\n  SmtpPassword: "" # SMTP password\n  SmtpSecureSocketEnum: # for example, assign 2 to implement SslOnConnect\n  # Secure socket options\n  # 1 - Auto\n  # 2 - SslOnConnect\n  # 3 - StartTls\n  # 4 - StartTlsWhenAvailable\n\n  # More information can be found here\n  # http://www.mimekit.net/docs/html/T_MailKit_Security_SecureSocketOptions.htm\n\nUserAccounts:\n  RequireConfirmedAccount: # true or false. Check \'AccountConfirmed\' status if true\n  RequireConfirmedEmail: # true or false. Send confirmation email for user accounts if true.\n  Registration: # set as \'free\', \'limited\' or \'disabled\'\n  # \'free\' - allows new account registration\n  # \'limited\' - allows registration if email in AllowList\n  # \'disabled\' - disables registration altogether\n  \n\nActivitySourcePolling:\n  PollingInterval: 5 # set to a negative value will disable polling altogether\n\nRquestTaskApi:\n  BaseEndpoint: "bcos-rest/api/task"\n  QueueStatusEndpoint: "queue"\n  FetchQueryEndpoint: "nextjob"\n  SubmitResultEndpoint: "result"\n  Username: ""\n  Password: ""\n\n# Set-up if using RabbitMQ\nJobQueue:\n  Provider: "RabbitMQ"\n  HostName: ""\n  Port: 5672\n  UserName: "guest"\n  Password: "guest"\n\n# Set-up if using Azure Queue Storage\nJobQueue:\n  Provider: "AzureQueueStorage"\n  ConnectionString: "<your connection string>"\n\n# Opt in feature flags\n# sometimes features here are works in progress\nFeatureManagement:\n  # no feature flags currently in use\n')),(0,r.kt)("h2",{id:"sample-production-configuration-guidance"},"Sample Production Configuration guidance"),(0,r.kt)("p",null,"Set the environment to ",(0,r.kt)("inlineCode",{parentName:"p"},"Production"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_ENVIRONMENT=Production"))),(0,r.kt)("p",null,"Set the SSL certificates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_Kestrel__Certificates__Default__Path=<path>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"path"),": the path to the ",(0,r.kt)("inlineCode",{parentName:"li"},".pem")," file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_Kestrel__Certificates__Default__KeyPath=<path>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"path"),": the path to the ",(0,r.kt)("inlineCode",{parentName:"li"},".key")," file"))),(0,r.kt)("li",{parentName:"ul"},"If you are using Docker, these paths must be the paths to the certs ",(0,r.kt)("strong",{parentName:"li"},"inside the container"),". You will also need to mount the location of the certificate to the container. e.g. the directory for the certificate could be ",(0,r.kt)("inlineCode",{parentName:"li"},"/certs")," inside the container.")),(0,r.kt)("p",null,"Set the database connection string as an environment variable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_ConnectionStrings__Default=Host=<host>;Username=<username>;Port=<port>;Password=<password>;Database=<db>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host"),": the URL to your database server. If running in docker-compose, use the DB service name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username"),": the username for the DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password"),": the password for the DB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port"),": the port number for the DB, e.g. 5432 for postgres"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database"),": the name of the DB on the server")))),(0,r.kt)("p",null,"Set the message queue credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__HostName=<host name>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the host of the rabbitmq server. If using docker-compose, use the queue service name."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__UserName=<username>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the username of the message queue. NB: use the same one from ",(0,r.kt)("a",{parentName:"li",href:"#message-queue"},"Message Queue")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ASPNETCORE_JobQueue__Password=<password>"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the password of the message queue. NB: use the same one from ",(0,r.kt)("a",{parentName:"li",href:"#message-queue"},"Message Queue"))))))}c.isMDXComponent=!0}}]);