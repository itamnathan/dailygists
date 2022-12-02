import{_ as x}from"./app.d35bf253.js";import{u as v}from"./useDetictingMobile.ab43061e.js";import{E as w,a1 as y,u as t,o as n,f as i,k as e,s as r,n as o,F as k,q as b,L as a,D as u,t as p,z as d,i as c}from"./vendor.ab963d2a.js";import{u as M}from"./settings.ba59d097.js";import{_ as z}from"./usermenu.5ff42336.js";const C={key:0,class:"flex items-center"},A={class:"text-right sm:hidden px-[5px]"},L=e("div",{class:"inline-flex w-full justify-center rounded-md text-gray-500 py-2 text-sm font-medium"},[e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])],-1),N=["innerHTML"],B={class:"grid space-y-3"},H=e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})],-1),T=e("span",{class:"px-2"},"Trending Articles",-1),E=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-linecap":"round",class:"w-6 h-6","aria-label":"Community"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})],-1),V=e("span",{class:"px-2"},"Community ",-1),R={__name:"mobilenav",setup(j){const h=w(()=>x(()=>import("./Halfmodal.2ea8795a.js"),["assets/Halfmodal.2ea8795a.js","assets/index.10b3df83.js","assets/vendor.ab963d2a.js"]));let f=v();const m=M(),{headernav:g}=y(m);return(s,D)=>t(f)?(n(),i("div",C,[e("div",A,[r(t(h),null,{button:o(()=>[L]),default:o(()=>[(n(!0),i(k,null,b(t(g),(l,_)=>(n(),i("div",{key:_,class:"px-1 py-1"},[r(t(a),{href:l.href,class:u([s.active?"bg-violet-500 text-white":"text-gray-900","group  space-x-2 flex w-full items-center rounded-md px-2 py-2 text-sm"])},{default:o(()=>[e("span",{innerHTML:l.svg,class:"text-black"},null,8,N),e("span",null,p(l.name),1)]),_:2},1032,["href","class"])]))),128)),e("div",B,[r(t(a),{href:s.route("articles"),class:"flex items-center hover:bg-gray-200 px-2 py-2 rounded"},{default:o(()=>[H,T]),_:1},8,["href"]),r(t(a),{href:s.route("forum"),class:"flex items-center hover:bg-gray-200 px-2 py-2 rounded"},{default:o(()=>[E,V]),_:1},8,["href"]),r(t(a),{href:s.route("users.notifications"),class:"hover:bg-gray-200 px-2 py-2 rounded"},{default:o(()=>[d("Notifications ")]),_:1},8,["href"]),r(t(a),{href:s.route("users.settings"),class:"hover:bg-gray-200 px-2 py-2 rounded"},{default:o(()=>[d("Settings")]),_:1},8,["href"]),r(t(a),{href:s.route("users.edit"),class:"hover:bg-gray-200 px-2 py-2 rounded"},{default:o(()=>[d("Edit Profile")]),_:1},8,["href"])])]),_:1})]),r(z),s.$page.props.isLoggedIn?(n(),i("span",{key:0,class:u(s.$page.props.hasNotification?"absolute top-2 right-2 block py-1 px-2 text-[9px] text-center rounded-full text-white shadow-solid bg-red-500":"hidden")},p(s.$page.props.hasNotification),3)):c("",!0)])):c("",!0)}};export{R as default};