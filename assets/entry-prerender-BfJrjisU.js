var c=(i,t,o)=>new Promise((r,d)=>{var a=l=>{try{n(o.next(l))}catch(s){d(s)}},e=l=>{try{n(o.throw(l))}catch(s){d(s)}},n=l=>l.done?r(l.value):Promise.resolve(l.value).then(a,e);n((o=o.apply(i,t)).next())});const h="https://mogs-1300354879.cos.ap-shanghai.myqcloud.com/mogs/nobody/gs-viewer/config/scene.json",f="https://mogs-1300354879.cos.ap-shanghai.myqcloud.com/mogs/nobody/gs-viewer/config/scene_v2.json",m={"/":{title:"Web Wide World - 3D高斯泼溅场景查看器 | 平凡人共创普惠世界",description:"Web Wide World 是一个基于 3D Gaussian Splatting (3DGS) 技术的在线场景查看器。支持查看和探索高质量3D重建场景，提供沉浸式的虚拟世界体验。"},"/v2":{title:"Web Wide World V2 - 全新3D高斯泼溅场景体验",description:"Web Wide World V2 版本，提供更流畅的3D Gaussian Splatting场景浏览体验。探索虚拟世界，体验沉浸式3D场景。"},"/viewer2":{title:"场景查看器 - Web Wide World",description:"新一代3D场景查看器，支持高质量Gaussian Splatting渲染和物理交互。"},"/viewer":{title:"元宇宙查看器 - Web Wide World",description:"沉浸式元宇宙体验，控制虚拟角色在3D Gaussian Splatting场景中自由行走探索。"},"/spark":{title:"Spark 查看器 - Web Wide World",description:"基于 Spark 引擎的高性能3D Gaussian Splatting渲染器。"}};function u(i=[]){const t=i.filter(r=>r.modelUrlV2&&r.modelUrlV2!=="");return`
<div class="model-list">
  <header class="header">
    <h1>Web Wide World v2</h1>
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
    ${t.length>0?t.map(r=>p(r)).join(""):g(3)}
  </div>
  
  <!-- SEO 内容（爬虫可读） -->
  <div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
    <h1>Web Wide World V2 - 全新3D高斯泼溅场景体验</h1>
    <p>Web Wide World V2 版本带来全新的场景浏览体验，基于 3D Gaussian Splatting 技术。</p>
    <h2>V2 新特性</h2>
    <ul>
      <li>更流畅的场景切换</li>
      <li>优化的移动端体验</li>
      <li>新增多个精美3D重建场景</li>
      <li>支持自定义场景URL</li>
    </ul>
    <h2>如何使用</h2>
    <ol>
      <li>浏览下方场景列表，选择感兴趣的3D场景</li>
      <li>点击"查看详情"进入沉浸式3D体验</li>
      <li>或在搜索框输入自定义场景URL</li>
    </ol>
    <h2>技术特点</h2>
    <ul>
      <li>基于 Three.js 的 WebGL 渲染</li>
      <li>支持 3D Gaussian Splatting (3DGS) 格式</li>
      <li>响应式设计，支持移动端</li>
    </ul>
  </div>
</div>
<style>
  .model-list{overflow-y:scroll;height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:232px}
  .header{text-align:center;color:#fff;margin-bottom:348px}
  .header h1{font-size:290px;margin-bottom:58px;font-weight:300}
  .header p{font-size:127.6px;opacity:.9}
  .baidu-search-box{display:flex;justify-content:center;align-items:center;border-radius:.12rem;overflow:hidden;box-shadow:0 .02rem .1rem rgba(75,144,214,.08);border:.01rem solid #e0e3ea;background:#fff;max-width:6.9rem;margin:0 auto 174px}
  .baidu-input{flex:1;padding:0 .16rem;height:.4rem;border:none;outline:none;font-size:1.07em;background:transparent;color:#222f3a}
  .baidu-btn{display:flex;align-items:center;gap:.25em;height:.4rem;padding:0 .18rem 0 .14rem;background:#3385ff;color:#fff;border:none;cursor:pointer;font-size:1.08em;font-weight:600;border-radius:0 .12rem .12rem 0}
  .models-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(2.59rem,1fr));gap:232px;max-width:6.9rem;margin:0 auto;padding-bottom:1160px}
  .model-card{background:#fff;border-radius:.1rem;overflow:hidden;box-shadow:0 .09rem .26rem rgba(0,0,0,.1);opacity:.75}
  .model-card.skeleton{animation:pulse 1.5s infinite}
  @keyframes pulse{0%,100%{opacity:.75}50%{opacity:.5}}
  .model-preview{padding:232px;text-align:center;background:linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)}
  .model-icon{font-size:348px;margin-bottom:116px}
  .model-preview h3{margin:0;font-size:174px;color:#333;font-weight:500}
  .model-info{padding:174px}
  .view-button{width:100%;padding:87px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;border:none;border-radius:.05rem;font-size:116px;cursor:pointer}
</style>`}function b(){return`
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
</div>`}function v(i){return`
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
  <h1>${i}</h1>
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
</div>`}function p(i){return`
    <div class="model-card">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>${i.name||"未命名场景"}</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`}function g(i=3){return Array.from({length:i},()=>`
    <div class="model-card skeleton">
      <div class="model-preview">
        <div class="model-icon">🎯</div>
        <h3>加载中...</h3>
      </div>
      <div class="model-info">
        <button class="view-button">查看详情</button>
      </div>
    </div>`).join("")}function y(i=[]){return`
<div class="model-list">
  <header class="header">
    <h1>Web Wide World</h1>
    <p>By Nobdy, For Everyone：平凡人共创普惠世界</p>
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
    ${i.length>0?i.map(o=>p(o)).join(""):g(3)}
  </div>

  <!-- SEO 内容（爬虫可读） -->
  <div class="seo-content" style="position:absolute;left:-86.2rem;top:-86.2rem;">
    <h1>Web Wide World - 3D高斯泼溅场景查看器</h1>
    <p>基于 3D Gaussian Splatting 技术的在线场景查看器。</p>
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
      <li><a href="/v2">V2版本 - 新版场景列表</a></li>
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
</style>`}function w(i){return c(this,null,function*(){const t=i.url||"/",o=m[t]||m["/"];let r="",d={};if(t==="/v2"){let a=[];try{const e=yield fetch(f);if(!e.ok)throw new Error(`请求失败: ${e.status} ${e.statusText}`);const n=yield e.json();a=Array.isArray(n)?n:[]}catch(e){console.error("[prerender] V2场景列表加载失败:",e)}r=u(a),d={modelList:a}}else if(t==="/viewer2")r=b();else if(t==="/viewer"||t==="/spark"||t==="/simple-viewer")r=v(o.title);else{let a=[];try{const e=yield fetch(h,{mode:"cors",credentials:"omit"});if(!e.ok)throw new Error(`请求失败: ${e.status} ${e.statusText}`);const n=yield e.json();a=Array.isArray(n==null?void 0:n.sceneConfig)?n.sceneConfig:[]}catch(e){console.error("[prerender] 首页场景列表加载失败:",e)}r=y(a),d={modelList:a}}return{html:r,data:d,links:new Set(["/","/v2","/viewer2","/viewer","/spark"]),head:{lang:"zh-CN",title:o.title,elements:new Set([{type:"meta",props:{name:"description",content:o.description}}])}}})}export{w as prerender};
//# sourceMappingURL=entry-prerender-BfJrjisU.js.map
