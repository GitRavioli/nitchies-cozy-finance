const gy=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),vh={},my="/",Gt=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${my}${r}`,r in vh)return;vh[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":gy,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ic(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Yr=[],Bt=()=>{},_y=()=>!1,ca=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bc=t=>t.startsWith("onUpdate:"),He=Object.assign,Ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yy=Object.prototype.hasOwnProperty,Pe=(t,e)=>yy.call(t,e),re=Array.isArray,Xr=t=>Ps(t)==="[object Map]",ua=t=>Ps(t)==="[object Set]",Eh=t=>Ps(t)==="[object Date]",fe=t=>typeof t=="function",ze=t=>typeof t=="string",sn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Zf=t=>(Ne(t)||fe(t))&&fe(t.then)&&fe(t.catch),ep=Object.prototype.toString,Ps=t=>ep.call(t),vy=t=>Ps(t).slice(8,-1),tp=t=>Ps(t)==="[object Object]",Rc=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yi=Ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ey=/-(\w)/g,Vt=ha(t=>t.replace(Ey,(e,n)=>n?n.toUpperCase():"")),wy=/\B([A-Z])/g,Or=ha(t=>t.replace(wy,"-$1").toLowerCase()),da=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),tl=ha(t=>t?`on${da(t)}`:""),Kn=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},np=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Do=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ty=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let wh;const fa=()=>wh||(wh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Sc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ze(r)?Ry(r):Sc(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(ze(t)||Ne(t))return t}const Iy=/;(?![^(]*\))/g,by=/:([^]+)/,Ay=/\/\*[^]*?\*\//g;function Ry(t){const e={};return t.replace(Ay,"").split(Iy).forEach(n=>{if(n){const r=n.split(by);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cc(t){let e="";if(ze(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Cc(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cy=Ic(Sy);function rp(t){return!!t||t===""}function Py(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=pa(t[r],e[r]);return n}function pa(t,e){if(t===e)return!0;let n=Eh(t),r=Eh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=sn(t),r=sn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?Py(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!pa(t[o],e[o]))return!1}}return String(t)===String(e)}function ky(t,e){return t.findIndex(n=>pa(n,e))}const ip=t=>!!(t&&t.__v_isRef===!0),Oy=t=>ze(t)?t:t==null?"":re(t)||Ne(t)&&(t.toString===ep||!fe(t.toString))?ip(t)?Oy(t.value):JSON.stringify(t,sp,2):String(t),sp=(t,e)=>ip(e)?sp(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[nl(r,s)+" =>"]=i,n),{})}:ua(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nl(n))}:sn(e)?nl(e):Ne(e)&&!re(e)&&!tp(e)?String(e):e,nl=(t,e="")=>{var n;return sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function xy(t){return new op(t)}function Dy(){return Ct}let Ve;const rl=new WeakSet;class ap{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rl.has(this)&&(rl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Th(this),up(this);const e=Ve,n=$t;Ve=this,$t=!0;try{return this.fn()}finally{hp(this),Ve=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oc(e);this.deps=this.depsTail=void 0,Th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xl(this)&&this.run()}get dirty(){return xl(this)}}let lp=0,Xi,Zi;function cp(t,e=!1){if(t.flags|=8,e){t.next=Zi,Zi=t;return}t.next=Xi,Xi=t}function Pc(){lp++}function kc(){if(--lp>0)return;if(Zi){let e=Zi;for(Zi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xi;){let e=Xi;for(Xi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function up(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hp(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Oc(r),Ny(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function xl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===us))return;t.globalVersion=us;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!xl(t)){t.flags&=-3;return}const n=Ve,r=$t;Ve=t,$t=!0;try{up(t);const i=t.fn(t._value);(e.version===0||Kn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ve=n,$t=r,hp(t),t.flags&=-3}}function Oc(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Oc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ny(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const fp=[];function nr(){fp.push($t),$t=!1}function rr(){const t=fp.pop();$t=t===void 0?!0:t}function Th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let us=0;class Vy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!$t||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Vy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,pp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,us++,this.notify(e)}notify(e){Pc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kc()}}}function pp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const No=new WeakMap,yr=Symbol(""),Dl=Symbol(""),hs=Symbol("");function ut(t,e,n){if($t&&Ve){let r=No.get(t);r||No.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new xc),i.map=r,i.key=n),i.track()}}function pn(t,e,n,r,i,s){const o=No.get(t);if(!o){us++;return}const l=c=>{c&&c.trigger()};if(Pc(),e==="clear")o.forEach(l);else{const c=re(t),h=c&&Rc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===hs||!sn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(hs)),e){case"add":c?h&&l(o.get("length")):(l(o.get(yr)),Xr(t)&&l(o.get(Dl)));break;case"delete":c||(l(o.get(yr)),Xr(t)&&l(o.get(Dl)));break;case"set":Xr(t)&&l(o.get(yr));break}}kc()}function Ly(t,e){const n=No.get(t);return n&&n.get(e)}function Fr(t){const e=Ae(t);return e===t?e:(ut(e,"iterate",hs),Nt(t)?e:e.map(ht))}function ga(t){return ut(t=Ae(t),"iterate",hs),t}const My={__proto__:null,[Symbol.iterator](){return il(this,Symbol.iterator,ht)},concat(...t){return Fr(this).concat(...t.map(e=>re(e)?Fr(e):e))},entries(){return il(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return hn(this,"find",t,e,ht,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return sl(this,"includes",t)},indexOf(...t){return sl(this,"indexOf",t)},join(t){return Fr(this).join(t)},lastIndexOf(...t){return sl(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Ui(this,"pop")},push(...t){return Ui(this,"push",t)},reduce(t,...e){return Ih(this,"reduce",t,e)},reduceRight(t,...e){return Ih(this,"reduceRight",t,e)},shift(){return Ui(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Ui(this,"splice",t)},toReversed(){return Fr(this).toReversed()},toSorted(t){return Fr(this).toSorted(t)},toSpliced(...t){return Fr(this).toSpliced(...t)},unshift(...t){return Ui(this,"unshift",t)},values(){return il(this,"values",ht)}};function il(t,e,n){const r=ga(t),i=r[e]();return r!==t&&!Nt(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Fy=Array.prototype;function hn(t,e,n,r,i,s){const o=ga(t),l=o!==t&&!Nt(t),c=o[e];if(c!==Fy[e]){const p=c.apply(t,s);return l?ht(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,ht(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&i?i(d):d}function Ih(t,e,n,r){const i=ga(t);let s=n;return i!==t&&(Nt(t)?n.length>3&&(s=function(o,l,c){return n.call(this,o,l,c,t)}):s=function(o,l,c){return n.call(this,o,ht(l),c,t)}),i[e](s,...r)}function sl(t,e,n){const r=Ae(t);ut(r,"iterate",hs);const i=r[e](...n);return(i===-1||i===!1)&&Vc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):i}function Ui(t,e,n=[]){nr(),Pc();const r=Ae(t)[e].apply(t,n);return kc(),rr(),r}const Uy=Ic("__proto__,__v_isRef,__isVue"),gp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sn));function By(t){sn(t)||(t=String(t));const e=Ae(this);return ut(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Jy:Ep:s?vp:yp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!i){let c;if(o&&(c=My[n]))return c;if(n==="hasOwnProperty")return By}const l=Reflect.get(e,n,nt(e)?e:r);return(sn(n)?gp.has(n):Uy(n))||(i||ut(e,"get",n),s)?l:nt(l)?o&&Rc(n)?l:l.value:Ne(l)?i?Tp(l):vi(l):l}}class _p extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Ir(s);if(!Nt(r)&&!Ir(r)&&(s=Ae(s),r=Ae(r)),!re(e)&&nt(s)&&!nt(r))return c?!1:(s.value=r,!0)}const o=re(e)&&Rc(n)?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,nt(e)?e:i);return e===Ae(i)&&(o?Kn(r,s)&&pn(e,"set",n,r):pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&pn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!sn(n)||!gp.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",re(e)?"length":yr),Reflect.ownKeys(e)}}class $y extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jy=new _p,qy=new $y,Hy=new _p(!0);const Nl=t=>t,oo=t=>Reflect.getPrototypeOf(t);function zy(t,e,n){return function(...r){const i=this.__v_raw,s=Ae(i),o=Xr(s),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=i[t](...r),d=n?Nl:e?Vl:ht;return!e&&ut(s,"iterate",c?Dl:yr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ky(t,e){const n={get(i){const s=this.__v_raw,o=Ae(s),l=Ae(i);t||(Kn(i,l)&&ut(o,"get",i),ut(o,"get",l));const{has:c}=oo(o),h=e?Nl:t?Vl:ht;if(c.call(o,i))return h(s.get(i));if(c.call(o,l))return h(s.get(l));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&ut(Ae(i),"iterate",yr),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,o=Ae(s),l=Ae(i);return t||(Kn(i,l)&&ut(o,"has",i),ut(o,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const o=this,l=o.__v_raw,c=Ae(l),h=e?Nl:t?Vl:ht;return!t&&ut(c,"iterate",yr),l.forEach((d,p)=>i.call(s,h(d),h(p),o))}};return He(n,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(i){!e&&!Nt(i)&&!Ir(i)&&(i=Ae(i));const s=Ae(this);return oo(s).has.call(s,i)||(s.add(i),pn(s,"add",i,i)),this},set(i,s){!e&&!Nt(s)&&!Ir(s)&&(s=Ae(s));const o=Ae(this),{has:l,get:c}=oo(o);let h=l.call(o,i);h||(i=Ae(i),h=l.call(o,i));const d=c.call(o,i);return o.set(i,s),h?Kn(s,d)&&pn(o,"set",i,s):pn(o,"add",i,s),this},delete(i){const s=Ae(this),{has:o,get:l}=oo(s);let c=o.call(s,i);c||(i=Ae(i),c=o.call(s,i)),l&&l.call(s,i);const h=s.delete(i);return c&&pn(s,"delete",i,void 0),h},clear(){const i=Ae(this),s=i.size!==0,o=i.clear();return s&&pn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=zy(i,t,e)}),n}function Dc(t,e){const n=Ky(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Pe(n,i)&&i in r?n:r,i,s)}const Wy={get:Dc(!1,!1)},Gy={get:Dc(!1,!0)},Qy={get:Dc(!0,!1)};const yp=new WeakMap,vp=new WeakMap,Ep=new WeakMap,Jy=new WeakMap;function Yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Yy(vy(t))}function vi(t){return Ir(t)?t:Nc(t,!1,jy,Wy,yp)}function wp(t){return Nc(t,!1,Hy,Gy,vp)}function Tp(t){return Nc(t,!0,qy,Qy,Ep)}function Nc(t,e,n,r,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Xy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return i.set(t,l),l}function Zr(t){return Ir(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ir(t){return!!(t&&t.__v_isReadonly)}function Nt(t){return!!(t&&t.__v_isShallow)}function Vc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Ei(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&np(t,"__v_skip",!0),t}const ht=t=>Ne(t)?vi(t):t,Vl=t=>Ne(t)?Tp(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function li(t){return Ip(t,!1)}function Zy(t){return Ip(t,!0)}function Ip(t,e){return nt(t)?t:new ev(t,e)}class ev{constructor(e,n){this.dep=new xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Nt(e)||Ir(e);e=r?e:Ae(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function vr(t){return nt(t)?t.value:t}const tv={get:(t,e,n)=>e==="__v_raw"?t:vr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function bp(t){return Zr(t)?t:new Proxy(t,tv)}function EP(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=rv(t,n);return e}class nv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ly(Ae(this._object),this._key)}}function rv(t,e,n){const r=t[e];return nt(r)?r:new nv(t,e,n)}class iv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return cp(this,!0),!0}get value(){const e=this.dep.track();return dp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sv(t,e,n=!1){let r,i;return fe(t)?r=t:(r=t.get,i=t.set),new iv(r,i,n)}const lo={},Vo=new WeakMap;let fr;function ov(t,e=!1,n=fr){if(n){let r=Vo.get(n);r||Vo.set(n,r=[]),r.push(t)}}function av(t,e,n=De){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:l,call:c}=n,h=$=>i?$:Nt($)||i===!1||i===0?gn($,1):gn($);let d,p,g,v,C=!1,x=!1;if(nt(t)?(p=()=>t.value,C=Nt(t)):Zr(t)?(p=()=>h(t),C=!0):re(t)?(x=!0,C=t.some($=>Zr($)||Nt($)),p=()=>t.map($=>{if(nt($))return $.value;if(Zr($))return h($);if(fe($))return c?c($,2):$()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){nr();try{g()}finally{rr()}}const $=fr;fr=d;try{return c?c(t,3,[v]):t(v)}finally{fr=$}}:p=Bt,e&&i){const $=p,Y=i===!0?1/0:i;p=()=>gn($(),Y)}const O=Dy(),F=()=>{d.stop(),O&&O.active&&Ac(O.effects,d)};if(s&&e){const $=e;e=(...Y)=>{$(...Y),F()}}let B=x?new Array(t.length).fill(lo):lo;const j=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const Y=d.run();if(i||C||(x?Y.some((te,A)=>Kn(te,B[A])):Kn(Y,B))){g&&g();const te=fr;fr=d;try{const A=[Y,B===lo?void 0:x&&B[0]===lo?[]:B,v];c?c(e,3,A):e(...A),B=Y}finally{fr=te}}}else d.run()};return l&&l(j),d=new ap(p),d.scheduler=o?()=>o(j,!1):j,v=$=>ov($,!1,d),g=d.onStop=()=>{const $=Vo.get(d);if($){if(c)c($,4);else for(const Y of $)Y();Vo.delete(d)}},e?r?j(!0):B=d.run():o?o(j.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function gn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))gn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(ua(t)||Xr(t))t.forEach(r=>{gn(r,e,n)});else if(tp(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(t,e,n,r){try{return r?t(...r):t()}catch(i){ma(i,e,n)}}function jt(t,e,n,r){if(fe(t)){const i=ks(t,e,n,r);return i&&Zf(i)&&i.catch(s=>{ma(s,e,n)}),i}if(re(t)){const i=[];for(let s=0;s<t.length;s++)i.push(jt(t[s],e,n,r));return i}}function ma(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(s){nr(),ks(s,null,10,[t,c,h]),rr();return}}lv(t,n,i,r,o)}function lv(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const mt=[];let Qt=-1;const ei=[];let Vn=null,qr=0;const Ap=Promise.resolve();let Lo=null;function Lc(t){const e=Lo||Ap;return t?e.then(this?t.bind(this):t):e}function cv(t){let e=Qt+1,n=mt.length;for(;e<n;){const r=e+n>>>1,i=mt[r],s=ds(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function Mc(t){if(!(t.flags&1)){const e=ds(t),n=mt[mt.length-1];!n||!(t.flags&2)&&e>=ds(n)?mt.push(t):mt.splice(cv(e),0,t),t.flags|=1,Rp()}}function Rp(){Lo||(Lo=Ap.then(Cp))}function uv(t){re(t)?ei.push(...t):Vn&&t.id===-1?Vn.splice(qr+1,0,t):t.flags&1||(ei.push(t),t.flags|=1),Rp()}function bh(t,e,n=Qt+1){for(;n<mt.length;n++){const r=mt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;mt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Sp(t){if(ei.length){const e=[...new Set(ei)].sort((n,r)=>ds(n)-ds(r));if(ei.length=0,Vn){Vn.push(...e);return}for(Vn=e,qr=0;qr<Vn.length;qr++){const n=Vn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vn=null,qr=0}}const ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cp(t){const e=Bt;try{for(Qt=0;Qt<mt.length;Qt++){const n=mt[Qt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ks(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Qt<mt.length;Qt++){const n=mt[Qt];n&&(n.flags&=-2)}Qt=-1,mt.length=0,Sp(),Lo=null,(mt.length||ei.length)&&Cp()}}let Tt=null,Pp=null;function Mo(t){const e=Tt;return Tt=t,Pp=t&&t.type.__scopeId||null,e}function hv(t,e=Tt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Nh(-1);const s=Mo(e);let o;try{o=t(...i)}finally{Mo(s),r._d&&Nh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kp(t,e){if(Tt===null)return t;const n=wa(Tt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,l,c=De]=e[i];s&&(fe(s)&&(s={mounted:s,updated:s}),s.deep&&gn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function ur(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(nr(),jt(c,n,8,[t.el,l,t,e]),rr())}}const dv=Symbol("_vte"),Op=t=>t.__isTeleport,Ln=Symbol("_leaveCb"),co=Symbol("_enterCb");function xp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Up(()=>{t.isMounted=!0}),Bc(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],Dp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},Np=t=>{const e=t.subTree;return e.component?Np(e.component):e},fv={name:"BaseTransition",props:Dp,setup(t,{slots:e}){const n=Os(),r=xp();return()=>{const i=e.default&&Fc(e.default(),!0);if(!i||!i.length)return;const s=Vp(i),o=Ae(t),{mode:l}=o;if(r.isLeaving)return ol(s);const c=Ah(s);if(!c)return ol(s);let h=fs(c,o,r,n,p=>h=p);c.type!==wt&&br(c,h);let d=n.subTree&&Ah(n.subTree);if(d&&d.type!==wt&&!gr(c,d)&&Np(n).type!==wt){let p=fs(d,o,r,n);if(br(d,p),l==="out-in"&&c.type!==wt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},ol(s);l==="in-out"&&c.type!==wt?p.delayLeave=(g,v,C)=>{const x=Lp(r,d);x[String(d.key)]=d,g[Ln]=()=>{v(),g[Ln]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{C(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return s}}};function Vp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==wt){e=n;break}}return e}const pv=fv;function Lp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function fs(t,e,n,r,i){const{appear:s,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:C,onLeaveCancelled:x,onBeforeAppear:O,onAppear:F,onAfterAppear:B,onAppearCancelled:j}=e,$=String(t.key),Y=Lp(n,t),te=(_,b)=>{_&&jt(_,r,9,b)},A=(_,b)=>{const R=b[1];te(_,b),re(_)?_.every(I=>I.length<=1)&&R():_.length<=1&&R()},E={mode:o,persisted:l,beforeEnter(_){let b=c;if(!n.isMounted)if(s)b=O||c;else return;_[Ln]&&_[Ln](!0);const R=Y[$];R&&gr(t,R)&&R.el[Ln]&&R.el[Ln](),te(b,[_])},enter(_){let b=h,R=d,I=p;if(!n.isMounted)if(s)b=F||h,R=B||d,I=j||p;else return;let w=!1;const K=_[co]=me=>{w||(w=!0,me?te(I,[_]):te(R,[_]),E.delayedLeave&&E.delayedLeave(),_[co]=void 0)};b?A(b,[_,K]):K()},leave(_,b){const R=String(t.key);if(_[co]&&_[co](!0),n.isUnmounting)return b();te(g,[_]);let I=!1;const w=_[Ln]=K=>{I||(I=!0,b(),K?te(x,[_]):te(C,[_]),_[Ln]=void 0,Y[R]===t&&delete Y[R])};Y[R]=t,v?A(v,[_,w]):w()},clone(_){const b=fs(_,e,n,r,i);return i&&i(b),b}};return E}function ol(t){if(_a(t))return t=Jn(t),t.children=null,t}function Ah(t){if(!_a(t))return Op(t.type)&&t.children?Vp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function br(t,e){t.shapeFlag&6&&t.component?(t.transition=e,br(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fc(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Ut?(o.patchFlag&128&&i++,r=r.concat(Fc(o.children,e,l))):(e||o.type!==wt)&&r.push(l!=null?Jn(o,{key:l}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Uc(t,e){return fe(t)?(()=>He({name:t.name},e,{setup:t}))():t}function Mp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fo(t,e,n,r,i=!1){if(re(t)){t.forEach((C,x)=>Fo(C,e&&(re(e)?e[x]:e),n,r,i));return}if(es(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fo(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?wa(r.component):r.el,o=i?null:s,{i:l,r:c}=t,h=e&&e.r,d=l.refs===De?l.refs={}:l.refs,p=l.setupState,g=Ae(p),v=p===De?()=>!1:C=>Pe(g,C);if(h!=null&&h!==c&&(ze(h)?(d[h]=null,v(h)&&(p[h]=null)):nt(h)&&(h.value=null)),fe(c))ks(c,l,12,[o,d]);else{const C=ze(c),x=nt(c);if(C||x){const O=()=>{if(t.f){const F=C?v(c)?p[c]:d[c]:c.value;i?re(F)&&Ac(F,s):re(F)?F.includes(s)||F.push(s):C?(d[c]=[s],v(c)&&(p[c]=d[c])):(c.value=[s],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,v(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(O.id=-1,St(O,n)):O()}}}fa().requestIdleCallback;fa().cancelIdleCallback;const es=t=>!!t.type.__asyncLoader,_a=t=>t.type.__isKeepAlive;function gv(t,e){Fp(t,"a",e)}function mv(t,e){Fp(t,"da",e)}function Fp(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ya(e,r,n),n){let i=n.parent;for(;i&&i.parent;)_a(i.parent.vnode)&&_v(r,e,n,i),i=i.parent}}function _v(t,e,n,r){const i=ya(e,t,r,!0);$p(()=>{Ac(r[e],i)},n)}function ya(t,e,n=tt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{nr();const l=xs(n),c=jt(e,n,t,o);return l(),rr(),c});return r?i.unshift(s):i.push(s),s}}const bn=t=>(e,n=tt)=>{(!gs||t==="sp")&&ya(t,(...r)=>e(...r),n)},yv=bn("bm"),Up=bn("m"),vv=bn("bu"),Bp=bn("u"),Bc=bn("bum"),$p=bn("um"),Ev=bn("sp"),wv=bn("rtg"),Tv=bn("rtc");function Iv(t,e=tt){ya("ec",t,e)}const jp="components";function bv(t,e){return Rv(jp,t,!0,e)||t}const Av=Symbol.for("v-ndc");function Rv(t,e,n=!0,r=!1){const i=Tt||tt;if(i){const s=i.type;if(t===jp){const l=fE(s,!1);if(l&&(l===e||l===Vt(e)||l===da(Vt(e))))return s}const o=Rh(i[t]||s[t],e)||Rh(i.appContext[t],e);return!o&&r?s:o}}function Rh(t,e){return t&&(t[e]||t[Vt(e)]||t[da(Vt(e))])}function wP(t,e,n,r){let i;const s=n&&n[r],o=re(t);if(o||ze(t)){const l=o&&Zr(t);let c=!1;l&&(c=!Nt(t),t=ga(t)),i=new Array(t.length);for(let h=0,d=t.length;h<d;h++)i[h]=e(c?ht(t[h]):t[h],h,void 0,s&&s[h])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,s&&s[l])}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,s&&s[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];i[c]=e(t[d],d,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}const Ll=t=>t?hg(t)?wa(t):Ll(t.parent):null,ts=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ll(t.parent),$root:t=>Ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$c(t),$forceUpdate:t=>t.f||(t.f=()=>{Mc(t.update)}),$nextTick:t=>t.n||(t.n=Lc.bind(t.proxy)),$watch:t=>Wv.bind(t)}),al=(t,e)=>t!==De&&!t.__isScriptSetup&&Pe(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(al(r,e))return o[e]=1,r[e];if(i!==De&&Pe(i,e))return o[e]=2,i[e];if((h=t.propsOptions[0])&&Pe(h,e))return o[e]=3,s[e];if(n!==De&&Pe(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const d=ts[e];let p,g;if(d)return e==="$attrs"&&ut(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Pe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return al(i,e)?(i[e]=n,!0):r!==De&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||t!==De&&Pe(t,o)||al(e,o)||(l=s[0])&&Pe(l,o)||Pe(r,o)||Pe(ts,o)||Pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sh(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ml=!0;function Cv(t){const e=$c(t),n=t.proxy,r=t.ctx;Ml=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:C,activated:x,deactivated:O,beforeDestroy:F,beforeUnmount:B,destroyed:j,unmounted:$,render:Y,renderTracked:te,renderTriggered:A,errorCaptured:E,serverPrefetch:_,expose:b,inheritAttrs:R,components:I,directives:w,filters:K}=e;if(h&&Pv(h,r,null),o)for(const Ee in o){const _e=o[Ee];fe(_e)&&(r[Ee]=_e.bind(n))}if(i){const Ee=i.call(n,n);Ne(Ee)&&(t.data=vi(Ee))}if(Ml=!0,s)for(const Ee in s){const _e=s[Ee],bt=fe(_e)?_e.bind(n,n):fe(_e.get)?_e.get.bind(n,n):Bt,Lt=!fe(_e)&&fe(_e.set)?_e.set.bind(n):Bt,kt=he({get:bt,set:Lt});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Me=>kt.value=Me})}if(l)for(const Ee in l)qp(l[Ee],r,n,Ee);if(c){const Ee=fe(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(_e=>{yo(_e,Ee[_e])})}d&&Ch(d,t,"c");function ke(Ee,_e){re(_e)?_e.forEach(bt=>Ee(bt.bind(n))):_e&&Ee(_e.bind(n))}if(ke(yv,p),ke(Up,g),ke(vv,v),ke(Bp,C),ke(gv,x),ke(mv,O),ke(Iv,E),ke(Tv,te),ke(wv,A),ke(Bc,B),ke($p,$),ke(Ev,_),re(b))if(b.length){const Ee=t.exposed||(t.exposed={});b.forEach(_e=>{Object.defineProperty(Ee,_e,{get:()=>n[_e],set:bt=>n[_e]=bt})})}else t.exposed||(t.exposed={});Y&&t.render===Bt&&(t.render=Y),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),w&&(t.directives=w),_&&Mp(t)}function Pv(t,e,n=Bt){re(t)&&(t=Fl(t));for(const r in t){const i=t[r];let s;Ne(i)?"default"in i?s=Zt(i.from||r,i.default,!0):s=Zt(i.from||r):s=Zt(i),nt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Ch(t,e,n){jt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function qp(t,e,n,r){let i=r.includes(".")?rg(n,r):()=>n[r];if(ze(t)){const s=e[t];fe(s)&&vo(i,s)}else if(fe(t))vo(i,t.bind(n));else if(Ne(t))if(re(t))t.forEach(s=>qp(s,e,n,r));else{const s=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(s)&&vo(i,s,t)}}function $c(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(h=>Uo(c,h,o,!0)),Uo(c,e,o)),Ne(e)&&s.set(e,c),c}function Uo(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Uo(t,s,n,!0),i&&i.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=kv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const kv={data:Ph,props:kh,emits:kh,methods:Hi,computed:Hi,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Hi,directives:Hi,watch:xv,provide:Ph,inject:Ov};function Ph(t,e){return e?t?function(){return He(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Ov(t,e){return Hi(Fl(t),Fl(e))}function Fl(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hi(t,e){return t?He(Object.create(null),t,e):e}function kh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:He(Object.create(null),Sh(t),Sh(e!=null?e:{})):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Hp(){return{app:null,config:{isNativeTag:_y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(t,e){return function(r,i=null){fe(r)||(r=He({},r)),i!=null&&!Ne(i)&&(i=null);const s=Hp(),o=new WeakSet,l=[];let c=!1;const h=s.app={_uid:Dv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:gE,get config(){return s.config},set config(d){},use(d,...p){return o.has(d)||(d&&fe(d.install)?(o.add(d),d.install(h,...p)):fe(d)&&(o.add(d),d(h,...p))),h},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),h},component(d,p){return p?(s.components[d]=p,h):s.components[d]},directive(d,p){return p?(s.directives[d]=p,h):s.directives[d]},mount(d,p,g){if(!c){const v=h._ceVNode||yt(r,i);return v.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(v,d):t(v,d,g),c=!0,h._container=d,d.__vue_app__=h,wa(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(jt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return s.provides[d]=p,h},runWithContext(d){const p=ti;ti=h;try{return d()}finally{ti=p}}};return h}}let ti=null;function yo(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=tt||Tt;if(r||ti){const i=ti?ti._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const zp={},Kp=()=>Object.create(zp),Wp=t=>Object.getPrototypeOf(t)===zp;function Vv(t,e,n,r=!1){const i={},s=Kp();t.propsDefaults=Object.create(null),Gp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:wp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Lv(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,l=Ae(i),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(va(t.emitsOptions,g))continue;const v=e[g];if(c)if(Pe(s,g))v!==s[g]&&(s[g]=v,h=!0);else{const C=Vt(g);i[C]=Ul(c,l,C,v,t,!1)}else v!==s[g]&&(s[g]=v,h=!0)}}}else{Gp(t,e,i,s)&&(h=!0);let d;for(const p in l)(!e||!Pe(e,p)&&((d=Or(p))===p||!Pe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Ul(c,l,p,void 0,t,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!Pe(e,p)&&!0)&&(delete s[p],h=!0)}h&&pn(t.attrs,"set","")}function Gp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Yi(c))continue;const h=e[c];let d;i&&Pe(i,d=Vt(c))?!s||!s.includes(d)?n[d]=h:(l||(l={}))[d]=h:va(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(s){const c=Ae(n),h=l||De;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Ul(i,c,p,h[p],t,!Pe(h,p))}}return o}function Ul(t,e,n,r,i,s){const o=t[n];if(o!=null){const l=Pe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:h}=i;if(n in h)r=h[n];else{const d=xs(i);r=h[n]=c.call(null,e),d()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const Mv=new WeakMap;function Qp(t,e,n=!1){const r=n?Mv:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},l=[];let c=!1;if(!fe(t)){const d=p=>{c=!0;const[g,v]=Qp(p,e,!0);He(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!c)return Ne(t)&&r.set(t,Yr),Yr;if(re(s))for(let d=0;d<s.length;d++){const p=Vt(s[d]);Oh(p)&&(o[p]=De)}else if(s)for(const d in s){const p=Vt(d);if(Oh(p)){const g=s[d],v=o[p]=re(g)||fe(g)?{type:g}:He({},g),C=v.type;let x=!1,O=!0;if(re(C))for(let F=0;F<C.length;++F){const B=C[F],j=fe(B)&&B.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(O=!1)}else x=fe(C)&&C.name==="Boolean";v[0]=x,v[1]=O,(x||Pe(v,"default"))&&l.push(p)}}const h=[o,l];return Ne(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!Yi(t)}const Jp=t=>t[0]==="_"||t==="$stable",jc=t=>re(t)?t.map(Jt):[Jt(t)],Fv=(t,e,n)=>{if(e._n)return e;const r=hv((...i)=>jc(e(...i)),n);return r._c=!1,r},Yp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Jp(i))continue;const s=t[i];if(fe(s))e[i]=Fv(i,s,r);else if(s!=null){const o=jc(s);e[i]=()=>o}}},Xp=(t,e)=>{const n=jc(e);t.slots.default=()=>n},Zp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Uv=(t,e,n)=>{const r=t.slots=Kp();if(t.vnode.shapeFlag&32){const i=e._;i?(Zp(r,e,n),n&&np(r,"_",i,!0)):Yp(e,r)}else e&&Xp(t,e)},Bv=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:Zp(i,e,n):(s=!e.$stable,Yp(e,i)),o=e}else e&&(Xp(t,e),o={default:1});if(s)for(const l in i)!Jp(l)&&o[l]==null&&delete i[l]},St=eE;function $v(t){return jv(t)}function jv(t,e){const n=fa();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=Bt,insertStaticContent:C}=t,x=(y,T,P,L=null,D=null,M=null,W=void 0,H=null,q=!!T.dynamicChildren)=>{if(y===T)return;y&&!gr(y,T)&&(L=N(y),Me(y,D,M,!0),y=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:U,ref:ie,shapeFlag:J}=T;switch(U){case Ea:O(y,T,P,L);break;case wt:F(y,T,P,L);break;case Eo:y==null&&B(T,P,L,W);break;case Ut:I(y,T,P,L,D,M,W,H,q);break;default:J&1?Y(y,T,P,L,D,M,W,H,q):J&6?w(y,T,P,L,D,M,W,H,q):(J&64||J&128)&&U.process(y,T,P,L,D,M,W,H,q,ee)}ie!=null&&D&&Fo(ie,y&&y.ref,M,T||y,!T)},O=(y,T,P,L)=>{if(y==null)r(T.el=l(T.children),P,L);else{const D=T.el=y.el;T.children!==y.children&&h(D,T.children)}},F=(y,T,P,L)=>{y==null?r(T.el=c(T.children||""),P,L):T.el=y.el},B=(y,T,P,L)=>{[y.el,y.anchor]=C(y.children,T,P,L,y.el,y.anchor)},j=({el:y,anchor:T},P,L)=>{let D;for(;y&&y!==T;)D=g(y),r(y,P,L),y=D;r(T,P,L)},$=({el:y,anchor:T})=>{let P;for(;y&&y!==T;)P=g(y),i(y),y=P;i(T)},Y=(y,T,P,L,D,M,W,H,q)=>{T.type==="svg"?W="svg":T.type==="math"&&(W="mathml"),y==null?te(T,P,L,D,M,W,H,q):_(y,T,D,M,W,H,q)},te=(y,T,P,L,D,M,W,H)=>{let q,U;const{props:ie,shapeFlag:J,transition:ne,dirs:le}=y;if(q=y.el=o(y.type,M,ie&&ie.is,ie),J&8?d(q,y.children):J&16&&E(y.children,q,null,L,D,ll(y,M),W,H),le&&ur(y,null,L,"created"),A(q,y,y.scopeId,W,L),ie){for(const pe in ie)pe!=="value"&&!Yi(pe)&&s(q,pe,null,ie[pe],M,L);"value"in ie&&s(q,"value",null,ie.value,M),(U=ie.onVnodeBeforeMount)&&Kt(U,L,y)}le&&ur(y,null,L,"beforeMount");const se=qv(D,ne);se&&ne.beforeEnter(q),r(q,T,P),((U=ie&&ie.onVnodeMounted)||se||le)&&St(()=>{U&&Kt(U,L,y),se&&ne.enter(q),le&&ur(y,null,L,"mounted")},D)},A=(y,T,P,L,D)=>{if(P&&v(y,P),L)for(let M=0;M<L.length;M++)v(y,L[M]);if(D){let M=D.subTree;if(T===M||sg(M.type)&&(M.ssContent===T||M.ssFallback===T)){const W=D.vnode;A(y,W,W.scopeId,W.slotScopeIds,D.parent)}}},E=(y,T,P,L,D,M,W,H,q=0)=>{for(let U=q;U<y.length;U++){const ie=y[U]=H?Mn(y[U]):Jt(y[U]);x(null,ie,T,P,L,D,M,W,H)}},_=(y,T,P,L,D,M,W)=>{const H=T.el=y.el;let{patchFlag:q,dynamicChildren:U,dirs:ie}=T;q|=y.patchFlag&16;const J=y.props||De,ne=T.props||De;let le;if(P&&hr(P,!1),(le=ne.onVnodeBeforeUpdate)&&Kt(le,P,T,y),ie&&ur(T,y,P,"beforeUpdate"),P&&hr(P,!0),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&d(H,""),U?b(y.dynamicChildren,U,H,P,L,ll(T,D),M):W||_e(y,T,H,null,P,L,ll(T,D),M,!1),q>0){if(q&16)R(H,J,ne,P,D);else if(q&2&&J.class!==ne.class&&s(H,"class",null,ne.class,D),q&4&&s(H,"style",J.style,ne.style,D),q&8){const se=T.dynamicProps;for(let pe=0;pe<se.length;pe++){const we=se[pe],it=J[we],We=ne[we];(We!==it||we==="value")&&s(H,we,it,We,D,P)}}q&1&&y.children!==T.children&&d(H,T.children)}else!W&&U==null&&R(H,J,ne,P,D);((le=ne.onVnodeUpdated)||ie)&&St(()=>{le&&Kt(le,P,T,y),ie&&ur(T,y,P,"updated")},L)},b=(y,T,P,L,D,M,W)=>{for(let H=0;H<T.length;H++){const q=y[H],U=T[H],ie=q.el&&(q.type===Ut||!gr(q,U)||q.shapeFlag&70)?p(q.el):P;x(q,U,ie,null,L,D,M,W,!0)}},R=(y,T,P,L,D)=>{if(T!==P){if(T!==De)for(const M in T)!Yi(M)&&!(M in P)&&s(y,M,T[M],null,D,L);for(const M in P){if(Yi(M))continue;const W=P[M],H=T[M];W!==H&&M!=="value"&&s(y,M,H,W,D,L)}"value"in P&&s(y,"value",T.value,P.value,D)}},I=(y,T,P,L,D,M,W,H,q)=>{const U=T.el=y?y.el:l(""),ie=T.anchor=y?y.anchor:l("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:le}=T;le&&(H=H?H.concat(le):le),y==null?(r(U,P,L),r(ie,P,L),E(T.children||[],P,ie,D,M,W,H,q)):J>0&&J&64&&ne&&y.dynamicChildren?(b(y.dynamicChildren,ne,P,D,M,W,H),(T.key!=null||D&&T===D.subTree)&&eg(y,T,!0)):_e(y,T,P,ie,D,M,W,H,q)},w=(y,T,P,L,D,M,W,H,q)=>{T.slotScopeIds=H,y==null?T.shapeFlag&512?D.ctx.activate(T,P,L,W,q):K(T,P,L,D,M,W,q):me(y,T,q)},K=(y,T,P,L,D,M,W)=>{const H=y.component=lE(y,L,D);if(_a(y)&&(H.ctx.renderer=ee),cE(H,!1,W),H.asyncDep){if(D&&D.registerDep(H,ke,W),!y.el){const q=H.subTree=yt(wt);F(null,q,T,P)}}else ke(H,y,T,P,D,M,W)},me=(y,T,P)=>{const L=T.component=y.component;if(Xv(y,T,P))if(L.asyncDep&&!L.asyncResolved){Ee(L,T,P);return}else L.next=T,L.update();else T.el=y.el,L.vnode=T},ke=(y,T,P,L,D,M,W)=>{const H=()=>{if(y.isMounted){let{next:J,bu:ne,u:le,parent:se,vnode:pe}=y;{const Ge=tg(y);if(Ge){J&&(J.el=pe.el,Ee(y,J,W)),Ge.asyncDep.then(()=>{y.isUnmounted||H()});return}}let we=J,it;hr(y,!1),J?(J.el=pe.el,Ee(y,J,W)):J=pe,ne&&_o(ne),(it=J.props&&J.props.onVnodeBeforeUpdate)&&Kt(it,se,J,pe),hr(y,!0);const We=cl(y),At=y.subTree;y.subTree=We,x(At,We,p(At.el),N(At),y,D,M),J.el=We.el,we===null&&Zv(y,We.el),le&&St(le,D),(it=J.props&&J.props.onVnodeUpdated)&&St(()=>Kt(it,se,J,pe),D)}else{let J;const{el:ne,props:le}=T,{bm:se,m:pe,parent:we,root:it,type:We}=y,At=es(T);if(hr(y,!1),se&&_o(se),!At&&(J=le&&le.onVnodeBeforeMount)&&Kt(J,we,T),hr(y,!0),ne&&Oe){const Ge=()=>{y.subTree=cl(y),Oe(ne,y.subTree,y,D,null)};At&&We.__asyncHydrate?We.__asyncHydrate(ne,y,Ge):Ge()}else{it.ce&&it.ce._injectChildStyle(We);const Ge=y.subTree=cl(y);x(null,Ge,P,L,y,D,M),T.el=Ge.el}if(pe&&St(pe,D),!At&&(J=le&&le.onVnodeMounted)){const Ge=T;St(()=>Kt(J,we,Ge),D)}(T.shapeFlag&256||we&&es(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&St(y.a,D),y.isMounted=!0,T=P=L=null}};y.scope.on();const q=y.effect=new ap(H);y.scope.off();const U=y.update=q.run.bind(q),ie=y.job=q.runIfDirty.bind(q);ie.i=y,ie.id=y.uid,q.scheduler=()=>Mc(ie),hr(y,!0),U()},Ee=(y,T,P)=>{T.component=y;const L=y.vnode.props;y.vnode=T,y.next=null,Lv(y,T.props,L,P),Bv(y,T.children,P),nr(),bh(y),rr()},_e=(y,T,P,L,D,M,W,H,q=!1)=>{const U=y&&y.children,ie=y?y.shapeFlag:0,J=T.children,{patchFlag:ne,shapeFlag:le}=T;if(ne>0){if(ne&128){Lt(U,J,P,L,D,M,W,H,q);return}else if(ne&256){bt(U,J,P,L,D,M,W,H,q);return}}le&8?(ie&16&&vt(U,D,M),J!==U&&d(P,J)):ie&16?le&16?Lt(U,J,P,L,D,M,W,H,q):vt(U,D,M,!0):(ie&8&&d(P,""),le&16&&E(J,P,L,D,M,W,H,q))},bt=(y,T,P,L,D,M,W,H,q)=>{y=y||Yr,T=T||Yr;const U=y.length,ie=T.length,J=Math.min(U,ie);let ne;for(ne=0;ne<J;ne++){const le=T[ne]=q?Mn(T[ne]):Jt(T[ne]);x(y[ne],le,P,null,D,M,W,H,q)}U>ie?vt(y,D,M,!0,!1,J):E(T,P,L,D,M,W,H,q,J)},Lt=(y,T,P,L,D,M,W,H,q)=>{let U=0;const ie=T.length;let J=y.length-1,ne=ie-1;for(;U<=J&&U<=ne;){const le=y[U],se=T[U]=q?Mn(T[U]):Jt(T[U]);if(gr(le,se))x(le,se,P,null,D,M,W,H,q);else break;U++}for(;U<=J&&U<=ne;){const le=y[J],se=T[ne]=q?Mn(T[ne]):Jt(T[ne]);if(gr(le,se))x(le,se,P,null,D,M,W,H,q);else break;J--,ne--}if(U>J){if(U<=ne){const le=ne+1,se=le<ie?T[le].el:L;for(;U<=ne;)x(null,T[U]=q?Mn(T[U]):Jt(T[U]),P,se,D,M,W,H,q),U++}}else if(U>ne)for(;U<=J;)Me(y[U],D,M,!0),U++;else{const le=U,se=U,pe=new Map;for(U=se;U<=ne;U++){const Xe=T[U]=q?Mn(T[U]):Jt(T[U]);Xe.key!=null&&pe.set(Xe.key,U)}let we,it=0;const We=ne-se+1;let At=!1,Ge=0;const Sn=new Array(We);for(U=0;U<We;U++)Sn[U]=0;for(U=le;U<=J;U++){const Xe=y[U];if(it>=We){Me(Xe,D,M,!0);continue}let Ot;if(Xe.key!=null)Ot=pe.get(Xe.key);else for(we=se;we<=ne;we++)if(Sn[we-se]===0&&gr(Xe,T[we])){Ot=we;break}Ot===void 0?Me(Xe,D,M,!0):(Sn[Ot-se]=U+1,Ot>=Ge?Ge=Ot:At=!0,x(Xe,T[Ot],P,null,D,M,W,H,q),it++)}const Ri=At?Hv(Sn):Yr;for(we=Ri.length-1,U=We-1;U>=0;U--){const Xe=se+U,Ot=T[Xe],Hs=Xe+1<ie?T[Xe+1].el:L;Sn[U]===0?x(null,Ot,P,Hs,D,M,W,H,q):At&&(we<0||U!==Ri[we]?kt(Ot,P,Hs,2):we--)}}},kt=(y,T,P,L,D=null)=>{const{el:M,type:W,transition:H,children:q,shapeFlag:U}=y;if(U&6){kt(y.component.subTree,T,P,L);return}if(U&128){y.suspense.move(T,P,L);return}if(U&64){W.move(y,T,P,ee);return}if(W===Ut){r(M,T,P);for(let J=0;J<q.length;J++)kt(q[J],T,P,L);r(y.anchor,T,P);return}if(W===Eo){j(y,T,P);return}if(L!==2&&U&1&&H)if(L===0)H.beforeEnter(M),r(M,T,P),St(()=>H.enter(M),D);else{const{leave:J,delayLeave:ne,afterLeave:le}=H,se=()=>r(M,T,P),pe=()=>{J(M,()=>{se(),le&&le()})};ne?ne(M,se,pe):pe()}else r(M,T,P)},Me=(y,T,P,L=!1,D=!1)=>{const{type:M,props:W,ref:H,children:q,dynamicChildren:U,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:le}=y;if(J===-2&&(D=!1),H!=null&&Fo(H,null,P,y,!0),le!=null&&(T.renderCache[le]=void 0),ie&256){T.ctx.deactivate(y);return}const se=ie&1&&ne,pe=!es(y);let we;if(pe&&(we=W&&W.onVnodeBeforeUnmount)&&Kt(we,T,y),ie&6)zt(y.component,P,L);else{if(ie&128){y.suspense.unmount(P,L);return}se&&ur(y,null,T,"beforeUnmount"),ie&64?y.type.remove(y,T,P,ee,L):U&&!U.hasOnce&&(M!==Ut||J>0&&J&64)?vt(U,T,P,!1,!0):(M===Ut&&J&384||!D&&ie&16)&&vt(q,T,P),L&&Fe(y)}(pe&&(we=W&&W.onVnodeUnmounted)||se)&&St(()=>{we&&Kt(we,T,y),se&&ur(y,null,T,"unmounted")},P)},Fe=y=>{const{type:T,el:P,anchor:L,transition:D}=y;if(T===Ut){Rn(P,L);return}if(T===Eo){$(y);return}const M=()=>{i(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:H}=D,q=()=>W(P,M);H?H(y.el,M,q):q()}else M()},Rn=(y,T)=>{let P;for(;y!==T;)P=g(y),i(y),y=P;i(T)},zt=(y,T,P)=>{const{bum:L,scope:D,job:M,subTree:W,um:H,m:q,a:U}=y;xh(q),xh(U),L&&_o(L),D.stop(),M&&(M.flags|=8,Me(W,y,T,P)),H&&St(H,T),St(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},vt=(y,T,P,L=!1,D=!1,M=0)=>{for(let W=M;W<y.length;W++)Me(y[W],T,P,L,D)},N=y=>{if(y.shapeFlag&6)return N(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=g(y.anchor||y.el),P=T&&T[dv];return P?g(P):T};let X=!1;const Q=(y,T,P)=>{y==null?T._vnode&&Me(T._vnode,null,null,!0):x(T._vnode||null,y,T,null,null,null,P),T._vnode=y,X||(X=!0,bh(),Sp(),X=!1)},ee={p:x,um:Me,m:kt,r:Fe,mt:K,mc:E,pc:_e,pbc:b,n:N,o:t};let ve,Oe;return e&&([ve,Oe]=e(ee)),{render:Q,hydrate:ve,createApp:Nv(Q,ve)}}function ll({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const r=t.children,i=e.children;if(re(r)&&re(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Mn(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&eg(o,l)),l.type===Ea&&(l.el=o.el)}}function Hv(t){const e=t.slice(),n=[0];let r,i,s,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(i=n[n.length-1],t[i]<h){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,t[n[l]]<h?s=l+1:o=l;h<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function xh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zv=Symbol.for("v-scx"),Kv=()=>Zt(zv);function vo(t,e,n){return ng(t,e,n)}function ng(t,e,n=De){const{immediate:r,deep:i,flush:s,once:o}=n,l=He({},n),c=e&&r||!e&&s!=="post";let h;if(gs){if(s==="sync"){const v=Kv();h=v.__watcherHandles||(v.__watcherHandles=[])}else if(!c){const v=()=>{};return v.stop=Bt,v.resume=Bt,v.pause=Bt,v}}const d=tt;l.call=(v,C,x)=>jt(v,d,C,x);let p=!1;s==="post"?l.scheduler=v=>{St(v,d&&d.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(v,C)=>{C?v():Mc(v)}),l.augmentJob=v=>{e&&(v.flags|=4),p&&(v.flags|=2,d&&(v.id=d.uid,v.i=d))};const g=av(t,e,l);return gs&&(h?h.push(g):c&&g()),g}function Wv(t,e,n){const r=this.proxy,i=ze(t)?t.includes(".")?rg(r,t):()=>r[t]:t.bind(r,r);let s;fe(e)?s=e:(s=e.handler,n=e);const o=xs(this),l=ng(i,s.bind(r),n);return o(),l}function rg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Gv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Vt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function Qv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let i=n;const s=e.startsWith("update:"),o=s&&Gv(r,e.slice(7));o&&(o.trim&&(i=n.map(d=>ze(d)?d.trim():d)),o.number&&(i=n.map(Do)));let l,c=r[l=tl(e)]||r[l=tl(Vt(e))];!c&&s&&(c=r[l=tl(Or(e))]),c&&jt(c,t,6,i);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,jt(h,t,6,i)}}function ig(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},l=!1;if(!fe(t)){const c=h=>{const d=ig(h,e,!0);d&&(l=!0,He(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(Ne(t)&&r.set(t,null),null):(re(s)?s.forEach(c=>o[c]=null):He(o,s),Ne(t)&&r.set(t,o),o)}function va(t,e){return!t||!ca(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Or(e))||Pe(t,e))}function cl(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:v,ctx:C,inheritAttrs:x}=t,O=Mo(t);let F,B;try{if(n.shapeFlag&4){const $=i||r,Y=$;F=Jt(h.call(Y,$,d,p,v,g,C)),B=l}else{const $=e;F=Jt($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),B=e.props?l:Jv(l)}}catch($){ns.length=0,ma($,t,1),F=yt(wt)}let j=F;if(B&&x!==!1){const $=Object.keys(B),{shapeFlag:Y}=j;$.length&&Y&7&&(s&&$.some(bc)&&(B=Yv(B,s)),j=Jn(j,B,!1,!0))}return n.dirs&&(j=Jn(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&br(j,n.transition),F=j,Mo(O),F}const Jv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ca(n))&&((e||(e={}))[n]=t[n]);return e},Yv=(t,e)=>{const n={};for(const r in t)(!bc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xv(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:l,patchFlag:c}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Dh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!va(h,g))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Dh(r,o,h):!0:!!o;return!1}function Dh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!va(n,s))return!0}return!1}function Zv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sg=t=>t.__isSuspense;function eE(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):uv(t)}const Ut=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),ns=[];let Pt=null;function og(t=!1){ns.push(Pt=t?null:[])}function tE(){ns.pop(),Pt=ns[ns.length-1]||null}let ps=1;function Nh(t,e=!1){ps+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function ag(t){return t.dynamicChildren=ps>0?Pt||Yr:null,tE(),ps>0&&Pt&&Pt.push(t),t}function TP(t,e,n,r,i,s){return ag(ug(t,e,n,r,i,s,!0))}function lg(t,e,n,r,i){return ag(yt(t,e,n,r,i,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const cg=({key:t})=>t!=null?t:null,wo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||nt(t)||fe(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function ug(t,e=null,n=null,r=0,i=null,s=t===Ut?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&wo(e),scopeId:Pp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tt};return l?(qc(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),ps>0&&!o&&Pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Pt.push(c),c}const yt=nE;function nE(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Av)&&(t=wt),Bo(t)){const l=Jn(t,e,!0);return n&&qc(l,n),ps>0&&!s&&Pt&&(l.shapeFlag&6?Pt[Pt.indexOf(t)]=l:Pt.push(l)),l.patchFlag=-2,l}if(pE(t)&&(t=t.__vccOpts),e){e=rE(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=Cc(l)),Ne(c)&&(Vc(c)&&!re(c)&&(c=He({},c)),e.style=Sc(c))}const o=ze(t)?1:sg(t)?128:Op(t)?64:Ne(t)?4:fe(t)?2:0;return ug(t,e,n,r,i,o,s,!0)}function rE(t){return t?Vc(t)||Wp(t)?He({},t):t:null}function Jn(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=t,h=e?sE(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&cg(h),ref:e&&e.ref?n&&s?re(s)?s.concat(wo(e)):[s,wo(e)]:wo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&br(d,c.clone(d)),d}function iE(t=" ",e=0){return yt(Ea,null,t,e)}function IP(t,e){const n=yt(Eo,null,t);return n.staticCount=e,n}function bP(t="",e=!1){return e?(og(),lg(wt,null,t)):yt(wt,null,t)}function Jt(t){return t==null||typeof t=="boolean"?yt(wt):re(t)?yt(Ut,null,t.slice()):Bo(t)?Mn(t):yt(Ea,null,String(t))}function Mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function qc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),qc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Wp(e)?e._ctx=Tt:i===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[iE(e)]):n=8);t.children=e,t.shapeFlag|=n}function sE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Cc([e.class,r.class]));else if(i==="style")e.style=Sc([e.style,r.style]);else if(ca(i)){const s=e[i],o=r[i];o&&s!==o&&!(re(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Kt(t,e,n,r=null){jt(t,e,7,[n,r])}const oE=Hp();let aE=0;function lE(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||oE,s={uid:aE++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qp(r,i),emitsOptions:ig(r,i),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qv.bind(null,s),t.ce&&t.ce(s),s}let tt=null;const Os=()=>tt||Tt;let $o,Bl;{const t=fa(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};$o=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),Bl=e("__VUE_SSR_SETTERS__",n=>gs=n)}const xs=t=>{const e=tt;return $o(t),t.scope.on(),()=>{t.scope.off(),$o(e)}},Vh=()=>{tt&&tt.scope.off(),$o(null)};function hg(t){return t.vnode.shapeFlag&4}let gs=!1;function cE(t,e=!1,n=!1){e&&Bl(e);const{props:r,children:i}=t.vnode,s=hg(t);Vv(t,r,s,e),Uv(t,i,n);const o=s?uE(t,e):void 0;return e&&Bl(!1),o}function uE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){nr();const i=t.setupContext=r.length>1?dE(t):null,s=xs(t),o=ks(r,t,0,[t.props,i]),l=Zf(o);if(rr(),s(),(l||t.sp)&&!es(t)&&Mp(t),l){if(o.then(Vh,Vh),e)return o.then(c=>{Lh(t,c,e)}).catch(c=>{ma(c,t,0)});t.asyncDep=o}else Lh(t,o,e)}else dg(t,e)}function Lh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=bp(e)),dg(t,n)}let Mh;function dg(t,e,n){const r=t.type;if(!t.render){if(!e&&Mh&&!r.render){const i=r.template||$c(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=He(He({isCustomElement:s,delimiters:l},o),c);r.render=Mh(i,h)}}t.render=r.render||Bt}{const i=xs(t);nr();try{Cv(t)}finally{rr(),i()}}}const hE={get(t,e){return ut(t,"get",""),t[e]}};function dE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hE),slots:t.slots,emit:t.emit,expose:e}}function wa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bp(Ei(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ts)return ts[n](t)},has(e,n){return n in e||n in ts}})):t.proxy}function fE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function pE(t){return fe(t)&&"__vccOpts"in t}const he=(t,e)=>sv(t,e,gs);function ue(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!re(e)?Bo(e)?yt(t,null,[e]):yt(t,e):yt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),yt(t,e,n))}const gE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $l;const Fh=typeof window!="undefined"&&window.trustedTypes;if(Fh)try{$l=Fh.createPolicy("vue",{createHTML:t=>t})}catch{}const fg=$l?t=>$l.createHTML(t):t=>t,mE="http://www.w3.org/2000/svg",_E="http://www.w3.org/1998/Math/MathML",fn=typeof document!="undefined"?document:null,Uh=fn&&fn.createElement("template"),yE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?fn.createElementNS(mE,t):e==="mathml"?fn.createElementNS(_E,t):n?fn.createElement(t,{is:n}):fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>fn.createTextNode(t),createComment:t=>fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Uh.innerHTML=fg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Uh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},On="transition",Bi="animation",ci=Symbol("_vtc"),pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gg=He({},Dp,pg),vE=t=>(t.displayName="Transition",t.props=gg,t),EE=vE((t,{slots:e})=>ue(pv,mg(t),e)),dr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bh=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function mg(t){const e={};for(const I in t)I in pg||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,C=wE(i),x=C&&C[0],O=C&&C[1],{onBeforeEnter:F,onEnter:B,onEnterCancelled:j,onLeave:$,onLeaveCancelled:Y,onBeforeAppear:te=F,onAppear:A=B,onAppearCancelled:E=j}=e,_=(I,w,K,me)=>{I._enterCancelled=me,Nn(I,w?d:l),Nn(I,w?h:o),K&&K()},b=(I,w)=>{I._isLeaving=!1,Nn(I,p),Nn(I,v),Nn(I,g),w&&w()},R=I=>(w,K)=>{const me=I?A:B,ke=()=>_(w,I,K);dr(me,[w,ke]),$h(()=>{Nn(w,I?c:s),Wt(w,I?d:l),Bh(me)||jh(w,r,x,ke)})};return He(e,{onBeforeEnter(I){dr(F,[I]),Wt(I,s),Wt(I,o)},onBeforeAppear(I){dr(te,[I]),Wt(I,c),Wt(I,h)},onEnter:R(!1),onAppear:R(!0),onLeave(I,w){I._isLeaving=!0;const K=()=>b(I,w);Wt(I,p),I._enterCancelled?(Wt(I,g),jl()):(jl(),Wt(I,g)),$h(()=>{!I._isLeaving||(Nn(I,p),Wt(I,v),Bh($)||jh(I,r,O,K))}),dr($,[I,K])},onEnterCancelled(I){_(I,!1,void 0,!0),dr(j,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),dr(E,[I])},onLeaveCancelled(I){b(I),dr(Y,[I])}})}function wE(t){if(t==null)return null;if(Ne(t))return[ul(t.enter),ul(t.leave)];{const e=ul(t);return[e,e]}}function ul(t){return Ty(t)}function Wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ci]||(t[ci]=new Set)).add(e)}function Nn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ci];n&&(n.delete(e),n.size||(t[ci]=void 0))}function $h(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let TE=0;function jh(t,e,n,r){const i=t._endId=++TE,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:l,propCount:c}=_g(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,g),s()},g=v=>{v.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,g)}function _g(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),i=r(`${On}Delay`),s=r(`${On}Duration`),o=qh(i,s),l=r(`${Bi}Delay`),c=r(`${Bi}Duration`),h=qh(l,c);let d=null,p=0,g=0;e===On?o>0&&(d=On,p=o,g=s.length):e===Bi?h>0&&(d=Bi,p=h,g=c.length):(p=Math.max(o,h),d=p>0?o>h?On:Bi:null,g=d?d===On?s.length:c.length:0);const v=d===On&&/\b(transform|all)(,|$)/.test(r(`${On}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:v}}function qh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hh(n)+Hh(t[r])))}function Hh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function jl(){return document.body.offsetHeight}function IE(t,e,n){const r=t[ci];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zh=Symbol("_vod"),bE=Symbol("_vsh"),AE=Symbol(""),RE=/(^|;)\s*display\s*:/;function SE(t,e,n){const r=t.style,i=ze(n);let s=!1;if(n&&!i){if(e)if(ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&To(r,l,"")}else for(const o in e)n[o]==null&&To(r,o,"");for(const o in n)o==="display"&&(s=!0),To(r,o,n[o])}else if(i){if(e!==n){const o=r[AE];o&&(n+=";"+o),r.cssText=n,s=RE.test(n)}}else e&&t.removeAttribute("style");zh in t&&(t[zh]=s?r.display:"",t[bE]&&(r.display="none"))}const Kh=/\s*!important$/;function To(t,e,n){if(re(n))n.forEach(r=>To(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=CE(t,e);Kh.test(n)?t.setProperty(Or(r),n.replace(Kh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],hl={};function CE(t,e){const n=hl[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return hl[e]=r;r=da(r);for(let i=0;i<Wh.length;i++){const s=Wh[i]+r;if(s in t)return hl[e]=s}return e}const Gh="http://www.w3.org/1999/xlink";function Qh(t,e,n,r,i,s=Cy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gh,e.slice(6,e.length)):t.setAttributeNS(Gh,e,n):n==null||s&&!rp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":sn(n)?String(n):n)}function Jh(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=rp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function mr(t,e,n,r){t.addEventListener(e,n,r)}function PE(t,e,n,r){t.removeEventListener(e,n,r)}const Yh=Symbol("_vei");function kE(t,e,n,r,i=null){const s=t[Yh]||(t[Yh]={}),o=s[e];if(r&&o)o.value=r;else{const[l,c]=OE(e);if(r){const h=s[e]=NE(r,i);mr(t,l,h,c)}else o&&(PE(t,l,o,c),s[e]=void 0)}}const Xh=/(?:Once|Passive|Capture)$/;function OE(t){let e;if(Xh.test(t)){e={};let r;for(;r=t.match(Xh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let dl=0;const xE=Promise.resolve(),DE=()=>dl||(xE.then(()=>dl=0),dl=Date.now());function NE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;jt(VE(r,n.value),e,5,[r])};return n.value=t,n.attached=DE(),n}function VE(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Zh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,LE=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?IE(t,r,o):e==="style"?SE(t,n,r):ca(e)?bc(e)||kE(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ME(t,e,r,o))?(Jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qh(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Jh(t,Vt(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qh(t,e,r,o))};function ME(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zh(e)&&ze(n)?!1:e in t}const yg=new WeakMap,vg=new WeakMap,jo=Symbol("_moveCb"),ed=Symbol("_enterCb"),FE=t=>(delete t.props.mode,t),UE=FE({name:"TransitionGroup",props:He({},gg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Os(),r=xp();let i,s;return Bp(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!HE(i[0].el,n.vnode.el,o))return;i.forEach($E),i.forEach(jE);const l=i.filter(qE);jl(),l.forEach(c=>{const h=c.el,d=h.style;Wt(h,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=h[jo]=g=>{g&&g.target!==h||(!g||/transform$/.test(g.propertyName))&&(h.removeEventListener("transitionend",p),h[jo]=null,Nn(h,o))};h.addEventListener("transitionend",p)})}),()=>{const o=Ae(t),l=mg(o);let c=o.tag||Ut;if(i=[],s)for(let h=0;h<s.length;h++){const d=s[h];d.el&&d.el instanceof Element&&(i.push(d),br(d,fs(d,l,r,n)),yg.set(d,d.el.getBoundingClientRect()))}s=e.default?Fc(e.default()):[];for(let h=0;h<s.length;h++){const d=s[h];d.key!=null&&br(d,fs(d,l,r,n))}return yt(c,null,s)}}}),BE=UE;function $E(t){const e=t.el;e[jo]&&e[jo](),e[ed]&&e[ed]()}function jE(t){vg.set(t,t.el.getBoundingClientRect())}function qE(t){const e=yg.get(t),n=vg.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function HE(t,e,n){const r=t.cloneNode(),i=t[ci];i&&i.forEach(l=>{l.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&r.classList.add(l)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=_g(r);return s.removeChild(r),o}const qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>_o(e,n):e};function zE(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ni=Symbol("_assign"),AP={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ni]=qo(i);const s=r||i.props&&i.props.type==="number";mr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),s&&(l=Do(l)),t[ni](l)}),n&&mr(t,"change",()=>{t.value=t.value.trim()}),e||(mr(t,"compositionstart",zE),mr(t,"compositionend",td),mr(t,"change",td))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[ni]=qo(o),t.composing)return;const l=(s||t.type==="number")&&!/^0\d/.test(t.value)?Do(t.value):t.value,c=e==null?"":e;l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===c)||(t.value=c))}},RP={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=ua(e);mr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Do(Ho(o)):Ho(o));t[ni](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,Lc(()=>{t._assigning=!1})}),t[ni]=qo(r)},mounted(t,{value:e}){nd(t,e)},beforeUpdate(t,e,n){t[ni]=qo(n)},updated(t,{value:e}){t._assigning||nd(t,e)}};function nd(t,e){const n=t.multiple,r=re(e);if(!(n&&!r&&!ua(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],l=Ho(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=ky(e,l)>-1}else o.selected=e.has(l);else if(pa(Ho(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ho(t){return"_value"in t?t._value:t.value}const KE=["ctrl","shift","alt","meta"],WE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>KE.some(n=>t[`${n}Key`]&&!e.includes(n))},SP=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const l=WE[e[o]];if(l&&l(i,e))return}return t(i,...s)})},GE=He({patchProp:LE},yE);let rd;function QE(){return rd||(rd=$v(GE))}const Eg=(...t)=>{const e=QE().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=YE(r);if(!i)return;const s=e._component;!fe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,JE(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function JE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function YE(t){return ze(t)?document.querySelector(t):t}function Hc(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const Ar=li(!1);let ql;function XE(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function ZE(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const wg="ontouchstart"in window||window.navigator.maxTouchPoints>0;function ew(t){const e=t.toLowerCase(),n=ZE(e),r=XE(e,n),i={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.version,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios||i.edg?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox"),(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(r.browser="blackberry",i.blackberry=!0):i.playbook?(r.browser="playbook",i.playbook=!0):i.android?(r.browser="android",i.android=!0):i.kindle?(r.browser="kindle",i.kindle=!0):i.silk&&(r.browser="silk",i.silk=!0)),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),Ar.value===!0&&(ql={is:{...i}}),wg===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const id=navigator.userAgent||navigator.vendor||window.opera,tw={has:{touch:!1,webStorage:!1},within:{iframe:!1}},en={userAgent:id,is:ew(id),has:{touch:wg},within:{iframe:window.self!==window.top}},Hl={install(t){const{$q:e}=t;Ar.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,en),Ar.value=!1}),e.platform=vi(this)):e.platform=this}};{let t;Hc(en.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(Hl,en),Ar.value===!0&&(Object.assign(Hl,ql,tw),ql=null)}function Ds(t){return Ei(Uc(t))}function nw(t){return Ei(t)}const Ta=(t,e)=>{const n=vi(t);for(const r in t)Hc(e,r,()=>n[r],i=>{n[r]=i});return e},Rr={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Rr,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function ms(){}function CP(t){return t.button===0}function rw(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function PP(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function Tg(t){t.stopPropagation()}function zl(t){t.cancelable!==!1&&t.preventDefault()}function Ur(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function kP(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",zl,Rr.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",zl,Rr.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function iw(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Rr[i[3]])})}function sw(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],Rr[r[3]])}),t[n]=void 0)}function ow(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const fl=["sm","md","lg","xl"],{passive:sd}=Rr;var aw=Ta({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:ms,setDebounce:ms,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||en.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=p=>{const[g,v]=s();if(v!==this.height&&(this.height=v),g!==this.width)this.width=g;else if(p!==!0)return;let C=this.sizes;this.gt.xs=g>=C.sm,this.gt.sm=g>=C.md,this.gt.md=g>=C.lg,this.gt.lg=g>=C.xl,this.lt.sm=g<C.sm,this.lt.md=g<C.md,this.lt.lg=g<C.lg,this.lt.xl=g<C.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,C=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",C!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${C}`)),this.name=C)};let l,c={},h=16;this.setSizes=p=>{fl.forEach(g=>{p[g]!==void 0&&(c[g]=p[g])})},this.setDebounce=p=>{h=p};const d=()=>{const p=getComputedStyle(document.body);p.getPropertyValue("--q-size-sm")&&fl.forEach(g=>{this.sizes[g]=parseInt(p.getPropertyValue(`--q-size-${g}`),10)}),this.setSizes=g=>{fl.forEach(v=>{g[v]&&(this.sizes[v]=g[v])}),this.__update(!0)},this.setDebounce=g=>{l!==void 0&&r.removeEventListener("resize",l,sd),l=g>0?ow(this.__update,g):this.__update,r.addEventListener("resize",l,sd)},this.setDebounce(h),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Ar.value===!0?e.push(d):d()}});const lt=Ta({isActive:!1,mode:!1},{__media:void 0,set(t){lt.mode=t,t==="auto"?(lt.__media===void 0&&(lt.__media=window.matchMedia("(prefers-color-scheme: dark)"),lt.__updateMedia=()=>{lt.set("auto")},lt.__media.addListener(lt.__updateMedia)),t=lt.__media.matches):lt.__media!==void 0&&(lt.__media.removeListener(lt.__updateMedia),lt.__media=void 0),lt.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){lt.set(lt.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function lw(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Ig=!1;function cw(t){Ig=t.isComposing===!0}function uw(t){return Ig===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function Kl(t,e){return uw(t)===!0?!1:[].concat(e).includes(t.keyCode)}function bg(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function hw({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=bg(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function dw(){const{is:t}=en,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=bg(t);i!==void 0&&n.add(`platform-${i}`)}}en.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),en.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function fw(t){for(const e in t)lw(e,t[e])}var pw={install(t){if(this.__installed!==!0){if(Ar.value===!0)dw();else{const{$q:e}=t;e.config.brand!==void 0&&fw(e.config.brand);const n=hw(en,e.config);document.body.classList.add.apply(document.body.classList,n)}en.is.ios===!0&&document.body.addEventListener("touchstart",ms),window.addEventListener("keydown",cw,!0)}}};const Ag=()=>!0;function gw(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function mw(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function _w(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Ag;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(gw).map(mw)),()=>e.includes(window.location.hash)}var yw={__history:[],add:ms,remove:ms,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=en.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Ag),this.__history.push(o)},this.remove=o=>{const l=this.__history.indexOf(o);l>=0&&this.__history.splice(l,1)};const i=_w(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},od={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function ad(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Fn=Ta({__qLang:{}},{getLocale:ad,set(t=od,e){const n={...t,rtl:t.rtl===!0,getLocale:ad};{if(n.set=Fn.set,Fn.__langConfig===void 0||Fn.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Fn.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=Fn.__qLang,Fn.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set"&&i!=="getLocale")}}),this.set(e||od))}});var vw={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const zo=Ta({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=zo.set,Object.assign(zo.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,Hc(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set")}}),this.set(e||vw))}}),Ew="_q_",OP="_q_l_",xP="_q_pc_";function DP(){}const Ko={};let Rg=!1;function ww(){Rg=!0}function _s(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const ld=[Hl,pw,lt,aw,yw,Fn,zo];function Tw(t,e){const n=Eg(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function cd(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Iw(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Ew,n.$q),cd(n,ld),e.components!==void 0&&Object.values(e.components).forEach(r=>{_s(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{_s(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&cd(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&ld.includes(r)===!1)),Ar.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var bw=function(t,e={}){const n={version:"2.17.4"};Rg===!1?(e.config!==void 0&&Object.assign(Ko,e.config),n.config={...Ko},ww()):n.config=e.config||{},Iw(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},Aw={name:"Quasar",version:"2.17.4",install:bw,lang:Fn,iconSet:zo};const Rw=Object.assign({name:"App"},{__name:"App",setup(t){return(e,n)=>{const r=bv("router-view");return og(),lg(r)}}});function NP(t){return t}var Sw=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Cw=Symbol();var ud;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ud||(ud={}));function Pw(){const t=xy(!0),e=t.run(()=>li({}));let n=[],r=[];const i=Ei({install(s){i._a=s,s.provide(Cw,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Sw?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var pl=()=>Pw();/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hr=typeof document!="undefined";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const Ce=Object.assign;function gl(t,e){const n={};for(const r in e){const i=e[r];n[r]=qt(i)?i.map(t):t(i)}return n}const rs=()=>{},qt=Array.isArray,Cg=/#/g,Ow=/&/g,xw=/\//g,Dw=/=/g,Nw=/\?/g,Pg=/\+/g,Vw=/%5B/g,Lw=/%5D/g,kg=/%5E/g,Mw=/%60/g,Og=/%7B/g,Fw=/%7C/g,xg=/%7D/g,Uw=/%20/g;function zc(t){return encodeURI(""+t).replace(Fw,"|").replace(Vw,"[").replace(Lw,"]")}function Bw(t){return zc(t).replace(Og,"{").replace(xg,"}").replace(kg,"^")}function Wl(t){return zc(t).replace(Pg,"%2B").replace(Uw,"+").replace(Cg,"%23").replace(Ow,"%26").replace(Mw,"`").replace(Og,"{").replace(xg,"}").replace(kg,"^")}function $w(t){return Wl(t).replace(Dw,"%3D")}function jw(t){return zc(t).replace(Cg,"%23").replace(Nw,"%3F")}function qw(t){return t==null?"":jw(t).replace(xw,"%2F")}function ys(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Hw=/\/$/,zw=t=>t.replace(Hw,"");function ml(t,e,n="/"){let r,i={},s="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Qw(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:ys(o)}}function Kw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ww(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ui(e.matched[r],n.matched[i])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gw(t[n],e[n]))return!1;return!0}function Gw(t,e){return qt(t)?dd(t,e):qt(e)?dd(e,t):t===e}function dd(t,e){return qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Qw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vs;(function(t){t.pop="pop",t.push="push"})(vs||(vs={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function Jw(t){if(!t)if(Hr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zw(t)}const Yw=/^[^#]+#/;function Xw(t,e){return t.replace(Yw,"#")+e}function Zw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ia=()=>({left:window.scrollX,top:window.scrollY});function eT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Zw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fd(t,e){return(history.state?history.state.position-e:-1)+t}const Gl=new Map;function tT(t,e){Gl.set(t,e)}function nT(t){const e=Gl.get(t);return Gl.delete(t),e}let rT=()=>location.protocol+"//"+location.host;function Ng(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),hd(c,"")}return hd(n,t)+r+i}function iT(t,e,n,r){let i=[],s=[],o=null;const l=({state:g})=>{const v=Ng(t,location),C=n.value,x=e.value;let O=0;if(g){if(n.value=v,e.value=g,o&&o===C){o=null;return}O=x?g.position-x.position:0}else r(v);i.forEach(F=>{F(n.value,C,{delta:O,type:vs.pop,direction:O?O>0?is.forward:is.back:is.unknown})})};function c(){o=n.value}function h(g){i.push(g);const v=()=>{const C=i.indexOf(g);C>-1&&i.splice(C,1)};return s.push(v),v}function d(){const{history:g}=window;!g.state||g.replaceState(Ce({},g.state,{scroll:Ia()}),"")}function p(){for(const g of s)g();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function pd(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ia():null}}function sT(t){const{history:e,location:n}=window,r={value:Ng(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:rT()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),i.value=h}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(c,h){const d=Ce({},e.state,pd(i.value.back,c,i.value.forward,!0),h,{position:i.value.position});s(c,d,!0),r.value=c}function l(c,h){const d=Ce({},i.value,e.state,{forward:c,scroll:Ia()});s(d.current,d,!0);const p=Ce({},pd(r.value,c,null),{position:d.position+1},h);s(c,p,!1),r.value=c}return{location:r,state:i,push:l,replace:o}}function oT(t){t=Jw(t);const e=sT(t),n=iT(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ce({location:"",base:t,go:r,createHref:Xw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function aT(t){return typeof t=="string"||t&&typeof t=="object"}function Vg(t){return typeof t=="string"||typeof t=="symbol"}const Lg=Symbol("");var gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gd||(gd={}));function hi(t,e){return Ce(new Error,{type:t,[Lg]:!0},e)}function dn(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const md="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},cT=/[.+*?^${}()[\]/\\]/g;function uT(t,e){const n=Ce({},lT,e),r=[];let i=n.start?"^":"";const s=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(i+="/"),i+=g.value.replace(cT,"\\$&"),v+=40;else if(g.type===1){const{value:C,repeatable:x,optional:O,regexp:F}=g;s.push({name:C,repeatable:x,optional:O});const B=F||md;if(B!==md){v+=10;try{new RegExp(`(${B})`)}catch($){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+$.message)}}let j=x?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(j=O&&h.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),i+=j,v+=20,O&&(v+=-8),x&&(v+=-20),B===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",C=s[g-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:C,repeatable:x,optional:O}=v,F=C in h?h[C]:"";if(qt(F)&&!x)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=qt(F)?F.join("/"):F;if(!B)if(O)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function hT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=hT(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(_d(r))return 1;if(_d(i))return-1}return i.length-r.length}function _d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dT={type:0,value:""},fT=/[a-zA-Z0-9_]/;function pT(t){if(!t)return[[]];if(t==="/")return[[dT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let l=0,c,h="",d="";function p(){!h||(n===0?s.push({type:0,value:h}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:fT.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),i}function gT(t,e,n){const r=uT(pT(t.path),n),i=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function mT(t,e){const n=[],r=new Map;e=wd({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function s(p,g,v){const C=!v,x=vd(p);x.aliasOf=v&&v.record;const O=wd(e,p),F=[x];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const Y of $)F.push(vd(Ce({},x,{components:v?v.record.components:x.components,path:Y,aliasOf:v?v.record:x})))}let B,j;for(const $ of F){const{path:Y}=$;if(g&&Y[0]!=="/"){const te=g.record.path,A=te[te.length-1]==="/"?"":"/";$.path=g.record.path+(Y&&A+Y)}if(B=gT($,g,O),v?v.alias.push(B):(j=j||B,j!==B&&j.alias.push(B),C&&p.name&&!Ed(B)&&o(p.name)),Fg(B)&&c(B),x.children){const te=x.children;for(let A=0;A<te.length;A++)s(te[A],B,v&&v.children[A])}v=v||B}return j?()=>{o(j)}:rs}function o(p){if(Vg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=vT(p,n);n.splice(g,0,p),p.record.name&&!Ed(p)&&r.set(p.record.name,p)}function h(p,g){let v,C={},x,O;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw hi(1,{location:p});O=v.record.name,C=Ce(yd(g.params,v.keys.filter(j=>!j.optional).concat(v.parent?v.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&yd(p.params,v.keys.map(j=>j.name))),x=v.stringify(C)}else if(p.path!=null)x=p.path,v=n.find(j=>j.re.test(x)),v&&(C=v.parse(x),O=v.record.name);else{if(v=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!v)throw hi(1,{location:p,currentLocation:g});O=v.record.name,C=Ce({},g.params,p.params),x=v.stringify(C)}const F=[];let B=v;for(;B;)F.unshift(B.record),B=B.parent;return{name:O,path:x,params:C,matched:F,meta:yT(F)}}t.forEach(p=>s(p));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function yd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yT(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function wd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vT(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Mg(t,e[s])<0?r=s:n=s+1}const i=ET(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function ET(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Mg(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function wT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Pg," "),o=s.indexOf("="),l=ys(o<0?s:s.slice(0,o)),c=o<0?null:ys(s.slice(o+1));if(l in e){let h=e[l];qt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Td(t){let e="";for(let n in t){const r=t[n];if(n=$w(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qt(r)?r.map(s=>s&&Wl(s)):[r&&Wl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const IT=Symbol(""),Id=Symbol(""),ba=Symbol(""),Ug=Symbol(""),Ql=Symbol("");function $i(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Un(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(hi(4,{from:n,to:e})):g instanceof Error?c(g):aT(g)?c(hi(2,{from:e,to:g})):(o&&r.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),l())},d=s(()=>t.call(r&&r.instances[i],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function _l(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sg(c)){const d=(c.__vccOpts||c)[e];d&&s.push(Un(d,n,r,o,l,i))}else{let h=c();s.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=kw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&Un(v,n,r,o,l,i)()}))}}return s}function bd(t){const e=Zt(ba),n=Zt(Ug),r=he(()=>{const c=vr(t.to);return e.resolve(c)}),i=he(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(ui.bind(null,d));if(g>-1)return g;const v=Ad(c[h-2]);return h>1&&Ad(d)===v&&p[p.length-1].path!==v?p.findIndex(ui.bind(null,c[h-2])):g}),s=he(()=>i.value>-1&&CT(n.params,r.value.params)),o=he(()=>i.value>-1&&i.value===n.matched.length-1&&Dg(n.params,r.value.params));function l(c={}){if(ST(c)){const h=e[vr(t.replace)?"replace":"push"](vr(t.to)).catch(rs);return t.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:he(()=>r.value.href),isActive:s,isExactActive:o,navigate:l}}function bT(t){return t.length===1?t[0]:t}const AT=Uc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bd,setup(t,{slots:e}){const n=vi(bd(t)),{options:r}=Zt(ba),i=he(()=>({[Rd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&bT(e.default(n));return t.custom?s:ue("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),RT=AT;function ST(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function CT(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!qt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rd=(t,e,n)=>t!=null?t:e!=null?e:n,PT=Uc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Ql),i=he(()=>t.route||r.value),s=Zt(Id,0),o=he(()=>{let h=vr(s);const{matched:d}=i.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=he(()=>i.value.matched[o.value]);yo(Id,he(()=>o.value+1)),yo(IT,l),yo(Ql,i);const c=li();return vo(()=>[c.value,l.value,t.name],([h,d,p],[g,v,C])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!ui(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=i.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Sd(n.default,{Component:g,route:h});const v=p.props[d],C=v?v===!0?h.params:typeof v=="function"?v(h):v:null,O=ue(g,Ce({},C,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Sd(n.default,{Component:O,route:h})||O}}});function Sd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kT=PT;function OT(t){const e=mT(t.routes,t),n=t.parseQuery||wT,r=t.stringifyQuery||Td,i=t.history,s=$i(),o=$i(),l=$i(),c=Zy(xn);let h=xn;Hr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=gl.bind(null,N=>""+N),p=gl.bind(null,qw),g=gl.bind(null,ys);function v(N,X){let Q,ee;return Vg(N)?(Q=e.getRecordMatcher(N),ee=X):ee=N,e.addRoute(ee,Q)}function C(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(N=>N.record)}function O(N){return!!e.getRecordMatcher(N)}function F(N,X){if(X=Ce({},X||c.value),typeof N=="string"){const T=ml(n,N,X.path),P=e.resolve({path:T.path},X),L=i.createHref(T.fullPath);return Ce(T,P,{params:g(P.params),hash:ys(T.hash),redirectedFrom:void 0,href:L})}let Q;if(N.path!=null)Q=Ce({},N,{path:ml(n,N.path,X.path).path});else{const T=Ce({},N.params);for(const P in T)T[P]==null&&delete T[P];Q=Ce({},N,{params:p(T)}),X.params=p(X.params)}const ee=e.resolve(Q,X),ve=N.hash||"";ee.params=d(g(ee.params));const Oe=Kw(r,Ce({},N,{hash:Bw(ve),path:ee.path})),y=i.createHref(Oe);return Ce({fullPath:Oe,hash:ve,query:r===Td?TT(N.query):N.query||{}},ee,{redirectedFrom:void 0,href:y})}function B(N){return typeof N=="string"?ml(n,N,c.value.path):Ce({},N)}function j(N,X){if(h!==N)return hi(8,{from:X,to:N})}function $(N){return A(N)}function Y(N){return $(Ce(B(N),{replace:!0}))}function te(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ee=typeof Q=="function"?Q(N):Q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=B(ee):{path:ee},ee.params={}),Ce({query:N.query,hash:N.hash,params:ee.path!=null?{}:N.params},ee)}}function A(N,X){const Q=h=F(N),ee=c.value,ve=N.state,Oe=N.force,y=N.replace===!0,T=te(Q);if(T)return A(Ce(B(T),{state:typeof T=="object"?Ce({},ve,T.state):ve,force:Oe,replace:y}),X||Q);const P=Q;P.redirectedFrom=X;let L;return!Oe&&Ww(r,ee,Q)&&(L=hi(16,{to:P,from:ee}),kt(ee,ee,!0,!1)),(L?Promise.resolve(L):b(P,ee)).catch(D=>dn(D)?dn(D,2)?D:Lt(D):_e(D,P,ee)).then(D=>{if(D){if(dn(D,2))return A(Ce({replace:y},B(D.to),{state:typeof D.to=="object"?Ce({},ve,D.to.state):ve,force:Oe}),X||P)}else D=I(P,ee,!0,y,ve);return R(P,ee,D),D})}function E(N,X){const Q=j(N,X);return Q?Promise.reject(Q):Promise.resolve()}function _(N){const X=Rn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(N):N()}function b(N,X){let Q;const[ee,ve,Oe]=xT(N,X);Q=_l(ee.reverse(),"beforeRouteLeave",N,X);for(const T of ee)T.leaveGuards.forEach(P=>{Q.push(Un(P,N,X))});const y=E.bind(null,N,X);return Q.push(y),vt(Q).then(()=>{Q=[];for(const T of s.list())Q.push(Un(T,N,X));return Q.push(y),vt(Q)}).then(()=>{Q=_l(ve,"beforeRouteUpdate",N,X);for(const T of ve)T.updateGuards.forEach(P=>{Q.push(Un(P,N,X))});return Q.push(y),vt(Q)}).then(()=>{Q=[];for(const T of Oe)if(T.beforeEnter)if(qt(T.beforeEnter))for(const P of T.beforeEnter)Q.push(Un(P,N,X));else Q.push(Un(T.beforeEnter,N,X));return Q.push(y),vt(Q)}).then(()=>(N.matched.forEach(T=>T.enterCallbacks={}),Q=_l(Oe,"beforeRouteEnter",N,X,_),Q.push(y),vt(Q))).then(()=>{Q=[];for(const T of o.list())Q.push(Un(T,N,X));return Q.push(y),vt(Q)}).catch(T=>dn(T,8)?T:Promise.reject(T))}function R(N,X,Q){l.list().forEach(ee=>_(()=>ee(N,X,Q)))}function I(N,X,Q,ee,ve){const Oe=j(N,X);if(Oe)return Oe;const y=X===xn,T=Hr?history.state:{};Q&&(ee||y?i.replace(N.fullPath,Ce({scroll:y&&T&&T.scroll},ve)):i.push(N.fullPath,ve)),c.value=N,kt(N,X,Q,y),Lt()}let w;function K(){w||(w=i.listen((N,X,Q)=>{if(!zt.listening)return;const ee=F(N),ve=te(ee);if(ve){A(Ce(ve,{replace:!0,force:!0}),ee).catch(rs);return}h=ee;const Oe=c.value;Hr&&tT(fd(Oe.fullPath,Q.delta),Ia()),b(ee,Oe).catch(y=>dn(y,12)?y:dn(y,2)?(A(Ce(B(y.to),{force:!0}),ee).then(T=>{dn(T,20)&&!Q.delta&&Q.type===vs.pop&&i.go(-1,!1)}).catch(rs),Promise.reject()):(Q.delta&&i.go(-Q.delta,!1),_e(y,ee,Oe))).then(y=>{y=y||I(ee,Oe,!1),y&&(Q.delta&&!dn(y,8)?i.go(-Q.delta,!1):Q.type===vs.pop&&dn(y,20)&&i.go(-1,!1)),R(ee,Oe,y)}).catch(rs)}))}let me=$i(),ke=$i(),Ee;function _e(N,X,Q){Lt(N);const ee=ke.list();return ee.length?ee.forEach(ve=>ve(N,X,Q)):console.error(N),Promise.reject(N)}function bt(){return Ee&&c.value!==xn?Promise.resolve():new Promise((N,X)=>{me.add([N,X])})}function Lt(N){return Ee||(Ee=!N,K(),me.list().forEach(([X,Q])=>N?Q(N):X()),me.reset()),N}function kt(N,X,Q,ee){const{scrollBehavior:ve}=t;if(!Hr||!ve)return Promise.resolve();const Oe=!Q&&nT(fd(N.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return Lc().then(()=>ve(N,X,Oe)).then(y=>y&&eT(y)).catch(y=>_e(y,N,X))}const Me=N=>i.go(N);let Fe;const Rn=new Set,zt={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:x,resolve:F,options:t,push:$,replace:Y,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:l.add,onError:ke.add,isReady:bt,install(N){const X=this;N.component("RouterLink",RT),N.component("RouterView",kT),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(c)}),Hr&&!Fe&&c.value===xn&&(Fe=!0,$(i.location).catch(ve=>{}));const Q={};for(const ve in xn)Object.defineProperty(Q,ve,{get:()=>c.value[ve],enumerable:!0});N.provide(ba,X),N.provide(Ug,wp(Q)),N.provide(Ql,c);const ee=N.unmount;Rn.add(N),N.unmount=function(){Rn.delete(N),Rn.size<1&&(h=xn,w&&w(),w=null,c.value=xn,Fe=!1,Ee=!1),ee()}}};function vt(N){return N.reduce((X,Q)=>X.then(()=>_(Q)),Promise.resolve())}return zt}function xT(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const l=e.matched[o];l&&(t.matched.find(h=>ui(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ui(h,c))||i.push(c))}return[n,r,i]}function VP(){return Zt(ba)}const DT=[{path:"/",component:()=>Gt(()=>import("./MainLayout.839eb43e.js"),["assets/MainLayout.839eb43e.js","assets/MainLayout.1abf9734.css","assets/QItem.2cd4e260.js"]),children:[{path:"",component:()=>Gt(()=>import("./HomePage.d65fc574.js"),["assets/HomePage.d65fc574.js","assets/HomePage.ec5f1a50.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"Finance",path:"finance",component:()=>Gt(()=>import("./Finance.0bad052b.js"),["assets/Finance.0bad052b.js","assets/Finance.fd209cbf.css","assets/db.436217f6.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}},{name:"AddingData",path:"submit-transaction",component:()=>Gt(()=>import("./AddingData.b49990e5.js"),["assets/AddingData.b49990e5.js","assets/AddingData.84e09840.css","assets/db.436217f6.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}},{name:"Settings",path:"settings",component:()=>Gt(()=>import("./Settings.5ff576f0.js"),["assets/Settings.5ff576f0.js","assets/Settings.43f95384.css","assets/QItem.2cd4e260.js","assets/db.436217f6.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}},{name:"Login",path:"login",component:()=>Gt(()=>import("./Login.96f81910.js"),["assets/Login.96f81910.js","assets/Login.79033b01.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{name:"SignUp",path:"/signup",component:()=>Gt(()=>import("./SignUp.2945c9a8.js"),["assets/SignUp.2945c9a8.js","assets/SignUp.765b8348.css","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/:catchAll(.*)*",component:()=>Gt(()=>import("./ErrorNotFound.2bf2dc07.js"),[])}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,h=c?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new VT;const g=s<<2|l>>4;if(r.push(g),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LT=function(t){const e=Bg(t);return $g.encodeByteArray(e,!0)},Wo=function(t){return LT(t).replace(/\./g,"")},jg=function(t){try{return $g.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=()=>MT().__FIREBASE_DEFAULTS__,UT=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BT=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jg(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return FT()||UT()||BT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hg=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},zg=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HT(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function zT(){var t;const e=(t=Aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KT(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function WT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QT(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function JT(){return!zT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YT(){try{return typeof indexedDB=="object"}catch{return!1}}function XT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZT,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?e0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function e0(t,e){return t.replace(t0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const t0=/\{\$([^}]+)}/g;function n0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cd(s)&&Cd(o)){if(!Go(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function r0(t,e){const n=new i0(t,e);return n.subscribe.bind(n)}class i0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yl),i.error===void 0&&(i.error=yl),i.complete===void 0&&(i.complete=yl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l0(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a0(t){return t===pr?void 0:t}function l0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const u0={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},h0=ye.INFO,d0={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},f0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=d0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=h0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?u0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const p0=(t,e)=>e.some(n=>t instanceof n);let Pd,kd;function g0(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m0(){return kd||(kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kg=new WeakMap,Jl=new WeakMap,Wg=new WeakMap,vl=new WeakMap,Wc=new WeakMap;function _0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kg.set(n,t)}).catch(()=>{}),Wc.set(e,t),e}function y0(t){if(Jl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jl.set(t,e)}let Yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v0(t){Yl=t(Yl)}function E0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(El(this),e,...n);return Wg.set(r,e.sort?e.sort():[e]),Wn(r)}:m0().includes(t)?function(...e){return t.apply(El(this),e),Wn(Kg.get(this))}:function(...e){return Wn(t.apply(El(this),e))}}function w0(t){return typeof t=="function"?E0(t):(t instanceof IDBTransaction&&y0(t),p0(t,g0())?new Proxy(t,Yl):t)}function Wn(t){if(t instanceof IDBRequest)return _0(t);if(vl.has(t))return vl.get(t);const e=w0(t);return e!==t&&(vl.set(t,e),Wc.set(e,t)),e}const El=t=>Wc.get(t);function T0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const I0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],wl=new Map;function Od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I0.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&c.done]))[0]};return wl.set(e,s),s}v0(t=>({...t,get:(e,n,r)=>Od(e,n)||t.get(e,n,r),has:(e,n)=>!!Od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function R0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xl="@firebase/app",xd="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Kc("@firebase/app"),S0="@firebase/app-compat",C0="@firebase/analytics-compat",P0="@firebase/analytics",k0="@firebase/app-check-compat",O0="@firebase/app-check",x0="@firebase/auth",D0="@firebase/auth-compat",N0="@firebase/database",V0="@firebase/data-connect",L0="@firebase/database-compat",M0="@firebase/functions",F0="@firebase/functions-compat",U0="@firebase/installations",B0="@firebase/installations-compat",$0="@firebase/messaging",j0="@firebase/messaging-compat",q0="@firebase/performance",H0="@firebase/performance-compat",z0="@firebase/remote-config",K0="@firebase/remote-config-compat",W0="@firebase/storage",G0="@firebase/storage-compat",Q0="@firebase/firestore",J0="@firebase/vertexai",Y0="@firebase/firestore-compat",X0="firebase",Z0="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="[DEFAULT]",eI={[Xl]:"fire-core",[S0]:"fire-core-compat",[P0]:"fire-analytics",[C0]:"fire-analytics-compat",[O0]:"fire-app-check",[k0]:"fire-app-check-compat",[x0]:"fire-auth",[D0]:"fire-auth-compat",[N0]:"fire-rtdb",[V0]:"fire-data-connect",[L0]:"fire-rtdb-compat",[M0]:"fire-fn",[F0]:"fire-fn-compat",[U0]:"fire-iid",[B0]:"fire-iid-compat",[$0]:"fire-fcm",[j0]:"fire-fcm-compat",[q0]:"fire-perf",[H0]:"fire-perf-compat",[z0]:"fire-rc",[K0]:"fire-rc-compat",[W0]:"fire-gcs",[G0]:"fire-gcs-compat",[Q0]:"fire-fst",[Y0]:"fire-fst-compat",[J0]:"fire-vertex","fire-js":"fire-js",[X0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Map,tI=new Map,ec=new Map;function Dd(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(ec.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of Qo.values())Dd(n,t);for(const n of tI.values())Dd(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Gn=new Ns("app","Firebase",nI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=Z0;function Gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Zl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=Hg()),!n)throw Gn.create("no-options");const s=Qo.get(i);if(s){if(Go(n,s.options)&&Go(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const o=new c0(i);for(const c of ec.values())o.addComponent(c);const l=new rI(n,r,o);return Qo.set(i,l),l}function Qg(t=Zl){const e=Qo.get(t);if(!e&&t===Zl&&Hg())return Gg();if(!e)throw Gn.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let i=(r=eI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}di(new Sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="firebase-heartbeat-database",sI=1,Es="firebase-heartbeat-store";let Tl=null;function Jg(){return Tl||(Tl=T0(iI,sI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Es)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function oI(t){try{const n=(await Jg()).transaction(Es),r=await n.objectStore(Es).get(Yg(t));return await n.done,r}catch(e){if(e instanceof An)wn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Nd(t,e){try{const r=(await Jg()).transaction(Es,"readwrite");await r.objectStore(Es).put(e,Yg(t)),await r.done}catch(n){if(n instanceof An)wn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Yg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=1024,lI=30*24*60*60*1e3;class cI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=lI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vd(),{heartbeatsToSend:r,unsentEntries:i}=uI(this._heartbeatsCache.heartbeats),s=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Vd(){return new Date().toISOString().substring(0,10)}function uI(t,e=aI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ld(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ld(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YT()?XT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ld(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){di(new Sr("platform-logger",e=>new A0(e),"PRIVATE")),di(new Sr("heartbeat",e=>new cI(e),"PRIVATE")),Qn(Xl,xd,t),Qn(Xl,xd,"esm2017"),Qn("fire-js","")}dI("");var fI="firebase",pI="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(fI,pI,"app");function Qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=Xg,Zg=new Ns("auth","Firebase",Xg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Kc("@firebase/auth");function mI(t,...e){Jo.logLevel<=ye.WARN&&Jo.warn(`Auth (${wi}): ${t}`,...e)}function Io(t,...e){Jo.logLevel<=ye.ERROR&&Jo.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Jc(t,...e)}function tn(t,...e){return Jc(t,...e)}function em(t,e,n){const r=Object.assign(Object.assign({},gI()),{[e]:n});return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return em(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zg.create(t,...e)}function ce(t,e,...n){if(!t)throw Jc(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Io(e),new Error(e)}function Tn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _I(){return Md()==="http:"||Md()==="https:"}function Md(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_I()||WT()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=HT()||GT()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new Ls(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,r,i={}){return nm(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},s);return KT()||(h.referrerPolicy="no-referrer"),tm.fetch()(rm(t,t.config.apiHost,n,l),h)})}async function nm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EI),e);try{const i=new II(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw uo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw em(t,d,h);Ht(t,d)}}catch(i){if(i instanceof An)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Ms(t,e,n,r,i={}){const s=await sr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Yc(t.config,i):`${t.config.apiScheme}://${i}`}function TI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class II{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),wI.get())})}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class bI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AI(t,e){return sr(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function im(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(t,e=!1){const n=ln(t),r=await n.getIdToken(e),i=Xc(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ss(Il(i.auth_time)),issuedAtTime:ss(Il(i.iat)),expirationTime:ss(Il(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Il(t){return Number(t)*1e3}function Xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const i=jg(n);return i?JSON.parse(i):(Io("Failed to decode base64 JWT payload"),null)}catch(i){return Io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ud(t){const e=Xc(t);return ce(e,"internal-error"),ce(typeof e.exp!="undefined","internal-error"),ce(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&CI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ws(t,im(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sm(s.providerUserInfo):[],l=OI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new nc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function kI(t){const e=ln(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sm(t){return t.map(e=>{var{providerId:n}=e,r=Qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){const n=await nm(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rm(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DI(t,e){return sr(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken!="undefined","internal-error"),ce(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ud(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Ud(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ri;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){ce(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SI(this,e)}reload(){return kI(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await ws(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:$,isAnonymous:Y,providerData:te,stsTokenManager:A}=n;ce(j&&A,e,"internal-error");const E=ri.fromJSON(this.name,A);ce(typeof j=="string",e,"internal-error"),Dn(p,e.name),Dn(g,e.name),ce(typeof $=="boolean",e,"internal-error"),ce(typeof Y=="boolean",e,"internal-error"),Dn(v,e.name),Dn(C,e.name),Dn(x,e.name),Dn(O,e.name),Dn(F,e.name),Dn(B,e.name);const _=new _n({uid:j,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:Y,photoURL:C,phoneNumber:v,tenantId:x,stsTokenManager:E,createdAt:F,lastLoginAt:B});return te&&Array.isArray(te)&&(_.providerData=te.map(b=>Object.assign({},b))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ri;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?sm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ri;l.updateFromIdToken(r);const c=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=Bd.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}om.type="NONE";const $d=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t,e,n){return`firebase:${t}:${e}:${n}`}class ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bo(this.userKey,i.apiKey,s),this.fullPersistenceKey=bo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ii(yn($d),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||yn($d);const o=bo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=_n._fromJSON(e,d);h!==s&&(l=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ii(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ii(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dm(e))return"Blackberry";if(fm(e))return"Webos";if(lm(e))return"Safari";if((e.includes("chrome/")||cm(e))&&!e.includes("edge/"))return"Chrome";if(hm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function am(t=ft()){return/firefox\//i.test(t)}function lm(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cm(t=ft()){return/crios\//i.test(t)}function um(t=ft()){return/iemobile/i.test(t)}function hm(t=ft()){return/android/i.test(t)}function dm(t=ft()){return/blackberry/i.test(t)}function fm(t=ft()){return/webos/i.test(t)}function Zc(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NI(t=ft()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VI(){return QT()&&document.documentMode===10}function pm(t=ft()){return Zc(t)||hm(t)||fm(t)||dm(t)||/windows phone/i.test(t)||um(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e=[]){let n;switch(t){case"Browser":n=jd(ft());break;case"Worker":n=`${jd(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e={}){return sr(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=6;class UI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new LI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await im(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(vn(this));const n=e?ln(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MI(this),n=new UI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ii.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return ln(t)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=r0(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $I(t){Ra=t}function mm(t){return Ra.loadJS(t)}function jI(){return Ra.recaptchaEnterpriseScript}function qI(){return Ra.gapiScript}function HI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zI{constructor(){this.enterprise=new KI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WI="recaptcha-enterprise",_m="NO_RECAPTCHA";class GI{constructor(e){this.type=WI,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{AI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new bI(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Fd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(_m)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zI().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fd(window.grecaptcha))i(l,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=jI();c.length!==0&&(c+=l),mm(c).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function ji(t,e,n,r=!1,i=!1){const s=new GI(t);let o;if(i)o=_m;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function rc(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ji(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ji(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await ji(t,e,n);return r(t,l).catch(async c=>{var h;if(((h=t._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await ji(t,e,n,!1,!0);return r(t,d)}return Promise.reject(c)})}else{const l=await ji(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){const n=Gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Go(s,e!=null?e:{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function JI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YI(t,e,n){const r=xr(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ym(e),{host:o,port:l}=XI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZI()}function ym(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XI(t){const e=ym(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hd(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hd(o)}}}function Hd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function eb(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return Ms(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e){return Ms(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function rb(t,e){return Ms(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends eu{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ts(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ts(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rc(e,n,"signInWithPassword",tb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return nb(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rc(e,r,"signUpPassword",eb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return rb(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e){return Ms(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="http://localhost";class Cr extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return si(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,si(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,si(e,n)}buildRequest(){const e={requestUri:ib,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ob(t){const e=zi(Ki(t)).link,n=e?zi(Ki(e)).deep_link_id:null,r=zi(Ki(t)).deep_link_id;return(r?zi(Ki(r)).link:null)||r||n||e||t}class tu{constructor(e){var n,r,i,s,o,l;const c=zi(Ki(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=sb((i=c.mode)!==null&&i!==void 0?i:null);ce(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ob(e);try{return new tu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return Ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tu.parseLink(n);return ce(r,"argument-error"),Ts._fromEmailAndCode(e,r.code,r.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Fs{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Fs{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Fs{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e){return Ms(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=zd(r);return new Pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zd(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xo(e,n,r,i)}}function Em(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,s,e,r):s})}async function lb(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const s=await ws(t,Em(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=Xc(s.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(t,e,n=!1){if(Xt(t.app))return Promise.reject(vn(t));const r="signIn",i=await Em(t,r,e),s=await Pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ub(t,e){return wm(xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LP(t,e,n){if(Xt(t.app))return Promise.reject(vn(t));const r=xr(t),o=await rc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ab,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Tm(t),c}),l=await Pr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function MP(t,e,n){return Xt(t.app)?Promise.reject(vn(t)):ub(ln(t),Ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tm(t),r})}function hb(t,e,n,r){return ln(t).onIdTokenChanged(e,n,r)}function db(t,e,n){return ln(t).beforeAuthStateChanged(e,n)}function fb(t,e,n,r){return ln(t).onAuthStateChanged(e,n,r)}function FP(t){return ln(t).signOut()}const Zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zo,"1"),this.storage.removeItem(Zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=1e3,gb=10;class bm extends Im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const mb=bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends Im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Am.type="SESSION";const Rm=Am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),c=await _b(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=nu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function vb(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){return typeof nn().WorkerGlobalScope!="undefined"&&typeof nn().importScripts=="function"}async function Eb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tb(){return Sm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="firebaseLocalStorageDb",Ib=1,ea="firebaseLocalStorage",Pm="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([ea],e?"readwrite":"readonly").objectStore(ea)}function bb(){const t=indexedDB.deleteDatabase(Cm);return new Us(t).toPromise()}function ic(){const t=indexedDB.open(Cm,Ib);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ea,{keyPath:Pm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ea)?e(r):(r.close(),await bb(),e(await ic()))})})}async function Kd(t,e,n){const r=Ca(t,!0).put({[Pm]:e,value:n});return new Us(r).toPromise()}async function Ab(t,e){const n=Ca(t,!1).get(e),r=await new Us(n).toPromise();return r===void 0?null:r.value}function Wd(t,e){const n=Ca(t,!0).delete(e);return new Us(n).toPromise()}const Rb=800,Sb=3;class km{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(Tb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Eb(),!this.activeServiceWorker)return;this.sender=new yb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ic();return await Kd(e,Zo,"1"),await Wd(e,Zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ab(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ca(i,!1).getAll();return new Us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}km.type="LOCAL";const Cb=km;new Ls(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t,e){return e?yn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return si(e,this._buildIdpRequest())}_linkToIdToken(e,n){return si(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return si(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kb(t){return wm(t.auth,new ru(t),t.bypassAuthState)}function Ob(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),cb(n,new ru(t),t.bypassAuthState)}async function xb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),lb(n,new ru(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return xb;case"reauthViaPopup":case"reauthViaRedirect":return Ob;default:Ht(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new Ls(2e3,1e4);class Jr extends Om{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Db.get())};e()}}Jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="pendingRedirect",Ao=new Map;class Vb extends Om{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await Lb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lb(t,e){const n=Ub(e),r=Fb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mb(t,e){Ao.set(t._key(),e)}function Fb(t){return yn(t._redirectPersistence)}function Ub(t){return bo(Nb,t.config.apiKey,t.name)}async function Bb(t,e,n=!1){if(Xt(t.app))return Promise.reject(vn(t));const r=xr(t),i=Pb(r,e),o=await new Vb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=10*60*1e3;class jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kb=/^https?/;async function Wb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hb(t);for(const n of e)try{if(Gb(n))return}catch{}Ht(t,"unauthorized-domain")}function Gb(t){const e=tc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kb.test(n))return!1;if(zb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Ls(3e4,6e4);function Qd(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jb(t){return new Promise((e,n)=>{var r,i,s;function o(){Qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(tn(t,"network-request-failed"))},timeout:Qb.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const l=HI("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},mm(`${qI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function Yb(t){return Ro=Ro||Jb(t),Ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new Ls(5e3,15e3),Zb="__/auth/iframe",eA="emulator/auth/iframe",tA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rA(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yc(e,eA):`https://${t.config.authDomain}/${Zb}`,r={apiKey:e.apiKey,appName:t.name,v:wi},i=nA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vs(r).slice(1)}`}async function iA(t){const e=await Yb(t),n=nn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:rA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},Xb.get());function c(){nn().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oA=500,aA=600,lA="_blank",cA="http://localhost";class Jd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uA(t,e,n,r=oA,i=aA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},sA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ft().toLowerCase();n&&(l=cm(h)?lA:n),am(h)&&(e=e||cA,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[v,C])=>`${g}${v}=${C},`,"");if(NI(h)&&l!=="_self")return hA(e||"",l),new Jd(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Jd(p)}function hA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="__/auth/handler",fA="emulator/auth/handler",pA=encodeURIComponent("fac");async function Yd(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wi,eventId:i};if(e instanceof vm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(s||{}))o[d]=p}if(e instanceof Fs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${pA}=${encodeURIComponent(c)}`:"";return`${gA(t)}?${Vs(l).slice(1)}${h}`}function gA({config:t}){return t.emulator?Yc(t,fA):`https://${t.authDomain}/${dA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class mA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rm,this._completeRedirectFn=Bb,this._overrideRedirectResult=Mb}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Yd(e,n,r,tc(),i);return uA(e,o,nu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yd(e,n,r,tc(),i);return vb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iA(e),r=new jb(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bl];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pm()||lm()||Zc()}}const _A=mA;var Xd="@firebase/auth",Zd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EA(t){di(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(t)},h=new BI(r,i,s,c);return JI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new Sr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new yA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Xd,Zd,vA(t)),Qn(Xd,Zd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=5*60,TA=zg("authIdTokenMaxAge")||wA;let ef=null;const IA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TA)return;const i=n==null?void 0:n.token;ef!==i&&(ef=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bA(t=Qg()){const e=Gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QI(t,{popupRedirectResolver:_A,persistence:[Cb,mb,Rm]}),r=zg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=IA(s.toString());db(n,o,()=>o(n.currentUser)),hb(n,l=>o(l))}}const i=qg("auth");return i&&YI(n,`http://${i}`),n}function AA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$I({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EA("Browser");var tf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,Dm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function _(){}_.prototype=E.prototype,A.D=E.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(b,R,I){for(var w=Array(arguments.length-2),K=2;K<arguments.length;K++)w[K-2]=arguments[K];return E.prototype[R].apply(b,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,E,_){_||(_=0);var b=Array(16);if(typeof E=="string")for(var R=0;16>R;++R)b[R]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(R=0;16>R;++R)b[R]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=A.g[0],_=A.g[1],R=A.g[2];var I=A.g[3],w=E+(I^_&(R^I))+b[0]+3614090360&4294967295;E=_+(w<<7&4294967295|w>>>25),w=I+(R^E&(_^R))+b[1]+3905402710&4294967295,I=E+(w<<12&4294967295|w>>>20),w=R+(_^I&(E^_))+b[2]+606105819&4294967295,R=I+(w<<17&4294967295|w>>>15),w=_+(E^R&(I^E))+b[3]+3250441966&4294967295,_=R+(w<<22&4294967295|w>>>10),w=E+(I^_&(R^I))+b[4]+4118548399&4294967295,E=_+(w<<7&4294967295|w>>>25),w=I+(R^E&(_^R))+b[5]+1200080426&4294967295,I=E+(w<<12&4294967295|w>>>20),w=R+(_^I&(E^_))+b[6]+2821735955&4294967295,R=I+(w<<17&4294967295|w>>>15),w=_+(E^R&(I^E))+b[7]+4249261313&4294967295,_=R+(w<<22&4294967295|w>>>10),w=E+(I^_&(R^I))+b[8]+1770035416&4294967295,E=_+(w<<7&4294967295|w>>>25),w=I+(R^E&(_^R))+b[9]+2336552879&4294967295,I=E+(w<<12&4294967295|w>>>20),w=R+(_^I&(E^_))+b[10]+4294925233&4294967295,R=I+(w<<17&4294967295|w>>>15),w=_+(E^R&(I^E))+b[11]+2304563134&4294967295,_=R+(w<<22&4294967295|w>>>10),w=E+(I^_&(R^I))+b[12]+1804603682&4294967295,E=_+(w<<7&4294967295|w>>>25),w=I+(R^E&(_^R))+b[13]+4254626195&4294967295,I=E+(w<<12&4294967295|w>>>20),w=R+(_^I&(E^_))+b[14]+2792965006&4294967295,R=I+(w<<17&4294967295|w>>>15),w=_+(E^R&(I^E))+b[15]+1236535329&4294967295,_=R+(w<<22&4294967295|w>>>10),w=E+(R^I&(_^R))+b[1]+4129170786&4294967295,E=_+(w<<5&4294967295|w>>>27),w=I+(_^R&(E^_))+b[6]+3225465664&4294967295,I=E+(w<<9&4294967295|w>>>23),w=R+(E^_&(I^E))+b[11]+643717713&4294967295,R=I+(w<<14&4294967295|w>>>18),w=_+(I^E&(R^I))+b[0]+3921069994&4294967295,_=R+(w<<20&4294967295|w>>>12),w=E+(R^I&(_^R))+b[5]+3593408605&4294967295,E=_+(w<<5&4294967295|w>>>27),w=I+(_^R&(E^_))+b[10]+38016083&4294967295,I=E+(w<<9&4294967295|w>>>23),w=R+(E^_&(I^E))+b[15]+3634488961&4294967295,R=I+(w<<14&4294967295|w>>>18),w=_+(I^E&(R^I))+b[4]+3889429448&4294967295,_=R+(w<<20&4294967295|w>>>12),w=E+(R^I&(_^R))+b[9]+568446438&4294967295,E=_+(w<<5&4294967295|w>>>27),w=I+(_^R&(E^_))+b[14]+3275163606&4294967295,I=E+(w<<9&4294967295|w>>>23),w=R+(E^_&(I^E))+b[3]+4107603335&4294967295,R=I+(w<<14&4294967295|w>>>18),w=_+(I^E&(R^I))+b[8]+1163531501&4294967295,_=R+(w<<20&4294967295|w>>>12),w=E+(R^I&(_^R))+b[13]+2850285829&4294967295,E=_+(w<<5&4294967295|w>>>27),w=I+(_^R&(E^_))+b[2]+4243563512&4294967295,I=E+(w<<9&4294967295|w>>>23),w=R+(E^_&(I^E))+b[7]+1735328473&4294967295,R=I+(w<<14&4294967295|w>>>18),w=_+(I^E&(R^I))+b[12]+2368359562&4294967295,_=R+(w<<20&4294967295|w>>>12),w=E+(_^R^I)+b[5]+4294588738&4294967295,E=_+(w<<4&4294967295|w>>>28),w=I+(E^_^R)+b[8]+2272392833&4294967295,I=E+(w<<11&4294967295|w>>>21),w=R+(I^E^_)+b[11]+1839030562&4294967295,R=I+(w<<16&4294967295|w>>>16),w=_+(R^I^E)+b[14]+4259657740&4294967295,_=R+(w<<23&4294967295|w>>>9),w=E+(_^R^I)+b[1]+2763975236&4294967295,E=_+(w<<4&4294967295|w>>>28),w=I+(E^_^R)+b[4]+1272893353&4294967295,I=E+(w<<11&4294967295|w>>>21),w=R+(I^E^_)+b[7]+4139469664&4294967295,R=I+(w<<16&4294967295|w>>>16),w=_+(R^I^E)+b[10]+3200236656&4294967295,_=R+(w<<23&4294967295|w>>>9),w=E+(_^R^I)+b[13]+681279174&4294967295,E=_+(w<<4&4294967295|w>>>28),w=I+(E^_^R)+b[0]+3936430074&4294967295,I=E+(w<<11&4294967295|w>>>21),w=R+(I^E^_)+b[3]+3572445317&4294967295,R=I+(w<<16&4294967295|w>>>16),w=_+(R^I^E)+b[6]+76029189&4294967295,_=R+(w<<23&4294967295|w>>>9),w=E+(_^R^I)+b[9]+3654602809&4294967295,E=_+(w<<4&4294967295|w>>>28),w=I+(E^_^R)+b[12]+3873151461&4294967295,I=E+(w<<11&4294967295|w>>>21),w=R+(I^E^_)+b[15]+530742520&4294967295,R=I+(w<<16&4294967295|w>>>16),w=_+(R^I^E)+b[2]+3299628645&4294967295,_=R+(w<<23&4294967295|w>>>9),w=E+(R^(_|~I))+b[0]+4096336452&4294967295,E=_+(w<<6&4294967295|w>>>26),w=I+(_^(E|~R))+b[7]+1126891415&4294967295,I=E+(w<<10&4294967295|w>>>22),w=R+(E^(I|~_))+b[14]+2878612391&4294967295,R=I+(w<<15&4294967295|w>>>17),w=_+(I^(R|~E))+b[5]+4237533241&4294967295,_=R+(w<<21&4294967295|w>>>11),w=E+(R^(_|~I))+b[12]+1700485571&4294967295,E=_+(w<<6&4294967295|w>>>26),w=I+(_^(E|~R))+b[3]+2399980690&4294967295,I=E+(w<<10&4294967295|w>>>22),w=R+(E^(I|~_))+b[10]+4293915773&4294967295,R=I+(w<<15&4294967295|w>>>17),w=_+(I^(R|~E))+b[1]+2240044497&4294967295,_=R+(w<<21&4294967295|w>>>11),w=E+(R^(_|~I))+b[8]+1873313359&4294967295,E=_+(w<<6&4294967295|w>>>26),w=I+(_^(E|~R))+b[15]+4264355552&4294967295,I=E+(w<<10&4294967295|w>>>22),w=R+(E^(I|~_))+b[6]+2734768916&4294967295,R=I+(w<<15&4294967295|w>>>17),w=_+(I^(R|~E))+b[13]+1309151649&4294967295,_=R+(w<<21&4294967295|w>>>11),w=E+(R^(_|~I))+b[4]+4149444226&4294967295,E=_+(w<<6&4294967295|w>>>26),w=I+(_^(E|~R))+b[11]+3174756917&4294967295,I=E+(w<<10&4294967295|w>>>22),w=R+(E^(I|~_))+b[2]+718787259&4294967295,R=I+(w<<15&4294967295|w>>>17),w=_+(I^(R|~E))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,E){E===void 0&&(E=A.length);for(var _=E-this.blockSize,b=this.B,R=this.h,I=0;I<E;){if(R==0)for(;I<=_;)i(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<E;)if(b[R++]=A.charCodeAt(I++),R==this.blockSize){i(this,b),R=0;break}}else for(;I<E;)if(b[R++]=A[I++],R==this.blockSize){i(this,b),R=0;break}}this.h=R,this.o+=E},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;var _=8*this.o;for(E=A.length-8;E<A.length;++E)A[E]=_&255,_/=256;for(this.u(A),A=Array(16),E=_=0;4>E;++E)for(var b=0;32>b;b+=8)A[_++]=this.g[E]>>>b&255;return A};function s(A,E){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=E(A)}function o(A,E){this.h=E;for(var _=[],b=!0,R=A.length-1;0<=R;R--){var I=A[R]|0;b&&I==E||(_[R]=I,b=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?s(A,function(E){return new o([E|0],0>E?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(h(-A));for(var E=[],_=1,b=0;A>=_;b++)E[b]=A/_|0,_*=4294967296;return new o(E,0)}function d(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return O(d(A.substring(1),E));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(E,8)),b=p,R=0;R<A.length;R+=8){var I=Math.min(8,A.length-R),w=parseInt(A.substring(R,R+I),E);8>I?(I=h(Math.pow(E,I)),b=b.j(I).add(h(w))):(b=b.j(_),b=b.add(h(w)))}return b}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-O(this).m();for(var A=0,E=1,_=0;_<this.g.length;_++){var b=this.i(_);A+=(0<=b?b:4294967296+b)*E,E*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(x(this))return"-"+O(this).toString(A);for(var E=h(Math.pow(A,6)),_=this,b="";;){var R=$(_,E).g;_=F(_,R.j(E));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=R,C(_))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=F(this,A),x(A)?-1:C(A)?0:1};function O(A){for(var E=A.g.length,_=[],b=0;b<E;b++)_[b]=~A.g[b];return new o(_,~A.h).add(g)}t.abs=function(){return x(this)?O(this):this},t.add=function(A){for(var E=Math.max(this.g.length,A.g.length),_=[],b=0,R=0;R<=E;R++){var I=b+(this.i(R)&65535)+(A.i(R)&65535),w=(I>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=w>>>16,I&=65535,w&=65535,_[R]=w<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function F(A,E){return A.add(O(E))}t.j=function(A){if(C(this)||C(A))return p;if(x(this))return x(A)?O(this).j(O(A)):O(O(this).j(A));if(x(A))return O(this.j(O(A)));if(0>this.l(v)&&0>A.l(v))return h(this.m()*A.m());for(var E=this.g.length+A.g.length,_=[],b=0;b<2*E;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var I=this.i(b)>>>16,w=this.i(b)&65535,K=A.i(R)>>>16,me=A.i(R)&65535;_[2*b+2*R]+=w*me,B(_,2*b+2*R),_[2*b+2*R+1]+=I*me,B(_,2*b+2*R+1),_[2*b+2*R+1]+=w*K,B(_,2*b+2*R+1),_[2*b+2*R+2]+=I*K,B(_,2*b+2*R+2)}for(b=0;b<E;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=E;b<2*E;b++)_[b]=0;return new o(_,0)};function B(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function j(A,E){this.g=A,this.h=E}function $(A,E){if(C(E))throw Error("division by zero");if(C(A))return new j(p,p);if(x(A))return E=$(O(A),E),new j(O(E.g),O(E.h));if(x(E))return E=$(A,O(E)),new j(O(E.g),E.h);if(30<A.g.length){if(x(A)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var _=g,b=E;0>=b.l(A);)_=Y(_),b=Y(b);var R=te(_,1),I=te(b,1);for(b=te(b,2),_=te(_,2);!C(b);){var w=I.add(b);0>=w.l(A)&&(R=R.add(_),I=w),b=te(b,1),_=te(_,1)}return E=F(A,R.j(E)),new j(R,E)}for(R=p;0<=A.l(E);){for(_=Math.max(1,Math.floor(A.m()/E.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=h(_),w=I.j(E);x(w)||0<w.l(A);)_-=b,I=h(_),w=I.j(E);C(I)&&(I=g),R=R.add(I),A=F(A,w)}return new j(R,A)}t.A=function(A){return $(this,A).h},t.and=function(A){for(var E=Math.max(this.g.length,A.g.length),_=[],b=0;b<E;b++)_[b]=this.i(b)&A.i(b);return new o(_,this.h&A.h)},t.or=function(A){for(var E=Math.max(this.g.length,A.g.length),_=[],b=0;b<E;b++)_[b]=this.i(b)|A.i(b);return new o(_,this.h|A.h)},t.xor=function(A){for(var E=Math.max(this.g.length,A.g.length),_=[],b=0;b<E;b++)_[b]=this.i(b)^A.i(b);return new o(_,this.h^A.h)};function Y(A){for(var E=A.g.length+1,_=[],b=0;b<E;b++)_[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(_,A.h)}function te(A,E){var _=E>>5;E%=32;for(var b=A.g.length-_,R=[],I=0;I<b;I++)R[I]=0<E?A.i(I+_)>>>E|A.i(I+_+1)<<32-E:A.i(I+_);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Dm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Er=o}).apply(typeof tf!="undefined"?tf:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ho=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nm,Wi,Vm,So,sc,Lm,Mm,Fm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ho=="object"&&ho];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in f))break e;f=f[S]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var f=0,m=!1,S={next:function(){if(!m&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,S,k){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return u.prototype[S].apply(m,z)}}function x(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function O(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const S=a.length||0,k=m.length||0;a.length=S+k;for(let z=0;z<k;z++)a[S+z]=m[z]}else a.push(m)}}class F{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var Y=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function te(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function E(a){const u={};for(const f in a)u[f]=a[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let f,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(f in m)a[f]=m[f];for(let k=0;k<_.length;k++)f=_[k],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function I(a){l.setTimeout(()=>{throw a},0)}function w(){var a=bt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class K{constructor(){this.h=this.g=null}add(u,f){const m=me.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var me=new F(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,_e=!1,bt=new K,Lt=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(kt)}};var kt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){I(f)}var u=me;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}_e=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function zt(a,u){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(Y){e:{try{$(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zt.aa.h.call(this)}}C(zt,Fe);var vt={2:"touch",3:"pen",4:"mouse"};zt.prototype.h=function(){zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,u,f,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=S,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ve(a){this.src=a,this.g={},this.h=0}ve.prototype.add=function(a,u,f,m,S){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var z=y(a,u,m,S);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new Q(u,this.src,k,!!m,S),u.fa=f,a.push(u)),u};function Oe(a,u){var f=u.type;if(f in a.g){var m=a.g[f],S=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(m,S,1),k&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,m){for(var S=0;S<a.length;++S){var k=a[S];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return S}return-1}var T="closure_lm_"+(1e6*Math.random()|0),P={};function L(a,u,f,m,S){if(m&&m.once)return W(a,u,f,m,S);if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(a,u[k],f,m,S);return null}return f=le(f),a&&a[N]?a.K(u,f,h(m)?!!m.capture:!!m,S):D(a,u,f,!1,m,S)}function D(a,u,f,m,S,k){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,xe=J(a);if(xe||(a[T]=xe=new ve(a)),f=xe.add(u,f,m,z,k),f.proxy)return f;if(m=M(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Rn||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(U(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function M(){function a(f){return u.call(a.src,a.listener,f)}const u=ie;return a}function W(a,u,f,m,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)W(a,u[k],f,m,S);return null}return f=le(f),a&&a[N]?a.L(u,f,h(m)?!!m.capture:!!m,S):D(a,u,f,!0,m,S)}function H(a,u,f,m,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)H(a,u[k],f,m,S);else m=h(m)?!!m.capture:!!m,f=le(f),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=y(k,f,m,S),-1<f&&(ee(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=J(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,m,S)),(f=-1<a?u[a]:null)&&q(f))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])Oe(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(U(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=J(u))?(Oe(f,a),f.h==0&&(f.src=null,u[T]=null)):ee(a)}}}function U(a){return a in P?P[a]:P[a]="on"+a}function ie(a,u){if(a.da)a=!0;else{u=new zt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&q(a),a=f.call(m,u)}return a}function J(a){return a=a[T],a instanceof ve?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function se(){Me.call(this),this.i=new ve(this),this.M=this,this.F=null}C(se,Me),se.prototype[N]=!0,se.prototype.removeEventListener=function(a,u,f,m){H(this,a,u,f,m)};function pe(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Fe(u,a);else if(u instanceof Fe)u.target=u.target||a;else{var S=u;u=new Fe(m,a),b(u,S)}if(S=!0,f)for(var k=f.length-1;0<=k;k--){var z=u.g=f[k];S=we(z,m,!0,u)&&S}if(z=u.g=a,S=we(z,m,!0,u)&&S,S=we(z,m,!1,u)&&S,f)for(k=0;k<f.length;k++)z=u.g=f[k],S=we(z,m,!1,u)&&S}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)ee(f[m]);delete a.g[u],a.h--}}this.F=null},se.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},se.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function we(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var z=u[k];if(z&&!z.da&&z.capture==f){var xe=z.listener,Ze=z.ha||z.src;z.fa&&Oe(a.i,z),S=xe.call(Ze,m)!==!1&&S}}return S&&!m.defaultPrevented}function it(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function We(a){a.g=it(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class At extends Me{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(a){Me.call(this),this.h=a,this.g={}}C(Ge,Me);var Sn=[];function Ri(a){te(a.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},a),a.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Ri(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Ot=l.JSON.parse,Hs=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ba(){}Ba.prototype.h=null;function Cu(a){return a.h||(a.h=a.i())}function Pu(){}var Si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){Fe.call(this,"d")}C($a,Fe);function ja(){Fe.call(this,"c")}C(ja,Fe);var or={},ku=null;function zs(){return ku=ku||new se}or.La="serverreachability";function Ou(a){Fe.call(this,or.La,a)}C(Ou,Fe);function Ci(a){const u=zs();pe(u,new Ou(u))}or.STAT_EVENT="statevent";function xu(a,u){Fe.call(this,or.STAT_EVENT,a),this.stat=u}C(xu,Fe);function pt(a){const u=zs();pe(u,new xu(u,a))}or.Ma="timingevent";function Du(a,u){Fe.call(this,or.Ma,a),this.size=u}C(Du,Fe);function Pi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function K_(a,u,f,m,S,k){a.info(function(){if(a.g)if(k)for(var z="",xe=k.split("&"),Ze=0;Ze<xe.length;Ze++){var Se=xe[Ze].split("=");if(1<Se.length){var st=Se[0];Se=Se[1];var ot=st.split("_");z=2<=ot.length&&ot[1]=="type"?z+(st+"="+Se+"&"):z+(st+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+f+`
`+z})}function W_(a,u,f,m,S,k,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+f+`
`+k+" "+z})}function Nr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Q_(a,f)+(m?" "+m:"")})}function G_(a,u){a.info(function(){return"TIMEOUT: "+u})}ki.prototype.info=function(){};function Q_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return Xe(f)}catch{return u}}var Ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qa;function Ws(){}C(Ws,Ba),Ws.prototype.g=function(){return new XMLHttpRequest},Ws.prototype.i=function(){return{}},qa=new Ws;function Cn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var Lu={},Ha={};function za(a,u,f){a.L=1,a.v=Ys(cn(u)),a.m=f,a.P=!0,Mu(a,null)}function Mu(a,u){a.F=Date.now(),Gs(a),a.A=cn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Yu(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Vu,a.g=gh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new At(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Sn[0]=S.toString()),S=Sn);for(var k=0;k<S.length;k++){var z=L(f,S[k],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ci(),K_(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const u=this.M;u&&un(a)==3?u.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=un(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ih(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Mr?Ci(3):Ci(2)),Ka(this);var f=this.g.Z();this.X=f;t:if(Fu(this)){var m=ih(this.g);a="";var S=m.length,k=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ar(this),Oi(this);var z="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==S-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,W_(this.i,this.u,this.A,this.l,this.R,ot,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Ze=this.g;if((xe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(xe)){var Se=xe;break t}}Se=null}if(f=Se)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wa(this,f);else{this.o=!1,this.s=3,pt(12),ar(this),Oi(this);break e}}if(this.P){f=!0;let Mt;for(;!this.J&&this.C<z.length;)if(Mt=J_(this,z),Mt==Ha){ot==4&&(this.s=4,pt(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==Lu){this.s=4,pt(15),Nr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,Mt,null),Wa(this,Mt);if(Fu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||z.length!=0||this.h.h||(this.s=1,pt(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,z,"[Invalid Chunked Response]"),ar(this),Oi(this);else if(0<z.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Za(st),st.M=!0,pt(11))}}else Nr(this.i,this.l,z,null),Wa(this,z);ot==4&&ar(this),this.o&&!this.J&&(ot==4?hh(this.j,this):(this.o=!1,Gs(this)))}else fy(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),ar(this),Oi(this)}}}catch{}finally{}};function Fu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function J_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ha:(f=Number(u.substring(f,m)),isNaN(f)?Lu:(m+=1,m+f>u.length?Ha:(u=u.slice(m,m+f),a.C=m+f,u)))}Cn.prototype.cancel=function(){this.J=!0,ar(this)};function Gs(a){a.S=Date.now()+a.I,Uu(a,a.I)}function Uu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Pi(g(a.ba,a),u)}function Ka(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(G_(this.i,this.A),this.L!=2&&(Ci(),pt(17)),ar(this),this.s=2,Oi(this)):Uu(this,this.S-a)};function Oi(a){a.j.G==0||a.J||hh(a.j,a)}function ar(a){Ka(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ri(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Wa(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ga(f.h,a))){if(!a.K&&Ga(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ro(f),to(f);else break e;Xa(f),pt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Pi(g(f.Za,f),6e3));if(1>=ju(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else cr(f,11)}else if((a.K||f.g==a)&&ro(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Se=S[u];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const st=Se[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const ot=Se[4];ot!=null&&(f.Aa=ot,f.j.info("SVER="+f.Aa));const Mr=Se[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Mt=a.g;if(Mt){const so=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var k=m.h;k.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Qa(k,k.h),k.h=null))}if(m.D){const el=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;el&&(m.ya=el,Le(m.I,m.D,el))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=ph(m,m.J?m.ia:null,m.W),z.K){qu(m.h,z);var xe=z,Ze=m.L;Ze&&(xe.I=Ze),xe.B&&(Ka(xe),Gs(xe)),m.g=z}else ch(m);0<f.i.length&&no(f)}else Se[0]!="stop"&&Se[0]!="close"||cr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?cr(f,7):Ya(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Ci(4)}catch{}}var Y_=class{constructor(a,u){this.g=a,this.map=u}};function Bu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $u(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ju(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qa(a,u){a.g?a.g.add(u):a.h=u}function qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Bu.prototype.cancel=function(){if(this.i=Hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return x(a.i)}function X_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map!="undefined"&&a instanceof Map||typeof Set!="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function Z_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map!="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!="undefined"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Z_(a),m=X_(a),S=m.length,k=0;k<S;k++)u.call(void 0,m[k],f&&f[k],a)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ey(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),S=null;if(0<=m){var k=a[f].substring(0,m);S=a[f].substring(m+1)}else k=a[f];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof lr){this.h=a.h,Qs(this,a.j),this.o=a.o,this.g=a.g,Js(this,a.s),this.l=a.l;var u=a.i,f=new Ni;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Wu(this,f),this.m=a.m}else a&&(u=String(a).match(Ku))?(this.h=!1,Qs(this,u[1]||"",!0),this.o=xi(u[2]||""),this.g=xi(u[3]||"",!0),Js(this,u[4]),this.l=xi(u[5]||"",!0),Wu(this,u[6]||"",!0),this.m=xi(u[7]||"")):(this.h=!1,this.i=new Ni(null,this.h))}lr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Di(u,Gu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Di(u,Gu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Di(f,f.charAt(0)=="/"?ry:ny,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Di(f,sy)),a.join("")};function cn(a){return new lr(a)}function Qs(a,u,f){a.j=f?xi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Js(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Wu(a,u,f){u instanceof Ni?(a.i=u,oy(a.i,a.h)):(f||(u=Di(u,iy)),a.i=new Ni(u,a.h))}function Le(a,u,f){a.i.set(u,f)}function Ys(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Di(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,ty),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ty(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gu=/[#\/\?@]/g,ny=/[#\?:]/g,ry=/[#\?]/g,iy=/[#\?@]/g,sy=/#/g;function Ni(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&ey(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ni.prototype,t.add=function(a,u){Pn(this),this.i=null,a=Vr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Qu(a,u){Pn(a),u=Vr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ju(a,u){return Pn(a),u=Vr(a,u),a.g.has(u)}t.forEach=function(a,u){Pn(this),this.g.forEach(function(f,m){f.forEach(function(S){a.call(u,S,m,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const S=a[m];for(let k=0;k<S.length;k++)f.push(u[m])}return f},t.V=function(a){Pn(this);let u=[];if(typeof a=="string")Ju(this,a)&&(u=u.concat(this.g.get(Vr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Pn(this),this.i=null,a=Vr(this,a),Ju(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Yu(a,u,f){Qu(a,u),0<f.length&&(a.i=null,a.g.set(Vr(a,u),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const k=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var S=k;z[m]!==""&&(S+="="+encodeURIComponent(String(z[m]))),a.push(S)}}return this.i=a.join("&")};function Vr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function oy(a,u){u&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(f,m){var S=m.toLowerCase();m!=S&&(Qu(this,m),Yu(this,S,f))},a)),a.j=u}function ay(a,u){const f=new ki;if(l.Image){const m=new Image;m.onload=v(kn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=v(kn,f,"TestLoadImage: error",!1,u,m),m.onabort=v(kn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(kn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ly(a,u){const f=new ki,m=new AbortController,S=setTimeout(()=>{m.abort(),kn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?kn(f,"TestPingServer: ok",!0,u):kn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),kn(f,"TestPingServer: error",!1,u)})}function kn(a,u,f,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(f)}catch{}}function cy(){this.g=new Hs}function uy(a,u,f){const m=f||"";try{zu(a,function(S,k){let z=S;h(S)&&(z=Xe(S)),u.push(m+k+"="+encodeURIComponent(z))})}catch(S){throw u.push(m+"type="+encodeURIComponent("_badmap")),S}}function Xs(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Xs,Ba),Xs.prototype.g=function(){return new Zs(this.l,this.j)},Xs.prototype.i=function(a){return function(){return a}}({});function Zs(a,u){se.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zs,se),t=Zs.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Li(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Li(this)),this.g&&(this.readyState=3,Li(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Vi(this):Li(this),this.readyState==3&&Xu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vi(this))},t.Qa=function(a){this.g&&(this.response=a,Vi(this))},t.ga=function(){this.g&&Vi(this)};function Vi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Li(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Li(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Zu(a){let u="";return te(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ja(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Zu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,u,f))}function Be(a){se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Be,se);var hy=/^https?$/i,dy=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qa.g(),this.v=this.o?Cu(this.o):Cu(qa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){eh(this,k);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)f.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),S=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(dy,u,void 0))||m||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of f)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{rh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){eh(this,k)}};function eh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,th(a),eo(a)}function th(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),eo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eo(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?nh(this):this.bb())},t.bb=function(){nh(this)};function nh(a){if(a.h&&typeof o!="undefined"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)it(a.Ea,0,a);else if(pe(a,"readystatechange"),un(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=z===0){var S=String(a.D).match(Ku)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),m=!hy.test(S?S.toLowerCase():"")}f=m}if(f)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var k=2<un(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",th(a)}}finally{eo(a)}}}}function eo(a,u){if(a.g){rh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||pe(a,"ready");try{f.onreadystatechange=m}catch{}}}function rh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ot(u)}};function ih(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function fy(a){const u={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(B(a[m]))continue;var f=R(a[m]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[S]||[];u[S]=k,k.push(f)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function sh(a){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,a),this.cb=Mi("retryDelaySeedMs",1e4,a),this.Wa=Mi("forwardChannelMaxRetries",2,a),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bu(a&&a.concurrentRequestLimit),this.Da=new cy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){pt(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=ph(this,null,this.W),no(this)};function Ya(a){if(oh(a),a.G==3){var u=a.U++,f=cn(a.I);if(Le(f,"SID",a.K),Le(f,"RID",u),Le(f,"TYPE","terminate"),Fi(a,f),u=new Cn(a,a.j,u),u.L=2,u.v=Ys(cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=gh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Gs(u)}fh(a)}function to(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function oh(a){to(a),a.u&&(l.clearTimeout(a.u),a.u=null),ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function no(a){if(!$u(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ee||Lt(),_e||(Ee(),_e=!0),bt.add(u,a),a.B=0}}function py(a,u){return ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Pi(g(a.Ga,a,u),dh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new Cn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=E(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=lh(this,S,u),f=cn(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),Fi(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(Zu(k)))+"&"+u:this.m&&Ja(f,this.m,k)),Qa(this.h,S),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",u),Le(f,"SID","null"),S.T=!0,za(S,f,null)):za(S,f,u),this.G=2}}else this.G==3&&(a?ah(this,a):this.i.length==0||$u(this.h)||ah(this))};function ah(a,u){var f;u?f=u.l:f=a.U++;const m=cn(a.I);Le(m,"SID",a.K),Le(m,"RID",f),Le(m,"AID",a.T),Fi(a,m),a.m&&a.o&&Ja(m,a.m,a.o),f=new Cn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=lh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qa(a.h,f),za(f,m,u)}function Fi(a,u){a.H&&te(a.H,function(f,m){Le(u,m,f)}),a.l&&zu({},function(f,m){Le(u,m,f)})}function lh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var S=a.i;let k=-1;for(;;){const z=["count="+f];k==-1?0<f?(k=S[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let xe=!0;for(let Ze=0;Ze<f;Ze++){let Se=S[Ze].g;const st=S[Ze].map;if(Se-=k,0>Se)k=Math.max(0,S[Ze].g-100),xe=!1;else try{uy(st,z,"req"+Se+"_")}catch{m&&m(st)}}if(xe){m=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function ch(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ee||Lt(),_e||(Ee(),_e=!0),bt.add(u,a),a.v=0}}function Xa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Pi(g(a.Fa,a),dh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Pi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),to(this),uh(this))};function Za(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function uh(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=cn(a.qa);Le(u,"RID","rpc"),Le(u,"SID",a.K),Le(u,"AID",a.T),Le(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(u,"TO",a.ja),Le(u,"TYPE","xmlhttp"),Fi(a,u),a.m&&a.o&&Ja(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ys(cn(u)),f.m=null,f.P=!0,Mu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,to(this),Xa(this),pt(19))};function ro(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function hh(a,u){var f=null;if(a.g==u){ro(a),Za(a),a.g=null;var m=2}else if(Ga(a.h,u))f=u.D,qu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;m=zs(),pe(m,new Du(m,f)),no(a)}else ch(a);else if(S=u.s,S==3||S==0&&0<u.X||!(m==1&&py(a,u)||m==2&&Xa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:cr(a,5);break;case 4:cr(a,10);break;case 3:cr(a,6);break;default:cr(a,2)}}}function dh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function cr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const S=!m;m=new lr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Qs(m,"https"),Ys(m),S?ay(m.toString(),f):ly(m.toString(),f)}else pt(2);a.G=0,a.l&&a.l.sa(u),fh(a),oh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function fh(a){if(a.G=0,a.ka=[],a.l){const u=Hu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function ph(a,u,f){var m=f instanceof lr?cn(f):new lr(f);if(m.g!="")u&&(m.g=u+"."+m.g),Js(m,m.s);else{var S=l.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new lr(null);m&&Qs(k,m),u&&(k.g=u),S&&Js(k,S),f&&(k.l=f),m=k}return f=a.D,u=a.ya,f&&u&&Le(m,f,u),Le(m,"VER",a.la),Fi(a,m),m}function gh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Be(new Xs({eb:f})):new Be(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mh(){}t=mh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function io(){}io.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){se.call(this),this.g=new sh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Lr(this)}C(Rt,se),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Ya(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xe(a),a=f);u.i.push(new Y_(u.Ya++,a)),u.G==3&&no(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Ya(this.g),delete this.g,Rt.aa.N.call(this)};function _h(a){$a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(_h,$a);function yh(){ja.call(this),this.status=1}C(yh,ja);function Lr(a){this.g=a}C(Lr,mh),Lr.prototype.ua=function(){pe(this.g,"a")},Lr.prototype.ta=function(a){pe(this.g,new _h(a))},Lr.prototype.sa=function(a){pe(this.g,new yh)},Lr.prototype.ra=function(){pe(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Fm=function(){return new io},Mm=function(){return zs()},Lm=or,sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,So=Ks,Nu.COMPLETE="complete",Vm=Nu,Pu.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",se.prototype.listen=se.prototype.K,Wi=Pu,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Nm=Be}).apply(typeof ho!="undefined"?ho:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const nf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Kc("@firebase/firestore");function zr(){return kr.logLevel}function Z(t,...e){if(kr.logLevel<=ye.DEBUG){const n=e.map(iu);kr.debug(`Firestore (${Ii}): ${t}`,...n)}}function In(t,...e){if(kr.logLevel<=ye.ERROR){const n=e.map(iu);kr.error(`Firestore (${Ii}): ${t}`,...n)}}function fi(t,...e){if(kr.logLevel<=ye.WARN){const n=e.map(iu);kr.warn(`Firestore (${Ii}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Ue(t,e){t||ge()}function be(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class SA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CA{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new Um(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new ct(e)}}class PA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class kA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new PA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ue(this.o===void 0);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new OA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=DA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new It(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new It(0,0))}static max(){return new de(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Is.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Is?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Is{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae(G.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const NA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Is{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return NA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ae(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ae(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ae(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ae(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe($e.fromString(e))}static fromName(e){return new oe($e.fromString(e).popFirst(5))}static empty(){return new oe($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new $e(e.slice()))}}function VA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new It(n+1,0):new It(n,r));return new Yn(i,oe.empty(),e)}function LA(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(de.min(),oe.empty(),-1)}static max(){return new Yn(de.max(),oe.empty(),-1)}}function MA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t){if(t.code!==G.FAILED_PRECONDITION||t.message!==FA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function BA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ka.oe=-1;function Oa(t){return t==null}function oc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rf(e)),e=jA(t.get(n),e);return rf(e)}function jA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function rf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:et.RED,this.left=i!=null?i:et.EMPTY,this.right=s!=null?s:et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new of(this.data.getIterator())}getIteratorFrom(e){return new of(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class of{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Hn([])}unionWith(e){let n=new Je(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Hn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new $m("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const HA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=HA.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zn(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xa(t){const e=t.mapValue.fields.__previous_value__;return su(e)?xa(e):e}function bs(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,i,s,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class As{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:WA(t)?9007199254740991:KA(t)?10:11:ge()}function on(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bs(t).isEqual(bs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xn(i.timestampValue),l=Xn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zn(i.bytesValue).isEqual(Zn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),l=qe(s.doubleValue);return o===l?oc(o)===oc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sf(o)!==sf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!on(o[c],l[c])))return!1;return!0}(t,e);default:return ge()}}function Rs(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function gi(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=qe(s.integerValue||s.doubleValue),c=qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return af(t.timestampValue,e.timestampValue);case 4:return af(bs(t),bs(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Zn(s),c=Zn(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ie(l[h],c[h]);if(d!==0)return d}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ie(qe(s.latitude),qe(o.latitude));return l!==0?l:Ie(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lf(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,c,h,d;const p=s.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=Ie(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:lf(v,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===po.mapValue&&o===po.mapValue)return 0;if(s===po.mapValue)return 1;if(o===po.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ie(c[p],d[p]);if(g!==0)return g;const v=gi(l[c[p]],h[d[p]]);if(v!==0)return v}return Ie(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function af(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Xn(t),r=Xn(e),i=Ie(n.seconds,r.seconds);return i!==0?i:Ie(n.nanos,r.nanos)}function lf(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=gi(n[i],r[i]);if(s)return s}return Ie(n.length,r.length)}function mi(t){return ac(t)}function ac(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ac(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ac(n.fields[o])}`;return i+"}"}(t.mapValue):ge()}function Co(t){switch(er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xa(t);return e?16+Co(e):16;case 5:return 2*t.stringValue.length;case 6:return Zn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Co(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Bs(r.fields,(s,o)=>{i+=s.length+Co(o)}),i}(t.mapValue);default:throw ge()}}function lc(t){return!!t&&"integerValue"in t}function ou(t){return!!t&&"arrayValue"in t}function cf(t){return!!t&&"nullValue"in t}function uf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function KA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=os(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=os(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Al(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Yt(os(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,de.min(),de.min(),de.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,de.min(),de.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,de.min(),de.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function hf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function GA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{}class Qe extends jm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JA(e,n,r):n==="array-contains"?new ZA(e,r):n==="in"?new eR(e,r):n==="not-in"?new tR(e,r):n==="array-contains-any"?new nR(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YA(e,r):new XA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gi(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends jm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return qm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qm(t){return t.op==="and"}function Hm(t){return QA(t)&&qm(t)}function QA(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function cc(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(Hm(t))return t.filters.map(e=>cc(e)).join(",");{const e=t.filters.map(n=>cc(n)).join(",");return`${t.op}(${e})`}}function zm(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&zm(o,i.filters[l]),!0):!1}(t,e):void ge()}function Km(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${mi(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(Km).join(" ,")+"}"}(t):"Filter"}class JA extends Qe{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class YA extends Qe{constructor(e,n){super(e,"in",n),this.keys=Wm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XA extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Wm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class ZA extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&Rs(n.arrayValue,this.value)}}class eR extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Rs(this.value.arrayValue,n)}}class tR extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Rs(this.value.arrayValue,n)}}class nR extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Rs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function ff(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rR(t,e,n,r,i,s,o)}function au(t){const e=be(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mi(r)).join(",")),e.ue=n}return e.ue}function lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function uc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iR(t,e,n,r,i,s,o,l){return new Da(t,e,n,r,i,s,o,l)}function cu(t){return new Da(t)}function pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sR(t){return t.collectionGroup!==null}function as(t){const e=be(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(_t.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new na(s,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new na(_t.keyField(),r))}return e.ce}function rn(t){const e=be(t);return e.le||(e.le=oR(e,as(t))),e.le}function oR(t,e){if(t.limitType==="F")return ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new na(i.field,s)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hc(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return lu(rn(t),rn(e))&&t.limitType===e.limitType}function Gm(t){return`${au(rn(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Km(i)).join(", ")}]`),Oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>mi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>mi(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Va(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of as(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const h=hf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,as(r),i)||r.endAt&&!function(o,l,c){const h=hf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,as(r),i))}(t,e)}function aR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qm(t){return(e,n)=>{let r=!1;for(const i of as(t)){const s=lR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lR(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?gi(c,h):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new je(oe.comparator);function tr(){return cR}const Jm=new je(oe.comparator);function Gi(...t){let e=Jm;for(const n of t)e=e.insert(n.key,n);return e}function uR(t){let e=Jm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return ls()}function Ym(){return ls()}function ls(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}new je(oe.comparator);const hR=new Je(oe.comparator);function Re(...t){let e=hR;for(const n of t)e=e.add(n);return e}const dR=new Je(Ie);function fR(){return dR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function gR(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this._=void 0}}function mR(t,e,n){return t instanceof dc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&su(s)&&(s=xa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ra?Xm(t,e):t instanceof ia?Zm(t,e):function(i,s){const o=yR(i,s),l=gf(o)+gf(i.Pe);return lc(o)&&lc(i.Pe)?gR(l):pR(i.serializer,l)}(t,e)}function _R(t,e,n){return t instanceof ra?Xm(t,e):t instanceof ia?Zm(t,e):n}function yR(t,e){return t instanceof fc?function(r){return lc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class dc extends La{}class ra extends La{constructor(e){super(),this.elements=e}}function Xm(t,e){const n=e_(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends La{constructor(e){super(),this.elements=e}}function Zm(t,e){let n=e_(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class fc extends La{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gf(t){return qe(t.integerValue||t.doubleValue)}function e_(t){return ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ra&&i instanceof ra||r instanceof ia&&i instanceof ia?pi(r.elements,i.elements,on):r instanceof fc&&i instanceof fc?on(r.Pe,i.Pe):r instanceof dc&&i instanceof dc}(t.transform,e.transform)}class Tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function t_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wR(t.key,Tr.none()):new hu(t.key,t.data,Tr.none());{const n=t.data,r=Yt.empty();let i=new Je(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ma(t.key,r,new Hn(i.toArray()),Tr.none())}}function ER(t,e,n){t instanceof hu?function(i,s,o){const l=i.value.clone(),c=_f(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ma?function(i,s,o){if(!Po(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_f(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(n_(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function cs(t,e,n,r){return t instanceof hu?function(s,o,l,c){if(!Po(s.precondition,o))return l;const h=s.value.clone(),d=yf(s.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ma?function(s,o,l,c){if(!Po(s.precondition,o))return l;const h=yf(s.fieldTransforms,c,o),d=o.data;return d.setAll(n_(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Po(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pi(r,i,(s,o)=>vR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hu extends uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ma extends uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _f(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,_R(o,l,n[i]))}return r}function yf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mR(s,o,e))}return r}class wR extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ER(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ym();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=t_(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>mf(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>mf(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Te;function r_(t){if(t===void 0)return In("GRPC error has no .code"),G.UNKNOWN;switch(t){case Ke.OK:return G.OK;case Ke.CANCELLED:return G.CANCELLED;case Ke.UNKNOWN:return G.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return G.INTERNAL;case Ke.UNAVAILABLE:return G.UNAVAILABLE;case Ke.UNAUTHENTICATED:return G.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case Ke.NOT_FOUND:return G.NOT_FOUND;case Ke.ALREADY_EXISTS:return G.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return G.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case Ke.ABORTED:return G.ABORTED;case Ke.OUT_OF_RANGE:return G.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return G.UNIMPLEMENTED;case Ke.DATA_LOSS:return G.DATA_LOSS;default:return ge()}}(Te=Ke||(Ke={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new Er([4294967295,4294967295],0);function vf(t){const e=AR().encode(t),n=new Dm;return n.update(e),new Uint8Array(n.digest())}function Ef(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Er([n,r],0),new Er([i,s],0)]}class du{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qi(`Invalid padding: ${n}`);if(r<0)throw new Qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Er.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Er.fromNumber(r)));return i.compare(RR)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=vf(e),[r,i]=Ef(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new du(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=vf(e),[r,i]=Ef(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fa(de.min(),i,new je(Ie),tr(),Re())}}class $s{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $s(r,n,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class i_{constructor(e,n){this.targetId=e,this.me=n}}class s_{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wf{constructor(){this.fe=0,this.ge=Tf(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),n=Re(),r=Re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ge()}}),new $s(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Tf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SR{constructor(e){this.Le=e,this.Be=new Map,this.ke=tr(),this.qe=go(),this.Qe=go(),this.Ke=new je(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(uc(s))if(r===0){const o=new oe(s.path);this.We(n,o,dt.newNoDocument(o,de.min()))}else Ue(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Zn(r).toUint8Array()}catch(c){if(c instanceof $m)return fi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new du(o,i,s)}catch(c){return fi(c instanceof Qi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&uc(l.target)){const c=new oe(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,dt.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Re();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Fa(e,n,this.Ke,this.ke,r);return this.ke=tr(),this.qe=go(),this.Qe=go(),this.Ke=new je(Ie),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new wf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Je(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function go(){return new je(oe.comparator)}function Tf(){return new je(oe.comparator)}const CR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),kR=(()=>({and:"AND",or:"OR"}))();class OR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pc(t,e){return t.useProto3Json||Oa(e)?e:{value:e}}function xR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oi(t){return Ue(!!t),de.fromTimestamp(function(n){const r=Xn(n);return new It(r.seconds,r.nanos)}(t))}function NR(t,e){return gc(t,e).canonicalString()}function gc(t,e){const n=function(i){return new $e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function o_(t){const e=$e.fromString(t);return Ue(h_(e)),e}function Rl(t,e){const n=o_(e);if(n.get(1)!==t.databaseId.projectId)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(l_(n))}function a_(t,e){return NR(t.databaseId,e)}function VR(t){const e=o_(t);return e.length===4?$e.emptyPath():l_(e)}function If(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(Ue(d===void 0||typeof d=="string"),rt.fromBase64String(d||"")):(Ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array),rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?G.UNKNOWN:r_(h.code);return new ae(d,h.message||"")}(o);n=new s_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Rl(t,r.document.name),s=oi(r.document.updateTime),o=r.document.createTime?oi(r.document.createTime):de.min(),l=new Yt({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(i,s,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ko(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Rl(t,r.document),s=r.readTime?oi(r.readTime):de.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ko([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Rl(t,r.document),s=r.removedTargetIds||[];n=new ko([],s,i,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bR(i,s),l=r.targetId;n=new i_(l,o)}}return n}function MR(t,e){return{documents:[a_(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=a_(t,i);const s=function(h){if(h.length!==0)return u_(an.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Wr(g.field),direction:$R(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:i}}function UR(t){let e=VR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=c_(p);return g instanceof an&&Hm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new na(Gr(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Oa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new ta(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new ta(v,g)}(n.endAt)),iR(e,i,o,s,l,"F",c,h)}function BR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gr(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gr(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gr(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Gr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>c_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function $R(t){return CR[t]}function jR(t){return PR[t]}function qR(t){return kR[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return _t.fromServerFormat(t.fieldPath)}function u_(t){return t instanceof Qe?function(n){if(n.op==="=="){if(uf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(cf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(cf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:jR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(i=>u_(i));return r.length===1?r[0]:{compositeFilter:{op:qR(n.op),filters:r}}}(t):ge()}function h_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r,i,s=de.min(),o=de.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.ht=e}}function zR(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.ln=new WR}addToCollectionParentIndex(e,n){return this.ln.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class WR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je($e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new _i(0)}static Qn(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af([t,e],[n,r]){const i=Ie(t,n);return i===0?Ie(e,r):i}class GR{constructor(e){this.Gn=e,this.buffer=new Je(Af),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Af(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Pa(n)}await this.Yn(3e5)})}}class JR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(ka.oe);const r=new GR(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(bf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),zr()<=ye.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function YR(t,e){return new JR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&cs(r.mutation,i,Hn.empty(),It.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Re()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gi();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=tr();const o=ls(),l=function(){return ls()}();return n.forEach((c,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof Ma)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),cs(d.mutation,h,d.mutation.getFieldMask(),It.now())):o.set(h.key,Hn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new ZR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ls();let i=new je((o,l)=>o-l),s=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Hn.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(i.get(l.batchId)||Re()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Ym();d.forEach(g=>{if(!s.has(g)){const v=t_(n.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(_r());let l=-1,c=s;return o.next(h=>V.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Re())).next(d=>({batchId:l,changes:uR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=Gi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Gi();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,c=>{const h=function(p,g){return new Da(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let l=Gi();return o.forEach((c,h)=>{const d=s.get(c);d!==void 0&&cs(d.mutation,h,Hn.empty(),It.now()),Va(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return V.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:oi(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:zR(i.bundledQuery),readTime:oi(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.overlays=new je(oe.comparator),this.Er=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=_r(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=_r(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return V.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IR(n,r));let s=this.Er.get(n);s===void 0&&(s=Re(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.dr=new Je(Ye.Ar),this.Rr=new Je(Ye.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ye(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new oe(new $e([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new oe(new $e([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=Re();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return oe.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Je(Ye.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new Ye(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(Ie);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new oe(s),0);let l=new Je(Ie);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.br)),!0)},o),V.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ye(n,0),i=this.vr.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Nr=e,this.docs=function(){return new je(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=tr();const o=n.path,l=new oe(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||MA(LA(d),r)<=0||(i.has(d.key)||Va(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ge()}Lr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oS(this)}getSize(e){return V.resolve(this.size)}}class oS extends XR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.persistence=e,this.Br=new Dr(n=>au(n),lu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new fu,this.targetCount=0,this.Qr=_i.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),V.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Un(n),V.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ka(0),this.Ur=!1,this.Ur=!0,this.Wr=new rS,this.referenceDelegate=e(this),this.Gr=new aS(this),this.indexManager=new KR,this.remoteDocumentCache=function(i){return new sS(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new HR(n),this.jr=new tS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new iS(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new lS(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class lS extends UA{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Zr=new fu,this.Xr=null}static ei(e){return new pu(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),V.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const i=oe.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return V.or([()=>V.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class sa{constructor(e,n){this.persistence=e,this.ri=new Dr(r=>$A(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=YR(this,n)}static ei(e,n){return new sa(e,n)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return V.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?V.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,de.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Co(e.data.value)),n}ir(e,n,r){return V.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=Re(),i=Re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gu(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return JT()?8:BA(ft())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new cS;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(zr()<=ye.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(zr()<=ye.DEBUG&&Z("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(zr()<=ye.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):V.resolve())}Xi(e,n){if(pf(n))return V.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hc(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Re(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,o,c.readTime)?this.Xi(e,hc(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,i){return pf(n)||i.isEqual(de.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?V.resolve(null):(zr()<=ye.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.os(e,o,n,VA(i,-1)).next(l=>l))})}rs(e,n){let r=new Je(Qm(e));return n.forEach((i,s)=>{Va(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return zr()<=ye.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Yn.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new je(Ie),this.cs=new Dr(s=>au(s),lu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function dS(t,e,n,r){return new hS(t,e,n,r)}async function f_(t,e){const n=be(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=Re();for(const h of i){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:l}))})})}function p_(t){const e=be(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function fS(t,e){const n=be(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(rt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),i=i.insert(p,v),function(x,O,F){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,v,d)&&l.push(n.Gr.updateTargetData(s,v))});let c=tr(),h=Re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(pS(s,o,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(de.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(n.us=i,s))}function pS(t,e,n){let r=Re(),i=Re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=tr();return n.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:o,Es:i}})}function gS(t,e){const n=be(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function mc(t,e,n){const r=be(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Rf(t,e,n){const r=be(t);let i=de.min(),s=Re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=be(c),g=p.cs.get(d);return g!==void 0?V.resolve(p.us.get(g)):p.Gr.getTargetData(h,d)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:de.min(),n?s:Re())).next(l=>(mS(r,aR(e),l),{documents:l,ds:s})))}function mS(t,e,n){let r=t.ls.get(e)||de.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class Sf{constructor(){this.activeTargetIds=fR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _S{constructor(){this._o=new Sf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Sf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo=null;function Sl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class wS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=Sl(),c=this.No(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,s,o),this.Bo(n,c,h,i).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw fi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=vS[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Sl();return new Promise((o,l)=>{const c=new Nm;c.setWithCredentials(!0),c.listenOnce(Vm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case So.NO_ERROR:const d=c.getResponseJson();Z(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case So.TIMEOUT:Z(at,`RPC '${e}' ${s} timed out`),l(new ae(G.DEADLINE_EXCEEDED,"Request time out"));break;case So.HTTP_ERROR:const p=c.getStatus();if(Z(at,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const C=function(O){const F=O.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(F)>=0?F:G.UNKNOWN}(v.status);l(new ae(C,v.message))}else l(new ae(G.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ae(G.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{Z(at,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);Z(at,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",h,r,15)})}qo(e,n,r){const i=Sl(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fm(),l=Mm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Z(at,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,v=!1;const C=new ES({Eo:O=>{v?Z(at,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(g||(Z(at,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Z(at,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},Ao:()=>p.close()}),x=(O,F,B)=>{O.listen(F,j=>{try{B(j)}catch($){setTimeout(()=>{throw $},0)}})};return x(p,Wi.EventType.OPEN,()=>{v||(Z(at,`RPC '${e}' stream ${i} transport opened.`),C.So())}),x(p,Wi.EventType.CLOSE,()=>{v||(v=!0,Z(at,`RPC '${e}' stream ${i} transport closed`),C.Do())}),x(p,Wi.EventType.ERROR,O=>{v||(v=!0,fi(at,`RPC '${e}' stream ${i} transport errored:`,O),C.Do(new ae(G.UNAVAILABLE,"The operation could not be completed")))}),x(p,Wi.EventType.MESSAGE,O=>{var F;if(!v){const B=O.data[0];Ue(!!B);const j=B,$=(j==null?void 0:j.error)||((F=j[0])===null||F===void 0?void 0:F.error);if($){Z(at,`RPC '${e}' stream ${i} received error:`,$);const Y=$.status;let te=function(_){const b=Ke[_];if(b!==void 0)return r_(b)}(Y),A=$.message;te===void 0&&(te=G.INTERNAL,A="Unknown error status: "+Y+" with message "+$.message),v=!0,C.Do(new ae(te,A)),p.close()}else Z(at,`RPC '${e}' stream ${i} received:`,B),C.vo(B)}}),x(l,Lm.STAT_EVENT,O=>{O.stat===sc.PROXY?Z(at,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===sc.NOPROXY&&Z(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function Cl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){return new OR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,i,s,o,l,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new m_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===G.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new ae(G.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IS extends TS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=LR(this.serializer,e),r=function(s){if(!("targetChange"in s))return de.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?oi(o.readTime):de.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=If(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=uc(c)?{documents:MR(s,c)}:{query:FR(s,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=DR(s,o.resumeToken);const h=pc(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=xR(s,o.snapshotVersion.toTimestamp());const h=pc(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=BR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=If(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,gc(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ae(G.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,gc(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae(G.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class AS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(In(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{qs(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=be(c);h.k_.add(4),await js(h),h.K_.set("Unknown"),h.k_.delete(4),await Ua(h)}(this))})}),this.K_=new AS(r,i)}}async function Ua(t){if(qs(t))for(const e of t.q_)await e(!0)}async function js(t){for(const e of t.q_)await e(!1)}function __(t,e){const n=be(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),vu(n)?yu(n):Ai(n).s_()&&_u(n,e))}function mu(t,e){const n=be(t),r=Ai(n);n.B_.delete(e),r.s_()&&y_(n,e),n.B_.size===0&&(r.s_()?r.a_():qs(n)&&n.K_.set("Unknown"))}function _u(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ai(t).V_(e)}function y_(t,e){t.U_.xe(e),Ai(t).m_(e)}function yu(t){t.U_=new SR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ai(t).start(),t.K_.F_()}function vu(t){return qs(t)&&!Ai(t).i_()&&t.B_.size>0}function qs(t){return be(t).k_.size===0}function v_(t){t.U_=void 0}async function SS(t){t.K_.set("Online")}async function CS(t){t.B_.forEach((e,n)=>{_u(t,e)})}async function PS(t,e){v_(t),vu(t)?(t.K_.O_(e),yu(t)):t.K_.set("Unknown")}async function kS(t,e,n){if(t.K_.set("Online"),e instanceof s_&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pf(t,r)}else if(e instanceof ko?t.U_.$e(e):e instanceof i_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(de.min()))try{const r=await p_(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.B_.get(h);d&&s.B_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=s.B_.get(c);if(!d)return;s.B_.set(c,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),y_(s,c);const p=new zn(d.target,c,h,d.sequenceNumber);_u(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Pf(t,r)}}async function Pf(t,e,n){if(!bi(e))throw e;t.k_.add(1),await js(t),t.K_.set("Offline"),n||(n=()=>p_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Ua(t)})}async function kf(t,e){const n=be(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=qs(n);n.k_.add(3),await js(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Ua(n)}async function OS(t,e){const n=be(t);e?(n.k_.delete(2),await Ua(n)):e||(n.k_.add(2),await js(n),n.K_.set("Unknown"))}function Ai(t){return t.W_||(t.W_=function(n,r,i){const s=be(n);return s.b_(),new IS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:SS.bind(null,t),mo:CS.bind(null,t),po:PS.bind(null,t),R_:kS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),vu(t)?yu(t):t.K_.set("Unknown")):(await t.W_.stop(),v_(t))})),t.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Eu(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function E_(t,e){if(In("AsyncQueue",`${e}: ${t}`),bi(t))return new ae(G.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{static emptySet(e){return new ai(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Gi(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.z_=new je(oe.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yi{constructor(e,n,r,i,s,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new yi(e,n,ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class DS{constructor(){this.queries=xf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=be(n),s=i.queries;i.queries=xf(),s.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ae(G.ABORTED,"Firestore shutting down"))}}function xf(){return new Dr(t=>Gm(t),Na)}async function NS(t,e){const n=be(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new xS,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=E_(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&wu(n)}async function VS(t,e){const n=be(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LS(t,e){const n=be(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&wu(n)}function MS(t,e,n){const r=be(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function wu(t){t.X_.forEach(e=>{e.next()})}var _c,Df;(Df=_c||(_c={})).na="default",Df.Cache="cache";class FS{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==_c.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.key=e}}class T_{constructor(e){this.key=e}}class US{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Re(),this.mutatedKeys=Re(),this.Va=Qm(e),this.ma=new ai(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Of,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),v=Va(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),x=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let O=!1;g&&v?g.data.isEqual(v.data)?C!==x&&(r.track({type:3,doc:v}),O=!0):this.ya(g,v)||(r.track({type:2,doc:v}),O=!0,(c&&this.Va(v,c)>0||h&&this.Va(v,h)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),O=!0):g&&!v&&(r.track({type:1,doc:g}),O=!0,(c||h)&&(l=!0)),O&&(v?(o=o.add(v),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(v,C){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return x(v)-x(C)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,h=c!==this.Aa;return this.Aa=c,o.length!==0||h?{snapshot:new yi(this.query,e.ma,s,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Of,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Re(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new T_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new w_(r))}),n}va(e){this.da=e.ds,this.Ra=Re();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return yi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class BS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.Fa=!1}}class jS{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Dr(l=>Gm(l),Na),this.Oa=new Map,this.Na=new Set,this.La=new je(oe.comparator),this.Ba=new Map,this.ka=new fu,this.qa={},this.Qa=new Map,this.Ka=_i.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function qS(t,e,n=!0){const r=S_(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await I_(r,e,n,!0),i}async function HS(t,e){const n=S_(t);await I_(n,e,!0,!1)}async function I_(t,e,n,r){const i=await gS(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await zS(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&__(t.remoteStore,i),l}async function zS(t,e,n,r,i){t.Ua=(p,g,v)=>async function(x,O,F,B){let j=O.view.ga(F);j.ss&&(j=await Rf(x.localStore,O.query,!1).then(({documents:A})=>O.view.ga(A,j)));const $=B&&B.targetChanges.get(O.targetId),Y=B&&B.targetMismatches.get(O.targetId)!=null,te=O.view.applyChanges(j,x.isPrimaryClient,$,Y);return Vf(x,O.targetId,te.ba),te.snapshot}(t,p,g,v);const s=await Rf(t.localStore,e,!0),o=new US(e,s.ds),l=o.ga(s.documents),c=$s.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,c);Vf(t,n,h.ba);const d=new BS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function KS(t,e,n){const r=be(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Na(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&mu(r.remoteStore,i.targetId),yc(r,i.targetId)}).catch(Pa)):(yc(r,i.targetId),await mc(r.localStore,i.targetId,!0))}async function WS(t,e){const n=be(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mu(n.remoteStore,r.targetId))}async function b_(t,e){const n=be(t);try{const r=await fS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?Ue(o.Fa):i.removedDocuments.size>0&&(Ue(o.Fa),o.Fa=!1))}),await R_(n,r,e)}catch(r){await Pa(r)}}function Nf(t,e,n){const r=be(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=be(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.J_)g.ea(l)&&(h=!0)}),h&&wu(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GS(t,e,n){const r=be(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new je(oe.comparator);o=o.insert(s,dt.newNoDocument(s,de.min()));const l=Re().add(s),c=new Fa(de.min(),new Map,new je(Ie),o,l);await b_(r,c),r.La=r.La.remove(s),r.Ba.delete(e),Tu(r)}else await mc(r.localStore,e,!1).then(()=>yc(r,e,n)).catch(Pa)}function yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||A_(t,r)})}function A_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(mu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Tu(t))}function Vf(t,e,n){for(const r of n)r instanceof w_?(t.ka.addReference(r.key,e),QS(t,r)):r instanceof T_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||A_(t,r.key)):ge()}function QS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(r),Tu(t))}function Tu(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new oe($e.fromString(e)),r=t.Ka.next();t.Ba.set(r,new $S(n)),t.La=t.La.insert(n,r),__(t.remoteStore,new zn(rn(cu(n.path)),r,"TargetPurposeLimboResolution",ka.oe))}}async function R_(t,e,n){const r=be(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=gu.zi(c.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(c,h){const d=be(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,g=>V.forEach(g.Wi,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>V.forEach(g.Gi,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!bi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=d.us.get(g),C=v.snapshotVersion,x=v.withLastLimboFreeSnapshotVersion(C);d.us=d.us.insert(g,x)}}}(r.localStore,s))}async function JS(t,e){const n=be(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await f_(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ae(G.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await R_(n,r.Ts)}}function YS(t,e){const n=be(t),r=n.Ba.get(e);if(r&&r.Fa)return Re().add(r.key);{let i=Re();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function S_(t){const e=be(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=b_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GS.bind(null,e),e.Ma.R_=LS.bind(null,e.eventManager),e.Ma.Wa=MS.bind(null,e.eventManager),e}class oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=g_(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return dS(this.persistence,new uS,e.initialUser,this.serializer)}ja(e){return new d_(pu.ei,this.serializer)}za(e){return new _S}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oa.provider={build:()=>new oa};class XS extends oa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ue(this.persistence.referenceDelegate instanceof sa);const r=this.persistence.referenceDelegate.garbageCollector;return new QR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new d_(r=>sa.ei(r,n),this.serializer)}}class vc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DS}()}createDatastore(e){const n=g_(e.databaseInfo.databaseId),r=function(s){return new wS(s)}(e.databaseInfo);return function(s,o,l,c){return new bS(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new RS(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Nf(this.syncEngine,n,0),function(){return Cf.p()?new Cf:new yS}())}createSyncEngine(e,n){return function(i,s,o,l,c,h,d){const p=new jS(i,s,o,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=be(i);Z("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await js(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vc.provider={build:()=>new vc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=Bm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=E_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await f_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tC(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>kf(e.remoteStore,i)),t._onlineComponents=e}async function tC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===G.FAILED_PRECONDITION||i.code===G.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;fi("Error using user provided cache. Falling back to memory cache: "+n),await Pl(t,new oa)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Pl(t,new XS(void 0));return t._offlineComponents}async function nC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Lf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Lf(t,new vc))),t._onlineComponents}async function rC(t){const e=await nC(t),n=e.eventManager;return n.onListen=qS.bind(null,e.syncEngine),n.onUnlisten=KS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WS.bind(null,e.syncEngine),n}function iC(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const d=new ZS({next:g=>{d.eu(),o.enqueueAndForget(()=>VS(s,p));const v=g.docs.has(l);!v&&g.fromCache?h.reject(new ae(G.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?h.reject(new ae(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new FS(cu(l.path),d,{includeMetadataChanges:!0,ua:!0});return NS(s,p)}(await rC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t,e,n){if(!n)throw new ae(G.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oC(t,e,n,r){if(e===!0&&r===!0)throw new ae(G.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ff(t){if(!oe.isDocumentKey(t))throw new ae(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Ec(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aC(t);throw new ae(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(G.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RA;switch(r.type){case"firstParty":return new kA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Mf.delete(n),r.terminate())}(this),Promise.resolve()}}function lC(t,e,n,r={}){var i;const s=(t=Ec(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ct.MOCK_USER;else{l=qT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ae(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(h)}t._authCredentials=new SA(new Um(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bu(this.firestore,e,this._query)}}class En{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}}class Ss extends bu{constructor(e,n,r){super(e,n,cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new oe(e))}withConverter(e){return new Ss(this.firestore,e,this._path)}}function jP(t,e,...n){if(t=ln(t),arguments.length===1&&(e=Bm.newId()),sC("doc","path",e),t instanceof Iu){const r=$e.fromString(e,...n);return Ff(r),new En(t,null,new oe(r))}{if(!(t instanceof En||t instanceof Ss))throw new ae(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Ff(r),new En(t.firestore,t instanceof Ss?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new m_(this,"async_queue_retry"),this.fu=()=>{const r=Cl();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new wr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!bi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Eu.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class P_ extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Bf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bf(e),this._firestoreClient=void 0,await e}}}function cC(t,e){const n=typeof t=="object"?t:Qg(),r=typeof t=="string"?t:e||"(default)",i=Gc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$T("firestore");s&&lC(i,...s)}return i}function uC(t){if(t._terminated)throw new ae(G.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hC(t),t._firestoreClient}function hC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,h,d){return new zA(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,C_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new eC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new aa(rt.fromBase64String(e))}catch(n){throw new ae(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new aa(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const pC=new RegExp("[~\\*/\\[\\]]");function gC(t,e,n){if(e.search(pC)>=0)throw $f(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new k_(...e.split("."))._internalPath}catch{throw $f(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $f(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ae(G.INVALID_ARGUMENT,l+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new En(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(x_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mC extends O_{data(){return super.data()}}function x_(t,e){return typeof e=="string"?gC(t,e):e instanceof k_?e._internalPath:e._delegate._internalPath}class _C{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>qe(o.doubleValue));return new fC(s)}convertGeoPoint(e){return new dC(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ue(h_(r));const i=new As(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||In(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D_ extends O_{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(x_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class vC extends D_{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){t=Ec(t,En);const e=Ec(t.firestore,P_);return iC(uC(e),t._key).then(n=>wC(e,t,n))}class EC extends _C{constructor(e){super(),this.firestore=e}convertBytes(e){return new aa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new En(this.firestore,null,n)}}function wC(t,e,n){const r=n.docs.get(e._key),i=new EC(t);return new D_(t,i,e._key,r,new yC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ii=i})(wi),di(new Sr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new P_(new CA(r.getProvider("auth-internal")),new xA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ae(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(h.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qn(nf,"4.7.5",e),Qn(nf,"4.7.5","esm2017")})();const TC={apiKey:"AIzaSyAelPqsl9W9ExLg6cPVJWbklyd_0yPZHr8",authDomain:"financetracker-f3bfb.firebaseapp.com",projectId:"financetracker-f3bfb",storageBucket:"financetracker-f3bfb.firebasestorage.app",messagingSenderId:"913190400469",appId:"1:913190400469:web:dfe1403f77bb72bbb50d5c"},N_=Gg(TC),V_=bA(N_),IC=cC(N_);var bC=Object.freeze(Object.defineProperty({__proto__:null,auth:V_,db:IC},Symbol.toStringTag,{value:"Module"})),kl=function(){const e=OT({scrollBehavior:()=>({left:0,top:0}),routes:DT,history:oT("/")});return e.beforeEach((n,r,i)=>{const s=n.matched.some(o=>o.meta.requiresAuth);return new Promise(o=>{fb(V_,l=>{s&&!l?i("/login"):i(),o()})})}),e};async function AC(t,e){const n=t(Rw);n.use(Aw,e);const r=typeof pl=="function"?await pl({}):pl;n.use(r);const i=Ei(typeof kl=="function"?await kl({store:r}):kl);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}const wc={xs:18,sm:24,md:32,lg:38,xl:46},Au={size:String};function Ru(t,e=wc){return he(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function RC(t,e){return t!==void 0&&t()||e}function HP(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Ji(t,e){return t!==void 0?e.concat(t()):e}function SC(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function zP(t,e,n,r,i,s){e.key=r+i;const o=ue(t,e,n);return i===!0?kp(o,s()):o}const jf="0 0 24 24",qf=t=>t,Ol=t=>`ionicons ${t}`,L_={"mdi-":t=>`mdi ${t}`,"icon-":qf,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Ol,"ion-ios":Ol,"ion-logo":Ol,"iconfont ":qf,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},M_={o_:"-outlined",r_:"-round",s_:"-sharp"},F_={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},CC=new RegExp("^("+Object.keys(L_).join("|")+")"),PC=new RegExp("^("+Object.keys(M_).join("|")+")"),Hf=new RegExp("^("+Object.keys(F_).join("|")+")"),kC=/^[Mm]\s?[-+]?\.?\d/,OC=/^img:/,xC=/^svguse:/,DC=/^ion-/,NC=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var la=Ds({name:"QIcon",props:{...Au,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=Os(),r=Ru(t),i=he(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=he(()=>{let o,l=t.name;if(l==="none"||!l)return{none:!0};if(n.iconMapFn!==null){const d=n.iconMapFn(l);if(d!==void 0)if(d.icon!==void 0){if(l=d.icon,l==="none"||!l)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(kC.test(l)===!0){const[d,p=jf]=l.split("|");return{svg:!0,viewBox:p,nodes:d.split("&&").map(g=>{const[v,C,x]=g.split("@@");return ue("path",{style:C,d:v,transform:x})})}}if(OC.test(l)===!0)return{img:!0,src:l.substring(4)};if(xC.test(l)===!0){const[d,p=jf]=l.split("|");return{svguse:!0,src:d.substring(7),viewBox:p}}let c=" ";const h=l.match(CC);if(h!==null)o=L_[h[1]](l);else if(NC.test(l)===!0)o=l;else if(DC.test(l)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(Hf.test(l)===!0){o="notranslate material-symbols";const d=l.match(Hf);d!==null&&(l=l.substring(6),o+=F_[d[1]]),c=l}else{o="notranslate material-icons";const d=l.match(PC);d!==null&&(l=l.substring(2),o+=M_[d[1]]),c=l}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?ue(t.tag,o,RC(e.default)):s.value.img===!0?ue(t.tag,o,Ji(e.default,[ue("img",{src:s.value.src})])):s.value.svg===!0?ue(t.tag,o,Ji(e.default,[ue("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?ue(t.tag,o,Ji(e.default,[ue("svg",{viewBox:s.value.viewBox},[ue("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),ue(t.tag,o,Ji(e.default,[s.value.content])))}}}),VC=Ds({name:"QAvatar",props:{...Au,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Ru(t),r=he(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=he(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[ue(la,{name:t.icon})]:void 0;return ue("div",{class:r.value,style:n.value},[ue("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},SC(e.default,s))])}}});const LC={size:{type:[String,Number],default:"1em"},color:String};function MC(t){return{cSize:he(()=>t.size in wc?`${wc[t.size]}px`:t.size),classes:he(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var U_=Ds({name:"QSpinner",props:{...LC,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=MC(t);return()=>ue("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[ue("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function FC(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function KP(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=vr(t);if(e)return e.$el||e}function UC(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function zf(t,e,n,r){n.modifiers.stop===!0&&Tg(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),l=document.createElement("span"),c=rw(t),{left:h,top:d,width:p,height:g}=e.getBoundingClientRect(),v=Math.sqrt(p*p+g*g),C=v/2,x=`${(p-v)/2}px`,O=s?x:`${c.left-h-C}px`,F=`${(g-v)/2}px`,B=s?F:`${c.top-d-C}px`;l.className="q-ripple__inner",FC(l,{height:`${v}px`,width:`${v}px`,transform:`translate3d(${O},${B},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(l),e.appendChild(o);const j=()=>{o.remove(),clearTimeout($)};n.abort.push(j);let $=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${x},${F},0) scale3d(1,1,1)`,l.style.opacity=.2,$=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,$=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(j),1)},275)},250)},50)}function Kf(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var BC=nw({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&zf(i,t,r,i.qKeyEvent===!0)},keystart:UC(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&Kl(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&zf(i,t,r,!0)},300)};Kf(r,e),t.__qripple=r,iw(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Kf(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),sw(e,"main"),delete t._qripple)}});const B_={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},$C=Object.keys(B_),jC={align:{type:String,validator:t=>$C.includes(t)}};function qC(t){return he(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${B_[e]}`})}function HC(t){return t.appContext.config.globalProperties.$router!==void 0}function WP(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Gf(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zC(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Qf(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KC(t,e){return Array.isArray(t)===!0?Qf(t,e):Array.isArray(e)===!0?Qf(e,t):t===e}function WC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(KC(t[n],e[n])===!1)return!1;return!0}const $_={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},GP={...$_,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function GC({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=Os(),{props:r,proxy:i,emit:s}=n,o=HC(n),l=he(()=>r.disable!==!0&&r.href!==void 0),c=he(e===!0?()=>o===!0&&r.disable!==!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&l.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),h=he(()=>c.value===!0?B(r.to):null),d=he(()=>h.value!==null),p=he(()=>l.value===!0||d.value===!0),g=he(()=>r.type==="a"||p.value===!0?"a":r.tag||t||"div"),v=he(()=>l.value===!0?{href:r.href,target:r.target}:d.value===!0?{href:h.value.href,target:r.target}:{}),C=he(()=>{if(d.value===!1)return-1;const{matched:Y}=h.value,{length:te}=Y,A=Y[te-1];if(A===void 0)return-1;const E=i.$route.matched;if(E.length===0)return-1;const _=E.findIndex(Gf.bind(null,A));if(_!==-1)return _;const b=Wf(Y[te-2]);return te>1&&Wf(A)===b&&E[E.length-1].path!==b?E.findIndex(Gf.bind(null,Y[te-2])):_}),x=he(()=>d.value===!0&&C.value!==-1&&zC(i.$route.params,h.value.params)),O=he(()=>x.value===!0&&C.value===i.$route.matched.length-1&&WC(i.$route.params,h.value.params)),F=he(()=>d.value===!0?O.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":x.value===!0?` ${r.activeClass}`:"":"");function B(Y){try{return i.$router.resolve(Y)}catch{}return null}function j(Y,{returnRouterError:te,to:A=r.to,replace:E=r.replace}={}){if(r.disable===!0)return Y.preventDefault(),Promise.resolve(!1);if(Y.metaKey||Y.altKey||Y.ctrlKey||Y.shiftKey||Y.button!==void 0&&Y.button!==0||r.target==="_blank")return Promise.resolve(!1);Y.preventDefault();const _=i.$router[E===!0?"replace":"push"](A);return te===!0?_:_.then(()=>{}).catch(()=>{})}function $(Y){if(d.value===!0){const te=A=>j(Y,A);s("click",Y,te),Y.defaultPrevented!==!0&&te()}else s("click",Y)}return{hasRouterLink:d,hasHrefLink:l,hasLink:p,linkTag:g,resolvedLink:h,linkIsActive:x,linkIsExactActive:O,linkClass:F,linkAttrs:v,getLink:B,navigateToRouterLink:j,navigateOnClick:$}}const Jf={none:0,xs:4,sm:8,md:16,lg:24,xl:32},QC={xs:8,sm:10,md:14,lg:20,xl:24},JC=["button","submit","reset"],YC=/[^\s]\/[^\s]/,XC=["flat","outline","push","unelevated"];function ZC(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const eP={...Au,...$_,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...XC.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...jC.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},tP={...eP,round:Boolean};function nP(t){const e=Ru(t,QC),n=qC(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:l}=GC({fallbackTag:"button"}),c=he(()=>{const O=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},O,{padding:t.padding.split(/\s+/).map(F=>F in Jf?Jf[F]+"px":F).join(" "),minWidth:"0",minHeight:"0"}):O}),h=he(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),d=he(()=>t.disable!==!0&&t.loading!==!0),p=he(()=>d.value===!0?t.tabindex||0:-1),g=he(()=>ZC(t,"standard")),v=he(()=>{const O={tabindex:p.value};return i.value===!0?Object.assign(O,o.value):JC.includes(t.type)===!0&&(O.type=t.type),s.value==="a"?(t.disable===!0?O["aria-disabled"]="true":O.href===void 0&&(O.role="button"),r.value!==!0&&YC.test(t.type)===!0&&(O.type=t.type)):t.disable===!0&&(O.disabled="",O["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(O,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),O}),C=he(()=>{let O;t.color!==void 0?t.flat===!0||t.outline===!0?O=`text-${t.textColor||t.color}`:O=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(O=`text-${t.textColor}`);const F=t.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${g.value} q-btn--${F}`+(O!==void 0?" "+O:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),x=he(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:C,style:c,innerClasses:x,attributes:v,hasLink:i,linkTag:s,navigateOnClick:l,isActionable:d}}const{passiveCapture:Dt}=Rr;let Br=null,$r=null,jr=null;var rP=Ds({name:"QBtn",props:{...tP,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=Os(),{classes:i,style:s,innerClasses:o,attributes:l,hasLink:c,linkTag:h,navigateOnClick:d,isActionable:p}=nP(t),g=li(null),v=li(null);let C=null,x,O=null;const F=he(()=>t.label!==void 0&&t.label!==null&&t.label!==""),B=he(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),j=he(()=>({center:t.round})),$=he(()=>{const K=Math.max(0,Math.min(100,t.percentage));return K>0?{transition:"transform 0.6s",transform:`translateX(${K-100}%)`}:{}}),Y=he(()=>{if(t.loading===!0)return{onMousedown:w,onTouchstart:w,onClick:w,onKeydown:w,onKeyup:w};if(p.value===!0){const K={onClick:A,onKeydown:E,onMousedown:b};if(r.$q.platform.has.touch===!0){const me=t.onTouchstart!==void 0?"":"Passive";K[`onTouchstart${me}`]=_}return K}return{onClick:Ur}}),te=he(()=>({ref:g,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...l.value,...Y.value}));function A(K){if(g.value!==null){if(K!==void 0){if(K.defaultPrevented===!0)return;const me=document.activeElement;if(t.type==="submit"&&me!==document.body&&g.value.contains(me)===!1&&me.contains(g.value)===!1){g.value.focus();const ke=()=>{document.removeEventListener("keydown",Ur,!0),document.removeEventListener("keyup",ke,Dt),g.value!==null&&g.value.removeEventListener("blur",ke,Dt)};document.addEventListener("keydown",Ur,!0),document.addEventListener("keyup",ke,Dt),g.value.addEventListener("blur",ke,Dt)}}d(K)}}function E(K){g.value!==null&&(n("keydown",K),Kl(K,[13,32])===!0&&$r!==g.value&&($r!==null&&I(),K.defaultPrevented!==!0&&(g.value.focus(),$r=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),g.value.addEventListener("blur",R,Dt)),Ur(K)))}function _(K){g.value!==null&&(n("touchstart",K),K.defaultPrevented!==!0&&(Br!==g.value&&(Br!==null&&I(),Br=g.value,C=K.target,C.addEventListener("touchcancel",R,Dt),C.addEventListener("touchend",R,Dt)),x=!0,O!==null&&clearTimeout(O),O=setTimeout(()=>{O=null,x=!1},200)))}function b(K){g.value!==null&&(K.qSkipRipple=x===!0,n("mousedown",K),K.defaultPrevented!==!0&&jr!==g.value&&(jr!==null&&I(),jr=g.value,g.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,Dt)))}function R(K){if(g.value!==null&&!(K!==void 0&&K.type==="blur"&&document.activeElement===g.value)){if(K!==void 0&&K.type==="keyup"){if($r===g.value&&Kl(K,[13,32])===!0){const me=new MouseEvent("click",K);me.qKeyEvent=!0,K.defaultPrevented===!0&&zl(me),K.cancelBubble===!0&&Tg(me),g.value.dispatchEvent(me),Ur(K),K.qKeyEvent=!0}n("keyup",K)}I()}}function I(K){const me=v.value;K!==!0&&(Br===g.value||jr===g.value)&&me!==null&&me!==document.activeElement&&(me.setAttribute("tabindex",-1),me.focus()),Br===g.value&&(C!==null&&(C.removeEventListener("touchcancel",R,Dt),C.removeEventListener("touchend",R,Dt)),Br=C=null),jr===g.value&&(document.removeEventListener("mouseup",R,Dt),jr=null),$r===g.value&&(document.removeEventListener("keyup",R,!0),g.value!==null&&g.value.removeEventListener("blur",R,Dt),$r=null),g.value!==null&&g.value.classList.remove("q-btn--active")}function w(K){Ur(K),K.qSkipRipple=!0}return Bc(()=>{I(!0)}),Object.assign(r,{click:K=>{p.value===!0&&A(K)}}),()=>{let K=[];t.icon!==void 0&&K.push(ue(la,{name:t.icon,left:t.stack!==!0&&F.value===!0,role:"img"})),F.value===!0&&K.push(ue("span",{class:"block"},[t.label])),K=Ji(e.default,K),t.iconRight!==void 0&&t.round===!1&&K.push(ue(la,{name:t.iconRight,right:t.stack!==!0&&F.value===!0,role:"img"}));const me=[ue("span",{class:"q-focus-helper",ref:v})];return t.loading===!0&&t.percentage!==void 0&&me.push(ue("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[ue("span",{class:"q-btn__progress-indicator fit block",style:$.value})])),me.push(ue("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},K)),t.loading!==null&&me.push(ue(EE,{name:"q-transition--fade"},()=>t.loading===!0?[ue("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[ue(U_)])]:null)),kp(ue(h.value,te.value,me),[[BC,B.value,void 0,j.value]])}}});let iP=1,sP=document.body;function oP(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${iP++}`:t,Ko.globalNodes!==void 0){const r=Ko.globalNodes.class;r!==void 0&&(n.className=r)}return sP.appendChild(n),n}let aP=0;const Oo={},xo={},Ft={},j_={},lP=/^\s*$/,q_=[],cP=[void 0,null,!0,!1,""],Su=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],uP=["top-left","top-right","bottom-left","bottom-right"],Qr={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function H_(t,e,n){if(!t)return qi("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Oo),_s(t)===!1&&(i.type&&Object.assign(i,Qr[i.type]),t={message:t}),Object.assign(i,Qr[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=U_),i.spinner=Ei(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:Yf(i.message)||Yf(i.caption)},i.position){if(Su.includes(i.position)===!1)return qi("wrong position",t)}else i.position="bottom";if(cP.includes(i.timeout)===!0)i.timeout=5e3;else{const c=Number(i.timeout);if(isNaN(c)||c<0)return qi("wrong timeout",t);i.timeout=Number.isFinite(c)?c:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Oo.actions)===!0?Oo.actions:[]).concat(Qr[t.type]!==void 0&&Array.isArray(Qr[t.type].actions)===!0?Qr[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:h,...d})=>({flat:!0,...d,onClick:typeof c=="function"?()=>{c(),h!==!0&&l()}:()=>{l()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=Ft[i.position].value.indexOf(n.notif);Ft[i.position].value[c]=i}else{const c=xo[i.meta.group];if(c===void 0){if(i.meta.uid=aP++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)Ft[i.position].value.splice(Math.floor(Ft[i.position].value.length/2),0,i);else{const h=i.position.indexOf("top")!==-1?"unshift":"push";Ft[i.position].value[h](i)}i.group!==void 0&&(xo[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(uP.includes(i.badgePosition)===!1)return qi("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const h=Ft[i.position].value.indexOf(c);Ft[i.position].value[h]=xo[i.meta.group]=i}}const l=()=>{hP(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,l()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?qi("trying to update a grouped one which is forbidden",t):l()};if(r={dismiss:l,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const h=Object.assign({},r.config,c,{group:!1,position:i.position});H_(h,e,r)}}}function hP(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=Ft[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete xo[t.meta.group];const n=q_[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}Ft[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function Yf(t){return t!=null&&lP.test(t)!==!0}function qi(t,e){return console.error(`Notify: ${t}`,e),!1}function dP(){return Ds({name:"QNotifications",devtools:{hide:!0},setup(){return()=>ue("div",{class:"q-notifications"},Su.map(t=>ue(BE,{key:t,class:j_[t],tag:"div",name:`q-notification--${t}`},()=>Ft[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(ue(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(ue(la,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(ue(VC,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>ue("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const l=[e.message];s=e.caption?[ue("div",l),ue("div",{class:"q-notification__caption"},[e.caption])]:l}r.push(ue("div",o,s))}const i=[ue("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(ue("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(ue("div",{class:n.actionsClass},e.actions.map(s=>ue(rP,s)))),n.badge>1&&i.push(ue("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),ue("div",{ref:s=>{q_[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[ue("div",{class:n.wrapperClass},i)])}))))}})}var fP={setDefaults(t){_s(t)===!0&&Object.assign(Oo,t)},registerType(t,e){_s(e)===!0&&(Qr[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>H_(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Su.forEach(r=>{Ft[r]=li([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",s=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;j_[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=oP("q-notify");Tw(dP(),e).mount(n)}}},pP={config:{notify:{position:"top-right",timeout:2e3}},plugins:{Notify:fP}},gP=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Tc;typeof window!="undefined"&&(typeof Promise!="undefined"?Tc=new Promise(function(t){return window.addEventListener("load",t)}):Tc={then:function(t){return window.addEventListener("load",t)}});function mP(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(i){for(var s=[],o=arguments.length-1;o-- >0;)s[o]=arguments[o+1];e&&e[i]&&e[i].apply(e,s)};"serviceWorker"in navigator&&Tc.then(function(){gP()?(_P(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Cs(r,i)})):(z_(t,r,n),navigator.serviceWorker.ready.then(function(i){r("ready",i)}).catch(function(i){return Cs(r,i)}))})}function Cs(t,e){navigator.onLine||t("offline"),t("error",e)}function z_(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var i=r.installing;i.onstatechange=function(){i.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Cs(e,r)})}function _P(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),Xf()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),Xf()):z_(t,e,n)}).catch(function(r){return Cs(e,r)})}function Xf(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Cs(emit,t)})}mP("/sw.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const yP="/";async function vP({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const h=s(c);h!==null&&(window.location.href=h)},l=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:l,publicPath:yP})}catch(h){if(h&&h.url){o(h.url);return}console.error("[Quasar] boot error:",h);return}i!==!0&&(t.use(e),t.mount("#q-app"))}AC(Eg,pP).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Gt(()=>import("./axios.e68d7ba8.js"),[]),Gt(()=>Promise.resolve().then(function(){return bC}),void 0)]).then(r=>{const i=n(r).filter(s=>typeof s=="function");vP(t,i)})});export{fb as $,nw as A,CP as B,iw as C,kP as D,zl as E,Tg as F,rw as G,yw as H,sw as I,kp as J,zP as K,yo as L,xP as M,vi as N,$p as O,Hl as P,Ji as Q,VP as R,BC as S,og as T,lg as U,hv as V,yt as W,la as X,iE as Y,Oy as Z,bA as _,he as a,bv as a0,rP as a1,FP as a2,GP as a3,GC as a4,Kl as a5,jP as a6,IC as a7,qP as a8,V_ as a9,TP as aa,ug as ab,Uc as ac,yv as ad,EP as ae,Ut as af,wP as ag,SP as ah,RP as ai,AP as aj,IP as ak,bP as al,MP as am,LP as an,NP as b,Ds as c,RC as d,Bc as e,Lc as f,Os as g,ue as h,Ar as i,Zt as j,DP as k,Rr as l,HP as m,ms as n,Up as o,OP as p,FC as q,li as r,KP as s,en as t,Ur as u,HC as v,vo as w,PP as x,mv as y,WP as z};
