import{computed as $,ref as S,reactive as B,onMounted as R,resolveComponent as z,withCtx as u,createVNode as o,unref as r,withDirectives as F,vModelText as M,useSSRContext as P}from"vue";import{ssrRenderComponent as b,ssrInterpolate as q}from"vue/server-renderer";import c from"./TagInput.85004a2a.mjs";import{usePage as j,useForm as D}from"@inertiajs/inertia-vue3";import{_ as H}from"./FrontendLayout.08ecc123.mjs";import{u as K}from"./editor.79190857.mjs";import{storeToRefs as N}from"pinia";import O from"@ckeditor/ckeditor5-build-classic";import A from"@ckeditor/ckeditor5-vue";import"vue-multiselect";/* empty css                                                                  */import"./menu.37310fbe.mjs";const G={components:{ckeditor:A.component}},C=Object.assign(G,{__name:"Edit",__ssrInlineRender:!0,setup(f){const i=$(()=>j().props.value.thread),d=K(),{tags:g,selectedTags:p}=N(d),v=S();function U(){let l=v.value;l.style.height="18px",l.style.height=l.scrollHeight+"px"}const n=D({subject:i.value.subject,body:i.value.body,tags:g.value});let x=O;const h=B({toolbar:{items:["heading","bold","italic","link","blockquote","bulletedlist","numberedlist","undo","redo"]}});function y(){n.put(route("threads.update",i.value.slug),{errorBag:"submitThread",preserveScroll:!0})}function k(l){g.value.push(l.id)}return R(()=>{p.value=$(()=>j().props.value.selectedTags),p.value.forEach(k)}),(l,V,_,E)=>{const T=z("ckeditor");V(b(H,E,{aside:u((m,t,s,e)=>{if(t)t(`<div class="mx-6"${e}><div class="mb-6"${e}><label class="font-bold mb-6"${e}>Tags</label>`),t(b(c,null,null,s,e)),t(`</div><button class="bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600"${e}> Update Thread </button></div>`);else return[o("div",{class:"mx-6"},[o("div",{class:"mb-6"},[o("label",{class:"font-bold mb-6"},"Tags"),o(c)]),o("button",{onClick:y,class:"bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600"}," Update Thread ")])]}),cover:u((m,t,s,e)=>{if(!t)return[]}),header:u((m,t,s,e)=>{if(t)t(`<div class="py-4 text-lg font-bold w-full flex justify-between"${e}><span${e}> Update Conversation</span><button class="sm:hidden bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600"${e}> Update Thread </button></div>`);else return[o("div",{class:"py-4 text-lg font-bold w-full flex justify-between"},[o("span",null," Update Conversation"),o("button",{onClick:y,class:"sm:hidden bg-greenish border border-transparent rounded py-2 px-4 inline-flex justify-center text-lg leading-6 text-white hover:bg-green-600"}," Update Thread ")])]}),default:u((m,t,s,e)=>{if(t)t(`<div${e}><textarea placeholder="Title" class="no-scrollbar w-full py-1 overscroll-x-none resize-none border-0 focus:ring-0 font-serif bg-transparent text-[44px] font-semibold px-0 leading-none"${e}>${q(r(n).subject)}</textarea></div><div class="sm:hidden mb-6"${e}><label class="font-bold mb-6"${e}>Tags</label>`),t(b(c,null,null,s,e)),t("</div>"),t(b(T,{editor:r(x),modelValue:r(n).body,"onUpdate:modelValue":a=>r(n).body=a,onBlur:l.togglesaving,config:h},null,s,e));else return[o("div",null,[F(o("textarea",{placeholder:"Title","onUpdate:modelValue":a=>r(n).subject=a,onInput:a=>U(),ref_key:"textarea",ref:v,class:"no-scrollbar w-full py-1 overscroll-x-none resize-none border-0 focus:ring-0 font-serif bg-transparent text-[44px] font-semibold px-0 leading-none"},`\r
      `,40,["onUpdate:modelValue","onInput"]),[[M,r(n).subject]])]),o("div",{class:"sm:hidden mb-6"},[o("label",{class:"font-bold mb-6"},"Tags"),o(c)]),o(T,{editor:r(x),modelValue:r(n).body,"onUpdate:modelValue":a=>r(n).body=a,onBlur:l.togglesaving,config:h},null,8,["editor","modelValue","onUpdate:modelValue","onBlur","config"])]}),_:1},_))}}}),w=C.setup;C.setup=(f,i)=>{const d=P();return(d.modules||(d.modules=new Set)).add("resources/js/Pages/Forum/threads/Edit.vue"),w?w(f,i):void 0};export{C as default};