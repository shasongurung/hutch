"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9262],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(2203),a=(n(79),n(8570));const o={},p="\ud83d\udca1 pnpm cheatsheet",i={unversionedId:"devs/getting-started/pnpm-cheatsheet",id:"devs/getting-started/pnpm-cheatsheet",title:"\ud83d\udca1 pnpm cheatsheet",description:"Most pnpm commands can be done recursively against all workspaces with -r",source:"@site/docs/devs/getting-started/pnpm-cheatsheet.md",sourceDirName:"devs/getting-started",slug:"/devs/getting-started/pnpm-cheatsheet",permalink:"/hutch/docs/devs/getting-started/pnpm-cheatsheet",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/getting-started/pnpm-cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"devGuide",previous:{title:"HutchAgent",permalink:"/hutch/docs/devs/getting-started/agent"},next:{title:"External Systems",permalink:"/hutch/docs/category/external-systems"}},c={},l=[{value:"Dependency management",id:"dependency-management",level:2},{value:"Script running",id:"script-running",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-pnpm-cheatsheet"},"\ud83d\udca1 pnpm cheatsheet"),(0,a.kt)("p",null,"Most pnpm commands can be done recursively against all workspaces with ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")),(0,a.kt)("p",null,"You can target a specific workspace by being inside its workspace directory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"or you can target a workspace by relative directory path ",(0,a.kt)("inlineCode",{parentName:"li"},"-C <dir>")),(0,a.kt)("li",{parentName:"ul"},"or you can filter workspaces to target using ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter <filter-spec>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"See the docs for more complex filtering than just package name")))),(0,a.kt)("h2",{id:"dependency-management"},"Dependency management"),(0,a.kt)("p",null,"To install current dependencies for the whole repo: ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm i")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139"),(0,a.kt)("p",{parentName:"blockquote"},"pnpm symlinks ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," inside workspaces."),(0,a.kt)("p",{parentName:"blockquote"},"If you need to clean out ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," you can't just do the root one, so use ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm dlx npkill")," which will let you delete them all :)")),(0,a.kt)("p",null,"To add a new dependency ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm add <package-name>")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"-D")," if you want it to be a dev dependency"),(0,a.kt)("h2",{id:"script-running"},"Script running"),(0,a.kt)("p",null,"Run scripts with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm <script-name>")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139"),(0,a.kt)("p",{parentName:"blockquote"},"If the name of the script conflicts with a pnpm command, do ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run <script-name>"))))}u.isMDXComponent=!0}}]);