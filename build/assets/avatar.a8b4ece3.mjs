import{computed as p,ref as s,mergeProps as n,useSSRContext as d}from"vue";import{ssrRenderAttrs as c,ssrRenderStyle as m}from"vue/server-renderer";import"@inertiajs/inertia";import{usePage as v,useForm as f}from"@inertiajs/inertia-vue3";import"./SecondaryButton.1e2440a9.mjs";const o={__name:"avatar",__ssrInlineRender:!0,setup(r){const e=p(()=>v().props.value.auth.user);f({_method:"PUT",avatar:null,cover:null});const t=s(e.value.profile_photo_url);s(null);const a=s(e.value.profile_cover_url);return s(null),(b,i,g,u)=>{i(`<div${c(n({class:"bg-teal-100 w-full sm:h-36 h-24 relative bg-cover",style:"background-image: url("+a.value+");"},u))}><input type="file" class="hidden"><div class="bg-gray-200 text-sm flex items-center justify-center rounded-full opacity-50 w-8 h-8 absolute top-6 right-6"> edit </div><div class="w-full flex justify-center h-4 bg-white backdrop-blur-sm bg-opacity-10 absolute sm:px-14 px-4 sm:top-[140px] top-[89px]"></div><div class="w-full flex justify-center sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]"><div class="capitalize text-[46px] font-bold"><input type="file" class="hidden"><div class="mt-2 relative"><span class="block sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400 bg-cover bg-no-repeat bg-center" style="${m("background-image: url('"+t.value+"');")}"></span><div class="bg-gray-200 text-sm flex items-center justify-center rounded-full opacity-50 w-8 h-8 absolute sm:top-6 top-0 sm:right-6 right-0"> edit </div></div></div></div></div>`)}}},l=o.setup;o.setup=(r,e)=>{const t=d();return(t.modules||(t.modules=new Set)).add("resources/js/Pages/User/patials/avatar.vue"),l?l(r,e):void 0};export{o as default};
