"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[652],{8570:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(79);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||s;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(2203),n=(a(79),a(8570));const s={},o="Sample PostgreSQL Database with OMOP 5.3",l={unversionedId:"users/sample-data/sample-postgres-setup",id:"users/sample-data/sample-postgres-setup",title:"Sample PostgreSQL Database with OMOP 5.3",description:"Building the Database",source:"@site/docs/users/sample-data/sample-postgres-setup.md",sourceDirName:"users/sample-data",slug:"/users/sample-data/sample-postgres-setup",permalink:"/hutch/docs/users/sample-data/sample-postgres-setup",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/users/sample-data/sample-postgres-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"OMOP 5.3",permalink:"/hutch/docs/users/sample-data/omop-53"}},i={},p=[{value:"Building the Database",id:"building-the-database",level:2},{value:"Loading the data",id:"loading-the-data",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sample-postgresql-database-with-omop-53"},"Sample PostgreSQL Database with OMOP 5.3"),(0,n.kt)("h2",{id:"building-the-database"},"Building the Database"),(0,n.kt)("p",null,"There are 4 scripts to build the database:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"OMOPCDM_postgresql_5.3_ddl.sql"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the table definitions"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"OMOPCDM_postgresql_5.3_primary_keys.sql"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the primary keys for each table"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"OMOPCDM_postgresql_5.3_constraints.sql"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"foreign keys, etc."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"OMOPCDM_postgresql_5.3_indices.sql"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"indices for each table")))),(0,n.kt)("p",null,"You can run these scripts in order inside your favourite database software (e.g. DataGrip)."),(0,n.kt)("p",null,"Alternatively you can run the following command using the ",(0,n.kt)("inlineCode",{parentName:"p"},"psql")," CLI, substituting ",(0,n.kt)("inlineCode",{parentName:"p"},"<script>")," for each of the above scripts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h <db host> -d <db name> -U <username> -f <script>\n# enter the password for your database when prompted\n")),(0,n.kt)("h2",{id:"loading-the-data"},"Loading the data"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Due to the size of some of the files in the sample data, you may run out of memory trying to load the data through your favourite database software.")),(0,n.kt)("p",null,"There is a script for loading the data called ",(0,n.kt)("inlineCode",{parentName:"p"},"load_tables_postgresql.sql")," in the assets of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/hdruk/hutch/releases/tag/omop-5.3-sample-data"},"sample data release")," on Github."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h <db host> -d <db name> -U <username> -f load_tables_postgresql.sql\n# enter the password for your database when prompted\n")))}d.isMDXComponent=!0}}]);