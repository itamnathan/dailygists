import{l as V,a1 as E,e as d,w as F,m as N,B as U,o as a,f as l,k as t,t as m,u as c,z,i as v,F as b,q as k,D as C,p as K,y as L,ad as _,P as R,x as W,$ as q,a0 as O}from"./vendor.ab963d2a.js";import{u as P}from"./ckeditor.a20681db.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const y=r=>(q("data-v-f13b2a9e"),r=r(),O(),r),G={class:"flex justify-between items-center mx-2"},H=y(()=>t("label",{for:"components-form-token-input-1",class:"text-sm pt-4"},"Select Category",-1)),J={key:0,class:"count"},Q=["id"],X={class:"flex flex-auto flex-wrap"},Y=["value"],Z={class:"text-xs font-normal leading-none max-w-full flex-initial"},ee={class:"flex flex-auto flex-row-reverse"},te=["onClick"],oe=y(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2 rotate-45"},[t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),se=[oe],ae={class:"pt-4",tabindex:"-1"},le=["list"],ne={key:1,class:"border-b text-sm text-gray-600"},re={class:"text-xs font-normal leading-none max-w-full flex-initial"},ie={class:"flex flex-auto flex-row-reverse"},ue=["onClick"],de=y(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-x cursor-pointer text-red-300 hover:text-red-600 rounded-full w-4 h-4 ml-2"},[t("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)),ce=[de],pe={__name:"SelectCategory",props:{name:{type:String,default:""},allowCustom:{type:Boolean,default:!0},showCount:{type:Boolean,default:!0}},setup(r){const S=r;V({name:""});const $=P(),{categories:i}=E($),u=d([]),n=d(""),w=Math.random().toString(36).substring(7),h=async e=>{!e||(await axios.post(route("category.store"),{name:e}).then(),g(),n.value="")},B=e=>{if(!!e&&!(!S.allowCustom&&!u.value.includes(e))){if(i.value.includes(e)){j(e);return}i.value.push(e),n.value=""}},T=e=>{i.value.splice(e,1)},x=d(null),j=e=>{x.value=e,setTimeout(()=>x.value=null,1e3),n.value=""},D=d(10),p=d(null),I=()=>{D.value=p.value.clientWidth+15,p.value.scrollTo(p.value.scrollWidth,0)};F(i,()=>R(I),{deep:!0}),N(()=>{g()});function g(){axios.get("/api/categories").then(e=>{let s=[];s=e.data.filter(o=>!u.value.find(f=>o===f)),s.forEach(o=>{u.value.push(o)}),u.value=e.data})}const M=U(()=>u.value?u.value.filter(e=>!i.value.includes(e)):!1);return(e,s)=>(a(),l("div",null,[t("div",G,[H,r.showCount?(a(),l("div",J,[t("span",null,m(c(i).length),1),z(" cats ")])):v("",!0)]),u.value?(a(),l("div",{key:0,id:c(w)},[t("ul",X,[(a(!0),l(b,null,k(c(M),o=>(a(),l("li",{key:o,value:o,class:"flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300"},[t("div",Z,m(o.name),1),t("div",ee,[t("div",{onClick:f=>B(o)},se,8,te)])],8,Y))),128))])],8,Q)):v("",!0),t("div",ae,[t("div",{class:C(["cat-input",{"with-count":r.showCount}])},[e.$page.props.auth.user.type==4||e.$page.props.auth.user.type==6?K((a(),l("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=o),type:"text",list:c(w),placeholder:"create new category....",autocomplete:"off",onKeydown:[s[1]||(s[1]=_(o=>h(n.value),["enter"])),s[2]||(s[2]=_(o=>h(n.value),[","])),s[3]||(s[3]=_(W(o=>h(n.value),["prevent"]),["tab"]))],class:"border-0 border-b-[0.2px] border-gray-900/50 focus:ring-0 focus:border-black"},null,40,le)),[[L,n.value]]):v("",!0),e.$page.props.auth.user.type!=4||e.$page.props.auth.user.type!=6?(a(),l("div",ne," Selected ")):v("",!0),t("ul",{class:"flex-wrap mt-4 no-scrollbar",ref_key:"catsUl",ref:p},[(a(!0),l(b,null,k(c(i),(o,f)=>(a(),l("li",{key:o,class:C(["cat flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300",{duplicate:o===x.value}])},[t("div",re,m(o.name),1),t("div",ie,[t("div",{onClick:fe=>T(f),class:"cursor-pointer"},ce,8,ue)])],2))),128))],512)],2)])]))}},me=A(pe,[["__scopeId","data-v-f13b2a9e"]]);export{me as default};