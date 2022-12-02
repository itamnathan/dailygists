import v from"./Input.f80ea944.js";import w from"./Label.447fc42a.js";import I from"./InputError.a2e9d05f.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,f as C,k as e,e as M,Y as t,j as D,n as r,s as o,z as N,t as m}from"./vendor.ab963d2a.js";import{N as T,V as B,U as V}from"./dialog.97b945f7.js";import{o as j,f as q}from"./transition.a6e787c7.js";import"./dom.7db5f4cf.js";import"./hidden.cc743816.js";import"./micro-task.fe338338.js";import"./open-closed.ec16d171.js";import"./use-outside-click.52110303.js";function z(c,s){return u(),C("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})])}const E={props:{openModal:{type:Boolean,default:!1},header:{type:String,required:!0},body:{type:String,required:!0},confirm:{type:String,required:!0}},components:{Dialog:T,DialogOverlay:B,DialogTitle:V,TransitionChild:j,TransitionRoot:q,InformationCircleIcon:z,Input:v,InputError:I,Label:w},setup(){return{folderNameInput:M(null)}},data(){return{textInput:"",errorMessage:null}},methods:{closeModal:function(){this.$emit("update:openModal",!1),this.errorMessage=null},confirmBtnClicked:function(){this.textInput==null||this.textInput==""?(this.errorMessage="folder name is required",this.$refs.folderNameInput.focus()):(this.$emit("click:confirm",this.textInput),this.errorMessage=null,this.textInput="")}}},S={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},O=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),R={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},U={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},F={class:"sm:flex sm:items-start"},H={class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"},L={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Y={class:"mt-2"},A={class:"text-sm text-gray-500"},G={class:"mt-3"},J=e("label",{for:"input-modal__text-input",class:"sr-only"},"text input",-1),K={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"};function P(c,s,i,f,l,a){const p=t("DialogOverlay"),d=t("TransitionChild"),g=t("InformationCircleIcon"),x=t("DialogTitle"),_=t("Input"),h=t("InputError"),y=t("Dialog"),b=t("TransitionRoot");return u(),D(b,{as:"template",show:i.openModal},{default:r(()=>[o(y,{as:"div",class:"fixed z-[90] inset-0 overflow-y-auto",initialFocus:f.folderNameInput},{default:r(()=>[e("div",S,[o(d,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[o(p,{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),O,o(d,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[e("div",R,[e("div",U,[e("div",F,[e("div",H,[o(g,{class:"h-6 w-6 text-blue-600","aria-hidden":"true"})]),e("div",L,[o(x,{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:r(()=>[N(m(i.header),1)]),_:1}),e("div",Y,[e("p",A,m(i.body),1),e("div",G,[J,o(_,{id:"input-modal__text-input",type:"text",class:"mt-1 block w-full",required:"",modelValue:l.textInput,"onUpdate:modelValue":s[0]||(s[0]=n=>l.textInput=n),ref:"folderNameInput"},null,8,["modelValue"]),o(h,{message:l.errorMessage,class:"mt-1"},null,8,["message"])])])])])]),e("div",K,[e("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:s[1]||(s[1]=(...n)=>a.confirmBtnClicked&&a.confirmBtnClicked(...n))},m(i.confirm),1),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:s[2]||(s[2]=(...n)=>a.closeModal&&a.closeModal(...n))}," Cancel ")])])]),_:1})])]),_:1},8,["initialFocus"])]),_:1},8,["show"])}const ae=k(E,[["render",P]]);export{ae as default};
