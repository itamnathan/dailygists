import{onMounted as Y,onUnmounted as T,computed as h,ref as E,mergeProps as $,unref as m,useSSRContext as p,withCtx as u,renderSlot as L,createVNode as f,createTextVNode as v,toDisplayString as U,openBlock as q,createBlock as F}from"vue";import{ssrRenderAttrs as P,ssrRenderSlot as g,ssrRenderStyle as j,ssrRenderClass as b,ssrRenderComponent as c,ssrInterpolate as C}from"vue/server-renderer";import{A as M}from"./ApplicationLogo.d9b05fbe.mjs";import{Link as k}from"@inertiajs/inertia-vue3";import"./_plugin-vue_export-helper.43be4956.mjs";const _={__name:"Dropdown",__ssrInlineRender:!0,props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(o){const t=o,e=a=>{l.value&&a.key==="Escape"&&(l.value=!1)};Y(()=>document.addEventListener("keydown",e)),T(()=>document.removeEventListener("keydown",e));const s=h(()=>({48:"w-48"})[t.width.toString()]),i=h(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),l=E(!1);return(a,n,r,d)=>{n(`<div${P($({class:"relative"},d))}><div>`),g(a.$slots,"trigger",{},null,n,r),n(`</div><div style="${j(l.value?null:{display:"none"})}" class="fixed inset-0 z-40"></div><div style="${j([l.value?null:{display:"none"},{display:"none"}])}" class="${b([[m(s),m(i)],"absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${b([o.contentClasses,"rounded-md ring-1 ring-black ring-opacity-5"])}">`),g(a.$slots,"content",{},null,n,r),n("</div></div></div>")}}},N=_.setup;_.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Components/Dropdown.vue"),N?N(o,t):void 0};const y={__name:"DropdownLink",__ssrInlineRender:!0,setup(o){return(t,e,s,i)=>{e(c(m(k),$({class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},i),{default:u((l,a,n,r)=>{if(a)g(t.$slots,"default",{},null,a,n,r);else return[L(t.$slots,"default")]}),_:3},s))}}},O=y.setup;y.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Components/DropdownLink.vue"),O?O(o,t):void 0};const D={__name:"NavLink",__ssrInlineRender:!0,props:["href","active"],setup(o){const t=o,e=h(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(s,i,l,a)=>{i(c(m(k),$({href:o.href,class:m(e)},a),{default:u((n,r,d,x)=>{if(r)g(s.$slots,"default",{},null,r,d,x);else return[L(s.$slots,"default")]}),_:3},l))}}},A=D.setup;D.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Components/NavLink.vue"),A?A(o,t):void 0};const w={__name:"ResponsiveNavLink",__ssrInlineRender:!0,props:["href","active"],setup(o){const t=o,e=h(()=>t.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(s,i,l,a)=>{i(c(m(k),$({href:o.href,class:m(e)},a),{default:u((n,r,d,x)=>{if(r)g(s.$slots,"default",{},null,r,d,x);else return[L(s.$slots,"default")]}),_:3},l))}}},B=w.setup;w.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Components/ResponsiveNavLink.vue"),B?B(o,t):void 0};const R={__name:"AuthenticatedLayout",__ssrInlineRender:!0,setup(o){const t=E(!1);return(e,s,i,l)=>{s(`<div${P(l)}><div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`),s(c(m(k),{href:e.route("dashboard")},{default:u((a,n,r,d)=>{if(n)n(c(M,{class:"block h-9 w-auto"},null,r,d));else return[f(M,{class:"block h-9 w-auto"})]}),_:1},i)),s('</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">'),s(c(D,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:u((a,n,r,d)=>{if(n)n(" Dashboard ");else return[v(" Dashboard ")]}),_:1},i)),s('</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">'),s(c(_,{align:"right",width:"48"},{trigger:u((a,n,r,d)=>{if(n)n(`<span class="inline-flex rounded-md"${d}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${d}>${C(e.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${d}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${d}></path></svg></button></span>`);else return[f("span",{class:"inline-flex rounded-md"},[f("button",{type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},[v(U(e.$page.props.auth.user.name)+" ",1),(q(),F("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[f("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})]))])])]}),content:u((a,n,r,d)=>{if(n)n(c(y,{href:e.route("logout"),method:"post",as:"button"},{default:u((x,S,G,H)=>{if(S)S(" Log Out ");else return[v(" Log Out ")]}),_:1},r,d));else return[f(y,{href:e.route("logout"),method:"post",as:"button"},{default:u(()=>[v(" Log Out ")]),_:1},8,["href"])]}),_:1},i)),s(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${b({hidden:t.value,"inline-flex":!t.value})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${b({hidden:!t.value,"inline-flex":t.value})}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${b([{block:t.value,hidden:!t.value},"sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`),s(c(w,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:u((a,n,r,d)=>{if(n)n(" Dashboard ");else return[v(" Dashboard ")]}),_:1},i)),s(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${C(e.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${C(e.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`),s(c(w,{href:e.route("logout"),method:"post",as:"button"},{default:u((a,n,r,d)=>{if(n)n(" Log Out ");else return[v(" Log Out ")]}),_:1},i)),s("</div></div></div></nav>"),e.$slots.header?(s('<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">'),g(e.$slots,"header",{},null,s,i),s("</div></header>")):s("<!---->"),s("<main>"),g(e.$slots,"default",{},null,s,i),s("</main></div></div>")}}},I=R.setup;R.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Layouts/AuthenticatedLayout.vue"),I?I(o,t):void 0};const V={__name:"Dashboard",__ssrInlineRender:!0,setup(o){return(t,e,s,i)=>{e(c(R,i,{header:u((l,a,n,r)=>{if(a)a(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${r}> Dashboard </h2>`);else return[f("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ")]}),default:u((l,a,n,r)=>{if(a)a(`<div class="py-12"${r}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${r}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${r}><div class="p-6 bg-white border-b border-gray-200"${r}> You&#39;re logged in! </div></div></div></div>`);else return[f("div",{class:"py-12"},[f("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[f("div",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},[f("div",{class:"p-6 bg-white border-b border-gray-200"}," You're logged in! ")])])])]}),_:1},s))}}},z=V.setup;V.setup=(o,t)=>{const e=p();return(e.modules||(e.modules=new Set)).add("resources/js/Pages/Dashboard.vue"),z?z(o,t):void 0};export{V as default};