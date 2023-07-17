"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8929],{8570:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(79);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,v=l["".concat(s,".").concat(m)]||l[m]||u[m]||n;return r?a.createElement(v,c(c({ref:t},p),{},{components:r})):a.createElement(v,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<n;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},5094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=r(2203),o=(r(79),r(8570));const n={},c="\ud83d\udcf6 Data Sources",i={unversionedId:"devs/deprecated/detailed-overview/data-sources",id:"devs/deprecated/detailed-overview/data-sources",title:"\ud83d\udcf6 Data Sources",description:"Data Sources provide the datasets against which Hutch will execute configured Activities.",source:"@site/docs/devs/deprecated/detailed-overview/data-sources.md",sourceDirName:"devs/deprecated/detailed-overview",slug:"/devs/deprecated/detailed-overview/data-sources",permalink:"/hutch/docs/devs/deprecated/detailed-overview/data-sources",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/deprecated/detailed-overview/data-sources.md",tags:[],version:"current",frontMatter:{},sidebar:"devGuide",previous:{title:"\u27a1\ufe0f Activity Sources",permalink:"/hutch/docs/devs/deprecated/detailed-overview/activity-sources"}},s={},d=[{value:"Datastore support",id:"datastore-support",level:2},{value:"Schema support",id:"schema-support",level:2},{value:"OMOP Common Data Model",id:"omop-common-data-model",level:3}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-data-sources"},"\ud83d\udcf6 Data Sources"),(0,o.kt)("p",null,"Data Sources provide the datasets against which Hutch will execute configured Activities."),(0,o.kt)("h2",{id:"datastore-support"},"Datastore support"),(0,o.kt)("p",null,"At this time Hutch Agents only support PostgreSQL."),(0,o.kt)("h2",{id:"schema-support"},"Schema support"),(0,o.kt)("h3",{id:"omop-common-data-model"},"OMOP Common Data Model"),(0,o.kt)("p",null,'The initially targeted "Data Source" schema for Hutch is the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/OHDSI/CommonDataModel"},"OMOP CDM")," 5.3."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/workflows/sample-data/omop-53"},"Sample Datasets for querying in the OMOP Common Data Model")))}u.isMDXComponent=!0}}]);