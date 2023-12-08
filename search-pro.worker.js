const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,u=Array.from(n.keys());this.set=t,this._type=s,this._path=u.length>0?[{node:n,keys:u}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ut=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const u=t.length+1,o=u+s,i=new Uint8Array(o*u).fill(s+1);for(let r=0;r<u;++r)i[r]=r;for(let r=1;r<o;++r)i[r*u]=r;return R(e,t,s,n,i,1,u,""),n},R=(e,t,s,n,u,o,i,r)=>{const d=o*i;t:for(const l of e.keys())if(l===F){const a=u[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=o;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=u[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=u[f+y]+ +b,A=u[f+y+1]+1,w=u[p+y]+1,L=u[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,u,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[u,o]=M(n);for(const i of u.keys())if(i!==F&&i.startsWith(o)){const r=new Map;return r.set(i.slice(o.length),u.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ut(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let u=n.get(F);return u===void 0&&n.set(F,u=s()),u}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,u]of t)s.set(n,u);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const o of e.keys())if(o!==F&&t[n]===o[0]){const i=Math.min(s-n,o.length);let r=1;for(;r<i&&t[n+r]===o[r];)++r;const d=e.get(o);if(r===o.length)e=d;else{const l=new Map;l.set(o.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(o),e=l}n+=r;continue t}const u=new Map;return e.set(t.slice(n),u),u}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[u,o]=s.entries().next().value;q(n,u,o)}}},W=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,u]=t.entries().next().value;n!==F&&q(e.slice(0,-1),n,u)}},q=(e,t,s)=>{if(e.length===0)return;const[n,u]=M(e);n.set(u+t,s),n.delete(u)},M=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",$="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},N=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:u,terms:o,match:i}=t.get(s);n.score=n.score+u,n.match=Object.assign(n.match,i),P(n.terms,o)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const u=e.get(n);if(u==null)continue;const{score:o,terms:i,match:r}=t.get(n);P(u.terms,i),s.set(n,{score:u.score+o,terms:u.terms,match:Object.assign(u.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,u,o)=>{const{k:i,b:r,d}=o;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/u)))},ft=e=>(t,s,n)=>{const u=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,o=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:u,prefix:o}},H=(e,t,s,n)=>{for(const u of Object.keys(e._fieldIds))if(e._fieldIds[u]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${u}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const u=e._index.fetch(n,ht),o=u.get(t);o==null||o.get(s)==null?H(e,s,t,n):o.get(s)<=1?o.size<=1?u.delete(t):o.delete(s):o.set(s,o.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:$,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,u,o,i,r,d=new Map)=>{if(u==null)return d;for(const l of Object.keys(o)){const a=o[l],h=e._fieldIds[l],m=u.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=G(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},u=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:G(n.boost,g)||1}),{}),{boostDocument:o,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,u,o,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,u,o,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,u,o,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:u,searchOptions:o}=e._options,i={tokenize:n,processTerm:u,...o,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),u=[];for(const[o,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(o),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(o)),(s.filter==null||s.filter(a))&&u.push(a)}return u.sort(N),u},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:o,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=o,d.count+=1):n.set(r,{score:o,terms:i,count:1})}const u=[];for(const[o,{score:i,terms:r,count:d}]of n)u.push({suggestion:o,terms:r,score:i/d});return u.sort(N),u};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const u={};for(const[o,i]of n)u[o]=Object.fromEntries(i);t.push([s,u])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:u,fieldLength:o,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=u,h._fieldLength=k(o),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),u=[];let o=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&u.push(h),i+=h.length,a||(u.push(["mark",t]),i+=t.length,i>=100&&u.push(" …"))};let d=s.indexOf(n,o);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(o,d)),o=l,i>100)break;d=s.indexOf(n,o)}return i<100&&r(e.slice(o),!0),u},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(u=>{const{id:o,terms:i,score:r}=u,d=o.includes("@"),l=o.includes("#"),[a,h]=o.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>u.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(u.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in u)for(const c of u.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,u],[,o])=>"max"==="total"?xt(u,o):kt(u,o)).map(([u,{title:o,contents:i}])=>{if(!o){const r=it(t,u);r&&(o=r.h)}return{title:o,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/zh/\":{\"documentCount\":12,\"nextId\":12,\"documentIds\":{\"0\":\"v-858cfdd6\",\"1\":\"v-858cfdd6#介绍页\",\"2\":\"v-858cfdd6@0\",\"3\":\"v-858cfdd6@1\",\"4\":\"v-43c85b86\",\"5\":\"v-43c85b86#_1-标题编写\",\"6\":\"v-43c85b86#标题2\",\"7\":\"v-43c85b86#标题3\",\"8\":\"v-43c85b86#标题6\",\"9\":\"v-43c85b86#_2-图片插入\",\"10\":\"v-43c85b86@0\",\"11\":\"v-43c85b86@1\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1,38],\"2\":[null,null,1],\"3\":[null,null,1],\"4\":[2],\"5\":[2],\"6\":[1],\"7\":[1,1],\"8\":[1],\"9\":[2],\"10\":[null,null,2],\"11\":[null,null,2]},\"averageFieldLength\":[1.3,16.75,0.75],\"storedFields\":{\"0\":{\"h\":\"关于我\"},\"1\":{\"h\":\"介绍页\",\"t\":[\"咳咳，虽然想说的话不是很多，但还是简单介绍一下我～～\",\"我是王若伊晗。是这个博客的主人，你也可以叫我蝶梦，这个名字来源于一首诗中的哲学典故----“庄生晓梦迷蝴蝶，望帝春心托杜鹃” 庄周梦见自己便成了蝴蝶，从喧嚣的人生走向逍遥之境，而梦醒发现自己还是庄子。他说当梦足够真实，人没有任何能力知道自己是否是在做梦，那我们呢？我们是否能分清现实和梦境呢？综上，我给自己起了一个富有浪漫主义色彩的笔名——“蝶梦”。\",\"关于我的爱好，我喜欢读小说，跳舞（K-pop）和旅行，并热衷于交很多很多的朋友......\",\"现在的我是剑桥大学工程专业的一名学生，主修电磁学，电路分析，机械学，结构力学，数学，材料学和流体力学。对于未来的就业方向还有点迷茫，还在努力摸索中......\",\"那就先说这么多吧，等想到了再补上！\"]},\"2\":{\"c\":[\"个人简介\"]},\"3\":{\"c\":[\"作者\"]},\"4\":{\"h\":\"Article editing\"},\"5\":{\"h\":\"1.标题编写\"},\"6\":{\"h\":\"标题2\"},\"7\":{\"h\":\"标题3\",\"t\":[\"……\"]},\"8\":{\"h\":\"标题6\"},\"9\":{\"h\":\"2.图片插入\"},\"10\":{\"c\":[\"article editing\"]},\"11\":{\"c\":[\"reminder\",\"tips\"]}},\"dirtCount\":0,\"index\":[[\"tips\",{\"2\":{\"11\":1}}],[\"reminder\",{\"2\":{\"11\":1}}],[\"图片插入\",{\"0\":{\"9\":1}}],[\"2\",{\"0\":{\"9\":1}}],[\"标题6\",{\"0\":{\"8\":1}}],[\"标题3\",{\"0\":{\"7\":1}}],[\"标题2\",{\"0\":{\"6\":1}}],[\"标题编写\",{\"0\":{\"5\":1}}],[\"1\",{\"0\":{\"5\":1}}],[\"editing\",{\"0\":{\"4\":1},\"2\":{\"10\":1}}],[\"article\",{\"0\":{\"4\":1},\"2\":{\"10\":1}}],[\"作者\",{\"2\":{\"3\":1}}],[\"个人简介\",{\"2\":{\"2\":1}}],[\"等想到了再补上\",{\"1\":{\"1\":1}}],[\"那就先说这么多吧\",{\"1\":{\"1\":1}}],[\"那我们呢\",{\"1\":{\"1\":1}}],[\"还在努力摸索中\",{\"1\":{\"1\":1}}],[\"对于未来的就业方向还有点迷茫\",{\"1\":{\"1\":1}}],[\"材料学和流体力学\",{\"1\":{\"1\":1}}],[\"数学\",{\"1\":{\"1\":1}}],[\"结构力学\",{\"1\":{\"1\":1}}],[\"机械学\",{\"1\":{\"1\":1}}],[\"电路分析\",{\"1\":{\"1\":1}}],[\"主修电磁学\",{\"1\":{\"1\":1}}],[\"现在的我是剑桥大学工程专业的一名学生\",{\"1\":{\"1\":1}}],[\"并热衷于交很多很多的朋友\",{\"1\":{\"1\":1}}],[\"和旅行\",{\"1\":{\"1\":1}}],[\"pop\",{\"1\":{\"1\":1}}],[\"k\",{\"1\":{\"1\":1}}],[\"跳舞\",{\"1\":{\"1\":1}}],[\"蝶梦\",{\"1\":{\"1\":1}}],[\"综上\",{\"1\":{\"1\":1}}],[\"我喜欢读小说\",{\"1\":{\"1\":1}}],[\"我给自己起了一个富有浪漫主义色彩的笔名\",{\"1\":{\"1\":1}}],[\"我们是否能分清现实和梦境呢\",{\"1\":{\"1\":1}}],[\"我是王若伊晗\",{\"1\":{\"1\":1}}],[\"人没有任何能力知道自己是否是在做梦\",{\"1\":{\"1\":1}}],[\"他说当梦足够真实\",{\"1\":{\"1\":1}}],[\"而梦醒发现自己还是庄子\",{\"1\":{\"1\":1}}],[\"从喧嚣的人生走向逍遥之境\",{\"1\":{\"1\":1}}],[\"庄周梦见自己便成了蝴蝶\",{\"1\":{\"1\":1}}],[\"庄生晓梦迷蝴蝶\",{\"1\":{\"1\":1}}],[\"望帝春心托杜鹃\",{\"1\":{\"1\":1}}],[\"这个名字来源于一首诗中的哲学典故\",{\"1\":{\"1\":1}}],[\"你也可以叫我蝶梦\",{\"1\":{\"1\":1}}],[\"是这个博客的主人\",{\"1\":{\"1\":1}}],[\"但还是简单介绍一下我～～\",{\"1\":{\"1\":1}}],[\"虽然想说的话不是很多\",{\"1\":{\"1\":1}}],[\"咳咳\",{\"1\":{\"1\":1}}],[\"介绍页\",{\"0\":{\"1\":1}}],[\"关于我的爱好\",{\"1\":{\"1\":1}}],[\"关于我\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2},\"/\":{\"documentCount\":21,\"nextId\":21,\"documentIds\":{\"0\":\"v-184f4da6\",\"1\":\"v-184f4da6@0\",\"2\":\"v-184f4da6@1\",\"3\":\"v-0b0ad7c0\",\"4\":\"v-0b0ad7c0#_1-headline\",\"5\":\"v-0b0ad7c0#headline2\",\"6\":\"v-0b0ad7c0#headline-3\",\"7\":\"v-0b0ad7c0#headline6\",\"8\":\"v-0b0ad7c0#_2-inserting-a-picture\",\"9\":\"v-0b0ad7c0#_3-inserting-codes\",\"10\":\"v-0b0ad7c0#_4-grouping-of-coding-block\",\"11\":\"v-0b0ad7c0#_5-to-do-list\",\"12\":\"v-0b0ad7c0#_6-unordered-list\",\"13\":\"v-0b0ad7c0#_7-ordered-list\",\"14\":\"v-0b0ad7c0#_8-link\",\"15\":\"v-0b0ad7c0#_9-inserting-a-form\",\"16\":\"v-0b0ad7c0#_10-inserting-a-pdf\",\"17\":\"v-0b0ad7c0@0\",\"18\":\"v-0b0ad7c0@1\",\"19\":\"v-e52c881c\",\"20\":\"v-bb99a664\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[2,92],\"1\":[null,null,2],\"2\":[null,null,1],\"3\":[2,12],\"4\":[2],\"5\":[1],\"6\":[2,1],\"7\":[1],\"8\":[4,18],\"9\":[3,23],\"10\":[5,16],\"11\":[4,9],\"12\":[3,6],\"13\":[3,5],\"14\":[2,5],\"15\":[4],\"16\":[4],\"17\":[null,null,2],\"18\":[null,null,2],\"19\":[1],\"20\":[2]},\"averageFieldLength\":[2.5910364145658265,38.45714285714286,1.105263157894737],\"storedFields\":{\"0\":{\"h\":\"About me\",\"t\":[\"My name is Ruoyihan Wang (Cindy).\",\"Currently, I am a first-year student in the university of Cambridge, studying engineering.\",\"In my spare time, I enjoy photographing, reading novels, K-pop dancing and travelling ...\",\"I did some really interesting projects this term and I'd like to share some of them：\",\"1.Lego Mindstorm\",\"Created the 'gearbox' project by using different sensors to figure out the power of different gears in a team of three.\",\"Measuring the turning speed of different gear box and utilizing Python for controlling the mating of different gears.\",\"2.Integrated Electrical Project\",\"Applied signal theory in building modulation, tuning, and filter circuits.\",\"Acquired hands-on experience using LTSpice, PicoScope, multimeters, and microprocessors.\"]},\"1\":{\"c\":[\"Self-introduction\"]},\"2\":{\"c\":[\"Author\"]},\"3\":{\"h\":\"Article editing\",\"t\":[\"Here are some tips on how to write articles in Typora ::👀\"]},\"4\":{\"h\":\"1.Headline\"},\"5\":{\"h\":\"Headline2\"},\"6\":{\"h\":\"Headline 3\",\"t\":[\"…….\"]},\"7\":{\"h\":\"Headline6\"},\"8\":{\"h\":\"2. Inserting a picture\",\"t\":[\"![image-20231208133147807](./editing article.assets/image-20231208133147807.png)\",\"Screenshot or copy the picture, the use control+V to paste it inside.\"]},\"9\":{\"h\":\"3. Inserting codes\",\"t\":[\"enter the button left next to [1] three times, and enter the type of coding language you want to use. then click [Enter]\",\"\\\"Hello world!\\\" \"]},\"10\":{\"h\":\"4. Grouping of coding block\",\"t\":[\":::code-tabs @tab code1 ```python print('welcome to my website') ``` @tab code2 ```python print('Nice to meet you') ``` ::: \"]},\"11\":{\"h\":\"5. To do list\",\"t\":[\"[x] “a minus sign + a spacing + square bracket”\"]},\"12\":{\"h\":\"6. unordered list\",\"t\":[\"“ a minus sign + a spacing”\"]},\"13\":{\"h\":\"7. Ordered list\",\"t\":[\"“number + . + a spacing”\"]},\"14\":{\"h\":\"8. Link\",\"t\":[\"“a square bracket + a bracket”\"]},\"15\":{\"h\":\"9. Inserting a form\"},\"16\":{\"h\":\"10. Inserting a PDF\"},\"17\":{\"c\":[\"article editing\"]},\"18\":{\"c\":[\"reminder\",\"tips\"]},\"19\":{\"h\":\"Article\"},\"20\":{\"h\":\"New Article\"}},\"dirtCount\":0,\"index\":[[\"9\",{\"0\":{\"15\":1}}],[\"8\",{\"0\":{\"14\":1}}],[\"7\",{\"0\":{\"13\":1}}],[\"6\",{\"0\":{\"12\":1}}],[\"+\",{\"1\":{\"11\":2,\"12\":1,\"13\":2,\"14\":1}}],[\"x\",{\"1\":{\"11\":1}}],[\"5\",{\"0\":{\"11\":1}}],[\"```\",{\"1\":{\"10\":2}}],[\"```python\",{\"1\":{\"10\":2}}],[\"grouping\",{\"0\":{\"10\":1}}],[\"gear\",{\"1\":{\"0\":1}}],[\"gears\",{\"1\":{\"0\":2}}],[\"gearbox\",{\"1\":{\"0\":1}}],[\"4\",{\"0\":{\"10\":1}}],[\"you\",{\"1\":{\"9\":1,\"10\":1}}],[\"year\",{\"1\":{\"0\":1}}],[\"3\",{\"0\":{\"6\":1,\"9\":1}}],[\"👀\",{\"1\":{\"3\":1}}],[\"website\",{\"1\":{\"10\":1}}],[\"welcome\",{\"1\":{\"10\":1}}],[\"world\",{\"1\":{\"9\":1}}],[\"want\",{\"1\":{\"9\":1}}],[\"wang\",{\"1\":{\"0\":1}}],[\"write\",{\"1\":{\"3\":1}}],[\"hello\",{\"1\":{\"9\":1}}],[\"headline6\",{\"0\":{\"7\":1}}],[\"headline2\",{\"0\":{\"5\":1}}],[\"headline\",{\"0\":{\"4\":1,\"6\":1}}],[\"here\",{\"1\":{\"3\":1}}],[\"how\",{\"1\":{\"3\":1}}],[\"hands\",{\"1\":{\"0\":1}}],[\"editing\",{\"0\":{\"3\":1},\"1\":{\"8\":1},\"2\":{\"17\":1}}],[\"experience\",{\"1\":{\"0\":1}}],[\"electrical\",{\"1\":{\"0\":1}}],[\"enter\",{\"1\":{\"9\":3}}],[\"enjoy\",{\"1\":{\"0\":1}}],[\"engineering\",{\"1\":{\"0\":1}}],[\"20231208133147807\",{\"1\":{\"8\":2}}],[\"2\",{\"0\":{\"8\":1},\"1\":{\"0\":1}}],[\"form\",{\"0\":{\"15\":1}}],[\"for\",{\"1\":{\"0\":1}}],[\"filter\",{\"1\":{\"0\":1}}],[\"figure\",{\"1\":{\"0\":1}}],[\"first\",{\"1\":{\"0\":1}}],[\"bracket\",{\"1\":{\"11\":1,\"14\":2}}],[\"block\",{\"0\":{\"10\":1}}],[\"button\",{\"1\":{\"9\":1}}],[\"building\",{\"1\":{\"0\":1}}],[\"box\",{\"1\":{\"0\":1}}],[\"by\",{\"1\":{\"0\":1}}],[\"ordered\",{\"0\":{\"13\":1}}],[\"or\",{\"1\":{\"8\":1}}],[\"on\",{\"1\":{\"0\":1,\"3\":1}}],[\"out\",{\"1\":{\"0\":1}}],[\"of\",{\"0\":{\"10\":1},\"1\":{\"0\":6,\"9\":1}}],[\"unordered\",{\"0\":{\"12\":1}}],[\"university\",{\"1\":{\"0\":1}}],[\"use\",{\"1\":{\"8\":1,\"9\":1}}],[\"using\",{\"1\":{\"0\":2}}],[\"utilizing\",{\"1\":{\"0\":1}}],[\"link\",{\"0\":{\"14\":1}}],[\"list\",{\"0\":{\"11\":1,\"12\":1,\"13\":1}}],[\"like\",{\"1\":{\"0\":1}}],[\"language\",{\"1\":{\"9\":1}}],[\"left\",{\"1\":{\"9\":1}}],[\"lego\",{\"1\":{\"0\":1}}],[\"ltspice\",{\"1\":{\"0\":1}}],[\"10\",{\"0\":{\"16\":1}}],[\"1\",{\"0\":{\"4\":1},\"1\":{\"0\":1,\"9\":1}}],[\"do\",{\"0\":{\"11\":1}}],[\"different\",{\"1\":{\"0\":4}}],[\"did\",{\"1\":{\"0\":1}}],[\"d\",{\"1\":{\"0\":1}}],[\"dancing\",{\"1\":{\"0\":1}}],[\"pdf\",{\"0\":{\"16\":1}}],[\"print\",{\"1\":{\"10\":2}}],[\"project\",{\"1\":{\"0\":2}}],[\"projects\",{\"1\":{\"0\":1}}],[\"paste\",{\"1\":{\"8\":1}}],[\"png\",{\"1\":{\"8\":1}}],[\"picture\",{\"0\":{\"8\":1},\"1\":{\"8\":1}}],[\"picoscope\",{\"1\":{\"0\":1}}],[\"python\",{\"1\":{\"0\":1}}],[\"power\",{\"1\":{\"0\":1}}],[\"pop\",{\"1\":{\"0\":1}}],[\"photographing\",{\"1\":{\"0\":1}}],[\"k\",{\"1\":{\"0\":1}}],[\"new\",{\"0\":{\"20\":1}}],[\"next\",{\"1\":{\"9\":1}}],[\"number\",{\"1\":{\"13\":1}}],[\"nice\",{\"1\":{\"10\":1}}],[\"novels\",{\"1\":{\"0\":1}}],[\"name\",{\"1\":{\"0\":1}}],[\"reminder\",{\"2\":{\"18\":1}}],[\"really\",{\"1\":{\"0\":1}}],[\"reading\",{\"1\":{\"0\":1}}],[\"ruoyihan\",{\"1\":{\"0\":1}}],[\"tab\",{\"1\":{\"10\":2}}],[\"tabs\",{\"1\":{\"10\":1}}],[\"type\",{\"1\":{\"9\":1}}],[\"typora\",{\"1\":{\"3\":1}}],[\"tips\",{\"1\":{\"3\":1},\"2\":{\"18\":1}}],[\"times\",{\"1\":{\"9\":1}}],[\"time\",{\"1\":{\"0\":1}}],[\"tuning\",{\"1\":{\"0\":1}}],[\"turning\",{\"1\":{\"0\":1}}],[\"team\",{\"1\":{\"0\":1}}],[\"term\",{\"1\":{\"0\":1}}],[\"to\",{\"0\":{\"11\":1},\"1\":{\"0\":2,\"3\":1,\"8\":1,\"9\":2,\"10\":2}}],[\"three\",{\"1\":{\"0\":1,\"9\":1}}],[\"this\",{\"1\":{\"0\":1}}],[\"then\",{\"1\":{\"9\":1}}],[\"theory\",{\"1\":{\"0\":1}}],[\"them\",{\"1\":{\"0\":1}}],[\"the\",{\"1\":{\"0\":5,\"8\":2,\"9\":2}}],[\"travelling\",{\"1\":{\"0\":1}}],[\"square\",{\"1\":{\"11\":1,\"14\":1}}],[\"sign\",{\"1\":{\"11\":1,\"12\":1}}],[\"signal\",{\"1\":{\"0\":1}}],[\"screenshot\",{\"1\":{\"8\":1}}],[\"self\",{\"2\":{\"1\":1}}],[\"sensors\",{\"1\":{\"0\":1}}],[\"spacing\",{\"1\":{\"11\":1,\"12\":1,\"13\":1}}],[\"spare\",{\"1\":{\"0\":1}}],[\"speed\",{\"1\":{\"0\":1}}],[\"share\",{\"1\":{\"0\":1}}],[\"some\",{\"1\":{\"0\":2,\"3\":1}}],[\"studying\",{\"1\":{\"0\":1}}],[\"student\",{\"1\":{\"0\":1}}],[\"assets\",{\"1\":{\"8\":1}}],[\"are\",{\"1\":{\"3\":1}}],[\"articles\",{\"1\":{\"3\":1}}],[\"article\",{\"0\":{\"3\":1,\"19\":1,\"20\":1},\"1\":{\"8\":1},\"2\":{\"17\":1}}],[\"author\",{\"2\":{\"2\":1}}],[\"acquired\",{\"1\":{\"0\":1}}],[\"applied\",{\"1\":{\"0\":1}}],[\"and\",{\"1\":{\"0\":5,\"9\":1}}],[\"a\",{\"0\":{\"8\":1,\"15\":1,\"16\":1},\"1\":{\"0\":2,\"11\":2,\"12\":2,\"13\":1,\"14\":2}}],[\"am\",{\"1\":{\"0\":1}}],[\"about\",{\"0\":{\"0\":1}}],[\"it\",{\"1\":{\"8\":1}}],[\"image\",{\"1\":{\"8\":2}}],[\"inside\",{\"1\":{\"8\":1}}],[\"inserting\",{\"0\":{\"8\":1,\"9\":1,\"15\":1,\"16\":1}}],[\"introduction\",{\"2\":{\"1\":1}}],[\"integrated\",{\"1\":{\"0\":1}}],[\"interesting\",{\"1\":{\"0\":1}}],[\"in\",{\"1\":{\"0\":4,\"3\":1}}],[\"i\",{\"1\":{\"0\":4}}],[\"is\",{\"1\":{\"0\":1}}],[\"click\",{\"1\":{\"9\":1}}],[\"code2\",{\"1\":{\"10\":1}}],[\"code1\",{\"1\":{\"10\":1}}],[\"code\",{\"1\":{\"10\":1}}],[\"codes\",{\"0\":{\"9\":1}}],[\"coding\",{\"0\":{\"10\":1},\"1\":{\"9\":1}}],[\"control+v\",{\"1\":{\"8\":1}}],[\"controlling\",{\"1\":{\"0\":1}}],[\"copy\",{\"1\":{\"8\":1}}],[\"circuits\",{\"1\":{\"0\":1}}],[\"cindy\",{\"1\":{\"0\":1}}],[\"created\",{\"1\":{\"0\":1}}],[\"cambridge\",{\"1\":{\"0\":1}}],[\"currently\",{\"1\":{\"0\":1}}],[\"minus\",{\"1\":{\"11\":1,\"12\":1}}],[\"mindstorm\",{\"1\":{\"0\":1}}],[\"microprocessors\",{\"1\":{\"0\":1}}],[\"multimeters\",{\"1\":{\"0\":1}}],[\"modulation\",{\"1\":{\"0\":1}}],[\"mating\",{\"1\":{\"0\":1}}],[\"my\",{\"1\":{\"0\":2,\"10\":1}}],[\"meet\",{\"1\":{\"10\":1}}],[\"measuring\",{\"1\":{\"0\":1}}],[\"me\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
