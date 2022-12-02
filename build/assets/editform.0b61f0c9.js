import{_ as d}from"./app.d35bf253.js";import{E as c,B as x,l as k,e as E,o as _,j as I,n as u,u as e,z as p,k as o,s as t,f as P,x as T,L as U,p as g,M as L,i as A,y as C,D as B,C as D}from"./vendor.ab963d2a.js";const S={class:"col-span-6 sm:col-span-4"},N={class:"col-span-6 sm:col-span-4"},O={class:"col-span-6 sm:col-span-4"},R={class:"col-span-6 sm:col-span-4"},F=o("span",{class:"mt-2 text-sm text-gray-500"}," Change of email will require verification of the new email ",-1),M={key:0},j={class:"text-sm mt-2"},z={class:"mt-2 font-medium text-sm text-green-600"},W={class:"col-span-6 sm:col-span-4"},q=o("span",{class:"mt-2 text-sm text-gray-500"}," Enter your Twitter handle without the leading @ symbol ",-1),Y={class:"col-span-6 sm:col-span-4"},G=o("span",{class:"mt-2 text-sm text-gray-500"}," Enter your Instagram handle without the leading @ symbol ",-1),H={class:"col-span-6 sm:col-span-4"},J=o("span",{class:"mt-2 text-sm text-gray-500"}," Enter your Facebook handle with the leading http://facebook.com/myhaddle ",-1),K={class:"col-span-6 sm:col-span-4"},Q=o("span",{class:"mt-2 text-sm text-gray-500"}," Enter your Website with the leading http://example.com ",-1),X={class:"col-span-6 sm:col-span-4"},Z=o("span",{class:"mt-2 text-sm text-gray-500"}," The user bio is limited to 160 characters. ",-1),te={__name:"editform",props:{user:Object},setup($){const v=c(()=>d(()=>import("./ActionMessage.d4eedc25.js"),["assets/ActionMessage.d4eedc25.js","assets/vendor.ab963d2a.js"])),b=c(()=>d(()=>import("./FormSection.e0de79f6.js"),["assets/FormSection.e0de79f6.js","assets/vendor.ab963d2a.js","assets/SectionTitle.2645b547.js","assets/_plugin-vue_export-helper.cdc0426e.js"])),i=c(()=>d(()=>import("./InputError.e12f9b9e.js"),["assets/InputError.e12f9b9e.js","assets/vendor.ab963d2a.js"])),r=c(()=>d(()=>import("./InputLabel.45ae6166.js"),["assets/InputLabel.45ae6166.js","assets/vendor.ab963d2a.js"])),w=c(()=>d(()=>import("./PrimaryButton.66eac2e0.js"),["assets/PrimaryButton.66eac2e0.js","assets/vendor.ab963d2a.js"])),m=c(()=>d(()=>import("./TextInput.d77fc545.js"),["assets/TextInput.d77fc545.js","assets/vendor.ab963d2a.js"])),n=x(()=>D().props.value.auth.user),s=k({_method:"PUT",username:n.value.username,name:n.value.name,penname:n.value.penname,email:n.value.email,website:n.value.website,twitter:n.value.twitter,facebook:n.value.facebook,instagram:n.value.instagram,bio:n.value.bio}),f=E(null),h=()=>{f.value=!0},V=()=>{s.post(route("settings.profile.update"),{errorBag:"updateProfileInformation",preserveScroll:!0})};return(y,a)=>(_(),I(e(b),{onSubmitted:V},{title:u(()=>[p(" Profile Information ")]),description:u(()=>[p(" Update your account's profile information and email address. ")]),form:u(()=>[o("div",S,[t(e(r),{for:"username",value:"UserName @"}),t(e(m),{id:"username",modelValue:e(s).username,"onUpdate:modelValue":a[0]||(a[0]=l=>e(s).username=l),type:"text",class:"mt-1 block w-full",autocomplete:"username"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.username,class:"mt-2"},null,8,["message"])]),o("div",N,[t(e(r),{for:"name",value:"Full Name"}),t(e(m),{id:"name",modelValue:e(s).name,"onUpdate:modelValue":a[1]||(a[1]=l=>e(s).name=l),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.name,class:"mt-2"},null,8,["message"])]),o("div",O,[t(e(r),{for:"penname",value:"Pen Name"}),t(e(m),{id:"penname",modelValue:e(s).penname,"onUpdate:modelValue":a[2]||(a[2]=l=>e(s).penname=l),type:"text",class:"mt-1 block w-full",autocomplete:"penname"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.penname,class:"mt-2"},null,8,["message"])]),o("div",R,[t(e(r),{for:"email",value:"Email"}),t(e(m),{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[3]||(a[3]=l=>e(s).email=l),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.email,class:"mt-2"},null,8,["message"]),F,e(n).email_verified_at===null?(_(),P("div",M,[o("p",j,[p(" Your email address is unverified. "),t(e(U),{href:y.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:T(h,["prevent"])},{default:u(()=>[p(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),g(o("div",z," A new verification link has been sent to your email address. ",512),[[L,f.value]])])):A("",!0)]),o("div",W,[t(e(r),{for:"twitter",value:"Twitter handle"}),t(e(m),{id:"twitter",modelValue:e(s).twitter,"onUpdate:modelValue":a[4]||(a[4]=l=>e(s).twitter=l),type:"text",class:"mt-1 block w-full",autocomplete:"twitter"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.twitter,class:"mt-2"},null,8,["message"]),q]),o("div",Y,[t(e(r),{for:"instagram",value:"Instagram handle"}),t(e(m),{id:"instagram",modelValue:e(s).instagram,"onUpdate:modelValue":a[5]||(a[5]=l=>e(s).instagram=l),type:"text",class:"mt-1 block w-full",autocomplete:"instagram"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.instagram,class:"mt-2"},null,8,["message"]),G]),o("div",H,[t(e(r),{for:"facebook",value:"Facebook handle"}),t(e(m),{id:"facebook",modelValue:e(s).facebook,"onUpdate:modelValue":a[6]||(a[6]=l=>e(s).facebook=l),type:"text",class:"mt-1 block w-full",autocomplete:"facebook"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.facebook,class:"mt-2"},null,8,["message"]),J]),o("div",K,[t(e(r),{for:"website",value:"Website"}),t(e(m),{id:"website",modelValue:e(s).website,"onUpdate:modelValue":a[7]||(a[7]=l=>e(s).website=l),type:"text",class:"mt-1 block w-full",autocomplete:"website"},null,8,["modelValue"]),t(e(i),{message:e(s).errors.website,class:"mt-2"},null,8,["message"]),Q]),o("div",X,[t(e(r),{for:"bio",value:"Bio"}),g(o("textarea",{id:"bio","onUpdate:modelValue":a[8]||(a[8]=l=>e(s).bio=l),class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"},null,512),[[C,e(s).bio]]),t(e(i),{message:e(s).errors.bio,class:"mt-2"},null,8,["message"]),Z])]),actions:u(()=>[t(e(v),{on:e(s).recentlySuccessful,class:"mr-3"},{default:u(()=>[p(" Saved. ")]),_:1},8,["on"]),t(e(w),{class:B({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:u(()=>[p(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{te as default};
