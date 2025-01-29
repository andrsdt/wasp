"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[57815],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),i=n(67294),l=n(86010),r=n(12466),o=n(16550),s=n(91980),p=n(67392),m=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,m.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??d;return c({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),v(e)}),[p,v,l]),tabValues:l}}var h=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==o&&(d(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:u},r,{className:(0,l.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},i.createElement(f,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function b(e){const t=(0,h.Z)();return i.createElement(y,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(50012);function l(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),l=t.lastIndexOf("{"),r=t.slice(l+1,t.length-1),[o,s]=r.split(","),p=t.slice(0,l);return a.createElement("code",null,p+("js"===n?o:s))}},87587:(e,t,n)=>{n.d(t,{Fi:()=>o,Jp:()=>l,Vp:()=>i,aH:()=>r});var a=n(67294);const i=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function l(){return a.createElement(i,{color:"#0b62f5"},"internal")}function r(){return a.createElement(i,{color:"#f59e0b"},"required")}function o(){return a.createElement(i,{color:"#08c47e"},"optional")}},48863:(e,t,n)=>{n.d(t,{A:()=>r,v:()=>o});var a=n(67294),i=n(50012),l=n(49875);function r(e){let{children:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(l.Z,null,t)}function o(e){let{children:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(l.Z,null,t)}},41229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>N,frontMatter:()=>u,metadata:()=>k,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),l=(n(46300),n(85162)),r=n(74866),o=n(87587),s=n(48863);const p={toc:[]},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Dummy Provider is not for production use",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy")," provider is not for production use. It is only meant to be used during development. If you try building your app with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy")," provider, the build will fail.")))}d.isMDXComponent=!0;const u={title:"Sending Emails"},c="Sending Emails",k={unversionedId:"advanced/email/email",id:"version-0.13.0/advanced/email/email",title:"Sending Emails",description:"With Wasp's email-sending feature, you can easily integrate email functionality into your web application.",source:"@site/versioned_docs/version-0.13.0/advanced/email/email.md",sourceDirName:"advanced/email",slug:"/advanced/email/",permalink:"/docs/0.13.0/advanced/email/",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.0/advanced/email/email.md",tags:[],version:"0.13.0",frontMatter:{title:"Sending Emails"},sidebar:"docs",previous:{title:"Deploying Manually",permalink:"/docs/0.13.0/advanced/deployment/manually"},next:{title:"Recurring Jobs",permalink:"/docs/0.13.0/advanced/jobs"}},v={},h=[{value:"Sending Emails",id:"sending-emails-1",level:2},{value:"Providers",id:"providers",level:2},{value:"Using the Dummy Provider",id:"using-the-dummy-provider",level:3},{value:"Using the SMTP Provider",id:"using-the-smtp-provider",level:3},{value:"Using the Mailgun Provider",id:"using-the-mailgun-provider",level:3},{value:"Getting the API Key and Domain",id:"getting-the-api-key-and-domain",level:4},{value:"Using the SendGrid Provider",id:"using-the-sendgrid-provider",level:3},{value:"Getting the API Key",id:"getting-the-api-key",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"<code>emailSender</code> dict",id:"emailsender-dict",level:3},{value:"JavaScript API",id:"javascript-api",level:3}],g={toc:h},f="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-emails"},"Sending Emails"),(0,i.kt)("p",null,"With Wasp's email-sending feature, you can easily integrate email functionality into your web application."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  ...\n  emailSender: {\n    provider: <provider>,\n    defaultFrom: {\n      name: "Example",\n      email: "hello@itsme.com"\n    },\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  ...\n  emailSender: {\n    provider: <provider>,\n    defaultFrom: {\n      name: "Example",\n      email: "hello@itsme.com"\n    },\n  }\n}\n')))),(0,i.kt)("p",null,"Choose from one of the providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dummy")," (development only),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mailgun"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SendGrid")),(0,i.kt)("li",{parentName:"ul"},"or the good old ",(0,i.kt)("inlineCode",{parentName:"li"},"SMTP"),".")),(0,i.kt)("p",null,"Optionally, define the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultFrom")," field, so you don't need to provide it whenever sending an email."),(0,i.kt)("h2",{id:"sending-emails-1"},"Sending Emails"),(0,i.kt)("p",null,"Before jumping into details about setting up various providers, let's see how easy it is to send emails."),(0,i.kt)("p",null,"You import the ",(0,i.kt)("inlineCode",{parentName:"p"},"emailSender")," that is provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp/server/email")," module and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method on it."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/actions/sendEmail.js"',title:'"src/actions/sendEmail.js"'},'import { emailSender } from "wasp/server/email";\n\n// In some action handler...\nconst info = await emailSender.send({\n  from: {\n    name: "John Doe",\n    email: "john@doe.com",\n  },\n  to: "user@domain.com",\n  subject: "Saying hello",\n  text: "Hello world",\n  html: "Hello <strong>world</strong>",\n});\n'))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/actions/sendEmail.ts"',title:'"src/actions/sendEmail.ts"'},'import { emailSender } from "wasp/server/email";\n\n// In some action handler...\nconst info = await emailSender.send({\n  from: {\n    name: "John Doe",\n    email: "john@doe.com",\n  },\n  to: "user@domain.com",\n  subject: "Saying hello",\n  text: "Hello world",\n  html: "Hello <strong>world</strong>",\n});\n')))),(0,i.kt)("p",null,"Read more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method in the ",(0,i.kt)("a",{parentName:"p",href:"#javascript-api"},"API Reference"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method returns an object with the status of the sent email. It varies depending on the provider you use."),(0,i.kt)("h2",{id:"providers"},"Providers"),(0,i.kt)("p",null,"We'll go over all of the available providers in the next section. For some of them, you'll need to set up some env variables. You can do that in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,i.kt)("h3",{id:"using-the-dummy-provider"},"Using the Dummy Provider"),(0,i.kt)(d,{mdxType:"DummyProviderNote"}),(0,i.kt)("p",null,"To speed up development, Wasp offers a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy")," email sender that ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log"),"s the emails in the console. Since it doesn't send emails for real, it doesn't require any setup."),(0,i.kt)("p",null,"Set the provider to ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: Dummy,\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: Dummy,\n  }\n}\n")))),(0,i.kt)("h3",{id:"using-the-smtp-provider"},"Using the SMTP Provider"),(0,i.kt)("p",null,"First, set the provider to ",(0,i.kt)("inlineCode",{parentName:"p"},"SMTP")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SMTP,\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SMTP,\n  }\n}\n")))),(0,i.kt)("p",null,"Then, add the following env variables to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"SMTP_HOST=\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_PORT=\n")),(0,i.kt)("p",null,"Many transactional email providers (e.g. Mailgun, SendGrid but also others) can also use SMTP, so you can use them as well."),(0,i.kt)("h3",{id:"using-the-mailgun-provider"},"Using the Mailgun Provider"),(0,i.kt)("p",null,"Set the provider to ",(0,i.kt)("inlineCode",{parentName:"p"},"Mailgun")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: Mailgun,\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: Mailgun,\n  }\n}\n")))),(0,i.kt)("p",null,"Then, get the Mailgun API key and domain and add them to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,i.kt)("h4",{id:"getting-the-api-key-and-domain"},"Getting the API Key and Domain"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://www.mailgun.com/"},"Mailgun")," and create an account."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://app.mailgun.com/app/account/security/api_keys"},"API Keys")," and create a new API key."),(0,i.kt)("li",{parentName:"ol"},"Copy the API key and add it to your ",(0,i.kt)("inlineCode",{parentName:"li"},".env.server")," file."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://app.mailgun.com/mg/sending/domains"},"Domains")," and create a new domain."),(0,i.kt)("li",{parentName:"ol"},"Copy the domain and add it to your ",(0,i.kt)("inlineCode",{parentName:"li"},".env.server")," file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"MAILGUN_API_KEY=\nMAILGUN_DOMAIN=\n")),(0,i.kt)("h3",{id:"using-the-sendgrid-provider"},"Using the SendGrid Provider"),(0,i.kt)("p",null,"Set the provider field to ",(0,i.kt)("inlineCode",{parentName:"p"},"SendGrid")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.wasp")," file."),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SendGrid,\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"app Example {\n  ...\n  emailSender: {\n    provider: SendGrid,\n  }\n}\n")))),(0,i.kt)("p",null,"Then, get the SendGrid API key and add it to your ",(0,i.kt)("inlineCode",{parentName:"p"},".env.server")," file."),(0,i.kt)("h4",{id:"getting-the-api-key"},"Getting the API Key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://sendgrid.com/"},"SendGrid")," and create an account."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://app.sendgrid.com/settings/api_keys"},"API Keys")," and create a new API key."),(0,i.kt)("li",{parentName:"ol"},"Copy the API key and add it to your ",(0,i.kt)("inlineCode",{parentName:"li"},".env.server")," file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title=".env.server"',title:'".env.server"'},"SENDGRID_API_KEY=\n")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"emailsender-dict"},(0,i.kt)("inlineCode",{parentName:"h3"},"emailSender")," dict"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  ...\n  emailSender: {\n    provider: <provider>,\n    defaultFrom: {\n      name: "Example",\n      email: "hello@itsme.com"\n    },\n  }\n}\n'))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  ...\n  emailSender: {\n    provider: <provider>,\n    defaultFrom: {\n      name: "Example",\n      email: "hello@itsme.com"\n    },\n  }\n}\n')))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"emailSender")," dict has the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"provider: Provider")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The provider you want to use. Choose from ",(0,i.kt)("inlineCode",{parentName:"p"},"Dummy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SMTP"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mailgun")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"SendGrid"),"."),(0,i.kt)(d,{mdxType:"DummyProviderNote"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"defaultFrom: dict")),(0,i.kt)("p",{parentName:"li"},"The default sender's details. If you set this field, you don't need to provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," field when sending an email."))),(0,i.kt)("h3",{id:"javascript-api"},"JavaScript API"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"emailSender")," in ",(0,i.kt)(s.A,{mdxType:"ShowForTs"},"Typescript"),(0,i.kt)(s.v,{mdxType:"ShowForJs"},"JavaScript"),":"),(0,i.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/actions/sendEmail.js"',title:'"src/actions/sendEmail.js"'},'import { emailSender } from "wasp/server/email";\n\n// In some action handler...\nconst info = await emailSender.send({\n  from: {\n    name: "John Doe",\n    email: "john@doe.com",\n  },\n  to: "user@domain.com",\n  subject: "Saying hello",\n  text: "Hello world",\n  html: "Hello <strong>world</strong>",\n});\n'))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/actions/sendEmail.ts"',title:'"src/actions/sendEmail.ts"'},'import { emailSender } from "wasp/server/email";\n\n// In some action handler...\nconst info = await emailSender.send({\n  from: {\n    name: "John Doe",\n    email: "john@doe.com",\n  },\n  to: "user@domain.com",\n  subject: "Saying hello",\n  text: "Hello world",\n  html: "Hello <strong>world</strong>",\n});\n')))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method accepts an object with the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"from: object")),(0,i.kt)("p",{parentName:"li"},"The sender's details. If you set up ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultFrom")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"emailSender")," dict in Wasp file, this field is optional."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name: string")),(0,i.kt)("p",{parentName:"li"},"The name of the sender.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"email: string")),(0,i.kt)("p",{parentName:"li"},"The email address of the sender.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"to: string")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The recipient's email address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"subject: string")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The subject of the email.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"text: string")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The text version of the email.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"html: string")," ",(0,i.kt)(o.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The HTML version of the email"))))}N.isMDXComponent=!0}}]);