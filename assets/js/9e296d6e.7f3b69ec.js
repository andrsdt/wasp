"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[55456],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),s=n(67294),i=n(86010),r=n(12466),o=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:i})?e:null})();(0,s.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var g=n(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},r,{className:(0,i.Z)("tabs__item",T.tabItem,r?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=h(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",T.tabList)},s.createElement(y,(0,a.Z)({},e,t)),s.createElement(v,(0,a.Z)({},e,t)))}function f(e){const t=(0,g.Z)();return s.createElement(b,(0,a.Z)({key:String(t)},e))}},57850:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(65471);function i(e){const{children:t,title:n}=e;return a.createElement(s.Z,null,a.createElement("summary",{mdxType:"summary"},n),t)}},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(50012);function i(e){let{path:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),r=t.slice(i+1,t.length-1),[o,l]=r.split(","),c=t.slice(0,i);return a.createElement("code",null,c+("js"===n?o:l))}},48863:(e,t,n)=>{n.d(t,{A:()=>r,v:()=>o});var a=n(67294),s=n(50012),i=n(49875);function r(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(i.Z,null,t)}function o(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(i.Z,null,t)}},70205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var a=n(87462),s=(n(67294),n(3905)),i=n(46300),r=n(85162),o=n(74866),l=n(44996),c=n(48863),u=n(57850);const p={title:"6. Modifying Data"},d=void 0,m={unversionedId:"tutorial/actions",id:"version-0.16.0/tutorial/actions",title:"6. Modifying Data",description:"In the previous section, you learned about using Queries to fetch data.",source:"@site/versioned_docs/version-0.16.0/tutorial/06-actions.md",sourceDirName:"tutorial",slug:"/tutorial/actions",permalink:"/docs/tutorial/actions",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.16.0/tutorial/06-actions.md",tags:[],version:"0.16.0",sidebarPosition:6,frontMatter:{title:"6. Modifying Data"},sidebar:"docs",previous:{title:"5. Querying the Database",permalink:"/docs/tutorial/queries"},next:{title:"7. Adding Authentication",permalink:"/docs/tutorial/auth"}},k={},h=[{value:"Creating a New Action",id:"creating-a-new-action",level:2},{value:"Declaring an Action",id:"declaring-an-action",level:3},{value:"Implementing an Action",id:"implementing-an-action",level:3},{value:"Invoking the Action on the Client",id:"invoking-the-action-on-the-client",level:2},{value:"A Second Action",id:"a-second-action",level:2}],g={toc:h},T="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(T,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the previous section, you learned about using Queries to fetch data.\nLet's now learn about Actions so you can add and update tasks in the database."),(0,s.kt)("p",null,"In this section, you will create:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A Wasp Action that creates a new task."),(0,s.kt)("li",{parentName:"ol"},"A React form that calls that Action when the user creates a task.")),(0,s.kt)("h2",{id:"creating-a-new-action"},"Creating a New Action"),(0,s.kt)("p",null,"Creating an Action is very similar to creating a Query."),(0,s.kt)("h3",{id:"declaring-an-action"},"Declaring an Action"),(0,s.kt)("p",null,"We must first declare the Action in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction createTask {\n  fn: import { createTask } from "@src/actions",\n  entities: [Task]\n}\n'))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction createTask {\n  fn: import { createTask } from "@src/actions",\n  entities: [Task]\n}\n')))),(0,s.kt)("h3",{id:"implementing-an-action"},"Implementing an Action"),(0,s.kt)("p",null,"Let's now define a ",(0,s.kt)(c.v,{mdxType:"ShowForJs"},"JavaScript"),(0,s.kt)(c.A,{mdxType:"ShowForTs"},"TypeScript")," function for our ",(0,s.kt)("inlineCode",{parentName:"p"},"createTask")," Action:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/actions.js"',title:'"src/actions.js"'},"export const createTask = async (args, context) => {\n  return context.entities.Task.create({\n    data: { description: args.description },\n  })\n}\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/actions.ts"',title:'"src/actions.ts"'},"import { Task } from 'wasp/entities'\nimport { CreateTask } from 'wasp/server/operations'\n\ntype CreateTaskPayload = Pick<Task, 'description'>\n\nexport const createTask: CreateTask<CreateTaskPayload, Task> = async (\n  args,\n  context\n) => {\n  return context.entities.Task.create({\n    data: { description: args.description },\n  })\n}\n")),(0,s.kt)("p",null,"Once again, we've annotated the Action with the ",(0,s.kt)("inlineCode",{parentName:"p"},"CreateTask")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," types generated by Wasp. Just like with queries, defining the types on the implementation makes them available on the frontend, giving us ",(0,s.kt)("strong",{parentName:"p"},"full-stack type safety"),"."))),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We put the function in a new file ",(0,s.kt)(i.Z,{path:"src/actions.{js,ts}",mdxType:"FileExtSwitcher"}),", but we could have put it anywhere we wanted! There are no limitations here, as long as the declaration in the Wasp file imports it correctly and the file is located within ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," directory.")),(0,s.kt)("h2",{id:"invoking-the-action-on-the-client"},"Invoking the Action on the Client"),(0,s.kt)("p",null,"Start by defining a form for creating new tasks."),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/MainPage.jsx"',title:'"src/MainPage.jsx"'},'import { \n  // highlight-next-line\n  createTask, \n  getTasks, \n  useQuery \n} from \'wasp/client/operations\'\n\n// ... MainPage, TaskView, TaskList ...\n\n// highlight-start\nconst NewTaskForm = () => {\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      const target = event.target\n      const description = target.description.value\n      target.reset()\n      await createTask({ description })\n    } catch (err) {\n      window.alert(\'Error: \' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="description" type="text" defaultValue="" />\n      <input type="submit" value="Create task" />\n    </form>\n  )\n}\n// highlight-end\n'))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},'// highlight-next-line\nimport { FormEvent } from \'react\'\nimport { Task } from \'wasp/entities\'\nimport {\n  // highlight-next-line\n  createTask,\n  getTasks,\n  useQuery\n} from \'wasp/client/operations\'\n\n// ... MainPage, TaskView, TaskList ...\n\n// highlight-start\nconst NewTaskForm = () => {\n  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault()\n    try {\n      const target = event.target as HTMLFormElement\n      const description = target.description.value\n      target.reset()\n      await createTask({ description })\n    } catch (err: any) {\n      window.alert(\'Error: \' + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="description" type="text" defaultValue="" />\n      <input type="submit" value="Create task" />\n    </form>\n  )\n}\n// highlight-end\n')))),(0,s.kt)("p",null,"Unlike Queries, you can call Actions directly (without wrapping them in a hook) because they don't need reactivity. The rest is just regular React code."),(0,s.kt)(c.A,{mdxType:"ShowForTs"},(0,s.kt)("p",null,"Finally, because we've previously annotated the Action's server implementation with the correct type, Wasp knows that the ",(0,s.kt)("inlineCode",{parentName:"p"},"createTask")," Action expects a value of type ",(0,s.kt)("inlineCode",{parentName:"p"},"{ description: string }")," (try changing the argument and reading the error message). Wasp also knows that a call to the ",(0,s.kt)("inlineCode",{parentName:"p"},"createTask")," Action returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," but are not using it in this example.")),(0,s.kt)("p",null,"All that's left now is adding this form to the page component:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/MainPage.jsx"',title:'"src/MainPage.jsx"'},"import {\n  createTask,\n  getTasks,\n  useQuery\n} from 'wasp/client/operations'\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      // highlight-next-line\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\n// ... TaskView, TaskList, NewTaskForm ...\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"import { FormEvent } from 'react'\nimport { Task } from 'wasp/entities'\nimport {\n  createTask,\n  getTasks,\n  useQuery\n} from 'wasp/client/operations'\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      // highlight-next-line\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\n// ... TaskList, TaskView, NewTaskForm ...\n")))),(0,s.kt)("p",null,"Great work!"),(0,s.kt)("p",null,"You now have a form for creating new tasks."),(0,s.kt)("p",null,'Try creating a "Build a Todo App in Wasp" task and see it appear in the list below. The task is created on the server and saved in the database.'),(0,s.kt)("p",null,"Try refreshing the page or opening it in another browser. You'll see the tasks are still there!"),(0,s.kt)("img",{alt:"Todo App - creating new task",src:(0,l.Z)("img/todo-app-new-task.png"),style:{border:"1px solid black"}}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"Automatic Query Invalidation",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When you create a new task, the list of tasks is automatically updated to display the new task, even though you haven't written any code that does that! Wasp handles these automatic updates under the hood."),(0,s.kt)("p",{parentName:"admonition"},"When you declared the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"createTask")," operations, you specified that they both use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," entity. So when ",(0,s.kt)("inlineCode",{parentName:"p"},"createTask")," is called, Wasp knows that the data ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks")," fetches may have changed and automatically updates it in the background. This means that ",(0,s.kt)("strong",{parentName:"p"},"out of the box, Wasp keeps all your queries in sync with any changes made through Actions"),"."),(0,s.kt)("p",{parentName:"admonition"},"This behavior is convenient as a default but can cause poor performance in large apps. While there is no mechanism for overriding this behavior yet, it is something that we plan to include in Wasp in the future. This feature is tracked ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/63"},"here"),".")),(0,s.kt)("h2",{id:"a-second-action"},"A Second Action"),(0,s.kt)("p",null,"Our Todo app isn't finished if you can't mark a task as done."),(0,s.kt)("p",null,"We'll create a new Action to update a task's status and call it from React whenever a task's checkbox is toggled."),(0,s.kt)("p",null,"Since we've already created one task together, try to create this one yourself. It should be an Action named ",(0,s.kt)("inlineCode",{parentName:"p"},"updateTask")," that receives the task's ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," and its ",(0,s.kt)("inlineCode",{parentName:"p"},"isDone")," status. You can see our implementation below."),(0,s.kt)(u.Z,{title:"Solution",mdxType:"Collapse"},(0,s.kt)("p",null,"Declaring the Action in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@src/actions",\n  entities: [Task]\n}\n'))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@src/actions",\n  entities: [Task]\n}\n')))),(0,s.kt)("p",null,"Implementing the Action on the server:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/actions.js"',title:'"src/actions.js"'},"// ...\n\nexport const updateTask = async ({ id, isDone }, context) => {\n  return context.entities.Task.update({\n    where: { id },\n    data: {\n      isDone: isDone,\n    },\n  })\n}\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/actions.ts"',title:'"src/actions.ts"'},"import { CreateTask, UpdateTask } from 'wasp/server/operations'\n\n// ...\n\ntype UpdateTaskPayload = Pick<Task, 'id' | 'isDone'>\n\nexport const updateTask: UpdateTask<UpdateTaskPayload, Task> = async (\n  { id, isDone },\n  context\n) => {\n  return context.entities.Task.update({\n    where: { id },\n    data: {\n      isDone: isDone,\n    },\n  })\n}\n"))))),(0,s.kt)("p",null,"You can now call ",(0,s.kt)("inlineCode",{parentName:"p"},"updateTask")," from the React component:"),(0,s.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/MainPage.jsx"',title:'"src/MainPage.jsx"'},"// ...\nimport {\n  // highlight-next-line\n  updateTask,\n  createTask,\n  getTasks,\n  useQuery,\n} from 'wasp/client/operations'\n\n// ... MainPage ...\n\nconst TaskView = ({ task }) => {\n  // highlight-start\n  const handleIsDoneChange = async (event) => {\n    try {\n      await updateTask({\n        id: task.id,\n        isDone: event.target.checked,\n      })\n    } catch (error) {\n      window.alert('Error while updating task: ' + error.message)\n    }\n  }\n  // highlight-end\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        id={String(task.id)}\n        checked={task.isDone}\n        // highlight-next-line\n        onChange={handleIsDoneChange}\n      />\n      {task.description}\n    </div>\n  )\n}\n// ... TaskList, NewTaskForm ...\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/MainPage.tsx"',title:'"src/MainPage.tsx"'},"// highlight-next-line\nimport { FormEvent, ChangeEvent } from 'react'\nimport { Task } from 'wasp/entities'\nimport {\n  // highlight-next-line\n  updateTask,\n  createTask,\n  getTasks,\n  useQuery,\n} from 'wasp/client/operations'\n\n\n// ... MainPage ...\n\nconst TaskView = ({ task }: { task: Task }) => {\n  // highlight-start\n  const handleIsDoneChange = async (event: ChangeEvent<HTMLInputElement>) => {\n    try {\n      await updateTask({\n        id: task.id,\n        isDone: event.target.checked,\n      })\n    } catch (error: any) {\n      window.alert('Error while updating task: ' + error.message)\n    }\n  }\n  // highlight-end\n\n  return (\n    <div>\n      <input\n        type=\"checkbox\"\n        id={String(task.id)}\n        checked={task.isDone}\n        // highlight-next-line\n        onChange={handleIsDoneChange}\n      />\n      {task.description}\n    </div>\n  )\n}\n\n// ... TaskList, NewTaskForm ...\n")))),(0,s.kt)("p",null,"Awesome!\nYou can now mark this task as done."),(0,s.kt)("p",null,"It's time to make one final addition to your app: supporting multiple users."))}y.isMDXComponent=!0}}]);