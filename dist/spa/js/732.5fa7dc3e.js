(globalThis["webpackChunkquasar_vue3_tsx"]=globalThis["webpackChunkquasar_vue3_tsx"]||[]).push([[732],{6732:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>i});var t=a(9436),s=a(2836),o=a(1748),r=a(4558),n=a.n(r);const i=(0,t.pM)({name:"RegisterPage",setup(){const e=(0,t.KR)(""),l=(0,t.KR)(""),a=(0,t.KR)(""),r=(0,t.KR)(""),i=(0,o.n)(),c=()=>{let t=!0;return a.value="",r.value="",e.value?/\S+@\S+\.\S+/.test(e.value)||(a.value="Email is invalid",t=!1):(a.value="Email is required",t=!1),l.value?l.value.length<6&&(r.value="Password must be at least 6 characters",t=!1):(r.value="Password is required",t=!1),t},u=async()=>{c()&&await i.register(e.value,l.value)},p=e=>{"Enter"===e.key&&(console.log("ENTER"),u())};return()=>(0,t.bF)("div",{class:"bg-[#f6f5f3] h-[100vh] flex flex-wrap flex-row justify-center items-center"},[(0,t.bF)("div",{class:"w-[1170px] max-w-[calc(100%-48px)] mx-auto flex flex-wrap flex-row justify-center items-center"},[(0,t.bF)("div",{class:"logo px-20 "},[(0,t.bF)("div",{class:"py-8 bg-[#ffff] rounded-[70px] relative h-[430px] max-w-[390px] min-w-[400px]"},[(0,t.bF)("img",{src:n(),alt:"logo-bg",class:"h-[370px] w-[440px] absolute left-[50px]"},null)])]),(0,t.bF)("div",{class:"py-2 flex flex-col flex-wrap justify-center items-center gap-8"},[(0,t.bF)("div",{class:"bg-[#231c16ff] p-[0.7px] rounded-full shadow-sm"},[(0,t.bF)("div",{class:"bg-[#fedf51] p-1 rounded-full"},[(0,t.bF)("svg",{style:"width: 40px; height: 40px; overflow: visible; opacity: 1; z-index: 1; fill: rgb(35, 28, 22);",viewBox:"0 0 24 24"},[(0,t.bF)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null),(0,t.bF)("path",{d:"M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"},null)])])]),(0,t.bF)("div",null,[(0,t.bF)("p",{class:"text-4xl text-[#231c16ff]",style:"font-family: 'Corben', sans-serif;"},[(0,t.eW)("Organizo")])]),(0,t.bF)("div",{class:"px-5 py-5 bg-[#fff] rounded-2xl h-[50%] flex flex-col flex-nowrap justify-between items-center gap-2 max-h-[290px] min-h-[290px] w-[70%] min-w-[300px]"},[(0,t.bF)("div",null,[(0,t.bF)("p",{class:"text-xl"},[(0,t.eW)("Sign up")])]),(0,t.bF)("div",{class:"flex flex-col justify-center flex-wrap gap-3 w-full mt-[-10px]"},[(0,t.bF)("div",{class:"text-[#424242ff]"},[(0,t.bF)("label",{for:"email",class:"block"},[(0,t.eW)("Email")]),(0,t.bo)((0,t.bF)("input",{id:"email",type:"email","onUpdate:modelValue":l=>e.value=l,placeholder:"Your email",class:"w-full px-2 py-1 bg-[#f6f5f3] mt-2 rounded-xl",onKeyup:p},null),[[t.Jo,e.value]]),a.value&&(0,t.bF)("p",{class:"text-red-500 text-sm"},[a.value])]),(0,t.bF)("div",{class:"text-[#424242ff]"},[(0,t.bF)("label",{for:"password",class:"block"},[(0,t.eW)("Password")]),(0,t.bo)((0,t.bF)("input",{id:"password",type:"password","onUpdate:modelValue":e=>l.value=e,placeholder:"Your password",class:"w-full px-2 py-1 bg-[#f6f5f3] mt-2 rounded-xl",onKeyup:p},null),[[t.Jo,l.value]]),r.value&&(0,t.bF)("p",{class:"text-red-500 text-sm"},[r.value])])]),(0,t.bF)("div",{class:"w-full text-center space-y-1"},[(0,t.bF)("button",{onClick:u,class:"w-full bg-[#fedf51] py-[1px] text-center rounded-full text-xs font-medium border border-black hover:bg-[#ffe574]"},[(0,t.eW)("Sign up"),(0,t.bF)("i",{class:"material-icons text-lg ml-1"},[(0,t.eW)("arrow_right_alt")])]),(0,t.bF)("div",null,[(0,t.bF)("p",{class:"text-xs"},[(0,t.eW)("You have an account?")," ",(0,t.bF)(s.Wk,{to:"/login"},{default:()=>[(0,t.bF)("span",{class:"text-black italic"},[(0,t.eW)("Sign in.")])]})])])])])])])])}})},1748:(e,l,a)=>{"use strict";a.d(l,{n:()=>d});a(6809);var t=a(9436),s=a(705),o=a(4560),r=a(6372),n=a(7483);const i={apiKey:"AIzaSyCyeGQB_nObxWMYPxIUbCp09Slv933ogXY",authDomain:"quasar-project-c858f.firebaseapp.com",projectId:"quasar-project-c858f",storageBucket:"quasar-project-c858f.appspot.com",messagingSenderId:"1096580598574",appId:"1:1096580598574:web:0d21165ae82f6cd37b88bf"},c=(0,r.Wp)(i),u=(0,n.xI)(c);(0,o.zj)((({app:e})=>{e.config.globalProperties.$firebaseAuth=u}));(0,n.hg)(u,(async e=>{if(e){const l=await e.getIdToken();localStorage.setItem("Token",l),localStorage.setItem("user",JSON.stringify(e))}else localStorage.removeItem("user"),localStorage.removeItem("Token")}));var p=a(5058),f=a(2836);const d=(0,s.nY)("auth",(()=>{const e=(0,t.KR)(null),l=(0,t.KR)(localStorage.getItem("authToken")),a=(0,t.KR)(!1),s=(0,f.rd)(),o=async(l,t)=>{a.value=!0;try{const a=await(0,n.eJ)(u,l,t);e.value=a.user,(0,p.y)("Registration successful!","positive")}catch(s){console.error("Registration error:",s),(0,p.y)("Registration failed. Please try again.","negative")}finally{a.value=!1}},r=async(l,t)=>{a.value=!0;try{const a=await(0,n.x9)(u,l,t);e.value=a.user,(0,p.y)("Login successful!","positive"),s.push("/dashboard")}catch(o){console.error("Login error:",o),(0,p.y)("Login failed. Please check your credentials.","negative")}finally{a.value=!1}},i=async()=>{try{await(0,n.CI)(u),e.value=null,l.value=null,(0,p.y)("Logout successful!","positive"),s.push("/login")}catch(a){console.error("Logout error:",a),(0,p.y)("Logout failed. Please try again.","negative")}},c=async()=>{const e=u.currentUser;if(e)try{const a=await e.getIdToken(!0);l.value=a,localStorage.setItem("Token",a),console.log("Token refreshed:",a)}catch(a){console.error("Error refreshing token:",a)}},d=async()=>{const e=u.currentUser;if(e)try{const l=await e.getIdTokenResult(),{expirationTime:a}=l,t=(new Date).getTime(),s=new Date(a).getTime()<t;s?(console.warn("Token has expired."),await c()):console.log("Token is still valid.")}catch(l){console.error("Error checking token expiration:",l)}else console.log("No user is currently signed in.")};return{user:e,loading:a,token:l,register:o,login:r,logout:i,refreshToken:c,checkTokenExpiration:d}}))},5058:(e,l,a)=>{"use strict";a.d(l,{y:()=>o});var t=a(5084);const s=1e3,o=(e,l)=>{t.A.create({type:l,message:e,position:"bottom",timeout:s})}},4558:(e,l,a)=>{e.exports=a.p+"img/image-bg.1a805d2f.png"}}]);