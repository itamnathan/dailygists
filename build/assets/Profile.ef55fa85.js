import{B as i,o as a,j as m,n as l,k as s,t as r,u as t,X as _,f as c,q as h,s as n,L as x,F as f,C as d}from"./vendor.ab963d2a.js";import{_ as g}from"./FrontendLayout.ab538784.js";import v from"./Ago.882a37c3.js";import"./app.5b96fbb3.js";import"./menu.a8c4f232.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"sm:w-9/12 w-9/12 grid pr-4"},w={class:"sm:text-[20px] text-[16px] font-bold"},y={class:"text-gray-500 text-xs sm:text-base font-semibold hidden md:block"},k={class:"flex justify-between"},B={class:"flex text-xs items-center text-gray-400 space-x-1"},V=s("div",null,[s("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",class:"lt"},[s("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"})])],-1),j={class:"sm:w-3/12 w-3/12"},z=["src"],H=s("div",{class:"w-full flex justify-center h-4 bg-white backdrop-blur-sm bg-opacity-10 absolute sm:px-14 px-4 sm:top-[140px] top-[89px]"},null,-1),L={class:"w-full flex justify-center sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]"},C={class:"capitalize text-[46px] font-bold"},F=["src"],$={__name:"Profile",setup(M){const o=i(()=>d().props.value.user),p=i(()=>d().props.value.articles);return(u,N)=>(a(),m(g,null,{meta:l(()=>[s("title",null,"@"+r(t(o).username)+"'s profile",1)]),cover:l(()=>[s("div",{class:"bg-teal-100 bg-cover w-full mb-16 sm:h-36 h-24 relative",style:_("background-image: url("+t(o).profile_cover_url+");")},[H,s("div",L,[s("div",C,[s("img",{src:t(o).profile_photo_url,class:"sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400"},null,8,F)])])],4)]),default:l(()=>[(a(!0),c(f,null,h(t(p),e=>(a(),c("div",{class:"flex py-2 sm:py-6",key:e.slug},[s("div",b,[n(t(x),{href:u.route("articles.show",{channel:e.channels_relation[0].slug,article:e.slug})},{default:l(()=>[s("h2",w,r(e.title),1)]),_:2},1032,["href"]),s("p",y,r(e.excerpt),1),s("div",k,[s("div",B,[n(v,{datess:e.submitted_at,classes:" text-sm  text-grey-dark",befor:""},null,8,["datess"])]),V])]),s("div",j,[s("img",{src:e.hero_image,class:"sm:w-full w-[100px] sm:h-[134px] h-[100px] rounded"},null,8,z)])]))),128))]),_:1}))}};export{$ as default};
