import{mergeProps as u,unref as a,withCtx as i,createVNode as f,useSSRContext as c}from"vue";import{ssrRenderAttrs as p,ssrRenderComponent as g,ssrRenderSlot as v}from"vue/server-renderer";import"./ApplicationLogo.d9b05fbe.mjs";import{Link as w}from"@inertiajs/inertia-vue3";const n={__name:"GuestLayout",__ssrInlineRender:!0,setup(r){return(s,e,t,d)=>{e(`<div${p(u({class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},d))}><div>`),e(g(a(w),{href:"/"},{default:i((x,o,L,m)=>{if(o)o(`<img src="/logoo.jpg" class="w-20 h-20 rounded-full" alt="Laraveller Logo"${m}>`);else return[f("img",{src:"/logoo.jpg",class:"w-20 h-20 rounded-full",alt:"Laraveller Logo"})]}),_:1},t)),e('</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">'),v(s.$slots,"default",{},null,e,t),e("</div></div>")}}},l=n.setup;n.setup=(r,s)=>{const e=c();return(e.modules||(e.modules=new Set)).add("resources/js/Layouts/GuestLayout.vue"),l?l(r,s):void 0};export{n as _};