const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModelListV2-DbXcP8q3.js","assets/vue-vendor-BToyv_hf.js","assets/vendor-BHXU4RDR.js","assets/three-vendor-DEpZawDU.js","assets/rapier-vendor-CKC5f6tm.js","assets/ModelListV2-DR73Tifi.css","assets/ModelDetail-CxHD8qjV.js","assets/vue-router-vendor-BWG2vKKy.js","assets/models-BxZPnvg1.js","assets/ModelDetail-Bcl7nNNg.css","assets/ChunkedLoading-DIcuf4lG.js","assets/@mkkellogg/gaussian-splats-3d-vendor-Cpn6cecF.js","assets/stats-CdX-qeJD.js","assets/index-B5fixZ1z.js","assets/ChunkedLoading-B12ZqkuR.css","assets/Metaverse-BGVDLHqs.js","assets/lil-gui-vendor-hsJpI9MV.js","assets/Metaverse-C1c2c8Ql.css","assets/Spark-WoHhdAMG.js","assets/@sparkjsdev/spark-vendor-iqh8VWon.js","assets/Spark-CTttbncf.css","assets/SceneViewer-BH8xXM_h.js","assets/AudioPanel-AFTXslEC.js","assets/AudioPanel-B5tTgb7e.css","assets/SceneViewer-D_tSZtIA.css","assets/DebugSceneViewer-ChRqLnLI.js","assets/DebugSceneViewer-Bqid_fKW.css","assets/Spark-daMENpgq.js","assets/util-A6kLyAxc.js","assets/Spark-BPlu45UN.css","assets/Mkkellogg-CaprZ91V.js","assets/Mkkellogg-B1u-dj1B.css"])))=>i.map(i=>d[i]);
import{d as v,i as h,o as b,c as S,n as E,g as k,r as L,a as l,b as D,e as R,f as W,h as O,j as x}from"./vue-vendor-BToyv_hf.js";import{_ as a,V as C,J as $,a as P}from"./vendor-BHXU4RDR.js";import{bF as A}from"./three-vendor-DEpZawDU.js";import"./rapier-vendor-CKC5f6tm.js";(function(){if(typeof window>"u")return;const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const I=v({__name:"RouterView",setup(o){const e=h("router"),t=h("route"),n=l(()=>{if(!e)return null;const r=e.currentComponent.value;return typeof r=="function"?D(r):r}),i=l(()=>{if(!t)return{};const r=t.value;return{...r.query,...r.params}});return(r,s)=>(b(),S(L(n.value),E(k(i.value)),null,16))}}),T=(o,e)=>{const t=o.__vccOpts||o;for(const[n,i]of e)t[n]=i;return t},q={id:"app"},M={__name:"App",setup(o){return(e,t)=>(b(),R("div",q,[W(I)]))}},V=T(M,[["__scopeId","data-v-0d8f920f"]]);class B{constructor(e,t={}){this.routes=[],this.base="",this.currentRoute=O({path:"/",query:{},params:{},meta:{}}),this.routes=e,this.base=(t.base||"").replace(/\/+$/,""),this.base&&!this.base.startsWith("/")&&(this.base="/"+this.base),this.init()}withBase(e){return!this.base||e.startsWith(this.base+"/")||e===this.base?e:this.base+(e.startsWith("/")?e:"/"+e)}stripBase(e){return this.base?e===this.base?"/":e.startsWith(this.base+"/")?e.slice(this.base.length)||"/":e:e}get route(){return l(()=>this.currentRoute)}get currentComponent(){return l(()=>this.routes.find(t=>t.path===this.currentRoute.path)?.component||this.routes[0]?.component)}push(e){console.log("push==",e);let t="";if(typeof e=="string")t=e;else if(t=e.path,e.query&&Object.keys(e.query).length>0){const n=new URLSearchParams(e.query).toString();t+=`?${n}`}window.history.pushState({},"",this.withBase(t)),this.updateRoute()}replace(e){let t="";if(typeof e=="string")t=e;else if(t=e.path,e.query&&Object.keys(e.query).length>0){const n=new URLSearchParams(e.query).toString();t+=`?${n}`}window.history.replaceState({},"",this.withBase(t)),this.updateRoute()}back(){window.history.back()}forward(){window.history.forward()}install(e){e.config.globalProperties.$router=this,e.config.globalProperties.$route=this.route,e.provide("router",this),e.provide("route",this.route)}init(){window.addEventListener("popstate",()=>{this.updateRoute()}),this.updateRoute()}parseUrl(e=window.location.pathname+window.location.search){const[t,n]=e.split("?"),i=this.stripBase(t),r={};return n&&new URLSearchParams(n).forEach((u,_)=>{r[_]=u}),{pathname:i,query:r}}updateRoute(){const{pathname:e,query:t}=this.parseUrl(),n=this.routes.find(i=>i.path===e)||this.routes[0];this.currentRoute.path=e,this.currentRoute.name=n?.name,this.currentRoute.query=t,this.currentRoute.params=n?.props?t:{},this.currentRoute.meta=n?.meta||{},this.updateDocumentMeta(n?.meta)}updateDocumentMeta(e){if(!e)return;if(e.title){document.title=e.title;const r=document.querySelector('meta[property="og:title"]');r&&r.setAttribute("content",e.title);const s=document.querySelector('meta[name="twitter:title"]');s&&s.setAttribute("content",e.title)}if(e.description){const r=document.querySelector('meta[name="description"]');r&&r.setAttribute("content",e.description);const s=document.querySelector('meta[property="og:description"]');s&&s.setAttribute("content",e.description);const u=document.querySelector('meta[name="twitter:description"]');u&&u.setAttribute("content",e.description)}if(e.keywords){const r=document.querySelector('meta[name="keywords"]');r&&r.setAttribute("content",e.keywords)}const t=`https://web-wide-world.space${this.currentRoute.path}`;let n=document.querySelector('link[rel="canonical"]');n||(n=document.createElement("link"),n.rel="canonical",document.head.appendChild(n)),n.href=t;const i=document.querySelector('meta[property="og:url"]');i&&i.setAttribute("content",t)}}function j(o,e={}){return new B(o,e)}const N=[{path:"/",name:"ModelList",component:()=>a(()=>import("./ModelListV2-DbXcP8q3.js"),__vite__mapDeps([0,1,2,3,4,5])),meta:{title:"Web Wide World",description:"探索高质量3D Gaussian Splatting重建场景，体验沉浸式虚拟世界。By Nobody, For Everyone - 平凡人共创普惠世界。",keywords:"3D Gaussian Splatting, 3DGS, 场景列表, 3D查看器"}},{path:"/model",name:"ModelDetail",component:()=>a(()=>import("./ModelDetail-CxHD8qjV.js"),__vite__mapDeps([6,7,1,8,2,3,4,9])),meta:{title:"场景详情 - Web Wide World",description:"查看3D场景的详细信息和预览。"},props:!0},{path:"/simple-viewer",name:"ChunkedLoading",component:()=>a(()=>import("./ChunkedLoading-DIcuf4lG.js"),__vite__mapDeps([10,7,1,3,11,12,13,8,2,4,14])),meta:{title:"简易查看器 - Web Wide World",description:"轻量级3D场景查看器，支持分块加载大型场景。"},props:!0},{path:"/viewer",name:"Viewer",component:()=>a(()=>import("./Metaverse-BGVDLHqs.js"),__vite__mapDeps([15,3,13,11,16,2,4,12,1,17])),meta:{title:"Web Wide World",description:"沉浸式元宇宙体验，控制虚拟角色在3D Gaussian Splatting场景中自由行走探索。",keywords:"元宇宙, 虚拟角色, 3D探索, 沉浸式体验"},props:!0},{path:"/spark",name:"spark",component:()=>a(()=>import("./Spark-WoHhdAMG.js"),__vite__mapDeps([18,7,1,3,19,12,2,4,20])),meta:{title:"Spark 查看器 - Web Wide World",description:"基于 Spark 引擎的高性能3D Gaussian Splatting渲染器。"},props:!0},{path:"/viewer2",name:"viewer2",component:()=>a(()=>import("./SceneViewer-BH8xXM_h.js"),__vite__mapDeps([21,1,22,2,3,4,23,13,11,24])),meta:{title:"Web Wide World",description:"新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。",keywords:"场景查看器, 3DGS渲染, 物理引擎"},props:!0},{path:"/debug-viewer",name:"debugViewer",component:()=>a(()=>import("./DebugSceneViewer-ChRqLnLI.js"),__vite__mapDeps([25,1,22,2,3,4,23,13,11,26])),meta:{title:"Debug Scene Viewer",description:"调试用场景查看器。"},props:!0},{path:"/metaverse-interaction",name:"MetaverseInteraction",component:()=>a(()=>import("./Metaverse-BGVDLHqs.js"),__vite__mapDeps([15,3,13,11,16,2,4,12,1,17])),meta:{title:"元宇宙交互 - Web Wide World",description:"元宇宙交互体验，在虚拟世界中与3D场景互动。"},props:!0},{path:"/test-gp/spark",name:"TestGPSpark",component:()=>a(()=>import("./Spark-daMENpgq.js"),__vite__mapDeps([27,3,7,1,19,28,2,4,29])),meta:{title:"Spark 测试 - Web Wide World"},props:!0},{path:"/test-gp/mkkellogg",name:"TestMkkellogg",component:()=>a(()=>import("./Mkkellogg-CaprZ91V.js"),__vite__mapDeps([30,11,3,7,1,28,2,4,31])),meta:{title:"Mkkellogg 测试 - Web Wide World"},props:!0}],U=j(N,{base:"/guyuan-museum/"}),m=5e3,c={log:[],info:[],warn:[],error:[],debug:[]},d=[];let g=!1;function z(o){const e=new WeakSet;return o.map(t=>{if(t instanceof Error)return`${t.name}: ${t.message}
${t.stack??""}`;if(typeof t=="object"&&t!==null)try{return JSON.stringify(t,(n,i)=>{if(typeof i=="object"&&i!==null){if(e.has(i))return"[Circular]";e.add(i)}return i})}catch{return String(t)}return String(t)}).join(" ")}function p(o,e){const t={time:new Date().toISOString(),level:o,message:z(e)},n=c[o];n.push(t),n.length>m&&n.shift(),d.push(t),d.length>m*2&&d.shift()}function G(){["log","info","warn","error","debug"].forEach(e=>{const t=console[e].bind(console);console[e]=(...n)=>{try{p(e,n)}catch{}t(...n)}}),window.addEventListener("error",e=>{p("error",[`[window.error] ${e.message}`,`at ${e.filename}:${e.lineno}:${e.colno}`,e.error])}),window.addEventListener("unhandledrejection",e=>{p("error",["[unhandledrejection]",e.reason])})}function f(o){return o.map(e=>`[${e.time}] [${e.level.toUpperCase()}] ${e.message}`).join(`
`)}function H(){const o={时间:new Date().toISOString(),URL:window.location.href,UA:navigator.userAgent,语言:navigator.language,窗口尺寸:{width:window.innerWidth,height:window.innerHeight},屏幕尺寸:{width:window.screen?.width,height:window.screen?.height},像素比:window.devicePixelRatio,在线:navigator.onLine,日志条数:{log:c.log.length,info:c.info.length,warn:c.warn.length,error:c.error.length,debug:c.debug.length}};return JSON.stringify(o,null,2)}function F(o,e){const t=URL.createObjectURL(o),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),1e3)}async function J(){const o=new $;o.file("env.txt",H()),o.file("all.log",f(d)),Object.keys(c).forEach(s=>{o.file(`${s}.log`,f(c[s]))});const e=await o.generateAsync({type:"blob"}),t=new Date,n=s=>String(s).padStart(2,"0"),i=`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`,r=`${n(t.getHours())}-${n(t.getMinutes())}-${n(t.getSeconds())}`;F(e,`h5-logs-${i}_${r}.zip`)}const w=`
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 3v12"/>
  <path d="M7 10l5 5 5-5"/>
  <path d="M5 21h14"/>
</svg>`,K=`
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" aria-hidden="true"
     style="animation: debug-dl-spin 0.8s linear infinite;">
  <path d="M12 3a9 9 0 1 0 9 9" opacity="0.9"/>
</svg>`,Y=`
@keyframes debug-dl-spin { to { transform: rotate(360deg); } }

/* ===== 左：下载日志按钮 ===== */
#debug-download-logs-btn {
  position: fixed;
  /* 默认位置（vConsole 未就绪时的占位），后续 syncPosition 会接管 */
  right: 76px;
  bottom: 16px;
  z-index: 10001;
  /* 宽度收紧到与 vConsole switch 字宽相近，避免左侧块过宽显得不协调 */
  width: 40px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  /* 仅左侧圆角；右边与 vConsole switch 拼接 */
  border-radius: 15px 0 0 15px;
  background: #1b5e20;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
/* 点击/悬浮均不变色，保持与 vConsole switch 视觉一致 */
#debug-download-logs-btn:hover,
#debug-download-logs-btn:active,
#debug-download-logs-btn:focus { background: #1b5e20; outline: none; }
#debug-download-logs-btn:disabled { opacity: 0.7; cursor: progress; }
#debug-download-logs-btn svg { display: block; }

/* ===== 右：覆盖 vConsole 默认 switch 样式，与下载按钮拼成一体 ===== */
/* 使用较高优先级（双 id + !important）以压过 vConsole 自身样式 */
#__vconsole .vc-switch,
.vc-switch {
  /* 仅右侧圆角，左边与下载按钮拼接 */
  border-radius: 0 15px 15px 0 !important;
  /* 与下载按钮统一高度 / 字体 / 内边距 */
  height: 30px !important;
  min-width: 64px !important;
  padding: 0 12px !important;
  line-height: 30px !important;
  font-size: 12px !important;
  /* 与下载按钮同色系（稍浅的深绿，区分但贴合） */
  background-color: #2e7d32 !important;
  color: #fff !important;
  /* 去除默认阴影，避免与下载按钮之间出现暗缝 */
  box-shadow: none !important;
  border: none !important;
}
#__vconsole .vc-switch:hover,
.vc-switch:hover {
  background-color: #388e3c !important;
}
`;function Z(){if(document.getElementById("debug-download-logs-style"))return;const o=document.createElement("style");o.id="debug-download-logs-style",o.textContent=Y,document.head.appendChild(o)}function X(o){const e=()=>{const i=document.querySelector(".vc-switch");if(!i)return;const r=i.getBoundingClientRect();if(!r.width||!r.height)return;const s=window.innerWidth-r.right,u=window.innerHeight-r.bottom;o.style.right=`${s+r.width}px`,o.style.bottom=`${u}px`,o.style.height=`${r.height}px`};let t=0;const n=window.setInterval(()=>{const i=document.querySelector(".vc-switch");t+=1,i?(window.clearInterval(n),e(),new MutationObserver(e).observe(i,{attributes:!0,attributeFilter:["style","class"]}),window.addEventListener("resize",e),window.addEventListener("orientationchange",e)):t>50&&window.clearInterval(n)},100)}function Q(){if(document.getElementById("debug-download-logs-btn"))return;Z();const o=document.createElement("button");o.id="debug-download-logs-btn",o.type="button",o.title="下载日志 zip",o.setAttribute("aria-label","下载日志"),o.innerHTML=w,o.addEventListener("click",()=>{o.disabled||(o.disabled=!0,o.innerHTML=K,J().catch(t=>{console.error("[debug] 下载日志失败",t),alert("下载日志失败，请查看 console")}).finally(()=>{o.disabled=!1,o.innerHTML=w}))});const e=()=>{document.body.appendChild(o),X(o)};document.body?e():document.addEventListener("DOMContentLoaded",e)}function ee(){try{const o=window.location.href||"";return/[?&]debug(?:=(?:true|1)?)?(?=&|#|$)/i.test(o)}catch{return!1}}function te(){g||(g=!0,G(),new C,Q(),console.info("[debug] debug 模式已启用，可点击右下角按钮下载日志 zip"))}window.ViewerSDK=P;window.THREE=A;ee()&&te();const y=x(V);y.use(U);y.mount("#app");export{T as _,U as r};
//# sourceMappingURL=index-ClkUN6Hr.js.map
