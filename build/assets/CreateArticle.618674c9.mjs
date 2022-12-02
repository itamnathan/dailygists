import{defineAsyncComponent as C,computed as g,onBeforeMount as M,ref as $,reactive as N,resolveComponent as D,withCtx as V,unref as o,createVNode as n,isRef as v,openBlock as F,createBlock as H,createCommentVNode as K,withDirectives as O,vModelText as q,useSSRContext as G}from"vue";import{ssrRenderComponent as d,ssrInterpolate as J}from"vue/server-renderer";import{U as L}from"./UploadAdapter.dd9db1de.mjs";import Q from"@ckeditor/ckeditor5-build-classic";import{u as W}from"./editor.79190857.mjs";import{storeToRefs as X}from"pinia";import{CloudArrowUpIcon as k}from"@heroicons/vue/24/solid";import{usePage as x}from"@inertiajs/inertia-vue3";import Y from"mitt";import{_ as Z}from"./FrontendLayout.08ecc123.mjs";import I from"@ckeditor/ckeditor5-vue";import"./menu.37310fbe.mjs";const ee={components:{ckeditor:I.component}},A=Object.assign(ee,{__name:"CreateArticle",__ssrInlineRender:!0,setup(_){const u=C(()=>import("./SetPostSettings.7e9cfade.mjs")),s=C(()=>import("./postsetting.d5d25aa0.mjs")),S=Y();g(()=>x().props.value.entry),g(()=>x().props.value.url);const R=W(),{editor:T,content:l,keywords:te,meta_title:oe,meta_description:ne,opengraph_title:le,opengraph_description:re,opengraph_image:ie,twitter_title:se,twitter_description:ae,twitter_cardtype:de,twitter_image:ue,opengraph_image_width:ce,opengraph_image_height:pe,excerpt:me,slug:fe,visibility:ge,allow_comment:ve,channels:xe,tags:_e,title:c,featured_image:he,publish_date:we,author:ye,published:be}=X(R);M(()=>{T.value=g(()=>x().props.value.editor)});const p=$(!1),h=$();function z(){let r=h.value;r.style.height="18px",r.style.height=r.scrollHeight+"px"}S.on("changed",m());function m(){setTimeout(()=>p.value=!0,1e3),setTimeout(()=>p.value=!1,1500)}let w=Q;const y=N({extraPlugins:[B]});function B(r){r.plugins.get("FileRepository").createUploadAdapter=f=>new L(f)}return(r,f,j,P)=>{const b=D("ckeditor");f(d(Z,P,{aside:V((E,e,a,t)=>{if(e)e(d(o(s),null,null,a,t));else return[n(o(s))]}),default:V((E,e,a,t)=>{if(e)e(`<div class="fixed z-[10] top-1 right-14 sm:hidden flex"${t}>`),p.value?(e(`<button class="hover:shadow-lg saving rounded-lg m-1 px-4 py-2 flex justify-between items-center w-full"${t}>`),e(d(o(k),{class:"h-6 w-6"},null,a,t)),e(`<span class="px-1"${t}>Saving</span></button>`)):e("<!---->"),e(d(o(u),null,null,a,t)),e(`</div><div class=""${t}><div${t}><div${t}><textarea placeholder="Title" class="no-scrollbar w-full py-1 overscroll-x-none resize-none border-0 focus:ring-0 font-serif bg-transparent text-[44px] font-semibold px-0 leading-none"${t}>${J(o(c))}</textarea></div><div${t}>`),e(d(b,{editor:o(w),modelValue:o(l),"onUpdate:modelValue":i=>v(l)?l.value=i:null,onBlur:m,config:y},null,a,t)),e("</div></div></div>");else return[n("div",{class:"fixed z-[10] top-1 right-14 sm:hidden flex"},[p.value?(F(),H("button",{key:0,class:"hover:shadow-lg saving rounded-lg m-1 px-4 py-2 flex justify-between items-center w-full"},[n(o(k),{class:"h-6 w-6"}),n("span",{class:"px-1"},"Saving")])):K("",!0),n(o(u))]),n("div",{class:""},[n("div",null,[n("div",null,[O(n("textarea",{placeholder:"Title","onUpdate:modelValue":i=>v(c)?c.value=i:null,onInput:i=>z(),ref_key:"textarea",ref:h,class:"no-scrollbar w-full py-1 overscroll-x-none resize-none border-0 focus:ring-0 font-serif bg-transparent text-[44px] font-semibold px-0 leading-none"},null,40,["onUpdate:modelValue","onInput"]),[[q,o(c)]])]),n("div",null,[n(b,{editor:o(w),modelValue:o(l),"onUpdate:modelValue":i=>v(l)?l.value=i:null,onBlur:m,config:y},null,8,["editor","modelValue","onUpdate:modelValue","config"])])])])]}),_:1},j))}}}),U=A.setup;A.setup=(_,u)=>{const s=G();return(s.modules||(s.modules=new Set)).add("resources/js/Pages/Article/CreateArticle.vue"),U?U(_,u):void 0};export{A as default};
