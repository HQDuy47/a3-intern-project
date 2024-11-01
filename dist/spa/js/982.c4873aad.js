(globalThis["webpackChunkquasar_vue3_tsx"]=globalThis["webpackChunkquasar_vue3_tsx"]||[]).push([[982],{3982:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>f});var l=t(9436),s=t(2836),o=t(371);const n=(0,l.pM)({name:"AddTaskModal",props:{showModal:{type:Boolean,required:!0},onClose:{type:Function,required:!0}},setup(e){const a=(new Date).toISOString().split("T")[0],t=(0,o.O)(),s=(0,l.KR)(!1),n=(0,l.KR)(a),i=(0,l.KR)(""),r=(0,l.KR)(!1),u=(0,l.KR)(""),c=(0,l.KR)(""),d=(0,l.KR)(null),p=(0,l.KR)(""),v=(0,l.KR)(""),b=(0,l.KR)(""),g=(0,l.KR)(""),f=(0,l.KR)(""),m=(0,l.KR)(""),h=(0,l.KR)(""),x=[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Charlie",value:"charlie"},{label:"David",value:"david"},{label:"Eve",value:"eve"}],y=(0,l.KR)(x),F=()=>{y.value=x.filter((e=>e.label.toLowerCase().includes(i.value.toLowerCase())))},k=e=>{d.value=e,i.value=e.label,r.value=!1},w=e=>{n.value=e,s.value=!1},T=e=>{const a=new Date;return a.setHours(0,0,0,0),new Date(e)>=a},$=()=>{b.value="",g.value="",f.value="",m.value="",h.value="";let l=!0;u.value||(b.value="Title is required.",l=!1),c.value||(g.value="Description is required.",l=!1),d.value||(f.value="Assignee is required.",l=!1),p.value||(m.value="Priority is required.",l=!1),v.value||(h.value="Type is required.",l=!1),l&&(t.addTask({assignee:d?.value?.label,description:c.value,duedate:n.value||"No due date",priority:p.value,stage:"Not started",title:u.value,type:v.value}),u.value="",c.value="",d.value=null,n.value=a,e.onClose())};return()=>(0,l.bF)((0,l.g2)("q-dialog"),{modelValue:e.showModal,"onUpdate:modelValue":a=>e.showModal=a},{default:()=>[(0,l.bF)("div",{class:"bg-[#f6f5f3]"},[(0,l.bF)("div",{class:"h-[450px] w-[400px] flex flex-col flex-nowrap justify-start"},[(0,l.bF)("div",{class:"flex flex-row justify-between items-center p-4"},[(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer text-[22px]"},[(0,l.eW)("task")]),(0,l.bF)("div",{class:"w-[80%]"},[(0,l.bo)((0,l.bF)("input",{type:"text","onUpdate:modelValue":e=>u.value=e,placeholder:"Name of task",class:"bg-[#fff] px-2 rounded-lg w-full py-1 "+(b.value?"border border-red-500":""),required:!0,"aria-label":"Task name"},null),[[l.Jo,u.value]])]),(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer",onClick:e.onClose},[(0,l.eW)("close")])]),(0,l.bF)("hr",{class:"solid"},null),(0,l.bF)("div",{class:"mt-2 px-4 py-4 flex flex-col gap-4"},[(0,l.bF)("div",{class:"flex flex-row items-center w-full"},[(0,l.bF)("div",{class:"basis-2/5 flex flex-row items-center gap-2"},[(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer"},[(0,l.eW)("timer")]),(0,l.bF)("p",{class:"text-[12px]"},[(0,l.eW)("Day")])]),(0,l.bF)("div",{class:"flex-1 text-sm font-semibold"},[(0,l.bF)("div",{onClick:()=>s.value=!0,class:" cursor-pointer py-[2px] px-2 flex flex-row  flex-nowrap gap-2 border-[1.25px] border-solid border-gray-200 rounded-lg items-center w-[120px]"},[(0,l.bF)("div",{class:"text-[12px] font-semibold "},[n.value||"Today"]),(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer text-lg"},[(0,l.eW)("event")]),(0,l.bF)((0,l.g2)("q-dialog"),{modelValue:s.value,"onUpdate:modelValue":e=>s.value=e},{default:()=>[(0,l.bF)((0,l.g2)("q-card"),null,{default:()=>[(0,l.bF)((0,l.g2)("q-date"),{"model-value":n.value,"onUpdate:modelValue":w,mask:"YYYY-MM-DD",color:"primary",options:T,flat:!0},null),(0,l.bF)((0,l.g2)("q-separator"),null,null),(0,l.bF)((0,l.g2)("q-card-actions"),{align:"right"},{default:()=>[(0,l.bF)((0,l.g2)("q-btn"),{flat:!0,label:"Close",color:"primary",onClick:()=>s.value=!1},null)]})]})]})])])]),(0,l.bF)("div",{class:"flex flex-row items-center w-full"},[(0,l.bF)("div",{class:"basis-2/5 flex flex-row items-center gap-2"},[(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer"},[(0,l.eW)("flag")]),(0,l.bF)("p",{class:"text-[12px]"},[(0,l.eW)("Priority")])]),(0,l.bF)("div",{class:"flex-1 text-[13px] font-semibold"},[(0,l.bo)((0,l.bF)("select",{"onUpdate:modelValue":e=>p.value=e,class:"p-1 rounded-sm "+(m.value?"border border-red-500":"")},[(0,l.bF)("option",{value:"",selected:!0,disabled:!0,hidden:!0},[(0,l.eW)("Select priority")]),(0,l.bF)("option",{value:"High"},[(0,l.eW)("High")]),(0,l.bF)("option",{value:"Medium"},[(0,l.eW)("Medium")]),(0,l.bF)("option",{value:"Low"},[(0,l.eW)("Low")])]),[[l.u1,p.value]])])]),(0,l.bF)("div",{class:"flex flex-row items-center w-full"},[(0,l.bF)("div",{class:"basis-2/5 flex flex-row items-center gap-2"},[(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer"},[(0,l.eW)("checklist")]),(0,l.bF)("p",{class:"text-[12px]"},[(0,l.eW)("Type")])]),(0,l.bF)("div",{class:"flex-1 text-[12px] font-semibold"},[(0,l.bo)((0,l.bF)("select",{"onUpdate:modelValue":e=>v.value=e,class:"p-1 rounded-sm "+(h.value?"border border-red-500":"")},[(0,l.bF)("option",{value:"",selected:!0,disabled:!0,hidden:!0},[(0,l.eW)("Select type")]),(0,l.bF)("option",{value:"Design"},[(0,l.eW)("Design")]),(0,l.bF)("option",{value:"Development"},[(0,l.eW)("Development")]),(0,l.bF)("option",{value:"Documentation"},[(0,l.eW)("Documentation")]),(0,l.bF)("option",{value:"Presentation"},[(0,l.eW)("Presentation")]),(0,l.bF)("option",{value:"Code"},[(0,l.eW)("Code")]),(0,l.bF)("option",{value:"Research"},[(0,l.eW)("Research")])]),[[l.u1,v.value]])])]),(0,l.bF)("div",{class:"flex flex-row items-center w-full"},[(0,l.bF)("div",{class:"basis-2/5 flex flex-row items-center gap-2"},[(0,l.bF)("i",{class:"material-icons-outlined cursor-pointer"},[(0,l.eW)("person")]),(0,l.bF)("p",{class:"text-[12px]"},[(0,l.eW)("Assignee")])]),(0,l.bF)("div",{class:"flex-1 text-[12px] font-semibold"},[(0,l.bF)("div",{class:"relative w-[70%]"},[(0,l.bo)((0,l.bF)("input",{type:"text",placeholder:"Assignee...","onUpdate:modelValue":e=>i.value=e,onFocus:()=>r.value=!0,onInput:F,class:"w-full p-2  rounded-sm focus:outline-none "+(f.value?"border border-red-500":""),"aria-label":"Assignee"},null),[[l.Jo,i.value]]),r.value&&y.value.length>0&&(0,l.bF)("div",{class:"absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-sm shadow-lg"},[(0,l.bF)("ul",{class:"max-h-60 overflow-y-auto"},[y.value.map((e=>(0,l.bF)("li",{key:e.value,onClick:()=>k(e),class:"p-2 cursor-pointer hover:bg-blue-100"},[e.label])))])])])])])]),(0,l.bF)("div",{class:"px-4 text-[14px] font-semibold w-full"},[(0,l.bF)("p",null,[(0,l.eW)("Description")]),(0,l.bF)("div",{class:"w-full mt-2 rounded-3xl"},[(0,l.bo)((0,l.bF)("textarea",{name:"",id:"",rows:"4","onUpdate:modelValue":e=>c.value=e,style:"resize: none",class:"w-full text-sm bg-[#fff] px-2 rounded-lg py-1 font-normal "+(g.value?"border border-red-500":"")},null),[[l.Jo,c.value]])])]),(0,l.bF)("hr",{class:"solid mt-4"},null),(0,l.bF)("div",{class:"flex flex-row justify-end items-center px-4 pt-4"},[(0,l.bF)("button",{class:"bg-[#fedf51] px-3 py-[6px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]",onClick:$},[(0,l.eW)("Create task")])])])])]})}});var i=t(7652),r=t.n(i),u=t(705),c=t(5702),d=t.n(c);const p=(0,l.pM)({name:"Filter",setup(){const e=(0,o.O)(),{searchTerm:a,suggestions:t,page:i}=(0,u.bP)(e),c=(0,l.KR)(!1),p=(0,l.KR)(!0),v=(0,l.KR)(-1),b=()=>{e.setSearchTerm(a.value),i.value=1},g=d().debounce((()=>{p.value=!0,e.setSuggestions(a.value)}),500),f=e=>{a.value=e.title,p.value=!1,v.value=-1,b()},m=e=>{"ArrowDown"===e.key?v.value=(v.value+1)%t.value.length:"ArrowUp"===e.key?v.value=(v.value-1+t.value.length)%t.value.length:"Enter"===e.key&&v.value>=0&&f(t.value[v.value])},h=()=>{c.value=!0},x=()=>{c.value=!1},y=e=>{"Enter"===e.key&&b()};return()=>(0,l.bF)("div",{class:"w-full bg-[#fff] rounded-xl p-2 flex flex-row items-center justify-between min-w-[800px] max-w-[2000px]"},[(0,l.bF)("div",{class:"w-[40%]"},[(0,l.bF)(s.Wk,{to:"/my-tasks"},{default:()=>[(0,l.bF)("div",{class:"bg-[#f6f5f3] rounded-xl w-full px-2 py-1 relative"},[(0,l.bF)("i",{class:"material-icons text-lg px-1"},[(0,l.eW)("search")]),(0,l.bo)((0,l.bF)("input",{type:"text","onUpdate:modelValue":e=>a.value=e,placeholder:"Search",class:" px-2 py-1 w-[80%] bg-[#f6f5f3] outline-none",onKeyup:y,onKeydown:m,onInput:g},null),[[l.Jo,a.value]]),(0,l.bF)("ul",{class:"absolute top-8 left-8 bg-white shadow-md rounded-md mt-1 w-[90%] "},[a.value.length>0&&t.value.length>0&&p.value&&t.value.map(((e,a)=>(0,l.bF)("li",{key:e.id,class:["p-2 cursor-pointer text-sm",v.value===a?"bg-gray-200":"hover:bg-gray-100"],onClick:()=>f(e)},[e.title])))])])]})]),(0,l.bF)("div",{class:"flex flex-row items-center justify-between gap-6"},[(0,l.bF)(s.Wk,{to:"/my-tasks"},{default:()=>[(0,l.bF)("button",{class:" bg-[#fedf51] px-3 py-[2px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]",onClick:h},[(0,l.bF)("i",{class:"material-icons text-lg"},[(0,l.eW)("add")]),"  ",(0,l.eW)("New task")])]}),(0,l.bF)("i",{class:"material-icons-outlined text-3xl"},[(0,l.eW)("mail")]),(0,l.bF)("p",null,[(0,l.eW)("Hi, "),(0,l.bF)("span",null,[(0,l.eW)("Quoc Duy")])]),(0,l.bF)(s.Wk,{to:"#!"},{default:()=>[(0,l.bF)("img",{src:r(),alt:"ava1",class:"h-8 w-8 rounded-full "},null)]})]),(0,l.bF)(n,{showModal:c.value,onClose:x},null)])}});var v=t(1748);const b=(0,l.pM)({name:"Sidebar",setup(){const e=(0,s.lq)(),a=[{path:"/dashboard",label:"Dashboard",icon:"space_dashboard"},{path:"/my-tasks",label:"My tasks",icon:"task_alt"},{path:"/notifications",label:"Notifications",icon:"notifications_active"}],t=a=>(0,l.EW)((()=>e.path===a)),o=(0,v.n)(),n=()=>{window.location.reload(),o.logout()};return()=>(0,l.bF)("div",{class:"basis-1/5 bg-[#fff] rounded-2xl h-[92vh] flex flex-col justify-between max-h-[600px] min-h-[500px] max-w-[200px] min-w-[200px]"},[(0,l.bF)("div",null,[(0,l.bF)("div",{class:"flex justify-center items-center gap-3 p-4 justify-self-start"},[(0,l.bF)("div",{class:"bg-[#231c16ff] p-[0.7px] rounded-full shadow-sm"},[(0,l.bF)("div",{class:"bg-[#fedf51] p-1 rounded-full"},[(0,l.bF)("svg",{style:"width: 16px; height: 16px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(35, 28, 22);",viewBox:"0 0 24 24"},[(0,l.bF)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null),(0,l.bF)("path",{d:"M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"},null)])])]),(0,l.bF)("p",{class:"text-lg mt-[-5px]",style:"font-family: 'Corben', sans-serif;"},[(0,l.eW)("Organizo")])]),a.map((e=>(0,l.bF)("div",{class:(t(e.path).value?"bg-[#fcf8ec]":"")+" hover:bg-[#fcf8ec]"},[(0,l.bF)("hr",{class:"solid"},null),(0,l.bF)(s.Wk,{to:e.path,class:"relative group "},{default:()=>[(0,l.bF)("div",{class:"flex justify-center items-center gap-4 p-4 justify-self-start "},[(0,l.bF)("i",{class:"material-icons-outlined"},[e.icon]),(0,l.bF)("p",{class:"text-sm font-medium mt-[-5px]"},[e.label])]),(0,l.bF)("div",{className:"absolute left-0 top-0 h-full w-1  transition-transform duration-300 bg-[#fedf51]  "+(t(e.path).value?"scale-x-75":"scale-x-0")},null)]})])))]),(0,l.bF)("div",null,[(0,l.bF)("div",{class:"hover:bg-[#fcf8ec]"},[(0,l.bF)(s.Wk,{to:"#!",class:"relative group "},{default:()=>[(0,l.bF)("div",{class:"flex justify-center items-center gap-4 p-4 justify-self-start "},[(0,l.bF)("i",{class:"material-icons-outlined"},[(0,l.eW)("tune")]),(0,l.bF)("p",{class:"text-sm font-medium mt-[-5px]"},[(0,l.eW)("Settings")])])]})]),(0,l.bF)("div",{class:"hover:bg-[#fcf8ec]"},[(0,l.bF)("hr",{class:"solid"},null),(0,l.bF)("div",{class:"flex justify-center items-center gap-4 p-4 justify-self-start cursor-pointer",onClick:n},[(0,l.bF)("i",{class:"material-icons-outlined"},[(0,l.eW)("logout")]),(0,l.bF)("p",{class:"text-sm font-medium mt-[-5px]"},[(0,l.eW)("Log out")])])])])])}}),g=(0,l.pM)({name:"MainLayout",setup(){return()=>(0,l.bF)("div",{class:"bg-[#f6f5f3] h-[100vh] p-6"},[(0,l.bF)("div",{class:"w-[1170px] max-w-[calc(100%-48px)] mx-auto flex flex-nowrap flex-row "},[(0,l.bF)(b,null,null),(0,l.bF)("div",{class:"flex-1 pl-4  max-h-[600px] min-h-[500px] "},[(0,l.bF)(p,null,null),(0,l.bF)(s.Tp,null,null)])])])}}),f=(0,l.pM)({setup(){return()=>(0,l.bF)(g,null,null)}})},1748:(e,a,t)=>{"use strict";t.d(a,{n:()=>v});t(6809);var l=t(9436),s=t(705),o=t(4560),n=t(6372),i=t(7483);const r={apiKey:"AIzaSyCyeGQB_nObxWMYPxIUbCp09Slv933ogXY",authDomain:"quasar-project-c858f.firebaseapp.com",projectId:"quasar-project-c858f",storageBucket:"quasar-project-c858f.appspot.com",messagingSenderId:"1096580598574",appId:"1:1096580598574:web:0d21165ae82f6cd37b88bf"},u=(0,n.Wp)(r),c=(0,i.xI)(u);(0,o.zj)((({app:e})=>{e.config.globalProperties.$firebaseAuth=c}));(0,i.hg)(c,(async e=>{if(e){const a=await e.getIdToken();localStorage.setItem("Token",a),localStorage.setItem("user",JSON.stringify(e))}else localStorage.removeItem("user"),localStorage.removeItem("Token")}));var d=t(5058),p=t(2836);const v=(0,s.nY)("auth",(()=>{const e=(0,l.KR)(null),a=(0,l.KR)(localStorage.getItem("authToken")),t=(0,l.KR)(!1),s=(0,p.rd)(),o=async(a,l)=>{t.value=!0;try{const t=await(0,i.eJ)(c,a,l);e.value=t.user,(0,d.y)("Registration successful!","positive")}catch(s){console.error("Registration error:",s),(0,d.y)("Registration failed. Please try again.","negative")}finally{t.value=!1}},n=async(a,l)=>{t.value=!0;try{const t=await(0,i.x9)(c,a,l);e.value=t.user,(0,d.y)("Login successful!","positive"),s.push("/dashboard")}catch(o){console.error("Login error:",o),(0,d.y)("Login failed. Please check your credentials.","negative")}finally{t.value=!1}},r=async()=>{try{await(0,i.CI)(c),e.value=null,a.value=null,(0,d.y)("Logout successful!","positive"),s.push("/login")}catch(t){console.error("Logout error:",t),(0,d.y)("Logout failed. Please try again.","negative")}},u=async()=>{const e=c.currentUser;if(e)try{const t=await e.getIdToken(!0);a.value=t,localStorage.setItem("Token",t),console.log("Token refreshed:",t)}catch(t){console.error("Error refreshing token:",t)}},v=async()=>{const e=c.currentUser;if(e)try{const a=await e.getIdTokenResult(),{expirationTime:t}=a,l=(new Date).getTime(),s=new Date(t).getTime()<l;s?(console.warn("Token has expired."),await u()):console.log("Token is still valid.")}catch(a){console.error("Error checking token expiration:",a)}else console.log("No user is currently signed in.")};return{user:e,loading:t,token:a,register:o,login:n,logout:r,refreshToken:u,checkTokenExpiration:v}}))},371:(e,a,t)=>{"use strict";t.d(a,{O:()=>x});var l=t(705),s=t(9436);const o="\nquery GetTasks {\n tasks_aggregate {\n      aggregate {\n        count\n      }\n    }\n}\n    \n",n="\nmutation InsertTasks($assignee: String, $description: String, $duedate: date, $priority: String, $stage: String, $title: String, $type: String) {\n  insert_tasks(objects: {assignee:$assignee, description: $description, duedate: $duedate,  priority: $priority, stage: $stage, title: $title, type: $type}) {\n    affected_rows\n    returning {\n      id\n      title\n      description\n      type\n      duedate\n      stage\n      priority\n      assignee\n      ischecked\n    }\n  }\n}\n",i="\nmutation UpdateTaskDuedateStage( $id: String, $duedate: date, $stage: String) {\n  update_tasks(where: {id: {_eq: $id }}, _set: {duedate: $duedate, stage: $stage}) {\n    affected_rows\n    returning {\n      id\n      duedate\n      stage\n    }\n  }\n}\n",r="\nmutation UpdateTaskIsChecked($id: String, $ischecked: Boolean!) {\n  update_tasks(where: {id: {_eq: $id}}, _set: {ischecked: $ischecked}) {\n    affected_rows\n    returning {\n      ischecked\n    }\n  }\n}\n",u="\nmutation DeleteTaskById($id: String) {\n  delete_tasks(where: { id: { _eq: $id } }) {\n    affected_rows\n  }\n}\n",c="\n query GetTasks($limit: Int, $offset: Int, $searchTerm: String) {\n    tasks(\n      limit: $limit, \n      offset: $offset, \n      where: {\n        _or: [\n          { title: { _ilike: $searchTerm } },\n        ]\n      }\n    ) {\n      id\n      title\n      description\n      type\n      duedate\n      stage\n      priority\n      assignee\n      ischecked\n    }\n  }\n",d="\n  query GetTasks($limit: Int, $offset: Int, $searchTerm: String, $orderBy: [tasks_order_by!]) {\n    tasks(\n      limit: $limit, \n      offset: $offset, \n      where: {\n        _or: [\n          { title: { _ilike: $searchTerm } },\n        ]\n      },\n      order_by: $orderBy\n    ) {\n      id\n      title\n      description\n      type\n      duedate\n      stage\n      priority\n      assignee\n      ischecked\n    }\n  }\n",p="\nquery GetSearchSuggestions($searchTerm: String) {\n  tasks(where: { title: { _ilike: $searchTerm } }, limit: 5) {\n    id\n    title\n  }\n}";var v=t(6281),b=t(1748);const g="https://relaxed-gazelle-42.hasura.app/v1/graphql",f="EdcCAwK8VW5WbhVT6BbiAXe7WUptIEg2eRKRQ6mo6EUovr4eF5UY6XYIj3e3LxFy";async function m(e,a={}){const t=(0,b.n)(),l=localStorage.getItem("Token");if(!l)throw new Error("No token found. Please log in.");await t.checkTokenExpiration();try{const t=await v.A.post(g,{query:e,variables:a},{headers:{Authorization:`Bearer ${l}`,"Content-Type":"application/json","x-hasura-admin-secret":f}});return t.data}catch(s){throw console.error("Error fetching data from Hasura:",s),s}}var h=t(5058);const x=(0,l.nY)("task",(()=>{const e=(0,s.KR)([]),a=(0,s.KR)(1),t=(0,s.KR)(7),l=(0,s.KR)(0),v=(0,s.KR)(""),b=(0,s.KR)([]),g=async()=>{try{const e=await m(o);l.value=e.data.tasks_aggregate?.aggregate?.count||0}catch(e){console.log(e)}},f=async(a=1,t=10,l="")=>{const s=(a-1)*t;try{const a=await m(c,{limit:t,offset:s,searchTerm:`%${l}%`});e.value=a.data.tasks}catch(o){console.log(o)}},x=async(a=1,t=10,l="",s=[])=>{const o=(a-1)*t;try{const a=await m(d,{limit:t,offset:o,searchTerm:`%${l}%`,orderBy:s});e.value=a.data.tasks}catch(n){console.log(n)}},y=async a=>{try{await m(n,a);const s={id:"",title:a.title||"",description:a.description||"",assignee:a.assignee||"",team:"",type:a.type||"",stage:a.stage||"",priority:a.priority||"",duedate:a.duedate||"",ischecked:!1};e.value=[...e.value,s],l.value+=1,e.value.length>t.value&&T(),(0,h.y)("Add task success","positive")}catch(s){console.log(s)}},F=async(a,t,l)=>{try{await m(i,{id:a,duedate:t,stage:l});const s=e.value.findIndex((e=>e.id===a));e.value[s].duedate=t,e.value[s].stage=l,(0,h.y)("Update task success","positive")}catch(s){console.log(s)}},k=async(a,t)=>{const l=!t;try{const t=await m(r,{id:a,ischecked:l});if(t.data.update_tasks.affected_rows>0){const t=e.value.findIndex((e=>e.id===a));e.value[t].ischecked=l,(0,h.y)("Task check status updated","positive")}}catch(s){console.error("Error updating task check status:",s)}},w=async a=>{try{await m(u,{id:a}),e.value=e.value.filter((e=>e.id!==a)),l.value-=1,e.value.length<1&&(console.log(e.value.length,t.value),$()),(0,h.y)("Task deleted","positive")}catch(s){console.error("Error deleting task:",s)}},T=()=>{a.value*t.value<l.value&&(a.value+=1,f(a.value,t.value))},$=()=>{a.value>1&&(a.value-=1,f(a.value,t.value))},W=async e=>{try{const a=await m(p,{searchTerm:`%${e}%`});b.value=a.data.tasks}catch(a){console.log(a)}},S=s=>{v.value=s,f(a.value,t.value,s),s?l.value=e.value.length:g()},R=e=>{W(e)};return{tasks:e,addTask:y,updateTaskDuedateStage:F,toggleTaskCheck:k,deleteTaskById:w,page:a,totalTasks:l,pageSize:t,nextPage:T,previousPage:$,getTotalTasks:g,getTasks:f,searchTerm:v,setSearchTerm:S,suggestions:b,setSuggestions:R,getSortedTasks:x}}))},5058:(e,a,t)=>{"use strict";t.d(a,{y:()=>o});var l=t(5084);const s=1e3,o=(e,a)=>{l.A.create({type:a,message:e,position:"bottom",timeout:s})}},7652:(e,a,t)=>{e.exports=t.p+"img/ava1.528c4f6b.png"}}]);