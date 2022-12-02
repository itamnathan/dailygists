import{l as c,o as f,j as w,n,s as o,u as e,ab as _,k as t,z as V,D as g,x as b}from"./vendor.ab963d2a.js";import{_ as k}from"./GuestLayout.7aa3309d.js";import l from"./InputError.e12f9b9e.js";import m from"./InputLabel.45ae6166.js";import v from"./PrimaryButton.66eac2e0.js";import i from"./TextInput.d77fc545.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},h={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[o(m,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[o(m,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",P,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{h as default};
