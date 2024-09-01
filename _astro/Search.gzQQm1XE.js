import{S as te,i as ae,s as le,c as j,e as S,b as H,d as B,f as U,h as N,j as I,k as p,a as se,n as q,o as E,p as F,q as M,u as z,r as K,v as O,x as P,B as ne,y as A,C as re,z as ie,D as oe,t as ce,H as ue,g as he,E as fe,w as _e,F as de}from"./translation.CZdWE9cJ.js";import{u as Y}from"./url-utils.BOVSYg8F.js";import{I as pe}from"./zh_TW.BQpUzWkV.js";function G(e){return void 0!==e?.length?e:Array.from(e)}function J(e,t,a){const l=e.slice();return l[11]=t[a],l}const me=e=>({}),Q=e=>({}),ge=e=>({}),X=e=>({}),ve=e=>({}),Z=e=>({}),be=e=>({}),$=e=>({});function x(e){let t,a,l,s,r,n,i,c,o,h=e[11].meta.title+"",d=e[11].excerpt+"";const u=e[6]["arrow-icon"],f=j(u,e,e[5],Q);return{c(){t=S("a"),a=S("div"),l=ce(h),f&&f.c(),s=H(),r=S("div"),n=new ue(!1),i=H(),this.h()},l(e){t=B(e,"A",{href:!0,class:!0});var c=U(t);a=B(c,"DIV",{class:!0});var o=U(a);l=he(o,h),f&&f.l(o),o.forEach(I),s=N(c),r=B(c,"DIV",{class:!0});var d=U(r);n=fe(d,!1),d.forEach(I),i=N(c),c.forEach(I),this.h()},h(){p(a,"class","transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]"),n.a=null,p(r,"class","transition text-sm text-50"),p(t,"href",c=e[11].url),p(t,"class","transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]")},m(e,c){q(e,t,c),E(t,a),E(a,l),f&&f.m(a,null),E(t,s),E(t,r),n.m(d,r),E(t,i),o=!0},p(e,a){(!o||8&a)&&h!==(h=e[11].meta.title+"")&&_e(l,h),f&&f.p&&(!o||32&a)&&z(f,u,e,e[5],o?O(u,e[5],a,me):K(e[5]),Q),(!o||8&a)&&d!==(d=e[11].excerpt+"")&&n.p(d),(!o||8&a&&c!==(c=e[11].url))&&p(t,"href",c)},i(e){o||(P(f,e),o=!0)},o(e){A(f,e),o=!1},d(e){e&&I(t),f&&f.d(e)}}}function we(e){let t,a,l,s,r,n,i,c,o,h,d,u,f,g;const b=e[6]["search-icon"],m=j(b,e,e[5],$),v=e[6]["search-switch"],w=j(v,e,e[5],Z),k=e[6]["search-icon"],y=j(k,e,e[5],X);let T=G(e[3]),V=[];for(let t=0;t<T.length;t+=1)V[t]=x(J(e,T,t));const D=e=>A(V[e],1,1,(()=>{V[e]=null}));return{c(){t=S("div"),m&&m.c(),a=H(),l=S("input"),s=H(),r=S("button"),w&&w.c(),n=H(),i=S("div"),c=S("div"),y&&y.c(),o=H(),h=S("input"),d=H();for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){t=B(e,"DIV",{id:!0,class:!0});var p=U(t);m&&m.l(p),a=N(p),l=B(p,"INPUT",{placeholder:!0,class:!0}),p.forEach(I),s=N(e),r=B(e,"BUTTON",{"aria-label":!0,id:!0,class:!0});var u=U(r);w&&w.l(u),u.forEach(I),n=N(e),i=B(e,"DIV",{id:!0,class:!0});var f=U(i);c=B(f,"DIV",{id:!0,class:!0});var g=U(c);y&&y.l(g),o=N(g),h=B(g,"INPUT",{placeholder:!0,class:!0}),g.forEach(I),d=N(f);for(let e=0;e<V.length;e+=1)V[e].l(f);f.forEach(I),this.h()},h(){p(l,"placeholder",se(pe.search)),p(l,"class","transition-all pl-10 text-sm bg-transparent outline-0 h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"),p(t,"id","search-bar"),p(t,"class","hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 "),p(r,"aria-label","Search Panel"),p(r,"id","search-switch"),p(r,"class","btn-plain scale-animation lg:hidden rounded-lg w-11 h-11 active:scale-90"),p(h,"placeholder","Search"),p(h,"class","pl-10 absolute inset-0 text-sm bg-transparent outline-0 focus:w-60 text-black/50 dark:text-white/50"),p(c,"id","search-bar-inside"),p(c,"class","flex relative lg:hidden transition-all items-center h-11 rounded-xl bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 "),p(i,"id","search-panel"),p(i,"class","float-panel float-panel-closed search-panel absolute md:w-[30rem] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2")},m(p,b){q(p,t,b),m&&m.m(t,null),E(t,a),E(t,l),F(l,e[0]),q(p,s,b),q(p,r,b),w&&w.m(r,null),q(p,n,b),q(p,i,b),E(i,c),y&&y.m(c,null),E(c,o),E(c,h),F(h,e[1]),E(i,d);for(let e=0;e<V.length;e+=1)V[e]&&V[e].m(i,null);u=!0,f||(g=[M(l,"input",e[7]),M(l,"focus",e[8]),M(r,"click",e[4]),M(h,"input",e[9])],f=!0)},p(e,[t]){if(m&&m.p&&(!u||32&t)&&z(m,b,e,e[5],u?O(b,e[5],t,be):K(e[5]),$),1&t&&l.value!==e[0]&&F(l,e[0]),w&&w.p&&(!u||32&t)&&z(w,v,e,e[5],u?O(v,e[5],t,ve):K(e[5]),Z),y&&y.p&&(!u||32&t)&&z(y,k,e,e[5],u?O(k,e[5],t,ge):K(e[5]),X),2&t&&h.value!==e[1]&&F(h,e[1]),40&t){let a;for(T=G(e[3]),a=0;a<T.length;a+=1){const l=J(e,T,a);V[a]?(V[a].p(l,t),P(V[a],1)):(V[a]=x(l),V[a].c(),P(V[a],1),V[a].m(i,null))}for(de(),a=T.length;a<V.length;a+=1)D(a);ne()}},i(e){if(!u){P(m,e),P(w,e),P(y,e);for(let e=0;e<T.length;e+=1)P(V[e]);u=!0}},o(e){A(m,e),A(w,e),A(y,e),V=V.filter(Boolean);for(let e=0;e<V.length;e+=1)A(V[e]);u=!1},d(e){e&&(I(t),I(s),I(r),I(n),I(i)),m&&m.d(e),w&&w.d(e),y&&y.d(e),re(V,e),f=!1,ie(g)}}}function ke(e,t,a){let{$$slots:l={},$$scope:s}=t,r="",n="",i=[];Y("/"),Y("/");let c=(e,t)=>{};oe((()=>{a(2,c=async(e,t)=>{let l=document.getElementById("search-panel");if(!l)return;if(!e&&t)return void l.classList.add("float-panel-closed");let s=[];{const t=await pagefind.search(e);for(const e of t.results)s.push(await e.data())}s.length||!t?(t&&l.classList.remove("float-panel-closed"),a(3,i=s)):l.classList.add("float-panel-closed")})}));return e.$$set=e=>{"$$scope"in e&&a(5,s=e.$$scope)},e.$$.update=()=>{5&e.$$.dirty&&c(r,!0),6&e.$$.dirty&&c(n,!1)},[r,n,c,i,()=>{document.getElementById("search-panel")?.classList.toggle("float-panel-closed")},s,l,function(){r=this.value,a(0,r)},()=>c(r,!0),function(){n=this.value,a(1,n)}]}class Te extends te{constructor(e){super(),ae(this,e,ke,we,le,{})}}export{Te as default};