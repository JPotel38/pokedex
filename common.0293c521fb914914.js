"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{8623:(C,m,a)=>{a.d(m,{c:()=>r});var g=a(1071),c=a(2669),f=a(9531);const r=(o,s)=>{let e,t;const d=(i,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,w);E&&s(E)?E!==e&&(n(),l(E,p)):n()},l=(i,w)=>{e=i,t||(t=e);const p=e;(0,g.w)(()=>p.classList.add("ion-activated")),w()},n=(i=!1)=>{if(!e)return;const w=e;(0,g.w)(()=>w.classList.remove("ion-activated")),i&&t!==e&&e.click(),e=void 0};return(0,f.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>d(i.currentX,i.currentY,c.a),onMove:i=>d(i.currentX,i.currentY,c.b),onEnd:()=>{n(!0),(0,c.h)(),t=void 0}})}},6447:(C,m,a)=>{a.d(m,{g:()=>c});var g=a(7693);const c=()=>{if(void 0!==g.w)return g.w.Capacitor}},6591:(C,m,a)=>{a.d(m,{g:()=>g});const g=(s,e,t,d,l)=>f(s[1],e[1],t[1],d[1],l).map(n=>c(s[0],e[0],t[0],d[0],n)),c=(s,e,t,d,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+d*l))-s*Math.pow(l-1,3),f=(s,e,t,d,l)=>o((d-=l)-3*(t-=l)+3*(e-=l)-(s-=l),3*t-6*e+3*s,3*e-3*s,s).filter(i=>i>=0&&i<=1),o=(s,e,t,d)=>{if(0===s)return((s,e,t)=>{const d=e*e-4*s*t;return d<0?[]:[(-e+Math.sqrt(d))/(2*s),(-e-Math.sqrt(d))/(2*s)]})(e,t,d);const l=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(d/=s))/27;if(0===l)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-l),-Math.sqrt(-l)];const i=Math.pow(n/2,2)+Math.pow(l/3,3);if(0===i)return[Math.pow(n/2,.5)-e/3];if(i>0)return[Math.pow(-n/2+Math.sqrt(i),1/3)-Math.pow(n/2+Math.sqrt(i),1/3)-e/3];const w=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5215:(C,m,a)=>{a.d(m,{i:()=>g});const g=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},5837:(C,m,a)=>{a.r(m),a.d(m,{startFocusVisible:()=>r});const g="ion-focused",f=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,d=o||document.body,l=y=>{s.forEach(h=>h.classList.remove(g)),y.forEach(h=>h.classList.add(g)),s=y},n=()=>{e=!1,l([])},i=y=>{e=f.includes(y.key),e||l([])},w=y=>{if(e&&void 0!==y.composedPath){const h=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));l(h)}},p=()=>{t.activeElement===d&&l([])};return t.addEventListener("keydown",i),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",i),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:l}}},479:(C,m,a)=>{a.d(m,{c:()=>c});var g=a(2674);const c=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||f(e),n=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,i=(0,g.h)(e);t=!0===e.legacy||!l&&!n&&null!==i}return t}}},f=s=>null!==s.shadowRoot&&!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2669:(C,m,a)=>{a.d(m,{I:()=>c,a:()=>e,b:()=>t,c:()=>s,d:()=>l,h:()=>d});var g=a(6447),c=(()=>{return(n=c||(c={})).Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",c;var n})();const r={getEngine(){const n=window.TapticEngine;if(n)return n;const i=(0,g.g)();return i?.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){return!!this.getEngine()&&("web"!==(0,g.g)()?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();i.impact({style:w})},notification(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();i.notification({type:w})},selection(){const n=this.isCapacitor()?c.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();!n||(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();!n||(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();!n||(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},e=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},d=()=>{o()&&r.selectionEnd()},l=n=>{o()&&r.impact(n)}},6038:(C,m,a)=>{a.d(m,{I:()=>s,a:()=>l,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>d,i:()=>t,p:()=>p,r:()=>y,s:()=>i});var g=a(5861),c=a(2674),f=a(3357);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,t=h=>"ION-CONTENT"===h.tagName,d=function(){var h=(0,g.Z)(function*(_){return t(_)?(yield new Promise(v=>(0,c.c)(_,v)),_.getScrollElement()):_});return function(v){return h.apply(this,arguments)}}(),l=h=>h.querySelector(s)||h.querySelector(e),n=h=>h.closest(e),i=(h,_)=>t(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(h,_,v,M)=>t(h)?h.scrollByPoint(_,v,M):Promise.resolve(h.scrollBy({top:v,left:_,behavior:M>0?"smooth":"auto"})),p=h=>(0,f.b)(h,o),E=h=>{if(t(h)){const v=h.scrollY;return h.scrollY=!1,v}return h.style.setProperty("overflow","hidden"),!0},y=(h,_)=>{t(h)?h.scrollY=_:h.style.removeProperty("overflow")}},6026:(C,m,a)=>{a.d(m,{a:()=>g,b:()=>w,c:()=>e,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>f,i:()=>c,j:()=>M,k:()=>O,l:()=>t,m:()=>n,n:()=>y,o:()=>l,p:()=>o,q:()=>r,r:()=>v,s:()=>u,t:()=>i,u:()=>h,v:()=>_,w:()=>d});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5849:(C,m,a)=>{a.d(m,{c:()=>r,g:()=>o});var g=a(7693),c=a(2674),f=a(3357);const r=(e,t,d)=>{let l,n;void 0!==g.w&&"MutationObserver"in g.w&&(l=new MutationObserver(E=>{for(const y of E)for(const h of y.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===t)return d(),void(0,c.r)(()=>i(h))}),l.observe(e,{childList:!0}));const i=E=>{var y;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{d();for(const _ of h)for(const v of _.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===t&&p()}),n.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),p()}}},o=(e,t,d)=>{const l=null==e?0:e.toString().length,n=s(l,t);if(void 0===d)return n;try{return d(l,t)}catch(i){return(0,f.a)("Exception in provided `counterFormatter`.",i),n}},s=(e,t)=>`${e} / ${t}`},2433:(C,m,a)=>{a.d(m,{K:()=>r,a:()=>f});var g=a(6447),c=(()=>{return(o=c||(c={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",c;var o})(),f=(()=>{return(o=f||(f={})).Body="body",o.Ionic="ionic",o.Native="native",o.None="none",f;var o})();const r={getEngine(){const o=(0,g.g)();if(o?.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},9868:(C,m,a)=>{a.r(m),a.d(m,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>O,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>l,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>M});var g=a(2433);a(6447),a(7693);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},d=!1;const l=()=>{e={},t={},d=!1},n=u=>{if(g.K.getEngine())i(u);else{if(!u.visualViewport)return;t=O(u.visualViewport),u.visualViewport.onresize=()=>{M(u),E()||y(u)?w(u):h(u)&&p(u)}}},i=u=>{u.addEventListener("keyboardDidShow",L=>w(u,L)),u.addEventListener("keyboardDidHide",()=>p(u))},w=(u,L)=>{_(u,L),d=!0},p=u=>{v(u),d=!1},E=()=>!d&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=u=>d&&!h(u),h=u=>d&&t.height===u.innerHeight,_=(u,L)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:L?L.keyboardHeight:u.innerHeight-t.height}});u.dispatchEvent(D)},v=u=>{const L=new CustomEvent(o);u.dispatchEvent(L)},M=u=>{e=Object.assign({},t),t=O(u.visualViewport)},O=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},323:(C,m,a)=>{a.d(m,{c:()=>s});var g=a(5861),c=a(7693),f=a(2433);const r=e=>void 0===c.d||e===f.a.None||void 0===e?null:c.d.querySelector("ion-app")??c.d.body,o=e=>{const t=r(e);return null===t?0:t.clientHeight},s=function(){var e=(0,g.Z)(function*(t){let d,l,n,i;const w=function(){var _=(0,g.Z)(function*(){const v=yield f.K.getResizeMode(),M=void 0===v?void 0:v.mode;d=()=>{void 0===i&&(i=o(M)),n=!0,p(n,M)},l=()=>{n=!1,p(n,M)},null==c.w||c.w.addEventListener("keyboardWillShow",d),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return _.apply(this,arguments)}}(),p=(_,v)=>{t&&t(_,E(v))},E=_=>{if(0===i||i===o(_))return;const v=r(_);return null!==v?new Promise(M=>{const u=new ResizeObserver(()=>{v.clientHeight===i&&(u.disconnect(),M())});u.observe(v)}):void 0};return yield w(),{init:w,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",d),null==c.w||c.w.removeEventListener("keyboardWillHide",l),d=l=void 0},isKeyboardVisible:()=>n}});return function(d){return e.apply(this,arguments)}}()},1389:(C,m,a)=>{a.d(m,{c:()=>f});var g=a(7693),c=a(2674);const f=(r,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==r.label||null===s()),l=()=>{const i=o();if(void 0===i)return;if(!t())return void i.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===i.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),p.disconnect(),e=void 0)},{threshold:.01,root:r});p.observe(i)}else i.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,c.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7418:(C,m,a)=>{a.d(m,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(f,r,o)=>{const s=f*r/o-f+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(f,r,o)=>{const s=r/o,e=f*s-f+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(f,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(f,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":f*r/o-f+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(f,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":f*r/o-f+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(f,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":f*r/o-f+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(f,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":f*r/o-f+"ms"}})}}},1242:(C,m,a)=>{a.r(m),a.d(m,{createSwipeBackGesture:()=>o});var g=a(2674),c=a(5215),f=a(9531);a(6412);const o=(s,e,t,d,l)=>{const n=s.ownerDocument.defaultView;let i=(0,c.i)(s);const p=v=>i?-v.deltaX:v.deltaX;return(0,f.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:v=>(i=(0,c.i)(s),(v=>{const{startX:O}=v;return i?O>=n.innerWidth-50:O<=50})(v)&&e()),onStart:t,onMove:v=>{const O=p(v)/n.innerWidth;d(O)},onEnd:v=>{const M=p(v),O=n.innerWidth,u=M/O,L=(v=>i?-v.velocityX:v.velocityX)(v),D=L>=0&&(L>.2||M>O/2),P=(D?1-u:u)*O;let T=0;if(P>5){const x=P/Math.abs(L);T=Math.min(x,540)}l(D,u<=0?.01:(0,g.l)(0,u,.9999),T)}})}},101:(C,m,a)=>{a.d(m,{w:()=>g});const g=(r,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(c(t,o))});return e.observe(r,{childList:!0,subtree:!0}),e},c=(r,o)=>{let s;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=f(e.addedNodes[t],o)||s}),s},f=(r,o)=>1!==r.nodeType?void 0:(r.tagName===o.toUpperCase()?[r]:Array.from(r.querySelectorAll(o))).find(e=>e.value===r.value)}}]);