import{mergeProps as i,useSSRContext as a}from"vue";import{ssrRenderAttrs as d,ssrRenderSlot as p}from"vue/server-renderer";const n={__name:"PrimaryButton",__ssrInlineRender:!0,props:{type:{type:String,default:"submit"}},setup(t){return(r,e,o,u)=>{e(`<button${d(i({type:t.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},u))}>`),p(r.$slots,"default",{},null,e,o),e("</button>")}}},s=n.setup;n.setup=(t,r)=>{const e=a();return(e.modules||(e.modules=new Set)).add("resources/js/Components/PrimaryButton.vue"),s?s(t,r):void 0};export{n as default};
