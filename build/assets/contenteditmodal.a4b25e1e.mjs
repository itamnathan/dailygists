import{ref as a,mergeProps as i,useSSRContext as u}from"vue";import{ssrRenderAttrs as c,ssrRenderSlot as m}from"vue/server-renderer";import{useToggle as p}from"@vueuse/shared";import"@inertiajs/inertia-vue3";const n={__name:"contenteditmodal",__ssrInlineRender:!0,setup(s){const t=a(!1);return p(t),(o,e,l,d)=>{e(`<div${c(i({class:"flex items-center gap-x-3"},d))}><div class="relative -mr-3" x-data="{ open: false }" outside="open = false"><button class="p-2 rounded hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg></button>`),t.value?(e('<div class="absolute z-10 top-12 right-1 flex flex-col bg-white rounded shadow w-48">'),m(o.$slots,"default",{},null,e,l),e("</div>")):e("<!---->"),e("</div></div>")}}},r=n.setup;n.setup=(s,t)=>{const o=u();return(o.modules||(o.modules=new Set)).add("resources/js/Components/contenteditmodal.vue"),r?r(s,t):void 0};export{n as default};
