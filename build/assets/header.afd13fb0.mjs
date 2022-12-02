import{defineAsyncComponent as f,onMounted as A,mergeProps as C,unref as n,withCtx as i,createVNode as o,openBlock as k,createBlock as v,toDisplayString as z,useSSRContext as j}from"vue";import{ssrRenderAttrs as S,ssrRenderComponent as l,ssrRenderList as B,ssrInterpolate as L}from"vue/server-renderer";import{Link as c}from"@inertiajs/inertia-vue3";import{u as R}from"./settings.4b7d87d4.mjs";import{storeToRefs as T}from"pinia";import{u as D}from"./useDetictingMobile.b2e015eb.mjs";import{u as G}from"./menu.37310fbe.mjs";const y={__name:"header",__ssrInlineRender:!0,setup(g){const p=G(),{header:d}=T(p),b=f(()=>import("./mobilenav.3258335e.mjs")),M=f(()=>import("./SignUp.37d0dde0.mjs"));f(()=>import("./SignIn.afb4ccdf.mjs"));let w=D();return R(),A(()=>{}),(u,e,a,$)=>{e(`<nav${S(C({class:"w-full bg-white sticky top-0 z-10 border-b h-14 flex items-center shadow-lg border-gray-200 sm:py-0 sm:px-0 py-4 px-2"},$))}><div class="container flex flex-wrap justify-between items-center mx-auto" bis_skin_checked="1">`),e(l(n(c),{href:"/",class:"flex items-center"},{default:i((t,s,m,r)=>{if(s)s(`<img src="/logoo.jpg" class="mr-3 h-6 sm:h-9 rounded-full"${r}>`);else return[o("img",{src:"/logoo.jpg",class:"mr-3 h-6 sm:h-9 rounded-full"})]}),_:1},a)),e('<div class="flex items-center space-x-1">'),n(w)?e("<!---->"):e(l(n(c),{href:u.route("articles"),class:"flex items-center hover:bg-gray-200 px-2 py-2 rounded"},{default:i((t,s,m,r)=>{if(s)s(`<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${r}><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"${r}></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"${r}></path></svg><span class="px-2"${r}>Trending Articles</span>`);else return[(k(),v("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})])),o("span",{class:"px-2"},"Trending Articles")]}),_:1},a)),n(w)?e("<!---->"):e(l(n(c),{href:u.route("forum"),class:"flex items-center hover:bg-gray-200 px-2 py-2 rounded"},{default:i((t,s,m,r)=>{if(s)s(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" class="w-6 h-6" aria-label="Community"${r}><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"${r}></path></svg><span class="px-2"${r}>Community</span>`);else return[(k(),v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-linecap":"round",class:"w-6 h-6","aria-label":"Community"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})])),o("span",{class:"px-2"},"Community")]}),_:1},a)),u.$page.props.isLoggedIn?e("<!---->"):e(l(n(M),{design:"rounded-full px-4 bg-black py-2 text-white capitalize"},{default:i((t,s,m,r)=>{if(s)s(`<span${r}>Get started</span>`);else return[o("span",null,"Get started")]}),_:1},a)),e('<div class="w-full hidden md:block md:w-auto"><ul class="flex items-center space-x-1"><!--[-->'),B(n(d),(t,s)=>{e("<li>"),e(l(n(c),{href:t.href,class:"block flex rounded hover:bg-gray-200 px-2 py-2 items-center dark:hover:text-white","aria-current":"page"},{default:i((m,r,H,x)=>{if(r)r(`<span${x}>${t.svg}</span><span class="px-2"${x}>${L(t.name)}</span>`);else return[o("span",{innerHTML:t.svg},null,8,["innerHTML"]),o("span",{class:"px-2"},z(t.name),1)]}),_:2},a)),e("</li>")}),e("<!--]--></ul></div>"),e(l(n(b),null,null,a)),e("</div></div></nav>")}}},h=y.setup;y.setup=(g,p)=>{const d=j();return(d.modules||(d.modules=new Set)).add("resources/js/Layouts/partials/header.vue"),h?h(g,p):void 0};export{y as default};
