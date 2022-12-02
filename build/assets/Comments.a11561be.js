import{_ as B}from"./app.d35bf253.js";import{e as S,al as O,m as D,K as H,o as g,f as v,g as L,s as d,i as C,k as e,t as x,w as T,P as N,$ as P,a0 as F,E as M,a1 as U,l as Y,Y as k,j as K,u as i,p as W,y as G,z as f,n as R,L as $,F as J,q as Q,T as X}from"./vendor.ab963d2a.js";import{u as Z}from"./index.10b3df83.js";import{u as ee}from"./ClapCommentShare.150fab23.js";import"./index.4200866c.js";const q=(t,r)=>{const n=t.__vccOpts||t;for(const[l,h]of r)n[l]=h;return n},te={},oe=t=>(P("data-v-259be2b2"),t=t(),F(),t),se={class:"container"},re=oe(()=>e("div",{class:"spinner"},null,-1)),ne=[re];function le(t,r){return g(),v("div",se,ne)}const ae=q(te,[["render",le],["__scopeId","data-v-259be2b2"],["__file","/home/oumoussa/side-projects/infinite/src/components/Spinner.vue"]]),ie=t=>({loading(){t.value="loading"},loaded(){t.value="loaded"},complete(){t.value="complete"},error(){t.value="error"}}),de=(t,r,n)=>()=>{const l=n.parentEl||document.documentElement;n.prevHeight=l.scrollHeight,r.loading(),t("infinite",r)},ce=(t,r)=>{const n=t.getBoundingClientRect();if(!r)return n.top>=0&&n.bottom<=window.innerHeight;const l=r.getBoundingClientRect();return n.top>=l.top&&n.bottom<=l.bottom},V=t=>{t.parentEl=document.querySelector(t.target)||null;let r=`0px 0px ${t.distance}px 0px`;t.top&&(r=`${t.distance}px 0px 0px 0px`);const n=new IntersectionObserver(l=>{l[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:r});return n.observe(t.infiniteLoading.value),n},ue={class:"state-error"},pe={__name:"InfiniteLoading",props:{top:{type:Boolean,required:!1},target:{type:[String,Boolean],required:!1},distance:{type:Number,required:!1,default:0},identifier:{required:!1},firstload:{type:Boolean,required:!1,default:!0},slots:{type:Object,required:!1}},emits:["infinite"],setup(t,{emit:r}){const n=t;let l=null;const h=S(null),c=S("ready"),{top:p,firstload:b,target:w,distance:E}=n,{identifier:y}=O(n),a={infiniteLoading:h,target:w,top:p,firstload:b,distance:E,prevHeight:0,parentEl:null};a.emit=de(r,ie(c),a);const z=()=>T(c,async o=>{const m=a.parentEl||document.documentElement;await N(),o=="loaded"&&p&&(m.scrollTop=m.scrollHeight-a.prevHeight),o=="loaded"&&ce(h.value,a.parentEl)&&a.emit(),o=="complete"&&l.disconnect()}),s=()=>T(y,()=>{c.value="ready",l.disconnect(),l=V(a)});return D(()=>{l=V(a),z(),y&&s()}),H(()=>{l.disconnect()}),(o,m)=>(g(),v("div",{ref_key:"infiniteLoading",ref:h},[c.value=="loading"?L(o.$slots,"spinner",{key:0},()=>[d(ae)],!0):C("v-if",!0),c.value=="complete"?L(o.$slots,"complete",{key:1},()=>{var _;return[e("span",null,x(((_=t.slots)==null?void 0:_.complete)||"No more results!"),1)]},!0):C("v-if",!0),c.value=="error"?L(o.$slots,"error",{key:2,retry:a.emit},()=>{var _;return[e("span",ue,[e("span",null,x(((_=t.slots)==null?void 0:_.error)||"Oops something went wrong!"),1),e("button",{class:"retry",onClick:m[0]||(m[0]=(...j)=>a.emit&&a.emit(...j))}," retry ")])]},!0):C("v-if",!0)],512))}},ge=q(pe,[["__scopeId","data-v-9d82030b"],["__file","/home/oumoussa/side-projects/infinite/src/components/InfiniteLoading.vue"]]);const he={key:0,class:"flex justify-end overscroll-contain z-[999]"},me={ref:"commentmodal",class:"z-[100] no-scrollbar fixed sm:top-0 top-10 right-0 ease-in-out duration-500 min-h-full w-full sm:w-[27%] rounded-xl sm:rounded-none bg-white shadow-xl"},_e={class:"w-full no-scrollbar max-h-screen overflow-y-auto overscroll-y-auto px-4"},fe={class:"flex justify-between relative items-center pt-4"},ve={class:"am ax"},be={class:"text-[24px] font-bold"},ye={class:"flex justify-between items-center"},xe=e("a",{class:"text-gray-600 hover:text-blue-700"},[e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"currentColor"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z"})])],-1),we=e("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"currentColor",class:"kk"},[e("path",{d:"M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"})],-1),ke=[we],Ce={class:""},Ee={key:0,class:"absolute sm:bottom-0 bottom-10 left-0 right-0 z-10 w-full"},ze=e("label",{for:"chat",class:"sr-only"},"Your message",-1),je={class:"flex items-center px-1 py-[6px] rounded-lg bg-gray-50 dark:bg-gray-700"},Ie=e("button",{type:"button",class:"p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"},[e("svg",{"aria-hidden":"true",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clip-rule":"evenodd"})]),e("span",{class:"sr-only"},"Add emoji")],-1),Be=e("svg",{"aria-hidden":"true",class:"w-6 h-6 rotate-90",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})],-1),Le=e("span",{class:"sr-only"},"Send message",-1),Me=[Be,Le],Re={key:1,class:"absolute sm:bottom-0 bottom-10 left-0 right-0 z-10 w-full"},Se={class:"text-center px-2 bg-it-h1 text-white"},Te={class:"mb-16"},$e={id:"exampleWrapper",class:"relative pt-6"},Ve={class:"border-l border-gray-200 dark:border-gray-700"},qe={class:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900"},Ae=["src"],Oe={class:"ml-[4px] relative px-2 py-1 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"},De={class:"justify-between items-center flex"},He={class:"text-sm font-normal text-gray-500 dark:text-gray-300"},Ne={class:"absolute -right-4 top-0"},Pe={class:"p-2 rounded hover:bg-gray-100"},Fe=e("span",{"x-text":"edit ? 'Cancel editing' : 'Edit'"}," Report Spam ",-1),Ue={class:"flex p-3 rounded hover:bg-gray-100"},Ye=e("span",{"x-text":"edit ? 'Cancel editing' : 'Edit'"}," Edit ",-1),Ke={class:"flex p-3 rounded hover:bg-gray-100"},We={class:"flex p-3 rounded hover:bg-gray-100"},Ge={class:"flex items-center justify-center text-center text-red-500"},tt={__name:"Comments",props:["slug","type","id"],setup(t){const r=t,n=M(()=>B(()=>import("./Ago.882a37c3.js"),["assets/Ago.882a37c3.js","assets/moment.9709ab41.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/vendor.ab963d2a.js"]));M(()=>B(()=>import("./Editmodal.69c4b178.js"),["assets/Editmodal.69c4b178.js","assets/vendor.ab963d2a.js","assets/transition.a6e787c7.js","assets/dom.7db5f4cf.js","assets/open-closed.ec16d171.js"]));const l=M(()=>B(()=>import("./contenteditmodal.b9d59eb7.js"),["assets/contenteditmodal.b9d59eb7.js","assets/index.10b3df83.js","assets/vendor.ab963d2a.js"])),h=ee(),{opencomment:c}=U(h),p=S([]);let b=1;function w(s){p.value.push(s)}const E=async s=>{r.type=="threads"?(p.value.length<10&&s.complete(),axios.get(route("threads.replies",{thread:r.slug,page:b})).then(o=>{o.data.data.forEach(w),o.data.data.length<10?s.complete():s.loaded(),b++})):r.type=="articles"&&axios.get(route("articles.replies",{article:r.slug,page:b})).then(o=>{o.data.data.forEach(w),o.data.data.length<10?s.complete():s.loaded(),b++})},y=Z(c),a=Y({body:null,replyable_id:r.id,replyable_type:r.type});function z(){axios.post(route("replies.store"),a).then(s=>{p.value=s.data.data,a.body=null})}return(s,o)=>{const m=k("x-heroicon-o-ellipsis-horizontal"),_=k("x-heroicon-o-pencil"),j=k("x-heroicon-o-exclamation-triangle"),A=k("x-heroicon-o-trash");return g(),K(X,{to:"#modals"},[e("div",null,[i(c)?(g(),v("div",he,[e("div",{onClick:o[0]||(o[0]=u=>i(y)()),class:"fixed inset-0 bg-gray-700 z-50 duration-500 bg-opacity-20 ease-in-out transition-all overflow-y-hidden flex justify-center items-center"}),e("div",me,[e("div",_e,[e("div",fe,[e("div",ve,[e("h2",be,"Responses ("+x(p.value.length)+")",1)]),e("div",ye,[xe,e("button",{class:"text-red-400 hover:text-red-700",onClick:o[1]||(o[1]=u=>i(y)())},ke)])]),e("div",Ce,[s.$page.props.isLoggedIn?(g(),v("div",Ee,[ze,e("div",je,[Ie,W(e("textarea",{id:"chat",rows:"1","onUpdate:modelValue":o[2]||(o[2]=u=>i(a).body=u),class:"block w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Your message..."},null,512),[[G,i(a).body]]),e("button",{onClick:z,class:"inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"},Me)])])):(g(),v("div",Re,[e("div",Se,[f(" Please "),d(i($),{href:s.route("register"),class:"text-yellowish font-bold"},{default:R(()=>[f("Register")]),_:1},8,["href"]),f(" Or "),d(i($),{href:s.route("login"),class:"text-yellowish font-bold"},{default:R(()=>[f("Login")]),_:1},8,["href"]),f(" to participate on the discussions ")])])),e("div",Te,[e("div",$e,[e("ol",Ve,[(g(!0),v(J,null,Q(p.value,u=>(g(),v("li",{class:"mb-4 ml-4",key:u.uuid},[e("span",qe,[e("img",{class:"rounded-full shadow-lg",src:u.author_relation.profile_photo_url},null,8,Ae)]),e("div",Oe,[e("div",De,[d(i(n),{datess:u.created_at,classes:"mb-1 text-[9px] font-normal text-gray-400 order-last sm:mb-0",befor:""},null,8,["datess"]),e("div",He," @"+x(u.author_relation.username),1)]),e("div",null,x(u.body),1),e("div",Ne,[d(i(l),null,{default:R(()=>[e("div",Pe,[e("button",{onClick:o[3]||(o[3]=I=>s.open=!s.open)},[d(m,{class:"w-6 h-6"}),Fe])]),e("div",Ue,[e("button",{onClick:o[4]||(o[4]=I=>{s.edit=!s.edit,s.open=!1})},[d(_,{class:"w-6 h-6"}),Ye])]),e("div",Ke,[e("button",{onClick:o[5]||(o[5]=I=>s.activeModal="markAsSpam-{{ $reply->id }}")},[d(j,{class:"w-6 h-6 text-red-500"}),f(" Mark as spam ")])]),e("div",We,[e("button",{onClick:o[6]||(o[6]=I=>s.activeModal="deleteReply-{{ $reply->id }}")},[d(A,{class:"w-6 h-6 text-red-500"}),f(" Delete ")])])]),_:1})])])]))),128))])]),e("div",Ge,[d(i(ge),{onInfinite:E})])])])])],512)])):C("",!0)])])}}};export{tt as default};
