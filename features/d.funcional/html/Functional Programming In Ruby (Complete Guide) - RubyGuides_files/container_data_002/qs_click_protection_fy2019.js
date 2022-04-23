(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var k=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function n(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=aa:n=ea;return n.apply(null,arguments)}function fa(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.K=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}};function p(a,b){Array.prototype.forEach.call(a,b,void 0)};var ha={},q=null;var ia="function"===typeof Uint8Array;const r=Symbol(void 0);function ja(a,b){Object.isFrozen(a)||(r?a[r]|=b:void 0!==a.B?a.B|=b:Object.defineProperties(a,{B:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function ka(a){let b;r?b=a[r]:b=a.B;return null==b?0:b}function t(a){ja(a,1);return a}function u(a){return Array.isArray(a)?!!(ka(a)&2):!1}function v(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");ja(a,2)};function la(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var z=Object.freeze(t([]));function ma(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function A(a,b,c=!1){return-1===b?null:b>=a.l?a.g?a.g[b]:void 0:c&&a.g&&(c=a.g[b],null!=c)?c:a.j[b+a.i]}function B(a,b,c){a=A(a,b);return null==a?c:a}function C(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function na(a){var b=oa;a.h||(a.h={});const c=a.h[1];if(c)return c;let d=A(a,1,!1);if(null==d)return c;b=new b(d);u(a.j)&&v(b.j);return a.h[1]=b} 
function pa(a){var b=qa;a.h||(a.h={});var c=u(a.j),d=a.h[1];if(!d){var e=A(a,1,!1);null==e&&(e=z);if(u(a.j))v(e),Object.freeze(e);else if(e===z||u(e)){d=e=t(e.slice());if(u(a.j))throw Error("Cannot mutate an immutable Message");1<a.l?a.j[1+a.i]=d:(a.g||(a.g=a.j[a.l+a.i]={}))[1]=d}d=[];c=c||u(e);for(let f=0;f<e.length;f++)d[f]=new b(e[f]),c&&v(d[f].j);c&&(v(d),Object.freeze(d));a.h[1]=d}return d};function ra(a,b=sa){return ta(a,b)}function ua(a,b){if(null!=a){if(Array.isArray(a))a=ta(a,b);else if(la(a)){const c={};for(let d in a)c[d]=ua(a[d],b);a=c}else a=b(a);return a}}function ta(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=ua(c[d],b);Array.isArray(a)&&ka(a)&1&&t(c);return c} 
function va(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&ia&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!q){q={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));ha[e]=f;for(var h=0;h<f.length;h++){var g=f[h];void 0===q[g]&&(q[g]=h)}}}b=ha[b];c=Array(Math.floor(a.length/ 
3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],m=a[f+1];g=a[f+2];h=b[l>>2];l=b[(l&3)<<4|m>>4];m=b[(m&15)<<2|g>>6];g=b[g&63];c[e++]=h+l+m+g}h=0;g=d;switch(a.length-f){case 2:h=a[f+1],g=b[(h&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|h>>4]+g+d}a=c.join("")}}return Array.isArray(a)?ra(a,va):a}function sa(a){return ia&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};var xa=class{constructor(a,b,c){a||(a=wa);wa=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.i=(d?0:-1)-(this.constructor.g||0);this.h=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],la(d))){this.l=a-this.i;this.g=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.i),this.g=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.i,(d=this.j[a])?Array.isArray(d)&&t(d):this.j[a]=z;else{d=this.g||(this.g=this.j[this.l+this.i]={});let e=d[a];e?Array.isArray(e)&& 
t(e):d[a]=z}}toJSON(){return ra(this.j,va)}};xa.prototype.toString=function(){return this.j.toString()};let wa;var ya=class extends xa{};class D extends ya{}Object.defineProperties(ya,{[Symbol.hasInstance]:ma(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});Object.defineProperties(D,{[Symbol.hasInstance]:ma(Object[Symbol.hasInstance])});var oa=class extends D{constructor(a){super(a,-1,za)}},qa=class extends D{constructor(a){super(a)}},za=[1];var Aa=class extends D{constructor(a){super(a)}};var G=class{constructor(a,b){this.g=b===F?a:""}};G.prototype.i=!0;G.prototype.h=function(){return this.g.toString()};G.prototype.toString=function(){return this.g.toString()};function Ba(a){return a instanceof G&&a.constructor===G?a.g:"type_error:SafeUrl"}var Ca=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,F={};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var Da=class{};class H extends Da{constructor(a){super();this.g=a}toString(){return this.g}}var Ea=new H("about:invalid#zTSz");function Fa(a){if(a instanceof Da)if(a instanceof H)a=a.g;else throw Error("");else a=Ba(a);return a};function Ga(){}function Ha(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Ia={capture:!0},Ja={passive:!0},Ka=Ha(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",null,b)}catch(b){}return a});function I(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&Ka()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function La(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)La(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function Ma(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let J=[];const K=()=>{const a=J;J=[];for(const b of a)try{b()}catch(c){}};var Na=a=>{var b=L;"complete"===b.readyState||"interactive"===b.readyState?(J.push(a),1==J.length&&(window.Promise?Promise.resolve().then(K):window.setImmediate?setImmediate(K):setTimeout(K,0))):b.addEventListener("DOMContentLoaded",a)};function Oa(a=document){return a.createElement("img")};function Pa(a=null){return a&&"23"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="23"]')} 
function Qa(){if(!(.01<Math.random())){var a=Pa(document.currentScript);a=a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com";var b=(b=Pa(document.currentScript))&&b.getAttribute("data-jc-version")||"unknown";a=`https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):(b.google_image_requests|| 
(b.google_image_requests=[]),c=Oa(b.document),c.src=a,b.google_image_requests.push(c))}};var L=document,M=window;var Ra=(a=[])=>{k.google_logging_queue||(k.google_logging_queue=[]);k.google_logging_queue.push([12,a])};class Sa{constructor(a){this.H=a}}function N(a){return new Sa(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Ta=new Sa(a=>/^[^:]*([/?#]|$)/.test(a));var Ua=N("http"),Va=N("https"),Wa=N("ftp"),Xa=N("mailto");const Ya=[N("data"),Ua,Va,Xa,Wa,Ta];function Za(a=Ya){for(let b=0;b<a.length;++b){const c=a[b];if(c instanceof Sa&&c.H("#"))return new H("#")}}function $a(a=Ya){return Za(a)||Ea};const ab=[Ua,Va,Xa,Wa,Ta,N("market"),N("itms"),N("intent"),N("itms-appss")]; 
var bb=()=>{var a=`${"http:"===M.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)La(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.substr(0,c),e,a.substr(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};var cb=()=>{var a=L;try{return a.querySelectorAll("*[data-ifc]")}catch(b){return[]}},db=(a,b)=>{a&&Ma(b,(c,d)=>{a.style[d]=c})},eb=a=>{var b=L.body;const c=document.createDocumentFragment(),d=a.length;for(let e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};let O=null;var fb=()=>{const a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},gb=()=>{const a=k.performance;return a&&a.now?a.now():null};class hb{constructor(a,b){var c=gb()||fb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const P=k.performance,ib=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=Ha(()=>{var a;if(a=ib){var b;if(null===O){O="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(O=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=O;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function jb(a){a&&P&&Q()&&(P.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),P.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class kb{constructor(){var a=window;this.g=[];this.i=a||k;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=Q()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new hb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;P&&Q()&&P.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(gb()||fb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;P&&Q()&&P.mark(b);!this.h||2048< 
this.g.length||this.g.push(a)}}};const R=new kb;var lb=()=>{window.google_measure_js_timing||(R.h=!1,R.g!=R.i.google_js_reporting_queue&&(Q()&&p(R.g,jb),R.g.length=0))};"number"!==typeof window.google_srt&&(window.google_srt=Math.random());"complete"==window.document.readyState?lb():R.h&&I(window,"load",()=>{lb()});var mb=a=>{I(M,"message",b=>{let c;try{c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};function W(){this.h=this.h;this.i=this.i}W.prototype.h=!1;function nb(a){a.h||(a.h=!0,a.l())}W.prototype.l=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function X(a,b,c){W.call(this);this.o=a;this.D=b||0;this.s=c;this.v=n(this.C,this)}fa(X,W);X.prototype.g=0;X.prototype.l=function(){X.I.l.call(this);0!=this.g&&k.clearTimeout(this.g);this.g=0;delete this.o;delete this.s}; 
X.prototype.start=function(a){0!=this.g&&k.clearTimeout(this.g);this.g=0;var b=this.v;a=void 0!==a?a:this.D;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=n(b.handleEvent,b);else throw Error("Invalid listener argument");this.g=2147483647<Number(a)?-1:k.setTimeout(b,a||0)};X.prototype.C=function(){this.g=0;this.o&&this.o.call(this.s)};const ob={display:"inline-block",position:"absolute"},pb={display:"none",width:"100%",height:"100%",top:"0",left:"0"},Y=(a,b)=>{a&&(a.style.display=b?"inline-block":"none")};function qb(a=""){const b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4===a.length&&a.reduce((c,d)=>c&&!isNaN(+d),!0)&&([b.top,b.right,b.bottom,b.left]=a.map(c=>+c)));return b} 
function rb(a,b,c=2147483647){const d=L.createElement("div");db(d,Object.assign(Object.assign(Object.assign({},ob),{"z-index":String(c)}),b));C(a.data,10)&&I(d,"click",Ga);if(C(a.data,11)){a=b=L.createElement("a");c=bb();const e=$a(ab);e===Ea&&c("#");c=new G(Fa(e),F);c instanceof G||c instanceof G||(c="object"==typeof c&&c.i?c.h():String(c),Ca.test(c)||(c="about:invalid#zClosurez"),c=new G(c,F));a.href=Ba(c);b.appendChild(d);return b}return d} 
function sb(a,b){var c,d,e,f;switch(B(b.m,5,1)){case 2:null===(d=null===(c=M.AFMA_Communicator)||void 0===c?void 0:c.addEventListener)||void 0===d?void 0:d.call(c,"onshow",()=>{Z(a,b)});break;case 10:I(M,"i-creative-view",()=>{Z(a,b)});break;case 4:I(L,"DOMContentLoaded",()=>{Z(a,b)});break;case 8:mb(h=>{h.rr&&Z(a,b)});break;case 9:if("IntersectionObserver"in M){const h=new IntersectionObserver(g=>{for(const l of g)if(0<l.intersectionRatio){Z(a,b);break}});h.observe(L.body);a.J.push(h)}break;case 11:null=== 
(f=null===(e=M.AFMA_Communicator)||void 0===e?void 0:e.addEventListener)||void 0===f?void 0:f.call(e,"onAdVisibilityChanged",()=>{Z(a,b)})}}function tb(a,b){b=qb(b);const c=B(a.data,9,0);a.i=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(d=>rb(a,d,9019))} 
function ub(a){var b=0;for(const d of a.D){const e=d.m,f=a.v[B(e,5,1)];d.u||void 0===f||(b=Math.max(b,f+B(e,2,0)))}a.l&&nb(a.l);b-=Date.now();const c=a.g;0<b?(Y(c,!0),a.l=new X(()=>{Y(c,!1)},b),a.l.start()):Y(c,!1)}function Z(a,b){b.u||(a.v[B(b.m,5,1)]=Date.now(),C(b.m,9)&&(a.D.push(b),ub(a)))};window.googqscp=new class{constructor(){this.i=[];this.l=this.g=null;this.D=[];this.data=null;this.C=[];this.h=[];this.s=[];this.v={};this.J=[];this.o=null}init(a){Ra([a]);this.data=new Aa(a);a=na(this.data);p(pa(a),e=>{this.s.push({F:0,u:!1,G:0,m:e,A:-1})});this.h=cb();let b=!1;a=this.h.length;for(let e=0;e<a;++e){var c=new oa(JSON.parse(this.h[e].getAttribute("data-ifc")||"[]"));p(pa(c),f=>{this.s.push({F:0,u:!1,G:0,m:f,A:e});1===B(f,4,1)&&(b=!0)})}a=!1;for(var d of this.s)c=d.m,0<B(c,2,0)&&0<B(c, 
5,1)?(!this.g&&C(c,9)&&(this.g=rb(this,pb)),sb(this,d)):B(c,1,"")&&C(c,9)&&tb(this,B(c,1,"")),B(c,1,"")&&(a=!0);d=[];this.g&&d.push(this.g);!b&&d.push(...this.i);L.body&&eb(d);C(this.data,13)&&Na(()=>{const e=L.body.querySelectorAll(".amp-fcp, .amp-bcp");for(let h=0;h<e.length;++h){var f=(f=e[h])?M.getComputedStyle(f).getPropertyValue("position"):void 0;"absolute"===f&&Y(e[h],!1)}});I(L,"click",e=>{if(!1===e.isTrusted&&C(this.data,15))e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopImmediatePropagation(), 
Qa();else{var f=-1,h=[];for(const w of this.s){var g=w.A,l=-1!==g;if(!(B(w.m,3,0)<=f||w.u||l&&!1===h[g])){var m=!l||h[g]||this.h[g].contains(e.target);l&&m&&(h[g]=!0);if(g=m)if(g=e,m=w,l=m.m,0<B(l,2,0)&&0<B(l,5,1))g=this.v[B(l,5,1)],g=void 0!==g&&Date.now()<g+B(l,2,0);else if(B(l,1,"")){{l=(0<=m.A?this.h[m.A]:L.body).getBoundingClientRect();var E=Number;var x=(x=L.body)?M.getComputedStyle(x).getPropertyValue("zoom"):void 0;E=E(x||"1");const [vb,wb]=[g.clientX,g.clientY],[S,T,ba,ca]=[vb/E-l.left,wb/ 
E-l.top,l.width,l.height];if(!(0<ba&&0<ca)||isNaN(S)||isNaN(T)||0>S||0>T)g=!1;else{m=qb(B(m.m,1,""));x=!(S>=m.left&&ba-S>m.right&&T>=m.top&&ca-T>m.bottom);if(this.o&&C(this.data,12)&&300>g.timeStamp-this.o.timeStamp){g=this.o.changedTouches[0];const [U,V]=[g.clientX/E-l.left,g.clientY/E-l.top];!isNaN(U)&&!isNaN(V)&&0<=U&&0<=V&&(x=(x=C(this.data,16)?x:!1)||!(U>=m.left&&ba-U>m.right&&V>=m.top&&ca-V>m.bottom))}g=x}}}else g=!0;if(g){var y=w;f=B(w.m,3,0)}}}if(y)switch(f=y.m,B(f,4,1)){case 2:case 3:e.preventDefault? 
e.preventDefault():e.returnValue=!1;h=Date.now();500<h-y.G&&(y.G=h,++y.F);h=y.m;if(B(h,8,0)&&y.F>=B(h,8,0))if(y.u=!0,this.g&&0<B(h,2,0))ub(this);else if(0<this.i.length&&B(h,1,""))for(var da of this.i)Y(da,!1);Qa();da=f.toJSON();for(const w of this.C)w(e,da)}}},Ia);a&&C(this.data,12)&&I(L,"touchend",e=>{this.o=e},Ja)}registerCallback(a){this.C.push(a)}};}).call(this);