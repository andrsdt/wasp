"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(50012);function o(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),l=t.slice(o+1,t.length-1),[p,i]=l.split(","),s=t.slice(0,o);return n.createElement("code",null,s+("js"===a?p:i))}},91914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=(a(46300),a(38610));const l={title:"Introduction"},p=void 0,i={unversionedId:"deployment/intro",id:"version-0.16.0/deployment/intro",title:"Introduction",description:"After developing your app locally on your machine, the next step is to deploy it to the web so that others can access it.",source:"@site/versioned_docs/version-0.16.0/deployment/intro.md",sourceDirName:"deployment",slug:"/deployment/intro",permalink:"/docs/deployment/intro",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.16.0/deployment/intro.md",tags:[],version:"0.16.0",frontMatter:{title:"Introduction"},sidebar:"docs",previous:{title:"Custom Vite Config",permalink:"/docs/project/custom-vite-config"},next:{title:"Env Variables",permalink:"/docs/deployment/env-vars"}},s={},c=[{value:"Wasp app structure",id:"wasp-app-structure",level:3},{value:"Deploying your app",id:"deploying-your-app",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After developing your app locally on your machine, the next step is to deploy it to the web so that others can access it."),(0,r.kt)("p",null,"In this section, we'll walk you through the steps to deploy your Wasp app."),(0,r.kt)("h3",{id:"wasp-app-structure"},"Wasp app structure"),(0,r.kt)("p",null,"Before we start, let's understand what Wasp generates when it builds your app."),(0,r.kt)("p",null,'What we call a "Wasp app" consists of three different parts:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Client app")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It's a single-page application (SPA), built using ",(0,r.kt)("a",{parentName:"li",href:"https://react.dev/"},"React"),". It's what the user sees and interacts with."),(0,r.kt)("li",{parentName:"ul"},"It's usually served by some static file server or you can host it on a CDN like Cloudflare or Netlify."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Server app"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The backend of your app, built using ",(0,r.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express")," on Node.js."),(0,r.kt)("li",{parentName:"ul"},"It handles requests from the client app, interacts with the database, and returns responses."),(0,r.kt)("li",{parentName:"ul"},"It comes with a ready-to-use ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," so you can easily package it and deploy it anywhere where Docker is supported."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Database"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wasp uses ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," as its production database."),(0,r.kt)("li",{parentName:"ul"},"You can host the database on your own server or use a cloud service.")))),(0,r.kt)(o.Z,{source:"/img/deploying/wasp-app-flow.gif",alt:"Wasp app structure",caption:"Data flow in a typical deployed Wasp app where all three parts are deployed separately",mdxType:"ImgWithCaption"}),(0,r.kt)("p",null,"The thing to take away from this: the client app and server app are separate applications that communicate with each other over HTTP. This means you can deploy them on the same or different servers, depending on your needs."),(0,r.kt)("p",null,"We'll show you different ways of how deploy your app in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/deployment/deployment-methods/overview"},"deployment methods")," section."),(0,r.kt)("p",null,"Server needs to be able to communicate with the database, we'll show you how to set that up using ",(0,r.kt)("a",{parentName:"p",href:"/docs/deployment/env-vars"},"env variables"),"."),(0,r.kt)("h3",{id:"deploying-your-app"},"Deploying your app"),(0,r.kt)("p",null,"In the following sections, we'll go through all the different things you need to know about deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/env-vars"},"env variables")," work in production - they are different than using .env files in development."),(0,r.kt)("li",{parentName:"ul"},"Production ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/database"},"database setup")," - how migrations work, how to connect to the database, etc."),(0,r.kt)("li",{parentName:"ul"},"Different deployment methods (using ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-methods/cli"},"Wasp's CLI"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-methods/paas"},"cloud services"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-methods/self-hosted"},"self-hosting"),", etc.)"),(0,r.kt)("li",{parentName:"ul"},"How to ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/ci-cd"},"set up CI/CD")," for your app - automatically deploy your app when you push to your Git repository."),(0,r.kt)("li",{parentName:"ul"},"Some ",(0,r.kt)("a",{parentName:"li",href:"/docs/deployment/extras"},"extras")," like custom domains, CDN, etc.")))}m.isMDXComponent=!0}}]);