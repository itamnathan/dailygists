import{B as b,l as x,e as a,o as w,f as y,k as t,X as v,x as d,C as k}from"./vendor.ab963d2a.js";const P=["onClick"],C=t("div",{class:"w-full flex justify-center h-4 bg-white backdrop-blur-sm bg-opacity-10 absolute sm:px-14 px-4 sm:top-[140px] top-[89px]"},null,-1),I={class:"w-full flex justify-center sm:px-14 px-4 items-center absolute sm:top-[50px] top-[49px]"},B={class:"capitalize text-[46px] font-bold"},j={class:"mt-2 relative"},F=["onClick"],S={__name:"avatar",setup(R){const c=b(()=>k().props.value.auth.user),r=x({_method:"PUT",avatar:null,cover:null}),u=a(c.value.profile_photo_url),o=a(null),i=a(c.value.profile_cover_url),s=a(null),p=()=>{o.value&&(r.avatar=o.value.files[0]),s.value&&(r.cover=s.value.files[0]),r.post(route("settings.profile.avatar.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>g()})},f=()=>{s.value.click()},h=()=>{o.value.click()},m=()=>{const e=s.value.files[0];if(!e)return;const l=new FileReader;l.onload=n=>{i.value=n.target.result},l.readAsDataURL(e),p()},_=()=>{const e=o.value.files[0];if(!e)return;const l=new FileReader;l.onload=n=>{u.value=n.target.result},l.readAsDataURL(e),p()},g=()=>{var e;(e=o.value)!=null&&e.value&&(o.value.value=null)};return(e,l)=>(w(),y("div",{class:"bg-teal-100 w-full sm:h-36 h-24 relative bg-cover",style:v("background-image: url("+i.value+");")},[t("input",{ref_key:"coverInput",ref:s,type:"file",class:"hidden",onChange:m},null,544),t("div",{class:"bg-gray-200 text-sm flex items-center justify-center rounded-full opacity-50 w-8 h-8 absolute top-6 right-6",onClick:d(f,["prevent"])}," edit ",8,P),C,t("div",I,[t("div",B,[t("input",{ref_key:"photoInput",ref:o,type:"file",class:"hidden",onChange:_},null,544),t("div",j,[t("span",{class:"block sm:w-40 sm:h-40 rounded-full w-20 h-20 border-4 border-teal-400 bg-cover bg-no-repeat bg-center",style:v("background-image: url('"+u.value+"');")},null,4),t("div",{class:"bg-gray-200 text-sm flex items-center justify-center rounded-full opacity-50 w-8 h-8 absolute sm:top-6 top-0 sm:right-6 right-0",onClick:d(h,["prevent"])}," edit ",8,F)])])])],4))}};export{S as default};
