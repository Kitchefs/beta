import{S as t,i as s,s as a,a as e,e as n,t as o,r as c,g as i,d as l,c as r,b as u,f as h,h as f,j as d,k as p,l as m,n as v}from"./client.a7d111ff.js";function g(t){let s,a,g,j,x,E,H=t[0].title+"",$=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=o(H),x=e(),E=n("div"),this.h()},l(t){c('[data-svelte="svelte-1uty71u"]',document.head).forEach(i),a=l(t),g=r(t,"H1",{class:!0});var s=u(g);j=h(s,H),s.forEach(i),x=l(t),E=r(t,"DIV",{class:!0}),u(E).forEach(i),this.h()},h(){f(g,"class","svelte-1vcounn"),f(E,"class","content svelte-1vcounn")},m(t,s){d(t,a,s),d(t,g,s),p(g,j),d(t,x,s),d(t,E,s),E.innerHTML=$},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&m(j,H),1&a&&$!==($=t[0].html+"")&&(E.innerHTML=$)},i:v,o:v,d(t){t&&i(a),t&&i(g),t&&i(x),t&&i(E)}}}async function j({params:t}){const s=await this.fetch(`blog/${t.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};