(function(e){function t(t){for(var n,o,s=t[0],u=t[1],l=t[2],i=0,d=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9bf4":"ccfbfb0c","chunk-88967e3c":"1201c196","chunk-d0a12744":"7d1d2b20"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-88967e3c":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0b9bf4":"31d6cfe0","chunk-88967e3c":"e9137d72","chunk-d0a12744":"31d6cfe0"}[e]+".css",a=u.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],i=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],i=l.getAttribute("data-href");if(i===n||i===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],b.parentNode.removeChild(b),r(c)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var d=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(b);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,a,c){const s=Object(n["y"])("router-view"),u=Object(n["y"])("default-layout");return Object(n["q"])(),Object(n["d"])(u,null,{default:Object(n["F"])(()=>[Object(n["g"])(s)]),_:1})}const a={class:"default-layout"};function c(e,t,r,o,c,s){const u=Object(n["y"])("navbar");return Object(n["q"])(),Object(n["e"])("div",a,[Object(n["f"])("main",null,[Object(n["g"])(u),Object(n["x"])(e.$slots,"default",{},void 0,!0)])])}const s={class:"bg-white"},u={class:"container flex flex-wrap justify-between mx-auto"},l={class:"flex items-center"};function i(e,t,r,o,a,c){const i=Object(n["y"])("logo"),d=Object(n["y"])("search");return Object(n["q"])(),Object(n["e"])("nav",s,[Object(n["f"])("div",u,[Object(n["g"])(i),Object(n["f"])("div",l,[Object(n["g"])(d)])])])}const d={id:"navbar-search"},b=Object(n["f"])("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"},"Search",-1),f={class:"relative"},h=Object(n["f"])("div",{class:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[Object(n["f"])("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(n["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1);function p(e,t,r,o,a,c){return Object(n["q"])(),Object(n["e"])("div",d,[b,Object(n["f"])("div",f,[h,Object(n["G"])(Object(n["f"])("input",{type:"search","onUpdate:modelValue":t[0]||(t[0]=e=>o.searchText=e),name:"search",class:"block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",onKeyup:t[1]||(t[1]=Object(n["H"])((...e)=>o.searchTvShows&&o.searchTvShows(...e),["enter"]))},null,544),[[n["C"],o.searchText]]),Object(n["f"])("button",{type:"submit",onClick:t[2]||(t[2]=(...e)=>o.searchTvShows&&o.searchTvShows(...e)),class:"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Search ")])])}var m=r("a1e9"),g=r("6605"),v={setup(){const e=Object(m["m"])(""),t=Object(g["d"])();function r(){t.push({name:"search",query:{q:e.value}})}return{searchTvShows:r,searchText:e}}},y=r("6b0d"),j=r.n(y);const O=j()(v,[["render",p]]);var w=O;const k={href:"/",class:"flex items-center"},x=Object(n["f"])("img",{src:"https://flowbite.com/docs/images/logo.svg",class:"mr-3 h-6 sm:h-9",alt:"Flowbite Logo"},null,-1),S=Object(n["f"])("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},"Tv Bite",-1),T=[x,S];function _(e,t,r,o,a,c){return Object(n["q"])(),Object(n["e"])("a",k,T)}var C={setup(){}};const P=j()(C,[["render",_]]);var q=P,E={components:{Search:w,Logo:q},setup(){}};const L=j()(E,[["render",i]]);var A=L,N={components:{Navbar:A}};r("6303");const B=j()(N,[["render",c],["__scopeId","data-v-98c7f404"]]);var M=B,z={name:"App",components:{DefaultLayout:M}};const D=j()(z,[["render",o]]);var F=D;const U=[{path:"/",name:"home",component:()=>r.e("chunk-88967e3c").then(r.bind(null,"78a7"))},{path:"/search",name:"search",props:!0,component:()=>r.e("chunk-d0a12744").then(r.bind(null,"3790"))},{path:"/:id",name:"details",component:()=>r.e("chunk-2d0b9bf4").then(r.bind(null,"33ec"))}],$=Object(g["a"])({history:Object(g["b"])("/"),routes:U});var H=$,I=(r("a766"),r("5502")),J=r("bc3a"),K=r.n(J);const G=K.a.create({baseURL:"https://api.tvmaze.com"});var R=G;const V=()=>({shows:[]}),Q={},W={shows(e,t){e.shows=t}},X={async getAllShows({dispatch:e,commit:t}){const r=await e("get",{action:"/shows"},{root:!0});return t("shows",r),r}};var Y={namespaced:!0,state:V,getters:Q,mutations:W,actions:X};const Z=({data:e})=>e;var ee=Object(I["a"])({state:{},mutations:{},actions:{initialize({dispatch:e}){e("user/initialize")},send(e,{method:t,action:r,param:n,formData:o}){let a=n?`${r}/${n}`:r;return R[t](a,o).then(Z)},get({dispatch:e},t){return t.method="get",e("send",t)}},modules:{shows:Y}});Object(n["c"])(F).use(H).use(ee).mount("#app")},"5b5b":function(e,t,r){},6303:function(e,t,r){"use strict";r("5b5b")},a766:function(e,t,r){}});
//# sourceMappingURL=app.a73615e7.js.map