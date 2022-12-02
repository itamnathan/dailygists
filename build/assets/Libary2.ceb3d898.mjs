import{mergeProps as p,useSSRContext as m}from"vue";import{ssrRenderAttrs as a,ssrRenderComponent as l}from"vue/server-renderer";import{F as u}from"./FileManager.22fc9581.mjs";import"@headlessui/vue";import"@heroicons/vue/24/outline";import"./DirectoryNav.e3161542.mjs";import"./_plugin-vue_export-helper.43be4956.mjs";import"./DeleteModal.ff36b371.mjs";import"./InputModal.517355de.mjs";import"./Input.c13e1950.mjs";import"./Label.ea13edbe.mjs";import"./InputError.e7dc6eaa.mjs";import"./PreviewModal.65dfd87f.mjs";import"./Select.8e9357d0.mjs";import"./SimpleModal.bea873ea.mjs";import"pinia";const i={__name:"Libary2",__ssrInlineRender:!0,setup(t){return(r,e,d,n)=>{e(`<div${a(p({class:"bg-gray-200 h-screen"},n))}><div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"><div><div class="p-6 h-screen sm:px-20 bg-white border-b border-gray-200"><div class="my-6 px-6 flex items-center"><h1 class="text-2xl font-bold m-2">Posts</h1><button class="border rounded-lg px-2 py-2 text-blue-500 border-blue-800"> Open </button></div>`),e(l(u,{"open-file-manager":r.open,multiple:!0,"onUpdate:openFileManager":s=>r.open=s,"onUpdate:selectedImages":s=>r.images=s},null,d)),e("</div></div></div></div></div></div>")}}},o=i.setup;i.setup=(t,r)=>{const e=m();return(e.modules||(e.modules=new Set)).add("resources/js/Pages/Admin/Media/Libary2.vue"),o?o(t,r):void 0};export{i as default};