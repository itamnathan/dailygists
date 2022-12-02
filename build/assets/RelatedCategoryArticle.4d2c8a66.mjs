import{defineAsyncComponent as p,ref as C,mergeProps as $,unref as l,withCtx as f,createVNode as g,toDisplayString as x,useSSRContext as w}from"vue";import{ssrRenderAttrs as k,ssrInterpolate as m,ssrRenderList as A,ssrRenderComponent as o,ssrRenderClass as _,ssrRenderAttr as S}from"vue/server-renderer";import{Link as u}from"@inertiajs/inertia-vue3";const h={__name:"RelatedCategoryArticle",__ssrInlineRender:!0,props:["category","trending"],setup(d){const i=p(()=>import("./Ago.4c06185a.mjs")),t=p(()=>import("./bookmark.b7fcebd8.mjs"));return C([]),(a,s,r,y)=>{s(`<div${k($({class:"sm:px-12 py-16"},y))}><div class="py-6"><h2 class="text-xl"> Recommended from ${m(a.$page.props.setting.title)}</h2></div><div class="grid sm:grid-cols-2"><!--[-->`),A(d.trending,e=>{s('<div class="flex px-2 py-2 sm:py-6"><div class="w-9/12 grid pr-2">'),s(o(l(u),{href:a.route("articles.show",{channel:e.channels_relation[0].slug,article:e.slug})},{default:f((b,n,R,c)=>{if(n)n(`<h2 class="text-[16px] font-bold"${c}>${m(e.title)}</h2>`);else return[g("h2",{class:"text-[16px] font-bold"},x(e.title),1)]}),_:2},r)),s('<div class="flex justify-between"><div class="flex text-xs items-center text-gray-400 space-x-1">'),s(o(l(i),{datess:e.approved_at,classes:" text-sm  text-grey-dark",befor:""},null,r)),e.channels_relation.length!=0?s(o(l(u),{href:a.route("articles",{channels:e.channels_relation[0].slug})},{default:f((b,n,R,c)=>{if(n)n(`<span class="${_("rounded-full  capitalize px-[10px] hidden sm:block bg-["+e.channels_relation[0].color+"]")}"${c}>${m(e.channels_relation[0].name)}</span>`);else return[g("span",{class:"rounded-full  capitalize px-[10px] hidden sm:block bg-["+e.channels_relation[0].color+"]"},x(e.channels_relation[0].name),3)]}),_:2},r)):s("<!---->"),s("</div>"),s(o(l(t),{id:e.id},null,r)),s(`</div></div><div class="w-3/12"><div class="w-[100px] h-[100px] rounded bg-white grid items-center"><img${S("src",e.hero_image)} class=""></div></div></div>`)}),s("<!--]--></div></div>")}}},v=h.setup;h.setup=(d,i)=>{const t=w();return(t.modules||(t.modules=new Set)).add("resources/js/Components/Frontend/RelatedCategoryArticle.vue"),v?v(d,i):void 0};export{h as default};
