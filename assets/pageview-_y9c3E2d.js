import{a5 as o}from"./app-bkgWcqg0.js";var r={provider:"Waline",dark:"auto",serverURL:"https://comment.vervevividness.com/",reaction:["/Waline/emoji/bmoji_heartbeat.png","/Waline/emoji/bmoji_give_love.png","/Waline/emoji/bmoji_hard.png","/Waline/emoji/bmoji_emm.png","/Waline/emoji/bmoji_jiong.png","/Waline/emoji/bmoji_heiehi.png"],comment:!0,pageview:!0,copyright:!1};const n=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-bkgWcqg0.js").then(i=>i.a6),__vite__mapDeps([]));return e({serverURL:r.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}