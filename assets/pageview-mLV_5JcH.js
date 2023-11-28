import{_ as t}from"./app-S1N83rwj.js";var i={provider:"Waline",dark:"auto",serverURL:"https://comment.vervevividness.com/",reaction:["/Waline/tieba/tieba_agree.png","/Waline/tieba/tieba_sunglasses.png","/Waline/tieba/tieba_pick_nose.png","/Waline/tieba/tieba_awkward.png","/Waline/tieba/1f613.png","/Waline/tieba/1f60f.png"],comment:!0,pageview:!0,copyright:!1};const r=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-S1N83rwj.js").then(a=>a.M),__vite__mapDeps([]));return e({serverURL:i.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{r as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}