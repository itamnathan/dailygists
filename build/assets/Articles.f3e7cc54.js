import{B as h,o as n,j as _,n as t,k as e,f as i,q as p,s as a,t as c,u as l,L as r,X as u,z as m,F as x,C as f}from"./vendor.ab963d2a.js";import{_ as g}from"./FrontendLayout.b9dfb3e3.js";import y from"./Ago.882a37c3.js";import k from"./Pagination.c145180b.js";import"./app.d35bf253.js";import"./menu.a8c4f232.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v=e("title",null,"Authored Articles",-1),b=e("div",{class:"py-3"},[e("div",{class:"flex items-center"},[e("span",{class:"text-xl font-bold capitalize"}," Authored Articles")])],-1),w={class:"w-9/12 grid px-1"},A={class:"sm:text-[20px] text-[16px] font-bold"},B={class:"text-gray-500 text-xs sm:text-base font-semibold hidden md:block"},z={class:"flex justify-between"},L={class:"flex text-xs items-center text-gray-400 space-x-1"},N={class:"flex space-x-2 items-center"},V={class:"flex"},$={key:0,class:"text-green-500 text-sm"},j={key:1,class:"text-red-500 text-sm"},C={class:"w-3/12"},E=["src"],F={class:"sm:px-12px-[1px] py-2 sm:py-6 sm:mx-16 mx-1"},K={__name:"Articles",setup(P){const d=h(()=>f().props.value.articles);return(o,S)=>(n(),_(g,null,{meta:t(()=>[v]),header:t(()=>[b]),default:t(()=>[e("div",null,[(n(!0),i(x,null,p(l(d).data,s=>(n(),i("div",{key:s.id,class:"flex py-2 sm:py-6 sm:mx-16"},[e("div",w,[a(l(r),{href:o.route("articles.show",{channel:s.channels_relation[0].slug,article:s.slug})},{default:t(()=>[e("h2",A,c(s.title),1)]),_:2},1032,["href"]),a(l(r),{href:o.route("articles.show",{channel:s.channels_relation[0].slug,article:s.slug})},{default:t(()=>[e("p",B,c(s.excerpt),1)]),_:2},1032,["href"]),e("div",z,[e("div",L,[a(y,{datess:s.publish_date,classes:" text-sm  text-grey-dark",befor:""},null,8,["datess"]),a(l(r),{href:o.route("channel",s.channels_relation[0].slug)},{default:t(()=>[e("span",{style:u(`background-color: ${s.channels_relation[0].color}`),class:"rounded-full capitalize px-[10px] hidden sm:block text-white"},c(s.channels_relation[0].name),5)]),_:2},1032,["href"])]),e("div",N,[e("div",V,[s.approved_at?(n(),i("span",$,"Approved")):(n(),i("span",j,"Pending"))]),a(l(r),{href:o.route("articles.edit",s.slug),class:"bg-gray-700 text-white px-2 rounded"},{default:t(()=>[m("Edit")]),_:2},1032,["href"])])])]),e("div",C,[a(l(r),{href:o.route("articles.show",{channel:s.channels_relation[0].slug,article:s.slug})},{default:t(()=>[e("img",{src:s.hero_image,class:"sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"},null,8,E)]),_:2},1032,["href"])])]))),128)),e("div",F,[a(k,{class:"mt-6",links:l(d).links},null,8,["links"])])])]),_:1}))}};export{K as default};
