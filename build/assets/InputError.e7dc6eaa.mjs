import{mergeProps as d,useSSRContext as a}from"vue";import{ssrRenderAttrs as m,ssrInterpolate as u}from"vue/server-renderer";import{_ as c}from"./_plugin-vue_export-helper.43be4956.mjs";const t={props:["message"]};function i(r,s,e,p,n,_,f,l){s(`<div${m(d({style:n.message?null:{display:"none"}},p))}><p class="text-sm text-red-600">${u(n.message)}</p></div>`)}const o=t.setup;t.setup=(r,s)=>{const e=a();return(e.modules||(e.modules=new Set)).add("resources/js/Pages/Admin/Media/components/InputError.vue"),o?o(r,s):void 0};const $=c(t,[["ssrRender",i]]);export{$ as default};