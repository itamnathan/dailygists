import{e as l,o as n,f as i,k as e,p as _,y as m,D as b,i as u,t as h,$ as x,a0 as f}from"./vendor.ab963d2a.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const w=t=>(x("data-v-ee0bc39d"),t=t(),f(),t),y={class:""},k={key:0,class:"w-full sm:space-x-4 justify-between flex flex-row items-center"},S={class:"w-[67%]"},z=["disabled"],C=w(()=>e("div",{class:"flex justify-center items-center space-x-2 bg-green-600 hover:bg-green-700 duration-500 text-white py-[6px] sm:py-[11px] px-2 sm:px-8 rounded-full"},[e("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",class:"sm:h-[23px] text-white sm:w-[23px] w-6 h-6",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},[e("g",null,[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z"})])]),e("span",null,"Subscribe")],-1)),V=[C],H={key:1,class:"text-greenish text-center mt-4"},M=["textContent"],B={__name:"Subscribe",setup(t){const a=l(""),o=l([]),s=l(!1),r=l(!1);function p(){s.value=!0,o.value=[],r.value=!1,axios.post("/subscribers-api/subscriber",{email:a.value}).then(c=>{s.value=!1,r.value=!0,a.value=void 0}).catch(c=>{o.value=c.response.data.errors,s.value=!1})}return(c,d)=>(n(),i("div",y,[r.value?u("",!0):(n(),i("div",k,[e("div",S,[_(e("input",{"onUpdate:modelValue":d[0]||(d[0]=v=>a.value=v),name:"email",id:"emailinp",type:"text",class:"block z-0 w-full py-2.5 px-0 text-sm text-gray-600 bg-transparent border-0 border-b-[1px] appearance-none dark:border-gray-400 dark:focus:border-primary-100 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:"Your Email",required:""},null,512),[[m,a.value]])]),e("button",{class:b(["w-auto",{loading:s.value}]),onClick:p,disabled:s.value},V,10,z)])),r.value?(n(),i("p",H," Thank you for subscribing! Please verify your email. ")):u("",!0),o.value.email?(n(),i("p",{key:2,class:"text-red-500 text-sm mt-4",textContent:h(o.value.email[0])},null,8,M)):u("",!0)]))}},j=g(B,[["__scopeId","data-v-ee0bc39d"]]);export{j as default};
