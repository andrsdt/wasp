"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[77687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),u=r(67392),p=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var g=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},46300:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(50012);function o(e){let{path:t}=e;const[r]=(0,n.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),i=t.slice(o+1,t.length-1),[l,s]=i.split(","),u=t.slice(0,o);return a.createElement("code",null,u+("js"===r?l:s))}},55865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=(r(46300),r(85162)),i=r(74866);const l={title:"Migration from 0.12.X to 0.13.X"},s=void 0,u={unversionedId:"migration-guides/migrate-from-0-12-to-0-13",id:"version-0.15.0/migration-guides/migrate-from-0-12-to-0-13",title:"Migration from 0.12.X to 0.13.X",description:"This guide only covers the migration from 0.12.X to 0.13.X. If you are migrating from 0.11.X or earlier, please read the migration guide from 0.11.X to 0.12.X first.",source:"@site/versioned_docs/version-0.15.0/migration-guides/migrate-from-0-12-to-0-13.md",sourceDirName:"migration-guides",slug:"/migration-guides/migrate-from-0-12-to-0-13",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-12-to-0-13",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.15.0/migration-guides/migrate-from-0-12-to-0-13.md",tags:[],version:"0.15.0",frontMatter:{title:"Migration from 0.12.X to 0.13.X"},sidebar:"docs",previous:{title:"Migration from 0.13.X to 0.14.X",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-13-to-0-14"},next:{title:"Migration from 0.11.X to 0.12.X",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-11-to-0-12"}},p={},c=[{value:"What&#39;s new in 0.13.0?",id:"whats-new-in-0130",level:2},{value:"OAuth providers got an overhaul",id:"oauth-providers-got-an-overhaul",level:3},{value:"We added Keycloak as an OAuth provider",id:"we-added-keycloak-as-an-oauth-provider",level:3},{value:"How to migrate?",id:"how-to-migrate",level:2},{value:"Migrate your OAuth setup",id:"migrate-your-oauth-setup",level:3}],d={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Are you on 0.11.X or earlier?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This guide only covers the migration from ",(0,n.kt)("strong",{parentName:"p"},"0.12.X to 0.13.X"),". If you are migrating from 0.11.X or earlier, please read the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/migration-guides/migrate-from-0-11-to-0-12"},"migration guide from 0.11.X to 0.12.X")," first."),(0,n.kt)("p",{parentName:"admonition"},"Make sure to read the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/migration-guides/migrate-from-0-13-to-0-14"},"migration guide from 0.13.X to 0.14.X")," after you finish this one.")),(0,n.kt)("h2",{id:"whats-new-in-0130"},"What's new in 0.13.0?"),(0,n.kt)("h3",{id:"oauth-providers-got-an-overhaul"},"OAuth providers got an overhaul"),(0,n.kt)("p",null,"Wasp 0.13.0 switches away from using Passport for our OAuth providers in favor of ",(0,n.kt)("a",{parentName:"p",href:"https://arctic.js.org/"},"Arctic")," from the ",(0,n.kt)("a",{parentName:"p",href:"https://lucia-auth.com/"},"Lucia")," ecosystem. This change simplifies the codebase and makes it easier to add new OAuth providers in the future."),(0,n.kt)("h3",{id:"we-added-keycloak-as-an-oauth-provider"},"We added Keycloak as an OAuth provider"),(0,n.kt)("p",null,"Wasp now supports using ",(0,n.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," as an OAuth provider."),(0,n.kt)("h2",{id:"how-to-migrate"},"How to migrate?"),(0,n.kt)("h3",{id:"migrate-your-oauth-setup"},"Migrate your OAuth setup"),(0,n.kt)("p",null,"We had to make some breaking changes to upgrade the OAuth setup to the new Arctic lib."),(0,n.kt)("p",null,"Follow the steps below to migrate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Define the ",(0,n.kt)("inlineCode",{parentName:"strong"},"WASP_SERVER_URL")," server env variable")),(0,n.kt)("p",{parentName:"li"},"In 0.13.0 Wasp introduces a new server env variable ",(0,n.kt)("inlineCode",{parentName:"p"},"WASP_SERVER_URL")," that you need to define. This is the URL of your Wasp server and it's used to generate the redirect URL for the OAuth providers."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Server env variables"',title:'"Server',env:!0,'variables"':!0},"WASP_SERVER_URL=https://your-wasp-server-url.com\n")),(0,n.kt)("p",{parentName:"li"},"In development, Wasp sets the ",(0,n.kt)("inlineCode",{parentName:"p"},"WASP_SERVER_URL")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," by default."),(0,n.kt)("admonition",{parentName:"li",title:"Migrating a deployed app",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," If you are migrating a deployed app, you will need to define the ",(0,n.kt)("inlineCode",{parentName:"p"},"WASP_SERVER_URL")," server env variable in your deployment environment."),(0,n.kt)("p",{parentName:"admonition"}," Read more about setting env variables in production ",(0,n.kt)("a",{parentName:"p",href:"../project/env-vars#defining-env-vars-in-production"},"here"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Update the redirect URLs")," for the OAuth providers"),(0,n.kt)("p",{parentName:"li"},"The redirect URL for the OAuth providers has changed. You will need to update the redirect URL for the OAuth providers in the provider's dashboard."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"{clientUrl}/auth/login/{provider}\n"))),(0,n.kt)(o.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"{serverUrl}/auth/{provider}/callback\n")))),(0,n.kt)("p",{parentName:"li"},"Check the new redirect URLs for ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/auth/social-auth/google#3-creating-a-google-oauth-app"},"Google")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/auth/social-auth/github#3-creating-a-github-oauth-app"},"GitHub")," in Wasp's docs.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Update the ",(0,n.kt)("inlineCode",{parentName:"strong"},"configFn"))," for the OAuth providers"),(0,n.kt)("p",{parentName:"li"},"If you didn't use the ",(0,n.kt)("inlineCode",{parentName:"p"},"configFn")," option, you can skip this step."),(0,n.kt)("p",{parentName:"li"},"If you used the ",(0,n.kt)("inlineCode",{parentName:"p"},"configFn")," to configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"scope")," for the OAuth providers, you will need to rename the ",(0,n.kt)("inlineCode",{parentName:"p"},"scope")," property to ",(0,n.kt)("inlineCode",{parentName:"p"},"scopes"),"."),(0,n.kt)("p",{parentName:"li"},"Also, the object returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"configFn")," no longer needs to include the Client ID and the Client Secret. You can remove them from the object that ",(0,n.kt)("inlineCode",{parentName:"p"},"configFn")," returns."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="google.ts"',title:'"google.ts"'},"export function getConfig() {\n    return {\n        clientID: process.env.GOOGLE_CLIENT_ID,\n        clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n        scope: ['profile', 'email'],\n    }\n}\n"))),(0,n.kt)(o.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="google.ts"',title:'"google.ts"'},"export function getConfig() {\n    return {\n        scopes: ['profile', 'email'],\n    }\n}\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Update the ",(0,n.kt)("inlineCode",{parentName:"strong"},"userSignupFields")," fields")," to use the new ",(0,n.kt)("inlineCode",{parentName:"p"},"profile")," format"),(0,n.kt)("p",{parentName:"li"},"If you didn't use the ",(0,n.kt)("inlineCode",{parentName:"p"},"userSignupFields")," option, you can skip this step."),(0,n.kt)("p",{parentName:"li"},"The data format for the ",(0,n.kt)("inlineCode",{parentName:"p"},"profile")," that you receive from the OAuth providers has changed. You will need to update your code to reflect this change."),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="google.ts"',title:'"google.ts"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n    displayName: (data: any) => data.profile.displayName,\n})\n"))),(0,n.kt)(o.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="google.ts"',title:'"google.ts"'},"import { defineUserSignupFields } from 'wasp/server/auth'\n\nexport const userSignupFields = defineUserSignupFields({\n    displayName: (data: any) => data.profile.name,\n})\n")))),(0,n.kt)("p",{parentName:"li"},"Wasp now directly forwards what it receives from the OAuth providers. You can check the data format for ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/auth/social-auth/google#data-received-from-google"},"Google")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.15.0/auth/social-auth/github#data-received-from-github"},"GitHub")," in Wasp's docs."))),(0,n.kt)("p",null,"That's it!"),(0,n.kt)("p",null,"You should now be able to run your app with the new Wasp 0.13.0."))}f.isMDXComponent=!0}}]);