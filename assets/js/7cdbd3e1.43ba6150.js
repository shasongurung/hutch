"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7074],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(2203),o=(n(79),n(8570));const a={sidebar_position:5},s="Set up a Ubuntu Linux Environment to Run WfExS",i={unversionedId:"devs/external-systems/wfexs/wfexs-dev-env",id:"devs/external-systems/wfexs/wfexs-dev-env",title:"Set up a Ubuntu Linux Environment to Run WfExS",description:"In the hutch monorepo there is an Ansible playbook which you can use to quickly build an Ubuntu Linux environment for running WfExS.",source:"@site/docs/devs/external-systems/wfexs/wfexs-dev-env.md",sourceDirName:"devs/external-systems/wfexs",slug:"/devs/external-systems/wfexs/wfexs-dev-env",permalink:"/hutch/docs/devs/external-systems/wfexs/wfexs-dev-env",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/external-systems/wfexs/wfexs-dev-env.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"devGuide",previous:{title:"Running HutchWorker workflow",permalink:"/hutch/docs/devs/external-systems/wfexs/running-test-workflow"},next:{title:"Exported Crates",permalink:"/hutch/docs/devs/external-systems/wfexs/exported-crates"}},l={},u=[{value:"Optional",id:"optional",level:2},{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 3",id:"step-3",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-a-ubuntu-linux-environment-to-run-wfexs"},"Set up a Ubuntu Linux Environment to Run WfExS"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/HDRUK/hutch"},"hutch monorepo")," there is an ",(0,o.kt)("a",{parentName:"p",href:"https://www.ansible.com/"},"Ansible")," playbook which you can use to quickly build an Ubuntu Linux environment for running WfExS."),(0,o.kt)("p",null,"Ansible lets you set up a VM from your laptop without installing anything on your VM beforehand."),(0,o.kt)("admonition",{title:"Before you start",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You will need a Ubuntu machine such as a VM to use this playbook. Get one from your favourite cloud provider. Alternatively use VirtualBox, WSL2, etc.")),(0,o.kt)("h2",{id:"optional"},"Optional"),(0,o.kt)("p",null,"Before starting you may wish to create a non-root user in your VM.\n",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," into your VM as ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," and create a new user with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adduser <your new username>\n")),(0,o.kt)("p",null,"Following the instructions and then give the user sudo with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -aG sudo <your new username>\n")),(0,o.kt)("p",null,"For Ansible to use sudo as your new user, type ",(0,o.kt)("inlineCode",{parentName:"p"},"visudo")," into the terminal, hit enter, and add the following to the bottom of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<your new username>     ALL=(ALL) NOPASSWD:ALL\n")),(0,o.kt)("p",null,"Then save the file."),(0,o.kt)("p",null,"You should also add a file to the new user's home directory called ",(0,o.kt)("inlineCode",{parentName:"p"},".ssh/authorized_keys")," and add your public ssh key to it for extra security. Make sure the file is owned by the new user."),(0,o.kt)("h2",{id:"step-1"},"Step 1"),(0,o.kt)("p",null,"Install Ansible on your local machine using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install ansible\n")),(0,o.kt)("h2",{id:"step-2"},"Step 2"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"ansible/inventory.ini")," add the IP address(es) or host URL(s) under the section ",(0,o.kt)("inlineCode",{parentName:"p"},"[tre_server]")," where you wish to set up WfExS."),(0,o.kt)("h2",{id:"step-3"},"Step 3"),(0,o.kt)("p",null,"Run the playbook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i inventory.ini -u <VM username> playbook.yml\n")),(0,o.kt)("p",null,"Depending on the resources your VM has, your WfExS environment will be ready after several minutes."))}c.isMDXComponent=!0}}]);