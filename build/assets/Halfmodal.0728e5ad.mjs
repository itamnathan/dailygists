import{ssrRenderSlot as r,ssrRenderTeleport as a}from"vue/server-renderer";import{ref as f,useSSRContext as u}from"vue";import{useToggle as v}from"@vueuse/shared";import"@inertiajs/inertia-vue3";const n={__name:"Halfmodal",__ssrInlineRender:!0,setup(i){const o=f(!1);return v(o),(t,s,l,c)=>{s("<!--[--><div>"),r(t.$slots,"button",{},null,s,l),s("</div>"),a(s,e=>{e("<div>"),o.value?(e('<div class="flex justify-end text-center overscroll-contain z-[10]"><div class="fixed inset-0 bg-gray-700 z-10 duration-500 bg-opacity-20 ease-in-out transition-all overflow-y-hidden flex justify-center"></div><div class="z-[10] fixed sm:top-0 top-10 right-0 ease-in-out duration-500 min-h-full w-full sm:w-[27%] rounded-xl sm:rounded-none bg-white shadow-xl"><div class="w-full no-scrollbar max-h-screen overflow-y-auto overscroll-y-auto"><div class="flex justify-end pt-4"><div class="flex justify-between"><button class="text-gray-400 hover:text-gray-700 pr-2"><svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" class="kk"><path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path></svg></button></div></div><div class="">'),r(t.$slots,"default",{},null,e,l),e("</div></div></div></div>")):e("<!---->"),e("</div>")},"#modals",!1,l),s("<!--]-->")}}},d=n.setup;n.setup=(i,o)=>{const t=u();return(t.modules||(t.modules=new Set)).add("resources/js/Components/Halfmodal.vue"),d?d(i,o):void 0};export{n as default};
