import{ref as y,withCtx as A,unref as a,createVNode as r,withModifiers as M,withDirectives as u,vModelText as g,openBlock as v,createBlock as x,createCommentVNode as h,createTextVNode as F,useSSRContext as z}from"vue";import{ssrRenderComponent as b,ssrRenderAttr as c,ssrInterpolate as j,ssrIncludeBooleanAttr as B}from"vue/server-renderer";import{_ as D}from"./AdminLayout.37b53da2.mjs";import{ColorPicker as k}from"vue3-colorpicker";import{useForm as E}from"@inertiajs/inertia-vue3";import{u as q,F as w}from"./FileManager.22fc9581.mjs";import{storeToRefs as L}from"pinia";import"@inertiajs/inertia";import"@vue/reactivity";import"./useDetictingMobile.b2e015eb.mjs";import"./settings.4b7d87d4.mjs";import"./usermenu.66c565d8.mjs";import"@headlessui/vue";import"@heroicons/vue/24/outline";import"./DirectoryNav.e3161542.mjs";import"./_plugin-vue_export-helper.43be4956.mjs";import"./DeleteModal.ff36b371.mjs";import"./InputModal.517355de.mjs";import"./Input.c13e1950.mjs";import"./Label.ea13edbe.mjs";import"./InputError.e7dc6eaa.mjs";import"./PreviewModal.65dfd87f.mjs";import"./Select.8e9357d0.mjs";import"./SimpleModal.bea873ea.mjs";const C={__name:"ChannelEdit",__ssrInlineRender:!0,props:["channel"],setup(d){const i=d,n=q(),{selectedmedias:U}=L(n),s=y(!1);function m(){t.image=U.value.slice(-1)}function S(){t.image=""}const p=y("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"),t=E({id:i.channel.id,name:i.channel.name,slug:i.channel.slug,description:i.channel.description,image:i.channel.image,color:i.channel.color});return(N,R,T,V)=>{R(b(D,V,{default:A((P,l,f,e)=>{if(l)l(`<div id="col-container " class="flex m-4"${e}><div id="col-left" class="px-2"${e}><div class="col-wrap"${e}><div class="form-wrap"${e}><h2 class="font-bold mb-6"${e}>Add New Channel</h2><form${e}><div class="grid"${e}><label for="tag-name"${e}>Name</label><input id="name" type="text" size="40" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${c("value",a(t).name)} required${e}><p class="text-xs mb-4"${e}> The name is how it appears on your site. </p></div><div class="grid"${e}><label for="tag-slug"${e}>Slug</label><input id="slug" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" size="40"${c("value",a(t).slug)}${e}><p class="text-xs mb-4"${e}> The \u201Cslug\u201D is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens. </p></div><div class="grid"${e}></div><div${e}><label${e}>Color</label>`),l(b(a(k),{gradientColor:p.value,pureColor:a(t).color},null,f,e)),l(`</div><div class="grid space-y-6 my-4"${e}><label${e}>Cover</label>`),a(t).image?l("<!---->"):(l(`<div type="file" class="bg-gray-100 grid items-center hover:bg-gray-200 py-12 px-6 rounded-lg"${e}><button type="button" class="text-sm"${e}> Set featured image </button>`),l(b(w,{"open-file-manager":s.value,multiple:!1,"onUpdate:openFileManager":o=>s.value=o,"onUpdate:selectedImages":m},null,f,e)),l("</div>")),a(t).image?l(`<div type="file" class="bg-gray-100 grid justify-center items-center hover:bg-gray-200 py-2 px-1 rounded-lg"${e}><img${c("src",a(t).image)} class="h-40 w-40"${e}><button class="text-sm text-red-500 hover:text-white py-1 px-6 border border-red-500 rounded hover:bg-red-500"${e}> Remove </button></div>`):l("<!---->"),l(`</div><div class="grid"${e}><label for="tag-description"${e}>Description</label><textarea id="description" rows="5" cols="40" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${e}>${j(a(t).description)}</textarea><p class="text-xs mb-4"${e}> The description is not prominent by default; however, some themes may show it. </p></div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"${B(a(t).processing)?" disabled":""}${e}> Add New Channel <span class="spinner"${e}></span></button></form></div></div></div></div>`);else return[r("div",{id:"col-container ",class:"flex m-4"},[r("div",{id:"col-left",class:"px-2"},[r("div",{class:"col-wrap"},[r("div",{class:"form-wrap"},[r("h2",{class:"font-bold mb-6"},"Add New Channel"),r("form",{onSubmit:M(o=>{a(t).post(N.route("backend.article.channel.update",a(t).id),{preserveScroll:!0,onSuccess:()=>{a(t).defaults({id:null,name:null,slug:null,description:null,image:null,color:null}),a(t).reset()}})},["prevent"])},[r("div",{class:"grid"},[r("label",{for:"tag-name"},"Name"),u(r("input",{id:"name",type:"text",size:"40",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":o=>a(t).name=o,required:""},null,8,["onUpdate:modelValue"]),[[g,a(t).name]]),r("p",{class:"text-xs mb-4"}," The name is how it appears on your site. ")]),r("div",{class:"grid"},[r("label",{for:"tag-slug"},"Slug"),u(r("input",{id:"slug",type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",size:"40","onUpdate:modelValue":o=>a(t).slug=o},null,8,["onUpdate:modelValue"]),[[g,a(t).slug]]),r("p",{class:"text-xs mb-4"}," The \u201Cslug\u201D is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens. ")]),r("div",{class:"grid"}),r("div",null,[r("label",null,"Color"),r(a(k),{gradientColor:p.value,pureColor:a(t).color},null,8,["gradientColor","pureColor"])]),r("div",{class:"grid space-y-6 my-4"},[r("label",null,"Cover"),a(t).image?h("",!0):(v(),x("div",{key:0,type:"file",class:"bg-gray-100 grid items-center hover:bg-gray-200 py-12 px-6 rounded-lg"},[r("button",{type:"button",onClick:o=>s.value=!s.value,class:"text-sm"}," Set featured image ",8,["onClick"]),r(w,{"open-file-manager":s.value,multiple:!1,"onUpdate:openFileManager":o=>s.value=o,"onUpdate:selectedImages":m},null,8,["open-file-manager","onUpdate:openFileManager"])])),a(t).image?(v(),x("div",{key:1,type:"file",class:"bg-gray-100 grid justify-center items-center hover:bg-gray-200 py-2 px-1 rounded-lg"},[r("img",{src:a(t).image,class:"h-40 w-40"},null,8,["src"]),r("button",{class:"text-sm text-red-500 hover:text-white py-1 px-6 border border-red-500 rounded hover:bg-red-500",onClick:S}," Remove ")])):h("",!0)]),r("div",{class:"grid"},[r("label",{for:"tag-description"},"Description"),u(r("textarea",{id:"description",rows:"5",cols:"40",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":o=>a(t).description=o},null,8,["onUpdate:modelValue"]),[[g,a(t).description]]),r("p",{class:"text-xs mb-4"}," The description is not prominent by default; however, some themes may show it. ")]),r("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",disabled:a(t).processing},[F(" Add New Channel "),r("span",{class:"spinner"})],8,["disabled"])],40,["onSubmit"])])])])])]}),_:1},T))}}},$=C.setup;C.setup=(d,i)=>{const n=z();return(n.modules||(n.modules=new Set)).add("resources/js/Pages/Admin/Article/Edit/ChannelEdit.vue"),$?$(d,i):void 0};export{C as default};
