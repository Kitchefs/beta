import{S as t,i as s,s as e,e as l,t as a,c as n,b as o,d as r,f as h,h as c,j as f,k as i,l as u,a as g,y as p,g as d,n as m,x as v}from"./client.aaed3719.js";function x(t,s,e){const l=t.slice();return l[1]=s[e],l}function E(t){let s,e,g,p,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),g=a(d),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var a=o(e);g=r(a,d),a.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",p="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,g)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(g,d),1&s&&p!==(p="blog/"+t[1].slug)&&c(e,"href",p)},d(t){t&&h(s)}}}function b(t){let s,e,u,b,j,w=t[0],z=[];for(let s=0;s<w.length;s+=1)z[s]=E(x(t,w,s));return{c(){s=g(),e=l("h1"),u=a("Recent posts"),b=g(),j=l("ul");for(let t=0;t<z.length;t+=1)z[t].c();this.h()},l(t){p('[data-svelte="svelte-2i8xg9"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{class:!0});var l=o(e);u=r(l,"Recent posts"),l.forEach(h),b=d(t),j=n(t,"UL",{class:!0});var a=o(j);for(let t=0;t<z.length;t+=1)z[t].l(a);a.forEach(h),this.h()},h(){document.title="Kitchefs | Blog",c(e,"class","svelte-1w6lxz3"),c(j,"class","svelte-1w6lxz3")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,b,l),f(t,j,l);for(let t=0;t<z.length;t+=1)z[t].m(j,null)},p(t,[s]){if(1&s){let e;for(w=t[0],e=0;e<w.length;e+=1){const l=x(t,w,e);z[e]?z[e].p(l,s):(z[e]=E(l),z[e].c(),z[e].m(j,null))}for(;e<z.length;e+=1)z[e].d(1);z.length=w.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(b),t&&h(j),v(z,t)}}}function j(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function w(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,w,b,e,{posts:0})}}export{j as preload};
