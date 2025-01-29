"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1981],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(t),f=a,y=l["".concat(p,".").concat(f)]||l[f]||u[f]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46300:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(50012);function o(e){let{path:n}=e;const[t]=(0,a.Nk)("docusaurus.tab.js-ts"),o=n.lastIndexOf("{"),i=n.slice(o+1,n.length-1),[s,p]=i.split(","),c=n.slice(0,o);return r.createElement("code",null,c+("js"===t?s:p))}},23067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));t(46300);const o={title:"Dependencies"},i=void 0,s={unversionedId:"project/dependencies",id:"version-0.15.0/project/dependencies",title:"Dependencies",description:"In a Wasp project, dependencies are defined in a standard way for JavaScript projects: using the package.json file, located at the root of your project. You can list your dependencies under the dependencies or devDependencies fields.",source:"@site/versioned_docs/version-0.15.0/project/dependencies.md",sourceDirName:"project",slug:"/project/dependencies",permalink:"/docs/0.15.0/project/dependencies",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.15.0/project/dependencies.md",tags:[],version:"0.15.0",frontMatter:{title:"Dependencies"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/0.15.0/project/testing"},next:{title:"CSS Frameworks",permalink:"/docs/0.15.0/project/css-frameworks"}},p={},c=[{value:"Adding a New Dependency",id:"adding-a-new-dependency",level:3},{value:"Using Packages that are Already Used by Wasp Internally",id:"using-packages-that-are-already-used-by-wasp-internally",level:3}],d={toc:c},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a Wasp project, dependencies are defined in a standard way for JavaScript projects: using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/configuring-npm/package-json"},"package.json")," file, located at the root of your project. You can list your dependencies under the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," fields."),(0,a.kt)("h3",{id:"adding-a-new-dependency"},"Adding a New Dependency"),(0,a.kt)("p",null,"To add a new package, like ",(0,a.kt)("inlineCode",{parentName:"p"},"date-fns")," (a great date handling library), you use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install date-fns\n")),(0,a.kt)("p",null,"This command will add the package in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.kt)("p",null,"You will notice that there are some other packages in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," section, like ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp"),". These are the packages that Wasp uses internally, and you should not modify or remove them."),(0,a.kt)("h3",{id:"using-packages-that-are-already-used-by-wasp-internally"},"Using Packages that are Already Used by Wasp Internally"),(0,a.kt)("p",null,"In the current version of Wasp, if Wasp is already internally using a certain dependency (e.g. React) with a certain version specified, you are not allowed to define that same npm dependency yourself while specifying ",(0,a.kt)("em",{parentName:"p"},"a different version"),"."),(0,a.kt)("p",null,"If you do that, you will get an error message telling you which exact version you have to use for that dependency.\nThis means Wasp ",(0,a.kt)("em",{parentName:"p"},"dictates exact versions of certain packages"),", so for example you can't choose the version of React you want to use."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We are currently working on a restructuring that will solve this and some other quirks: check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/734"},"issue #734")," to follow our progress.")))}u.isMDXComponent=!0}}]);