import{S as d}from"./scene-api-DtW4IxD0.js";const l=d,n={"/":{title:"Web Wide World - 3D场景目录 | 高斯泼溅场景查看器",description:"Web Wide World 场景列表。提供多种高质量 3D Gaussian Splatting 重建场景，支持虚拟角色在场景中自由探索。By Nobody, For Everyone - 平凡人共创普惠世界。"},"/viewer2":{title:"场景查看器 - Web Wide World",description:"新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。"},"/debug-viewer":{title:"Debug 场景查看器 - Web Wide World",description:"Debug调试工具面板，支持FPS监控、性能分析、侧边栏调试。"},"/creative":{title:"创意模式 - Web Wide World",description:"Creative Mode Test - 创意模式测试页面。"}};function s(e){return`
    <div class="model-card">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>${e.name||"未命名场景"}</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`}function c(e=3){return Array.from({length:e},()=>`
    <div class="model-card skeleton">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>加载中...</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`).join("")}function p(e=[]){const i=e.filter(t=>t.modelUrlV2&&t.modelUrlV2!=="");return`
<div class="model-list">
  <header class="header">
    <h1>Web Wide World</h1>
    <p>By Nobody, For Everyone：平凡人共创普惠世界</p>
  </header>
  <div class="baidu-search-box">
    <input type="text" class="baidu-input" placeholder="请填入场景 URL" />
    <button class="baidu-btn">
      Go
      <svg class="btn-icon" width="18" height="18" viewBox="0 0 20 20">
        <polyline points="7 5 13 10 7 15" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
  <div class="models-grid">
    ${i.length>0?i.map(t=>s(t)).join(""):c(3)}
  </div>

  <!-- SEO 内容（爬虫可读） -->
  <div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
    <h1>Web Wide World - 3D场景目录 | 高斯泼溅场景查看器</h1>
    <p>Web Wide World 场景列表。提供多种高质量 3D Gaussian Splatting 重建场景，支持虚拟角色在场景中自由探索。By Nobody, For Everyone - 平凡人共创普惠世界。</p>
    <h2>主要功能</h2>
    <ul>
      <li>3D场景浏览 - 使用先进的高斯泼溅技术渲染逼真的3D场景</li>
      <li>虚拟角色 - 控制虚拟角色在场景中自由行走探索</li>
      <li>多场景支持 - 提供多个精美的3D重建场景供选择</li>
      <li>自定义场景 - 支持输入自定义场景URL进行查看</li>
    </ul>
    <h2>页面导航</h2>
    <ul>
      <li><a href="/">首页 - 场景列表</a></li>
      <li><a href="/viewer2">场景查看器</a></li>
      <li><a href="/debug-viewer">Debug查看器</a></li>
      <li><a href="/creative">创意模式</a></li>
    </ul>
  </div>
</div>
<style>
  .model-list{overflow-y:scroll;height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:2rem}
  .header{text-align:center;color:#fff;margin-bottom:3rem}
  .header h1{font-size:2.5rem;margin-bottom:0.5rem;font-weight:300}
  .header p{font-size:1.1rem;opacity:.9}
  .baidu-search-box{display:flex;justify-content:center;align-items:center;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(75,144,214,.08);border:1.5px solid #e0e3ea;background:#fff;max-width:800px;margin:0 auto 1.5rem}
  .baidu-input{flex:1;padding:0 18px;height:46px;border:none;outline:none;font-size:1.07em;background:transparent;color:#222f3a}
  .baidu-btn{display:flex;align-items:center;gap:0.25em;height:46px;padding:0 21px 0 16px;background:#3385ff;color:#fff;border:none;cursor:pointer;font-size:1.08em;font-weight:600;border-radius:0 14px 14px 0}
  .models-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:800px;margin:0 auto;padding-bottom:10rem}
  .model-card{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.1);opacity:.75}
  .model-card.skeleton{animation:pulse 1.5s infinite}
  @keyframes pulse{0%,100%{opacity:.75}50%{opacity:.5}}
  .model-preview{padding:2rem;text-align:center;background:linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)}
  .model-icon{font-size:3rem;margin-bottom:1rem}
  .model-preview h3{margin:0;font-size:1.5rem;color:#333;font-weight:500}
  .model-info{padding:1.5rem}
  .view-button{width:100%;padding:0.75rem;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer}
</style>`}function a(){return`
<div class="viewer-prerender-placeholder" style="position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div style="text-align:center;color:#fff;">
    <div class="loading-spinner" style="width:34px;height:34px;border:3px solid rgba(255,255,255,0.2);border-top-color:#fff;border-radius:50%;margin:0 auto 16px;animation:spin 1s linear infinite;"></div>
    <p style="font-size:14px;opacity:0.8;">加载场景中...</p>
  </div>
</div>
<style>
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:transparent}
</style>

<!-- SEO 内容（爬虫可读） -->
<div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
  <h1>场景查看器 - Web Wide World</h1>
  <p>新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。</p>
  <h2>功能特点</h2>
  <ul>
    <li>高质量 3D Gaussian Splatting 场景渲染</li>
    <li>虚拟角色控制 - 使用摇杆在场景中自由行走</li>
    <li>跳跃功能 - 探索场景的每一个角落</li>
    <li>环绕视角 - 360度观察场景细节</li>
    <li>角色切换 - 选择你喜欢的虚拟形象</li>
    <li>全屏模式 - 沉浸式体验</li>
    <li>移动端友好 - 支持触控操作</li>
  </ul>
  <nav>
    <a href="/">返回首页</a>
  </nav>
</div>`}async function m(){try{const e=await fetch(l);if(!e.ok)throw new Error(`请求失败: ${e.status} ${e.statusText}`);const i=await e.json(),r=Array.isArray(i)?i:Array.isArray(i?.data)?i.data:[];return console.log("[prerender] 场景列表加载成功，数量:",r.length),r}catch(e){return console.error("[prerender] 场景列表加载失败:",e),[]}}async function u(e){const i=e.url||"/",r=n[i]||n["/"];let t="";if(i==="/viewer2")t=a();else if(i==="/debug-viewer"||i==="/creative")t=a();else{const o=await m();console.log("[prerender] url:",i,"modelList length:",o.length),t=p(o)}return{html:t,head:{lang:"zh-CN",title:r.title,elements:new Set([{type:"meta",props:{name:"description",content:r.description}}])}}}export{u as prerender};
//# sourceMappingURL=entry-prerender-DHbcI44Y.js.map
