import{e as i,m as d,o,f as a,k as s,t as r,F as l,q as _,s as u,n as h,u as p,L as f}from"./vendor.ab963d2a.js";const m={class:"my-4 grid"},g={class:"my-2"},v={class:"font-bold"},x={class:"space-y-4"},y={class:"w-9/12 grid"},k={class:"text-[14px] font-bold"},w={class:"w-3/12"},b={class:"w-[56px] h-[56px] rounded grid items-center bg-teal-200"},B=["src"],N={__name:"Morepostfromus",setup(L){const n=i([]);function c(){axios.get("/api/article/morefromus").then(t=>{n.value=t.data})}return d(()=>{c()}),(t,M)=>(o(),a("div",m,[s("div",g,[s("h2",v,"More from "+r(t.$page.props.setting.title),1)]),s("div",x,[(o(!0),a(l,null,_(n.value,e=>(o(),a("div",{class:"flex px-[1px] py-2",key:e.slug},[s("div",y,[u(p(f),{href:t.route("articles.show",{channel:e.channels_relation[0].slug,article:e.slug})},{default:h(()=>[s("h2",k,r(e.title),1)]),_:2},1032,["href"])]),s("div",w,[s("div",b,[s("img",{src:e.hero_image,class:"rounded"},null,8,B)])])]))),128))])]))}};export{N as default};