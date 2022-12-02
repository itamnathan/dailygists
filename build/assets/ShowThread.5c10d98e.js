import{_ as a}from"./app.3a282412.js";import{E as r,B as g,Y as d,o as i,j as f,n as _,k as t,t as l,u as e,s as n,z as p,L as c,f as m,i as u,X as T,q as N,F as I,C as v}from"./vendor.ab963d2a.js";import{_ as A}from"./FrontendLayout.d9e561f6.js";import"./menu.a8c4f232.js";const P={class:"flex justify-between items-center w-full"},B={class:"flex items-center space-x-2 relative"},D=["src"],j={class:"absolute full top-10 left-10"},C={key:0,class:""},O={class:"px-4"},R={key:0,class:"flex justify-between items-center py-2"},S=t("span",null,"Get started",-1),$=t("button",{class:""},"Sign In",-1),z={class:"mt-6"},M={class:"flex flex-col rounded-md shadow mt-6"},Y={class:"flex flex-col items-center justify-center bg-white rounded-b-md pb-8"},F=["src"],H={class:"text-lg text-gray-600"},U={class:"text-gray-600 mb-4"},q={class:"flex items-center gap-x-3"},G={href:"https://twitter.com/{{ $user->twitter() }}",class:"text-twitter"},J={href:"{{ $user->website() }}"};const X={class:"my-6"},K={class:"text-[32px] font-bold leading-10 break-words"},Q={id:"section"},W=["innerHTML"],Z={class:"flex items-center my-6"},ee=t("span",{class:"font-bold w-2/12"},"Tags",-1),te={class:"flex items-center flex-wrap justify-between py-2 px-2"},se={class:"capitalize inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none"},ce={__name:"ShowThread",setup(oe){r(()=>a(()=>import("./Subscribe.d7cc07b7.js"),["assets/Subscribe.d7cc07b7.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css"])),r(()=>a(()=>import("./RelatedCategoryArticle.20e5efa5.js"),["assets/RelatedCategoryArticle.20e5efa5.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css"])),r(()=>a(()=>import("./PostsFromAuthor.cfd4a35c.js"),["assets/PostsFromAuthor.cfd4a35c.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css","assets/index.4200866c.js"])),r(()=>a(()=>import("./Author.1aced1b7.js"),["assets/Author.1aced1b7.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css"]));const b=r(()=>a(()=>import("./SignIn.66adabab.js"),["assets/SignIn.66adabab.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css","assets/index.10b3df83.js"])),y=r(()=>a(()=>import("./SignUp.702f7dcd.js"),["assets/SignUp.702f7dcd.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css","assets/index.10b3df83.js"])),x=r(()=>a(()=>import("./Ago.882a37c3.js"),["assets/Ago.882a37c3.js","assets/moment.9709ab41.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.ab963d2a.js"])),w=r(()=>a(()=>import("./Moderators.55fadbf4.js"),["assets/Moderators.55fadbf4.js","assets/vendor.ab963d2a.js","assets/Ago.882a37c3.js","assets/moment.9709ab41.js","assets/_plugin-vue_export-helper.cdc0426e.js"])),k=r(()=>a(()=>import("./ClapCommentShare.1e6331ae.js").then(o=>o.C),["assets/ClapCommentShare.1e6331ae.js","assets/app.3a282412.js","assets/vendor.ab963d2a.js","assets/app.2d86edc7.css","assets/index.4200866c.js","assets/index.10b3df83.js"]));r(()=>a(()=>import("./Pagination.c145180b.js"),["assets/Pagination.c145180b.js","assets/vendor.ab963d2a.js"]));const s=g(()=>v().props.value.thread),E=g(()=>v().props.value.thread.tags_relation);return(o,ae)=>{const V=d("x-icon-twitter"),L=d("x-heroicon-o-globe-alt"),re=d("x-heroicon-o-speaker-x-mark"),_e=d("x-heroicon-o-speaker-wave");return i(),f(A,null,{meta:_(()=>[t("title",null,l(e(s).subject),1)]),header:_(()=>[t("div",P,[t("div",B,[t("img",{src:e(s).author_relation.profile_photo_url,class:"w-8 h-8 rounded-full my-4"},null,8,D),n(e(c),{href:o.route("profile",e(s).author_relation.username),class:""},{default:_(()=>[p(" @"+l(e(s).author_relation.username),1)]),_:1},8,["href"]),t("span",j,[n(e(x),{datess:e(s).created_at,classes:" text-xs  text-gray-300",befor:""},null,8,["datess"])])]),o.$page.props.isLoggedIn?(i(),m("div",C,[o.$page.props.auth.user.id==e(s).author_relation.id||o.$page.props.isAdmin?(i(),f(e(c),{key:0,href:o.route("threads.edit",e(s).slug)},{default:_(()=>[p("Edit ")]),_:1},8,["href"])):u("",!0)])):u("",!0)])]),aside:_(()=>[t("div",O,[o.$page.props.isLoggedIn?u("",!0):(i(),m("div",R,[n(e(y),{design:"w-9/12 flex justify-center rounded-full px-12 py-2 bg-black text-white"},{default:_(()=>[S]),_:1}),n(e(b),null,{default:_(()=>[$]),_:1})])),t("div",z,[t("div",M,[t("div",{class:"bg-gray-800 rounded-t-md h-28",style:T("background-image: url("+e(s).author_relation.profile_cover_url+")")},null,4),t("div",Y,[t("img",{src:e(s).author_relation.profile_photo_url,class:"w-32 h-32 rounded-full -mt-16 mb-6"},null,8,F),n(e(c),{href:o.route("profile",e(s).author_relation.username),class:"flex flex-col text-center text-xl font-medium mb-4 hover:underline"},{default:_(()=>[p(l(e(s).author_relation.name)+" ",1),t("span",H,"@"+l(e(s).author_relation.username),1)]),_:1},8,["href"]),t("span",U,[n(e(x),{datess:e(s).author_relation.created_at,classes:"text-gray-600 mb-4",befor:"Joined"},null,8,["datess"])]),t("div",q,[t("a",G,[n(V,{class:"w-6 h-6"})]),t("a",J,[n(L,{class:"w-6 h-6"})])])])])]),u("",!0),t("div",X,[n(e(w))])])]),default:_(()=>[t("h1",K,l(e(s).subject)+"slug asdgas asdfasd asdfasdfslug asdgas asdfasd asdfasdf ",1),t("div",Q,[t("div",{innerHTML:e(s).body,class:"w-full my-6"},null,8,W),t("div",Z,[ee,t("div",te,[(i(!0),m(I,null,N(e(E),h=>(i(),f(e(c),{href:o.route("forum.tag",h.slug),key:h.id,class:""},{default:_(()=>[t("span",se,l(h.name),1)]),_:2},1032,["href"]))),128))])])]),n(e(k),{data:e(s),type:"threads"},null,8,["data"])]),_:1})}}};export{ce as default};