const o={"Content-Type":"application/json"},e="https://cri-test.zplan.qq.com",s=async()=>{try{const n=await(await fetch(`${e}/mini_app/get_openid_config`,{method:"GET",headers:o})).json();return console.log("getOpenidConfig res",n),n.data}catch(t){console.error("getOpenidConfig",t)}};export{s as getOpenidConfig};
//# sourceMappingURL=index-B2rva1F0.js.map
