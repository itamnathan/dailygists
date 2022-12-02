import{computed as j,mergeProps as J,unref as e,isRef as K,withCtx as s,createVNode as t,openBlock as n,createBlock as l,toDisplayString as w,createCommentVNode as h,Fragment as M,renderList as P,Transition as Q,useSSRContext as W}from"vue";import{ssrRenderAttrs as X,ssrRenderComponent as f,ssrRenderList as Y,ssrRenderClass as Z,ssrInterpolate as _}from"vue/server-renderer";import{usePage as A,Link as y}from"@inertiajs/inertia-vue3";import{Listbox as I,ListboxButton as D,ListboxOptions as F,ListboxOption as R}from"@headlessui/vue";import{ChevronUpDownIcon as V,CheckIcon as g}from"@heroicons/vue/20/solid";const O={__name:"tagsfilter",__ssrInlineRender:!0,setup(B){const v=j(()=>A().props.value.tags),u=j(()=>A().props.value.filter),k=j(()=>A().props.value.activeTag);return(b,L,U,q)=>{L(`<div${X(J({class:""},q))}>`),L(f(e(I),{modelValue:e(k),"onUpdate:modelValue":T=>K(k)?k.value=T:null},{default:s((T,p,S,C)=>{if(p)p(`<div class="relative"${C}>`),p(f(e(D),{class:"relative cursor-default rounded-md bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:s((c,a,m,o)=>{if(a)a(`<div class="flex items-center justify-between space-x-2 px-2 py-2"${o}><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${o}><path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"${o}></path></svg><span class="text-[17px]"${o}> Tag filter</span><span class="pointer-events-none inset-y-0 right-0 flex items-center pr-2"${o}>`),a(f(e(V),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"},null,m,o)),a("</span></div>");else return[t("div",{class:"flex items-center justify-between space-x-2 px-2 py-2"},[(n(),l("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"})])),t("span",{class:"text-[17px]"}," Tag filter"),t("span",{class:"pointer-events-none inset-y-0 right-0 flex items-center pr-2"},[t(e(V),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])])]}),_:1},S,C)),p(f(e(F),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:s((c,a,m,o)=>{if(a)a("<!--[-->"),Y(e(v),r=>{a(f(e(R),{key:r.name,value:r,as:"template"},{default:s(({active:x,selected:i},z,E,G)=>{if(z)z(f(e(y),{href:b.route("forum.tag",{tag:r.slug,filter:e(u)}),class:[x?"bg-amber-100 text-amber-900":"text-gray-900","relative cursor-default select-none"]},{default:s((ee,d,H,$)=>{if(d)d(`<span class="${Z([i?"font-medium":"font-normal","block truncate px-3 py-2 hover:bg-amber-100"])}"${$}>${_(r.name)}</span>`),i?(d(`<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"${$}>`),d(f(e(g),{class:"h-5 w-5","aria-hidden":"true"},null,H,$)),d("</span>")):d("<!---->");else return[t("span",{class:[i?"font-medium":"font-normal","block truncate px-3 py-2 hover:bg-amber-100"]},w(r.name),3),i?(n(),l("span",{key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},[t(e(g),{class:"h-5 w-5","aria-hidden":"true"})])):h("",!0)]}),_:2},E,G));else return[t(e(y),{href:b.route("forum.tag",{tag:r.slug,filter:e(u)}),class:[x?"bg-amber-100 text-amber-900":"text-gray-900","relative cursor-default select-none"]},{default:s(()=>[t("span",{class:[i?"font-medium":"font-normal","block truncate px-3 py-2 hover:bg-amber-100"]},w(r.name),3),i?(n(),l("span",{key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},[t(e(g),{class:"h-5 w-5","aria-hidden":"true"})])):h("",!0)]),_:2},1032,["href","class"])]}),_:2},m,o))}),a("<!--]-->");else return[(n(!0),l(M,null,P(e(v),r=>(n(),l(e(R),{key:r.name,value:r,as:"template"},{default:s(({active:x,selected:i})=>[t(e(y),{href:b.route("forum.tag",{tag:r.slug,filter:e(u)}),class:[x?"bg-amber-100 text-amber-900":"text-gray-900","relative cursor-default select-none"]},{default:s(()=>[t("span",{class:[i?"font-medium":"font-normal","block truncate px-3 py-2 hover:bg-amber-100"]},w(r.name),3),i?(n(),l("span",{key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},[t(e(g),{class:"h-5 w-5","aria-hidden":"true"})])):h("",!0)]),_:2},1032,["href","class"])]),_:2},1032,["value"]))),128))]}),_:1},S,C)),p("</div>");else return[t("div",{class:"relative"},[t(e(D),{class:"relative cursor-default rounded-md bg-white text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:s(()=>[t("div",{class:"flex items-center justify-between space-x-2 px-2 py-2"},[(n(),l("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"})])),t("span",{class:"text-[17px]"}," Tag filter"),t("span",{class:"pointer-events-none inset-y-0 right-0 flex items-center pr-2"},[t(e(V),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])])]),_:1}),t(Q,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:s(()=>[t(e(F),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:s(()=>[(n(!0),l(M,null,P(e(v),c=>(n(),l(e(R),{key:c.name,value:c,as:"template"},{default:s(({active:a,selected:m})=>[t(e(y),{href:b.route("forum.tag",{tag:c.slug,filter:e(u)}),class:[a?"bg-amber-100 text-amber-900":"text-gray-900","relative cursor-default select-none"]},{default:s(()=>[t("span",{class:[m?"font-medium":"font-normal","block truncate px-3 py-2 hover:bg-amber-100"]},w(c.name),3),m?(n(),l("span",{key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"},[t(e(g),{class:"h-5 w-5","aria-hidden":"true"})])):h("",!0)]),_:2},1032,["href","class"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]}),_:1},U)),L("</div>")}}},N=O.setup;O.setup=(B,v)=>{const u=W();return(u.modules||(u.modules=new Set)).add("resources/js/Pages/Forum/threads/tagsfilter.vue"),N?N(B,v):void 0};export{O as default};
