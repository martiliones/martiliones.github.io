(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(n(t))}},"0771":function(t,e,r){"use strict";r("b38e")},"0b42":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)?n(e)&&(e=e[c],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"14d7":function(t,e,r){},"428f":function(t,e,r){var n=r("da84");t.exports=n},"538c":function(t,e,r){"use strict";r("14d7")},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},"857a":function(t,e,r){var n=r("1d80"),i=r("577e"),o=/"/g;t.exports=function(t,e,r,c){var a=i(n(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+i(c).replace(o,"&quot;")+'"'),s+">"+a+"</"+e+">"}},9911:function(t,e,r){"use strict";var n=r("23e7"),i=r("857a"),o=r("af03");n({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),a=r("83ab"),s=r("4930"),l=r("d039"),u=r("5135"),f=r("e8b5"),d=r("861d"),p=r("d9b5"),b=r("825a"),h=r("7b0b"),v=r("fc6a"),m=r("a04b"),g=r("577e"),O=r("5c6c"),w=r("7c73"),j=r("df75"),C=r("241c"),y=r("057f"),k=r("7418"),x=r("06cf"),S=r("9bf2"),M=r("d1e7"),L=r("9112"),P=r("6eeb"),H=r("5692"),A=r("f772"),V=r("d012"),Z=r("90e3"),B=r("b622"),T=r("e538"),z=r("746f"),E=r("d44e"),I=r("69f3"),N=r("b727").forEach,J=A("hidden"),R="Symbol",_="prototype",F=B("toPrimitive"),q=I.set,Q=I.getterFor(R),Y=Object[_],$=i.Symbol,D=o("JSON","stringify"),W=x.f,G=S.f,K=y.f,U=M.f,X=H("symbols"),tt=H("op-symbols"),et=H("string-to-symbol-registry"),rt=H("symbol-to-string-registry"),nt=H("wks"),it=i.QObject,ot=!it||!it[_]||!it[_].findChild,ct=a&&l((function(){return 7!=w(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W(Y,e);n&&delete Y[e],G(t,e,r),n&&t!==Y&&G(Y,e,n)}:G,at=function(t,e){var r=X[t]=w($[_]);return q(r,{type:R,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===Y&&st(tt,e,r),b(t);var n=m(e);return b(r),u(X,n)?(r.enumerable?(u(t,J)&&t[J][n]&&(t[J][n]=!1),r=w(r,{enumerable:O(0,!1)})):(u(t,J)||G(t,J,O(1,{})),t[J][n]=!0),ct(t,n,r)):G(t,n,r)},lt=function(t,e){b(t);var r=v(e),n=j(r).concat(bt(r));return N(n,(function(e){a&&!ft.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?w(t):lt(w(t),e)},ft=function(t){var e=m(t),r=U.call(this,e);return!(this===Y&&u(X,e)&&!u(tt,e))&&(!(r||!u(this,e)||!u(X,e)||u(this,J)&&this[J][e])||r)},dt=function(t,e){var r=v(t),n=m(e);if(r!==Y||!u(X,n)||u(tt,n)){var i=W(r,n);return!i||!u(X,n)||u(r,J)&&r[J][n]||(i.enumerable=!0),i}},pt=function(t){var e=K(v(t)),r=[];return N(e,(function(t){u(X,t)||u(V,t)||r.push(t)})),r},bt=function(t){var e=t===Y,r=K(e?tt:v(t)),n=[];return N(r,(function(t){!u(X,t)||e&&!u(Y,t)||n.push(X[t])})),n};if(s||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=Z(t),r=function(t){this===Y&&r.call(tt,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),ct(this,e,O(1,t))};return a&&ot&&ct(Y,e,{configurable:!0,set:r}),at(e,t)},P($[_],"toString",(function(){return Q(this).tag})),P($,"withoutSetter",(function(t){return at(Z(t),t)})),M.f=ft,S.f=st,x.f=dt,C.f=y.f=pt,k.f=bt,T.f=function(t){return at(B(t),t)},a&&(G($[_],"description",{configurable:!0,get:function(){return Q(this).description}}),c||P(Y,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:$}),N(j(nt),(function(t){z(t)})),n({target:R,stat:!0,forced:!s},{for:function(t){var e=g(t);if(u(et,e))return et[e];var r=$(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(u(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:l((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),D){var ht=!s||l((function(){var t=$();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!p(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!p(e))return e}),i[1]=e,D.apply(null,i)}})}$[_][F]||L($[_],F,$[_].valueOf),E($,R),V[J]=!0},acca:function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a"),r("9911");var n=r("7a23");Object(n["u"])("data-v-f1bfe0a6");var i=Object(n["f"])("div",{class:"prose m-auto mb-8"},[Object(n["f"])("h1",{class:"mb-0"},"Projects"),Object(n["f"])("p",{class:"opacity-50 !-mt-6 italic"},"List of projects that I am proud of")],-1),o={class:"prose m-auto"},c={class:"mt-10 font-bold"},a={class:"project-grid py-2 -mx-3 gap-2"};function s(t,e,r,s,l,u){var f=Object(n["y"])("ProjectPreview");return Object(n["r"])(),Object(n["e"])(n["a"],null,[i,Object(n["f"])("div",o,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(l.projects,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{key:e},[Object(n["f"])("h4",c,Object(n["B"])(t.name),1),Object(n["f"])("div",a,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.list,(function(t,e){return Object(n["r"])(),Object(n["d"])(f,{key:e,title:t.name,description:t.description,link:t.link,icon:t.icon},null,8,["title","description","link","icon"])})),128))])])})),128))])],64)}Object(n["s"])(),Object(n["u"])("data-v-226b462b");var l=["href"],u={class:"pt-2 pr-5"},f={class:"text-3xl opacity-50",style:{"vertical-align":"text-bottom","min-width":"1em","min-height":"1em"}},d={class:"flex-auto"},p={class:"text-normal"},b={class:"desc text-sm opacity-50 font-normal"};function h(t,e,r,i,o,c){return Object(n["r"])(),Object(n["e"])("a",{class:"item relative flex",href:r.link,target:"_blank"},[Object(n["f"])("div",u,[Object(n["f"])("div",f,[(Object(n["r"])(),Object(n["d"])(Object(n["z"])(r.icon)))])]),Object(n["f"])("div",d,[Object(n["f"])("div",p,Object(n["B"])(r.title),1),Object(n["f"])("div",b,Object(n["B"])(r.description),1)])],8,l)}Object(n["s"])();var v={props:["title","description","link","icon"]};r("538c");v.render=h,v.__scopeId="data-v-226b462b";var m=v,g={viewBox:"0 0 345 257",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},O=Object(n["f"])("path",{d:"M38.3164 174.804H106.351V192H18.3171V68.64H38.3164V174.804ZM133.758 82.8451C129.397 82.8451 126.033 81.7859 123.665 79.6676C121.422 77.4247 120.301 74.3096 120.301 70.3222C120.301 66.3348 121.422 63.2819 123.665 61.1636C126.033 59.0453 129.397 57.9862 133.758 57.9862C137.995 57.9862 141.235 59.0453 143.478 61.1636C145.845 63.2819 147.029 66.3348 147.029 70.3222C147.029 74.3096 145.845 77.4247 143.478 79.6676C141.235 81.7859 137.995 82.8451 133.758 82.8451ZM143.664 98.5455V192H123.665V98.5455H143.664ZM221.309 193.869C214.082 193.869 207.665 192.062 202.057 188.449C196.575 184.711 192.463 179.913 189.721 174.057L188.787 192H171.217V56.4909H191.217V113.872C194.083 108.763 198.132 104.651 203.366 101.536C208.599 98.2962 214.767 96.6764 221.87 96.6764C229.471 96.6764 236.324 98.6078 242.43 102.471C248.66 106.333 253.582 111.941 257.196 119.292C260.934 126.52 262.803 135.242 262.803 145.46C262.803 155.553 260.934 164.213 257.196 171.44C253.582 178.667 248.598 184.212 242.243 188.075C236.013 191.938 229.035 193.869 221.309 193.869ZM217.01 177.795C225.11 177.795 231.402 174.929 235.888 169.197C240.498 163.341 242.804 155.366 242.804 145.273C242.804 135.18 240.561 127.267 236.075 121.535C231.589 115.803 225.297 112.937 217.197 112.937C209.347 112.937 203.054 115.928 198.319 121.909C193.584 127.766 191.217 135.678 191.217 145.647C191.217 155.615 193.584 163.465 198.319 169.197C203.054 174.929 209.285 177.795 217.01 177.795Z",fill:"currentColor"},null,-1),w=Object(n["f"])("path",{d:"M258 61.3258L313.117 38.6374C318.558 36.274 337.01 28.7112 337.01 28.7112C337.01 28.7112 345.526 25.4025 344.816 33.438C344.579 36.7467 342.687 48.3272 340.794 60.8531L334.881 97.9581C334.881 97.9581 334.407 103.394 330.386 104.339C326.365 105.285 319.741 101.03 318.558 100.085C317.612 99.3761 300.817 88.7409 294.666 83.5415C293.01 82.1235 291.118 79.2874 294.903 75.9787C303.419 68.1796 313.591 58.4897 319.741 52.3449C322.58 49.5089 325.418 42.8915 313.591 50.9269L280.236 73.379C280.236 73.379 276.451 75.7424 269.355 73.6153C262.258 71.4883 253.979 68.6522 253.979 68.6522C253.979 68.6522 248.301 65.1072 258 61.3258Z",fill:"currentColor"},null,-1),j=[O,w];function C(t,e){return Object(n["r"])(),Object(n["e"])("svg",g,j)}const y={};y.render=C;var k=y,x={width:"1em",height:"1em",viewBox:"0 0 58 58",fill:"none",xmlns:"http://www.w3.org/2000/svg"},S=Object(n["g"])('<path d="M29.0442 31.864C30.8967 31.864 32.3983 30.3621 32.3983 28.5097C32.3983 26.6572 30.8967 25.1555 29.0442 25.1555C27.1917 25.1555 25.6898 26.6572 25.6898 28.5097C25.6898 30.3621 27.1917 31.864 29.0442 31.864Z" fill="currentColor"></path><path d="M29.0437 35.3818C38.9842 35.3818 47.0424 32.305 47.0424 28.5097C47.0424 24.7143 38.9842 21.6375 29.0437 21.6375C19.1035 21.6375 11.0452 24.7143 11.0452 28.5097C11.0452 32.305 19.1035 35.3818 29.0437 35.3818Z" stroke="currentColor" stroke-width="2"></path><path d="M23.092 31.9458C28.0622 40.5543 34.7559 45.9946 38.0429 44.097C41.3298 42.1992 39.9653 33.6822 34.9951 25.0735C30.0248 16.465 23.3312 11.0247 20.0442 12.9224C16.7574 14.8201 18.122 23.3372 23.092 31.9458Z" stroke="currentColor" stroke-width="2"></path><path d="M23.0922 25.0737C18.122 33.6822 16.7574 42.1992 20.0444 44.097C23.3312 45.9947 30.025 40.5543 34.9951 31.9458C39.9653 23.3372 41.3298 14.8201 38.0429 12.9225C34.7561 11.0248 28.0624 16.465 23.0922 25.0737Z" stroke="currentColor" stroke-width="2"></path><rect x="1" y="1" width="56" height="56" rx="12" stroke="currentColor" stroke-width="2"></rect>',5),M=[S];function L(t,e){return Object(n["r"])(),Object(n["e"])("svg",x,M)}const P={};P.render=L;var H=P,A={width:"1em",height:"1em",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=Object(n["f"])("path",{d:"M8.3335 12.5H33.3335C37.7538 12.5 41.993 14.2559 45.1186 17.3816C48.2442 20.5072 50.0002 24.7464 50.0002 29.1667V87.5C50.0002 84.1848 48.6832 81.0054 46.339 78.6612C43.9948 76.317 40.8154 75 37.5002 75H8.3335V12.5Z",stroke:"currentColor","stroke-width":"8.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Z=Object(n["f"])("path",{d:"M91.6667 12.5H66.6667C62.2464 12.5 58.0072 14.2559 54.8816 17.3816C51.7559 20.5072 50 24.7464 50 29.1667V87.5C50 84.1848 51.317 81.0054 53.6612 78.6612C56.0054 76.317 59.1848 75 62.5 75H91.6667V12.5Z",stroke:"currentColor","stroke-width":"8.33333","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),B=[V,Z];function T(t,e){return Object(n["r"])(),Object(n["e"])("svg",A,B)}const z={};z.render=T;var E=z,I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},N=Object(n["f"])("path",{d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23z",fill:"currentColor"},null,-1),J=Object(n["f"])("path",{d:"M18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z",fill:"currentColor"},null,-1),R=[N,J];function _(t,e){return Object(n["r"])(),Object(n["e"])("svg",I,R)}const F={};F.render=_;var q=F,Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},Y=Object(n["f"])("g",{fill:"none",stroke:"currentColor","stroke-width":"3"},[Object(n["f"])("path",{d:"M42 24c0-9.389-8.059-17-18-17S6 14.611 6 24h36z","stroke-linejoin":"round"}),Object(n["f"])("path",{d:"M24 24.008v14.537C24 41.558 21.514 44 18.5 44S13 41.558 13 38.545","stroke-linecap":"round","stroke-linejoin":"round"}),Object(n["f"])("path",{d:"M24 4v3","stroke-linecap":"round"})],-1),$=[Y];function D(t,e){return Object(n["r"])(),Object(n["e"])("svg",Q,$)}const W={};W.render=D;var G=W,K={components:{ProjectPreview:m},data:function(){return{projects:[{name:"Latest",list:[{name:"LibTelegram",description:"Modern JavaScript framework for building Telegram Bots",link:"https://github.com/libtelegram/libtelegram",icon:k},{name:"icon-set-creator",description:"CLI for generating React-Native app icons",link:"https://github.com/martiliones/icon-set-creator",icon:H},{name:"Open Study",description:"Open Source Education app for android and ios",link:"https://github.com/OpenQazaqstan/OpenStudy",icon:E}]},{name:"LibTelegram Ecosystem",list:[{name:"LibTelegram",description:"Modern JavaScript framework for building Telegram Bots",link:"https://github.com/libtelegram/libtelegram",icon:k},{name:"i18n",description:"Internationalization library for LibTelegram",link:"https://github.com/libtelegram/i18n",icon:q},{name:"Anti Flood",description:"Plugin to resolve telegram limits",link:"https://github.com/libtelegram/anti-flood",icon:G}]},{name:"Tools",list:[{name:"icon-set-creator",description:"CLI for generating React-Native app icons",link:"https://github.com/martiliones/icon-set-creator",icon:H}]},{name:"Apps",list:[{name:"Open Study",description:"Open Source Education app for android and ios",link:"https://github.com/OpenQazaqstan/OpenStudy",icon:E}]}]}}};r("0771");K.render=s,K.__scopeId="data-v-f1bfe0a6";e["default"]=K},af03:function(t,e,r){var n=r("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b38e:function(t,e,r){},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),a=r("65f0"),s=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=7==t,p=5==t||f;return function(b,h,v,m){for(var g,O,w=o(b),j=i(w),C=n(h,v,3),y=c(j.length),k=0,x=m||a,S=e?x(b,y):r||d?x(b,0):void 0;y>k;k++)if((p||k in j)&&(g=j[k],O=C(g,k,w),t))if(e)S[k]=O;else if(O)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:s.call(S,g)}else switch(t){case 4:return!1;case 7:s.call(S,g)}return f?-1:l||u?u:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),c=r("5135"),a=r("861d"),s=r("9bf2").f,l=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var b=p.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=b.call(t);if(c(f,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=project.254fcb83.js.map