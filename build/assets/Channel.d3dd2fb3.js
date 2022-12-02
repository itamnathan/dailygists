import{l as i,o as l,j as h,n,k as e,x,u as t,p as d,y as c,z as u,s as p,f as m,t as b,L as k}from"./vendor.ab963d2a.js";import{_ as y}from"./AdminLayout.ef1e796c.js";import{F as v}from"./inertiajs-tables-laravel-query-builder.es.0285dc06.js";import"./app.5b96fbb3.js";import"./useDetictingMobile.ab43061e.js";import"./settings.ba59d097.js";import"./usermenu.0acaf69c.js";import"./_baseFor.6aa121f9.js";const w={id:"col-container ",class:"flex flex-wrap m-4"},N={id:"",class:"sm:w-2/5 w-full px-2"},D={class:""},V={class:"form-wrap"},B=e("h2",{class:"font-bold mb-6"},"Add New channel",-1),C={class:"grid"},S=e("label",{for:"tag-name"},"Name",-1),T=e("p",{class:"text-xs mb-4"}," The name is how it appears on your site. ",-1),A={class:"grid"},F=e("label",{for:"tag-description"},"Description",-1),$=e("p",{class:"text-xs mb-4"}," The description is not prominent by default; however, some themes may show it. ",-1),q=["disabled"],z=e("span",{class:"spinner"},null,-1),E={id:"col-right",class:"sm:w-3/5 w-full mt-4"},L={class:"grid"},M={key:0,class:"text-sm"},U={key:1,class:"font-bold text-base"},j={class:"flex divide divide-x-[1px] divide-gray-400"},G=["onClick"],X={__name:"Channel",props:["channels","allchannels"],setup(f){const o=i({name:null,slug:null,parent:null,description:null,image:null,color:null}),g=i();function _(a){confirm("Are you sure you want to Delete")&&g.delete(route("backend.article.channel.delete",a))}return(a,r)=>(l(),h(y,null,{default:n(()=>[e("div",w,[e("div",N,[e("div",D,[e("div",V,[B,e("form",{onSubmit:r[2]||(r[2]=x(s=>t(o).post(a.route("backend.article.channel.store"),{preserveScroll:!0,onSuccess:()=>t(o).reset()}),["prevent"]))},[e("div",C,[S,d(e("input",{id:"name",type:"text",size:"40",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":r[0]||(r[0]=s=>t(o).name=s),required:""},null,512),[[c,t(o).name]]),T]),e("div",A,[F,d(e("textarea",{id:"description",rows:"5",cols:"40",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":r[1]||(r[1]=s=>t(o).description=s)},null,512),[[c,t(o).description]]),$]),e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",disabled:t(o).processing},[u(" Add New channel "),z],8,q)],32)])])]),e("div",E,[p(t(v),{resource:f.channels,striped:!0,"prevent-overlapping-requests":!1,"preserve-scroll":"table-top"},{"cell(name)":n(({item:s})=>[e("div",L,[s.parent_id!=null?(l(),m("span",M,"--"+b(s.name),1)):(l(),m("span",U,b(s.name),1)),e("span",j,[p(t(k),{href:a.route("backend.article.channel.edit",s.slug),class:"px-1 text-xs"},{default:n(()=>[u(" Edit ")]),_:2},1032,["href"]),e("button",{onClick:H=>_(s.slug),class:"px-1 text-xs text-red-400"}," Delete ",8,G)])])]),_:1},8,["resource"])])])]),_:1}))}};export{X as default};
