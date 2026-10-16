import{au as y,av as C}from"./index-BwDorhiJ.js";const T=`
  /* ===== Design tokens（与 demo 对齐） ===== */
  :host {
    --bg: rgba(8, 8, 12, 0.92);
    --bg-btn: rgba(8, 8, 12, 0.8);
    --card-bg: rgba(255, 255, 255, 0.04);
    --card-hover: rgba(255, 255, 255, 0.07);
    --border: rgba(255, 255, 255, 0.08);
    --text: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.65);
    --text-muted: rgba(255, 255, 255, 0.45);
    --blue: #3b82f6;
    --red: #ef4444;
  }

  /* ===== 圆形玻璃态按钮（对齐 demo trigger-icon） ===== */
  .official-btn {
    position: fixed;
    pointer-events: auto;
    z-index: 100;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--bg-btn);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
  }
  .official-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .official-btn svg {
    width: 20px;
    height: 20px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .official-btn-back {
    top: 14px;
    left: 14px;
  }
  .official-btn-fullscreen {
    top: 14px;
    right: 14px;
  }

  /* ===== Toast 容器（垂直堆叠，多 toast 并存） ===== */
  .official-toast-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    pointer-events: none;
    z-index: 400;
  }

  /* ===== Toast 单条（对齐 demo 玻璃态） ===== */
  .official-toast {
    position: relative;
    background: var(--bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 12px;
    color: var(--text);
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    white-space: nowrap;
    opacity: 0;
    transform: translateY(16px) scale(0.95);
    animation: official-toast-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transition: opacity 0.25s cubic-bezier(0.7, 0, 0.84, 0),
                transform 0.25s cubic-bezier(0.7, 0, 0.84, 0);
  }

  /* Toast 退出态（JS 添加 class 触发） */
  .official-toast.leaving {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }

  /* ===== Confirm 对话框（对齐 demo 玻璃态面板） ===== */
  .official-confirm-overlay {
    position: fixed;
    inset: 0;
    pointer-events: auto;
    z-index: 350;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    animation: official-fade-in 0.15s ease;
  }
  .official-confirm-dialog {
    background: var(--bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    min-width: 300px;
    max-width: 400px;
    color: var(--text);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  }
  .official-confirm-title {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 600;
  }
  .official-confirm-content {
    margin: 0 0 20px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--text-secondary);
  }
  .official-confirm-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .official-confirm-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
  }
  .official-confirm-btn-cancel {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border);
    color: var(--text);
  }
  .official-confirm-btn-cancel:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .official-confirm-btn-ok {
    background: #fff;
    color: #000;
  }
  .official-confirm-btn-ok:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* ===== Debug 面板（对齐 demo 暗色玻璃态） ===== */
  .official-debug {
    position: fixed;
    bottom: 14px;
    left: 14px;
    pointer-events: none;
    z-index: 200;
    background: var(--bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-secondary);
    font: 12px/1.6 ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    padding: 10px 14px;
  }

  /* ===== Animations ===== */
  @keyframes official-fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Toast 进入：从下方浮起 + 轻微缩放 */
  @keyframes official-toast-in {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* ===== 无障碍：尊重用户减少动画偏好 ===== */
  @media (prefers-reduced-motion: reduce) {
    .official-toast {
      animation: none;
      transition: opacity 0.15s ease;
      opacity: 1;
      transform: none;
    }
    .official-toast.leaving {
      opacity: 0;
      transform: none;
    }
  }
`;function S(c,o){const e=document.createElement("div");e.className="official-debug",e.setAttribute("data-debug-panel",""),e.textContent="Debug: FPS —";let a=0,r=0,i=performance.now();const l=window.location.hash.split("?")[1]||"";if(new URLSearchParams(window.location.search).get("debugPanel")==="1"||new URLSearchParams(l).get("debugPanel")==="1"){c.appendChild(e);const s=()=>{r++;const b=performance.now();if(b-i>=1e3){const m=Math.round(r/((b-i)/1e3)),f=o();e.textContent=`FPS: ${m} | Pos: ${f?`${f.x.toFixed(1)},${f.y.toFixed(1)},${f.z.toFixed(1)}`:"—"}`,r=0,i=b}a=requestAnimationFrame(s)};a=requestAnimationFrame(s)}return{panel:e,setVisible(s){e.style.display=s?"":"none"},dispose(){a&&cancelAnimationFrame(a),e.remove()}}}function E(c){let o=null,e=null;const a=5,r=300,i=[];let l=!1;function v(){return(!e||!e.isConnected)&&(e=document.createElement("div"),e.className="official-toast-container",c.appendChild(e)),e}function s(){o&&(o.remove(),o=null)}function b(n,t){const g=v();for(;g.children.length>=a;){const x=g.firstChild;x?.dataset.leaveTimer&&clearTimeout(Number(x.dataset.leaveTimer)),x?.remove()}const d=document.createElement("div");d.className="official-toast",d.textContent=n,g.appendChild(d);const k=window.setTimeout(()=>{d.classList.add("leaving"),window.setTimeout(()=>{d.remove(),e&&e.children.length===0&&(e.remove(),e=null)},300)},t);d.dataset.leaveTimer=String(k)}function m(){if(i.length===0){l=!1;return}l=!0;const{msg:n,duration:t}=i.shift();b(n,t),window.setTimeout(m,r)}function f(n,t=2e3){i.push({msg:n,duration:t}),l||m()}function h(n){s();const t=document.createElement("div");t.className="official-confirm-overlay",t.innerHTML=`
      <div class="official-confirm-dialog">
        <h4 class="official-confirm-title">${n.title}</h4>
        <p class="official-confirm-content">${n.content}</p>
        <div class="official-confirm-actions">
          <button class="official-confirm-btn official-confirm-btn-cancel">取消</button>
          <button class="official-confirm-btn official-confirm-btn-ok">确认</button>
        </div>
      </div>`,t.querySelector(".official-confirm-btn-cancel")?.addEventListener("click",()=>{s(),n.onCancel?.()}),t.querySelector(".official-confirm-btn-ok")?.addEventListener("click",()=>{s(),n.onConfirm?.()}),c.appendChild(t),o=t}function w(n){const t=c.querySelector("[data-debug-panel]");t&&(t.style.display=n?"":"none")}return{showToast:f,showConfirm:h,setDebugVisible:w}}const F='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"/></svg>',M='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';let p=null,u=null;const L={init(){const c=y.active(),o=c?C(c):null;if(!o)throw new Error("[program-official] init 必须在活跃的 program context 内调用");o.router.routes([{path:"/",component:{mount(e){e.style.cssText="position:fixed;inset:0;pointer-events:none;";const a=document.createElement("style");a.textContent=T,e.appendChild(a);const r=document.createElement("button");r.className="official-btn official-btn-back",r.innerHTML=F,r.onclick=()=>{o.sdk.ui.exit?o.sdk.ui.exit():window.history.back()},e.appendChild(r);const i=document.createElement("button");i.className="official-btn official-btn-fullscreen",i.innerHTML=M,i.onclick=()=>o.sdk.ui.toggleFullscreen(),e.appendChild(i),p=S(e,()=>o.sdk.character.getPosition()),u=E(e)},onUnmount(){p?.dispose(),p=null,u=null}}}]),o.registerApi({showToast:(e,a)=>u?.showToast(e,a),showConfirm:e=>u?.showConfirm(e),setDebugVisible:e=>p?.setVisible(e)})},dispose(){p?.dispose(),p=null,u=null}};export{L as default};
//# sourceMappingURL=index-CBIkmEA9.js.map
