import{_ as u}from"./AdminLayout.e79bd573.js";import m from"./Ago.882a37c3.js";import h from"./Pagination.c145180b.js";import{B as p,o,j as x,n as i,k as t,u as s,f as r,F as f,q as w,s as a,z as d,t as c,L as _,C as g}from"./vendor.ab963d2a.js";import"./app.3a282412.js";import"./useDetictingMobile.ab43061e.js";import"./settings.ba59d097.js";import"./usermenu.980e7f9c.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"container mx-auto pb-10 lg:py-6 sm:px-4"},v={class:"flex flex-col"},k={key:0,class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},b={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},j={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},B={class:"min-w-full divide-y divide-gray-200"},C=t("thead",{class:"bg-gray-50"},[t("tr",{class:"flex justify-between w-full"},[t("div",{class:"w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Author "),t("div",{class:"w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),t("div",{class:"w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Submitted on "),t("div",{class:"w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center"}," View ")])],-1),V={class:"bg-white divide-y divide-gray-200"},z={class:"w-1/4 px-6 py-4 text-gray-500 text-sm"},M={class:"flex items-center"},N={class:"shrink-0 h-10 w-10"},A=["src"],H={class:"ml-4"},L={class:"text-sm font-medium text-gray-900"},D={class:"text-sm text-gray-500"},F={class:"w-1/4 px-6 py-4 text-gray-500 text-sm"},S={class:"w-1/4 px-6 py-4 text-gray-500 text-sm"},T={class:"w-1/4 px-6 py-4 text-gray-500 text-sm flex justify-center"},$=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 inline"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),q={key:1,class:"flex items-center justify-center"},E=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})],-1),I={class:"p-4"},tt={__name:"Index",setup(P){const l=p(()=>g().props.value.articles);return(n,G)=>(o(),x(u,{title:"Dashboard"},{default:i(()=>[t("main",y,[t("div",v,[s(l).data.length?(o(),r("div",k,[t("div",b,[t("div",j,[t("table",B,[C,t("tbody",V,[(o(!0),r(f,null,w(s(l).data,e=>(o(),r("tr",{key:e.id,class:"flex justify-between w-full"},[t("div",z,[t("div",M,[t("div",N,[t("img",{src:e.author_relation.profile_photo_url,class:"h-10 w-10 rounded-full"},null,8,A)]),t("div",H,[t("div",L,[a(s(_),{href:n.route("profile",e.author_relation.username)},{default:i(()=>[d(c(e.author_relation.name),1)]),_:2},1032,["href"])]),t("div",D,[a(s(_),{href:n.route("profile",e.author_relation.username)},{default:i(()=>[d(" @"+c(e.author_relation.username),1)]),_:2},1032,["href"])])])])]),t("div",F,c(e.title),1),t("div",S,[a(m,{datess:e.submitted_at,classes:" text-sm  text-grey-dark",befor:""},null,8,["datess"])]),t("div",T,[a(s(_),{href:n.route("articles.show",{channel:e.channels_relation[0].slug,article:e.slug}),class:"text-lio-600 hover:text-lio-800"},{default:i(()=>[$]),_:2},1032,["href"])])]))),128))])])])])])):(o(),r("div",q,[E,d(" No articles have been posted yet ")]))]),t("div",I,[a(h,{class:"mt-6",links:s(l).links},null,8,["links"])])])]),_:1}))}};export{tt as default};