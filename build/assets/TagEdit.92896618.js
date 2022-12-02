import{l as u,o as c,j as g,n as b,k as e,x as p,u as t,p as l,y as d,z as m}from"./vendor.ab963d2a.js";import{_ as f}from"./AdminLayout.ef1e796c.js";import"./app.5b96fbb3.js";import"./useDetictingMobile.ab43061e.js";import"./settings.ba59d097.js";import"./usermenu.0acaf69c.js";const _={id:"col-container ",class:"flex m-4"},h={id:"col-left",class:"px-2"},x={class:"col-wrap"},y={class:"form-wrap"},k=e("h2",{class:"font-bold mb-6"},"Add New tag",-1),v={class:"grid"},w=e("label",{for:"tag-name"},"Name",-1),N=e("p",{class:"text-xs mb-4"}," The name is how it appears on your site. ",-1),T={class:"grid"},S=e("label",{for:"tag-slug"},"Slug",-1),V=e("p",{class:"text-xs mb-4"}," The \u201Cslug\u201D is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens. ",-1),z=["disabled"],B=e("span",{class:"spinner"},null,-1),C={__name:"TagEdit",props:["tag"],setup(n){const a=n,s=u({id:a.tag.id,name:a.tag.name,slug:a.tag.slug});return(i,r)=>(c(),g(f,{title:"tag"},{default:b(()=>[e("div",_,[e("div",h,[e("div",x,[e("div",y,[k,e("form",{onSubmit:r[2]||(r[2]=p(o=>{t(s).put(i.route("backend.article.tag.update",t(s).id),{preserveScroll:!0,onSuccess:()=>{t(s).defaults({id:null,name:null,slug:null,description:null}),t(s).reset()}})},["prevent"]))},[e("div",v,[w,l(e("input",{id:"name",type:"text",size:"40",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":r[0]||(r[0]=o=>t(s).name=o),required:""},null,512),[[d,t(s).name]]),N]),e("div",T,[S,l(e("input",{id:"slug",type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",size:"40","onUpdate:modelValue":r[1]||(r[1]=o=>t(s).slug=o)},null,512),[[d,t(s).slug]]),V]),e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",disabled:t(s).processing},[m(" Add New tag "),B],8,z)],32)])])])])]),_:1}))}};export{C as default};