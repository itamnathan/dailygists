import{mergeProps as d,useSSRContext as i}from"vue";import{ssrRenderAttrs as p,ssrRenderSlot as a}from"vue/server-renderer";const s={__name:"DangerButton",__ssrInlineRender:!0,props:{type:{type:String,default:"button"}},setup(t){return(r,e,o,u)=>{e(`<button${p(d({type:t.type,class:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 active:bg-red-600 disabled:opacity-25 transition"},u))}>`),a(r.$slots,"default",{},null,e,o),e("</button>")}}},n=s.setup;s.setup=(t,r)=>{const e=i();return(e.modules||(e.modules=new Set)).add("resources/js/Components/DangerButton.vue"),n?n(t,r):void 0};export{s as _};
