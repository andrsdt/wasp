"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[90665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),i=n(86010),s=n(12466),o=n(16550),l=n(91980),p=n(67392),m=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,p]=g({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=l??u;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var k=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==o&&(u(t),l(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:d},s,{className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),s=t.slice(i+1,t.length-1),[o,l]=s.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?o:l))}},85798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=(n(46300),n(85162)),s=n(74866);const o={title:"Migration from 0.13.X to 0.14.X"},l=void 0,p={unversionedId:"migration-guides/migrate-from-0-13-to-0-14",id:"version-0.15.0/migration-guides/migrate-from-0-13-to-0-14",title:"Migration from 0.13.X to 0.14.X",description:"This guide only covers the migration from 0.13.X to 0.14.X. If you are migrating from 0.11.X or earlier, please read the migration guide from 0.11.X to 0.12.X first.",source:"@site/versioned_docs/version-0.15.0/migration-guides/migrate-from-0-13-to-0-14.md",sourceDirName:"migration-guides",slug:"/migration-guides/migrate-from-0-13-to-0-14",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-13-to-0-14",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.15.0/migration-guides/migrate-from-0-13-to-0-14.md",tags:[],version:"0.15.0",frontMatter:{title:"Migration from 0.13.X to 0.14.X"},sidebar:"docs",previous:{title:"Migration from 0.14.X to 0.15.X",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-14-to-0-15"},next:{title:"Migration from 0.12.X to 0.13.X",permalink:"/docs/0.15.0/migration-guides/migrate-from-0-12-to-0-13"}},m={},u=[{value:"What&#39;s new in 0.14.0?",id:"whats-new-in-0140",level:2},{value:"Using Prisma Schema file directly",id:"using-prisma-schema-file-directly",level:3},{value:"Better auth user API",id:"better-auth-user-api",level:3},{value:"How to migrate?",id:"how-to-migrate",level:2},{value:"Bump the version and update <code>tsconfig.json</code>",id:"bump-the-version-and-update-tsconfigjson",level:3},{value:"Migrate to the new <code>schema.prisma</code> file",id:"migrate-to-the-new-schemaprisma-file",level:3},{value:"Migrate how you access user auth fields",id:"migrate-how-you-access-user-auth-fields",level:3},{value:"Migrate the database",id:"migrate-the-database",level:3}],d={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Are you on 0.11.X or earlier?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide only covers the migration from ",(0,r.kt)("strong",{parentName:"p"},"0.13.X to 0.14.X"),". If you are migrating from 0.11.X or earlier, please read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.15.0/migration-guides/migrate-from-0-11-to-0-12"},"migration guide from 0.11.X to 0.12.X")," first.")),(0,r.kt)("h2",{id:"whats-new-in-0140"},"What's new in 0.14.0?"),(0,r.kt)("h3",{id:"using-prisma-schema-file-directly"},"Using Prisma Schema file directly"),(0,r.kt)("p",null,"Before 0.14.0, users defined their entities in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file, and Wasp generated the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file based on that. This approach had some limitations, and users couldn't use some advanced Prisma features."),(0,r.kt)("p",null,"Wasp now exposes the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file directly to the user. You now define your entities in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file and Wasp uses that to generate the database schema and Prisma client. You can use all the Prisma features directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file. Simply put, the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file is now the source of truth for your database schema."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "MyApp",\n  db: {\n    system: PostgreSQL\n  },\n}\n\nentity User {=psl\n  id       Int @id @default(autoincrement())\n  tasks    Task[]\npsl=}\n\nentity Task {=psl\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\npsl=}\n'))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app myApp {\n  wasp: {\n    version: "^0.14.0"\n  },\n  title: "MyApp",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id       Int @id @default(autoincrement())\n  tasks    Task[]\n}\n\nmodel Task {\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\n}\n')))),(0,r.kt)("h3",{id:"better-auth-user-api"},"Better auth user API"),(0,r.kt)("p",null,"Wasp introduced a much simpler API for accessing user auth fields like ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"isEmailVerified")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," object. You don't need to use helper functions every time you want to access the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," or do extra steps to get proper typing."),(0,r.kt)("h2",{id:"how-to-migrate"},"How to migrate?"),(0,r.kt)("p",null,"To migrate your app to Wasp 0.14.x, you must:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bump the version in ",(0,r.kt)("inlineCode",{parentName:"li"},"main.wasp")," and update your ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"."),(0,r.kt)("li",{parentName:"ol"},"Migrate your entities into the new ",(0,r.kt)("inlineCode",{parentName:"li"},"schema.prisma")," file."),(0,r.kt)("li",{parentName:"ol"},"Update code that accesses user fields.")),(0,r.kt)("h3",{id:"bump-the-version-and-update-tsconfigjson"},"Bump the version and update ",(0,r.kt)("inlineCode",{parentName:"h3"},"tsconfig.json")),(0,r.kt)("p",null,"Let's start with something simple. Update the version field in your Wasp file to ",(0,r.kt)("inlineCode",{parentName:"p"},"^0.14.0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  wasp: {\n    // highlight-next-line\n    version: "^0.14.0"\n  },\n}\n')),(0,r.kt)("p",null,"To ensure your project works correctly with Wasp 0.14.0, you must also update your\n",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."),(0,r.kt)("p",null,"If you haven't changed anything in your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file (this is\nthe case for most users), just replace its contents with the new version shown\nbelow."),(0,r.kt)("p",null,"If you have made changes to your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file, we recommend taking the\nnew version of the file and reapplying them."),(0,r.kt)("p",null,"Here's the new version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'// =============================== IMPORTANT =================================\n//\n// This file is only used for Wasp IDE support. You can change it to configure\n// your IDE checks, but none of these options will affect the TypeScript\n// compiler. Proper TS compiler configuration in Wasp is coming soon :)\n{\n  "compilerOptions": {\n    "module": "esnext",\n    "target": "esnext",\n    // We\'re bundling all code in the end so this is the most appropriate option,\n    // it\'s also important for autocomplete to work properly.\n    "moduleResolution": "bundler",\n    // JSX support\n    "jsx": "preserve",\n    "strict": true,\n    // Allow default imports.\n    "esModuleInterop": true,\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "typeRoots": [\n      // This is needed to properly support Vitest testing with jest-dom matchers.\n      // Types for jest-dom are not recognized automatically and Typescript complains\n      // about missing types e.g. when using `toBeInTheDocument` and other matchers.\n      "node_modules/@testing-library",\n      // Specifying type roots overrides the default behavior of looking at the\n      // node_modules/@types folder so we had to list it explicitly.\n      // Source 1: https://www.typescriptlang.org/tsconfig#typeRoots\n      // Source 2: https://github.com/testing-library/jest-dom/issues/546#issuecomment-1889884843\n      "node_modules/@types"\n    ],\n    // Since this TS config is used only for IDE support and not for\n    // compilation, the following directory doesn\'t exist. We need to specify\n    // it to prevent this error:\n    // https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file\n    "outDir": ".wasp/phantom"\n  }\n}\n')),(0,r.kt)("h3",{id:"migrate-to-the-new-schemaprisma-file"},"Migrate to the new ",(0,r.kt)("inlineCode",{parentName:"h3"},"schema.prisma")," file"),(0,r.kt)("p",null,"To use the new ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, you need to move your entities from the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file."),(0,r.kt)("p",null,"1","."," ",(0,r.kt)("strong",{parentName:"p"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"strong"},"schema.prisma")," file")),(0,r.kt)("p",null,"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," in the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},".\n\u251c\u2500\u2500 main.wasp\n...\n// highlight-next-line\n\u251c\u2500\u2500 schema.prisma\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 vite.config.ts\n")),(0,r.kt)("p",null,"2","."," ",(0,r.kt)("strong",{parentName:"p"},"Add the ",(0,r.kt)("inlineCode",{parentName:"strong"},"datasource")," block")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file"),(0,r.kt)("p",null,"This block specifies the database type and connection URL:"),(0,r.kt)(s.Z,{groupId:"db",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sqlite",label:"Sqlite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n'))),(0,r.kt)(i.Z,{value:"postgresql",label:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"provider")," should be either ",(0,r.kt)("inlineCode",{parentName:"p"},'"postgresql"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"sqlite"'),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},'env("DATABASE_URL")')," so that Wasp can inject the database URL from the environment variables."))),(0,r.kt)("p",null,"3","."," ",(0,r.kt)("strong",{parentName:"p"},"Add the ",(0,r.kt)("inlineCode",{parentName:"strong"},"generator")," block")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file"),(0,r.kt)("p",null,"This block specifies the Prisma Client generator Wasp uses:"),(0,r.kt)(s.Z,{groupId:"db",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sqlite",label:"Sqlite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\n// highlight-start\ngenerator client {\n  provider = "prisma-client-js"\n}\n// highlight-end\n'))),(0,r.kt)(i.Z,{value:"postgresql",label:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\n// highlight-start\ngenerator client {\n  provider = "prisma-client-js"\n}\n// highlight-end\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," should be set to ",(0,r.kt)("inlineCode",{parentName:"li"},'"prisma-client-js"'),".")),(0,r.kt)("p",null,"4","."," ",(0,r.kt)("strong",{parentName:"p"},"Move your entities")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file"),(0,r.kt)("p",null,"Move the entities from the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file:"),(0,r.kt)(s.Z,{groupId:"db",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sqlite",label:"Sqlite",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n// There are some example entities, you should move your entities here\n// highlight-start\nmodel User {\n  id       Int @id @default(autoincrement())\n  tasks    Task[]\n}\n\nmodel Task {\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\n}\n// highlight-end\n'))),(0,r.kt)(i.Z,{value:"postgresql",label:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\n// There are some example entities, you should move your entities here\n// highlight-start\nmodel User {\n  id       Int @id @default(autoincrement())\n  tasks    Task[]\n}\n\nmodel Task {\n  id          Int @id @default(autoincrement())\n  description String\n  isDone      Boolean\n  userId      Int\n  user        User @relation(fields: [userId], references: [id])\n}\n// highlight-end\n')))),(0,r.kt)("p",null,"When moving the entities over, you'll need to change ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"model")," and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"=psl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"psl=")," tags."),(0,r.kt)("p",null,"If you had the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"entity Task {=psl\n  // Stays the same\npsl=}\n")),(0,r.kt)("p",null,"... it would look like this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},"model Task {\n  // Stays the same\n}\n")),(0,r.kt)("p",null,"5","."," ",(0,r.kt)("strong",{parentName:"p"},"Remove ",(0,r.kt)("inlineCode",{parentName:"strong"},"app.db.system"))," field from the Wasp file"),(0,r.kt)("p",null,"We now configure the DB system in the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, so there is no need for that field in the Wasp file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app MyApp {\n  // ...\n  db: {\n    // highlight-next-line\n    system: PostgreSQL,\n  }\n}\n")),(0,r.kt)("p",null,"6","."," ",(0,r.kt)("strong",{parentName:"p"},"Migrate Prisma preview features config")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file"),(0,r.kt)("p",null,"If you didn't use any Prisma preview features, you can skip this step."),(0,r.kt)("p",null,"If you had the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  // ...\n  db: {\n    // highlight-start\n    prisma: {\n      clientPreviewFeatures: ["postgresqlExtensions"]\n      dbExtensions: [\n        { name: "hstore", schema: "myHstoreSchema" },\n        { name: "pg_trgm" },\n        { name: "postgis", version: "2.1" },\n      ]\n    }\n    // highlight-end\n  }\n}\n')),(0,r.kt)("p",null,"... it will become this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="schema.prisma"',title:'"schema.prisma"'},'datasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n  // highlight-next-line\n  extensions = [hstore(schema: "myHstoreSchema"), pg_trgm, postgis(version: "2.1")]\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n  // highlight-next-line\n  previewFeatures = ["postgresqlExtensions"]\n}\n')),(0,r.kt)("p",null,"All that's left to do is migrate the database."),(0,r.kt)("p",null,"To avoid type errors, it's best to take care of database migrations after you've migrated the rest of the code.\nSo, just keep reading, and we will remind you to migrate the database as ",(0,r.kt)("a",{parentName:"p",href:"#migrate-the-database"},"the last step of the migration guide"),"."),(0,r.kt)("p",null,"Read more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.15.0/data-model/prisma-file"},"Prisma Schema File")," and how Wasp uses it to generate the database schema and Prisma client."),(0,r.kt)("h3",{id:"migrate-how-you-access-user-auth-fields"},"Migrate how you access user auth fields"),(0,r.kt)("p",null,"We had to make a couple of breaking changes to reach the new simpler API."),(0,r.kt)("p",null,"Follow the steps below to migrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"strong"},"getUsername")," helper")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.username.id")),(0,r.kt)("p",{parentName:"li"},"If you didn't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getUsername")," helper in your code, you can skip this step."),(0,r.kt)("p",{parentName:"li"},"This helper changed and it no longer works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," you receive as a prop on a page or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),". You'll need to replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.username.id"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { getUsername, AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const username = getUsername(user)\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"import { getUsername } from 'wasp/auth'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n    const username = getUsername(context.user)\n    // ...\n}\n"))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const username = user.identities.username?.id\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"export const createTask: CreateTask<...>  = async (args, context) => {\n    const username = context.user.identities.username?.id\n    // ...\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"strong"},"getEmail")," helper")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.email.id")),(0,r.kt)("p",{parentName:"li"},"If you didn't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEmail")," helper in your code, you can skip this step."),(0,r.kt)("p",{parentName:"li"},"This helper changed and it no longer works with the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," you receive as a prop on a page or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),". You'll need to replace it with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.email.id"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { getEmail, AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const email = getEmail(user)\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"import { getEmail } from 'wasp/auth'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n    const email = getEmail(context.user)\n    // ...\n}\n"))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const email = user.identities.email?.id\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"export const createTask: CreateTask<...>  = async (args, context) => {\n    const email = context.user.identities.email?.id\n    // ...\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Replace accessing ",(0,r.kt)("inlineCode",{parentName:"strong"},"providerData"))," with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.<provider>.<value>")),(0,r.kt)("p",{parentName:"li"},"If you didn't use any data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"providerData")," object, you can skip this step."),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<provider>")," with the provider name (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"google"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"github"),", etc.) and ",(0,r.kt)("inlineCode",{parentName:"p"},"<value>")," with the field you want to access (for example ",(0,r.kt)("inlineCode",{parentName:"p"},"isEmailVerified"),")."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { findUserIdentity, AuthUser } from 'wasp/auth'\n\nfunction getProviderData(user: AuthUser) {\n  const emailIdentity = findUserIdentity(user, 'email')\n  // We needed this before check for proper type support\n  return emailIdentity && 'isEmailVerified' in emailIdentity.providerData\n    ? emailIdentity.providerData\n    : null\n}\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const providerData = getProviderData(user)\n  const isEmailVerified = providerData ? providerData.isEmailVerified : null\n  // ...\n}\n"))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  // The email object is properly typed, so we can access `isEmailVerified` directly\n  const isEmailVerified = user.identities.email?.isEmailVerified\n  // ...\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"getFirstProviderUserId")," directly")," on the user object"),(0,r.kt)("p",{parentName:"li"},"If you didn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"getFirstProviderUserId")," in your code, you can skip this step."),(0,r.kt)("p",{parentName:"li"},"You should replace ",(0,r.kt)("inlineCode",{parentName:"p"},"getFirstProviderUserId(user)")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"user.getFirstProviderUserId()"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { getFirstProviderUserId, AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const userId = getFirstProviderUserId(user)\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"import { getFirstProviderUserId } from 'wasp/auth'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n    const userId = getFirstProviderUserId(context.user)\n    // ...\n}\n"))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const userId = user.getFirstProviderUserId()\n  // ...\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"export const createTask: CreateTask<...>  = async (args, context) => {\n    const userId = user.getFirstProviderUserId()\n    // ...\n}\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Replace ",(0,r.kt)("inlineCode",{parentName:"strong"},"findUserIdentity"))," with checks on ",(0,r.kt)("inlineCode",{parentName:"p"},"user.identities.<provider>")),(0,r.kt)("p",{parentName:"li"},"If you didn't use ",(0,r.kt)("inlineCode",{parentName:"p"},"findUserIdentity")," in your code, you can skip this step."),(0,r.kt)("p",{parentName:"li"},"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"findUserIdentity")," to get the identity object, you can directly check if the identity exists on the ",(0,r.kt)("inlineCode",{parentName:"p"},"identities")," object."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"before",label:"Before",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { findUserIdentity, AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  const usernameIdentity = findUserIdentity(user, 'username')\n  if (usernameIdentity) {\n    // ...\n  }\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"import { findUserIdentity } from 'wasp/auth'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n    const usernameIdentity = findUserIdentity(context.user, 'username')\n    if (usernameIdentity) {\n        // ...\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"after",label:"After",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { AuthUser } from 'wasp/auth'\n\nconst MainPage = ({ user }: { user: AuthUser }) => {\n  if (user.identities.username) {\n    // ...\n  }\n}\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/tasks.ts",title:"src/tasks.ts"},"export const createTask: CreateTask<...>  = async (args, context) => {\n    if (context.user.identities.username) {\n        // ...\n    }\n}\n")))))),(0,r.kt)("h3",{id:"migrate-the-database"},"Migrate the database"),(0,r.kt)("p",null,"Finally, you can ",(0,r.kt)("strong",{parentName:"p"},"Run the Wasp CLI")," to regenerate the new Prisma client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"This command generates the Prisma client based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file."),(0,r.kt)("p",null,"Read more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.15.0/data-model/prisma-file"},"Prisma Schema File")," and how Wasp uses it to generate the database schema and Prisma client."),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("p",null,"You should now be able to run your app with the new Wasp 0.14.0. We recommend reading through the updated ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.15.0/auth/entities/"},"Accessing User Data")," section to get a better understanding of the new API."))}g.isMDXComponent=!0}}]);