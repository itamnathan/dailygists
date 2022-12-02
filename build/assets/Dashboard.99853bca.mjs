import{computed as h,withCtx as o,createVNode as t,unref as r,toDisplayString as d,openBlock as m,createBlock as x,Fragment as R,renderList as D,useSSRContext as S}from"vue";import{ssrRenderComponent as u,ssrRenderStyle as B,ssrRenderAttr as b,ssrRenderList as C,ssrInterpolate as g}from"vue/server-renderer";import{usePage as w,Link as y}from"@inertiajs/inertia-vue3";import{_ as M}from"./FrontendLayout.3f163ecd.mjs";import $ from"./Ago.4c06185a.mjs";import"./menu.37310fbe.mjs";import"pinia";import"moment";import"./_plugin-vue_export-helper.43be4956.mjs";const _={__name:"Dashboard",__ssrInlineRender:!0,setup(p){const a=h(()=>w().props.value.auth.user),i=h(()=>w().props.value.articles);return(f,V,j,z)=>{V(u(M,z,{meta:o((c,l,n,e)=>{if(l)l(`<title${e}>Dashboard</title>`);else return[t("title",null,"Dashboard")]}),cover:o((c,l,n,e)=>{if(l)l(`<div class="bg-teal-100 bg-cover w-full mb-16 sm:h-36 h-24 relative" style="${B("background-image: url("+r(a).profile_cover_url+");")}"${e}><div class="w-full flex justify-center h-4 bg-white backdrop-blur-sm bg-opacity-10 absolute sm:px-14 px-4 sm:top-[140px] top-[89px]"${e}></div><div class="w-full flex justify-center sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]"${e}><div class="capitalize text-[46px] font-bold"${e}><img${b("src",r(a).profile_photo_url)} class="sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400"${e}></div></div></div>`);else return[t("div",{class:"bg-teal-100 bg-cover w-full mb-16 sm:h-36 h-24 relative",style:"background-image: url("+r(a).profile_cover_url+");"},[t("div",{class:"w-full flex justify-center h-4 bg-white backdrop-blur-sm bg-opacity-10 absolute sm:px-14 px-4 sm:top-[140px] top-[89px]"}),t("div",{class:"w-full flex justify-center sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]"},[t("div",{class:"capitalize text-[46px] font-bold"},[t("img",{src:r(a).profile_photo_url,class:"sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400"},null,8,["src"])])])],4)]}),default:o((c,l,n,e)=>{if(l)l("<!--[-->"),C(r(i),s=>{l(`<div class="flex py-2 sm:py-6"${e}><div class="sm:w-9/12 w-9/12 grid pr-4"${e}>`),l(u(r(y),{href:f.route("articles.show",{channel:s.channels_relation[0].slug,article:s.slug})},{default:o((L,v,A,H)=>{if(v)v(`<h2 class="sm:text-[20px] text-[16px] font-bold"${H}>${g(s.title)}</h2>`);else return[t("h2",{class:"sm:text-[20px] text-[16px] font-bold"},d(s.title),1)]}),_:2},n,e)),l(`<p class="text-gray-500 text-xs sm:text-base font-semibold hidden md:block"${e}>${g(s.excerpt)}</p><div class="flex justify-between"${e}><div class="flex text-xs items-center text-gray-400 space-x-1"${e}>`),l(u($,{datess:s.submitted_at,classes:" text-sm  text-grey-dark",befor:""},null,n,e)),l(`</div><div${e}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="lt"${e}><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"${e}></path></svg></div></div></div><div class="sm:w-3/12 w-3/12"${e}><img${b("src",s.hero_image)} class="sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"${e}></div></div>`)}),l("<!--]-->");else return[(m(!0),x(R,null,D(r(i),s=>(m(),x("div",{class:"flex py-2 sm:py-6",key:s.slug},[t("div",{class:"sm:w-9/12 w-9/12 grid pr-4"},[t(r(y),{href:f.route("articles.show",{channel:s.channels_relation[0].slug,article:s.slug})},{default:o(()=>[t("h2",{class:"sm:text-[20px] text-[16px] font-bold"},d(s.title),1)]),_:2},1032,["href"]),t("p",{class:"text-gray-500 text-xs sm:text-base font-semibold hidden md:block"},d(s.excerpt),1),t("div",{class:"flex justify-between"},[t("div",{class:"flex text-xs items-center text-gray-400 space-x-1"},[t($,{datess:s.submitted_at,classes:" text-sm  text-grey-dark",befor:""},null,8,["datess"])]),t("div",null,[(m(),x("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",class:"lt"},[t("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"})]))])])]),t("div",{class:"sm:w-3/12 w-3/12"},[t("img",{src:s.hero_image,class:"sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"},null,8,["src"])])]))),128))]}),_:1},j))}}},k=_.setup;_.setup=(p,a)=>{const i=S();return(i.modules||(i.modules=new Set)).add("resources/js/Pages/User/Dashboard.vue"),k?k(p,a):void 0};export{_ as default};
