import{ref as Y,defineAsyncComponent as k,computed as P,withCtx as s,unref as e,createVNode as l,createTextVNode as n,toDisplayString as h,openBlock as i,createBlock as d,createCommentVNode as p,Fragment as D,renderList as T,useSSRContext as W}from"vue";import{ssrRenderComponent as m,ssrInterpolate as M,ssrRenderList as F}from"vue/server-renderer";import{usePage as U,Link as w}from"@inertiajs/inertia-vue3";import{_ as q}from"./FrontendLayout.3f163ecd.mjs";import{useToggle as E}from"@vueuse/shared";import"./menu.37310fbe.mjs";import"pinia";const B={__name:"Notifications",__ssrInlineRender:!0,setup(C){const b=Y(!1),f=E(b),A=k(()=>import("./Ago.4c06185a.mjs")),$=k(()=>import("./Pagination.22bc9822.mjs")),N=k(()=>import("./DialogModal.98c7027b.mjs")),c=P(()=>U().props.value.notifications);return(x,R,z,V)=>{R(m(q,V,{header:s((S,r,y,a)=>{if(r)r(`<div class="flex items-center justify-between pb-4"${a}><div class="flex-1 min-w-0"${a}><h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate"${a}> Notifications <span class="text-2xl text-lio-500 rounded-full bg-lio-100 px-3"${a}>${M(e(c).data.length)}</span></h2></div>`),e(c).data.length!=0?r(`<div class="mt-4 flex md:mt-0 md:ml-4"${a}><button class="bg-white border border-gray-200 rounded py-2 px-4 inline-flex justify-center text-sm text-gray-900 hover:bg-gray-100 font-medium"${a}><svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-1"${a}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"${a}></path></svg> Clear All </button></div>`):r("<!---->"),r("</div>");else return[l("div",{class:"flex items-center justify-between pb-4"},[l("div",{class:"flex-1 min-w-0"},[l("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate"},[n(" Notifications "),l("span",{class:"text-2xl text-lio-500 rounded-full bg-lio-100 px-3"},h(e(c).data.length),1)])]),e(c).data.length!=0?(i(),d("div",{key:0,class:"mt-4 flex md:mt-0 md:ml-4"},[l("button",{onClick:t=>e(f)(),class:"bg-white border border-gray-200 rounded py-2 px-4 inline-flex justify-center text-sm text-gray-900 hover:bg-gray-100 font-medium"},[(i(),d("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 mr-1"},[l("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])),n(" Clear All ")],8,["onClick"])])):p("",!0)])]}),default:s((S,r,y,a)=>{if(r)r(m(e(N),{show:b.value,onClose:t=>e(f)()},{title:s((t,o,u,g)=>{if(o)o(" Mark All As Read ");else return[n(" Mark All As Read ")]}),content:s((t,o,u,g)=>{if(o)o(" Are you sure you want to mark all notifications as read? ");else return[n(" Are you sure you want to mark all notifications as read? ")]}),footer:s((t,o,u,g)=>{if(o)o(`<button class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"${g}> Cancel </button>`),o(m(e(w),{href:x.route("notifications.mark-as-read"),class:"inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-600 disabled:opacity-25 transition ml-3"},{default:s((v,j,G,H)=>{if(j)j(" Confirm ");else return[n(" Confirm ")]}),_:1},u,g));else return[l("button",{onClick:v=>e(f)(),class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"}," Cancel ",8,["onClick"]),l(e(w),{href:x.route("notifications.mark-as-read"),class:"inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-600 disabled:opacity-25 transition ml-3"},{default:s(()=>[n(" Confirm ")]),_:1},8,["href"])]}),_:1},y,a)),e(c).total?(r(`<div id="exampleWrapper" class="py-6"${a}><ol class="relative border-l border-gray-200 dark:border-gray-700"${a}><!--[-->`),F(e(c).data,t=>{r(`<li class="mb-10 ml-6"${a}>`),t.type=="App\\Notifications\\ArticleApprovedNotification"?r(`<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"${a}><svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 rounded-full shadow-lg"${a}><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"${a}></path></svg></span>`):r("<!---->"),t.type=="App\\Notifications\\ArticleApprovedNotification"?(r(`<div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"${a}>`),r(m(e(A),{datess:t.created_at,classes:`flex sm:w-2/12 justify-between  mb-1\r
                text-xs\r
                font-normal\r
                text-gray-400\r
                sm:order-last sm:mb-0`,befor:""},{default:s((o,u,g,v)=>{if(u)t.read_at?u(`<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"${v}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"${v}></path></svg>`):u("<!---->");else return[t.read_at?(i(),d("svg",{key:0,viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[l("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])):p("",!0)]}),_:2},y,a)),r(`<div class="text-sm sm:w-10/12 font-normal text-gray-500 dark:text-gray-300"${a}> Your article: `),r(m(e(w),{href:x.route("articles.show",[t.data.channel,t.data.article_slug]),class:"font-semibold text-blue-600 dark:text-blue-500 hover:underline"},{default:s((o,u,g,v)=>{if(u)u(`${M(t.data.article_title)}`);else return[n(h(t.data.article_title),1)]}),_:2},y,a)),r(" has been approved. </div></div>")):r("<!---->"),r("</li>")}),r("<!--]--></ol>"),r(m(e($),{class:"mt-6",links:e(c).links},null,y,a)),r("</div>")):r(`<p class="text-gray-600 text-base"${a}> You have no unread notifications </p>`);else return[l(e(N),{show:b.value,onClose:t=>e(f)()},{title:s(()=>[n(" Mark All As Read ")]),content:s(()=>[n(" Are you sure you want to mark all notifications as read? ")]),footer:s(()=>[l("button",{onClick:t=>e(f)(),class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 active:bg-gray-50 disabled:opacity-25 transition"}," Cancel ",8,["onClick"]),l(e(w),{href:x.route("notifications.mark-as-read"),class:"inline-flex items-center justify-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-600 disabled:opacity-25 transition ml-3"},{default:s(()=>[n(" Confirm ")]),_:1},8,["href"])]),_:1},8,["show","onClose"]),e(c).total?(i(),d("div",{key:0,id:"exampleWrapper",class:"py-6"},[l("ol",{class:"relative border-l border-gray-200 dark:border-gray-700"},[(i(!0),d(D,null,T(e(c).data,t=>(i(),d("li",{class:"mb-10 ml-6",key:t.id},[t.type=="App\\Notifications\\ArticleApprovedNotification"?(i(),d("span",{key:0,class:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"},[(i(),d("svg",{fill:"currentColor",viewBox:"0 0 20 20",class:"w-5 h-5 rounded-full shadow-lg"},[l("path",{d:"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"})]))])):p("",!0),t.type=="App\\Notifications\\ArticleApprovedNotification"?(i(),d("div",{key:1,class:"justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"},[l(e(A),{datess:t.created_at,classes:`flex sm:w-2/12 justify-between  mb-1\r
                text-xs\r
                font-normal\r
                text-gray-400\r
                sm:order-last sm:mb-0`,befor:""},{default:s(()=>[t.read_at?(i(),d("svg",{key:0,viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[l("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})])):p("",!0)]),_:2},1032,["datess"]),l("div",{class:"text-sm sm:w-10/12 font-normal text-gray-500 dark:text-gray-300"},[n(" Your article: "),l(e(w),{href:x.route("articles.show",[t.data.channel,t.data.article_slug]),class:"font-semibold text-blue-600 dark:text-blue-500 hover:underline"},{default:s(()=>[n(h(t.data.article_title),1)]),_:2},1032,["href"]),n(" has been approved. ")])])):p("",!0)]))),128))]),l(e($),{class:"mt-6",links:e(c).links},null,8,["links"])])):(i(),d("p",{key:1,class:"text-gray-600 text-base"}," You have no unread notifications "))]}),_:1},z))}}},L=B.setup;B.setup=(C,b)=>{const f=W();return(f.modules||(f.modules=new Set)).add("resources/js/Pages/User/Notifications.vue"),L?L(C,b):void 0};export{B as default};
