(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-18dd1bf4":"89290db1","chunk-2d215d02":"04d7d52c","chunk-88941e0e":"d44aca3c"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/gallery studio/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1135:function(t,e,a){t.exports=a.p+"img/CART.57aab288.jpg"},"269e":function(t,e,a){t.exports=a.p+"img/RT.61268702.jpg"},2732:function(t,e,a){"use strict";a("7b29")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(r["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Menu"),t._v(" "),a("router-view"),a("Footer")],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"Dark"}},[n("b-navbar-brand",{attrs:{id:"box"}}),n("b-img",{attrs:{alt:"logo",src:a("6e11"),width:"90px",height:"60px"}}),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-container",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Home"}},[t._v("Home")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/pagina1"}},[t._v("Gallery Collage")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Somos"}},[t._v("Visit")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"/Contacto"}},[t._v("Contact")])],1)],1)],1)],1)},l=[],c={},u=c,d=(a("2732"),a("2877")),p=Object(d["a"])(u,s,l,!1,null,"4711d332",null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-alert",{attrs:{show:"",type:"light",variant:"Dark"}},[n("b-img",{attrs:{alt:"logo",src:a("6e11"),width:"100px",height:"70px",align:"center"}}),n("p",{attrs:{align:"center"}},[t._v(" Gallery Studio | Alenjandra Retto y Marta Pons")])],1)},v=[],b={},g=b,h=Object(d["a"])(g,m,v,!1,null,"d311c92a",null),y=h.exports,_={name:"App",components:{Menu:f,Footer:y}},x=_,w=(a("034f"),Object(d["a"])(x,o,i,!1,null,null,null)),j=w.exports,k=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("b-img",{attrs:{alt:"logo",src:a("6e11"),width:"450px",height:"300px"}}),n("br"),n("br"),n("h1",[t._v("Sea usted bienvenido a la inauguración de Gallery Studio.")]),n("p",[t._v("Una de las nuevas galerias modernas donde se veran expuestas algunas de las obras de Alejandra Retto y Marta Pons mientras estaban cursando en la Universidad de Lleida. ")]),n("p",[t._v("Consulta "),n("b-link",{attrs:{href:"https://www.instagram.com/gallery_studio_/"}},[t._v("Instagram")]),t._v(" para ver más información sobre horarios y fechas. ")],1),n("br"),n("br"),n("br"),n("Diapos"),n("br"),n("br"),n("h1",[t._v("Eventos")]),n("div",[n("br"),n("br"),n("h1",{staticClass:"pb-2"},[n("icons",{attrs:{icon:["fas","award"]}}),t._v(" Próximos Eventos y Exposiciones "),n("icons",{attrs:{icon:["fas","award"]}})],1),n("br"),n("br"),n("p",[t._v(" Noticias e información ")]),n("div",{staticClass:"container-md"},[n("b-card-group",{attrs:{columns:""}},t._l(t.eventos1,(function(t){return n("div",{key:t.id,attrs:{columns:""}},[n("Cards",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto,url:t.url}})],1)})),0)],1)])],1)},O=[],P=a("1da1"),S=(a("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[n("b-carousel-slide",{attrs:{caption:"Inauguración Gallery Studio","img-src":a("1135")}}),n("b-carousel-slide",{attrs:{caption:"La nueva marca Gallery Studio","img-src":a("269e")}}),n("b-carousel-slide",{attrs:{caption:"Nueva Línea de Papelería","img-src":a("9d8a")}})],1)],1)}),E=[],M={},G=Object(d["a"])(M,S,E,!1,null,null,null),T=G.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"evento"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")]),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Ir a la página del evento",variant:"dark",href:t.url}},[t._v("Más información")])],1)],1)},R=[],$={props:["id","autor","titulo","srcimg","alt","texto","url"]},D=$,A=Object(d["a"])(D,H,R,!1,null,"ea192d5e",null),L=A.exports,I="../eventos.json",U={name:"Home",components:{Diapos:T,Cards:L},props:{name:{type:String,default:"Home"}},data:function(){return{eventos1:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(I);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t.eventos1=n,console.log(n);case 8:case"end":return e.stop()}}),e)})))()}}},N=U,V=Object(d["a"])(N,C,O,!1,null,null,null),F=V.exports;n["default"].use(k["a"]);var J=[{path:"/",name:"Home",component:F},{path:"/Home",name:"Home",component:F},{path:"/Gallery Collage",name:"Gallery Collage",component:function(){return a.e("chunk-88941e0e").then(a.bind(null,"e560"))}},{path:"/Visit",name:"Visit",component:function(){return a.e("chunk-18dd1bf4").then(a.bind(null,"2f1e"))}},{path:"/Contacto",name:"Contact",component:function(){return a.e("chunk-2d215d02").then(a.bind(null,"c098"))}}],q=new k["a"]({mode:"history",base:"/practicavue_alejandraretto_martapons/",routes:J}),z=q,B=a("a584");n["default"].config.productionTip=!1,new n["default"]({router:z,render:function(t){return t(j)}}).$mount("#app"),n["default"].use(B["a"],{config:{id:"G-300707818"}})},"6e11":function(t,e,a){t.exports=a.p+"img/IMG_0387.1b5f7fe9.jpg"},"7b29":function(t,e,a){},"85ec":function(t,e,a){},"9d8a":function(t,e,a){t.exports=a.p+"img/RTUU.a7b8cc08.jpg"}});
//# sourceMappingURL=app.90934a92.js.map