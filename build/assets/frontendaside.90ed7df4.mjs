import{defineAsyncComponent as f,onMounted as k,mergeProps as C,unref as o,withCtx as u,createVNode as l,toDisplayString as I,useSSRContext as M}from"vue";import{ssrRenderAttrs as j,ssrRenderComponent as i,ssrRenderSlot as T,ssrRenderList as A,ssrInterpolate as G}from"vue/server-renderer";import{Link as H}from"@inertiajs/inertia-vue3";import{u as D}from"./settings.4b7d87d4.mjs";import{storeToRefs as g}from"pinia";import{u as N}from"./menu.37310fbe.mjs";const S={__name:"frontendaside",__ssrInlineRender:!0,setup(m){const d=N(),{header:a,footer:v,category:P}=g(d),$=f(()=>import("./SignUp.37d0dde0.mjs")),b=f(()=>import("./SignIn.afb4ccdf.mjs")),w=f(()=>import("./Morepostfromus.beaa66db.mjs")),R=D();return g(R),k(()=>{}),(c,e,r,L)=>{e(`<div${j(C({class:"w-[27%] hidden md:block relative"},L))}><div class="sticky top-0 no-scrollbar"><div class="grid mx-6 my-4">`),c.$page.props.isLoggedIn?e("<!---->"):(e('<div class="flex justify-between items-center py-2">'),e(i(o($),{design:"w-9/12 flex justify-center rounded-full px-12 py-2 bg-black text-white"},{default:u((t,s,p,n)=>{if(s)s(`<span${n}>Get started</span>`);else return[l("span",null,"Get started")]}),_:1},r)),e(i(o(b),null,{default:u((t,s,p,n)=>{if(s)s(`<button class=""${n}> Sign In </button>`);else return[l("button",{class:""}," Sign In ")]}),_:1},r)),e("</div>")),T(c.$slots,"default",{},null,e,r),e(i(o(w),null,null,r)),e('<div class="flex flex-wrap mt-6 text-xs text-gray-600"><!--[-->'),A(o(v),(t,s)=>{e(i(o(H),{key:s,href:t.href,class:"flex px-1"},{default:u((p,n,U,x)=>{if(n)n(`<span${x}>${t.svg}</span><span${x}>${G(t.name)}</span>`);else return[l("span",{innerHTML:t.svg},null,8,["innerHTML"]),l("span",null,I(t.name),1)]}),_:2},r))}),e("<!--]--></div></div></div></div>")}}},y=S.setup;S.setup=(m,d)=>{const a=M();return(a.modules||(a.modules=new Set)).add("resources/js/Layouts/partials/frontendaside.vue"),y?y(m,d):void 0};export{S as default};
