import{defineAsyncComponent as m,computed as u,withCtx as w,unref as e,createVNode as a,toDisplayString as v,openBlock as s,createBlock as c,Fragment as D,renderList as L,createCommentVNode as y,useSSRContext as G}from"vue";import{ssrRenderComponent as p,ssrInterpolate as h,ssrRenderAttr as l,ssrRenderList as N,ssrRenderStyle as H}from"vue/server-renderer";import{usePage as g}from"@inertiajs/inertia-vue3";import{_ as M}from"./FrontendLayout.08ecc123.mjs";import"./menu.37310fbe.mjs";import"pinia";const V={__name:"ShowArticle",__ssrInlineRender:!0,setup(A){const x=m(()=>import("./Ago.4c06185a.mjs")),d=m(()=>import("./approvearticle.44a305de.mjs")),_=m(()=>import("./ClapCommentShare.6615c404.mjs").then(f=>f.C)),k=m(()=>import("./RelatedCategoryArticle.4d2c8a66.mjs")),S=m(()=>import("./PostsFromAuthor.b7d8acd2.mjs")),C=m(()=>import("./Author.8ab498d2.mjs"));m(()=>import("./footer.365e0fd5.mjs"));const T=m(()=>import("./ZoomImages.d0958832.mjs")),j=m(()=>import("./Subscribe.0e0a888e.mjs")),$=u(()=>g().props.value.ziggy.location),t=u(()=>g().props.value.article),P=u(()=>g().props.value.trendingArticles),R=u(()=>g().props.value.tags),z=u(()=>g().props.value.readTime);return u(()=>g().props.value.article.likes_relation_count),(f,B,E,F)=>{B(p(M,F,{meta:w((b,r,i,n)=>{if(r)r(`<title${n}>${h(e(t).title)}</title><meta name="description"${l("content",e(t).meta.meta_description)}${n}><meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"${n}><link rel="canonical"${l("href",e($))}${n}><meta property="og:locale" content="en_US"${n}><meta property="og:type" content="article"${n}><meta property="og:title"${l("content",e(t).meta.opengraph_title)}${n}><meta property="og:description"${l("content",e(t).meta.opengraph_description)}${n}><meta property="og:url"${l("content",e($))}${n}><meta property="og:site_name" content="DailyGists"${n}><meta property="article:section"${l("content",e(t).channels_relation[0].name)}${n}><meta property="og:image"${l("content",e(t).meta.opengraph_image_url)}${n}><meta property="og:image:secure_url"${l("content",e(t).meta.opengraph_image_url)}${n}><meta property="og:image:width"${l("content",e(t).meta.opengraph_image_width)}${n}><meta property="og:image:height"${l("content",e(t).meta.opengraph_image_height)}${n}><meta property="og:image:alt"${l("content",e(t).meta.opengraph_title)}${n}><meta property="og:image:type" content="image/jpeg"${n}><meta property="article:published_time"${l("content",e(t).approved_at)}${n}><meta property="article:modified_time"${l("content",e(t).updated_at)}${n}><meta name="twitter:card"${l("content",e(t).meta.twitter_cardtype)}${n}><meta name="twitter:title"${l("content",e(t).meta.twitter_title)}${n}><meta name="twitter:description"${l("content",e(t).meta.twitter_description)}${n}><meta name="twitter:image"${l("content",e(t).meta.twitter_image_url)}${n}><meta name="twitter:label1" content="Written by"${n}><meta name="twitter:data1"${l("content",e(t).author_relation.penname)}${n}><meta name="twitter:label2" content="Time to read"${n}><meta name="twitter:data2"${l("content",e(z)+" minutes")}${n}>`);else return[a("title",null,v(e(t).title),1),a("meta",{name:"description",content:e(t).meta.meta_description},null,8,["content"]),a("meta",{name:"robots",content:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"}),a("link",{rel:"canonical",href:e($)},null,8,["href"]),a("meta",{property:"og:locale",content:"en_US"}),a("meta",{property:"og:type",content:"article"}),a("meta",{property:"og:title",content:e(t).meta.opengraph_title},null,8,["content"]),a("meta",{property:"og:description",content:e(t).meta.opengraph_description},null,8,["content"]),a("meta",{property:"og:url",content:e($)},null,8,["content"]),a("meta",{property:"og:site_name",content:"DailyGists"}),a("meta",{property:"article:section",content:e(t).channels_relation[0].name},null,8,["content"]),a("meta",{property:"og:image",content:e(t).meta.opengraph_image_url},null,8,["content"]),a("meta",{property:"og:image:secure_url",content:e(t).meta.opengraph_image_url},null,8,["content"]),a("meta",{property:"og:image:width",content:e(t).meta.opengraph_image_width},null,8,["content"]),a("meta",{property:"og:image:height",content:e(t).meta.opengraph_image_height},null,8,["content"]),a("meta",{property:"og:image:alt",content:e(t).meta.opengraph_title},null,8,["content"]),a("meta",{property:"og:image:type",content:"image/jpeg"}),a("meta",{property:"article:published_time",content:e(t).approved_at},null,8,["content"]),a("meta",{property:"article:modified_time",content:e(t).updated_at},null,8,["content"]),a("meta",{name:"twitter:card",content:e(t).meta.twitter_cardtype},null,8,["content"]),a("meta",{name:"twitter:title",content:e(t).meta.twitter_title},null,8,["content"]),a("meta",{name:"twitter:description",content:e(t).meta.twitter_description},null,8,["content"]),a("meta",{name:"twitter:image",content:e(t).meta.twitter_image_url},null,8,["content"]),a("meta",{name:"twitter:label1",content:"Written by"}),a("meta",{name:"twitter:data1",content:e(t).author_relation.penname},null,8,["content"]),a("meta",{name:"twitter:label2",content:"Time to read"}),a("meta",{name:"twitter:data2",content:e(z)+" minutes"},null,8,["content"])]}),header:w((b,r,i,n)=>{if(r)r(`<div class="flex justify-between items-center w-full"${n}><div class="flex items-center space-x-2 relative"${n}><img${l("src",e(t).channels_relation[0].image)} class="w-8 h-8 rounded-full my-4"${n}><span class=""${n}> Published in </span><span class="flex flex-wrap space-x-2"${n}><!--[-->`),N(e(t).channels_relation,o=>{r(`<div${n}><span class="capitalize text-white rounded px-2 py-[1px]" style="${H(`background-color: ${o.color}`)}"${n}>${h(o.name)}</span></div>`)}),r(`<!--]--></span><span class="absolute top-10 left-10 flex w-full space-x-2"${n}>`),e(t).approved_at?r(p(e(x),{datess:e(t).approved_at,classes:" text-xs  text-gray-300",befor:""},null,i,n)):r("<!---->"),e(t).declined_at?r(`<span class="text-xs text-red-500"${n}>Article Delined</span>`):r("<!---->"),e(t).approved_at?r("<!---->"):r(`<span class="text-xs text-gray-300"${n}>NOT APPROVED Yet</span>`),r("</span></div>"),f.$page.props.auth.isAdmin?r(p(e(d),{slug:e(t).slug},null,i,n)):r("<!---->"),r("</div>");else return[a("div",{class:"flex justify-between items-center w-full"},[a("div",{class:"flex items-center space-x-2 relative"},[a("img",{src:e(t).channels_relation[0].image,class:"w-8 h-8 rounded-full my-4"},null,8,["src"]),a("span",{class:""}," Published in "),a("span",{class:"flex flex-wrap space-x-2"},[(s(!0),c(D,null,L(e(t).channels_relation,o=>(s(),c("div",{key:o.id},[a("span",{class:"capitalize text-white rounded px-2 py-[1px]",style:`background-color: ${o.color}`},v(o.name),5)]))),128))]),a("span",{class:"absolute top-10 left-10 flex w-full space-x-2"},[e(t).approved_at?(s(),c(e(x),{key:0,datess:e(t).approved_at,classes:" text-xs  text-gray-300",befor:""},null,8,["datess"])):y("",!0),e(t).declined_at?(s(),c("span",{key:1,class:"text-xs text-red-500"},"Article Delined")):y("",!0),e(t).approved_at?y("",!0):(s(),c("span",{key:2,class:"text-xs text-gray-300"},"NOT APPROVED Yet"))])]),f.$page.props.auth.isAdmin?(s(),c(e(d),{key:0,slug:e(t).slug},null,8,["slug"])):y("",!0)])]}),recommended:w((b,r,i,n)=>{if(r)r(p(e(S),{user:e(t).author_relation},null,i,n)),r(p(e(k),{trending:e(P)},null,i,n));else return[a(e(S),{user:e(t).author_relation},null,8,["user"]),a(e(k),{trending:e(P)},null,8,["trending"])]}),default:w((b,r,i,n)=>{if(r)r(`<h1 class="text-[32px] font-bold leading-10 break-words"${n}>${h(e(t).title)}</h1><article class="article-area"${n}>`),e(t).hero_image?(r(`<div${n}>`),r(p(e(T),{src:e(t).hero_image,classs:"w-full  max-h-[190px] sm:max-h-[290px] rounded my-4 cursor-zoom-in my-8 w-full object-cover   duration-500 ease-in-out"},null,i,n)),r("</div>")):r("<!---->"),r(`<div class="w-full"${n}>${e(t).body}</div><div class="flex items-center"${n}><span class="font-bold w-2/12"${n}>Tags</span><div class="w-10/12 flex items-center flex-wrap justify-end space-x-2 py-2 px-2"${n}><!--[-->`),N(e(R),o=>{r(`<span${n}><span class="capitalize inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none"${n}>${h(o.name)}</span></span>`)}),r("<!--]--></div></div></article>"),r(p(e(_),{type:"articles",data:e(t)},null,i,n)),r(p(e(j),{user:e(t).author_relation},null,i,n)),r(p(e(C),{user:e(t).author_relation},null,i,n));else return[a("h1",{class:"text-[32px] font-bold leading-10 break-words"},v(e(t).title),1),a("article",{class:"article-area"},[e(t).hero_image?(s(),c("div",{key:0},[a(e(T),{src:e(t).hero_image,classs:"w-full  max-h-[190px] sm:max-h-[290px] rounded my-4 cursor-zoom-in my-8 w-full object-cover   duration-500 ease-in-out"},null,8,["src"])])):y("",!0),a("div",{innerHTML:e(t).body,class:"w-full"},null,8,["innerHTML"]),a("div",{class:"flex items-center"},[a("span",{class:"font-bold w-2/12"},"Tags"),a("div",{class:"w-10/12 flex items-center flex-wrap justify-end space-x-2 py-2 px-2"},[(s(!0),c(D,null,L(e(R),o=>(s(),c("span",{key:o.id},[a("span",{class:"capitalize inline-block text-sm text-gray-900 bg-gray-100 border border-gray-200 rounded py-1.5 px-3 leading-none"},v(o.name),1)]))),128))])])]),a(e(_),{type:"articles",data:e(t)},null,8,["data"]),a(e(j),{user:e(t).author_relation},null,8,["user"]),a(e(C),{user:e(t).author_relation},null,8,["user"])]}),_:1},E))}}},O=V.setup;V.setup=(A,x)=>{const d=G();return(d.modules||(d.modules=new Set)).add("resources/js/Pages/Article/ShowArticle.vue"),O?O(A,x):void 0};export{V as default};