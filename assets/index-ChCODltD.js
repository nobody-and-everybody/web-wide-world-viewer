const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ModelListV2-SeGULELN.js","./vue-vendor-BToyv_hf.js","./vendor-05uv04Tk.js","./three-vendor-ExVgs5RZ.js","./rapier-vendor-CKC5f6tm.js","./ModelListV2-DR73Tifi.css","./ModelDetail-CyjW95M7.js","./vue-router-vendor-BWG2vKKy.js","./models-BxZPnvg1.js","./ModelDetail-Bcl7nNNg.css","./ChunkedLoading-Dx-tXs2H.js","./@mkkellogg/gaussian-splats-3d-vendor-DPD0gTPE.js","./stats-CtWWLCzl.js","./index-Cn47NFB8.js","./ChunkedLoading-B12ZqkuR.css","./Metaverse-B4MOwN4X.js","./lil-gui-vendor-hsJpI9MV.js","./Metaverse-C1c2c8Ql.css","./Spark-CWAANqkP.js","./@sparkjsdev/spark-vendor-DXCzmyed.js","./Spark-CTttbncf.css","./SceneViewer-ChrnHILV.js","./AudioPanel-JRSCvIDB.js","./AudioPanel-pUO5BVfr.css","./SceneViewer-D_tSZtIA.css","./DebugSceneViewer-WmB9juvp.js","./DebugSceneViewer-Bqid_fKW.css","./Spark-H_BwOmPX.js","./util-A6kLyAxc.js","./Spark-BPlu45UN.css","./Mkkellogg-C6uUqMCv.js","./Mkkellogg-B1u-dj1B.css"])))=>i.map(i=>d[i]);
import{d as _,i as m,o as b,c as v,n as S,g as k,r as E,a as l,b as L,e as D,f as R,h as O,j as x}from"./vue-vendor-BToyv_hf.js";import{_ as a,V as C,J as W}from"./vendor-05uv04Tk.js";import"./three-vendor-ExVgs5RZ.js";import"./rapier-vendor-CKC5f6tm.js";(function(){if(typeof window>"u")return;const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const $=_({__name:"RouterView",setup(o){const e=m("router"),t=m("route"),n=l(()=>{if(!e)return null;const i=e.currentComponent.value;return typeof i=="function"?L(i):i}),r=l(()=>{if(!t)return{};const i=t.value;return{...i.query,...i.params}});return(i,s)=>(b(),v(E(n.value),S(k(r.value)),null,16))}}),A=(o,e)=>{const t=o.__vccOpts||o;for(const[n,r]of e)t[n]=r;return t},P={id:"app"},I={__name:"App",setup(o){return(e,t)=>(b(),D("div",P,[R($)]))}},q=A(I,[["__scopeId","data-v-0d8f920f"]]);class M{constructor(e){this.routes=[],this.currentRoute=O({path:"/",query:{},params:{},meta:{}}),this.routes=e,this.init()}get route(){return l(()=>this.currentRoute)}get currentComponent(){return l(()=>this.routes.find(t=>t.path===this.currentRoute.path)?.component||this.routes[0]?.component)}push(e){let t="";if(typeof e=="string")t=e;else if(t=e.path,e.query&&Object.keys(e.query).length>0){const n=new URLSearchParams(e.query).toString();t+=`?${n}`}window.history.pushState({},"",t),this.updateRoute()}replace(e){let t="";if(typeof e=="string")t=e;else if(t=e.path,e.query&&Object.keys(e.query).length>0){const n=new URLSearchParams(e.query).toString();t+=`?${n}`}window.history.replaceState({},"",t),this.updateRoute()}back(){window.history.back()}forward(){window.history.forward()}install(e){e.config.globalProperties.$router=this,e.config.globalProperties.$route=this.route,e.provide("router",this),e.provide("route",this.route)}init(){window.addEventListener("popstate",()=>{this.updateRoute()}),this.updateRoute()}parseUrl(e=window.location.pathname+window.location.search){const[t,n]=e.split("?"),r={};return n&&new URLSearchParams(n).forEach((s,u)=>{r[u]=s}),{pathname:t,query:r}}updateRoute(){const{pathname:e,query:t}=this.parseUrl(),n=this.routes.find(r=>r.path===e)||this.routes[0];this.currentRoute.path=e,this.currentRoute.name=n?.name,this.currentRoute.query=t,this.currentRoute.params=n?.props?t:{},this.currentRoute.meta=n?.meta||{},this.updateDocumentMeta(n?.meta)}updateDocumentMeta(e){if(!e)return;if(e.title){document.title=e.title;const i=document.querySelector('meta[property="og:title"]');i&&i.setAttribute("content",e.title);const s=document.querySelector('meta[name="twitter:title"]');s&&s.setAttribute("content",e.title)}if(e.description){const i=document.querySelector('meta[name="description"]');i&&i.setAttribute("content",e.description);const s=document.querySelector('meta[property="og:description"]');s&&s.setAttribute("content",e.description);const u=document.querySelector('meta[name="twitter:description"]');u&&u.setAttribute("content",e.description)}if(e.keywords){const i=document.querySelector('meta[name="keywords"]');i&&i.setAttribute("content",e.keywords)}const t=`https://web-wide-world.space${this.currentRoute.path}`;let n=document.querySelector('link[rel="canonical"]');n||(n=document.createElement("link"),n.rel="canonical",document.head.appendChild(n)),n.href=t;const r=document.querySelector('meta[property="og:url"]');r&&r.setAttribute("content",t)}}function T(o){return new M(o)}const V=[{path:"/",name:"ModelList",component:()=>a(()=>import("./ModelListV2-SeGULELN.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),meta:{title:"Web Wide World",description:"探索高质量3D Gaussian Splatting重建场景，体验沉浸式虚拟世界。By Nobody, For Everyone - 平凡人共创普惠世界。",keywords:"3D Gaussian Splatting, 3DGS, 场景列表, 3D查看器"}},{path:"/model",name:"ModelDetail",component:()=>a(()=>import("./ModelDetail-CyjW95M7.js"),__vite__mapDeps([6,7,1,8,2,3,4,9]),import.meta.url),meta:{title:"场景详情 - Web Wide World",description:"查看3D场景的详细信息和预览。"},props:!0},{path:"/simple-viewer",name:"ChunkedLoading",component:()=>a(()=>import("./ChunkedLoading-Dx-tXs2H.js"),__vite__mapDeps([10,7,1,3,11,12,13,8,2,4,14]),import.meta.url),meta:{title:"简易查看器 - Web Wide World",description:"轻量级3D场景查看器，支持分块加载大型场景。"},props:!0},{path:"/viewer",name:"Viewer",component:()=>a(()=>import("./Metaverse-B4MOwN4X.js"),__vite__mapDeps([15,3,13,11,16,2,4,12,1,17]),import.meta.url),meta:{title:"Web Wide World",description:"沉浸式元宇宙体验，控制虚拟角色在3D Gaussian Splatting场景中自由行走探索。",keywords:"元宇宙, 虚拟角色, 3D探索, 沉浸式体验"},props:!0},{path:"/spark",name:"spark",component:()=>a(()=>import("./Spark-CWAANqkP.js"),__vite__mapDeps([18,7,1,3,19,12,2,4,20]),import.meta.url),meta:{title:"Spark 查看器 - Web Wide World",description:"基于 Spark 引擎的高性能3D Gaussian Splatting渲染器。"},props:!0},{path:"/viewer2",name:"viewer2",component:()=>a(()=>import("./SceneViewer-ChrnHILV.js"),__vite__mapDeps([21,1,22,2,3,4,23,13,11,24]),import.meta.url),meta:{title:"Web Wide World",description:"新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。",keywords:"场景查看器, 3DGS渲染, 物理引擎"},props:!0},{path:"/debug-viewer",name:"debugViewer",component:()=>a(()=>import("./DebugSceneViewer-WmB9juvp.js"),__vite__mapDeps([25,1,22,2,3,4,23,13,11,26]),import.meta.url),meta:{title:"Debug Scene Viewer",description:"调试用场景查看器。"},props:!0},{path:"/metaverse-interaction",name:"MetaverseInteraction",component:()=>a(()=>import("./Metaverse-B4MOwN4X.js"),__vite__mapDeps([15,3,13,11,16,2,4,12,1,17]),import.meta.url),meta:{title:"元宇宙交互 - Web Wide World",description:"元宇宙交互体验，在虚拟世界中与3D场景互动。"},props:!0},{path:"/test-gp/spark",name:"TestGPSpark",component:()=>a(()=>import("./Spark-H_BwOmPX.js"),__vite__mapDeps([27,3,7,1,19,28,2,4,29]),import.meta.url),meta:{title:"Spark 测试 - Web Wide World"},props:!0},{path:"/test-gp/mkkellogg",name:"TestMkkellogg",component:()=>a(()=>import("./Mkkellogg-C6uUqMCv.js"),__vite__mapDeps([30,11,3,7,1,28,2,4,31]),import.meta.url),meta:{title:"Mkkellogg 测试 - Web Wide World"},props:!0}],j=T(V),h=5e3,c={log:[],info:[],warn:[],error:[],debug:[]},d=[];let g=!1;function N(o){const e=new WeakSet;return o.map(t=>{if(t instanceof Error)return`${t.name}: ${t.message}
${t.stack??""}`;if(typeof t=="object"&&t!==null)try{return JSON.stringify(t,(n,r)=>{if(typeof r=="object"&&r!==null){if(e.has(r))return"[Circular]";e.add(r)}return r})}catch{return String(t)}return String(t)}).join(" ")}function p(o,e){const t={time:new Date().toISOString(),level:o,message:N(e)},n=c[o];n.push(t),n.length>h&&n.shift(),d.push(t),d.length>h*2&&d.shift()}function U(){["log","info","warn","error","debug"].forEach(e=>{const t=console[e].bind(console);console[e]=(...n)=>{try{p(e,n)}catch{}t(...n)}}),window.addEventListener("error",e=>{p("error",[`[window.error] ${e.message}`,`at ${e.filename}:${e.lineno}:${e.colno}`,e.error])}),window.addEventListener("unhandledrejection",e=>{p("error",["[unhandledrejection]",e.reason])})}function f(o){return o.map(e=>`[${e.time}] [${e.level.toUpperCase()}] ${e.message}`).join(`
`)}function B(){const o={时间:new Date().toISOString(),URL:window.location.href,UA:navigator.userAgent,语言:navigator.language,窗口尺寸:{width:window.innerWidth,height:window.innerHeight},屏幕尺寸:{width:window.screen?.width,height:window.screen?.height},像素比:window.devicePixelRatio,在线:navigator.onLine,日志条数:{log:c.log.length,info:c.info.length,warn:c.warn.length,error:c.error.length,debug:c.debug.length}};return JSON.stringify(o,null,2)}function z(o,e){const t=URL.createObjectURL(o),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),1e3)}async function G(){const o=new W;o.file("env.txt",B()),o.file("all.log",f(d)),Object.keys(c).forEach(s=>{o.file(`${s}.log`,f(c[s]))});const e=await o.generateAsync({type:"blob"}),t=new Date,n=s=>String(s).padStart(2,"0"),r=`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`,i=`${n(t.getHours())}-${n(t.getMinutes())}-${n(t.getSeconds())}`;z(e,`h5-logs-${r}_${i}.zip`)}const w=`
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 3v12"/>
  <path d="M7 10l5 5 5-5"/>
  <path d="M5 21h14"/>
</svg>`,H=`
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" aria-hidden="true"
     style="animation: debug-dl-spin 0.8s linear infinite;">
  <path d="M12 3a9 9 0 1 0 9 9" opacity="0.9"/>
</svg>`,F=`
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
`;function J(){if(document.getElementById("debug-download-logs-style"))return;const o=document.createElement("style");o.id="debug-download-logs-style",o.textContent=F,document.head.appendChild(o)}function Y(o){const e=()=>{const r=document.querySelector(".vc-switch");if(!r)return;const i=r.getBoundingClientRect();if(!i.width||!i.height)return;const s=window.innerWidth-i.right,u=window.innerHeight-i.bottom;o.style.right=`${s+i.width}px`,o.style.bottom=`${u}px`,o.style.height=`${i.height}px`};let t=0;const n=window.setInterval(()=>{const r=document.querySelector(".vc-switch");t+=1,r?(window.clearInterval(n),e(),new MutationObserver(e).observe(r,{attributes:!0,attributeFilter:["style","class"]}),window.addEventListener("resize",e),window.addEventListener("orientationchange",e)):t>50&&window.clearInterval(n)},100)}function Z(){if(document.getElementById("debug-download-logs-btn"))return;J();const o=document.createElement("button");o.id="debug-download-logs-btn",o.type="button",o.title="下载日志 zip",o.setAttribute("aria-label","下载日志"),o.innerHTML=w,o.addEventListener("click",()=>{o.disabled||(o.disabled=!0,o.innerHTML=H,G().catch(t=>{console.error("[debug] 下载日志失败",t),alert("下载日志失败，请查看 console")}).finally(()=>{o.disabled=!1,o.innerHTML=w}))});const e=()=>{document.body.appendChild(o),Y(o)};document.body?e():document.addEventListener("DOMContentLoaded",e)}function K(){try{const o=window.location.href||"";return/[?&]debug(?:=(?:true|1)?)?(?=&|#|$)/i.test(o)}catch{return!1}}function X(){g||(g=!0,U(),new C,Z(),console.info("[debug] debug 模式已启用，可点击右下角按钮下载日志 zip"))}K()&&X();const y=x(q);y.use(j);y.mount("#app");export{A as _,j as r};
//# sourceMappingURL=index-ChCODltD.js.map
