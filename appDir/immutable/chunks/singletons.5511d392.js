import{K as d,s as E}from"./index.be433088.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(E(t,s)&&(t=s,n)){const i=!u.length;for(const l of o)l[1](),u.push(l,t);if(i){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function c(s){r(s(t))}function a(s,i=d){const l=[s,i];return o.add(l),o.size===1&&(n=e(r)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:a}}var g;const I=((g=globalThis.__sveltekit_1jmptu8)==null?void 0:g.base)??"/busyplanet";var k;const w=((k=globalThis.__sveltekit_1jmptu8)==null?void 0:k.assets)??"https://benontrack.github.io/busyplanet",A="1701768281536",x="sveltekit:snapshot",O="sveltekit:scroll",U="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1},m=location.origin;function j(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function L(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const _={...b,"":b.hover};function v(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function N(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function K(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===m&&t.hasAttribute("download");return{url:n,external:r,target:o,download:c}}function P(t){let e=null,n=null,o=null,r=null,c=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),c===null&&(c=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[o??"off"],preload_data:_[r??"off"],keep_focus:i(e),noscroll:i(n),reload:i(c),replace_state:i(a)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function c(a){let s;return e.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:r,subscribe:c}}function R(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${w}/appDir/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function S(t,e){return t.origin!==m||!t.pathname.startsWith(e)}let y;function V(t){y=t.client}function Y(t){return(...e)=>y[t](...e)}const q={url:h({}),page:h({}),navigating:p(null),updated:R()};export{U as I,b as P,O as S,x as a,K as b,P as c,q as d,I as e,N as f,j as g,V as h,S as i,Y as j,m as o,L as s};
