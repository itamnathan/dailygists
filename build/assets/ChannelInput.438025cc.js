import{s as i}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang.df920d13.js";import{u as p}from"./ckeditor.a20681db.js";import{e as m,a1 as d,w as f,m as h,o as v,j as _,u as t,G as x}from"./vendor.ab963d2a.js";const b={__name:"ChannelInput",setup(k){const a=m([]),l=p(),{channels:s,selectedChannels:e}=d(l);f(()=>e.value,()=>{s.value.length=0,e.value.forEach(u)});function u(o){s.value.push(o.id)}h(()=>{r()});function r(){axios.get("/api/channels").then(o=>{a.value=o.data})}return(o,n)=>(v(),_(t(i),{modelValue:t(e),"onUpdate:modelValue":n[0]||(n[0]=c=>x(e)?e.value=c:null),options:a.value,multiple:!0,"close-on-select":!0,placeholder:"Choose Some channels",label:"name","track-by":"id",max:3},null,8,["modelValue","options"]))}};export{b as default};