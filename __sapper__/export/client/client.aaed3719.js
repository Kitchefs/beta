function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function u(t,e,n=e){return t.set(n),e}function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function $(){return g("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function x(t){return E(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function N(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}function j(t){P().$$.on_mount.push(t)}const R=[],I=[],k=[],C=[],L=Promise.resolve();let O=!1;function T(t){k.push(t)}let U=!1;const q=new Set;function B(){if(!U){U=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];N(e),z(e.$$)}for(N(null),R.length=0;I.length;)I.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];q.has(e)||(q.add(e),e())}k.length=0}while(R.length);for(;C.length;)C.pop()();O=!1,U=!1,q.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const J=new Set;let K;function D(){K={r:0,c:[],p:K}}function M(){K.r||o(K.c),K=K.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function F(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),T((()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(T)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(R.push(t),O||(O=!0,L.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,a,c,i,l=[-1]){const u=A;N(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&Z(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),X(e,n.target,n.anchor),B()}N(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={};function st(t){let e,n;return{c(){e=m("form"),n=m("input"),this.h()},l(t){e=_(t,"FORM",{class:!0,id:!0});var r=y(e);n=_(r,"INPUT",{class:!0,type:!0,placeholder:!0,"aria-label":!0,id:!0}),r.forEach(p),this.h()},h(){b(n,"class","form-control mr-sm-2 svelte-1azaxct"),b(n,"type","text"),b(n,"placeholder","Search"),b(n,"aria-label","Search"),b(n,"id","search-bar"),b(e,"class","form-inline active-orange svelte-1azaxct"),b(e,"id","search-form")},m(t,r){d(t,e,r),f(e,n)},d(t){t&&p(e)}}}function at(e){let n,r,o,s,a,c,i,l,u,h,$,S,w,A,N,P,j,R,I,k,C,L,O,T,U=(void 0===e[0]||"saved_items"===e[0])&&st();return{c(){n=m("nav"),r=m("a"),o=g("Kitchefs"),s=v(),a=m("button"),c=m("span"),i=v(),l=m("div"),u=m("ul"),h=m("li"),$=m("a"),S=g("Home"),A=v(),N=m("li"),P=m("a"),j=g("Saved"),I=v(),k=m("li"),C=m("a"),L=g("Blog"),T=v(),U&&U.c(),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=y(n);r=_(e,"A",{class:!0,href:!0});var f=y(r);o=E(f,"Kitchefs"),f.forEach(p),s=x(e),a=_(e,"BUTTON",{class:!0,type:!0,"data-toggle":!0,"data-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0});var d=y(a);c=_(d,"SPAN",{class:!0}),y(c).forEach(p),d.forEach(p),i=x(e),l=_(e,"DIV",{class:!0,id:!0});var m=y(l);u=_(m,"UL",{class:!0});var g=y(u);h=_(g,"LI",{class:!0});var v=y(h);$=_(v,"A",{"aria-current":!0,href:!0,class:!0});var b=y($);S=E(b,"Home"),b.forEach(p),v.forEach(p),A=x(g),N=_(g,"LI",{class:!0});var w=y(N);P=_(w,"A",{"aria-current":!0,href:!0,class:!0});var R=y(P);j=E(R,"Saved"),R.forEach(p),w.forEach(p),I=x(g),k=_(g,"LI",{class:!0});var O=y(k);C=_(O,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var q=y(C);L=E(q,"Blog"),q.forEach(p),O.forEach(p),g.forEach(p),T=x(m),U&&U.l(m),m.forEach(p),e.forEach(p),this.h()},h(){b(r,"class","kitchefs-brand svelte-1azaxct"),b(r,"href","."),b(c,"class","navbar-toggler-icon"),b(a,"class","navbar-toggler"),b(a,"type","button"),b(a,"data-toggle","collapse"),b(a,"data-target","#kitchefs-navbar"),b(a,"aria-controls","kitchefs-navbar"),b(a,"aria-expanded","false"),b(a,"aria-label","Toggle navigation"),b($,"aria-current",w=void 0===e[0]?"page":void 0),b($,"href","."),b($,"class","svelte-1azaxct"),b(h,"class","col-md m-0 p-0"),b(P,"aria-current",R="saved_items"===e[0]?"page":void 0),b(P,"href","saved_items"),b(P,"class","svelte-1azaxct"),b(N,"class","col-md m-0 p-0"),b(C,"rel","prefetch"),b(C,"aria-current",O="blog"===e[0]?"page":void 0),b(C,"href","blog"),b(C,"class","svelte-1azaxct"),b(k,"class","col-md m-0 p-0"),b(u,"class","navbar-nav flex-row mr-auto"),b(l,"class","collapse navbar-collapse"),b(l,"id","kitchefs-navbar"),b(n,"class","navbar navbar-expand-md navbar-dark bg-dark fixed-top svelte-1azaxct")},m(t,e){d(t,n,e),f(n,r),f(r,o),f(n,s),f(n,a),f(a,c),f(n,i),f(n,l),f(l,u),f(u,h),f(h,$),f($,S),f(u,A),f(u,N),f(N,P),f(P,j),f(u,I),f(u,k),f(k,C),f(C,L),f(l,T),U&&U.m(l,null)},p(t,[e]){1&e&&w!==(w=void 0===t[0]?"page":void 0)&&b($,"aria-current",w),1&e&&R!==(R="saved_items"===t[0]?"page":void 0)&&b(P,"aria-current",R),1&e&&O!==(O="blog"===t[0]?"page":void 0)&&b(C,"aria-current",O),void 0===t[0]||"saved_items"===t[0]?U||(U=st(),U.c(),U.m(l,null)):U&&(U.d(1),U=null)},i:t,o:t,d(t){t&&p(n),U&&U.d()}}}function ct(t,e,n){let{segment:r}=e;return j((()=>{let t,e,n,r;function o(t,e){return t=t.split(" ").join(""),e=e.split(" ").join(""),t.includes(e)||e.includes(t)}document.getElementById("search-bar").addEventListener("keyup",(()=>{t=document.getElementById("search-bar").value.toLowerCase(),e=document.querySelectorAll(".item"),e.forEach(((e,s,a)=>{n=e.getAttribute("item-name").split("-").join(" "),r=e.getAttribute("category-name").split("-").join(" "),o(t,n)||o(t,r)||""===t?e.style.display="block":e.style.display="none"}))})),document.getElementById("search-form").addEventListener("submit",(t=>{t.preventDefault()}))})),t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function lt(t){let e,n,r,o;e=new it({props:{segment:t[0]}});const s=t[2].default,a=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){G(e.$$.fragment),n=v(),r=m("main"),a&&a.c(),this.h()},l(t){W(e.$$.fragment,t),n=x(t),r=_(t,"MAIN",{class:!0});var o=y(r);a&&a.l(o),o.forEach(p),this.h()},h(){b(r,"class","svelte-1uhnsl8")},m(t,s){X(e,t,s),d(t,n,s),d(t,r,s),a&&a.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),a&&a.p&&2&n&&l(a,s,t,t[1],n,null,null)},i(t){o||(V(e.$$.fragment,t),V(a,t),o=!0)},o(t){H(e.$$.fragment,t),H(a,t),o=!1},d(t){Q(e,t),t&&p(n),t&&p(r),a&&a.d(t)}}}function ut(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class ft extends et{constructor(t){super(),tt(this,t,ut,lt,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=m("pre"),n=g(r)},l(t){e=_(t,"PRE",{});var o=y(e);n=E(o,r),o.forEach(p)},m(t,r){d(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function pt(e){let n,r,o,s,a,c,i,l,u,h=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&dt(e);return{c(){r=v(),o=m("h1"),s=g(e[0]),a=v(),c=m("p"),i=g(h),l=v(),A&&A.c(),u=$(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=x(t),o=_(t,"H1",{class:!0});var n=y(o);s=E(n,e[0]),n.forEach(p),a=x(t),c=_(t,"P",{class:!0});var f=y(c);i=E(f,h),f.forEach(p),l=x(t),A&&A.l(t),u=$(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){d(t,r,e),d(t,o,e),f(o,s),d(t,a,e),d(t,c,e),f(c,i),d(t,l,e),A&&A.m(t,e),d(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&h!==(h=t[1].message+"")&&S(i,h),t[2]&&t[1].stack?A?A.p(t,e):(A=dt(t),A.c(),A.m(u.parentNode,u)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(a),t&&p(c),t&&p(l),A&&A.d(t),t&&p(u)}}}function ht(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class mt extends et{constructor(t){super(),tt(this,t,ht,pt,a,{status:0,error:1})}}function gt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&G(n.$$.fragment),r=$()},l(t){n&&W(n.$$.fragment,t),r=$()},m(t,e){n&&X(n,t,e),d(t,r,e),o=!0},p(t,e){const o=16&e?F(s,[Y(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){D();const t=n;H(t.$$.fragment,1,0,(()=>{Q(t,1)})),M()}a?(n=new a(c()),G(n.$$.fragment),V(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&V(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&Q(n,t)}}}function vt(t){let e,n;return e=new mt({props:{error:t[0],status:t[1]}}),{c(){G(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function $t(t){let e,n,r,o;const s=[vt,gt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),d(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(D(),H(a[i],1,1,(()=>{a[i]=null})),M(),n=a[e],n||(n=a[e]=s[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){o||(V(n),o=!0)},o(t){H(n),o=!1},d(t){a[e].d(t),t&&p(r)}}}function bt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?F(o,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,d;return u=l,P().$$.after_update.push(u),f=ot,d=r,P().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class _t extends et{constructor(t){super(),tt(this,t,yt,bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/recipes\.json$/,/^\/recipes\/([^/]+?)\.json$/,/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],xt=[{js:()=>Promise.all([import("./index.693d4f85.js"),__inject_styles(["client-60cbb6fe.css","item-f24d2752.css","index-1ce3394c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./saved_items.bb71cf07.js"),__inject_styles(["client-60cbb6fe.css","item-f24d2752.css","saved_items-e471e6ec.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].10d6f38b.js"),__inject_styles(["client-60cbb6fe.css","[slug]-87589b1e.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.3582f8d4.js"),__inject_styles(["client-60cbb6fe.css","index-9d14055c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].e73ca421.js"),__inject_styles(["client-60cbb6fe.css","[slug]-6c334b02.css"])]).then((function(t){return t[0]}))}],St=(wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/saved_items\/?$/,parts:[{i:1}]},{pattern:/^\/recipes\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:wt(t[1])})}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:4,params:t=>({slug:wt(t[1])})}]}]);var wt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function At(t,e,n,r){return new(n||(n=Promise))((function(o,s){function a(t){try{i(r.next(t))}catch(t){s(t)}}function c(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}i((r=r.apply(t,e||[])).next())}))}function Nt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Pt,jt=1;const Rt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},It={};let kt,Ct;function Lt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(kt))return null;let e=t.pathname.slice(kt.length);if(""===e&&(e="/"),!Et.some((t=>t.test(e))))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Lt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Tt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Nt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){Bt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Rt.pushState({id:Pt},"",o.href)}}function Ut(){return{x:pageXOffset,y:pageYOffset}}function qt(t){if(It[Pt]=Ut(),t.state){const e=Ot(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else jt=jt+1,function(t){Pt=t}(jt),Rt.replaceState({id:Pt},"",location.href)}function Bt(t,e,n,r){return At(this,void 0,void 0,(function*(){const o=!!e;if(o)Pt=e;else{const t=Ut();It[Pt]=t,Pt=e=++jt,It[Pt]=n?t:{x:0,y:0}}if(yield Ct(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=It[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),It[Pt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function zt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Jt,Kt=null;function Dt(t){const e=Nt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ot(new URL(t,zt(document)));if(e)Kt&&t===Kt.href||(Kt={href:t,promise:ae(e)}),Kt.promise}(e.href)}function Mt(t){clearTimeout(Jt),Jt=setTimeout((()=>{Dt(t)}),20)}function Vt(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,zt(document)));return n?(Rt[e.replaceState?"replaceState":"pushState"]({id:Pt},"",t),Bt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Ht="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Yt,Gt,Wt=!1,Xt=[],Qt="{}";const Zt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:rt(null),session:rt(Ht&&Ht.session)};let te,ee,ne;function re(t,e){const{error:n}=t;return Object.assign({error:n},e)}function oe(t){return At(this,void 0,void 0,(function*(){Ft&&Zt.preloading.set(!0);const e=function(t){return Kt&&Kt.href===t.href?Kt.promise:ae(t)}(t),n=Yt={},r=yield e,{redirect:o}=r;if(n===Yt)if(o)yield Vt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield se(n,e,re(e,t.page))}}))}function se(t,e,n){return At(this,void 0,void 0,(function*(){Zt.page.set(n),Zt.preloading.set(!1),Ft?Ft.$set(e):(e.stores={page:{subscribe:Zt.page.subscribe},preloading:{subscribe:Zt.preloading.subscribe},session:Zt.session},e.level0={props:yield Gt},e.notify=Zt.page.notify,Ft=new _t({target:ne,props:e,hydrate:!0})),Xt=t,Qt=JSON.stringify(n.query),Wt=!0,ee=!1}))}function ae(t){return At(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Gt){const t=()=>({});Gt=Ht.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},te)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map(((e,c)=>At(this,void 0,void 0,(function*(){const f=r[c];if(function(t,e,n,r){if(r!==Qt)return!0;const o=Xt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const d=i++;if(!ee&&!u&&Xt[c]&&Xt[c].part===e.i)return Xt[c];u=!1;const{default:p,preload:h}=yield xt[e.i].js();let m;return m=Wt||!Ht.preloaded[c+1]?h?yield h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},te):{}:Ht.preloaded[c+1],s["level"+d]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var ce,ie,le;Zt.session.subscribe((t=>At(void 0,void 0,void 0,(function*(){if(te=t,!Wt)return;ee=!0;const e=Ot(new URL(location.href)),n=Yt={},{redirect:r,props:o,branch:s}=yield ae(e);n===Yt&&(r?yield Vt(r.location,{replaceState:!0}):yield se(s,o,re(o,e.page)))})))),ce={target:document.querySelector("#sapper")},ie=ce.target,ne=ie,le=Ht.baseUrl,kt=le,Ct=oe,"scrollRestoration"in Rt&&(Rt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Rt.scrollRestoration="auto"})),addEventListener("load",(()=>{Rt.scrollRestoration="manual"})),addEventListener("click",Tt),addEventListener("popstate",qt),addEventListener("touchstart",Dt),addEventListener("mousemove",Mt),Ht.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Ht;Gt||(Gt=o&&o[0]);const c={error:a,status:s,session:r,level0:{props:Gt},level1:{props:{status:s,error:a},component:mt},segments:o},i=Lt(n);se([],c,{host:t,path:e,query:i,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Rt.replaceState({id:jt},"",e);const n=Ot(new URL(location.href));if(n)return Bt(n,jt,!0,t)}));export{c as A,rt as B,j as C,u as D,et as S,v as a,y as b,_ as c,E as d,m as e,p as f,x as g,b as h,tt as i,d as j,f as k,S as l,$ as m,t as n,V as o,G as p,W as q,X as r,a as s,g as t,H as u,Q as v,M as w,h as x,w as y,D as z};

import __inject_styles from './inject_styles.5607aec6.js';