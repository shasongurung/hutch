"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[602],{8570:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),d=a,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(2203),a=(r(79),r(8570));const o={sidebar_position:3},i="Configuration Datastore",s={unversionedId:"users/getting-started/installation/configuration-datastore",id:"users/getting-started/installation/configuration-datastore",title:"Configuration Datastore",description:"The Hutch Manager uses a [PostgreSQL] database as a configuration store, so you'll need an available instance of Postgres.",source:"@site/docs/users/getting-started/installation/configuration-datastore.md",sourceDirName:"users/getting-started/installation",slug:"/users/getting-started/installation/configuration-datastore",permalink:"/hutch/docs/users/getting-started/installation/configuration-datastore",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/users/getting-started/installation/configuration-datastore.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userGuide",previous:{title:"Hutch Agent",permalink:"/hutch/docs/users/getting-started/installation/agent"},next:{title:"Message Queue",permalink:"/hutch/docs/users/getting-started/installation/message-queue"}},l={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-datastore"},"Configuration Datastore"),(0,a.kt)("p",null,"The Hutch Manager uses a ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database as a configuration store, so you'll need an available instance of Postgres."),(0,a.kt)("p",null,"You can install Postgres ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"however you want"),", reusing an existing server if appropriate."),(0,a.kt)("p",null,"An easy way can be to use ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/postgres"},"Docker"),", configured via environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_USER=<username>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_PASSWORD=<password>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generate a good random one!")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_DB=<db name>"))))}p.isMDXComponent=!0}}]);