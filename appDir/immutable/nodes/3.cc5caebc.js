import{b as q,c as C}from"../chunks/navigation.81c80069.js";import{S as D,i as F,s as M,k as h,q as S,a as N,l as _,m as g,r as T,h as b,c as P,n as i,b as V,F as l,a6 as U,T as j,u as z,K as B,V as H,a1 as K,ae as R}from"../chunks/index.be433088.js";import{e as A}from"../chunks/singletons.5d6221ba.js";const G=!1,J=!0,L=!1;async function Q({params:e}){try{console.log(e);const t=await q.ids.where({id:Number(parseInt(e.bookmarkID))}).first();return console.log("we're on the route"),console.log(t),{bookmark:t}}catch(t){return console.error("Error loading bookmark:",t),{status:500,error:new Error("Internal Server Error")}}}const ee=Object.freeze(Object.defineProperty({__proto__:null,csr:J,load:Q,prerender:G,ssr:L},Symbol.toStringTag,{value:"Module"}));function W(e){let t,a,r,m,s=e[0].name+"",f,c,o,n,v,u,E,x,I;return{c(){t=h("section"),a=h("div"),r=h("h1"),m=S("Editing "),f=S(s),c=N(),o=h("form"),n=h("input"),v=N(),u=h("button"),E=S("Update Bookmark description"),this.h()},l(d){t=_(d,"SECTION",{class:!0});var p=g(t);a=_(p,"DIV",{class:!0});var y=g(a);r=_(y,"H1",{class:!0});var w=g(r);m=T(w,"Editing "),f=T(w,s),w.forEach(b),c=P(y),o=_(y,"FORM",{class:!0,method:!0});var k=g(o);n=_(k,"INPUT",{class:!0,placeholder:!0,type:!0}),v=P(k),u=_(k,"BUTTON",{type:!0,class:!0});var O=g(u);E=T(O,"Update Bookmark description"),O.forEach(b),k.forEach(b),y.forEach(b),p.forEach(b),this.h()},h(){i(r,"class","text-4xl my-4"),i(n,"class","focus:outline-none p-3 rounded-sm w-full ring-2"),i(n,"placeholder","description..."),i(n,"type","text"),i(u,"type","submit"),i(u,"class","px-4 py-2 bg-slate-700 text-white rounded-sm"),i(o,"class","flex flex-wrap gap-3 max-w-lg"),i(o,"method","POST"),i(a,"class","flex flex-col justify-center items-center min-h-[30rem]"),i(t,"class","container text-slate-500 mx-auto px-5 ")},m(d,p){V(d,t,p),l(t,a),l(a,r),l(r,m),l(r,f),l(a,c),l(a,o),l(o,n),U(n,e[0].description),l(o,v),l(o,u),l(u,E),x||(I=[j(n,"input",e[3]),j(o,"submit",K(function(){R(e[1])&&e[1].apply(this,arguments)}))],x=!0)},p(d,[p]){e=d,p&1&&s!==(s=e[0].name+"")&&z(f,s),p&1&&n.value!==e[0].description&&U(n,e[0].description)},i:B,o:B,d(d){d&&b(t),x=!1,H(I)}}}function X(e,t,a){let r,m,{data:s}=t;function f(){r.description=this.value,a(0,r),a(2,s)}return e.$$set=c=>{"data"in c&&a(2,s=c.data)},e.$$.update=()=>{e.$$.dirty&4&&a(0,{bookmark:r}=s,r),e.$$.dirty&1&&a(1,m=()=>{try{q.ids.update(r.id,{...r}),C(`${A}/`)}catch(c){console.log(c)}})},[r,m,s,f]}class te extends D{constructor(t){super(),F(this,t,X,W,M,{data:2})}}export{te as component,ee as universal};
