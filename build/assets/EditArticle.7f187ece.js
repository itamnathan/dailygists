import{B as l,a1 as X,a7 as Z,m as ee,U as te,e as f,Y as oe,o as h,j as le,n as w,s as n,k as o,f as ie,u,i as re,p as se,y as ae,G as x,C as i}from"./vendor.ab963d2a.js";import ne from"./postsetting.cd156e95.js";import{C as ue}from"./ckeditor.6d92a932.js";import{C as pe,u as me}from"./ckeditor.2e58956b.js";import ce from"./SetPostSettings.32365548.js";import{m as ve,U as _e,r as de}from"./mitt.2b97234a.js";import{_ as ge}from"./FrontendLayout.d9e561f6.js";import"./app.3a282412.js";import"./tabs.fcc53874.js";import"./dom.7db5f4cf.js";import"./hidden.cc743816.js";import"./use-resolve-button-type.8fe970f7.js";import"./micro-task.fe338338.js";import"./Halfmodal.2ea8795a.js";import"./index.10b3df83.js";import"./menu.a8c4f232.js";const fe={class:"fixed z-[10] top-1 right-14 sm:hidden flex"},he={key:0,class:"hover:shadow-lg saving rounded-lg m-1 px-4 py-2 flex justify-between items-center w-full"},we=o("span",{class:"px-1"},"Saving",-1),xe={class:""},ye={components:{ckeditor:pe.component}},De=Object.assign(ye,{__name:"EditArticle",setup(ke){const y=ve(),k=l(()=>i().props.value.article);l(()=>i().props.value.url);const C=me(),{editor:b,content:r,excerpt:T,slug:v,visibility:B,status:Ce,allow_comment:E,channels:V,selectedChannels:p,tags:U,selectedTags:m,title:s,featured_image:$,approved_at:j,author:z,keywords:_,meta_title:A,meta_description:F,opengraph_title:M,opengraph_description:N,opengraph_image:R,opengraph_image_width:P,opengraph_image_height:S,twitter_title:D,twitter_description:G,twitter_image:H,twitter_cardtype:I}=X(C);Z(()=>{b.value=l(()=>i().props.value.editor),Q(k.value)});function K(e){U.value.push(e.id)}function O(e){V.value.push(e.id)}ee(()=>{m.value=l(()=>i().props.value.selectedTags),m.value.forEach(K),p.value=l(()=>i().props.value.selectedChannels),p.value.forEach(O)});let Y=ue;const q=te({extraPlugins:[J]});function J(e){e.plugins.get("FileRepository").createUploadAdapter=t=>new _e(t)}const c=f(!1),d=f(null);function L(){let e=d.value;e.style.height="18px",e.style.height=e.scrollHeight+"px"}y.on("changed",g());function g(){setTimeout(()=>c.value=!0,1e3),setTimeout(()=>c.value=!1,1500)}function Q(e){j.value=e.approved_at,v.value=e.slug,z.value=e.author_relation.id,e.meta.keywords==null?_.value=[]:_.value=e.meta.keywords,s.value=e.title,r.value=e.body,T.value=e.excerpt,v.value=e.slug,m.value=e.selectedTags,p.value=e.selectedChannels,$.value=e.hero_image,B.value=e.visibility,E.value=e.allow_comment,A.value=e.meta.meta_title,F.value=e.meta.meta_description,M.value=e.meta.opengraph_title,N.value=e.meta.opengraph_description,R.value=e.meta.opengraph_image,P.value=e.meta.opengraph_image_width,S.value=e.meta.opengraph_image_height,D.value=e.meta.twitter_title,G.value=e.meta.twitter_description,I.value=e.meta.twitter_cardtype,H.value=e.meta.twitter_image}return(e,t)=>{const W=oe("ckeditor");return h(),le(ge,null,{aside:w(()=>[n(ne)]),default:w(()=>[o("div",fe,[c.value?(h(),ie("button",he,[n(u(de),{class:"h-6 w-6"}),we])):re("",!0),n(ce)]),o("div",xe,[o("div",null,[o("div",null,[se(o("textarea",{placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=a=>x(s)?s.value=a:null),onInput:t[1]||(t[1]=a=>L()),ref_key:"textarea",ref:d,class:"no-scrollbar w-full py-1 overscroll-x-none resize-none border-0 focus:ring-0 font-serif bg-transparent text-[44px] font-semibold px-0 leading-none"},null,544),[[ae,u(s)]])]),o("div",null,[n(W,{editor:u(Y),modelValue:u(r),"onUpdate:modelValue":t[2]||(t[2]=a=>x(r)?r.value=a:null),onBlur:g,config:q},null,8,["editor","modelValue","config"])])])])]),_:1})}}});export{De as default};