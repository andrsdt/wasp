"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6626],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),r=a(86010),i=a(12466),s=a(16550),l=a(91980),p=a(67392),m=a(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function c(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,p]=b({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,m.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=l??u;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var h=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=p[a].value;n!==s&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(f,(0,n.Z)({},e,t)),o.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(50012);function r(e){let{path:t}=e;const[a]=(0,o.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),i=t.slice(r+1,t.length-1),[s,l]=i.split(","),p=t.slice(0,r);return n.createElement("code",null,p+("js"===a?s:l))}},87587:(e,t,a)=>{a.d(t,{Fi:()=>s,Jp:()=>r,Vp:()=>o,aH:()=>i});var n=a(67294);const o=e=>{let{color:t,children:a}=e;return n.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},a)};function r(){return n.createElement(o,{color:"#0b62f5"},"internal")}function i(){return n.createElement(o,{color:"#f59e0b"},"required")}function s(){return n.createElement(o,{color:"#08c47e"},"optional")}},48863:(e,t,a)=>{a.d(t,{A:()=>i,v:()=>s});var n=a(67294),o=a(50012),r=a(49875);function i(e){let{children:t}=e;const[a]=(0,o.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(r.Z,null,t)}function s(e){let{children:t}=e;const[a]=(0,o.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(r.Z,null,t)}},58156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),r=(a(46300),a(85162)),i=a(74866),s=a(87587),l=a(48863);const p={title:"Recurring Jobs"},m=void 0,u={unversionedId:"advanced/jobs",id:"version-0.12.0/advanced/jobs",title:"Recurring Jobs",description:"In most web apps, users send requests to the server and receive responses with some data. When the server responds quickly, the app feels responsive and smooth.",source:"@site/versioned_docs/version-0.12.0/advanced/jobs.md",sourceDirName:"advanced",slug:"/advanced/jobs",permalink:"/docs/0.12.0/advanced/jobs",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/advanced/jobs.md",tags:[],version:"0.12.0",frontMatter:{title:"Recurring Jobs"},sidebar:"docs",previous:{title:"Sending Emails",permalink:"/docs/0.12.0/advanced/email/"},next:{title:"Web Sockets",permalink:"/docs/0.12.0/advanced/web-sockets"}},c={},d=[{value:"Using Jobs",id:"using-jobs",level:2},{value:"Job Definition and Usage",id:"job-definition-and-usage",level:3},{value:"Recurring Jobs",id:"recurring-jobs",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Declaring Jobs",id:"declaring-jobs",level:3},{value:"JavaScript API",id:"javascript-api",level:3},{value:"Tracking",id:"tracking",level:4}],b={toc:d},k="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In most web apps, users send requests to the server and receive responses with some data. When the server responds quickly, the app feels responsive and smooth."),(0,o.kt)("p",null,"What if the server needs extra time to fully process the request? This might mean sending an email or making a slow HTTP request to an external API. In that case, it's a good idea to respond to the user as soon as possible and do the remaining work in the background."),(0,o.kt)("p",null,"Wasp supports background jobs that can help you with this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jobs persist between server restarts,"),(0,o.kt)("li",{parentName:"ul"},"Jobs can be retried if they fail,"),(0,o.kt)("li",{parentName:"ul"},"Jobs can be delayed until a future time,"),(0,o.kt)("li",{parentName:"ul"},"Jobs can have a recurring schedule.")),(0,o.kt)("h2",{id:"using-jobs"},"Using Jobs"),(0,o.kt)("h3",{id:"job-definition-and-usage"},"Job Definition and Usage"),(0,o.kt)("p",null,"Let's write an example Job that will print a message to the console and return a list of tasks from the database."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start by creating a Job declaration in your ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp")," file:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar"\n  },\n  entities: [Task],\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar"\n  },\n  entities: [Task],\n}\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After declaring the Job, implement its worker function:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/workers/bar.js"',title:'"src/workers/bar.js"'},"export const foo = async ({ name }, context) => {\n  console.log(`Hello ${name}!`)\n  const tasks = await context.entities.Task.findMany({})\n  return { tasks }\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/workers/bar.ts"',title:'"src/workers/bar.ts"'},"import { type MySpecialJob } from 'wasp/server/jobs'\nimport { type Task } from 'wasp/entities'\n\ntype Input = { name: string; }\ntype Output = { tasks: Task[]; }\n\nexport const foo: MySpecialJob<Input, Output> = async ({ name }, context) => {\n  console.log(`Hello ${name}!`)\n  const tasks = await context.entities.Task.findMany({})\n  return { tasks }\n}\n")))),(0,o.kt)("admonition",{parentName:"li",title:"The worker function",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  The worker function must be an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," function. The function's return value represents the Job's result."),(0,o.kt)("p",{parentName:"admonition"},"  The worker function accepts two arguments:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),": The data passed into the job when it's submitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context: { entities }"),": The context object containing entities you put in the Job declaration."))),(0,o.kt)(l.A,{mdxType:"ShowForTs"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"MySpecialJob"),"  is a generic type Wasp generates to help you  correctly type the Job's worker function, ensuring type information about the function's arguments and return value. Read more about type-safe jobs in the ",(0,o.kt)("a",{parentName:"p",href:"#javascript-api"},"Javascript API section"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After successfully defining the job, you can submit work to be done in your ",(0,o.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Operations")," or ",(0,o.kt)("a",{parentName:"p",href:"../project/server-config#setup-function"},"setupFn")," (or any other NodeJS code):"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="someAction.js"',title:'"someAction.js"'},'import { mySpecialJob } from \'wasp/server/jobs\'\n\nconst submittedJob = await mySpecialJob.submit({ job: "Johnny" })\n\n// Or, if you\'d prefer it to execute in the future, just add a .delay().\n// It takes a number of seconds, Date, or ISO date string.\nawait mySpecialJob\n  .delay(10)\n  .submit({ name: "Johnny" })\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="someAction.ts"',title:'"someAction.ts"'},'import { mySpecialJob } from \'wasp/server/jobs\'\n\nconst submittedJob = await mySpecialJob.submit({ job: "Johnny" })\n\n// Or, if you\'d prefer it to execute in the future, just add a .delay().\n// It takes a number of seconds, Date, or ISO date string.\nawait mySpecialJob\n  .delay(10)\n  .submit({ name: "Johnny" })\n')))))),(0,o.kt)("p",null,"And that'is it. Your job will be executed by ",(0,o.kt)("inlineCode",{parentName:"p"},"PgBoss")," as if you called ",(0,o.kt)("inlineCode",{parentName:"p"},'foo({ name: "Johnny" })'),"."),(0,o.kt)("p",null,"In our example, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," takes an argument, but passing arguments to jobs is not a requirement. It depends on how you've implemented your worker function."),(0,o.kt)("h3",{id:"recurring-jobs"},"Recurring Jobs"),(0,o.kt)("p",null,"If you have work that needs to be done on some recurring basis, you can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule")," to your job declaration:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{6-9} title="main.wasp"',"{6-9}":!0,title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar"\n  },\n  schedule: {\n    cron: "0 * * * *",\n    args: {=json { "job": "args" } json=} // optional\n  }\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{6-9} title="main.wasp"',"{6-9}":!0,title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar"\n  },\n  schedule: {\n    cron: "0 * * * *",\n    args: {=json { "job": "args" } json=} // optional\n  }\n}\n')))),(0,o.kt)("p",null,"In this example, you ",(0,o.kt)("em",{parentName:"p"},"don't")," need to invoke anything in ",(0,o.kt)(l.v,{mdxType:"ShowForJs"},"JavaScript"),(0,o.kt)(l.A,{mdxType:"ShowForTs"},"Typescript"),". You can imagine ",(0,o.kt)("inlineCode",{parentName:"p"},'foo({ job: "args" })')," getting automatically scheduled and invoked for you every hour."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"declaring-jobs"},"Declaring Jobs"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar",\n    executorOptions: {\n      pgBoss: {=json { "retryLimit": 1 } json=}\n    }\n  },\n  schedule: {\n    cron: "*/5 * * * *",\n    args: {=json { "foo": "bar" } json=},\n    executorOptions: {\n      pgBoss: {=json { "retryLimit": 0 } json=}\n    }\n  },\n  entities: [Task],\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'job mySpecialJob {\n  executor: PgBoss,\n  perform: {\n    fn: import { foo } from "@src/workers/bar",\n    executorOptions: {\n      pgBoss: {=json { "retryLimit": 1 } json=}\n    }\n  },\n  schedule: {\n    cron: "*/5 * * * *",\n    args: {=json { "foo": "bar" } json=},\n    executorOptions: {\n      pgBoss: {=json { "retryLimit": 0 } json=}\n    }\n  },\n  entities: [Task],\n}\n')))),(0,o.kt)("p",null,"The Job declaration has the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"executor: JobExecutor")," ",(0,o.kt)(s.aH,{mdxType:"Required"})),(0,o.kt)("admonition",{parentName:"li",title:"Job executors",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Our jobs need job executors to handle the ",(0,o.kt)("em",{parentName:"p"},"scheduling, monitoring, and execution"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"PgBoss")," is currently our only job executor, and is recommended for low-volume production use cases. It requires your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.db.system")," to be ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgreSQL"),".")),(0,o.kt)("p",{parentName:"li"},"We have selected ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/"},"pg-boss")," as our first job executor to handle the low-volume, basic job queue workloads many web applications have. By using PostgreSQL (and ",(0,o.kt)("a",{parentName:"p",href:"https://www.2ndquadrant.com/en/blog/what-is-select-skip-locked-for-in-postgresql-9-5/"},"SKIP LOCKED"),") as its storage and synchronization mechanism, it allows us to provide many job queue pros without any additional infrastructure or complex management."),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that pg-boss jobs run alongside your other server-side code, so they are not appropriate for CPU-heavy workloads. Additionally, some care is required if you modify scheduled jobs. Please see pg-boss details below for more information."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"pg-boss details"),(0,o.kt)("p",{parentName:"admonition"},"  pg-boss provides many useful features, which can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/blob/8.4.2/README.md"},"here"),"."),(0,o.kt)("p",{parentName:"admonition"},"  When you add pg-boss to a Wasp project, it will automatically add a new schema to your database called ",(0,o.kt)("inlineCode",{parentName:"p"},"pgboss")," with some internal tracking tables, including ",(0,o.kt)("inlineCode",{parentName:"p"},"job")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule"),". pg-boss tables have a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," column in most tables that will correspond to your Job identifier. Additionally, these tables maintain arguments, states, return values, retry information, start and expiration times, and other metadata required by pg-boss."),(0,o.kt)("p",{parentName:"admonition"},"  If you need to customize the creation of the pg-boss instance, you can set an environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"PG_BOSS_NEW_OPTIONS")," to a stringified JSON object containing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#newoptions"},"these initialization parameters"),". ",(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Setting this overwrites all Wasp defaults, so you must include database connection information as well."),(0,o.kt)("h3",{parentName:"admonition",id:"pg-boss-considerations"},"pg-boss considerations"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Wasp starts pg-boss alongside your web server's application, where both are simultaneously operational. This means that jobs running via pg-boss and the rest of the server logic (like Operations) share the CPU, therefore you should avoid running CPU-intensive tasks via jobs.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Wasp does not (yet) support independent, horizontal scaling of pg-boss-only applications, nor starting them as separate workers/processes/threads."))),(0,o.kt)("li",{parentName:"ul"},"The job name/identifier in your ",(0,o.kt)("inlineCode",{parentName:"li"},".wasp")," file is the same name that will be used in the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," column of pg-boss tables. If you change a name that had a ",(0,o.kt)("inlineCode",{parentName:"li"},"schedule")," associated with it, pg-boss will continue scheduling those jobs but they will have no handlers associated, and will thus become stale and expire. To resolve this, you can remove the applicable row from the ",(0,o.kt)("inlineCode",{parentName:"li"},"schedule")," table in the ",(0,o.kt)("inlineCode",{parentName:"li"},"pgboss")," schema of your database.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you remove a ",(0,o.kt)("inlineCode",{parentName:"li"},"schedule")," from a job, you will need to do the above as well."))),(0,o.kt)("li",{parentName:"ul"},"If you wish to deploy to Heroku, you need to set an additional environment variable called ",(0,o.kt)("inlineCode",{parentName:"li"},"PG_BOSS_NEW_OPTIONS")," to ",(0,o.kt)("inlineCode",{parentName:"li"},'{"connectionString":"<REGULAR_HEROKU_DATABASE_URL>","ssl":{"rejectUnauthorized":false}}'),". This is because pg-boss uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"pg")," extension, which does not seem to connect to Heroku over SSL by default, which Heroku requires. Additionally, Heroku uses a self-signed cert, so we must handle that as well."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js"},"https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"perform: dict")," ",(0,o.kt)(s.aH,{mdxType:"Required"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fn: ExtImport")," ",(0,o.kt)(s.aH,{mdxType:"Required"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"async")," function that performs the work. Since Wasp executes Jobs on the server, the import path must lead to a NodeJS file."),(0,o.kt)("li",{parentName:"ul"},"It receives the following arguments:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args: Input"),": The data passed to the job when it's submitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context: { entities: Entities }"),": The context object containing any declared entities.")))),(0,o.kt)("p",{parentName:"li"},"Here's an example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"perform.fn")," function:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/workers/bar.js"',title:'"src/workers/bar.js"'},"export const foo = async ({ name }, context) => {\n  console.log(`Hello ${name}!`)\n  const tasks = await context.entities.Task.findMany({})\n  return { tasks }\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/workers/bar.ts"',title:'"src/workers/bar.ts"'},"import { type MySpecialJob } from 'wasp/server/jobs'\n\ntype Input = { name: string; }\ntype Output = { tasks: Task[]; }\n\nexport const foo: MySpecialJob<Input, Output> = async (args, context) => {\n  console.log(`Hello ${name}!`)\n  const tasks = await context.entities.Task.findMany({})\n  return { tasks }\n}\n")),(0,o.kt)("p",{parentName:"li"},"Read more about type-safe jobs in the ",(0,o.kt)("a",{parentName:"p",href:"#javascript-api"},"Javascript API section"),".  ")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"executorOptions: dict")),(0,o.kt)("p",{parentName:"li"},"Executor-specific default options to use when submitting jobs. These are passed directly through and you should consult the documentation for the job executor. These can be overridden during invocation with ",(0,o.kt)("inlineCode",{parentName:"p"},"submit()")," or in a ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pgBoss: JSON")),(0,o.kt)("p",{parentName:"li"},"See the docs for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#sendname-data-options"},"pg-boss"),".")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"schedule: dict")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cron: string")," ",(0,o.kt)(s.aH,{mdxType:"Required"})),(0,o.kt)("p",{parentName:"li"},"A 5-placeholder format cron expression string. See rationale for minute-level precision ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#scheduling"},"here"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"If you need help building cron expressions, Check out")," ",(0,o.kt)("em",null,(0,o.kt)("a",{parentName:"p",href:"https://crontab.guru/#0_*_*_*_*"},"Crontab guru"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"args: JSON")),(0,o.kt)("p",{parentName:"li"},"The arguments to pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"perform.fn")," function when invoked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"executorOptions: dict")),(0,o.kt)("p",{parentName:"li"},"Executor-specific options to use when submitting jobs. These are passed directly through and you should consult the documentation for the job executor. The ",(0,o.kt)("inlineCode",{parentName:"p"},"perform.executorOptions")," are the default options, and ",(0,o.kt)("inlineCode",{parentName:"p"},"schedule.executorOptions")," can override/extend those."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"pgBoss: JSON")),(0,o.kt)("p",{parentName:"li"},"See the docs for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#sendname-data-options"},"pg-boss"),".")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"entities: [Entity]")),(0,o.kt)("p",{parentName:"li"},"A list of entities you wish to use inside your Job (similar to ",(0,o.kt)("a",{parentName:"p",href:"../data-model/operations/queries#using-entities-in-queries"},"Queries and Actions"),")."))),(0,o.kt)("h3",{id:"javascript-api"},"JavaScript API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Importing a Job:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="someAction.js"',title:'"someAction.js"'},"import { mySpecialJob } from 'wasp/server/jobs'\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="someAction.ts"',title:'"someAction.ts"'},"import { mySpecialJob, type MySpecialJob } from 'wasp/server/jobs'\n")),(0,o.kt)("admonition",{parentName:"li",title:"Type-safe jobs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Wasp generates a generic type for each Job declaration, which you can use to type your ",(0,o.kt)("inlineCode",{parentName:"p"},"perform.fn")," function. The type is named after the job declaration, and is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp/server/jobs")," module. In the example above, the type is ",(0,o.kt)("inlineCode",{parentName:"p"},"MySpecialJob"),"."),(0,o.kt)("p",{parentName:"admonition"},"The type takes two type arguments:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Input"),": The type of the ",(0,o.kt)("inlineCode",{parentName:"li"},"args")," argument of the ",(0,o.kt)("inlineCode",{parentName:"li"},"perform.fn")," function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Output"),": The type of the return value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"perform.fn")," function.")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"submit(jobArgs, executorOptions)")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"jobArgs: Input"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"executorOptions: object")),(0,o.kt)("p",{parentName:"li"},"Submits a Job to be executed by an executor, optionally passing in a JSON job argument your job handler function receives, and executor-specific submit options."))),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="someAction.js"',title:'"someAction.js"'},'const submittedJob = await mySpecialJob.submit({ job: "args" })\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="someAction.ts"',title:'"someAction.ts"'},'const submittedJob = await mySpecialJob.submit({ job: "args" })\n'))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"delay(startAfter)")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"startAfter: int | string | Date")," ",(0,o.kt)(s.aH,{mdxType:"Required"})),(0,o.kt)("p",{parentName:"li"},"Delaying the invocation of the job handler. The delay can be one of:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Integer: number of seconds to delay. ","[Default 0]"),(0,o.kt)("li",{parentName:"ul"},"String: ISO date string to run at."),(0,o.kt)("li",{parentName:"ul"},"Date: Date to run at.")))),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="someAction.js"',title:'"someAction.js"'},'const submittedJob = await mySpecialJob\n  .delay(10)\n  .submit({ job: "args" }, { "retryLimit": 2 })\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="someAction.ts"',title:'"someAction.ts"'},'const submittedJob = await mySpecialJob\n  .delay(10)\n  .submit({ job: "args" }, { "retryLimit": 2 })\n')))))),(0,o.kt)("h4",{id:"tracking"},"Tracking"),(0,o.kt)("p",null,"The return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"submit()")," is an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmittedJob"),", which has the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jobId"),": The ID for the job in that executor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jobName"),": The name of the job you used in your ",(0,o.kt)("inlineCode",{parentName:"li"},".wasp")," file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"executorName"),": The Symbol of the name of the job executor.")),(0,o.kt)("p",null,"There are also some namespaced, job executor-specific objects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For pg-boss, you may access: ",(0,o.kt)("inlineCode",{parentName:"li"},"pgBoss"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"details()"),": pg-boss specific job detail information. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#getjobbyidid"},"Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cancel()"),": attempts to cancel a job. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#cancelid"},"Reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resume()"),": attempts to resume a canceled job. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/timgit/pg-boss/blob/8.4.2/docs/readme.md#resumeid"},"Reference"))))))}h.isMDXComponent=!0}}]);