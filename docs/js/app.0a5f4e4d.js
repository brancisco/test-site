(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/test-site/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[e._v("Hello World.")]),r("p",[e._v("Website coming soon.")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/foo"}},[e._v("Go to Foo")])],1),r("li",[r("router-link",{attrs:{to:"/bar"}},[e._v("Go to Bar")])],1),r("li",[r("router-link",{attrs:{to:"/"+e.fakeUrl}},[e._v("Get Lost")])],1)]),r("router-view")],1)},a=[],c=(n("d3b7"),{name:"App",data:function(){return{fakeUrl:"nowhere"}},methods:{getRandomWord:function(){var e=this;fetch("https://random-word-api.herokuapp.com/word?number=1&swear=0").then((function(e){return e.json()})).then((function(t){e.fakeUrl=t[0]||"nowhere"}))}},mounted:function(){this.getRandomWord()}}),i=c,l=(n("034f"),n("2877")),f=Object(l["a"])(i,u,a,!1,null,null,null),s=f.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("You're now a Foo.")])])}],h={name:"Foo"},v=h,m=Object(l["a"])(v,p,d,!1,null,"324c8c47",null),_=m.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("You're now a Bar.")])])}],w={name:"Bar"},y=w,O=Object(l["a"])(y,b,g,!1,null,"5a125418",null),j=O.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("404")]),n("p",[e._v("Are you lost?")])])}],$={name:"Lost"},E=$,P=Object(l["a"])(E,x,k,!1,null,"58f0cfb4",null),S=P.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]);var M=[{path:"/"},{path:"/foo",component:_},{path:"/bar",component:j},{path:"*",component:S}],W=new o["a"]({base:"/test-site/",mode:"history",routes:M});new r["a"]({router:W,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0a5f4e4d.js.map