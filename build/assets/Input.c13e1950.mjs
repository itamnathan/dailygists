import{mergeProps as d,useSSRContext as i}from"vue";import{ssrRenderAttrs as p}from"vue/server-renderer";import{_ as c}from"./_plugin-vue_export-helper.43be4956.mjs";const o={props:["modelValue"],emits:["update:modelValue"],methods:{focus(){this.$refs.input.focus()}}};function a(t,s,e,n,u,m,f,l){s(`<input${p(d({class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:u.modelValue,ref:"input"},n))}>`)}const r=o.setup;o.setup=(t,s)=>{const e=i();return(e.modules||(e.modules=new Set)).add("resources/js/Pages/Admin/Media/components/Input.vue"),r?r(t,s):void 0};const $=c(o,[["ssrRender",a]]);export{$ as default};