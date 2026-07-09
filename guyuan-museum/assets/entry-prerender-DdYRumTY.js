const s="https://mogs-1300354879.cos.ap-shanghai.myqcloud.com/mogs/nobody/gs-viewer/config/scene_v2.json",d={"/":{title:"Web Wide World - 3D场景列表 | 高斯泼溅场景查看器",description:"Web Wide World 版本场景列表。提供多种高质量 3D Gaussian Splatting 重建场景，支持虚拟角色在场景中自由探索。By Nobody, For Everyone - 平凡人共创普惠世界。"},"/viewer2":{title:"场景查看器 - Web Wide World",description:"新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。"},"/viewer":{title:"元宇宙查看器 - Web Wide World",description:"沉浸式元宇宙体验，控制虚拟角色在3D Gaussian Splatting场景中自由行走探索。"},"/spark":{title:"Spark 查看器 - Web Wide World",description:"基于 Spark 引擎的高性能3D Gaussian Splatting渲染器。"}};function c(){return`
<div class="three-container" style="width:100%;height:100%;position:relative;background:#000;">
  <!-- 加载提示 -->
  <div class="scene-loading-overlay" style="position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;">
    <div style="text-align:center;color:#fff;">
      <div class="loading-spinner" style="width:.34rem;height:.34rem;border:.03rem solid rgba(255,255,255,0.2);border-top-color:#fff;border-radius:50%;margin:0 auto 116px;animation:spin 1s linear infinite;"></div>
    </div>
  </div>

  <!-- 跳跃按钮骨架 -->
  <div class="jump-button-container" style="position:fixed;right:.6rem;bottom:.6rem;width:.69rem;height:.69rem;z-index:1002;">
    <div class="center-button" style="width:.69rem;height:.69rem;background:rgba(255,100,50,0.5);border:.03rem solid rgba(255,150,100,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(.04rem);color:white;box-shadow:0 .03rem .1rem rgba(255,100,50,0.2);">
      <svg viewBox="0 0 48 48" fill="currentColor" style="width:.28rem;height:.28rem;opacity:0.6;">
        <circle cx="24" cy="10" r="5" />
        <ellipse cx="24" cy="20" rx="3" ry="8" />
        <ellipse cx="21" cy="30" rx="2" ry="8" />
        <ellipse cx="27" cy="32" rx="2" ry="8" />
      </svg>
    </div>
  </div>

  <!-- 右侧按钮组骨架 -->
  <div class="vertical-button-group" style="position:fixed;right:.17rem;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:.13rem;z-index:1000;">
    <!-- 选择模型按钮 -->
    <div class="vertical-button" style="width:.34rem;height:.34rem;background:rgba(50,50,50,0.5);border:.02rem solid rgba(200,200,200,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(.04rem);color:white;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:.16rem;height:.16rem;opacity:0.6;">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </div>
    <!-- 环绕按钮 -->
    <div class="vertical-button" style="width:.34rem;height:.34rem;background:rgba(50,50,50,0.5);border:.02rem solid rgba(200,200,200,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(.04rem);color:white;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:.16rem;height:.16rem;opacity:0.6;">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    </div>
    <!-- 全屏按钮 -->
    <div class="vertical-button" style="width:.34rem;height:.34rem;background:rgba(50,50,50,0.5);border:.02rem solid rgba(200,200,200,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(.04rem);color:white;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:.16rem;height:.16rem;opacity:0.6;">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
      </svg>
    </div>
  </div>
</div>

<style>
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:transparent}
  /* 移动端适配 */
  @media(max-width:6.62rem){
    .jump-button-container{right:.56rem!important;bottom:.56rem!important;width:.6rem!important;height:.6rem!important}
    .center-button{width:.6rem!important;height:.6rem!important}
    .center-button svg{width:.24rem!important;height:.24rem!important}
    .vertical-button-group{right:.13rem!important;gap:.1rem!important}
    .vertical-button{width:.3rem!important;height:.3rem!important}
    .vertical-button svg{width:.14rem!important;height:.14rem!important}
  }
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
    <a href="/v2">场景列表</a>
  </nav>
</div>`}function m(e){return`
<div class="viewer-prerender-placeholder" style="position:fixed;inset:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div style="text-align:center;color:#fff;">
    <div class="loading-spinner" style="width:.34rem;height:.34rem;border:.03rem solid rgba(255,255,255,0.2);border-top-color:#fff;border-radius:50%;margin:0 auto 116px;animation:spin 1s linear infinite;"></div>
    <p style="font-size:104.4px;opacity:0.8;">加载场景中...</p>
  </div>
</div>
<style>
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  /* 隐藏预渲染占位，Vue 接管后会替换 */
  .viewer-prerender-placeholder{transition:opacity 0.3s ease}
</style>

<!-- SEO 内容（爬虫可读） -->
<div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
  <h1>${e}</h1>
  <p>基于 3D Gaussian Splatting 技术的高质量3D场景查看器。</p>
  <ul>
    <li>支持高质量 3DGS 场景渲染</li>
    <li>虚拟角色控制和物理交互</li>
    <li>移动端友好的触控操作</li>
  </ul>
  <nav>
    <a href="/">返回首页</a>
    <a href="/v2">场景列表</a>
  </nav>
</div>`}function p(e){return`
    <div class="model-card">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>${e.name||"未命名场景"}</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`}function h(e=3){return Array.from({length:e},()=>`
    <div class="model-card skeleton">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>加载中...</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`).join("")}function g(e=[]){const t=e.filter(r=>r.modelUrlV2&&r.modelUrlV2!=="");return`
<div class="model-list">
  <header class="header">
    <h1>Web Wide World</h1>
    <p>By Nobody, For Everyone：平凡人共创普惠世界</p>
    <p class="contact">联系我们：web-wide-world@qq.com</p>
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
    ${t.length>0?t.map(r=>p(r)).join(""):h(3)}
  </div>

  <!-- SEO 内容（爬虫可读） -->
  <div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
    <h1>Web Wide World - 3D场景列表 | 高斯泼溅场景查看器</h1>
    <p>Web Wide World 版本场景列表。提供多种高质量 3D Gaussian Splatting 重建场景，支持虚拟角色在场景中自由探索。By Nobody, For Everyone - 平凡人共创普惠世界。</p>
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
    </ul>
  </div>
</div>
<style>
  .model-list{overflow-y:scroll;height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:2rem}
  .header{text-align:center;color:#fff;margin-bottom:3rem}
  .header h1{font-size:2.5rem;margin-bottom:0.5rem;font-weight:300}
  .header p{font-size:1.1rem;opacity:.9}
  .header .contact{font-size:0.9rem;opacity:.7;margin-top:0.5rem}
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
</style>`}async function u(e){const t=e.url||"/",n=d[t]||d["/"];let r="",a={};if(t==="/viewer2")r=c();else if(t==="/viewer"||t==="/spark"||t==="/simple-viewer")r=m(n.title);else{let o=[];try{const i=await fetch(s,{mode:"cors",credentials:"omit"});if(!i.ok)throw new Error(`请求失败: ${i.status} ${i.statusText}`);const l=await i.json();o=Array.isArray(l)?l:[],console.log("[prerender] V2场景列表加载成功，数量:",o.length)}catch(i){console.error("[prerender] V2场景列表加载失败:",i)}console.log("[prerender] url:",t,"modelList length:",o.length),r=g(o),a={modelList:o}}return{html:r,data:a,links:new Set(["/","/viewer2","/viewer","/spark"]),head:{lang:"zh-CN",title:n.title,elements:new Set([{type:"meta",props:{name:"description",content:n.description}}])}}}export{u as prerender};
//# sourceMappingURL=entry-prerender-DdYRumTY.js.map
