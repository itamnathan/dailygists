import{o as l,f as d,k as u}from"./vendor.ab963d2a.js";class c{constructor(e){this.loader=e}upload(){return this.loader.file.then(e=>new Promise((t,r)=>{this._initRequest(),this._initListeners(t,r,e),this._sendRequest(e)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open("POST","/mediamanager/ckuploadImage",!0),e.responseType="json"}_initListeners(e,t,r){const a=this.xhr,n=this.loader,i=`Couldn't upload file: ${r.name}.`;a.addEventListener("error",()=>t(i)),a.addEventListener("abort",()=>t()),a.addEventListener("load",()=>{const s=a.response;if(!s||s.error)return t(s&&s.error?s.error.message:i);e({default:s.url})}),a.upload&&a.upload.addEventListener("progress",s=>{s.lengthComputable&&(n.uploadTotal=s.total,n.uploaded=s.loaded)})}_sendRequest(e){const t=new FormData;t.append("upload",e),this.xhr.send(t)}}function h(o,e){return l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[u("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z","clip-rule":"evenodd"})])}function f(o){return{all:o=o||new Map,on:function(e,t){var r=o.get(e);r?r.push(t):o.set(e,[t])},off:function(e,t){var r=o.get(e);r&&(t?r.splice(r.indexOf(t)>>>0,1):o.set(e,[]))},emit:function(e,t){var r=o.get(e);r&&r.slice().map(function(a){a(t)}),(r=o.get("*"))&&r.slice().map(function(a){a(e,t)})}}}export{c as U,f as m,h as r};