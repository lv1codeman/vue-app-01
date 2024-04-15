(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vc(e,c){const a=new Set(e.split(","));return c?t=>a.has(t.toLowerCase()):t=>a.has(t)}const b1={},j4=[],E2=()=>{},aM=()=>!1,d5=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),pc=e=>e.startsWith("onUpdate:"),e2=Object.assign,zc=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},tM=Object.prototype.hasOwnProperty,m1=(e,c)=>tM.call(e,c),J=Array.isArray,G4=e=>w0(e)==="[object Map]",v5=e=>w0(e)==="[object Set]",Ft=e=>w0(e)==="[object Date]",i1=e=>typeof e=="function",B1=e=>typeof e=="string",F3=e=>typeof e=="symbol",L1=e=>e!==null&&typeof e=="object",Jn=e=>(L1(e)||i1(e))&&i1(e.then)&&i1(e.catch),ci=Object.prototype.toString,w0=e=>ci.call(e),rM=e=>w0(e).slice(8,-1),ei=e=>w0(e)==="[object Object]",gc=e=>B1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,D6=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),p5=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},nM=/-(\w)/g,c6=p5(e=>e.replace(nM,(c,a)=>a?a.toUpperCase():"")),iM=/\B([A-Z])/g,u6=p5(e=>e.replace(iM,"-$1").toLowerCase()),ai=p5(e=>e.charAt(0).toUpperCase()+e.slice(1)),E7=p5(e=>e?`on${ai(e)}`:""),z4=(e,c)=>!Object.is(e,c),S8=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},B8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},Hc=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Bt;const ti=()=>Bt||(Bt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vc(e){if(J(e)){const c={};for(let a=0;a<e.length;a++){const t=e[a],r=B1(t)?fM(t):Vc(t);if(r)for(const n in r)c[n]=r[n]}return c}else if(B1(e)||L1(e))return e}const sM=/;(?![^(]*\))/g,oM=/:([^]+)/,lM=/\/\*[^]*?\*\//g;function fM(e){const c={};return e.replace(lM,"").split(sM).forEach(a=>{if(a){const t=a.split(oM);t.length>1&&(c[t[0].trim()]=t[1].trim())}}),c}function Cc(e){let c="";if(B1(e))c=e;else if(J(e))for(let a=0;a<e.length;a++){const t=Cc(e[a]);t&&(c+=t+" ")}else if(L1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const uM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hM=vc(uM);function ri(e){return!!e||e===""}function mM(e,c){if(e.length!==c.length)return!1;let a=!0;for(let t=0;a&&t<e.length;t++)a=z5(e[t],c[t]);return a}function z5(e,c){if(e===c)return!0;let a=Ft(e),t=Ft(c);if(a||t)return a&&t?e.getTime()===c.getTime():!1;if(a=F3(e),t=F3(c),a||t)return e===c;if(a=J(e),t=J(c),a||t)return a&&t?mM(e,c):!1;if(a=L1(e),t=L1(c),a||t){if(!a||!t)return!1;const r=Object.keys(e).length,n=Object.keys(c).length;if(r!==n)return!1;for(const i in e){const o=e.hasOwnProperty(i),l=c.hasOwnProperty(i);if(o&&!l||!o&&l||!z5(e[i],c[i]))return!1}}return String(e)===String(c)}function dM(e,c){return e.findIndex(a=>z5(a,c))}const P7=e=>B1(e)?e:e==null?"":J(e)||L1(e)&&(e.toString===ci||!i1(e.toString))?JSON.stringify(e,ni,2):String(e),ni=(e,c)=>c&&c.__v_isRef?ni(e,c.value):G4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[t,r],n)=>(a[I7(t,n)+" =>"]=r,a),{})}:v5(c)?{[`Set(${c.size})`]:[...c.values()].map(a=>I7(a))}:F3(c)?I7(c):L1(c)&&!J(c)&&!ei(c)?String(c):c,I7=(e,c="")=>{var a;return F3(e)?`Symbol(${(a=e.description)!=null?a:c})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let I2;class vM{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=I2,!c&&I2&&(this.index=(I2.scopes||(I2.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const a=I2;try{return I2=this,c()}finally{I2=a}}}on(){I2=this}off(){I2=this.parent}stop(c){if(this._active){let a,t;for(a=0,t=this.effects.length;a<t;a++)this.effects[a].stop();for(a=0,t=this.cleanups.length;a<t;a++)this.cleanups[a]();if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pM(e,c=I2){c&&c.active&&c.effects.push(e)}function zM(){return I2}let d4;class Mc{constructor(c,a,t,r){this.fn=c,this.trigger=a,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,pM(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,w4();for(let c=0;c<this._depsLength;c++){const a=this.deps[c];if(a.computed&&(gM(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),b4()}return this._dirtyLevel>=4}set dirty(c){this._dirtyLevel=c?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let c=E3,a=d4;try{return E3=!0,d4=this,this._runnings++,Ot(this),this.fn()}finally{qt(this),this._runnings--,d4=a,E3=c}}stop(){var c;this.active&&(Ot(this),qt(this),(c=this.onStop)==null||c.call(this),this.active=!1)}}function gM(e){return e.value}function Ot(e){e._trackId++,e._depsLength=0}function qt(e){if(e.deps.length>e._depsLength){for(let c=e._depsLength;c<e.deps.length;c++)ii(e.deps[c],e);e.deps.length=e._depsLength}}function ii(e,c){const a=e.get(c);a!==void 0&&c._trackId!==a&&(e.delete(c),e.size===0&&e.cleanup())}let E3=!0,d9=0;const si=[];function w4(){si.push(E3),E3=!1}function b4(){const e=si.pop();E3=e===void 0?!0:e}function Lc(){d9++}function wc(){for(d9--;!d9&&v9.length;)v9.shift()()}function oi(e,c,a){if(c.get(e)!==e._trackId){c.set(e,e._trackId);const t=e.deps[e._depsLength];t!==c?(t&&ii(t,e),e.deps[e._depsLength++]=c):e._depsLength++}}const v9=[];function li(e,c,a){Lc();for(const t of e.keys()){let r;t._dirtyLevel<c&&(r??(r=e.get(t)===t._trackId))&&(t._shouldSchedule||(t._shouldSchedule=t._dirtyLevel===0),t._dirtyLevel=c),t._shouldSchedule&&(r??(r=e.get(t)===t._trackId))&&(t.trigger(),(!t._runnings||t.allowRecurse)&&t._dirtyLevel!==2&&(t._shouldSchedule=!1,t.scheduler&&v9.push(t.scheduler)))}wc()}const fi=(e,c)=>{const a=new Map;return a.cleanup=e,a.computed=c,a},p9=new WeakMap,v4=Symbol(""),z9=Symbol("");function g2(e,c,a){if(E3&&d4){let t=p9.get(e);t||p9.set(e,t=new Map);let r=t.get(a);r||t.set(a,r=fi(()=>t.delete(a))),oi(d4,r)}}function f3(e,c,a,t,r,n){const i=p9.get(e);if(!i)return;let o=[];if(c==="clear")o=[...i.values()];else if(a==="length"&&J(e)){const l=Number(t);i.forEach((u,d)=>{(d==="length"||!F3(d)&&d>=l)&&o.push(u)})}else switch(a!==void 0&&o.push(i.get(a)),c){case"add":J(e)?gc(a)&&o.push(i.get("length")):(o.push(i.get(v4)),G4(e)&&o.push(i.get(z9)));break;case"delete":J(e)||(o.push(i.get(v4)),G4(e)&&o.push(i.get(z9)));break;case"set":G4(e)&&o.push(i.get(v4));break}Lc();for(const l of o)l&&li(l,4);wc()}const HM=vc("__proto__,__v_isRef,__isVue"),ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(F3)),Ut=VM();function VM(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const t=z1(this);for(let n=0,i=this.length;n<i;n++)g2(t,"get",n+"");const r=t[c](...a);return r===-1||r===!1?t[c](...a.map(z1)):r}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){w4(),Lc();const t=z1(this)[c].apply(this,a);return wc(),b4(),t}}),e}function CM(e){const c=z1(this);return g2(c,"has",e),c.hasOwnProperty(e)}class hi{constructor(c=!1,a=!1){this._isReadonly=c,this._isShallow=a}get(c,a,t){const r=this._isReadonly,n=this._isShallow;if(a==="__v_isReactive")return!r;if(a==="__v_isReadonly")return r;if(a==="__v_isShallow")return n;if(a==="__v_raw")return t===(r?n?EM:pi:n?vi:di).get(c)||Object.getPrototypeOf(c)===Object.getPrototypeOf(t)?c:void 0;const i=J(c);if(!r){if(i&&m1(Ut,a))return Reflect.get(Ut,a,t);if(a==="hasOwnProperty")return CM}const o=Reflect.get(c,a,t);return(F3(a)?ui.has(a):HM(a))||(r||g2(c,"get",a),n)?o:w2(o)?i&&gc(a)?o:o.value:L1(o)?r?zi(o):xc(o):o}}class mi extends hi{constructor(c=!1){super(!1,c)}set(c,a,t,r){let n=c[a];if(!this._isShallow){const l=Q6(n);if(!g9(t)&&!Q6(t)&&(n=z1(n),t=z1(t)),!J(c)&&w2(n)&&!w2(t))return l?!1:(n.value=t,!0)}const i=J(c)&&gc(a)?Number(a)<c.length:m1(c,a),o=Reflect.set(c,a,t,r);return c===z1(r)&&(i?z4(t,n)&&f3(c,"set",a,t):f3(c,"add",a,t)),o}deleteProperty(c,a){const t=m1(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&t&&f3(c,"delete",a,void 0),r}has(c,a){const t=Reflect.has(c,a);return(!F3(a)||!ui.has(a))&&g2(c,"has",a),t}ownKeys(c){return g2(c,"iterate",J(c)?"length":v4),Reflect.ownKeys(c)}}class MM extends hi{constructor(c=!1){super(!0,c)}set(c,a){return!0}deleteProperty(c,a){return!0}}const LM=new mi,wM=new MM,bM=new mi(!0),bc=e=>e,g5=e=>Reflect.getPrototypeOf(e);function t8(e,c,a=!1,t=!1){e=e.__v_raw;const r=z1(e),n=z1(c);a||(z4(c,n)&&g2(r,"get",c),g2(r,"get",n));const{has:i}=g5(r),o=t?bc:a?Nc:Ac;if(i.call(r,c))return o(e.get(c));if(i.call(r,n))return o(e.get(n));e!==r&&e.get(c)}function r8(e,c=!1){const a=this.__v_raw,t=z1(a),r=z1(e);return c||(z4(e,r)&&g2(t,"has",e),g2(t,"has",r)),e===r?a.has(e):a.has(e)||a.has(r)}function n8(e,c=!1){return e=e.__v_raw,!c&&g2(z1(e),"iterate",v4),Reflect.get(e,"size",e)}function $t(e){e=z1(e);const c=z1(this);return g5(c).has.call(c,e)||(c.add(e),f3(c,"add",e,e)),this}function jt(e,c){c=z1(c);const a=z1(this),{has:t,get:r}=g5(a);let n=t.call(a,e);n||(e=z1(e),n=t.call(a,e));const i=r.call(a,e);return a.set(e,c),n?z4(c,i)&&f3(a,"set",e,c):f3(a,"add",e,c),this}function Gt(e){const c=z1(this),{has:a,get:t}=g5(c);let r=a.call(c,e);r||(e=z1(e),r=a.call(c,e)),t&&t.call(c,e);const n=c.delete(e);return r&&f3(c,"delete",e,void 0),n}function Wt(){const e=z1(this),c=e.size!==0,a=e.clear();return c&&f3(e,"clear",void 0,void 0),a}function i8(e,c){return function(t,r){const n=this,i=n.__v_raw,o=z1(i),l=c?bc:e?Nc:Ac;return!e&&g2(o,"iterate",v4),i.forEach((u,d)=>t.call(r,l(u),l(d),n))}}function s8(e,c,a){return function(...t){const r=this.__v_raw,n=z1(r),i=G4(n),o=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=r[e](...t),d=a?bc:c?Nc:Ac;return!c&&g2(n,"iterate",l?z9:v4),{next(){const{value:v,done:g}=u.next();return g?{value:v,done:g}:{value:o?[d(v[0]),d(v[1])]:d(v),done:g}},[Symbol.iterator](){return this}}}}function x3(e){return function(...c){return e==="delete"?!1:e==="clear"?void 0:this}}function yM(){const e={get(n){return t8(this,n)},get size(){return n8(this)},has:r8,add:$t,set:jt,delete:Gt,clear:Wt,forEach:i8(!1,!1)},c={get(n){return t8(this,n,!1,!0)},get size(){return n8(this)},has:r8,add:$t,set:jt,delete:Gt,clear:Wt,forEach:i8(!1,!0)},a={get(n){return t8(this,n,!0)},get size(){return n8(this,!0)},has(n){return r8.call(this,n,!0)},add:x3("add"),set:x3("set"),delete:x3("delete"),clear:x3("clear"),forEach:i8(!0,!1)},t={get(n){return t8(this,n,!0,!0)},get size(){return n8(this,!0)},has(n){return r8.call(this,n,!0)},add:x3("add"),set:x3("set"),delete:x3("delete"),clear:x3("clear"),forEach:i8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=s8(n,!1,!1),a[n]=s8(n,!0,!1),c[n]=s8(n,!1,!0),t[n]=s8(n,!0,!0)}),[e,a,c,t]}const[xM,SM,AM,NM]=yM();function yc(e,c){const a=c?e?NM:AM:e?SM:xM;return(t,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?t:Reflect.get(m1(a,r)&&r in t?a:t,r,n)}const _M={get:yc(!1,!1)},kM={get:yc(!1,!0)},TM={get:yc(!0,!1)},di=new WeakMap,vi=new WeakMap,pi=new WeakMap,EM=new WeakMap;function PM(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function IM(e){return e.__v_skip||!Object.isExtensible(e)?0:PM(rM(e))}function xc(e){return Q6(e)?e:Sc(e,!1,LM,_M,di)}function RM(e){return Sc(e,!1,bM,kM,vi)}function zi(e){return Sc(e,!0,wM,TM,pi)}function Sc(e,c,a,t,r){if(!L1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const i=IM(e);if(i===0)return e;const o=new Proxy(e,i===2?t:a);return r.set(e,o),o}function W4(e){return Q6(e)?W4(e.__v_raw):!!(e&&e.__v_isReactive)}function Q6(e){return!!(e&&e.__v_isReadonly)}function g9(e){return!!(e&&e.__v_isShallow)}function gi(e){return W4(e)||Q6(e)}function z1(e){const c=e&&e.__v_raw;return c?z1(c):e}function Hi(e){return Object.isExtensible(e)&&B8(e,"__v_skip",!0),e}const Ac=e=>L1(e)?xc(e):e,Nc=e=>L1(e)?zi(e):e;class Vi{constructor(c,a,t,r){this.getter=c,this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Mc(()=>c(this._value),()=>R7(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=t}get value(){const c=z1(this);return(!c._cacheable||c.effect.dirty)&&z4(c._value,c._value=c.effect.run())&&R7(c,4),FM(c),c.effect._dirtyLevel>=2&&R7(c,2),c._value}set value(c){this._setter(c)}get _dirty(){return this.effect.dirty}set _dirty(c){this.effect.dirty=c}}function DM(e,c,a=!1){let t,r;const n=i1(e);return n?(t=e,r=E2):(t=e.get,r=e.set),new Vi(t,r,n||!r,a)}function FM(e){var c;E3&&d4&&(e=z1(e),oi(d4,(c=e.dep)!=null?c:e.dep=fi(()=>e.dep=void 0,e instanceof Vi?e:void 0)))}function R7(e,c=4,a){e=z1(e);const t=e.dep;t&&li(t,c)}function w2(e){return!!(e&&e.__v_isRef===!0)}function BM(e){return w2(e)?e.value:e}const OM={get:(e,c,a)=>BM(Reflect.get(e,c,a)),set:(e,c,a,t)=>{const r=e[c];return w2(r)&&!w2(a)?(r.value=a,!0):Reflect.set(e,c,a,t)}};function Ci(e){return W4(e)?e:new Proxy(e,OM)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function P3(e,c,a,t){try{return t?e(...t):e()}catch(r){H5(r,c,a)}}function O2(e,c,a,t){if(i1(e)){const n=P3(e,c,a,t);return n&&Jn(n)&&n.catch(i=>{H5(i,c,a)}),n}const r=[];for(let n=0;n<e.length;n++)r.push(O2(e[n],c,a,t));return r}function H5(e,c,a,t=!0){const r=c?c.vnode:null;if(c){let n=c.parent;const i=c.proxy,o=`https://vuejs.org/error-reference/#runtime-${a}`;for(;n;){const u=n.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,o)===!1)return}n=n.parent}const l=c.appContext.config.errorHandler;if(l){P3(l,null,10,[e,i,o]);return}}qM(e,a,r,t)}function qM(e,c,a,t=!0){console.error(e)}let Y6=!1,H9=!1;const o2=[];let Z2=0;const K4=[];let N3=null,n4=0;const Mi=Promise.resolve();let _c=null;function Li(e){const c=_c||Mi;return e?c.then(this?e.bind(this):e):c}function UM(e){let c=Z2+1,a=o2.length;for(;c<a;){const t=c+a>>>1,r=o2[t],n=X6(r);n<e||n===e&&r.pre?c=t+1:a=t}return c}function kc(e){(!o2.length||!o2.includes(e,Y6&&e.allowRecurse?Z2+1:Z2))&&(e.id==null?o2.push(e):o2.splice(UM(e.id),0,e),wi())}function wi(){!Y6&&!H9&&(H9=!0,_c=Mi.then(yi))}function $M(e){const c=o2.indexOf(e);c>Z2&&o2.splice(c,1)}function jM(e){J(e)?K4.push(...e):(!N3||!N3.includes(e,e.allowRecurse?n4+1:n4))&&K4.push(e),wi()}function Kt(e,c,a=Y6?Z2+1:0){for(;a<o2.length;a++){const t=o2[a];if(t&&t.pre){if(e&&t.id!==e.uid)continue;o2.splice(a,1),a--,t()}}}function bi(e){if(K4.length){const c=[...new Set(K4)].sort((a,t)=>X6(a)-X6(t));if(K4.length=0,N3){N3.push(...c);return}for(N3=c,n4=0;n4<N3.length;n4++)N3[n4]();N3=null,n4=0}}const X6=e=>e.id==null?1/0:e.id,GM=(e,c)=>{const a=X6(e)-X6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function yi(e){H9=!1,Y6=!0,o2.sort(GM);try{for(Z2=0;Z2<o2.length;Z2++){const c=o2[Z2];c&&c.active!==!1&&P3(c,null,14)}}finally{Z2=0,o2.length=0,bi(),Y6=!1,_c=null,(o2.length||K4.length)&&yi()}}function WM(e,c,...a){if(e.isUnmounted)return;const t=e.vnode.props||b1;let r=a;const n=c.startsWith("update:"),i=n&&c.slice(7);if(i&&i in t){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:v,trim:g}=t[d]||b1;g&&(r=a.map(V=>B1(V)?V.trim():V)),v&&(r=a.map(Hc))}let o,l=t[o=E7(c)]||t[o=E7(c6(c))];!l&&n&&(l=t[o=E7(u6(c))]),l&&O2(l,e,6,r);const u=t[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,O2(u,e,6,r)}}function xi(e,c,a=!1){const t=c.emitsCache,r=t.get(e);if(r!==void 0)return r;const n=e.emits;let i={},o=!1;if(!i1(e)){const l=u=>{const d=xi(u,c,!0);d&&(o=!0,e2(i,d))};!a&&c.mixins.length&&c.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!o?(L1(e)&&t.set(e,null),null):(J(n)?n.forEach(l=>i[l]=null):e2(i,n),L1(e)&&t.set(e,i),i)}function V5(e,c){return!e||!d5(c)?!1:(c=c.slice(2).replace(/Once$/,""),m1(e,c[0].toLowerCase()+c.slice(1))||m1(e,u6(c))||m1(e,c))}let L2=null,C5=null;function O8(e){const c=L2;return L2=e,C5=e&&e.type.__scopeId||null,c}function KM(e){C5=e}function ZM(){C5=null}function QM(e,c=L2,a){if(!c||e._n)return e;const t=(...r)=>{t._d&&nr(-1);const n=O8(c);let i;try{i=e(...r)}finally{O8(n),t._d&&nr(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function D7(e){const{type:c,vnode:a,proxy:t,withProxy:r,props:n,propsOptions:[i],slots:o,attrs:l,emit:u,render:d,renderCache:v,data:g,setupState:V,ctx:R,inheritAttrs:E}=e;let k,S;const I=O8(e);try{if(a.shapeFlag&4){const Q=r||t,r1=Q;k=K2(d.call(r1,Q,v,n,V,g,R)),S=l}else{const Q=c;k=K2(Q.length>1?Q(n,{attrs:l,slots:o,emit:u}):Q(n,null)),S=c.props?l:YM(l)}}catch(Q){O6.length=0,H5(Q,e,1),k=D2(J6)}let B=k;if(S&&E!==!1){const Q=Object.keys(S),{shapeFlag:r1}=B;Q.length&&r1&7&&(i&&Q.some(pc)&&(S=XM(S,i)),B=e6(B,S))}return a.dirs&&(B=e6(B),B.dirs=B.dirs?B.dirs.concat(a.dirs):a.dirs),a.transition&&(B.transition=a.transition),k=B,O8(I),k}const YM=e=>{let c;for(const a in e)(a==="class"||a==="style"||d5(a))&&((c||(c={}))[a]=e[a]);return c},XM=(e,c)=>{const a={};for(const t in e)(!pc(t)||!(t.slice(9)in c))&&(a[t]=e[t]);return a};function JM(e,c,a){const{props:t,children:r,component:n}=e,{props:i,children:o,patchFlag:l}=c,u=n.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return t?Zt(t,i,u):!!i;if(l&8){const d=c.dynamicProps;for(let v=0;v<d.length;v++){const g=d[v];if(i[g]!==t[g]&&!V5(u,g))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:t===i?!1:t?i?Zt(t,i,u):!0:!!i;return!1}function Zt(e,c,a){const t=Object.keys(c);if(t.length!==Object.keys(e).length)return!0;for(let r=0;r<t.length;r++){const n=t[r];if(c[n]!==e[n]&&!V5(a,n))return!0}return!1}function cL({vnode:e,parent:c},a){for(;c;){const t=c.subTree;if(t.suspense&&t.suspense.activeBranch===e&&(t.el=e.el),t===e)(e=c.vnode).el=a,c=c.parent;else break}}const eL=Symbol.for("v-ndc"),aL=e=>e.__isSuspense;function tL(e,c){c&&c.pendingBranch?J(e)?c.effects.push(...e):c.effects.push(e):jM(e)}const rL=Symbol.for("v-scx"),nL=()=>_8(rL),o8={};function A8(e,c,a){return Si(e,c,a)}function Si(e,c,{immediate:a,deep:t,flush:r,once:n,onTrack:i,onTrigger:o}=b1){if(c&&n){const Y=c;c=(...H1)=>{Y(...H1),r1()}}const l=m2,u=Y=>t===!0?Y:s4(Y,t===!1?1:void 0);let d,v=!1,g=!1;if(w2(e)?(d=()=>e.value,v=g9(e)):W4(e)?(d=()=>u(e),v=!0):J(e)?(g=!0,v=e.some(Y=>W4(Y)||g9(Y)),d=()=>e.map(Y=>{if(w2(Y))return Y.value;if(W4(Y))return u(Y);if(i1(Y))return P3(Y,l,2)})):i1(e)?c?d=()=>P3(e,l,2):d=()=>(V&&V(),O2(e,l,3,[R])):d=E2,c&&t){const Y=d;d=()=>s4(Y())}let V,R=Y=>{V=B.onStop=()=>{P3(Y,l,4),V=B.onStop=void 0}},E;if(b5)if(R=E2,c?a&&O2(c,l,3,[d(),g?[]:void 0,R]):d(),r==="sync"){const Y=nL();E=Y.__watcherHandles||(Y.__watcherHandles=[])}else return E2;let k=g?new Array(e.length).fill(o8):o8;const S=()=>{if(!(!B.active||!B.dirty))if(c){const Y=B.run();(t||v||(g?Y.some((H1,W1)=>z4(H1,k[W1])):z4(Y,k)))&&(V&&V(),O2(c,l,3,[Y,k===o8?void 0:g&&k[0]===o8?[]:k,R]),k=Y)}else B.run()};S.allowRecurse=!!c;let I;r==="sync"?I=S:r==="post"?I=()=>z2(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),I=()=>kc(S));const B=new Mc(d,E2,I),Q=zM(),r1=()=>{B.stop(),Q&&zc(Q.effects,B)};return c?a?S():k=B.run():r==="post"?z2(B.run.bind(B),l&&l.suspense):B.run(),E&&E.push(r1),r1}function iL(e,c,a){const t=this.proxy,r=B1(e)?e.includes(".")?Ai(t,e):()=>t[e]:e.bind(t,t);let n;i1(c)?n=c:(n=c.handler,a=c);const i=b0(this),o=Si(r,n.bind(t),a);return i(),o}function Ai(e,c){const a=c.split(".");return()=>{let t=e;for(let r=0;r<a.length&&t;r++)t=t[a[r]];return t}}function s4(e,c,a=0,t){if(!L1(e)||e.__v_skip)return e;if(c&&c>0){if(a>=c)return e;a++}if(t=t||new Set,t.has(e))return e;if(t.add(e),w2(e))s4(e.value,c,a,t);else if(J(e))for(let r=0;r<e.length;r++)s4(e[r],c,a,t);else if(v5(e)||G4(e))e.forEach(r=>{s4(r,c,a,t)});else if(ei(e))for(const r in e)s4(e[r],c,a,t);return e}function F7(e,c){if(L2===null)return e;const a=y5(L2)||L2.proxy,t=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[n,i,o,l=b1]=c[r];n&&(i1(n)&&(n={mounted:n,updated:n}),n.deep&&s4(i),t.push({dir:n,instance:a,value:i,oldValue:void 0,arg:o,modifiers:l}))}return e}function J3(e,c,a,t){const r=e.dirs,n=c&&c.dirs;for(let i=0;i<r.length;i++){const o=r[i];n&&(o.oldValue=n[i].value);let l=o.dir[t];l&&(w4(),O2(l,a,8,[e.el,o,e,c]),b4())}}/*! #__NO_SIDE_EFFECTS__ */function sL(e,c){return i1(e)?e2({name:e.name},c,{setup:e}):e}const N8=e=>!!e.type.__asyncLoader,Ni=e=>e.type.__isKeepAlive;function oL(e,c){_i(e,"a",c)}function lL(e,c){_i(e,"da",c)}function _i(e,c,a=m2){const t=e.__wdc||(e.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(M5(c,t,a),a){let r=a.parent;for(;r&&r.parent;)Ni(r.parent.vnode)&&fL(t,c,a,r),r=r.parent}}function fL(e,c,a,t){const r=M5(c,e,t,!0);ki(()=>{zc(t[c],r)},a)}function M5(e,c,a=m2,t=!1){if(a){const r=a[e]||(a[e]=[]),n=c.__weh||(c.__weh=(...i)=>{if(a.isUnmounted)return;w4();const o=b0(a),l=O2(c,a,e,i);return o(),b4(),l});return t?r.unshift(n):r.push(n),n}}const g3=e=>(c,a=m2)=>(!b5||e==="sp")&&M5(e,(...t)=>c(...t),a),uL=g3("bm"),hL=g3("m"),mL=g3("bu"),dL=g3("u"),vL=g3("bum"),ki=g3("um"),pL=g3("sp"),zL=g3("rtg"),gL=g3("rtc");function HL(e,c=m2){M5("ec",e,c)}function Qt(e,c,a,t){let r;const n=a&&a[t];if(J(e)||B1(e)){r=new Array(e.length);for(let i=0,o=e.length;i<o;i++)r[i]=c(e[i],i,void 0,n&&n[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=c(i+1,i,void 0,n&&n[i])}else if(L1(e))if(e[Symbol.iterator])r=Array.from(e,(i,o)=>c(i,o,void 0,n&&n[o]));else{const i=Object.keys(e);r=new Array(i.length);for(let o=0,l=i.length;o<l;o++){const u=i[o];r[o]=c(e[u],u,o,n&&n[o])}}else r=[];return a&&(a[t]=r),r}const V9=e=>e?Ui(e)?y5(e)||e.proxy:V9(e.parent):null,F6=e2(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>V9(e.parent),$root:e=>V9(e.root),$emit:e=>e.emit,$options:e=>Tc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,kc(e.update)}),$nextTick:e=>e.n||(e.n=Li.bind(e.proxy)),$watch:e=>iL.bind(e)}),B7=(e,c)=>e!==b1&&!e.__isScriptSetup&&m1(e,c),VL={get({_:e},c){const{ctx:a,setupState:t,data:r,props:n,accessCache:i,type:o,appContext:l}=e;let u;if(c[0]!=="$"){const V=i[c];if(V!==void 0)switch(V){case 1:return t[c];case 2:return r[c];case 4:return a[c];case 3:return n[c]}else{if(B7(t,c))return i[c]=1,t[c];if(r!==b1&&m1(r,c))return i[c]=2,r[c];if((u=e.propsOptions[0])&&m1(u,c))return i[c]=3,n[c];if(a!==b1&&m1(a,c))return i[c]=4,a[c];C9&&(i[c]=0)}}const d=F6[c];let v,g;if(d)return c==="$attrs"&&g2(e,"get",c),d(e);if((v=o.__cssModules)&&(v=v[c]))return v;if(a!==b1&&m1(a,c))return i[c]=4,a[c];if(g=l.config.globalProperties,m1(g,c))return g[c]},set({_:e},c,a){const{data:t,setupState:r,ctx:n}=e;return B7(r,c)?(r[c]=a,!0):t!==b1&&m1(t,c)?(t[c]=a,!0):m1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(n[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:t,appContext:r,propsOptions:n}},i){let o;return!!a[i]||e!==b1&&m1(e,i)||B7(c,i)||(o=n[0])&&m1(o,i)||m1(t,i)||m1(F6,i)||m1(r.config.globalProperties,i)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:m1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};function Yt(e){return J(e)?e.reduce((c,a)=>(c[a]=null,c),{}):e}let C9=!0;function CL(e){const c=Tc(e),a=e.proxy,t=e.ctx;C9=!1,c.beforeCreate&&Xt(c.beforeCreate,e,"bc");const{data:r,computed:n,methods:i,watch:o,provide:l,inject:u,created:d,beforeMount:v,mounted:g,beforeUpdate:V,updated:R,activated:E,deactivated:k,beforeDestroy:S,beforeUnmount:I,destroyed:B,unmounted:Q,render:r1,renderTracked:Y,renderTriggered:H1,errorCaptured:W1,serverPrefetch:a2,expose:v2,inheritAttrs:V3,components:C3,directives:A4,filters:V6}=c;if(u&&ML(u,t,null),i)for(const w1 in i){const $=i[w1];i1($)&&(t[w1]=$.bind(a))}if(r){const w1=r.call(a,a);L1(w1)&&(e.data=xc(w1))}if(C9=!0,n)for(const w1 in n){const $=n[w1],n3=i1($)?$.bind(a,a):i1($.get)?$.get.bind(a,a):E2,N4=!i1($)&&i1($.set)?$.set.bind(a):E2,U2=t4({get:n3,set:N4});Object.defineProperty(t,w1,{enumerable:!0,configurable:!0,get:()=>U2.value,set:x2=>U2.value=x2})}if(o)for(const w1 in o)Ti(o[w1],t,a,w1);if(l){const w1=i1(l)?l.call(a):l;Reflect.ownKeys(w1).forEach($=>{SL($,w1[$])})}d&&Xt(d,e,"c");function K1(w1,$){J($)?$.forEach(n3=>w1(n3.bind(a))):$&&w1($.bind(a))}if(K1(uL,v),K1(hL,g),K1(mL,V),K1(dL,R),K1(oL,E),K1(lL,k),K1(HL,W1),K1(gL,Y),K1(zL,H1),K1(vL,I),K1(ki,Q),K1(pL,a2),J(v2))if(v2.length){const w1=e.exposed||(e.exposed={});v2.forEach($=>{Object.defineProperty(w1,$,{get:()=>a[$],set:n3=>a[$]=n3})})}else e.exposed||(e.exposed={});r1&&e.render===E2&&(e.render=r1),V3!=null&&(e.inheritAttrs=V3),C3&&(e.components=C3),A4&&(e.directives=A4)}function ML(e,c,a=E2){J(e)&&(e=M9(e));for(const t in e){const r=e[t];let n;L1(r)?"default"in r?n=_8(r.from||t,r.default,!0):n=_8(r.from||t):n=_8(r),w2(n)?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function Xt(e,c,a){O2(J(e)?e.map(t=>t.bind(c.proxy)):e.bind(c.proxy),c,a)}function Ti(e,c,a,t){const r=t.includes(".")?Ai(a,t):()=>a[t];if(B1(e)){const n=c[e];i1(n)&&A8(r,n)}else if(i1(e))A8(r,e.bind(a));else if(L1(e))if(J(e))e.forEach(n=>Ti(n,c,a,t));else{const n=i1(e.handler)?e.handler.bind(a):c[e.handler];i1(n)&&A8(r,n,e)}}function Tc(e){const c=e.type,{mixins:a,extends:t}=c,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,o=n.get(c);let l;return o?l=o:!r.length&&!a&&!t?l=c:(l={},r.length&&r.forEach(u=>q8(l,u,i,!0)),q8(l,c,i)),L1(c)&&n.set(c,l),l}function q8(e,c,a,t=!1){const{mixins:r,extends:n}=c;n&&q8(e,n,a,!0),r&&r.forEach(i=>q8(e,i,a,!0));for(const i in c)if(!(t&&i==="expose")){const o=LL[i]||a&&a[i];e[i]=o?o(e[i],c[i]):c[i]}return e}const LL={data:Jt,props:cr,emits:cr,methods:k6,computed:k6,beforeCreate:h2,created:h2,beforeMount:h2,mounted:h2,beforeUpdate:h2,updated:h2,beforeDestroy:h2,beforeUnmount:h2,destroyed:h2,unmounted:h2,activated:h2,deactivated:h2,errorCaptured:h2,serverPrefetch:h2,components:k6,directives:k6,watch:bL,provide:Jt,inject:wL};function Jt(e,c){return c?e?function(){return e2(i1(e)?e.call(this,this):e,i1(c)?c.call(this,this):c)}:c:e}function wL(e,c){return k6(M9(e),M9(c))}function M9(e){if(J(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function h2(e,c){return e?[...new Set([].concat(e,c))]:c}function k6(e,c){return e?e2(Object.create(null),e,c):c}function cr(e,c){return e?J(e)&&J(c)?[...new Set([...e,...c])]:e2(Object.create(null),Yt(e),Yt(c??{})):c}function bL(e,c){if(!e)return c;if(!c)return e;const a=e2(Object.create(null),e);for(const t in c)a[t]=h2(e[t],c[t]);return a}function Ei(){return{app:null,config:{isNativeTag:aM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yL=0;function xL(e,c){return function(t,r=null){i1(t)||(t=e2({},t)),r!=null&&!L1(r)&&(r=null);const n=Ei(),i=new WeakSet;let o=!1;const l=n.app={_uid:yL++,_component:t,_props:r,_container:null,_context:n,_instance:null,version:cw,get config(){return n.config},set config(u){},use(u,...d){return i.has(u)||(u&&i1(u.install)?(i.add(u),u.install(l,...d)):i1(u)&&(i.add(u),u(l,...d))),l},mixin(u){return n.mixins.includes(u)||n.mixins.push(u),l},component(u,d){return d?(n.components[u]=d,l):n.components[u]},directive(u,d){return d?(n.directives[u]=d,l):n.directives[u]},mount(u,d,v){if(!o){const g=D2(t,r);return g.appContext=n,v===!0?v="svg":v===!1&&(v=void 0),d&&c?c(g,u):e(g,u,v),o=!0,l._container=u,u.__vue_app__=l,y5(g.component)||g.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return n.provides[u]=d,l},runWithContext(u){const d=B6;B6=l;try{return u()}finally{B6=d}}};return l}}let B6=null;function SL(e,c){if(m2){let a=m2.provides;const t=m2.parent&&m2.parent.provides;t===a&&(a=m2.provides=Object.create(t)),a[e]=c}}function _8(e,c,a=!1){const t=m2||L2;if(t||B6){const r=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:B6._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return a&&i1(c)?c.call(t&&t.proxy):c}}function AL(e,c,a,t=!1){const r={},n={};B8(n,w5,1),e.propsDefaults=Object.create(null),Pi(e,c,r,n);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);a?e.props=t?r:RM(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function NL(e,c,a,t){const{props:r,attrs:n,vnode:{patchFlag:i}}=e,o=z1(r),[l]=e.propsOptions;let u=!1;if((t||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let v=0;v<d.length;v++){let g=d[v];if(V5(e.emitsOptions,g))continue;const V=c[g];if(l)if(m1(n,g))V!==n[g]&&(n[g]=V,u=!0);else{const R=c6(g);r[R]=L9(l,o,R,V,e,!1)}else V!==n[g]&&(n[g]=V,u=!0)}}}else{Pi(e,c,r,n)&&(u=!0);let d;for(const v in o)(!c||!m1(c,v)&&((d=u6(v))===v||!m1(c,d)))&&(l?a&&(a[v]!==void 0||a[d]!==void 0)&&(r[v]=L9(l,o,v,void 0,e,!0)):delete r[v]);if(n!==o)for(const v in n)(!c||!m1(c,v))&&(delete n[v],u=!0)}u&&f3(e,"set","$attrs")}function Pi(e,c,a,t){const[r,n]=e.propsOptions;let i=!1,o;if(c)for(let l in c){if(D6(l))continue;const u=c[l];let d;r&&m1(r,d=c6(l))?!n||!n.includes(d)?a[d]=u:(o||(o={}))[d]=u:V5(e.emitsOptions,l)||(!(l in t)||u!==t[l])&&(t[l]=u,i=!0)}if(n){const l=z1(a),u=o||b1;for(let d=0;d<n.length;d++){const v=n[d];a[v]=L9(r,l,v,u[v],e,!m1(u,v))}}return i}function L9(e,c,a,t,r,n){const i=e[a];if(i!=null){const o=m1(i,"default");if(o&&t===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&i1(l)){const{propsDefaults:u}=r;if(a in u)t=u[a];else{const d=b0(r);t=u[a]=l.call(null,c),d()}}else t=l}i[0]&&(n&&!o?t=!1:i[1]&&(t===""||t===u6(a))&&(t=!0))}return t}function Ii(e,c,a=!1){const t=c.propsCache,r=t.get(e);if(r)return r;const n=e.props,i={},o=[];let l=!1;if(!i1(e)){const d=v=>{l=!0;const[g,V]=Ii(v,c,!0);e2(i,g),V&&o.push(...V)};!a&&c.mixins.length&&c.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!n&&!l)return L1(e)&&t.set(e,j4),j4;if(J(n))for(let d=0;d<n.length;d++){const v=c6(n[d]);er(v)&&(i[v]=b1)}else if(n)for(const d in n){const v=c6(d);if(er(v)){const g=n[d],V=i[v]=J(g)||i1(g)?{type:g}:e2({},g);if(V){const R=rr(Boolean,V.type),E=rr(String,V.type);V[0]=R>-1,V[1]=E<0||R<E,(R>-1||m1(V,"default"))&&o.push(v)}}}const u=[i,o];return L1(e)&&t.set(e,u),u}function er(e){return e[0]!=="$"&&!D6(e)}function ar(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function tr(e,c){return ar(e)===ar(c)}function rr(e,c){return J(c)?c.findIndex(a=>tr(a,e)):i1(c)&&tr(c,e)?0:-1}const Ri=e=>e[0]==="_"||e==="$stable",Ec=e=>J(e)?e.map(K2):[K2(e)],_L=(e,c,a)=>{if(c._n)return c;const t=QM((...r)=>Ec(c(...r)),a);return t._c=!1,t},Di=(e,c,a)=>{const t=e._ctx;for(const r in e){if(Ri(r))continue;const n=e[r];if(i1(n))c[r]=_L(r,n,t);else if(n!=null){const i=Ec(n);c[r]=()=>i}}},Fi=(e,c)=>{const a=Ec(c);e.slots.default=()=>a},kL=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=z1(c),B8(c,"_",a)):Di(c,e.slots={})}else e.slots={},c&&Fi(e,c);B8(e.slots,w5,1)},TL=(e,c,a)=>{const{vnode:t,slots:r}=e;let n=!0,i=b1;if(t.shapeFlag&32){const o=c._;o?a&&o===1?n=!1:(e2(r,c),!a&&o===1&&delete r._):(n=!c.$stable,Di(c,r)),i=c}else c&&(Fi(e,c),i={default:1});if(n)for(const o in r)!Ri(o)&&i[o]==null&&delete r[o]};function w9(e,c,a,t,r=!1){if(J(e)){e.forEach((g,V)=>w9(g,c&&(J(c)?c[V]:c),a,t,r));return}if(N8(t)&&!r)return;const n=t.shapeFlag&4?y5(t.component)||t.component.proxy:t.el,i=r?null:n,{i:o,r:l}=e,u=c&&c.r,d=o.refs===b1?o.refs={}:o.refs,v=o.setupState;if(u!=null&&u!==l&&(B1(u)?(d[u]=null,m1(v,u)&&(v[u]=null)):w2(u)&&(u.value=null)),i1(l))P3(l,o,12,[i,d]);else{const g=B1(l),V=w2(l);if(g||V){const R=()=>{if(e.f){const E=g?m1(v,l)?v[l]:d[l]:l.value;r?J(E)&&zc(E,n):J(E)?E.includes(n)||E.push(n):g?(d[l]=[n],m1(v,l)&&(v[l]=d[l])):(l.value=[n],e.k&&(d[e.k]=l.value))}else g?(d[l]=i,m1(v,l)&&(v[l]=i)):V&&(l.value=i,e.k&&(d[e.k]=i))};i?(R.id=-1,z2(R,a)):R()}}}const z2=tL;function EL(e){return PL(e)}function PL(e,c){const a=ti();a.__VUE__=!0;const{insert:t,remove:r,patchProp:n,createElement:i,createText:o,createComment:l,setText:u,setElementText:d,parentNode:v,nextSibling:g,setScopeId:V=E2,insertStaticContent:R}=e,E=(z,H,L,x=null,w=null,_=null,T=void 0,b=null,P=!!H.dynamicChildren)=>{if(z===H)return;z&&!x6(z,H)&&(x=M3(z),x2(z,w,_,!0),z=null),H.patchFlag===-2&&(P=!1,H.dynamicChildren=null);const{type:N,ref:O,shapeFlag:K}=H;switch(N){case L5:k(z,H,L,x);break;case J6:S(z,H,L,x);break;case q7:z==null&&I(H,L,x,T);break;case _2:C3(z,H,L,x,w,_,T,b,P);break;default:K&1?r1(z,H,L,x,w,_,T,b,P):K&6?A4(z,H,L,x,w,_,T,b,P):(K&64||K&128)&&N.process(z,H,L,x,w,_,T,b,P,i3)}O!=null&&w&&w9(O,z&&z.ref,_,H||z,!H)},k=(z,H,L,x)=>{if(z==null)t(H.el=o(H.children),L,x);else{const w=H.el=z.el;H.children!==z.children&&u(w,H.children)}},S=(z,H,L,x)=>{z==null?t(H.el=l(H.children||""),L,x):H.el=z.el},I=(z,H,L,x)=>{[z.el,z.anchor]=R(z.children,H,L,x,z.el,z.anchor)},B=({el:z,anchor:H},L,x)=>{let w;for(;z&&z!==H;)w=g(z),t(z,L,x),z=w;t(H,L,x)},Q=({el:z,anchor:H})=>{let L;for(;z&&z!==H;)L=g(z),r(z),z=L;r(H)},r1=(z,H,L,x,w,_,T,b,P)=>{H.type==="svg"?T="svg":H.type==="math"&&(T="mathml"),z==null?Y(H,L,x,w,_,T,b,P):a2(z,H,w,_,T,b,P)},Y=(z,H,L,x,w,_,T,b)=>{let P,N;const{props:O,shapeFlag:K,transition:G,dirs:X}=z;if(P=z.el=i(z.type,_,O&&O.is,O),K&8?d(P,z.children):K&16&&W1(z.children,P,null,x,w,O7(z,_),T,b),X&&J3(z,null,x,"created"),H1(P,z,z.scopeId,T,x),O){for(const s1 in O)s1!=="value"&&!D6(s1)&&n(P,s1,null,O[s1],_,z.children,x,w,S2);"value"in O&&n(P,"value",null,O.value,_),(N=O.onVnodeBeforeMount)&&W2(N,x,z)}X&&J3(z,null,x,"beforeMount");const n1=IL(w,G);n1&&G.beforeEnter(P),t(P,H,L),((N=O&&O.onVnodeMounted)||n1||X)&&z2(()=>{N&&W2(N,x,z),n1&&G.enter(P),X&&J3(z,null,x,"mounted")},w)},H1=(z,H,L,x,w)=>{if(L&&V(z,L),x)for(let _=0;_<x.length;_++)V(z,x[_]);if(w){let _=w.subTree;if(H===_){const T=w.vnode;H1(z,T,T.scopeId,T.slotScopeIds,w.parent)}}},W1=(z,H,L,x,w,_,T,b,P=0)=>{for(let N=P;N<z.length;N++){const O=z[N]=b?_3(z[N]):K2(z[N]);E(null,O,H,L,x,w,_,T,b)}},a2=(z,H,L,x,w,_,T)=>{const b=H.el=z.el;let{patchFlag:P,dynamicChildren:N,dirs:O}=H;P|=z.patchFlag&16;const K=z.props||b1,G=H.props||b1;let X;if(L&&c4(L,!1),(X=G.onVnodeBeforeUpdate)&&W2(X,L,H,z),O&&J3(H,z,L,"beforeUpdate"),L&&c4(L,!0),N?v2(z.dynamicChildren,N,b,L,x,O7(H,w),_):T||$(z,H,b,null,L,x,O7(H,w),_,!1),P>0){if(P&16)V3(b,H,K,G,L,x,w);else if(P&2&&K.class!==G.class&&n(b,"class",null,G.class,w),P&4&&n(b,"style",K.style,G.style,w),P&8){const n1=H.dynamicProps;for(let s1=0;s1<n1.length;s1++){const v1=n1[s1],V1=K[v1],H2=G[v1];(H2!==V1||v1==="value")&&n(b,v1,V1,H2,w,z.children,L,x,S2)}}P&1&&z.children!==H.children&&d(b,H.children)}else!T&&N==null&&V3(b,H,K,G,L,x,w);((X=G.onVnodeUpdated)||O)&&z2(()=>{X&&W2(X,L,H,z),O&&J3(H,z,L,"updated")},x)},v2=(z,H,L,x,w,_,T)=>{for(let b=0;b<H.length;b++){const P=z[b],N=H[b],O=P.el&&(P.type===_2||!x6(P,N)||P.shapeFlag&70)?v(P.el):L;E(P,N,O,null,x,w,_,T,!0)}},V3=(z,H,L,x,w,_,T)=>{if(L!==x){if(L!==b1)for(const b in L)!D6(b)&&!(b in x)&&n(z,b,L[b],null,T,H.children,w,_,S2);for(const b in x){if(D6(b))continue;const P=x[b],N=L[b];P!==N&&b!=="value"&&n(z,b,N,P,T,H.children,w,_,S2)}"value"in x&&n(z,"value",L.value,x.value,T)}},C3=(z,H,L,x,w,_,T,b,P)=>{const N=H.el=z?z.el:o(""),O=H.anchor=z?z.anchor:o("");let{patchFlag:K,dynamicChildren:G,slotScopeIds:X}=H;X&&(b=b?b.concat(X):X),z==null?(t(N,L,x),t(O,L,x),W1(H.children||[],L,O,w,_,T,b,P)):K>0&&K&64&&G&&z.dynamicChildren?(v2(z.dynamicChildren,G,L,w,_,T,b),(H.key!=null||w&&H===w.subTree)&&Bi(z,H,!0)):$(z,H,L,O,w,_,T,b,P)},A4=(z,H,L,x,w,_,T,b,P)=>{H.slotScopeIds=b,z==null?H.shapeFlag&512?w.ctx.activate(H,L,x,T,P):V6(H,L,x,w,_,T,P):K0(z,H,P)},V6=(z,H,L,x,w,_,T)=>{const b=z.component=WL(z,x,w);if(Ni(z)&&(b.ctx.renderer=i3),KL(b),b.asyncDep){if(w&&w.registerDep(b,K1),!z.el){const P=b.subTree=D2(J6);S(null,P,H,L)}}else K1(b,z,H,L,w,_,T)},K0=(z,H,L)=>{const x=H.component=z.component;if(JM(z,H,L))if(x.asyncDep&&!x.asyncResolved){w1(x,H,L);return}else x.next=H,$M(x.update),x.effect.dirty=!0,x.update();else H.el=z.el,x.vnode=H},K1=(z,H,L,x,w,_,T)=>{const b=()=>{if(z.isMounted){let{next:O,bu:K,u:G,parent:X,vnode:n1}=z;{const V2=Oi(z);if(V2){O&&(O.el=n1.el,w1(z,O,T)),V2.asyncDep.then(()=>{z.isUnmounted||b()});return}}let s1=O,v1;c4(z,!1),O?(O.el=n1.el,w1(z,O,T)):O=n1,K&&S8(K),(v1=O.props&&O.props.onVnodeBeforeUpdate)&&W2(v1,X,O,n1),c4(z,!0);const V1=D7(z),H2=z.subTree;z.subTree=V1,E(H2,V1,v(H2.el),M3(H2),z,w,_),O.el=V1.el,s1===null&&cL(z,V1.el),G&&z2(G,w),(v1=O.props&&O.props.onVnodeUpdated)&&z2(()=>W2(v1,X,O,n1),w)}else{let O;const{el:K,props:G}=H,{bm:X,m:n1,parent:s1}=z,v1=N8(H);if(c4(z,!1),X&&S8(X),!v1&&(O=G&&G.onVnodeBeforeMount)&&W2(O,s1,H),c4(z,!0),K&&M6){const V1=()=>{z.subTree=D7(z),M6(K,z.subTree,z,w,null)};v1?H.type.__asyncLoader().then(()=>!z.isUnmounted&&V1()):V1()}else{const V1=z.subTree=D7(z);E(null,V1,L,x,z,w,_),H.el=V1.el}if(n1&&z2(n1,w),!v1&&(O=G&&G.onVnodeMounted)){const V1=H;z2(()=>W2(O,s1,V1),w)}(H.shapeFlag&256||s1&&N8(s1.vnode)&&s1.vnode.shapeFlag&256)&&z.a&&z2(z.a,w),z.isMounted=!0,H=L=x=null}},P=z.effect=new Mc(b,E2,()=>kc(N),z.scope),N=z.update=()=>{P.dirty&&P.run()};N.id=z.uid,c4(z,!0),N()},w1=(z,H,L)=>{H.component=z;const x=z.vnode.props;z.vnode=H,z.next=null,NL(z,H.props,x,L),TL(z,H.children,L),w4(),Kt(z),b4()},$=(z,H,L,x,w,_,T,b,P=!1)=>{const N=z&&z.children,O=z?z.shapeFlag:0,K=H.children,{patchFlag:G,shapeFlag:X}=H;if(G>0){if(G&128){N4(N,K,L,x,w,_,T,b,P);return}else if(G&256){n3(N,K,L,x,w,_,T,b,P);return}}X&8?(O&16&&S2(N,w,_),K!==N&&d(L,K)):O&16?X&16?N4(N,K,L,x,w,_,T,b,P):S2(N,w,_,!0):(O&8&&d(L,""),X&16&&W1(K,L,x,w,_,T,b,P))},n3=(z,H,L,x,w,_,T,b,P)=>{z=z||j4,H=H||j4;const N=z.length,O=H.length,K=Math.min(N,O);let G;for(G=0;G<K;G++){const X=H[G]=P?_3(H[G]):K2(H[G]);E(z[G],X,L,null,w,_,T,b,P)}N>O?S2(z,w,_,!0,!1,K):W1(H,L,x,w,_,T,b,P,K)},N4=(z,H,L,x,w,_,T,b,P)=>{let N=0;const O=H.length;let K=z.length-1,G=O-1;for(;N<=K&&N<=G;){const X=z[N],n1=H[N]=P?_3(H[N]):K2(H[N]);if(x6(X,n1))E(X,n1,L,null,w,_,T,b,P);else break;N++}for(;N<=K&&N<=G;){const X=z[K],n1=H[G]=P?_3(H[G]):K2(H[G]);if(x6(X,n1))E(X,n1,L,null,w,_,T,b,P);else break;K--,G--}if(N>K){if(N<=G){const X=G+1,n1=X<O?H[X].el:x;for(;N<=G;)E(null,H[N]=P?_3(H[N]):K2(H[N]),L,n1,w,_,T,b,P),N++}}else if(N>G)for(;N<=K;)x2(z[N],w,_,!0),N++;else{const X=N,n1=N,s1=new Map;for(N=n1;N<=G;N++){const Z1=H[N]=P?_3(H[N]):K2(H[N]);Z1.key!=null&&s1.set(Z1.key,N)}let v1,V1=0;const H2=G-n1+1;let V2=!1,L3=0;const w3=new Array(H2);for(N=0;N<H2;N++)w3[N]=0;for(N=X;N<=K;N++){const Z1=z[N];if(V1>=H2){x2(Z1,w,_,!0);continue}let A2;if(Z1.key!=null)A2=s1.get(Z1.key);else for(v1=n1;v1<=G;v1++)if(w3[v1-n1]===0&&x6(Z1,H[v1])){A2=v1;break}A2===void 0?x2(Z1,w,_,!0):(w3[A2-n1]=N+1,A2>=L3?L3=A2:V2=!0,E(Z1,H[A2],L,null,w,_,T,b,P),V1++)}const K3=V2?RL(w3):j4;for(v1=K3.length-1,N=H2-1;N>=0;N--){const Z1=n1+N,A2=H[Z1],k4=Z1+1<O?H[Z1+1].el:x;w3[N]===0?E(null,A2,L,k4,w,_,T,b,P):V2&&(v1<0||N!==K3[v1]?U2(A2,L,k4,2):v1--)}}},U2=(z,H,L,x,w=null)=>{const{el:_,type:T,transition:b,children:P,shapeFlag:N}=z;if(N&6){U2(z.component.subTree,H,L,x);return}if(N&128){z.suspense.move(H,L,x);return}if(N&64){T.move(z,H,L,i3);return}if(T===_2){t(_,H,L);for(let K=0;K<P.length;K++)U2(P[K],H,L,x);t(z.anchor,H,L);return}if(T===q7){B(z,H,L);return}if(x!==2&&N&1&&b)if(x===0)b.beforeEnter(_),t(_,H,L),z2(()=>b.enter(_),w);else{const{leave:K,delayLeave:G,afterLeave:X}=b,n1=()=>t(_,H,L),s1=()=>{K(_,()=>{n1(),X&&X()})};G?G(_,n1,s1):s1()}else t(_,H,L)},x2=(z,H,L,x=!1,w=!1)=>{const{type:_,props:T,ref:b,children:P,dynamicChildren:N,shapeFlag:O,patchFlag:K,dirs:G}=z;if(b!=null&&w9(b,null,L,z,!0),O&256){H.ctx.deactivate(z);return}const X=O&1&&G,n1=!N8(z);let s1;if(n1&&(s1=T&&T.onVnodeBeforeUnmount)&&W2(s1,H,z),O&6)_4(z.component,L,x);else{if(O&128){z.suspense.unmount(L,x);return}X&&J3(z,null,H,"beforeUnmount"),O&64?z.type.remove(z,H,L,w,i3,x):N&&(_!==_2||K>0&&K&64)?S2(N,H,L,!1,!0):(_===_2&&K&384||!w&&O&16)&&S2(P,H,L),x&&C(z)}(n1&&(s1=T&&T.onVnodeUnmounted)||X)&&z2(()=>{s1&&W2(s1,H,z),X&&J3(z,null,H,"unmounted")},L)},C=z=>{const{type:H,el:L,anchor:x,transition:w}=z;if(H===_2){M7(L,x);return}if(H===q7){Q(z);return}const _=()=>{r(L),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(z.shapeFlag&1&&w&&!w.persisted){const{leave:T,delayLeave:b}=w,P=()=>T(L,_);b?b(z.el,_,P):P()}else _()},M7=(z,H)=>{let L;for(;z!==H;)L=g(z),r(z),z=L;r(H)},_4=(z,H,L)=>{const{bum:x,scope:w,update:_,subTree:T,um:b}=z;x&&S8(x),w.stop(),_&&(_.active=!1,x2(T,z,H,L)),b&&z2(b,H),z2(()=>{z.isUnmounted=!0},H),H&&H.pendingBranch&&!H.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===H.pendingId&&(H.deps--,H.deps===0&&H.resolve())},S2=(z,H,L,x=!1,w=!1,_=0)=>{for(let T=_;T<z.length;T++)x2(z[T],H,L,x,w)},M3=z=>z.shapeFlag&6?M3(z.component.subTree):z.shapeFlag&128?z.suspense.next():g(z.anchor||z.el);let q1=!1;const $2=(z,H,L)=>{z==null?H._vnode&&x2(H._vnode,null,null,!0):E(H._vnode||null,z,H,null,null,null,L),q1||(q1=!0,Kt(),bi(),q1=!1),H._vnode=z},i3={p:E,um:x2,m:U2,r:C,mt:V6,mc:W1,pc:$,pbc:v2,n:M3,o:e};let C6,M6;return c&&([C6,M6]=c(i3)),{render:$2,hydrate:C6,createApp:xL($2,C6)}}function O7({type:e,props:c},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&c&&c.encoding&&c.encoding.includes("html")?void 0:a}function c4({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function IL(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Bi(e,c,a=!1){const t=e.children,r=c.children;if(J(t)&&J(r))for(let n=0;n<t.length;n++){const i=t[n];let o=r[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[n]=_3(r[n]),o.el=i.el),a||Bi(i,o)),o.type===L5&&(o.el=i.el)}}function RL(e){const c=e.slice(),a=[0];let t,r,n,i,o;const l=e.length;for(t=0;t<l;t++){const u=e[t];if(u!==0){if(r=a[a.length-1],e[r]<u){c[t]=r,a.push(t);continue}for(n=0,i=a.length-1;n<i;)o=n+i>>1,e[a[o]]<u?n=o+1:i=o;u<e[a[n]]&&(n>0&&(c[t]=a[n-1]),a[n]=t)}}for(n=a.length,i=a[n-1];n-- >0;)a[n]=i,i=c[i];return a}function Oi(e){const c=e.subTree.component;if(c)return c.asyncDep&&!c.asyncResolved?c:Oi(c)}const DL=e=>e.__isTeleport,_2=Symbol.for("v-fgt"),L5=Symbol.for("v-txt"),J6=Symbol.for("v-cmt"),q7=Symbol.for("v-stc"),O6=[];let R2=null;function e4(e=!1){O6.push(R2=e?null:[])}function FL(){O6.pop(),R2=O6[O6.length-1]||null}let c0=1;function nr(e){c0+=e}function BL(e){return e.dynamicChildren=c0>0?R2||j4:null,FL(),c0>0&&R2&&R2.push(e),e}function a4(e,c,a,t,r,n){return BL(n2(e,c,a,t,r,n,!0))}function b9(e){return e?e.__v_isVNode===!0:!1}function x6(e,c){return e.type===c.type&&e.key===c.key}const w5="__vInternal",qi=({key:e})=>e??null,k8=({ref:e,ref_key:c,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?B1(e)||w2(e)||i1(e)?{i:L2,r:e,k:c,f:!!a}:e:null);function n2(e,c=null,a=null,t=0,r=null,n=e===_2?0:1,i=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&qi(c),ref:c&&k8(c),scopeId:C5,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:L2};return o?(Pc(l,a),n&128&&e.normalize(l)):a&&(l.shapeFlag|=B1(a)?8:16),c0>0&&!i&&R2&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&R2.push(l),l}const D2=OL;function OL(e,c=null,a=null,t=0,r=null,n=!1){if((!e||e===eL)&&(e=J6),b9(e)){const o=e6(e,c,!0);return a&&Pc(o,a),c0>0&&!n&&R2&&(o.shapeFlag&6?R2[R2.indexOf(e)]=o:R2.push(o)),o.patchFlag|=-2,o}if(XL(e)&&(e=e.__vccOpts),c){c=qL(c);let{class:o,style:l}=c;o&&!B1(o)&&(c.class=Cc(o)),L1(l)&&(gi(l)&&!J(l)&&(l=e2({},l)),c.style=Vc(l))}const i=B1(e)?1:aL(e)?128:DL(e)?64:L1(e)?4:i1(e)?2:0;return n2(e,c,a,t,r,i,n,!0)}function qL(e){return e?gi(e)||w5 in e?e2({},e):e:null}function e6(e,c,a=!1){const{props:t,ref:r,patchFlag:n,children:i}=e,o=c?$L(t||{},c):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&qi(o),ref:c&&c.ref?a&&r?J(r)?r.concat(k8(c)):[r,k8(c)]:k8(c):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==_2?n===-1?16:n|16:n,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&e6(e.ssContent),ssFallback:e.ssFallback&&e6(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function UL(e=" ",c=0){return D2(L5,null,e,c)}function K2(e){return e==null||typeof e=="boolean"?D2(J6):J(e)?D2(_2,null,e.slice()):typeof e=="object"?_3(e):D2(L5,null,String(e))}function _3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:e6(e)}function Pc(e,c){let a=0;const{shapeFlag:t}=e;if(c==null)c=null;else if(J(c))a=16;else if(typeof c=="object")if(t&65){const r=c.default;r&&(r._c&&(r._d=!1),Pc(e,r()),r._c&&(r._d=!0));return}else{a=32;const r=c._;!r&&!(w5 in c)?c._ctx=L2:r===3&&L2&&(L2.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else i1(c)?(c={default:c,_ctx:L2},a=32):(c=String(c),t&64?(a=16,c=[UL(c)]):a=8);e.children=c,e.shapeFlag|=a}function $L(...e){const c={};for(let a=0;a<e.length;a++){const t=e[a];for(const r in t)if(r==="class")c.class!==t.class&&(c.class=Cc([c.class,t.class]));else if(r==="style")c.style=Vc([c.style,t.style]);else if(d5(r)){const n=c[r],i=t[r];i&&n!==i&&!(J(n)&&n.includes(i))&&(c[r]=n?[].concat(n,i):i)}else r!==""&&(c[r]=t[r])}return c}function W2(e,c,a,t=null){O2(e,c,7,[a,t])}const jL=Ei();let GL=0;function WL(e,c,a){const t=e.type,r=(c?c.appContext:e.appContext)||jL,n={uid:GL++,vnode:e,type:t,parent:c,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vM(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ii(t,r),emitsOptions:xi(t,r),emit:null,emitted:null,propsDefaults:b1,inheritAttrs:t.inheritAttrs,ctx:b1,data:b1,props:b1,attrs:b1,slots:b1,refs:b1,setupState:b1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=c?c.root:n,n.emit=WM.bind(null,n),e.ce&&e.ce(n),n}let m2=null,U8,y9;{const e=ti(),c=(a,t)=>{let r;return(r=e[a])||(r=e[a]=[]),r.push(t),n=>{r.length>1?r.forEach(i=>i(n)):r[0](n)}};U8=c("__VUE_INSTANCE_SETTERS__",a=>m2=a),y9=c("__VUE_SSR_SETTERS__",a=>b5=a)}const b0=e=>{const c=m2;return U8(e),e.scope.on(),()=>{e.scope.off(),U8(c)}},ir=()=>{m2&&m2.scope.off(),U8(null)};function Ui(e){return e.vnode.shapeFlag&4}let b5=!1;function KL(e,c=!1){c&&y9(c);const{props:a,children:t}=e.vnode,r=Ui(e);AL(e,a,r,c),kL(e,t);const n=r?ZL(e,c):void 0;return c&&y9(!1),n}function ZL(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=Hi(new Proxy(e.ctx,VL));const{setup:t}=a;if(t){const r=e.setupContext=t.length>1?YL(e):null,n=b0(e);w4();const i=P3(t,e,0,[e.props,r]);if(b4(),n(),Jn(i)){if(i.then(ir,ir),c)return i.then(o=>{sr(e,o,c)}).catch(o=>{H5(o,e,0)});e.asyncDep=i}else sr(e,i,c)}else $i(e,c)}function sr(e,c,a){i1(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:L1(c)&&(e.setupState=Ci(c)),$i(e,a)}let or;function $i(e,c,a){const t=e.type;if(!e.render){if(!c&&or&&!t.render){const r=t.template||Tc(e).template;if(r){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:l}=t,u=e2(e2({isCustomElement:n,delimiters:o},i),l);t.render=or(r,u)}}e.render=t.render||E2}{const r=b0(e);w4();try{CL(e)}finally{b4(),r()}}}function QL(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,a){return g2(e,"get","$attrs"),c[a]}}))}function YL(e){const c=a=>{e.exposed=a||{}};return{get attrs(){return QL(e)},slots:e.slots,emit:e.emit,expose:c}}function y5(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ci(Hi(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in F6)return F6[a](e)},has(c,a){return a in c||a in F6}}))}function XL(e){return i1(e)&&"__vccOpts"in e}const t4=(e,c)=>DM(e,c,b5);function JL(e,c,a){const t=arguments.length;return t===2?L1(c)&&!J(c)?b9(c)?D2(e,null,[c]):D2(e,c):D2(e,null,c):(t>3?a=Array.prototype.slice.call(arguments,2):t===3&&b9(a)&&(a=[a]),D2(e,c,a))}const cw="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ew="http://www.w3.org/2000/svg",aw="http://www.w3.org/1998/Math/MathML",k3=typeof document<"u"?document:null,lr=k3&&k3.createElement("template"),tw={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,t)=>{const r=c==="svg"?k3.createElementNS(ew,e):c==="mathml"?k3.createElementNS(aw,e):k3.createElement(e,a?{is:a}:void 0);return e==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:e=>k3.createTextNode(e),createComment:e=>k3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>k3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,t,r,n){const i=a?a.previousSibling:c.lastChild;if(r&&(r===n||r.nextSibling))for(;c.insertBefore(r.cloneNode(!0),a),!(r===n||!(r=r.nextSibling)););else{lr.innerHTML=t==="svg"?`<svg>${e}</svg>`:t==="mathml"?`<math>${e}</math>`:e;const o=lr.content;if(t==="svg"||t==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}c.insertBefore(o,a)}return[i?i.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}},rw=Symbol("_vtc");function nw(e,c,a){const t=e[rw];t&&(c=(c?[c,...t]:[...t]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}const $8=Symbol("_vod"),ji=Symbol("_vsh"),fr={beforeMount(e,{value:c},{transition:a}){e[$8]=e.style.display==="none"?"":e.style.display,a&&c?a.beforeEnter(e):S6(e,c)},mounted(e,{value:c},{transition:a}){a&&c&&a.enter(e)},updated(e,{value:c,oldValue:a},{transition:t}){!c!=!a&&(t?c?(t.beforeEnter(e),S6(e,!0),t.enter(e)):t.leave(e,()=>{S6(e,!1)}):S6(e,c))},beforeUnmount(e,{value:c}){S6(e,c)}};function S6(e,c){e.style.display=c?e[$8]:"none",e[ji]=!c}const iw=Symbol(""),sw=/(^|;)\s*display\s*:/;function ow(e,c,a){const t=e.style,r=B1(a);let n=!1;if(a&&!r){if(c)if(B1(c))for(const i of c.split(";")){const o=i.slice(0,i.indexOf(":")).trim();a[o]==null&&T8(t,o,"")}else for(const i in c)a[i]==null&&T8(t,i,"");for(const i in a)i==="display"&&(n=!0),T8(t,i,a[i])}else if(r){if(c!==a){const i=t[iw];i&&(a+=";"+i),t.cssText=a,n=sw.test(a)}}else c&&e.removeAttribute("style");$8 in e&&(e[$8]=n?t.display:"",e[ji]&&(t.display="none"))}const ur=/\s*!important$/;function T8(e,c,a){if(J(a))a.forEach(t=>T8(e,c,t));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const t=lw(e,c);ur.test(a)?e.setProperty(u6(t),a.replace(ur,""),"important"):e[t]=a}}const hr=["Webkit","Moz","ms"],U7={};function lw(e,c){const a=U7[c];if(a)return a;let t=c6(c);if(t!=="filter"&&t in e)return U7[c]=t;t=ai(t);for(let r=0;r<hr.length;r++){const n=hr[r]+t;if(n in e)return U7[c]=n}return c}const mr="http://www.w3.org/1999/xlink";function fw(e,c,a,t,r){if(t&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(mr,c.slice(6,c.length)):e.setAttributeNS(mr,c,a);else{const n=hM(c);a==null||n&&!ri(a)?e.removeAttribute(c):e.setAttribute(c,n?"":a)}}function uw(e,c,a,t,r,n,i){if(c==="innerHTML"||c==="textContent"){t&&i(t,r,n),e[c]=a??"";return}const o=e.tagName;if(c==="value"&&o!=="PROGRESS"&&!o.includes("-")){const u=o==="OPTION"?e.getAttribute("value")||"":e.value,d=a??"";(u!==d||!("_value"in e))&&(e.value=d),a==null&&e.removeAttribute(c),e._value=a;return}let l=!1;if(a===""||a==null){const u=typeof e[c];u==="boolean"?a=ri(a):a==null&&u==="string"?(a="",l=!0):u==="number"&&(a=0,l=!0)}try{e[c]=a}catch{}l&&e.removeAttribute(c)}function Gi(e,c,a,t){e.addEventListener(c,a,t)}function hw(e,c,a,t){e.removeEventListener(c,a,t)}const dr=Symbol("_vei");function mw(e,c,a,t,r=null){const n=e[dr]||(e[dr]={}),i=n[c];if(t&&i)i.value=t;else{const[o,l]=dw(c);if(t){const u=n[c]=zw(t,r);Gi(e,o,u,l)}else i&&(hw(e,o,i,l),n[c]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function dw(e){let c;if(vr.test(e)){c={};let t;for(;t=e.match(vr);)e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):u6(e.slice(2)),c]}let $7=0;const vw=Promise.resolve(),pw=()=>$7||(vw.then(()=>$7=0),$7=Date.now());function zw(e,c){const a=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=a.attached)return;O2(gw(t,a.value),c,5,[t])};return a.value=e,a.attached=pw(),a}function gw(e,c){if(J(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(t=>r=>!r._stopped&&t&&t(r))}else return c}const pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hw=(e,c,a,t,r,n,i,o,l)=>{const u=r==="svg";c==="class"?nw(e,t,u):c==="style"?ow(e,a,t):d5(c)?pc(c)||mw(e,c,a,t,i):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):Vw(e,c,t,u))?uw(e,c,t,n,i,o,l):(c==="true-value"?e._trueValue=t:c==="false-value"&&(e._falseValue=t),fw(e,c,t,u))};function Vw(e,c,a,t){if(t)return!!(c==="innerHTML"||c==="textContent"||c in e&&pr(c)&&i1(a));if(c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA")return!1;if(c==="width"||c==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pr(c)&&B1(a)?!1:c in e}const zr=e=>{const c=e.props["onUpdate:modelValue"]||!1;return J(c)?a=>S8(c,a):c},j7=Symbol("_assign"),Cw={deep:!0,created(e,{value:c,modifiers:{number:a}},t){const r=v5(c);Gi(e,"change",()=>{const n=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>a?Hc(j8(i)):j8(i));e[j7](e.multiple?r?new Set(n):n:n[0]),e._assigning=!0,Li(()=>{e._assigning=!1})}),e[j7]=zr(t)},mounted(e,{value:c,modifiers:{number:a}}){gr(e,c,a)},beforeUpdate(e,c,a){e[j7]=zr(a)},updated(e,{value:c,modifiers:{number:a}}){e._assigning||gr(e,c,a)}};function gr(e,c,a){const t=e.multiple,r=J(c);if(!(t&&!r&&!v5(c))){for(let n=0,i=e.options.length;n<i;n++){const o=e.options[n],l=j8(o);if(t)if(r){const u=typeof l;u==="string"||u==="number"?o.selected=c.includes(a?Hc(l):l):o.selected=dM(c,l)>-1}else o.selected=c.has(l);else if(z5(j8(o),c)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function j8(e){return"_value"in e?e._value:e.value}const Mw=e2({patchProp:Hw},tw);let Hr;function Lw(){return Hr||(Hr=EL(Mw))}const ww=(...e)=>{const c=Lw().createApp(...e),{mount:a}=c;return c.mount=t=>{const r=yw(t);if(!r)return;const n=c._component;!i1(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=a(r,!1,bw(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},c};function bw(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function yw(e){return B1(e)?document.querySelector(e):e}var S3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wi={exports:{}};/*!
* sweetalert2 v11.10.7
* Released under the MIT License.
*/(function(e,c){(function(a,t){e.exports=t()})(S3,function(){function a(m,s,f){if(typeof m=="function"?m===s:m.has(s))return arguments.length<3?s:f;throw new TypeError("Private element is not present on this object")}function t(m,s,f){return s=k(s),B(m,o()?Reflect.construct(s,f||[],k(m).constructor):s.apply(m,f))}function r(m,s){return m.get(a(m,s))}function n(m,s,f){return m.set(a(m,s),f),f}function i(m,s,f){if(o())return Reflect.construct.apply(null,arguments);var h=[null];h.push.apply(h,s);var p=new(m.bind.apply(m,h));return f&&S(p,f.prototype),p}function o(){try{var m=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(o=function(){return!!m})()}function l(m,s){var f=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var h,p,M,q,o1=[],l1=!0,_1=!1;try{if(M=(f=f.call(m)).next,s===0){if(Object(f)!==f)return;l1=!1}else for(;!(l1=(h=M.call(f)).done)&&(o1.push(h.value),o1.length!==s);l1=!0);}catch(y6){_1=!0,p=y6}finally{try{if(!l1&&f.return!=null&&(q=f.return(),Object(q)!==q))return}finally{if(_1)throw p}}return o1}}function u(m,s){if(typeof m!="object"||!m)return m;var f=m[Symbol.toPrimitive];if(f!==void 0){var h=f.call(m,s||"default");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(m)}function d(m){var s=u(m,"string");return typeof s=="symbol"?s:String(s)}function v(m){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},v(m)}function g(m,s){if(!(m instanceof s))throw new TypeError("Cannot call a class as a function")}function V(m,s){for(var f=0;f<s.length;f++){var h=s[f];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(m,d(h.key),h)}}function R(m,s,f){return s&&V(m.prototype,s),f&&V(m,f),Object.defineProperty(m,"prototype",{writable:!1}),m}function E(m,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(s&&s.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),s&&S(m,s)}function k(m){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},k(m)}function S(m,s){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,p){return h.__proto__=p,h},S(m,s)}function I(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function B(m,s){if(s&&(typeof s=="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(m)}function Q(m,s){for(;!Object.prototype.hasOwnProperty.call(m,s)&&(m=k(m),m!==null););return m}function r1(){return typeof Reflect<"u"&&Reflect.get?r1=Reflect.get.bind():r1=function(s,f,h){var p=Q(s,f);if(p){var M=Object.getOwnPropertyDescriptor(p,f);return M.get?M.get.call(arguments.length<3?s:h):M.value}},r1.apply(this,arguments)}function Y(m,s){return a2(m)||l(m,s)||V3(m,s)||V6()}function H1(m){return W1(m)||v2(m)||V3(m)||A4()}function W1(m){if(Array.isArray(m))return C3(m)}function a2(m){if(Array.isArray(m))return m}function v2(m){if(typeof Symbol<"u"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function V3(m,s){if(m){if(typeof m=="string")return C3(m,s);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return C3(m,s)}}function C3(m,s){(s==null||s>m.length)&&(s=m.length);for(var f=0,h=new Array(s);f<s;f++)h[f]=m[f];return h}function A4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K0(m,s){if(s.has(m))throw new TypeError("Cannot initialize the same private elements twice on an object")}function K1(m,s,f){K0(m,s),s.set(m,f)}var w1=100,$={},n3=function(){$.previousActiveElement instanceof HTMLElement?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},N4=function(s){return new Promise(function(f){if(!s)return f();var h=window.scrollX,p=window.scrollY;$.restoreFocusTimeout=setTimeout(function(){n3(),f()},w1),window.scrollTo(h,p)})},U2="swal2-",x2=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],C=x2.reduce(function(m,s){return m[s]=U2+s,m},{}),M7=["success","warning","info","question","error"],_4=M7.reduce(function(m,s){return m[s]=U2+s,m},{}),S2="SweetAlert2:",M3=function(s){return s.charAt(0).toUpperCase()+s.slice(1)},q1=function(s){console.warn("".concat(S2," ").concat(v(s)==="object"?s.join(" "):s))},$2=function(s){console.error("".concat(S2," ").concat(s))},i3=[],C6=function(s){i3.includes(s)||(i3.push(s),q1(s))},M6=function(s,f){C6('"'.concat(s,'" is deprecated and will be removed in the next major release. Please use "').concat(f,'" instead.'))},z=function(s){return typeof s=="function"?s():s},H=function(s){return s&&typeof s.toPromise=="function"},L=function(s){return H(s)?s.toPromise():Promise.resolve(s)},x=function(s){return s&&Promise.resolve(s)===s},w=function(){return document.body.querySelector(".".concat(C.container))},_=function(s){var f=w();return f?f.querySelector(s):null},T=function(s){return _(".".concat(s))},b=function(){return T(C.popup)},P=function(){return T(C.icon)},N=function(){return T(C["icon-content"])},O=function(){return T(C.title)},K=function(){return T(C["html-container"])},G=function(){return T(C.image)},X=function(){return T(C["progress-steps"])},n1=function(){return T(C["validation-message"])},s1=function(){return _(".".concat(C.actions," .").concat(C.confirm))},v1=function(){return _(".".concat(C.actions," .").concat(C.cancel))},V1=function(){return _(".".concat(C.actions," .").concat(C.deny))},H2=function(){return T(C["input-label"])},V2=function(){return _(".".concat(C.loader))},L3=function(){return T(C.actions)},w3=function(){return T(C.footer)},K3=function(){return T(C["timer-progress-bar"])},Z1=function(){return T(C.close)},A2=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,k4=function(){var s=b();if(!s)return[];var f=s.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),h=Array.from(f).sort(function(q,o1){var l1=parseInt(q.getAttribute("tabindex")||"0"),_1=parseInt(o1.getAttribute("tabindex")||"0");return l1>_1?1:l1<_1?-1:0}),p=s.querySelectorAll(A2),M=Array.from(p).filter(function(q){return q.getAttribute("tabindex")!=="-1"});return H1(new Set(h.concat(M))).filter(function(q){return M2(q)})},L7=function(){return s3(document.body,C.shown)&&!s3(document.body,C["toast-shown"])&&!s3(document.body,C["no-backdrop"])},Z0=function(){var s=b();return s?s3(s,C.toast):!1},_H=function(){var s=b();return s?s.hasAttribute("data-loading"):!1},C2=function(s,f){if(s.textContent="",f){var h=new DOMParser,p=h.parseFromString(f,"text/html"),M=p.querySelector("head");M&&Array.from(M.childNodes).forEach(function(o1){s.appendChild(o1)});var q=p.querySelector("body");q&&Array.from(q.childNodes).forEach(function(o1){o1 instanceof HTMLVideoElement||o1 instanceof HTMLAudioElement?s.appendChild(o1.cloneNode(!0)):s.appendChild(o1)})}},s3=function(s,f){if(!f)return!1;for(var h=f.split(/\s+/),p=0;p<h.length;p++)if(!s.classList.contains(h[p]))return!1;return!0},kH=function(s,f){Array.from(s.classList).forEach(function(h){!Object.values(C).includes(h)&&!Object.values(_4).includes(h)&&!Object.values(f.showClass||{}).includes(h)&&s.classList.remove(h)})},N2=function(s,f,h){if(kH(s,f),f.customClass&&f.customClass[h]){if(typeof f.customClass[h]!="string"&&!f.customClass[h].forEach){q1("Invalid type of customClass.".concat(h,'! Expected string or iterable object, got "').concat(v(f.customClass[h]),'"'));return}h1(s,f.customClass[h])}},Q0=function(s,f){if(!f)return null;switch(f){case"select":case"textarea":case"file":return s.querySelector(".".concat(C.popup," > .").concat(C[f]));case"checkbox":return s.querySelector(".".concat(C.popup," > .").concat(C.checkbox," input"));case"radio":return s.querySelector(".".concat(C.popup," > .").concat(C.radio," input:checked"))||s.querySelector(".".concat(C.popup," > .").concat(C.radio," input:first-child"));case"range":return s.querySelector(".".concat(C.popup," > .").concat(C.range," input"));default:return s.querySelector(".".concat(C.popup," > .").concat(C.input))}},ja=function(s){if(s.focus(),s.type!=="file"){var f=s.value;s.value="",s.value=f}},Ga=function(s,f,h){!s||!f||(typeof f=="string"&&(f=f.split(/\s+/).filter(Boolean)),f.forEach(function(p){Array.isArray(s)?s.forEach(function(M){h?M.classList.add(p):M.classList.remove(p)}):h?s.classList.add(p):s.classList.remove(p)}))},h1=function(s,f){Ga(s,f,!0)},j2=function(s,f){Ga(s,f,!1)},b3=function(s,f){for(var h=Array.from(s.children),p=0;p<h.length;p++){var M=h[p];if(M instanceof HTMLElement&&s3(M,f))return M}},Z3=function(s,f,h){h==="".concat(parseInt(h))&&(h=parseInt(h)),h||parseInt(h)===0?s.style.setProperty(f,typeof h=="number"?"".concat(h,"px"):h):s.style.removeProperty(f)},U1=function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s&&(s.style.display=f)},t2=function(s){s&&(s.style.display="none")},w7=function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";s&&new MutationObserver(function(){L6(s,s.innerHTML,f)}).observe(s,{childList:!0,subtree:!0})},Wa=function(s,f,h,p){var M=s.querySelector(f);M&&M.style.setProperty(h,p)},L6=function(s,f){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";f?U1(s,h):t2(s)},M2=function(s){return!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length))},TH=function(){return!M2(s1())&&!M2(V1())&&!M2(v1())},Ka=function(s){return s.scrollHeight>s.clientHeight},Za=function(s){var f=window.getComputedStyle(s),h=parseFloat(f.getPropertyValue("animation-duration")||"0"),p=parseFloat(f.getPropertyValue("transition-duration")||"0");return h>0||p>0},b7=function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=K3();h&&M2(h)&&(f&&(h.style.transition="none",h.style.width="100%"),setTimeout(function(){h.style.transition="width ".concat(s/1e3,"s linear"),h.style.width="0%"},10))},EH=function(){var s=K3();if(s){var f=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";var h=parseInt(window.getComputedStyle(s).width),p=f/h*100;s.style.width="".concat(p,"%")}},Qa=function(){return typeof window>"u"||typeof document>"u"},PH=`
 <div aria-labelledby="`.concat(C.title,'" aria-describedby="').concat(C["html-container"],'" class="').concat(C.popup,`" tabindex="-1">
   <button type="button" class="`).concat(C.close,`"></button>
   <ul class="`).concat(C["progress-steps"],`"></ul>
   <div class="`).concat(C.icon,`"></div>
   <img class="`).concat(C.image,`" />
   <h2 class="`).concat(C.title,'" id="').concat(C.title,`"></h2>
   <div class="`).concat(C["html-container"],'" id="').concat(C["html-container"],`"></div>
   <input class="`).concat(C.input,'" id="').concat(C.input,`" />
   <input type="file" class="`).concat(C.file,`" />
   <div class="`).concat(C.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(C.select,'" id="').concat(C.select,`"></select>
   <div class="`).concat(C.radio,`"></div>
   <label class="`).concat(C.checkbox,`">
     <input type="checkbox" id="`).concat(C.checkbox,`" />
     <span class="`).concat(C.label,`"></span>
   </label>
   <textarea class="`).concat(C.textarea,'" id="').concat(C.textarea,`"></textarea>
   <div class="`).concat(C["validation-message"],'" id="').concat(C["validation-message"],`"></div>
   <div class="`).concat(C.actions,`">
     <div class="`).concat(C.loader,`"></div>
     <button type="button" class="`).concat(C.confirm,`"></button>
     <button type="button" class="`).concat(C.deny,`"></button>
     <button type="button" class="`).concat(C.cancel,`"></button>
   </div>
   <div class="`).concat(C.footer,`"></div>
   <div class="`).concat(C["timer-progress-bar-container"],`">
     <div class="`).concat(C["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),IH=function(){var s=w();return s?(s.remove(),j2([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]),!0):!1},Q3=function(){$.currentInstance.resetValidationMessage()},RH=function(){var s=b(),f=b3(s,C.input),h=b3(s,C.file),p=s.querySelector(".".concat(C.range," input")),M=s.querySelector(".".concat(C.range," output")),q=b3(s,C.select),o1=s.querySelector(".".concat(C.checkbox," input")),l1=b3(s,C.textarea);f.oninput=Q3,h.onchange=Q3,q.onchange=Q3,o1.onchange=Q3,l1.oninput=Q3,p.oninput=function(){Q3(),M.value=p.value},p.onchange=function(){Q3(),M.value=p.value}},DH=function(s){return typeof s=="string"?document.querySelector(s):s},FH=function(s){var f=b();f.setAttribute("role",s.toast?"alert":"dialog"),f.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||f.setAttribute("aria-modal","true")},BH=function(s){window.getComputedStyle(s).direction==="rtl"&&h1(w(),C.rtl)},OH=function(s){var f=IH();if(Qa()){$2("SweetAlert2 requires document to initialize");return}var h=document.createElement("div");h.className=C.container,f&&h1(h,C["no-transition"]),C2(h,PH);var p=DH(s.target);p.appendChild(h),FH(s),BH(p),RH()},y7=function(s,f){s instanceof HTMLElement?f.appendChild(s):v(s)==="object"?qH(s,f):s&&C2(f,s)},qH=function(s,f){s.jquery?UH(f,s):C2(f,s.toString())},UH=function(s,f){if(s.textContent="",0 in f)for(var h=0;h in f;h++)s.appendChild(f[h].cloneNode(!0));else s.appendChild(f.cloneNode(!0))},Y3=function(){if(Qa())return!1;var m=document.createElement("div");return typeof m.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof m.style.animation<"u"?"animationend":!1}(),$H=function(s,f){var h=L3(),p=V2();!h||!p||(!f.showConfirmButton&&!f.showDenyButton&&!f.showCancelButton?t2(h):U1(h),N2(h,f,"actions"),jH(h,p,f),C2(p,f.loaderHtml||""),N2(p,f,"loader"))};function jH(m,s,f){var h=s1(),p=V1(),M=v1();!h||!p||!M||(x7(h,"confirm",f),x7(p,"deny",f),x7(M,"cancel",f),GH(h,p,M,f),f.reverseButtons&&(f.toast?(m.insertBefore(M,h),m.insertBefore(p,h)):(m.insertBefore(M,s),m.insertBefore(p,s),m.insertBefore(h,s))))}function GH(m,s,f,h){if(!h.buttonsStyling){j2([m,s,f],C.styled);return}h1([m,s,f],C.styled),h.confirmButtonColor&&(m.style.backgroundColor=h.confirmButtonColor,h1(m,C["default-outline"])),h.denyButtonColor&&(s.style.backgroundColor=h.denyButtonColor,h1(s,C["default-outline"])),h.cancelButtonColor&&(f.style.backgroundColor=h.cancelButtonColor,h1(f,C["default-outline"]))}function x7(m,s,f){var h=M3(s);L6(m,f["show".concat(h,"Button")],"inline-block"),C2(m,f["".concat(s,"ButtonText")]||""),m.setAttribute("aria-label",f["".concat(s,"ButtonAriaLabel")]||""),m.className=C[s],N2(m,f,"".concat(s,"Button"))}var WH=function(s,f){var h=Z1();h&&(C2(h,f.closeButtonHtml||""),N2(h,f,"closeButton"),L6(h,f.showCloseButton),h.setAttribute("aria-label",f.closeButtonAriaLabel||""))},KH=function(s,f){var h=w();h&&(ZH(h,f.backdrop),QH(h,f.position),YH(h,f.grow),N2(h,f,"container"))};function ZH(m,s){typeof s=="string"?m.style.background=s:s||h1([document.documentElement,document.body],C["no-backdrop"])}function QH(m,s){s&&(s in C?h1(m,C[s]):(q1('The "position" parameter is not valid, defaulting to "center"'),h1(m,C.center)))}function YH(m,s){s&&h1(m,C["grow-".concat(s)])}var C1={innerParams:new WeakMap,domCache:new WeakMap},XH=["input","file","range","select","radio","checkbox","textarea"],JH=function(s,f){var h=b();if(h){var p=C1.innerParams.get(s),M=!p||f.input!==p.input;XH.forEach(function(q){var o1=b3(h,C[q]);o1&&(aV(q,f.inputAttributes),o1.className=C[q],M&&t2(o1))}),f.input&&(M&&cV(f),tV(f))}},cV=function(s){if(s.input){if(!E1[s.input]){$2("Unexpected type of input! Expected ".concat(Object.keys(E1).join(" | "),', got "').concat(s.input,'"'));return}var f=Ya(s.input),h=E1[s.input](f,s);U1(f),s.inputAutoFocus&&setTimeout(function(){ja(h)})}},eV=function(s){for(var f=0;f<s.attributes.length;f++){var h=s.attributes[f].name;["id","type","value","style"].includes(h)||s.removeAttribute(h)}},aV=function(s,f){var h=Q0(b(),s);if(h){eV(h);for(var p in f)h.setAttribute(p,f[p])}},tV=function(s){var f=Ya(s.input);v(s.customClass)==="object"&&h1(f,s.customClass.input)},S7=function(s,f){(!s.placeholder||f.inputPlaceholder)&&(s.placeholder=f.inputPlaceholder)},w6=function(s,f,h){if(h.inputLabel){var p=document.createElement("label"),M=C["input-label"];p.setAttribute("for",s.id),p.className=M,v(h.customClass)==="object"&&h1(p,h.customClass.inputLabel),p.innerText=h.inputLabel,f.insertAdjacentElement("beforebegin",p)}},Ya=function(s){return b3(b(),C[s]||C.input)},Y0=function(s,f){["string","number"].includes(v(f))?s.value="".concat(f):x(f)||q1('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(v(f),'"'))},E1={};E1.text=E1.email=E1.password=E1.number=E1.tel=E1.url=E1.search=E1.date=E1["datetime-local"]=E1.time=E1.week=E1.month=function(m,s){return Y0(m,s.inputValue),w6(m,m,s),S7(m,s),m.type=s.input,m},E1.file=function(m,s){return w6(m,m,s),S7(m,s),m},E1.range=function(m,s){var f=m.querySelector("input"),h=m.querySelector("output");return Y0(f,s.inputValue),f.type=s.input,Y0(h,s.inputValue),w6(f,m,s),m},E1.select=function(m,s){if(m.textContent="",s.inputPlaceholder){var f=document.createElement("option");C2(f,s.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,m.appendChild(f)}return w6(m,m,s),m},E1.radio=function(m){return m.textContent="",m},E1.checkbox=function(m,s){var f=Q0(b(),"checkbox");f.value="1",f.checked=!!s.inputValue;var h=m.querySelector("span");return C2(h,s.inputPlaceholder),f},E1.textarea=function(m,s){Y0(m,s.inputValue),S7(m,s),w6(m,m,s);var f=function(p){return parseInt(window.getComputedStyle(p).marginLeft)+parseInt(window.getComputedStyle(p).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var h=parseInt(window.getComputedStyle(b()).width),p=function(){if(document.body.contains(m)){var q=m.offsetWidth+f(m);q>h?b().style.width="".concat(q,"px"):Z3(b(),"width",s.width)}};new MutationObserver(p).observe(m,{attributes:!0,attributeFilter:["style"]})}}),m};var rV=function(s,f){var h=K();h&&(w7(h),N2(h,f,"htmlContainer"),f.html?(y7(f.html,h),U1(h,"block")):f.text?(h.textContent=f.text,U1(h,"block")):t2(h),JH(s,f))},nV=function(s,f){var h=w3();h&&(w7(h),L6(h,f.footer,"block"),f.footer&&y7(f.footer,h),N2(h,f,"footer"))},iV=function(s,f){var h=C1.innerParams.get(s),p=P();if(p){if(h&&f.icon===h.icon){Ja(p,f),Xa(p,f);return}if(!f.icon&&!f.iconHtml){t2(p);return}if(f.icon&&Object.keys(_4).indexOf(f.icon)===-1){$2('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(f.icon,'"')),t2(p);return}U1(p),Ja(p,f),Xa(p,f),h1(p,f.showClass&&f.showClass.icon)}},Xa=function(s,f){for(var h=0,p=Object.entries(_4);h<p.length;h++){var M=Y(p[h],2),q=M[0],o1=M[1];f.icon!==q&&j2(s,o1)}h1(s,f.icon&&_4[f.icon]),fV(s,f),sV(),N2(s,f,"icon")},sV=function(){var s=b();if(s)for(var f=window.getComputedStyle(s).getPropertyValue("background-color"),h=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),p=0;p<h.length;p++)h[p].style.backgroundColor=f},oV=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,lV=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Ja=function(s,f){if(!(!f.icon&&!f.iconHtml)){var h=s.innerHTML,p="";if(f.iconHtml)p=ct(f.iconHtml);else if(f.icon==="success")p=oV,h=h.replace(/ style=".*?"/g,"");else if(f.icon==="error")p=lV;else if(f.icon){var M={question:"?",warning:"!",info:"i"};p=ct(M[f.icon])}h.trim()!==p.trim()&&C2(s,p)}},fV=function(s,f){if(f.iconColor){s.style.color=f.iconColor,s.style.borderColor=f.iconColor;for(var h=0,p=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];h<p.length;h++){var M=p[h];Wa(s,M,"background-color",f.iconColor)}Wa(s,".swal2-success-ring","border-color",f.iconColor)}},ct=function(s){return'<div class="'.concat(C["icon-content"],'">').concat(s,"</div>")},uV=function(s,f){var h=G();if(h){if(!f.imageUrl){t2(h);return}U1(h,""),h.setAttribute("src",f.imageUrl),h.setAttribute("alt",f.imageAlt||""),Z3(h,"width",f.imageWidth),Z3(h,"height",f.imageHeight),h.className=C.image,N2(h,f,"image")}},hV=function(s,f){var h=w(),p=b();if(!(!h||!p)){if(f.toast){Z3(h,"width",f.width),p.style.width="100%";var M=V2();M&&p.insertBefore(M,P())}else Z3(p,"width",f.width);Z3(p,"padding",f.padding),f.color&&(p.style.color=f.color),f.background&&(p.style.background=f.background),t2(n1()),mV(p,f)}},mV=function(s,f){var h=f.showClass||{};s.className="".concat(C.popup," ").concat(M2(s)?h.popup:""),f.toast?(h1([document.documentElement,document.body],C["toast-shown"]),h1(s,C.toast)):h1(s,C.modal),N2(s,f,"popup"),typeof f.customClass=="string"&&h1(s,f.customClass),f.icon&&h1(s,C["icon-".concat(f.icon)])},dV=function(s,f){var h=X();if(h){var p=f.progressSteps,M=f.currentProgressStep;if(!p||p.length===0||M===void 0){t2(h);return}U1(h),h.textContent="",M>=p.length&&q1("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),p.forEach(function(q,o1){var l1=vV(q);if(h.appendChild(l1),o1===M&&h1(l1,C["active-progress-step"]),o1!==p.length-1){var _1=pV(f);h.appendChild(_1)}})}},vV=function(s){var f=document.createElement("li");return h1(f,C["progress-step"]),C2(f,s),f},pV=function(s){var f=document.createElement("li");return h1(f,C["progress-step-line"]),s.progressStepsDistance&&Z3(f,"width",s.progressStepsDistance),f},zV=function(s,f){var h=O();h&&(w7(h),L6(h,f.title||f.titleText,"block"),f.title&&y7(f.title,h),f.titleText&&(h.innerText=f.titleText),N2(h,f,"title"))},et=function(s,f){hV(s,f),KH(s,f),dV(s,f),iV(s,f),uV(s,f),zV(s,f),WH(s,f),rV(s,f),$H(s,f),nV(s,f);var h=b();typeof f.didRender=="function"&&h&&f.didRender(h)},gV=function(){return M2(b())},at=function(){var s;return(s=s1())===null||s===void 0?void 0:s.click()},HV=function(){var s;return(s=V1())===null||s===void 0?void 0:s.click()},VV=function(){var s;return(s=v1())===null||s===void 0?void 0:s.click()},T4=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),tt=function(s){s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},CV=function(s,f,h){tt(s),f.toast||(s.keydownHandler=function(p){return LV(f,p,h)},s.keydownTarget=f.keydownListenerCapture?window:b(),s.keydownListenerCapture=f.keydownListenerCapture,s.keydownTarget.addEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!0)},A7=function(s,f){var h,p=k4();if(p.length){s=s+f,s===p.length?s=0:s===-1&&(s=p.length-1),p[s].focus();return}(h=b())===null||h===void 0||h.focus()},rt=["ArrowRight","ArrowDown"],MV=["ArrowLeft","ArrowUp"],LV=function(s,f,h){s&&(f.isComposing||f.keyCode===229||(s.stopKeydownPropagation&&f.stopPropagation(),f.key==="Enter"?wV(f,s):f.key==="Tab"?bV(f):[].concat(rt,MV).includes(f.key)?yV(f.key):f.key==="Escape"&&xV(f,s,h)))},wV=function(s,f){if(z(f.allowEnterKey)){var h=Q0(b(),f.input);if(s.target&&h&&s.target instanceof HTMLElement&&s.target.outerHTML===h.outerHTML){if(["textarea","file"].includes(f.input))return;at(),s.preventDefault()}}},bV=function(s){for(var f=s.target,h=k4(),p=-1,M=0;M<h.length;M++)if(f===h[M]){p=M;break}s.shiftKey?A7(p,-1):A7(p,1),s.stopPropagation(),s.preventDefault()},yV=function(s){var f=L3(),h=s1(),p=V1(),M=v1();if(!(!f||!h||!p||!M)){var q=[h,p,M];if(!(document.activeElement instanceof HTMLElement&&!q.includes(document.activeElement))){var o1=rt.includes(s)?"nextElementSibling":"previousElementSibling",l1=document.activeElement;if(l1){for(var _1=0;_1<f.children.length;_1++){if(l1=l1[o1],!l1)return;if(l1 instanceof HTMLButtonElement&&M2(l1))break}l1 instanceof HTMLButtonElement&&l1.focus()}}}},xV=function(s,f,h){z(f.allowEscapeKey)&&(s.preventDefault(),h(T4.esc))},E4={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},SV=function(){var s=w(),f=Array.from(document.body.children);f.forEach(function(h){h.contains(s)||(h.hasAttribute("aria-hidden")&&h.setAttribute("data-previous-aria-hidden",h.getAttribute("aria-hidden")||""),h.setAttribute("aria-hidden","true"))})},nt=function(){var s=Array.from(document.body.children);s.forEach(function(f){f.hasAttribute("data-previous-aria-hidden")?(f.setAttribute("aria-hidden",f.getAttribute("data-previous-aria-hidden")||""),f.removeAttribute("data-previous-aria-hidden")):f.removeAttribute("aria-hidden")})},it=typeof window<"u"&&!!window.GestureEvent,AV=function(){if(it&&!s3(document.body,C.iosfix)){var s=document.body.scrollTop;document.body.style.top="".concat(s*-1,"px"),h1(document.body,C.iosfix),NV()}},NV=function(){var s=w();if(s){var f;s.ontouchstart=function(h){f=_V(h)},s.ontouchmove=function(h){f&&(h.preventDefault(),h.stopPropagation())}}},_V=function(s){var f=s.target,h=w(),p=K();return!h||!p||kV(s)||TV(s)?!1:f===h||!Ka(h)&&f instanceof HTMLElement&&f.tagName!=="INPUT"&&f.tagName!=="TEXTAREA"&&!(Ka(p)&&p.contains(f))},kV=function(s){return s.touches&&s.touches.length&&s.touches[0].touchType==="stylus"},TV=function(s){return s.touches&&s.touches.length>1},EV=function(){if(s3(document.body,C.iosfix)){var s=parseInt(document.body.style.top,10);j2(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},PV=function(){var s=document.createElement("div");s.className=C["scrollbar-measure"],document.body.appendChild(s);var f=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),f},P4=null,IV=function(s){P4===null&&(document.body.scrollHeight>window.innerHeight||s==="scroll")&&(P4=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(P4+PV(),"px"))},RV=function(){P4!==null&&(document.body.style.paddingRight="".concat(P4,"px"),P4=null)};function st(m,s,f,h){Z0()?lt(m,h):(N4(f).then(function(){return lt(m,h)}),tt($)),it?(s.setAttribute("style","display:none !important"),s.removeAttribute("class"),s.innerHTML=""):s.remove(),L7()&&(RV(),EV(),nt()),DV()}function DV(){j2([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"]])}function y3(m){m=BV(m);var s=E4.swalPromiseResolve.get(this),f=FV(this);this.isAwaitingPromise?m.isDismissed||(b6(this),s(m)):f&&s(m)}var FV=function(s){var f=b();if(!f)return!1;var h=C1.innerParams.get(s);if(!h||s3(f,h.hideClass.popup))return!1;j2(f,h.showClass.popup),h1(f,h.hideClass.popup);var p=w();return j2(p,h.showClass.backdrop),h1(p,h.hideClass.backdrop),OV(s,f,h),!0};function ot(m){var s=E4.swalPromiseReject.get(this);b6(this),s&&s(m)}var b6=function(s){s.isAwaitingPromise&&(delete s.isAwaitingPromise,C1.innerParams.get(s)||s._destroy())},BV=function(s){return typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s)},OV=function(s,f,h){var p=w(),M=Y3&&Za(f);typeof h.willClose=="function"&&h.willClose(f),M?qV(s,f,p,h.returnFocus,h.didClose):st(s,p,h.returnFocus,h.didClose)},qV=function(s,f,h,p,M){Y3&&($.swalCloseEventFinishedCallback=st.bind(null,s,h,p,M),f.addEventListener(Y3,function(q){q.target===f&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)}))},lt=function(s,f){setTimeout(function(){typeof f=="function"&&f.bind(s.params)(),s._destroy&&s._destroy()})},I4=function(s){var f=b();if(f||new a8,f=b(),!!f){var h=V2();Z0()?t2(P()):UV(f,s),U1(h),f.setAttribute("data-loading","true"),f.setAttribute("aria-busy","true"),f.focus()}},UV=function(s,f){var h=L3(),p=V2();!h||!p||(!f&&M2(s1())&&(f=s1()),U1(h),f&&(t2(f),p.setAttribute("data-button-to-replace",f.className),h.insertBefore(p,f)),h1([s,h],C.loading))},$V=function(s,f){f.input==="select"||f.input==="radio"?ZV(s,f):["text","email","number","tel","textarea"].some(function(h){return h===f.input})&&(H(f.inputValue)||x(f.inputValue))&&(I4(s1()),QV(s,f))},jV=function(s,f){var h=s.getInput();if(!h)return null;switch(f.input){case"checkbox":return GV(h);case"radio":return WV(h);case"file":return KV(h);default:return f.inputAutoTrim?h.value.trim():h.value}},GV=function(s){return s.checked?1:0},WV=function(s){return s.checked?s.value:null},KV=function(s){return s.files&&s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null},ZV=function(s,f){var h=b();if(h){var p=function(q){f.input==="select"?YV(h,ft(q),f):f.input==="radio"&&XV(h,ft(q),f)};H(f.inputOptions)||x(f.inputOptions)?(I4(s1()),L(f.inputOptions).then(function(M){s.hideLoading(),p(M)})):v(f.inputOptions)==="object"?p(f.inputOptions):$2("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(v(f.inputOptions)))}},QV=function(s,f){var h=s.getInput();h&&(t2(h),L(f.inputValue).then(function(p){h.value=f.input==="number"?"".concat(parseFloat(p)||0):"".concat(p),U1(h),h.focus(),s.hideLoading()}).catch(function(p){$2("Error in inputValue promise: ".concat(p)),h.value="",U1(h),h.focus(),s.hideLoading()}))};function YV(m,s,f){var h=b3(m,C.select);if(h){var p=function(q,o1,l1){var _1=document.createElement("option");_1.value=l1,C2(_1,o1),_1.selected=ut(l1,f.inputValue),q.appendChild(_1)};s.forEach(function(M){var q=M[0],o1=M[1];if(Array.isArray(o1)){var l1=document.createElement("optgroup");l1.label=q,l1.disabled=!1,h.appendChild(l1),o1.forEach(function(_1){return p(l1,_1[1],_1[0])})}else p(h,o1,q)}),h.focus()}}function XV(m,s,f){var h=b3(m,C.radio);if(h){s.forEach(function(M){var q=M[0],o1=M[1],l1=document.createElement("input"),_1=document.createElement("label");l1.type="radio",l1.name=C.radio,l1.value=q,ut(q,f.inputValue)&&(l1.checked=!0);var y6=document.createElement("span");C2(y6,o1),y6.className=C.label,_1.appendChild(l1),_1.appendChild(y6),h.appendChild(_1)});var p=h.querySelectorAll("input");p.length&&p[0].focus()}}var ft=function m(s){var f=[];return s instanceof Map?s.forEach(function(h,p){var M=h;v(M)==="object"&&(M=m(M)),f.push([p,M])}):Object.keys(s).forEach(function(h){var p=s[h];v(p)==="object"&&(p=m(p)),f.push([h,p])}),f},ut=function(s,f){return!!f&&f.toString()===s.toString()},X0=void 0,JV=function(s){var f=C1.innerParams.get(s);s.disableButtons(),f.input?ht(s,"confirm"):_7(s,!0)},cC=function(s){var f=C1.innerParams.get(s);s.disableButtons(),f.returnInputValueOnDeny?ht(s,"deny"):N7(s,!1)},eC=function(s,f){s.disableButtons(),f(T4.cancel)},ht=function(s,f){var h=C1.innerParams.get(s);if(!h.input){$2('The "input" parameter is needed to be set when using returnInputValueOn'.concat(M3(f)));return}var p=s.getInput(),M=jV(s,h);h.inputValidator?aC(s,M,f):p&&!p.checkValidity()?(s.enableButtons(),s.showValidationMessage(h.validationMessage||p.validationMessage)):f==="deny"?N7(s,M):_7(s,M)},aC=function(s,f,h){var p=C1.innerParams.get(s);s.disableInput();var M=Promise.resolve().then(function(){return L(p.inputValidator(f,p.validationMessage))});M.then(function(q){s.enableButtons(),s.enableInput(),q?s.showValidationMessage(q):h==="deny"?N7(s,f):_7(s,f)})},N7=function(s,f){var h=C1.innerParams.get(s||X0);if(h.showLoaderOnDeny&&I4(V1()),h.preDeny){s.isAwaitingPromise=!0;var p=Promise.resolve().then(function(){return L(h.preDeny(f,h.validationMessage))});p.then(function(M){M===!1?(s.hideLoading(),b6(s)):s.close({isDenied:!0,value:typeof M>"u"?f:M})}).catch(function(M){return dt(s||X0,M)})}else s.close({isDenied:!0,value:f})},mt=function(s,f){s.close({isConfirmed:!0,value:f})},dt=function(s,f){s.rejectPromise(f)},_7=function(s,f){var h=C1.innerParams.get(s||X0);if(h.showLoaderOnConfirm&&I4(),h.preConfirm){s.resetValidationMessage(),s.isAwaitingPromise=!0;var p=Promise.resolve().then(function(){return L(h.preConfirm(f,h.validationMessage))});p.then(function(M){M2(n1())||M===!1?(s.hideLoading(),b6(s)):mt(s,typeof M>"u"?f:M)}).catch(function(M){return dt(s||X0,M)})}else mt(s,f)};function J0(){var m=C1.innerParams.get(this);if(m){var s=C1.domCache.get(this);t2(s.loader),Z0()?m.icon&&U1(P()):tC(s),j2([s.popup,s.actions],C.loading),s.popup.removeAttribute("aria-busy"),s.popup.removeAttribute("data-loading"),s.confirmButton.disabled=!1,s.denyButton.disabled=!1,s.cancelButton.disabled=!1}}var tC=function(s){var f=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));f.length?U1(f[0],"inline-block"):TH()&&t2(s.actions)};function vt(){var m=C1.innerParams.get(this),s=C1.domCache.get(this);return s?Q0(s.popup,m.input):null}function pt(m,s,f){var h=C1.domCache.get(m);s.forEach(function(p){h[p].disabled=f})}function zt(m,s){var f=b();if(!(!f||!m))if(m.type==="radio")for(var h=f.querySelectorAll('[name="'.concat(C.radio,'"]')),p=0;p<h.length;p++)h[p].disabled=s;else m.disabled=s}function gt(){pt(this,["confirmButton","denyButton","cancelButton"],!1)}function Ht(){pt(this,["confirmButton","denyButton","cancelButton"],!0)}function Vt(){zt(this.getInput(),!1)}function Ct(){zt(this.getInput(),!0)}function Mt(m){var s=C1.domCache.get(this),f=C1.innerParams.get(this);C2(s.validationMessage,m),s.validationMessage.className=C["validation-message"],f.customClass&&f.customClass.validationMessage&&h1(s.validationMessage,f.customClass.validationMessage),U1(s.validationMessage);var h=this.getInput();h&&(h.setAttribute("aria-invalid","true"),h.setAttribute("aria-describedby",C["validation-message"]),ja(h),h1(h,C.inputerror))}function Lt(){var m=C1.domCache.get(this);m.validationMessage&&t2(m.validationMessage);var s=this.getInput();s&&(s.removeAttribute("aria-invalid"),s.removeAttribute("aria-describedby"),j2(s,C.inputerror))}var R4={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},rC=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],nC={},iC=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],wt=function(s){return Object.prototype.hasOwnProperty.call(R4,s)},bt=function(s){return rC.indexOf(s)!==-1},yt=function(s){return nC[s]},sC=function(s){wt(s)||q1('Unknown parameter "'.concat(s,'"'))},oC=function(s){iC.includes(s)&&q1('The parameter "'.concat(s,'" is incompatible with toasts'))},lC=function(s){var f=yt(s);f&&M6(s,f)},fC=function(s){s.backdrop===!1&&s.allowOutsideClick&&q1('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var f in s)sC(f),s.toast&&oC(f),lC(f)};function xt(m){var s=b(),f=C1.innerParams.get(this);if(!s||s3(s,f.hideClass.popup)){q1("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var h=uC(m),p=Object.assign({},f,h);et(this,p),C1.innerParams.set(this,p),Object.defineProperties(this,{params:{value:Object.assign({},this.params,m),writable:!1,enumerable:!0}})}var uC=function(s){var f={};return Object.keys(s).forEach(function(h){bt(h)?f[h]=s[h]:q1("Invalid parameter to update: ".concat(h))}),f};function St(){var m=C1.domCache.get(this),s=C1.innerParams.get(this);if(!s){At(this);return}m.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),typeof s.didDestroy=="function"&&s.didDestroy(),hC(this)}var hC=function(s){At(s),delete s.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},At=function(s){s.isAwaitingPromise?(k7(C1,s),s.isAwaitingPromise=!0):(k7(E4,s),k7(C1,s),delete s.isAwaitingPromise,delete s.disableButtons,delete s.enableButtons,delete s.getInput,delete s.disableInput,delete s.enableInput,delete s.hideLoading,delete s.disableLoading,delete s.showValidationMessage,delete s.resetValidationMessage,delete s.close,delete s.closePopup,delete s.closeModal,delete s.closeToast,delete s.rejectPromise,delete s.update,delete s._destroy)},k7=function(s,f){for(var h in s)s[h].delete(f)},mC=Object.freeze({__proto__:null,_destroy:St,close:y3,closeModal:y3,closePopup:y3,closeToast:y3,disableButtons:Ht,disableInput:Ct,disableLoading:J0,enableButtons:gt,enableInput:Vt,getInput:vt,handleAwaitingPromise:b6,hideLoading:J0,rejectPromise:ot,resetValidationMessage:Lt,showValidationMessage:Mt,update:xt}),dC=function(s,f,h){s.toast?vC(s,f,h):(zC(f),gC(f),HC(s,f,h))},vC=function(s,f,h){f.popup.onclick=function(){s&&(pC(s)||s.timer||s.input)||h(T4.close)}},pC=function(s){return!!(s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton)},c8=!1,zC=function(s){s.popup.onmousedown=function(){s.container.onmouseup=function(f){s.container.onmouseup=function(){},f.target===s.container&&(c8=!0)}}},gC=function(s){s.container.onmousedown=function(){s.popup.onmouseup=function(f){s.popup.onmouseup=function(){},(f.target===s.popup||f.target instanceof HTMLElement&&s.popup.contains(f.target))&&(c8=!0)}}},HC=function(s,f,h){f.container.onclick=function(p){if(c8){c8=!1;return}p.target===f.container&&z(s.allowOutsideClick)&&h(T4.backdrop)}},VC=function(s){return v(s)==="object"&&s.jquery},Nt=function(s){return s instanceof Element||VC(s)},CC=function(s){var f={};return v(s[0])==="object"&&!Nt(s[0])?Object.assign(f,s[0]):["title","html","icon"].forEach(function(h,p){var M=s[p];typeof M=="string"||Nt(M)?f[h]=M:M!==void 0&&$2("Unexpected type of ".concat(h,'! Expected "string" or "Element", got ').concat(v(M)))}),f};function MC(){for(var m=this,s=arguments.length,f=new Array(s),h=0;h<s;h++)f[h]=arguments[h];return i(m,f)}function LC(m){var s=function(f){E(h,f);function h(){return g(this,h),t(this,h,arguments)}return R(h,[{key:"_main",value:function(M,q){return r1(k(h.prototype),"_main",this).call(this,M,Object.assign({},m,q))}}]),h}(this);return s}var wC=function(){return $.timeout&&$.timeout.getTimerLeft()},_t=function(){if($.timeout)return EH(),$.timeout.stop()},kt=function(){if($.timeout){var s=$.timeout.start();return b7(s),s}},bC=function(){var s=$.timeout;return s&&(s.running?_t():kt())},yC=function(s){if($.timeout){var f=$.timeout.increase(s);return b7(f,!0),f}},xC=function(){return!!($.timeout&&$.timeout.isRunning())},Tt=!1,T7={};function SC(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";T7[m]=this,Tt||(document.body.addEventListener("click",AC),Tt=!0)}var AC=function(s){for(var f=s.target;f&&f!==document;f=f.parentNode)for(var h in T7){var p=f.getAttribute(h);if(p){T7[h].fire({template:p});return}}},NC=Object.freeze({__proto__:null,argsToParams:CC,bindClickHandler:SC,clickCancel:VV,clickConfirm:at,clickDeny:HV,enableLoading:I4,fire:MC,getActions:L3,getCancelButton:v1,getCloseButton:Z1,getConfirmButton:s1,getContainer:w,getDenyButton:V1,getFocusableElements:k4,getFooter:w3,getHtmlContainer:K,getIcon:P,getIconContent:N,getImage:G,getInputLabel:H2,getLoader:V2,getPopup:b,getProgressSteps:X,getTimerLeft:wC,getTimerProgressBar:K3,getTitle:O,getValidationMessage:n1,increaseTimer:yC,isDeprecatedParameter:yt,isLoading:_H,isTimerRunning:xC,isUpdatableParameter:bt,isValidParameter:wt,isVisible:gV,mixin:LC,resumeTimer:kt,showLoading:I4,stopTimer:_t,toggleTimer:bC}),_C=function(){function m(s,f){g(this,m),this.callback=s,this.remaining=f,this.running=!1,this.start()}return R(m,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(f){var h=this.running;return h&&this.stop(),this.remaining+=f,h&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),m}(),Et=["swal-title","swal-html","swal-footer"],kC=function(s){var f=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!f)return{};var h=f.content;BC(h);var p=Object.assign(TC(h),EC(h),PC(h),IC(h),RC(h),DC(h),FC(h,Et));return p},TC=function(s){var f={},h=Array.from(s.querySelectorAll("swal-param"));return h.forEach(function(p){X3(p,["name","value"]);var M=p.getAttribute("name"),q=p.getAttribute("value");typeof R4[M]=="boolean"?f[M]=q!=="false":v(R4[M])==="object"?f[M]=JSON.parse(q):f[M]=q}),f},EC=function(s){var f={},h=Array.from(s.querySelectorAll("swal-function-param"));return h.forEach(function(p){var M=p.getAttribute("name"),q=p.getAttribute("value");f[M]=new Function("return ".concat(q))()}),f},PC=function(s){var f={},h=Array.from(s.querySelectorAll("swal-button"));return h.forEach(function(p){X3(p,["type","color","aria-label"]);var M=p.getAttribute("type");f["".concat(M,"ButtonText")]=p.innerHTML,f["show".concat(M3(M),"Button")]=!0,p.hasAttribute("color")&&(f["".concat(M,"ButtonColor")]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(f["".concat(M,"ButtonAriaLabel")]=p.getAttribute("aria-label"))}),f},IC=function(s){var f={},h=s.querySelector("swal-image");return h&&(X3(h,["src","width","height","alt"]),h.hasAttribute("src")&&(f.imageUrl=h.getAttribute("src")),h.hasAttribute("width")&&(f.imageWidth=h.getAttribute("width")),h.hasAttribute("height")&&(f.imageHeight=h.getAttribute("height")),h.hasAttribute("alt")&&(f.imageAlt=h.getAttribute("alt"))),f},RC=function(s){var f={},h=s.querySelector("swal-icon");return h&&(X3(h,["type","color"]),h.hasAttribute("type")&&(f.icon=h.getAttribute("type")),h.hasAttribute("color")&&(f.iconColor=h.getAttribute("color")),f.iconHtml=h.innerHTML),f},DC=function(s){var f={},h=s.querySelector("swal-input");h&&(X3(h,["type","label","placeholder","value"]),f.input=h.getAttribute("type")||"text",h.hasAttribute("label")&&(f.inputLabel=h.getAttribute("label")),h.hasAttribute("placeholder")&&(f.inputPlaceholder=h.getAttribute("placeholder")),h.hasAttribute("value")&&(f.inputValue=h.getAttribute("value")));var p=Array.from(s.querySelectorAll("swal-input-option"));return p.length&&(f.inputOptions={},p.forEach(function(M){X3(M,["value"]);var q=M.getAttribute("value"),o1=M.innerHTML;f.inputOptions[q]=o1})),f},FC=function(s,f){var h={};for(var p in f){var M=f[p],q=s.querySelector(M);q&&(X3(q,[]),h[M.replace(/^swal-/,"")]=q.innerHTML.trim())}return h},BC=function(s){var f=Et.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(function(h){var p=h.tagName.toLowerCase();f.includes(p)||q1("Unrecognized element <".concat(p,">"))})},X3=function(s,f){Array.from(s.attributes).forEach(function(h){f.indexOf(h.name)===-1&&q1(['Unrecognized attribute "'.concat(h.name,'" on <').concat(s.tagName.toLowerCase(),">."),"".concat(f.length?"Allowed attributes are: ".concat(f.join(", ")):"To set the value, use HTML within the element.")])})},Pt=10,OC=function(s){var f=w(),h=b();typeof s.willOpen=="function"&&s.willOpen(h);var p=window.getComputedStyle(document.body),M=p.overflowY;jC(f,h,s),setTimeout(function(){UC(f,h)},Pt),L7()&&($C(f,s.scrollbarPadding,M),SV()),!Z0()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(function(){return s.didOpen(h)}),j2(f,C["no-transition"])},qC=function m(s){var f=b();if(!(s.target!==f||!Y3)){var h=w();f.removeEventListener(Y3,m),h.style.overflowY="auto"}},UC=function(s,f){Y3&&Za(f)?(s.style.overflowY="hidden",f.addEventListener(Y3,qC)):s.style.overflowY="auto"},$C=function(s,f,h){AV(),f&&h!=="hidden"&&IV(h),setTimeout(function(){s.scrollTop=0})},jC=function(s,f,h){h1(s,h.showClass.backdrop),h.animation?(f.style.setProperty("opacity","0","important"),U1(f,"grid"),setTimeout(function(){h1(f,h.showClass.popup),f.style.removeProperty("opacity")},Pt)):U1(f,"grid"),h1([document.documentElement,document.body],C.shown),h.heightAuto&&h.backdrop&&!h.toast&&h1([document.documentElement,document.body],C["height-auto"])},It={email:function(s,f){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(s)?Promise.resolve():Promise.resolve(f||"Invalid email address")},url:function(s,f){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(f||"Invalid URL")}};function GC(m){m.inputValidator||(m.input==="email"&&(m.inputValidator=It.email),m.input==="url"&&(m.inputValidator=It.url))}function WC(m){(!m.target||typeof m.target=="string"&&!document.querySelector(m.target)||typeof m.target!="string"&&!m.target.appendChild)&&(q1('Target parameter is not valid, defaulting to "body"'),m.target="body")}function KC(m){GC(m),m.showLoaderOnConfirm&&!m.preConfirm&&q1(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),WC(m),typeof m.title=="string"&&(m.title=m.title.split(`
`).join("<br />")),OH(m)}var G2,e8=new WeakMap,P1=function(){function m(){if(g(this,m),K1(this,e8,void 0),!(typeof window>"u")){G2=this;for(var s=arguments.length,f=new Array(s),h=0;h<s;h++)f[h]=arguments[h];var p=Object.freeze(this.constructor.argsToParams(f));this.params=p,this.isAwaitingPromise=!1,n(e8,this,this._main(G2.params))}}return R(m,[{key:"_main",value:function(f){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(fC(Object.assign({},h,f)),$.currentInstance){var p=E4.swalPromiseResolve.get($.currentInstance),M=$.currentInstance.isAwaitingPromise;$.currentInstance._destroy(),M||p({isDismissed:!0}),L7()&&nt()}$.currentInstance=G2;var q=QC(f,h);KC(q),Object.freeze(q),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);var o1=YC(G2);return et(G2,q),C1.innerParams.set(G2,q),ZC(G2,o1,q)}},{key:"then",value:function(f){return r(e8,this).then(f)}},{key:"finally",value:function(f){return r(e8,this).finally(f)}}]),m}(),ZC=function(s,f,h){return new Promise(function(p,M){var q=function(l1){s.close({isDismissed:!0,dismiss:l1})};E4.swalPromiseResolve.set(s,p),E4.swalPromiseReject.set(s,M),f.confirmButton.onclick=function(){JV(s)},f.denyButton.onclick=function(){cC(s)},f.cancelButton.onclick=function(){eC(s,q)},f.closeButton.onclick=function(){q(T4.close)},dC(h,f,q),CV($,h,q),$V(s,h),OC(h),XC($,h,q),JC(f,h),setTimeout(function(){f.container.scrollTop=0})})},QC=function(s,f){var h=kC(s),p=Object.assign({},R4,f,h,s);return p.showClass=Object.assign({},R4.showClass,p.showClass),p.hideClass=Object.assign({},R4.hideClass,p.hideClass),p.animation===!1&&(p.showClass={backdrop:"swal2-noanimation"},p.hideClass={}),p},YC=function(s){var f={popup:b(),container:w(),actions:L3(),confirmButton:s1(),denyButton:V1(),cancelButton:v1(),loader:V2(),closeButton:Z1(),validationMessage:n1(),progressSteps:X()};return C1.domCache.set(s,f),f},XC=function(s,f,h){var p=K3();t2(p),f.timer&&(s.timeout=new _C(function(){h("timer"),delete s.timeout},f.timer),f.timerProgressBar&&(U1(p),N2(p,f,"timerProgressBar"),setTimeout(function(){s.timeout&&s.timeout.running&&b7(f.timer)})))},JC=function(s,f){if(!f.toast){if(!z(f.allowEnterKey)){eM();return}cM(s,f)||A7(-1,1)}},cM=function(s,f){return f.focusDeny&&M2(s.denyButton)?(s.denyButton.focus(),!0):f.focusCancel&&M2(s.cancelButton)?(s.cancelButton.focus(),!0):f.focusConfirm&&M2(s.confirmButton)?(s.confirmButton.focus(),!0):!1},eM=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var Rt=new Date,Dt=localStorage.getItem("swal-initiation");Dt?(Rt.getTime()-Date.parse(Dt))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var m=document.createElement("audio");m.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",m.loop=!0,document.body.appendChild(m),setTimeout(function(){m.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(Rt))}P1.prototype.disableButtons=Ht,P1.prototype.enableButtons=gt,P1.prototype.getInput=vt,P1.prototype.disableInput=Ct,P1.prototype.enableInput=Vt,P1.prototype.hideLoading=J0,P1.prototype.disableLoading=J0,P1.prototype.showValidationMessage=Mt,P1.prototype.resetValidationMessage=Lt,P1.prototype.close=y3,P1.prototype.closePopup=y3,P1.prototype.closeModal=y3,P1.prototype.closeToast=y3,P1.prototype.rejectPromise=ot,P1.prototype.update=xt,P1.prototype._destroy=St,Object.assign(P1,NC),Object.keys(mC).forEach(function(m){P1[m]=function(){if(G2&&G2[m]){var s;return(s=G2)[m].apply(s,arguments)}return null}}),P1.DismissReason=T4,P1.version="11.10.7";var a8=P1;return a8.default=a8,a8}),typeof S3<"u"&&S3.Sweetalert2&&(S3.swal=S3.sweetAlert=S3.Swal=S3.SweetAlert=S3.Sweetalert2),typeof document<"u"&&function(a,t){var r=a.createElement("style");if(a.getElementsByTagName("head")[0].appendChild(r),r.styleSheet)r.styleSheet.disabled||(r.styleSheet.cssText=t);else try{r.innerHTML=t}catch{r.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(Wi);var Sw=Wi.exports;const l8=xw(Sw);var Vr={};/**
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
 */const Ki=function(e){const c=[];let a=0;for(let t=0;t<e.length;t++){let r=e.charCodeAt(t);r<128?c[a++]=r:r<2048?(c[a++]=r>>6|192,c[a++]=r&63|128):(r&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++t)&1023),c[a++]=r>>18|240,c[a++]=r>>12&63|128,c[a++]=r>>6&63|128,c[a++]=r&63|128):(c[a++]=r>>12|224,c[a++]=r>>6&63|128,c[a++]=r&63|128)}return c},Aw=function(e){const c=[];let a=0,t=0;for(;a<e.length;){const r=e[a++];if(r<128)c[t++]=String.fromCharCode(r);else if(r>191&&r<224){const n=e[a++];c[t++]=String.fromCharCode((r&31)<<6|n&63)}else if(r>239&&r<365){const n=e[a++],i=e[a++],o=e[a++],l=((r&7)<<18|(n&63)<<12|(i&63)<<6|o&63)-65536;c[t++]=String.fromCharCode(55296+(l>>10)),c[t++]=String.fromCharCode(56320+(l&1023))}else{const n=e[a++],i=e[a++];c[t++]=String.fromCharCode((r&15)<<12|(n&63)<<6|i&63)}}return c.join("")},Zi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let r=0;r<e.length;r+=3){const n=e[r],i=r+1<e.length,o=i?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,d=n>>2,v=(n&3)<<4|o>>4;let g=(o&15)<<2|u>>6,V=u&63;l||(V=64,i||(g=64)),t.push(a[d],a[v],a[g],a[V])}return t.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(Ki(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):Aw(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let r=0;r<e.length;){const n=a[e.charAt(r++)],o=r<e.length?a[e.charAt(r)]:0;++r;const u=r<e.length?a[e.charAt(r)]:64;++r;const v=r<e.length?a[e.charAt(r)]:64;if(++r,n==null||o==null||u==null||v==null)throw new Nw;const g=n<<2|o>>4;if(t.push(g),u!==64){const V=o<<4&240|u>>2;if(t.push(V),v!==64){const R=u<<6&192|v;t.push(R)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(e){const c=Ki(e);return Zi.encodeByteArray(c,!0)},G8=function(e){return _w(e).replace(/\./g,"")},kw=function(e){try{return Zi.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ew=()=>Tw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof Vr>"u")return;const e=Vr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Iw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&kw(e[1]);return c&&JSON.parse(c)},Ic=()=>{try{return Ew()||Pw()||Iw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Rw=e=>{var c,a;return(a=(c=Ic())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},Dw=e=>{const c=Rw(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const t=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),t]:[c.substring(0,a),t]},Qi=()=>{var e;return(e=Ic())===null||e===void 0?void 0:e.config};/**
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
 */class Fw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,t)=>{a?this.reject(a):this.resolve(t),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,t))}}}/**
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
 */function Bw(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},t=c||"demo-project",r=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${t}`,aud:t,iat:r,exp:r+3600,auth_time:r,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[G8(JSON.stringify(a)),G8(JSON.stringify(i)),""].join(".")}/**
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
 */function W8(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ow(){var e;const c=(e=Ic())===null||e===void 0?void 0:e.forceEnvironment;if(c==="node")return!0;if(c==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qw(){return!Ow()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yi(){try{return typeof indexedDB=="object"}catch{return!1}}function Uw(){return new Promise((e,c)=>{try{let a=!0;const t="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(t);r.onsuccess=()=>{r.result.close(),a||self.indexedDB.deleteDatabase(t),e(!0)},r.onupgradeneeded=()=>{a=!1},r.onerror=()=>{var n;c(((n=r.error)===null||n===void 0?void 0:n.message)||"")}}catch(a){c(a)}})}/**
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
 */const $w="FirebaseError";class h6 extends Error{constructor(c,a,t){super(a),this.code=c,this.customData=t,this.name=$w,Object.setPrototypeOf(this,h6.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(c,a,t){this.service=c,this.serviceName=a,this.errors=t}create(c,...a){const t=a[0]||{},r=`${this.service}/${c}`,n=this.errors[c],i=n?jw(n,t):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new h6(r,o,t)}}function jw(e,c){return e.replace(Gw,(a,t)=>{const r=c[t];return r!=null?String(r):`<${t}?>`})}const Gw=/\{\$([^}]+)}/g;function x9(e,c){if(e===c)return!0;const a=Object.keys(e),t=Object.keys(c);for(const r of a){if(!t.includes(r))return!1;const n=e[r],i=c[r];if(Cr(n)&&Cr(i)){if(!x9(n,i))return!1}else if(n!==i)return!1}for(const r of t)if(!a.includes(r))return!1;return!0}function Cr(e){return e!==null&&typeof e=="object"}/**
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
 */function e0(e){return e&&e._delegate?e._delegate:e}class a0{constructor(c,a,t){this.name=c,this.instanceFactory=a,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
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
 */const r4="[DEFAULT]";/**
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
 */class Ww{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const t=new Fw;if(this.instancesDeferred.set(a,t),this.isInitialized(a)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:a});r&&t.resolve(r)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const t=this.normalizeInstanceIdentifier(c?.identifier),r=(a=c?.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(n){if(r)return null;throw n}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(Zw(c))try{this.getOrInitializeService({instanceIdentifier:r4})}catch{}for(const[a,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:r});t.resolve(n)}catch{}}}}clearInstance(c=r4){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=r4){return this.instances.has(c)}getOptions(c=r4){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,t=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:t,options:a});for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);t===o&&i.resolve(r)}return r}onInit(c,a){var t;const r=this.normalizeInstanceIdentifier(a),n=(t=this.onInitCallbacks.get(r))!==null&&t!==void 0?t:new Set;n.add(c),this.onInitCallbacks.set(r,n);const i=this.instances.get(r);return i&&c(i,r),()=>{n.delete(c)}}invokeOnInitCallbacks(c,a){const t=this.onInitCallbacks.get(a);if(t)for(const r of t)try{r(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let t=this.instances.get(c);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(c),options:a}),this.instances.set(c,t),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(t,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,t)}catch{}return t||null}normalizeInstanceIdentifier(c=r4){return this.component?this.component.multipleInstances?c:r4:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(e){return e===r4?void 0:e}function Zw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qw{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new Ww(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var d1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d1||(d1={}));const Yw={debug:d1.DEBUG,verbose:d1.VERBOSE,info:d1.INFO,warn:d1.WARN,error:d1.ERROR,silent:d1.SILENT},Xw=d1.INFO,Jw={[d1.DEBUG]:"log",[d1.VERBOSE]:"log",[d1.INFO]:"info",[d1.WARN]:"warn",[d1.ERROR]:"error"},cb=(e,c,...a)=>{if(c<e.logLevel)return;const t=new Date().toISOString(),r=Jw[c];if(r)console[r](`[${t}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class Ji{constructor(c){this.name=c,this._logLevel=Xw,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in d1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?Yw[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,d1.DEBUG,...c),this._logHandler(this,d1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,d1.VERBOSE,...c),this._logHandler(this,d1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,d1.INFO,...c),this._logHandler(this,d1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,d1.WARN,...c),this._logHandler(this,d1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,d1.ERROR,...c),this._logHandler(this,d1.ERROR,...c)}}const eb=(e,c)=>c.some(a=>e instanceof a);let Mr,Lr;function ab(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tb(){return Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cs=new WeakMap,S9=new WeakMap,es=new WeakMap,G7=new WeakMap,Rc=new WeakMap;function rb(e){const c=new Promise((a,t)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{a(I3(e.result)),r()},i=()=>{t(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",i)});return c.then(a=>{a instanceof IDBCursor&&cs.set(a,e)}).catch(()=>{}),Rc.set(c,e),c}function nb(e){if(S9.has(e))return;const c=new Promise((a,t)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{a(),r()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});S9.set(e,c)}let A9={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return S9.get(e);if(c==="objectStoreNames")return e.objectStoreNames||es.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return I3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function ib(e){A9=e(A9)}function sb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const t=e.call(W7(this),c,...a);return es.set(t,c.sort?c.sort():[c]),I3(t)}:tb().includes(e)?function(...c){return e.apply(W7(this),c),I3(cs.get(this))}:function(...c){return I3(e.apply(W7(this),c))}}function ob(e){return typeof e=="function"?sb(e):(e instanceof IDBTransaction&&nb(e),eb(e,ab())?new Proxy(e,A9):e)}function I3(e){if(e instanceof IDBRequest)return rb(e);if(G7.has(e))return G7.get(e);const c=ob(e);return c!==e&&(G7.set(e,c),Rc.set(c,e)),c}const W7=e=>Rc.get(e);function lb(e,c,{blocked:a,upgrade:t,blocking:r,terminated:n}={}){const i=indexedDB.open(e,c),o=I3(i);return t&&i.addEventListener("upgradeneeded",l=>{t(I3(i.result),l.oldVersion,l.newVersion,I3(i.transaction),l)}),a&&i.addEventListener("blocked",l=>a(l.oldVersion,l.newVersion,l)),o.then(l=>{n&&l.addEventListener("close",()=>n()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const fb=["get","getKey","getAll","getAllKeys","count"],ub=["put","add","delete","clear"],K7=new Map;function wr(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(K7.get(c))return K7.get(c);const a=c.replace(/FromIndex$/,""),t=c!==a,r=ub.includes(a);if(!(a in(t?IDBIndex:IDBObjectStore).prototype)||!(r||fb.includes(a)))return;const n=async function(i,...o){const l=this.transaction(i,r?"readwrite":"readonly");let u=l.store;return t&&(u=u.index(o.shift())),(await Promise.all([u[a](...o),r&&l.done]))[0]};return K7.set(c,n),n}ib(e=>({...e,get:(c,a,t)=>wr(c,a)||e.get(c,a,t),has:(c,a)=>!!wr(c,a)||e.has(c,a)}));/**
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
 */class hb{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(mb(a)){const t=a.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(a=>a).join(" ")}}function mb(e){const c=e.getComponent();return c?.type==="VERSION"}const N9="@firebase/app",br="0.9.29";/**
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
 */const g4=new Ji("@firebase/app"),db="@firebase/app-compat",vb="@firebase/analytics-compat",pb="@firebase/analytics",zb="@firebase/app-check-compat",gb="@firebase/app-check",Hb="@firebase/auth",Vb="@firebase/auth-compat",Cb="@firebase/database",Mb="@firebase/database-compat",Lb="@firebase/functions",wb="@firebase/functions-compat",bb="@firebase/installations",yb="@firebase/installations-compat",xb="@firebase/messaging",Sb="@firebase/messaging-compat",Ab="@firebase/performance",Nb="@firebase/performance-compat",_b="@firebase/remote-config",kb="@firebase/remote-config-compat",Tb="@firebase/storage",Eb="@firebase/storage-compat",Pb="@firebase/firestore",Ib="@firebase/firestore-compat",Rb="firebase",Db="10.9.0";/**
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
 */const _9="[DEFAULT]",Fb={[N9]:"fire-core",[db]:"fire-core-compat",[pb]:"fire-analytics",[vb]:"fire-analytics-compat",[gb]:"fire-app-check",[zb]:"fire-app-check-compat",[Hb]:"fire-auth",[Vb]:"fire-auth-compat",[Cb]:"fire-rtdb",[Mb]:"fire-rtdb-compat",[Lb]:"fire-fn",[wb]:"fire-fn-compat",[bb]:"fire-iid",[yb]:"fire-iid-compat",[xb]:"fire-fcm",[Sb]:"fire-fcm-compat",[Ab]:"fire-perf",[Nb]:"fire-perf-compat",[_b]:"fire-rc",[kb]:"fire-rc-compat",[Tb]:"fire-gcs",[Eb]:"fire-gcs-compat",[Pb]:"fire-fst",[Ib]:"fire-fst-compat","fire-js":"fire-js",[Rb]:"fire-js-all"};/**
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
 */const K8=new Map,k9=new Map;function Bb(e,c){try{e.container.addComponent(c)}catch(a){g4.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function Z8(e){const c=e.name;if(k9.has(c))return g4.debug(`There were multiple attempts to register component ${c}.`),!1;k9.set(c,e);for(const a of K8.values())Bb(a,e);return!0}function Ob(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
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
 */const qb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},R3=new Xi("app","Firebase",qb);/**
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
 */class Ub{constructor(c,a,t){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new a0("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw R3.create("app-deleted",{appName:this._name})}}/**
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
 */const $b=Db;function as(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const t=Object.assign({name:_9,automaticDataCollectionEnabled:!1},c),r=t.name;if(typeof r!="string"||!r)throw R3.create("bad-app-name",{appName:String(r)});if(a||(a=Qi()),!a)throw R3.create("no-options");const n=K8.get(r);if(n){if(x9(a,n.options)&&x9(t,n.config))return n;throw R3.create("duplicate-app",{appName:r})}const i=new Qw(r);for(const l of k9.values())i.addComponent(l);const o=new Ub(a,t,i);return K8.set(r,o),o}function jb(e=_9){const c=K8.get(e);if(!c&&e===_9&&Qi())return as();if(!c)throw R3.create("no-app",{appName:e});return c}function Z4(e,c,a){var t;let r=(t=Fb[e])!==null&&t!==void 0?t:e;a&&(r+=`-${a}`);const n=r.match(/\s|\//),i=c.match(/\s|\//);if(n||i){const o=[`Unable to register library "${r}" with version "${c}":`];n&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),n&&i&&o.push("and"),i&&o.push(`version name "${c}" contains illegal characters (whitespace or "/")`),g4.warn(o.join(" "));return}Z8(new a0(`${r}-version`,()=>({library:r,version:c}),"VERSION"))}/**
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
 */const Gb="firebase-heartbeat-database",Wb=1,t0="firebase-heartbeat-store";let Z7=null;function ts(){return Z7||(Z7=lb(Gb,Wb,{upgrade:(e,c)=>{switch(c){case 0:try{e.createObjectStore(t0)}catch(a){console.warn(a)}}}}).catch(e=>{throw R3.create("idb-open",{originalErrorMessage:e.message})})),Z7}async function Kb(e){try{const a=(await ts()).transaction(t0),t=await a.objectStore(t0).get(rs(e));return await a.done,t}catch(c){if(c instanceof h6)g4.warn(c.message);else{const a=R3.create("idb-get",{originalErrorMessage:c?.message});g4.warn(a.message)}}}async function yr(e,c){try{const t=(await ts()).transaction(t0,"readwrite");await t.objectStore(t0).put(c,rs(e)),await t.done}catch(a){if(a instanceof h6)g4.warn(a.message);else{const t=R3.create("idb-set",{originalErrorMessage:a?.message});g4.warn(t.message)}}}function rs(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Zb=1024,Qb=30*24*60*60*1e3;class Yb{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new Jb(a),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var c,a;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=xr();if(!(((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)===null||a===void 0?void 0:a.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Qb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var c;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=xr(),{heartbeatsToSend:t,unsentEntries:r}=Xb(this._heartbeatsCache.heartbeats),n=G8(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=a,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function xr(){return new Date().toISOString().substring(0,10)}function Xb(e,c=Zb){const a=[];let t=e.slice();for(const r of e){const n=a.find(i=>i.agent===r.agent);if(n){if(n.dates.push(r.date),Sr(a)>c){n.dates.pop();break}}else if(a.push({agent:r.agent,dates:[r.date]}),Sr(a)>c){a.pop();break}t=t.slice(1)}return{heartbeatsToSend:a,unsentEntries:t}}class Jb{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yi()?Uw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await Kb(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return yr(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return yr(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...c.heartbeats]})}else return}}function Sr(e){return G8(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function cy(e){Z8(new a0("platform-logger",c=>new hb(c),"PRIVATE")),Z8(new a0("heartbeat",c=>new Yb(c),"PRIVATE")),Z4(N9,br,e),Z4(N9,br,"esm2017"),Z4("fire-js","")}cy("");var ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Dc=Dc||{},e1=ey||self;function x5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function y0(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function ay(e){return Object.prototype.hasOwnProperty.call(e,Q7)&&e[Q7]||(e[Q7]=++ty)}var Q7="closure_uid_"+(1e9*Math.random()>>>0),ty=0;function ry(e,c,a){return e.call.apply(e.bind,arguments)}function ny(e,c,a){if(!e)throw Error();if(2<arguments.length){var t=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,t),e.apply(c,r)}}return function(){return e.apply(c,arguments)}}function l2(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?l2=ry:l2=ny,l2.apply(null,arguments)}function f8(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var t=a.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function G1(e,c){function a(){}a.prototype=c.prototype,e.$=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.ac=function(t,r,n){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return c.prototype[r].apply(t,i)}}function G3(){this.s=this.s,this.o=this.o}var iy=0;G3.prototype.s=!1;G3.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),iy!=0)&&ay(this)};G3.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ns=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function Fc(e){const c=e.length;if(0<c){const a=Array(c);for(let t=0;t<c;t++)a[t]=e[t];return a}return[]}function Ar(e,c){for(let a=1;a<arguments.length;a++){const t=arguments[a];if(x5(t)){const r=e.length||0,n=t.length||0;e.length=r+n;for(let i=0;i<n;i++)e[r+i]=t[i]}else e.push(t)}}function f2(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}f2.prototype.h=function(){this.defaultPrevented=!0};var sy=function(){if(!e1.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const a=()=>{};e1.addEventListener("test",a,c),e1.removeEventListener("test",a,c)}catch{}return e}();function r0(e){return/^[\s\xa0]*$/.test(e)}function S5(){var e=e1.navigator;return e&&(e=e.userAgent)?e:""}function Q2(e){return S5().indexOf(e)!=-1}function Bc(e){return Bc[" "](e),e}Bc[" "]=function(){};function oy(e,c){var a=cx;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=c(e)}var ly=Q2("Opera"),a6=Q2("Trident")||Q2("MSIE"),is=Q2("Edge"),T9=is||a6,ss=Q2("Gecko")&&!(S5().toLowerCase().indexOf("webkit")!=-1&&!Q2("Edge"))&&!(Q2("Trident")||Q2("MSIE"))&&!Q2("Edge"),fy=S5().toLowerCase().indexOf("webkit")!=-1&&!Q2("Edge");function os(){var e=e1.document;return e?e.documentMode:void 0}var E9;c:{var Y7="",X7=function(){var e=S5();if(ss)return/rv:([^\);]+)(\)|;)/.exec(e);if(is)return/Edge\/([\d\.]+)/.exec(e);if(a6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(fy)return/WebKit\/(\S+)/.exec(e);if(ly)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(X7&&(Y7=X7?X7[1]:""),a6){var J7=os();if(J7!=null&&J7>parseFloat(Y7)){E9=String(J7);break c}}E9=Y7}var P9;if(e1.document&&a6){var Nr=os();P9=Nr||parseInt(E9,10)||void 0}else P9=void 0;var uy=P9;function n0(e,c){if(f2.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,t=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(ss){c:{try{Bc(c.nodeName);var r=!0;break c}catch{}r=!1}r||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,t?(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:hy[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&n0.$.h.call(this)}}G1(n0,f2);var hy={2:"touch",3:"pen",4:"mouse"};n0.prototype.h=function(){n0.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var x0="closure_listenable_"+(1e6*Math.random()|0),my=0;function dy(e,c,a,t,r){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!t,this.la=r,this.key=++my,this.fa=this.ia=!1}function A5(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Oc(e,c,a){for(const t in e)c.call(a,e[t],t,e)}function vy(e,c){for(const a in e)c.call(void 0,e[a],a,e)}function ls(e){const c={};for(const a in e)c[a]=e[a];return c}const _r="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fs(e,c){let a,t;for(let r=1;r<arguments.length;r++){t=arguments[r];for(a in t)e[a]=t[a];for(let n=0;n<_r.length;n++)a=_r[n],Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}}function N5(e){this.src=e,this.g={},this.h=0}N5.prototype.add=function(e,c,a,t,r){var n=e.toString();e=this.g[n],e||(e=this.g[n]=[],this.h++);var i=R9(e,c,t,r);return-1<i?(c=e[i],a||(c.ia=!1)):(c=new dy(c,this.src,n,!!t,r),c.ia=a,e.push(c)),c};function I9(e,c){var a=c.type;if(a in e.g){var t=e.g[a],r=ns(t,c),n;(n=0<=r)&&Array.prototype.splice.call(t,r,1),n&&(A5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function R9(e,c,a,t){for(var r=0;r<e.length;++r){var n=e[r];if(!n.fa&&n.listener==c&&n.capture==!!a&&n.la==t)return r}return-1}var qc="closure_lm_"+(1e6*Math.random()|0),c9={};function us(e,c,a,t,r){if(t&&t.once)return ms(e,c,a,t,r);if(Array.isArray(c)){for(var n=0;n<c.length;n++)us(e,c[n],a,t,r);return null}return a=jc(a),e&&e[x0]?e.O(c,a,y0(t)?!!t.capture:!!t,r):hs(e,c,a,!1,t,r)}function hs(e,c,a,t,r,n){if(!c)throw Error("Invalid event type");var i=y0(r)?!!r.capture:!!r,o=$c(e);if(o||(e[qc]=o=new N5(e)),a=o.add(c,a,t,i,n),a.proxy)return a;if(t=py(),a.proxy=t,t.src=e,t.listener=a,e.addEventListener)sy||(r=i),r===void 0&&(r=!1),e.addEventListener(c.toString(),t,r);else if(e.attachEvent)e.attachEvent(vs(c.toString()),t);else if(e.addListener&&e.removeListener)e.addListener(t);else throw Error("addEventListener and attachEvent are unavailable.");return a}function py(){function e(a){return c.call(e.src,e.listener,a)}const c=zy;return e}function ms(e,c,a,t,r){if(Array.isArray(c)){for(var n=0;n<c.length;n++)ms(e,c[n],a,t,r);return null}return a=jc(a),e&&e[x0]?e.P(c,a,y0(t)?!!t.capture:!!t,r):hs(e,c,a,!0,t,r)}function ds(e,c,a,t,r){if(Array.isArray(c))for(var n=0;n<c.length;n++)ds(e,c[n],a,t,r);else t=y0(t)?!!t.capture:!!t,a=jc(a),e&&e[x0]?(e=e.i,c=String(c).toString(),c in e.g&&(n=e.g[c],a=R9(n,a,t,r),-1<a&&(A5(n[a]),Array.prototype.splice.call(n,a,1),n.length==0&&(delete e.g[c],e.h--)))):e&&(e=$c(e))&&(c=e.g[c.toString()],e=-1,c&&(e=R9(c,a,t,r)),(a=-1<e?c[e]:null)&&Uc(a))}function Uc(e){if(typeof e!="number"&&e&&!e.fa){var c=e.src;if(c&&c[x0])I9(c.i,e);else{var a=e.type,t=e.proxy;c.removeEventListener?c.removeEventListener(a,t,e.capture):c.detachEvent?c.detachEvent(vs(a),t):c.addListener&&c.removeListener&&c.removeListener(t),(a=$c(c))?(I9(a,e),a.h==0&&(a.src=null,c[qc]=null)):A5(e)}}}function vs(e){return e in c9?c9[e]:c9[e]="on"+e}function zy(e,c){if(e.fa)e=!0;else{c=new n0(c,this);var a=e.listener,t=e.la||e.src;e.ia&&Uc(e),e=a.call(t,c)}return e}function $c(e){return e=e[qc],e instanceof N5?e:null}var e9="__closure_events_fn_"+(1e9*Math.random()>>>0);function jc(e){return typeof e=="function"?e:(e[e9]||(e[e9]=function(c){return e.handleEvent(c)}),e[e9])}function j1(){G3.call(this),this.i=new N5(this),this.S=this,this.J=null}G1(j1,G3);j1.prototype[x0]=!0;j1.prototype.removeEventListener=function(e,c,a,t){ds(this,e,c,a,t)};function J1(e,c){var a,t=e.J;if(t)for(a=[];t;t=t.J)a.push(t);if(e=e.S,t=c.type||c,typeof c=="string")c=new f2(c,e);else if(c instanceof f2)c.target=c.target||e;else{var r=c;c=new f2(t,e),fs(c,r)}if(r=!0,a)for(var n=a.length-1;0<=n;n--){var i=c.g=a[n];r=u8(i,t,!0,c)&&r}if(i=c.g=e,r=u8(i,t,!0,c)&&r,r=u8(i,t,!1,c)&&r,a)for(n=0;n<a.length;n++)i=c.g=a[n],r=u8(i,t,!1,c)&&r}j1.prototype.N=function(){if(j1.$.N.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],t=0;t<a.length;t++)A5(a[t]);delete e.g[c],e.h--}}this.J=null};j1.prototype.O=function(e,c,a,t){return this.i.add(String(e),c,!1,a,t)};j1.prototype.P=function(e,c,a,t){return this.i.add(String(e),c,!0,a,t)};function u8(e,c,a,t){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var r=!0,n=0;n<c.length;++n){var i=c[n];if(i&&!i.fa&&i.capture==a){var o=i.listener,l=i.la||i.src;i.ia&&I9(e.i,i),r=o.call(l,t)!==!1&&r}}return r&&!t.defaultPrevented}var Gc=e1.JSON.stringify;class gy{constructor(c,a){this.i=c,this.j=a,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Hy(){var e=Wc;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class Vy{constructor(){this.h=this.g=null}add(c,a){const t=ps.get();t.set(c,a),this.h?this.h.next=t:this.g=t,this.h=t}}var ps=new gy(()=>new Cy,e=>e.reset());class Cy{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function My(e){var c=1;e=e.split(":");const a=[];for(;0<c&&e.length;)a.push(e.shift()),c--;return e.length&&a.push(e.join(":")),a}function Ly(e){e1.setTimeout(()=>{throw e},0)}let i0,s0=!1,Wc=new Vy,zs=()=>{const e=e1.Promise.resolve(void 0);i0=()=>{e.then(wy)}};var wy=()=>{for(var e;e=Hy();){try{e.h.call(e.g)}catch(a){Ly(a)}var c=ps;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}s0=!1};function _5(e,c){j1.call(this),this.h=e||1,this.g=c||e1,this.j=l2(this.qb,this),this.l=Date.now()}G1(_5,j1);F=_5.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J1(this,"tick"),this.ga&&(Kc(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}F.N=function(){_5.$.N.call(this),Kc(this),delete this.g};function Zc(e,c,a){if(typeof e=="function")a&&(e=l2(e,a));else if(e&&typeof e.handleEvent=="function")e=l2(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:e1.setTimeout(e,c||0)}function gs(e){e.g=Zc(()=>{e.g=null,e.i&&(e.i=!1,gs(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class by extends G3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:gs(this)}N(){super.N(),this.g&&(e1.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function o0(e){G3.call(this),this.h=e,this.g={}}G1(o0,G3);var kr=[];function Hs(e,c,a,t){Array.isArray(a)||(a&&(kr[0]=a.toString()),a=kr);for(var r=0;r<a.length;r++){var n=us(c,a[r],t||e.handleEvent,!1,e.h||e);if(!n)break;e.g[n.key]=n}}function Vs(e){Oc(e.g,function(c,a){this.g.hasOwnProperty(a)&&Uc(c)},e),e.g={}}o0.prototype.N=function(){o0.$.N.call(this),Vs(this)};o0.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function k5(){this.g=!0}k5.prototype.Ea=function(){this.g=!1};function yy(e,c,a,t,r,n){e.info(function(){if(e.g)if(n)for(var i="",o=n.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var d=u[0];u=u[1];var v=d.split("_");i=2<=v.length&&v[1]=="type"?i+(d+"="+u+"&"):i+(d+"=redacted&")}}else i=null;else i=n;return"XMLHTTP REQ ("+t+") [attempt "+r+"]: "+c+`
`+a+`
`+i})}function xy(e,c,a,t,r,n,i){e.info(function(){return"XMLHTTP RESP ("+t+") [ attempt "+r+"]: "+c+`
`+a+`
`+n+" "+i})}function q4(e,c,a,t){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ay(e,a)+(t?" "+t:"")})}function Sy(e,c){e.info(function(){return"TIMEOUT: "+c})}k5.prototype.info=function(){};function Ay(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var t=a[e];if(!(2>t.length)){var r=t[1];if(Array.isArray(r)&&!(1>r.length)){var n=r[0];if(n!="noop"&&n!="stop"&&n!="close")for(var i=1;i<r.length;i++)r[i]=""}}}}return Gc(a)}catch{return c}}var y4={},Tr=null;function T5(){return Tr=Tr||new j1}y4.Ta="serverreachability";function Cs(e){f2.call(this,y4.Ta,e)}G1(Cs,f2);function l0(e){const c=T5();J1(c,new Cs(c))}y4.STAT_EVENT="statevent";function Ms(e,c){f2.call(this,y4.STAT_EVENT,e),this.stat=c}G1(Ms,f2);function d2(e){const c=T5();J1(c,new Ms(c,e))}y4.Ua="timingevent";function Ls(e,c){f2.call(this,y4.Ua,e),this.size=c}G1(Ls,f2);function S0(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return e1.setTimeout(function(){e()},c)}var E5={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ws={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qc(){}Qc.prototype.h=null;function Er(e){return e.h||(e.h=e.i())}function bs(){}var A0={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yc(){f2.call(this,"d")}G1(Yc,f2);function Xc(){f2.call(this,"c")}G1(Xc,f2);var D9;function P5(){}G1(P5,Qc);P5.prototype.g=function(){return new XMLHttpRequest};P5.prototype.i=function(){return{}};D9=new P5;function N0(e,c,a,t){this.l=e,this.j=c,this.m=a,this.W=t||1,this.U=new o0(this),this.P=Ny,e=T9?125:void 0,this.V=new _5(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var Ny=45e3,xs={},F9={};F=N0.prototype;F.setTimeout=function(e){this.P=e};function B9(e,c,a){e.L=1,e.A=R5(m3(c)),e.u=a,e.S=!0,Ss(e,null)}function Ss(e,c){e.G=Date.now(),_0(e),e.B=m3(e.A);var a=e.B,t=e.W;Array.isArray(t)||(t=[String(t)]),Is(a.i,"t",t),e.o=0,a=e.l.J,e.h=new ys,e.g=to(e.l,a?c:null,!e.u),0<e.O&&(e.M=new by(l2(e.Pa,e,e.g),e.O)),Hs(e.U,e.g,"readystatechange",e.nb),c=e.I?ls(e.I):{},e.u?(e.v||(e.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,c)):(e.v="GET",e.g.ha(e.B,e.v,null,c)),l0(),yy(e.j,e.v,e.B,e.m,e.W,e.u)}F.nb=function(e){e=e.target;const c=this.M;c&&Y2(e)==3?c.l():this.Pa(e)};F.Pa=function(e){try{if(e==this.g)c:{const d=Y2(this.g);var c=this.g.Ia();const v=this.g.da();if(!(3>d)&&(d!=3||T9||this.g&&(this.h.h||this.g.ja()||Dr(this.g)))){this.J||d!=4||c==7||(c==8||0>=v?l0(3):l0(2)),I5(this);var a=this.g.da();this.ca=a;e:if(As(this)){var t=Dr(this.g);e="";var r=t.length,n=Y2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){o4(this),q6(this);var i="";break e}this.h.i=new e1.TextDecoder}for(c=0;c<r;c++)this.h.h=!0,e+=this.h.i.decode(t[c],{stream:n&&c==r-1});t.length=0,this.h.g+=e,this.o=0,i=this.h.g}else i=this.g.ja();if(this.i=a==200,xy(this.j,this.v,this.B,this.m,this.W,d,a),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!r0(o)){var u=o;break e}}u=null}if(a=u)q4(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,O9(this,a);else{this.i=!1,this.s=3,d2(12),o4(this),q6(this);break c}}this.S?(Ns(this,d,i),T9&&this.i&&d==3&&(Hs(this.U,this.V,"tick",this.mb),this.V.start())):(q4(this.j,this.m,i,null),O9(this,i)),d==4&&o4(this),this.i&&!this.J&&(d==4?Js(this.l,this):(this.i=!1,_0(this)))}else Yy(this.g),a==400&&0<i.indexOf("Unknown SID")?(this.s=3,d2(12)):(this.s=0,d2(13)),o4(this),q6(this)}}}catch{}finally{}};function As(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ns(e,c,a){let t=!0,r;for(;!e.J&&e.o<a.length;)if(r=_y(e,a),r==F9){c==4&&(e.s=4,d2(14),t=!1),q4(e.j,e.m,null,"[Incomplete Response]");break}else if(r==xs){e.s=4,d2(15),q4(e.j,e.m,a,"[Invalid Chunk]"),t=!1;break}else q4(e.j,e.m,r,null),O9(e,r);As(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),c!=4||a.length!=0||e.h.h||(e.s=1,d2(16),t=!1),e.i=e.i&&t,t?0<a.length&&!e.ba&&(e.ba=!0,c=e.l,c.g==e&&c.ca&&!c.M&&(c.l.info("Great, no buffering proxy detected. Bytes received: "+a.length),re(c),c.M=!0,d2(11))):(q4(e.j,e.m,a,"[Invalid Chunked Response]"),o4(e),q6(e))}F.mb=function(){if(this.g){var e=Y2(this.g),c=this.g.ja();this.o<c.length&&(I5(this),Ns(this,e,c),this.i&&e!=4&&_0(this))}};function _y(e,c){var a=e.o,t=c.indexOf(`
`,a);return t==-1?F9:(a=Number(c.substring(a,t)),isNaN(a)?xs:(t+=1,t+a>c.length?F9:(c=c.slice(t,t+a),e.o=t+a,c)))}F.cancel=function(){this.J=!0,o4(this)};function _0(e){e.Y=Date.now()+e.P,_s(e,e.P)}function _s(e,c){if(e.C!=null)throw Error("WatchDog timer not null");e.C=S0(l2(e.lb,e),c)}function I5(e){e.C&&(e1.clearTimeout(e.C),e.C=null)}F.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Sy(this.j,this.B),this.L!=2&&(l0(),d2(17)),o4(this),this.s=2,q6(this)):_s(this,this.Y-e)};function q6(e){e.l.H==0||e.J||Js(e.l,e)}function o4(e){I5(e);var c=e.M;c&&typeof c.sa=="function"&&c.sa(),e.M=null,Kc(e.V),Vs(e.U),e.g&&(c=e.g,e.g=null,c.abort(),c.sa())}function O9(e,c){try{var a=e.l;if(a.H!=0&&(a.g==e||q9(a.i,e))){if(!e.K&&q9(a.i,e)&&a.H==3){try{var t=a.Ja.g.parse(c)}catch{t=null}if(Array.isArray(t)&&t.length==3){var r=t;if(r[0]==0){c:if(!a.u){if(a.g)if(a.g.G+3e3<e.G)X8(a),O5(a);else break c;te(a),d2(18)}}else a.Fa=r[1],0<a.Fa-a.V&&37500>r[2]&&a.G&&a.A==0&&!a.v&&(a.v=S0(l2(a.ib,a),6e3));if(1>=Fs(a.i)&&a.oa){try{a.oa()}catch{}a.oa=void 0}}else l4(a,11)}else if((e.K||a.g==e)&&X8(a),!r0(c))for(r=a.Ja.g.parse(c),c=0;c<r.length;c++){let u=r[c];if(a.V=u[0],u=u[1],a.H==2)if(u[0]=="c"){a.K=u[1],a.pa=u[2];const d=u[3];d!=null&&(a.ra=d,a.l.info("VER="+a.ra));const v=u[4];v!=null&&(a.Ga=v,a.l.info("SVER="+a.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(t=1.5*g,a.L=t,a.l.info("backChannelRequestTimeoutMs_="+t)),t=a;const V=e.g;if(V){const R=V.g?V.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var n=t.i;n.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(n.j=n.l,n.g=new Set,n.h&&(Jc(n,n.h),n.h=null))}if(t.F){const E=V.g?V.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(t.Da=E,x1(t.I,t.F,E))}}a.H=3,a.h&&a.h.Ba(),a.ca&&(a.S=Date.now()-e.G,a.l.info("Handshake RTT: "+a.S+"ms")),t=a;var i=e;if(t.wa=ao(t,t.J?t.pa:null,t.Y),i.K){Bs(t.i,i);var o=i,l=t.L;l&&o.setTimeout(l),o.C&&(I5(o),_0(o)),t.g=i}else Ys(t);0<a.j.length&&q5(a)}else u[0]!="stop"&&u[0]!="close"||l4(a,7);else a.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?l4(a,7):ae(a):u[0]!="noop"&&a.h&&a.h.Aa(u),a.A=0)}}l0(4)}catch{}}function ky(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(x5(e)){for(var c=[],a=e.length,t=0;t<a;t++)c.push(e[t]);return c}c=[],a=0;for(t in e)c[a++]=e[t];return c}function Ty(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(x5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const t in e)c[a++]=t;return c}}}function ks(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(x5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=Ty(e),t=ky(e),r=t.length,n=0;n<r;n++)c.call(void 0,t[n],a&&a[n],e)}var Ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ey(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var t=e[a].indexOf("="),r=null;if(0<=t){var n=e[a].substring(0,t);r=e[a].substring(t+1)}else n=e[a];c(n,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function p4(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof p4){this.h=e.h,Q8(this,e.j),this.s=e.s,this.g=e.g,Y8(this,e.m),this.l=e.l;var c=e.i,a=new f0;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),Pr(this,a),this.o=e.o}else e&&(c=String(e).match(Ts))?(this.h=!1,Q8(this,c[1]||"",!0),this.s=T6(c[2]||""),this.g=T6(c[3]||"",!0),Y8(this,c[4]),this.l=T6(c[5]||"",!0),Pr(this,c[6]||"",!0),this.o=T6(c[7]||"")):(this.h=!1,this.i=new f0(null,this.h))}p4.prototype.toString=function(){var e=[],c=this.j;c&&e.push(E6(c,Ir,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push(E6(c,Ir,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(E6(a,a.charAt(0)=="/"?Ry:Iy,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",E6(a,Fy)),e.join("")};function m3(e){return new p4(e)}function Q8(e,c,a){e.j=a?T6(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function Y8(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function Pr(e,c,a){c instanceof f0?(e.i=c,By(e.i,e.h)):(a||(c=E6(c,Dy)),e.i=new f0(c,e.h))}function x1(e,c,a){e.i.set(c,a)}function R5(e){return x1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function T6(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function E6(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,Py),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Py(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ir=/[#\/\?@]/g,Iy=/[#\?:]/g,Ry=/[#\?]/g,Dy=/[#\?@]/g,Fy=/#/g;function f0(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function W3(e){e.g||(e.g=new Map,e.h=0,e.i&&Ey(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}F=f0.prototype;F.add=function(e,c){W3(this),this.i=null,e=m6(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function Es(e,c){W3(e),c=m6(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function Ps(e,c){return W3(e),c=m6(e,c),e.g.has(c)}F.forEach=function(e,c){W3(this),this.g.forEach(function(a,t){a.forEach(function(r){e.call(c,r,t,this)},this)},this)};F.ta=function(){W3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let t=0;t<c.length;t++){const r=e[t];for(let n=0;n<r.length;n++)a.push(c[t])}return a};F.Z=function(e){W3(this);let c=[];if(typeof e=="string")Ps(this,e)&&(c=c.concat(this.g.get(m6(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};F.set=function(e,c){return W3(this),this.i=null,e=m6(this,e),Ps(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};F.get=function(e,c){return e?(e=this.Z(e),0<e.length?String(e[0]):c):c};function Is(e,c,a){Es(e,c),0<a.length&&(e.i=null,e.g.set(m6(e,c),Fc(a)),e.h+=a.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var t=c[a];const n=encodeURIComponent(String(t)),i=this.Z(t);for(t=0;t<i.length;t++){var r=n;i[t]!==""&&(r+="="+encodeURIComponent(String(i[t]))),e.push(r)}}return this.i=e.join("&")};function m6(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function By(e,c){c&&!e.j&&(W3(e),e.i=null,e.g.forEach(function(a,t){var r=t.toLowerCase();t!=r&&(Es(this,t),Is(this,r,a))},e)),e.j=c}var Oy=class{constructor(e,c){this.g=e,this.map=c}};function Rs(e){this.l=e||qy,e1.PerformanceNavigationTiming?(e=e1.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(e1.g&&e1.g.Ka&&e1.g.Ka()&&e1.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qy=10;function Ds(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fs(e){return e.h?1:e.g?e.g.size:0}function q9(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function Jc(e,c){e.g?e.g.add(c):e.h=c}function Bs(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}Rs.prototype.cancel=function(){if(this.i=Os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Os(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.F);return c}return Fc(e.i)}var Uy=class{stringify(e){return e1.JSON.stringify(e,void 0)}parse(e){return e1.JSON.parse(e,void 0)}};function $y(){this.g=new Uy}function jy(e,c,a){const t=a||"";try{ks(e,function(r,n){let i=r;y0(r)&&(i=Gc(r)),c.push(t+n+"="+encodeURIComponent(i))})}catch(r){throw c.push(t+"type="+encodeURIComponent("_badmap")),r}}function Gy(e,c){const a=new k5;if(e1.Image){const t=new Image;t.onload=f8(h8,a,t,"TestLoadImage: loaded",!0,c),t.onerror=f8(h8,a,t,"TestLoadImage: error",!1,c),t.onabort=f8(h8,a,t,"TestLoadImage: abort",!1,c),t.ontimeout=f8(h8,a,t,"TestLoadImage: timeout",!1,c),e1.setTimeout(function(){t.ontimeout&&t.ontimeout()},1e4),t.src=e}else c(!1)}function h8(e,c,a,t,r){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,r(t)}catch{}}function D5(e){this.l=e.ec||null,this.j=e.ob||!1}G1(D5,Qc);D5.prototype.g=function(){return new F5(this.l,this.j)};D5.prototype.i=function(e){return function(){return e}}({});function F5(e,c){j1.call(this),this.F=e,this.u=c,this.m=void 0,this.readyState=ce,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G1(F5,j1);var ce=0;F=F5.prototype;F.open=function(e,c){if(this.readyState!=ce)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,u0(this)};F.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.F||e1).fetch(new Request(this.B,c)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,k0(this)),this.readyState=ce};F.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,u0(this)),this.g&&(this.readyState=3,u0(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof e1.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qs(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function qs(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}F.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?k0(this):u0(this),this.readyState==3&&qs(this)}};F.Za=function(e){this.g&&(this.response=this.responseText=e,k0(this))};F.Ya=function(e){this.g&&(this.response=e,k0(this))};F.ka=function(){this.g&&k0(this)};function k0(e){e.readyState=4,e.l=null,e.j=null,e.A=null,u0(e)}F.setRequestHeader=function(e,c){this.v.append(e,c)};F.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function u0(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(F5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Wy=e1.JSON.parse;function T1(e){j1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Us,this.L=this.M=!1}G1(T1,j1);var Us="",Ky=/^https?$/i,Zy=["POST","PUT"];F=T1.prototype;F.Oa=function(e){this.M=e};F.ha=function(e,c,a,t){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);c=c?c.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():D9.g(),this.C=this.u?Er(this.u):Er(D9),this.g.onreadystatechange=l2(this.La,this);try{this.G=!0,this.g.open(c,String(e),!0),this.G=!1}catch(n){Rr(this,n);return}if(e=a||"",a=new Map(this.headers),t)if(Object.getPrototypeOf(t)===Object.prototype)for(var r in t)a.set(r,t[r]);else if(typeof t.keys=="function"&&typeof t.get=="function")for(const n of t.keys())a.set(n,t.get(n));else throw Error("Unknown input type for opt_headers: "+String(t));t=Array.from(a.keys()).find(n=>n.toLowerCase()=="content-type"),r=e1.FormData&&e instanceof e1.FormData,!(0<=ns(Zy,c))||t||r||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[n,i]of a)this.g.setRequestHeader(n,i);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gs(this),0<this.B&&((this.L=Qy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=l2(this.ua,this)):this.A=Zc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(n){Rr(this,n)}};function Qy(e){return a6&&typeof e.timeout=="number"&&e.ontimeout!==void 0}F.ua=function(){typeof Dc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J1(this,"timeout"),this.abort(8))};function Rr(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,$s(e),B5(e)}function $s(e){e.F||(e.F=!0,J1(e,"complete"),J1(e,"error"))}F.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,J1(this,"complete"),J1(this,"abort"),B5(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),B5(this,!0)),T1.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?js(this):this.kb())};F.kb=function(){js(this)};function js(e){if(e.h&&typeof Dc<"u"&&(!e.C[1]||Y2(e)!=4||e.da()!=2)){if(e.v&&Y2(e)==4)Zc(e.La,0,e);else if(J1(e,"readystatechange"),Y2(e)==4){e.h=!1;try{const i=e.da();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var t;if(t=i===0){var r=String(e.I).match(Ts)[1]||null;!r&&e1.self&&e1.self.location&&(r=e1.self.location.protocol.slice(0,-1)),t=!Ky.test(r?r.toLowerCase():"")}a=t}if(a)J1(e,"complete"),J1(e,"success");else{e.m=6;try{var n=2<Y2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.da()+"]",$s(e)}}finally{B5(e)}}}}function B5(e,c){if(e.g){Gs(e);const a=e.g,t=e.C[0]?()=>{}:null;e.g=null,e.C=null,c||J1(e,"ready");try{a.onreadystatechange=t}catch{}}}function Gs(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(e1.clearTimeout(e.A),e.A=null)}F.isActive=function(){return!!this.g};function Y2(e){return e.g?e.g.readyState:0}F.da=function(){try{return 2<Y2(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),Wy(c)}};function Dr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Us:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Yy(e){const c={};e=(e.g&&2<=Y2(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let t=0;t<e.length;t++){if(r0(e[t]))continue;var a=My(e[t]);const r=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const n=c[r]||[];c[r]=n,n.push(a)}vy(c,function(t){return t.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ws(e){let c="";return Oc(e,function(a,t){c+=t,c+=":",c+=a,c+=`\r
`}),c}function ee(e,c,a){c:{for(t in a){var t=!1;break c}t=!0}t||(a=Ws(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):x1(e,c,a))}function A6(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function Ks(e){this.Ga=0,this.j=[],this.l=new k5,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=A6("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=A6("baseRetryDelayMs",5e3,e),this.hb=A6("retryDelaySeedMs",1e4,e),this.eb=A6("forwardChannelMaxRetries",2,e),this.xa=A6("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Rs(e&&e.concurrentRequestLimit),this.Ja=new $y,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=Ks.prototype;F.ra=8;F.H=1;function ae(e){if(Zs(e),e.H==3){var c=e.W++,a=m3(e.I);if(x1(a,"SID",e.K),x1(a,"RID",c),x1(a,"TYPE","terminate"),T0(e,a),c=new N0(e,e.l,c),c.L=2,c.A=R5(m3(a)),a=!1,e1.navigator&&e1.navigator.sendBeacon)try{a=e1.navigator.sendBeacon(c.A.toString(),"")}catch{}!a&&e1.Image&&(new Image().src=c.A,a=!0),a||(c.g=to(c.l,null),c.g.ha(c.A)),c.G=Date.now(),_0(c)}eo(e)}function O5(e){e.g&&(re(e),e.g.cancel(),e.g=null)}function Zs(e){O5(e),e.u&&(e1.clearTimeout(e.u),e.u=null),X8(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&e1.clearTimeout(e.m),e.m=null)}function q5(e){if(!Ds(e.i)&&!e.m){e.m=!0;var c=e.Na;i0||zs(),s0||(i0(),s0=!0),Wc.add(c,e),e.C=0}}function Xy(e,c){return Fs(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=c.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=S0(l2(e.Na,e,c),co(e,e.C)),e.C++,!0)}F.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new N0(this,this.l,e);let n=this.s;if(this.U&&(n?(n=ls(n),fs(n,this.U)):n=this.U),this.o!==null||this.O||(r.I=n,n=null),this.P)c:{for(var c=0,a=0;a<this.j.length;a++){e:{var t=this.j[a];if("__data__"in t.map&&(t=t.map.__data__,typeof t=="string")){t=t.length;break e}t=void 0}if(t===void 0)break;if(c+=t,4096<c){c=a;break c}if(c===4096||a===this.j.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=Qs(this,r,c),a=m3(this.I),x1(a,"RID",e),x1(a,"CVER",22),this.F&&x1(a,"X-HTTP-Session-Id",this.F),T0(this,a),n&&(this.O?c="headers="+encodeURIComponent(String(Ws(n)))+"&"+c:this.o&&ee(a,this.o,n)),Jc(this.i,r),this.bb&&x1(a,"TYPE","init"),this.P?(x1(a,"$req",c),x1(a,"SID","null"),r.aa=!0,B9(r,a,null)):B9(r,a,c),this.H=2}}else this.H==3&&(e?Fr(this,e):this.j.length==0||Ds(this.i)||Fr(this))};function Fr(e,c){var a;c?a=c.m:a=e.W++;const t=m3(e.I);x1(t,"SID",e.K),x1(t,"RID",a),x1(t,"AID",e.V),T0(e,t),e.o&&e.s&&ee(t,e.o,e.s),a=new N0(e,e.l,a,e.C+1),e.o===null&&(a.I=e.s),c&&(e.j=c.F.concat(e.j)),c=Qs(e,a,1e3),a.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jc(e.i,a),B9(a,t,c)}function T0(e,c){e.na&&Oc(e.na,function(a,t){x1(c,t,a)}),e.h&&ks({},function(a,t){x1(c,t,a)})}function Qs(e,c,a){a=Math.min(e.j.length,a);var t=e.h?l2(e.h.Va,e.h,e):null;c:{var r=e.j;let n=-1;for(;;){const i=["count="+a];n==-1?0<a?(n=r[0].g,i.push("ofs="+n)):n=0:i.push("ofs="+n);let o=!0;for(let l=0;l<a;l++){let u=r[l].g;const d=r[l].map;if(u-=n,0>u)n=Math.max(0,r[l].g-100),o=!1;else try{jy(d,i,"req"+u+"_")}catch{t&&t(d)}}if(o){t=i.join("&");break c}}}return e=e.j.splice(0,a),c.F=e,t}function Ys(e){if(!e.g&&!e.u){e.ba=1;var c=e.Ma;i0||zs(),s0||(i0(),s0=!0),Wc.add(c,e),e.A=0}}function te(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=S0(l2(e.Ma,e),co(e,e.A)),e.A++,!0)}F.Ma=function(){if(this.u=null,Xs(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=S0(l2(this.jb,this),e)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,d2(10),O5(this),Xs(this))};function re(e){e.B!=null&&(e1.clearTimeout(e.B),e.B=null)}function Xs(e){e.g=new N0(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var c=m3(e.wa);x1(c,"RID","rpc"),x1(c,"SID",e.K),x1(c,"AID",e.V),x1(c,"CI",e.G?"0":"1"),!e.G&&e.qa&&x1(c,"TO",e.qa),x1(c,"TYPE","xmlhttp"),T0(e,c),e.o&&e.s&&ee(c,e.o,e.s),e.L&&e.g.setTimeout(e.L);var a=e.g;e=e.pa,a.L=1,a.A=R5(m3(c)),a.u=null,a.S=!0,Ss(a,e)}F.ib=function(){this.v!=null&&(this.v=null,O5(this),te(this),d2(19))};function X8(e){e.v!=null&&(e1.clearTimeout(e.v),e.v=null)}function Js(e,c){var a=null;if(e.g==c){X8(e),re(e),e.g=null;var t=2}else if(q9(e.i,c))a=c.F,Bs(e.i,c),t=1;else return;if(e.H!=0){if(c.i)if(t==1){a=c.u?c.u.length:0,c=Date.now()-c.G;var r=e.C;t=T5(),J1(t,new Ls(t,a)),q5(e)}else Ys(e);else if(r=c.s,r==3||r==0&&0<c.ca||!(t==1&&Xy(e,c)||t==2&&te(e)))switch(a&&0<a.length&&(c=e.i,c.i=c.i.concat(a)),r){case 1:l4(e,5);break;case 4:l4(e,10);break;case 3:l4(e,6);break;default:l4(e,2)}}}function co(e,c){let a=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(a*=2),a*c}function l4(e,c){if(e.l.info("Error code "+c),c==2){var a=null;e.h&&(a=null);var t=l2(e.pb,e);a||(a=new p4("//www.google.com/images/cleardot.gif"),e1.location&&e1.location.protocol=="http"||Q8(a,"https"),R5(a)),Gy(a.toString(),t)}else d2(2);e.H=0,e.h&&e.h.za(c),eo(e),Zs(e)}F.pb=function(e){e?(this.l.info("Successfully pinged google.com"),d2(2)):(this.l.info("Failed to ping google.com"),d2(1))};function eo(e){if(e.H=0,e.ma=[],e.h){const c=Os(e.i);(c.length!=0||e.j.length!=0)&&(Ar(e.ma,c),Ar(e.ma,e.j),e.i.i.length=0,Fc(e.j),e.j.length=0),e.h.ya()}}function ao(e,c,a){var t=a instanceof p4?m3(a):new p4(a);if(t.g!="")c&&(t.g=c+"."+t.g),Y8(t,t.m);else{var r=e1.location;t=r.protocol,c=c?c+"."+r.hostname:r.hostname,r=+r.port;var n=new p4(null);t&&Q8(n,t),c&&(n.g=c),r&&Y8(n,r),a&&(n.l=a),t=n}return a=e.F,c=e.Da,a&&c&&x1(t,a,c),x1(t,"VER",e.ra),T0(e,t),t}function to(e,c,a){if(c&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=e.Ha&&!e.va?new T1(new D5({ob:a})):new T1(e.va),c.Oa(e.J),c}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function ro(){}F=ro.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function J8(){if(a6&&!(10<=Number(uy)))throw Error("Environmental error: no available transport.")}J8.prototype.g=function(e,c){return new b2(e,c)};function b2(e,c){j1.call(this),this.g=new Ks(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.Ca&&(e?e["X-WebChannel-Client-Profile"]=c.Ca:e={"X-WebChannel-Client-Profile":c.Ca}),this.g.U=e,(e=c&&c.cc)&&!r0(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!r0(c)&&(this.g.F=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new d6(this)}G1(b2,j1);b2.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,c=this.l,a=this.h||void 0;d2(0),e.Y=c,e.na=a||{},e.G=e.aa,e.I=ao(e,null,e.Y),q5(e)};b2.prototype.close=function(){ae(this.g)};b2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=Gc(e),e=a);c.j.push(new Oy(c.fb++,e)),c.H==3&&q5(c)};b2.prototype.N=function(){this.g.h=null,delete this.j,ae(this.g),delete this.g,b2.$.N.call(this)};function no(e){Yc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}G1(no,Yc);function io(){Xc.call(this),this.status=1}G1(io,Xc);function d6(e){this.g=e}G1(d6,ro);d6.prototype.Ba=function(){J1(this.g,"a")};d6.prototype.Aa=function(e){J1(this.g,new no(e))};d6.prototype.za=function(e){J1(this.g,new io)};d6.prototype.ya=function(){J1(this.g,"b")};function Jy(){this.blockSize=-1}function q2(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G1(q2,Jy);q2.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function a9(e,c,a){a||(a=0);var t=Array(16);if(typeof c=="string")for(var r=0;16>r;++r)t[r]=c.charCodeAt(a++)|c.charCodeAt(a++)<<8|c.charCodeAt(a++)<<16|c.charCodeAt(a++)<<24;else for(r=0;16>r;++r)t[r]=c[a++]|c[a++]<<8|c[a++]<<16|c[a++]<<24;c=e.g[0],a=e.g[1],r=e.g[2];var n=e.g[3],i=c+(n^a&(r^n))+t[0]+3614090360&4294967295;c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[1]+3905402710&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[2]+606105819&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[3]+3250441966&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[4]+4118548399&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[5]+1200080426&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[6]+2821735955&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[7]+4249261313&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[8]+1770035416&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[9]+2336552879&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[10]+4294925233&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[11]+2304563134&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[12]+1804603682&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[13]+4254626195&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[14]+2792965006&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[15]+1236535329&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(r^n&(a^r))+t[1]+4129170786&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[6]+3225465664&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[11]+643717713&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[0]+3921069994&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[5]+3593408605&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[10]+38016083&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[15]+3634488961&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[4]+3889429448&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[9]+568446438&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[14]+3275163606&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[3]+4107603335&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[8]+1163531501&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[13]+2850285829&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[2]+4243563512&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[7]+1735328473&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[12]+2368359562&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(a^r^n)+t[5]+4294588738&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[8]+2272392833&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[11]+1839030562&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[14]+4259657740&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[1]+2763975236&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[4]+1272893353&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[7]+4139469664&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[10]+3200236656&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[13]+681279174&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[0]+3936430074&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[3]+3572445317&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[6]+76029189&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[9]+3654602809&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[12]+3873151461&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[15]+530742520&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[2]+3299628645&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(r^(a|~n))+t[0]+4096336452&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[7]+1126891415&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[14]+2878612391&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[5]+4237533241&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[12]+1700485571&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[3]+2399980690&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[10]+4293915773&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[1]+2240044497&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[8]+1873313359&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[15]+4264355552&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[6]+2734768916&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[13]+1309151649&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[4]+4149444226&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[11]+3174756917&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[2]+718787259&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[9]+3951481745&4294967295,e.g[0]=e.g[0]+c&4294967295,e.g[1]=e.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+n&4294967295}q2.prototype.j=function(e,c){c===void 0&&(c=e.length);for(var a=c-this.blockSize,t=this.m,r=this.h,n=0;n<c;){if(r==0)for(;n<=a;)a9(this,e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<c;)if(t[r++]=e.charCodeAt(n++),r==this.blockSize){a9(this,t),r=0;break}}else for(;n<c;)if(t[r++]=e[n++],r==this.blockSize){a9(this,t),r=0;break}}this.h=r,this.i+=c};q2.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var c=1;c<e.length-8;++c)e[c]=0;var a=8*this.i;for(c=e.length-8;c<e.length;++c)e[c]=a&255,a/=256;for(this.j(e),e=Array(16),c=a=0;4>c;++c)for(var t=0;32>t;t+=8)e[a++]=this.g[c]>>>t&255;return e};function g1(e,c){this.h=c;for(var a=[],t=!0,r=e.length-1;0<=r;r--){var n=e[r]|0;t&&n==c||(a[r]=n,t=!1)}this.g=a}var cx={};function ne(e){return-128<=e&&128>e?oy(e,function(c){return new g1([c|0],0>c?-1:0)}):new g1([e|0],0>e?-1:0)}function X2(e){if(isNaN(e)||!isFinite(e))return Q4;if(0>e)return Y1(X2(-e));for(var c=[],a=1,t=0;e>=a;t++)c[t]=e/a|0,a*=U9;return new g1(c,0)}function so(e,c){if(e.length==0)throw Error("number format error: empty string");if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(e.charAt(0)=="-")return Y1(so(e.substring(1),c));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var a=X2(Math.pow(c,8)),t=Q4,r=0;r<e.length;r+=8){var n=Math.min(8,e.length-r),i=parseInt(e.substring(r,r+n),c);8>n?(n=X2(Math.pow(c,n)),t=t.R(n).add(X2(i))):(t=t.R(a),t=t.add(X2(i)))}return t}var U9=4294967296,Q4=ne(0),$9=ne(1),Br=ne(16777216);F=g1.prototype;F.ea=function(){if(k2(this))return-Y1(this).ea();for(var e=0,c=1,a=0;a<this.g.length;a++){var t=this.D(a);e+=(0<=t?t:U9+t)*c,c*=U9}return e};F.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(l3(this))return"0";if(k2(this))return"-"+Y1(this).toString(e);for(var c=X2(Math.pow(e,6)),a=this,t="";;){var r=e5(a,c).g;a=c5(a,r.R(c));var n=((0<a.g.length?a.g[0]:a.h)>>>0).toString(e);if(a=r,l3(a))return n+t;for(;6>n.length;)n="0"+n;t=n+t}};F.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function l3(e){if(e.h!=0)return!1;for(var c=0;c<e.g.length;c++)if(e.g[c]!=0)return!1;return!0}function k2(e){return e.h==-1}F.X=function(e){return e=c5(this,e),k2(e)?-1:l3(e)?0:1};function Y1(e){for(var c=e.g.length,a=[],t=0;t<c;t++)a[t]=~e.g[t];return new g1(a,~e.h).add($9)}F.abs=function(){return k2(this)?Y1(this):this};F.add=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0,r=0;r<=c;r++){var n=t+(this.D(r)&65535)+(e.D(r)&65535),i=(n>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);t=i>>>16,n&=65535,i&=65535,a[r]=i<<16|n}return new g1(a,a[a.length-1]&-2147483648?-1:0)};function c5(e,c){return e.add(Y1(c))}F.R=function(e){if(l3(this)||l3(e))return Q4;if(k2(this))return k2(e)?Y1(this).R(Y1(e)):Y1(Y1(this).R(e));if(k2(e))return Y1(this.R(Y1(e)));if(0>this.X(Br)&&0>e.X(Br))return X2(this.ea()*e.ea());for(var c=this.g.length+e.g.length,a=[],t=0;t<2*c;t++)a[t]=0;for(t=0;t<this.g.length;t++)for(var r=0;r<e.g.length;r++){var n=this.D(t)>>>16,i=this.D(t)&65535,o=e.D(r)>>>16,l=e.D(r)&65535;a[2*t+2*r]+=i*l,m8(a,2*t+2*r),a[2*t+2*r+1]+=n*l,m8(a,2*t+2*r+1),a[2*t+2*r+1]+=i*o,m8(a,2*t+2*r+1),a[2*t+2*r+2]+=n*o,m8(a,2*t+2*r+2)}for(t=0;t<c;t++)a[t]=a[2*t+1]<<16|a[2*t];for(t=c;t<2*c;t++)a[t]=0;return new g1(a,0)};function m8(e,c){for(;(e[c]&65535)!=e[c];)e[c+1]+=e[c]>>>16,e[c]&=65535,c++}function N6(e,c){this.g=e,this.h=c}function e5(e,c){if(l3(c))throw Error("division by zero");if(l3(e))return new N6(Q4,Q4);if(k2(e))return c=e5(Y1(e),c),new N6(Y1(c.g),Y1(c.h));if(k2(c))return c=e5(e,Y1(c)),new N6(Y1(c.g),c.h);if(30<e.g.length){if(k2(e)||k2(c))throw Error("slowDivide_ only works with positive integers.");for(var a=$9,t=c;0>=t.X(e);)a=Or(a),t=Or(t);var r=D4(a,1),n=D4(t,1);for(t=D4(t,2),a=D4(a,2);!l3(t);){var i=n.add(t);0>=i.X(e)&&(r=r.add(a),n=i),t=D4(t,1),a=D4(a,1)}return c=c5(e,r.R(c)),new N6(r,c)}for(r=Q4;0<=e.X(c);){for(a=Math.max(1,Math.floor(e.ea()/c.ea())),t=Math.ceil(Math.log(a)/Math.LN2),t=48>=t?1:Math.pow(2,t-48),n=X2(a),i=n.R(c);k2(i)||0<i.X(e);)a-=t,n=X2(a),i=n.R(c);l3(n)&&(n=$9),r=r.add(n),e=c5(e,i)}return new N6(r,e)}F.gb=function(e){return e5(this,e).h};F.and=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)&e.D(t);return new g1(a,this.h&e.h)};F.or=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)|e.D(t);return new g1(a,this.h|e.h)};F.xor=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)^e.D(t);return new g1(a,this.h^e.h)};function Or(e){for(var c=e.g.length+1,a=[],t=0;t<c;t++)a[t]=e.D(t)<<1|e.D(t-1)>>>31;return new g1(a,e.h)}function D4(e,c){var a=c>>5;c%=32;for(var t=e.g.length-a,r=[],n=0;n<t;n++)r[n]=0<c?e.D(n+a)>>>c|e.D(n+a+1)<<32-c:e.D(n+a);return new g1(r,e.h)}J8.prototype.createWebChannel=J8.prototype.g;b2.prototype.send=b2.prototype.u;b2.prototype.open=b2.prototype.m;b2.prototype.close=b2.prototype.close;E5.NO_ERROR=0;E5.TIMEOUT=8;E5.HTTP_ERROR=6;ws.COMPLETE="complete";bs.EventType=A0;A0.OPEN="a";A0.CLOSE="b";A0.ERROR="c";A0.MESSAGE="d";j1.prototype.listen=j1.prototype.O;T1.prototype.listenOnce=T1.prototype.P;T1.prototype.getLastError=T1.prototype.Sa;T1.prototype.getLastErrorCode=T1.prototype.Ia;T1.prototype.getStatus=T1.prototype.da;T1.prototype.getResponseJson=T1.prototype.Wa;T1.prototype.getResponseText=T1.prototype.ja;T1.prototype.send=T1.prototype.ha;T1.prototype.setWithCredentials=T1.prototype.Oa;q2.prototype.digest=q2.prototype.l;q2.prototype.reset=q2.prototype.reset;q2.prototype.update=q2.prototype.j;g1.prototype.add=g1.prototype.add;g1.prototype.multiply=g1.prototype.R;g1.prototype.modulo=g1.prototype.gb;g1.prototype.compare=g1.prototype.X;g1.prototype.toNumber=g1.prototype.ea;g1.prototype.toString=g1.prototype.toString;g1.prototype.getBits=g1.prototype.D;g1.fromNumber=X2;g1.fromString=so;var ex=function(){return new J8},ax=function(){return T5()},t9=E5,tx=ws,rx=y4,qr={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},d8=bs,nx=T1,ix=q2,Y4=g1;const Ur="@firebase/firestore";/**
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
 */class i2{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}i2.UNAUTHENTICATED=new i2(null),i2.GOOGLE_CREDENTIALS=new i2("google-credentials-uid"),i2.FIRST_PARTY=new i2("first-party-uid"),i2.MOCK_USER=new i2("mock-user");/**
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
 */let v6="10.9.0";/**
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
 */const H4=new Ji("@firebase/firestore");function _6(){return H4.logLevel}function D(e,...c){if(H4.logLevel<=d1.DEBUG){const a=c.map(ie);H4.debug(`Firestore (${v6}): ${e}`,...a)}}function a3(e,...c){if(H4.logLevel<=d1.ERROR){const a=c.map(ie);H4.error(`Firestore (${v6}): ${e}`,...a)}}function t6(e,...c){if(H4.logLevel<=d1.WARN){const a=c.map(ie);H4.warn(`Firestore (${v6}): ${e}`,...a)}}function ie(e){if(typeof e=="string")return e;try{/**
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
*/return function(a){return JSON.stringify(a)}(e)}catch{return e}}/**
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
 */function c1(e="Unexpected state"){const c=`FIRESTORE (${v6}) INTERNAL ASSERTION FAILED: `+e;throw a3(c),new Error(c)}function M1(e,c){e||c1()}function t1(e,c){return e}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends h6{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class u3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
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
 */class oo{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(i2.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class lx{constructor(c){this.t=c,this.currentUser=i2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let t=this.i;const r=l=>this.i!==t?(t=this.i,a(l)):Promise.resolve();let n=new u3;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new u3,c.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const l=n;c.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},o=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(l=>o(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?o(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new u3)}},0),i()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(t=>this.i!==c?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(M1(typeof t.accessToken=="string"),new oo(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return M1(c===null||typeof c=="string"),new i2(c)}}class fx{constructor(c,a,t){this.l=c,this.h=a,this.P=t,this.type="FirstParty",this.user=i2.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const c=this.T();return c&&this.I.set("Authorization",c),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ux{constructor(c,a,t){this.l=c,this.h=a,this.P=t}getToken(){return Promise.resolve(new fx(this.l,this.h,this.P))}start(c,a){c.enqueueRetryable(()=>a(i2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hx{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mx{constructor(c){this.A=c,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(c,a){const t=n=>{n.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${n.error.message}`);const i=n.token!==this.R;return this.R=n.token,D("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?a(n.token):Promise.resolve()};this.o=n=>{c.enqueueRetryable(()=>t(n))};const r=n=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=n,this.appCheck.addTokenListener(this.o)};this.A.onInit(n=>r(n)),setTimeout(()=>{if(!this.appCheck){const n=this.A.getImmediate({optional:!0});n?r(n):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(M1(typeof a.token=="string"),this.R=a.token,new hx(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dx(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}/**
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
 */class lo{static newId(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let t="";for(;t.length<20;){const r=dx(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<a&&(t+=c.charAt(r[n]%c.length))}return t}}function p1(e,c){return e<c?-1:e>c?1:0}function r6(e,c,a){return e.length===c.length&&e.every((t,r)=>a(t,c[r]))}/**
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
 */class F1{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new W(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new W(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new W(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new W(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return F1.fromMillis(Date.now())}static fromDate(c){return F1.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),t=Math.floor(1e6*(c-1e3*a));return new F1(a,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?p1(this.nanoseconds,c.nanoseconds):p1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class a1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new a1(c)}static min(){return new a1(new F1(0,0))}static max(){return new a1(new F1(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class h0{constructor(c,a,t){a===void 0?a=0:a>c.length&&c1(),t===void 0?t=c.length-a:t>c.length-a&&c1(),this.segments=c,this.offset=a,this.len=t}get length(){return this.len}isEqual(c){return h0.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof h0?c.forEach(t=>{a.push(t)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,t=this.limit();a<t;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const t=Math.min(c.length,a.length);for(let r=0;r<t;r++){const n=c.get(r),i=a.get(r);if(n<i)return-1;if(n>i)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class A1 extends h0{construct(c,a,t){return new A1(c,a,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...c){const a=[];for(const t of c){if(t.indexOf("//")>=0)throw new W(A.INVALID_ARGUMENT,`Invalid segment (${t}). Paths must not contain // in them.`);a.push(...t.split("/").filter(r=>r.length>0))}return new A1(a)}static emptyPath(){return new A1([])}}const vx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X1 extends h0{construct(c,a,t){return new X1(c,a,t)}static isValidIdentifier(c){return vx.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X1.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X1(["__name__"])}static fromServerFormat(c){const a=[];let t="",r=0;const n=()=>{if(t.length===0)throw new W(A.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(t),t=""};let i=!1;for(;r<c.length;){const o=c[r];if(o==="\\"){if(r+1===c.length)throw new W(A.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const l=c[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);t+=l,r+=2}else o==="`"?(i=!i,r++):o!=="."||i?(t+=o,r++):(n(),r++)}if(n(),i)throw new W(A.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new X1(a)}static emptyPath(){return new X1([])}}/**
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
 */class Z{constructor(c){this.path=c}static fromPath(c){return new Z(A1.fromString(c))}static fromName(c){return new Z(A1.fromString(c).popFirst(5))}static empty(){return new Z(A1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&A1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return A1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new Z(new A1(c.slice()))}}function px(e,c){const a=e.toTimestamp().seconds,t=e.toTimestamp().nanoseconds+1,r=a1.fromTimestamp(t===1e9?new F1(a+1,0):new F1(a,t));return new B3(r,Z.empty(),c)}function zx(e){return new B3(e.readTime,e.key,-1)}class B3{constructor(c,a,t){this.readTime=c,this.documentKey=a,this.largestBatchId=t}static min(){return new B3(a1.min(),Z.empty(),-1)}static max(){return new B3(a1.max(),Z.empty(),-1)}}function gx(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=Z.comparator(e.documentKey,c.documentKey),a!==0?a:p1(e.largestBatchId,c.largestBatchId))}/**
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
 */const Hx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
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
 */async function E0(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==Hx)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&c1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new y((t,r)=>{this.nextCallback=n=>{this.wrapSuccess(c,n).next(t,r)},this.catchCallback=n=>{this.wrapFailure(a,n).next(t,r)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof y?a:y.resolve(a)}catch(a){return y.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):y.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):y.reject(a)}static resolve(c){return new y((a,t)=>{a(c)})}static reject(c){return new y((a,t)=>{t(c)})}static waitFor(c){return new y((a,t)=>{let r=0,n=0,i=!1;c.forEach(o=>{++r,o.next(()=>{++n,i&&n===r&&a()},l=>t(l))}),i=!0,n===r&&a()})}static or(c){let a=y.resolve(!1);for(const t of c)a=a.next(r=>r?y.resolve(r):t());return a}static forEach(c,a){const t=[];return c.forEach((r,n)=>{t.push(a.call(this,r,n))}),this.waitFor(t)}static mapArray(c,a){return new y((t,r)=>{const n=c.length,i=new Array(n);let o=0;for(let l=0;l<n;l++){const u=l;a(c[u]).next(d=>{i[u]=d,++o,o===n&&t(i)},d=>r(d))}})}static doWhile(c,a){return new y((t,r)=>{const n=()=>{c()===!0?a().next(()=>{n()},r):t()};n()})}}/**
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
 */class se{constructor(c,a){this.action=c,this.transaction=a,this.aborted=!1,this.V=new u3,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{a.error?this.V.reject(new U6(c,a.error)):this.V.resolve()},this.transaction.onerror=t=>{const r=oe(t.target.error);this.V.reject(new U6(c,r))}}static open(c,a,t,r){try{return new se(a,c.transaction(r,t))}catch(n){throw new U6(a,n)}}get m(){return this.V.promise}abort(c){c&&this.V.reject(c),this.aborted||(D("SimpleDb","Aborting transaction:",c?c.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const c=this.transaction;this.aborted||typeof c.commit!="function"||c.commit()}store(c){const a=this.transaction.objectStore(c);return new Mx(a)}}class f4{constructor(c,a,t){this.name=c,this.version=a,this.p=t,f4.S(W8())===12.2&&a3("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(c){return D("SimpleDb","Removing database:",c),i4(window.indexedDB.deleteDatabase(c)).toPromise()}static D(){if(!Yi())return!1;if(f4.C())return!0;const c=W8(),a=f4.S(c),t=0<a&&a<10,r=f4.v(c),n=0<r&&r<4.5;return!(c.indexOf("MSIE ")>0||c.indexOf("Trident/")>0||c.indexOf("Edge/")>0||t||n)}static C(){var c;return typeof process<"u"&&((c=process.__PRIVATE_env)===null||c===void 0?void 0:c.F)==="YES"}static M(c,a){return c.store(a)}static S(c){const a=c.match(/i(?:phone|pad|pod) os ([\d_]+)/i),t=a?a[1].split("_").slice(0,2).join("."):"-1";return Number(t)}static v(c){const a=c.match(/Android ([\d.]+)/i),t=a?a[1].split(".").slice(0,2).join("."):"-1";return Number(t)}async O(c){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((a,t)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=n=>{const i=n.target.result;a(i)},r.onblocked=()=>{t(new U6(c,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=n=>{const i=n.target.error;i.name==="VersionError"?t(new W(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):i.name==="InvalidStateError"?t(new W(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):t(new U6(c,i))},r.onupgradeneeded=n=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',n.oldVersion);const i=n.target.result;this.p.N(i,r.transaction,n.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=a=>this.L(a)),this.db}B(c){this.L=c,this.db&&(this.db.onversionchange=a=>c(a))}async runTransaction(c,a,t,r){const n=a==="readonly";let i=0;for(;;){++i;try{this.db=await this.O(c);const o=se.open(this.db,c,n?"readonly":"readwrite",t),l=r(o).next(u=>(o.g(),u)).catch(u=>(o.abort(u),y.reject(u))).toPromise();return l.catch(()=>{}),await o.m,l}catch(o){const l=o,u=l.name!=="FirebaseError"&&i<3;if(D("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cx{constructor(c){this.k=c,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(c){this.k=c}done(){this.q=!0}U(c){this.K=c}delete(){return i4(this.k.delete())}}class U6 extends W{constructor(c,a){super(A.UNAVAILABLE,`IndexedDB transaction '${c}' failed: ${a}`),this.name="IndexedDbTransactionError"}}function P0(e){return e.name==="IndexedDbTransactionError"}class Mx{constructor(c){this.store=c}put(c,a){let t;return a!==void 0?(D("SimpleDb","PUT",this.store.name,c,a),t=this.store.put(a,c)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",c),t=this.store.put(c)),i4(t)}add(c){return D("SimpleDb","ADD",this.store.name,c,c),i4(this.store.add(c))}get(c){return i4(this.store.get(c)).next(a=>(a===void 0&&(a=null),D("SimpleDb","GET",this.store.name,c,a),a))}delete(c){return D("SimpleDb","DELETE",this.store.name,c),i4(this.store.delete(c))}count(){return D("SimpleDb","COUNT",this.store.name),i4(this.store.count())}W(c,a){const t=this.options(c,a),r=t.index?this.store.index(t.index):this.store;if(typeof r.getAll=="function"){const n=r.getAll(t.range);return new y((i,o)=>{n.onerror=l=>{o(l.target.error)},n.onsuccess=l=>{i(l.target.result)}})}{const n=this.cursor(t),i=[];return this.G(n,(o,l)=>{i.push(l)}).next(()=>i)}}j(c,a){const t=this.store.getAll(c,a===null?void 0:a);return new y((r,n)=>{t.onerror=i=>{n(i.target.error)},t.onsuccess=i=>{r(i.target.result)}})}H(c,a){D("SimpleDb","DELETE ALL",this.store.name);const t=this.options(c,a);t.J=!1;const r=this.cursor(t);return this.G(r,(n,i,o)=>o.delete())}Y(c,a){let t;a?t=c:(t={},a=c);const r=this.cursor(t);return this.G(r,a)}Z(c){const a=this.cursor({});return new y((t,r)=>{a.onerror=n=>{const i=oe(n.target.error);r(i)},a.onsuccess=n=>{const i=n.target.result;i?c(i.primaryKey,i.value).next(o=>{o?i.continue():t()}):t()}})}G(c,a){const t=[];return new y((r,n)=>{c.onerror=i=>{n(i.target.error)},c.onsuccess=i=>{const o=i.target.result;if(!o)return void r();const l=new Cx(o),u=a(o.primaryKey,o.value,l);if(u instanceof y){const d=u.catch(v=>(l.done(),y.reject(v)));t.push(d)}l.isDone?r():l.$===null?o.continue():o.continue(l.$)}}).next(()=>y.waitFor(t))}options(c,a){let t;return c!==void 0&&(typeof c=="string"?t=c:a=c),{index:t,range:a}}cursor(c){let a="next";if(c.reverse&&(a="prev"),c.index){const t=this.store.index(c.index);return c.J?t.openKeyCursor(c.range,a):t.openCursor(c.range,a)}return this.store.openCursor(c.range,a)}}function i4(e){return new y((c,a)=>{e.onsuccess=t=>{const r=t.target.result;c(r)},e.onerror=t=>{const r=oe(t.target.error);a(r)}})}let $r=!1;function oe(e){const c=f4.S(W8());if(c>=12.2&&c<13){const a="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(a)>=0){const t=new W("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${a}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $r||($r=!0,setTimeout(()=>{throw t},0)),t}}return e}/**
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
 */class le{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=t=>this.se(t),this.oe=t=>a.writeSequenceNumber(t))}se(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.oe&&this.oe(c),c}}le._e=-1;function U5(e){return e==null}function a5(e){return e===0&&1/e==-1/0}function Lx(e){return typeof e=="number"&&Number.isInteger(e)&&!a5(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function jr(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function p6(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function fo(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
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
 */class N1{constructor(c,a){this.comparator=c,this.root=a||Q1.EMPTY}insert(c,a){return new N1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,Q1.BLACK,null,null))}remove(c){return new N1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,Q1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const t=this.comparator(c,a.key);if(t===0)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}indexOf(c){let a=0,t=this.root;for(;!t.isEmpty();){const r=this.comparator(c,t.key);if(r===0)return a+t.left.size;r<0?t=t.left:(a+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,t)=>(c(a,t),!1))}toString(){const c=[];return this.inorderTraversal((a,t)=>(c.push(`${a}:${t}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new v8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new v8(this.root,c,this.comparator,!1)}getReverseIterator(){return new v8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new v8(this.root,c,this.comparator,!0)}}class v8{constructor(c,a,t,r){this.isReverse=r,this.nodeStack=[];let n=1;for(;!c.isEmpty();)if(n=a?t(c.key,a):1,a&&r&&(n*=-1),n<0)c=this.isReverse?c.left:c.right;else{if(n===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class Q1{constructor(c,a,t,r,n){this.key=c,this.value=a,this.color=t??Q1.RED,this.left=r??Q1.EMPTY,this.right=n??Q1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,t,r,n){return new Q1(c??this.key,a??this.value,t??this.color,r??this.left,n??this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,t){let r=this;const n=t(c,r.key);return r=n<0?r.copy(null,null,null,r.left.insert(c,a,t),null):n===0?r.copy(null,a,null,null,null):r.copy(null,null,null,null,r.right.insert(c,a,t)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Q1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let t,r=this;if(a(c,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(c,a),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),a(c,r.key)===0){if(r.right.isEmpty())return Q1.EMPTY;t=r.right.min(),r=r.copy(t.key,t.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(c,a))}return r.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,Q1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,Q1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c1();const c=this.left.check();if(c!==this.right.check())throw c1();return c+(this.isRed()?0:1)}}Q1.EMPTY=null,Q1.RED=!0,Q1.BLACK=!1;Q1.EMPTY=new class{constructor(){this.size=0}get key(){throw c1()}get value(){throw c1()}get color(){throw c1()}get left(){throw c1()}get right(){throw c1()}copy(c,a,t,r,n){return this}insert(c,a,t){return new Q1(c,a)}remove(c,a){return this}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class c2{constructor(c){this.comparator=c,this.data=new N1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,t)=>(c(a),!1))}forEachInRange(c,a){const t=this.data.getIteratorFrom(c[0]);for(;t.hasNext();){const r=t.getNext();if(this.comparator(r.key,c[1])>=0)return;a(r.key)}}forEachWhile(c,a){let t;for(t=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();t.hasNext();)if(!c(t.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new Gr(this.data.getIterator())}getIteratorFrom(c){return new Gr(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(t=>{a=a.add(t)}),a}isEqual(c){if(!(c instanceof c2)||this.size!==c.size)return!1;const a=this.data.getIterator(),t=c.data.getIterator();for(;a.hasNext();){const r=a.getNext().key,n=t.getNext().key;if(this.comparator(r,n)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new c2(this.comparator);return a.data=c,a}}class Gr{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class F2{constructor(c){this.fields=c,c.sort(X1.comparator)}static empty(){return new F2([])}unionWith(c){let a=new c2(X1.comparator);for(const t of this.fields)a=a.add(t);for(const t of c)a=a.add(t);return new F2(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return r6(this.fields,c.fields,(a,t)=>a.isEqual(t))}}/**
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
 */class uo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class u2{constructor(c){this.binaryString=c}static fromBase64String(c){const a=function(r){try{return atob(r)}catch(n){throw typeof DOMException<"u"&&n instanceof DOMException?new uo("Invalid base64 string: "+n):n}}(c);return new u2(a)}static fromUint8Array(c){const a=function(r){let n="";for(let i=0;i<r.length;++i)n+=String.fromCharCode(r[i]);return n}(c);return new u2(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(a){return btoa(a)}(this.binaryString)}toUint8Array(){return function(a){const t=new Uint8Array(a.length);for(let r=0;r<a.length;r++)t[r]=a.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return p1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}u2.EMPTY_BYTE_STRING=new u2("");const wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function O3(e){if(M1(!!e),typeof e=="string"){let c=0;const a=wx.exec(e);if(M1(!!a),a[1]){let r=a[1];r=(r+"000000000").substr(0,9),c=Number(r)}const t=new Date(e);return{seconds:Math.floor(t.getTime()/1e3),nanos:c}}return{seconds:R1(e.seconds),nanos:R1(e.nanos)}}function R1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function V4(e){return typeof e=="string"?u2.fromBase64String(e):u2.fromUint8Array(e)}/**
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
 */function fe(e){var c,a;return((a=(((c=e?.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function ue(e){const c=e.mapValue.fields.__previous_value__;return fe(c)?ue(c):c}function m0(e){const c=O3(e.mapValue.fields.__local_write_time__.timestampValue);return new F1(c.seconds,c.nanos)}/**
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
 */class bx{constructor(c,a,t,r,n,i,o,l,u){this.databaseId=c,this.appId=a,this.persistenceKey=t,this.host=r,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=l,this.useFetchStreams=u}}class d0{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new d0("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof d0&&c.projectId===this.projectId&&c.database===this.database}}/**
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
 */const p8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function C4(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fe(e)?4:yx(e)?9007199254740991:10:c1()}function t3(e,c){if(e===c)return!0;const a=C4(e);if(a!==C4(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return m0(e).isEqual(m0(c));case 3:return function(r,n){if(typeof r.timestampValue=="string"&&typeof n.timestampValue=="string"&&r.timestampValue.length===n.timestampValue.length)return r.timestampValue===n.timestampValue;const i=O3(r.timestampValue),o=O3(n.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(r,n){return V4(r.bytesValue).isEqual(V4(n.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(r,n){return R1(r.geoPointValue.latitude)===R1(n.geoPointValue.latitude)&&R1(r.geoPointValue.longitude)===R1(n.geoPointValue.longitude)}(e,c);case 2:return function(r,n){if("integerValue"in r&&"integerValue"in n)return R1(r.integerValue)===R1(n.integerValue);if("doubleValue"in r&&"doubleValue"in n){const i=R1(r.doubleValue),o=R1(n.doubleValue);return i===o?a5(i)===a5(o):isNaN(i)&&isNaN(o)}return!1}(e,c);case 9:return r6(e.arrayValue.values||[],c.arrayValue.values||[],t3);case 10:return function(r,n){const i=r.mapValue.fields||{},o=n.mapValue.fields||{};if(jr(i)!==jr(o))return!1;for(const l in i)if(i.hasOwnProperty(l)&&(o[l]===void 0||!t3(i[l],o[l])))return!1;return!0}(e,c);default:return c1()}}function v0(e,c){return(e.values||[]).find(a=>t3(a,c))!==void 0}function n6(e,c){if(e===c)return 0;const a=C4(e),t=C4(c);if(a!==t)return p1(a,t);switch(a){case 0:case 9007199254740991:return 0;case 1:return p1(e.booleanValue,c.booleanValue);case 2:return function(n,i){const o=R1(n.integerValue||n.doubleValue),l=R1(i.integerValue||i.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(e,c);case 3:return Wr(e.timestampValue,c.timestampValue);case 4:return Wr(m0(e),m0(c));case 5:return p1(e.stringValue,c.stringValue);case 6:return function(n,i){const o=V4(n),l=V4(i);return o.compareTo(l)}(e.bytesValue,c.bytesValue);case 7:return function(n,i){const o=n.split("/"),l=i.split("/");for(let u=0;u<o.length&&u<l.length;u++){const d=p1(o[u],l[u]);if(d!==0)return d}return p1(o.length,l.length)}(e.referenceValue,c.referenceValue);case 8:return function(n,i){const o=p1(R1(n.latitude),R1(i.latitude));return o!==0?o:p1(R1(n.longitude),R1(i.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(n,i){const o=n.values||[],l=i.values||[];for(let u=0;u<o.length&&u<l.length;++u){const d=n6(o[u],l[u]);if(d)return d}return p1(o.length,l.length)}(e.arrayValue,c.arrayValue);case 10:return function(n,i){if(n===p8.mapValue&&i===p8.mapValue)return 0;if(n===p8.mapValue)return 1;if(i===p8.mapValue)return-1;const o=n.fields||{},l=Object.keys(o),u=i.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let v=0;v<l.length&&v<d.length;++v){const g=p1(l[v],d[v]);if(g!==0)return g;const V=n6(o[l[v]],u[d[v]]);if(V!==0)return V}return p1(l.length,d.length)}(e.mapValue,c.mapValue);default:throw c1()}}function Wr(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return p1(e,c);const a=O3(e),t=O3(c),r=p1(a.seconds,t.seconds);return r!==0?r:p1(a.nanos,t.nanos)}function i6(e){return j9(e)}function j9(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(a){const t=O3(a);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(a){return V4(a).toBase64()}(e.bytesValue):"referenceValue"in e?function(a){return Z.fromName(a).toString()}(e.referenceValue):"geoPointValue"in e?function(a){return`geo(${a.latitude},${a.longitude})`}(e.geoPointValue):"arrayValue"in e?function(a){let t="[",r=!0;for(const n of a.values||[])r?r=!1:t+=",",t+=j9(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(a){const t=Object.keys(a.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${j9(a.fields[i])}`;return r+"}"}(e.mapValue):c1()}function G9(e){return!!e&&"integerValue"in e}function he(e){return!!e&&"arrayValue"in e}function Kr(e){return!!e&&"nullValue"in e}function Zr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function E8(e){return!!e&&"mapValue"in e}function $6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return p6(e.mapValue.fields,(a,t)=>c.mapValue.fields[a]=$6(t)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=$6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function yx(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class T2{constructor(c){this.value=c}static empty(){return new T2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let t=0;t<c.length-1;++t)if(a=(a.mapValue.fields||{})[c.get(t)],!E8(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=$6(a)}setAll(c){let a=X1.emptyPath(),t={},r=[];c.forEach((i,o)=>{if(!a.isImmediateParentOf(o)){const l=this.getFieldsMap(a);this.applyChanges(l,t,r),t={},r=[],a=o.popLast()}i?t[o.lastSegment()]=$6(i):r.push(o.lastSegment())});const n=this.getFieldsMap(a);this.applyChanges(n,t,r)}delete(c){const a=this.field(c.popLast());E8(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return t3(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let t=0;t<c.length;++t){let r=a.mapValue.fields[c.get(t)];E8(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},a.mapValue.fields[c.get(t)]=r),a=r}return a.mapValue.fields}applyChanges(c,a,t){p6(a,(r,n)=>c[r]=n);for(const r of t)delete c[r]}clone(){return new T2($6(this.value))}}function ho(e){const c=[];return p6(e.fields,(a,t)=>{const r=new X1([a]);if(E8(t)){const n=ho(t.mapValue).fields;if(n.length===0)c.push(r);else for(const i of n)c.push(r.child(i))}else c.push(r)}),new F2(c)}/**
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
 */class s2{constructor(c,a,t,r,n,i,o){this.key=c,this.documentType=a,this.version=t,this.readTime=r,this.createTime=n,this.data=i,this.documentState=o}static newInvalidDocument(c){return new s2(c,0,a1.min(),a1.min(),a1.min(),T2.empty(),0)}static newFoundDocument(c,a,t,r){return new s2(c,1,a,a1.min(),t,r,0)}static newNoDocument(c,a){return new s2(c,2,a,a1.min(),a1.min(),T2.empty(),0)}static newUnknownDocument(c,a){return new s2(c,3,a,a1.min(),a1.min(),T2.empty(),2)}convertToFoundDocument(c,a){return!this.createTime.isEqual(a1.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=c),this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=T2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=T2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=a1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof s2&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new s2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class t5{constructor(c,a){this.position=c,this.inclusive=a}}function Qr(e,c,a){let t=0;for(let r=0;r<e.position.length;r++){const n=c[r],i=e.position[r];if(n.field.isKeyField()?t=Z.comparator(Z.fromName(i.referenceValue),a.key):t=n6(i,a.data.field(n.field)),n.dir==="desc"&&(t*=-1),t!==0)break}return t}function Yr(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!t3(e.position[a],c.position[a]))return!1;return!0}/**
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
 */class r5{constructor(c,a="asc"){this.field=c,this.dir=a}}function xx(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}/**
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
 */class mo{}class D1 extends mo{constructor(c,a,t){super(),this.field=c,this.op=a,this.value=t}static create(c,a,t){return c.isKeyField()?a==="in"||a==="not-in"?this.createKeyFieldInFilter(c,a,t):new Ax(c,a,t):a==="array-contains"?new kx(c,t):a==="in"?new Tx(c,t):a==="not-in"?new Ex(c,t):a==="array-contains-any"?new Px(c,t):new D1(c,a,t)}static createKeyFieldInFilter(c,a,t){return a==="in"?new Nx(c,t):new _x(c,t)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.matchesComparison(n6(a,this.value)):a!==null&&C4(this.value)===C4(a)&&this.matchesComparison(n6(a,this.value))}matchesComparison(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return c1()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class r3 extends mo{constructor(c,a){super(),this.filters=c,this.op=a,this.ue=null}static create(c,a){return new r3(c,a)}matches(c){return vo(this)?this.filters.find(a=>!a.matches(c))===void 0:this.filters.find(a=>a.matches(c))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((c,a)=>c.concat(a.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vo(e){return e.op==="and"}function po(e){return Sx(e)&&vo(e)}function Sx(e){for(const c of e.filters)if(c instanceof r3)return!1;return!0}function W9(e){if(e instanceof D1)return e.field.canonicalString()+e.op.toString()+i6(e.value);if(po(e))return e.filters.map(c=>W9(c)).join(",");{const c=e.filters.map(a=>W9(a)).join(",");return`${e.op}(${c})`}}function zo(e,c){return e instanceof D1?function(t,r){return r instanceof D1&&t.op===r.op&&t.field.isEqual(r.field)&&t3(t.value,r.value)}(e,c):e instanceof r3?function(t,r){return r instanceof r3&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((n,i,o)=>n&&zo(i,r.filters[o]),!0):!1}(e,c):void c1()}function go(e){return e instanceof D1?function(a){return`${a.field.canonicalString()} ${a.op} ${i6(a.value)}`}(e):e instanceof r3?function(a){return a.op.toString()+" {"+a.getFilters().map(go).join(" ,")+"}"}(e):"Filter"}class Ax extends D1{constructor(c,a,t){super(c,a,t),this.key=Z.fromName(t.referenceValue)}matches(c){const a=Z.comparator(c.key,this.key);return this.matchesComparison(a)}}class Nx extends D1{constructor(c,a){super(c,"in",a),this.keys=Ho("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class _x extends D1{constructor(c,a){super(c,"not-in",a),this.keys=Ho("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function Ho(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(t=>Z.fromName(t.referenceValue))}class kx extends D1{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return he(a)&&v0(a.arrayValue,this.value)}}class Tx extends D1{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&v0(this.value.arrayValue,a)}}class Ex extends D1{constructor(c,a){super(c,"not-in",a)}matches(c){if(v0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!v0(this.value.arrayValue,a)}}class Px extends D1{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!he(a)||!a.arrayValue.values)&&a.arrayValue.values.some(t=>v0(this.value.arrayValue,t))}}/**
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
 */class Ix{constructor(c,a=null,t=[],r=[],n=null,i=null,o=null){this.path=c,this.collectionGroup=a,this.orderBy=t,this.filters=r,this.limit=n,this.startAt=i,this.endAt=o,this.ce=null}}function Xr(e,c=null,a=[],t=[],r=null,n=null,i=null){return new Ix(e,c,a,t,r,n,i)}function me(e){const c=t1(e);if(c.ce===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(t=>W9(t)).join(","),a+="|ob:",a+=c.orderBy.map(t=>function(n){return n.field.canonicalString()+n.dir}(t)).join(","),U5(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(t=>i6(t)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(t=>i6(t)).join(",")),c.ce=a}return c.ce}function de(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(!xx(e.orderBy[a],c.orderBy[a]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!zo(e.filters[a],c.filters[a]))return!1;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!Yr(e.startAt,c.startAt)&&Yr(e.endAt,c.endAt)}function K9(e){return Z.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class $5{constructor(c,a=null,t=[],r=[],n=null,i="F",o=null,l=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=t,this.filters=r,this.limit=n,this.limitType=i,this.startAt=o,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Rx(e,c,a,t,r,n,i,o){return new $5(e,c,a,t,r,n,i,o)}function Vo(e){return new $5(e)}function Jr(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dx(e){return e.collectionGroup!==null}function j6(e){const c=t1(e);if(c.le===null){c.le=[];const a=new Set;for(const n of c.explicitOrderBy)c.le.push(n),a.add(n.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";(function(i){let o=new c2(X1.comparator);return i.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(o=o.add(u.field))})}),o})(c).forEach(n=>{a.has(n.canonicalString())||n.isKeyField()||c.le.push(new r5(n,t))}),a.has(X1.keyField().canonicalString())||c.le.push(new r5(X1.keyField(),t))}return c.le}function c3(e){const c=t1(e);return c.he||(c.he=Fx(c,j6(e))),c.he}function Fx(e,c){if(e.limitType==="F")return Xr(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map(r=>{const n=r.dir==="desc"?"asc":"desc";return new r5(r.field,n)});const a=e.endAt?new t5(e.endAt.position,e.endAt.inclusive):null,t=e.startAt?new t5(e.startAt.position,e.startAt.inclusive):null;return Xr(e.path,e.collectionGroup,c,e.filters,e.limit,a,t)}}function Z9(e,c,a){return new $5(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function j5(e,c){return de(c3(e),c3(c))&&e.limitType===c.limitType}function Co(e){return`${me(c3(e))}|lt:${e.limitType}`}function F4(e){return`Query(target=${function(a){let t=a.path.canonicalString();return a.collectionGroup!==null&&(t+=" collectionGroup="+a.collectionGroup),a.filters.length>0&&(t+=`, filters: [${a.filters.map(r=>go(r)).join(", ")}]`),U5(a.limit)||(t+=", limit: "+a.limit),a.orderBy.length>0&&(t+=`, orderBy: [${a.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),a.startAt&&(t+=", startAt: ",t+=a.startAt.inclusive?"b:":"a:",t+=a.startAt.position.map(r=>i6(r)).join(",")),a.endAt&&(t+=", endAt: ",t+=a.endAt.inclusive?"a:":"b:",t+=a.endAt.position.map(r=>i6(r)).join(",")),`Target(${t})`}(c3(e))}; limitType=${e.limitType})`}function G5(e,c){return c.isFoundDocument()&&function(t,r){const n=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Z.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(e,c)&&function(t,r){for(const n of j6(t))if(!n.field.isKeyField()&&r.data.field(n.field)===null)return!1;return!0}(e,c)&&function(t,r){for(const n of t.filters)if(!n.matches(r))return!1;return!0}(e,c)&&function(t,r){return!(t.startAt&&!function(i,o,l){const u=Qr(i,o,l);return i.inclusive?u<=0:u<0}(t.startAt,j6(t),r)||t.endAt&&!function(i,o,l){const u=Qr(i,o,l);return i.inclusive?u>=0:u>0}(t.endAt,j6(t),r))}(e,c)}function Bx(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Mo(e){return(c,a)=>{let t=!1;for(const r of j6(e)){const n=Ox(r,c,a);if(n!==0)return n;t=t||r.field.isKeyField()}return 0}}function Ox(e,c,a){const t=e.field.isKeyField()?Z.comparator(c.key,a.key):function(n,i,o){const l=i.data.field(n),u=o.data.field(n);return l!==null&&u!==null?n6(l,u):c1()}(e.field,c,a);switch(e.dir){case"asc":return t;case"desc":return-1*t;default:return c1()}}/**
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
 */class z6{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),t=this.inner[a];if(t!==void 0){for(const[r,n]of t)if(this.equalsFn(r,c))return n}}has(c){return this.get(c)!==void 0}set(c,a){const t=this.mapKeyFn(c),r=this.inner[t];if(r===void 0)return this.inner[t]=[[c,a]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],c))return void(r[n]=[c,a]);r.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),t=this.inner[a];if(t===void 0)return!1;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return t.length===1?delete this.inner[a]:t.splice(r,1),this.innerSize--,!0;return!1}forEach(c){p6(this.inner,(a,t)=>{for(const[r,n]of t)c(r,n)})}isEmpty(){return fo(this.inner)}size(){return this.innerSize}}/**
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
 */const qx=new N1(Z.comparator);function d3(){return qx}const Lo=new N1(Z.comparator);function P6(...e){let c=Lo;for(const a of e)c=c.insert(a.key,a);return c}function wo(e){let c=Lo;return e.forEach((a,t)=>c=c.insert(a,t.overlayedDocument)),c}function u4(){return G6()}function bo(){return G6()}function G6(){return new z6(e=>e.toString(),(e,c)=>e.isEqual(c))}const Ux=new N1(Z.comparator),$x=new c2(Z.comparator);function f1(...e){let c=$x;for(const a of e)c=c.add(a);return c}const jx=new c2(p1);function Gx(){return jx}/**
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
 */function yo(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:a5(c)?"-0":c}}function xo(e){return{integerValue:""+e}}function Wx(e,c){return Lx(c)?xo(c):yo(e,c)}/**
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
 */class W5{constructor(){this._=void 0}}function Kx(e,c,a){return e instanceof n5?function(r,n){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return n&&fe(n)&&(n=ue(n)),n&&(i.fields.__previous_value__=n),{mapValue:i}}(a,c):e instanceof p0?Ao(e,c):e instanceof z0?No(e,c):function(r,n){const i=So(r,n),o=cn(i)+cn(r.Ie);return G9(i)&&G9(r.Ie)?xo(o):yo(r.serializer,o)}(e,c)}function Zx(e,c,a){return e instanceof p0?Ao(e,c):e instanceof z0?No(e,c):a}function So(e,c){return e instanceof i5?function(t){return G9(t)||function(n){return!!n&&"doubleValue"in n}(t)}(c)?c:{integerValue:0}:null}class n5 extends W5{}class p0 extends W5{constructor(c){super(),this.elements=c}}function Ao(e,c){const a=_o(c);for(const t of e.elements)a.some(r=>t3(r,t))||a.push(t);return{arrayValue:{values:a}}}class z0 extends W5{constructor(c){super(),this.elements=c}}function No(e,c){let a=_o(c);for(const t of e.elements)a=a.filter(r=>!t3(r,t));return{arrayValue:{values:a}}}class i5 extends W5{constructor(c,a){super(),this.serializer=c,this.Ie=a}}function cn(e){return R1(e.integerValue||e.doubleValue)}function _o(e){return he(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Qx(e,c){return e.field.isEqual(c.field)&&function(t,r){return t instanceof p0&&r instanceof p0||t instanceof z0&&r instanceof z0?r6(t.elements,r.elements,t3):t instanceof i5&&r instanceof i5?t3(t.Ie,r.Ie):t instanceof n5&&r instanceof n5}(e.transform,c.transform)}class Yx{constructor(c,a){this.version=c,this.transformResults=a}}class h3{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new h3}static exists(c){return new h3(void 0,c)}static updateTime(c){return new h3(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function P8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class K5{}function ko(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new Eo(e.key,h3.none()):new I0(e.key,e.data,h3.none());{const a=e.data,t=T2.empty();let r=new c2(X1.comparator);for(let n of c.fields)if(!r.has(n)){let i=a.field(n);i===null&&n.length>1&&(n=n.popLast(),i=a.field(n)),i===null?t.delete(n):t.set(n,i),r=r.add(n)}return new x4(e.key,t,new F2(r.toArray()),h3.none())}}function Xx(e,c,a){e instanceof I0?function(r,n,i){const o=r.value.clone(),l=an(r.fieldTransforms,n,i.transformResults);o.setAll(l),n.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,c,a):e instanceof x4?function(r,n,i){if(!P8(r.precondition,n))return void n.convertToUnknownDocument(i.version);const o=an(r.fieldTransforms,n,i.transformResults),l=n.data;l.setAll(To(r)),l.setAll(o),n.convertToFoundDocument(i.version,l).setHasCommittedMutations()}(e,c,a):function(r,n,i){n.convertToNoDocument(i.version).setHasCommittedMutations()}(0,c,a)}function W6(e,c,a,t){return e instanceof I0?function(n,i,o,l){if(!P8(n.precondition,i))return o;const u=n.value.clone(),d=tn(n.fieldTransforms,l,i);return u.setAll(d),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,c,a,t):e instanceof x4?function(n,i,o,l){if(!P8(n.precondition,i))return o;const u=tn(n.fieldTransforms,l,i),d=i.data;return d.setAll(To(n)),d.setAll(u),i.convertToFoundDocument(i.version,d).setHasLocalMutations(),o===null?null:o.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(v=>v.field))}(e,c,a,t):function(n,i,o){return P8(n.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,c,a)}function Jx(e,c){let a=null;for(const t of e.fieldTransforms){const r=c.data.field(t.field),n=So(t.transform,r||null);n!=null&&(a===null&&(a=T2.empty()),a.set(t.field,n))}return a||null}function en(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&r6(t,r,(n,i)=>Qx(n,i))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class I0 extends K5{constructor(c,a,t,r=[]){super(),this.key=c,this.value=a,this.precondition=t,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class x4 extends K5{constructor(c,a,t,r,n=[]){super(),this.key=c,this.data=a,this.fieldMask=t,this.precondition=r,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function To(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const t=e.data.field(a);c.set(a,t)}}),c}function an(e,c,a){const t=new Map;M1(e.length===a.length);for(let r=0;r<a.length;r++){const n=e[r],i=n.transform,o=c.data.field(n.field);t.set(n.field,Zx(i,o,a[r]))}return t}function tn(e,c,a){const t=new Map;for(const r of e){const n=r.transform,i=a.data.field(r.field);t.set(r.field,Kx(n,i,c))}return t}class Eo extends K5{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cS extends K5{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eS{constructor(c,a,t,r){this.batchId=c,this.localWriteTime=a,this.baseMutations=t,this.mutations=r}applyToRemoteDocument(c,a){const t=a.mutationResults;for(let r=0;r<this.mutations.length;r++){const n=this.mutations[r];n.key.isEqual(c.key)&&Xx(n,c,t[r])}}applyToLocalView(c,a){for(const t of this.baseMutations)t.key.isEqual(c.key)&&(a=W6(t,c,a,this.localWriteTime));for(const t of this.mutations)t.key.isEqual(c.key)&&(a=W6(t,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const t=bo();return this.mutations.forEach(r=>{const n=c.get(r.key),i=n.overlayedDocument;let o=this.applyToLocalView(i,n.mutatedFields);o=a.has(r.key)?null:o;const l=ko(i,o);l!==null&&t.set(r.key,l),i.isValidDocument()||i.convertToNoDocument(a1.min())}),t}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),f1())}isEqual(c){return this.batchId===c.batchId&&r6(this.mutations,c.mutations,(a,t)=>en(a,t))&&r6(this.baseMutations,c.baseMutations,(a,t)=>en(a,t))}}class ve{constructor(c,a,t,r){this.batch=c,this.commitVersion=a,this.mutationResults=t,this.docVersions=r}static from(c,a,t){M1(c.mutations.length===t.length);let r=function(){return Ux}();const n=c.mutations;for(let i=0;i<n.length;i++)r=r.insert(n[i].key,t[i].version);return new ve(c,a,t,r)}}/**
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
 */class aS{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
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
 */class tS{constructor(c,a){this.count=c,this.unchangedNames=a}}/**
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
 */var I1,u1;function rS(e){switch(e){default:return c1();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Po(e){if(e===void 0)return a3("GRPC error has no .code"),A.UNKNOWN;switch(e){case I1.OK:return A.OK;case I1.CANCELLED:return A.CANCELLED;case I1.UNKNOWN:return A.UNKNOWN;case I1.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case I1.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case I1.INTERNAL:return A.INTERNAL;case I1.UNAVAILABLE:return A.UNAVAILABLE;case I1.UNAUTHENTICATED:return A.UNAUTHENTICATED;case I1.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case I1.NOT_FOUND:return A.NOT_FOUND;case I1.ALREADY_EXISTS:return A.ALREADY_EXISTS;case I1.PERMISSION_DENIED:return A.PERMISSION_DENIED;case I1.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case I1.ABORTED:return A.ABORTED;case I1.OUT_OF_RANGE:return A.OUT_OF_RANGE;case I1.UNIMPLEMENTED:return A.UNIMPLEMENTED;case I1.DATA_LOSS:return A.DATA_LOSS;default:return c1()}}(u1=I1||(I1={}))[u1.OK=0]="OK",u1[u1.CANCELLED=1]="CANCELLED",u1[u1.UNKNOWN=2]="UNKNOWN",u1[u1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u1[u1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u1[u1.NOT_FOUND=5]="NOT_FOUND",u1[u1.ALREADY_EXISTS=6]="ALREADY_EXISTS",u1[u1.PERMISSION_DENIED=7]="PERMISSION_DENIED",u1[u1.UNAUTHENTICATED=16]="UNAUTHENTICATED",u1[u1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u1[u1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u1[u1.ABORTED=10]="ABORTED",u1[u1.OUT_OF_RANGE=11]="OUT_OF_RANGE",u1[u1.UNIMPLEMENTED=12]="UNIMPLEMENTED",u1[u1.INTERNAL=13]="INTERNAL",u1[u1.UNAVAILABLE=14]="UNAVAILABLE",u1[u1.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nS(){return new TextEncoder}/**
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
 */const iS=new Y4([4294967295,4294967295],0);function rn(e){const c=nS().encode(e),a=new ix;return a.update(c),new Uint8Array(a.digest())}function nn(e){const c=new DataView(e.buffer),a=c.getUint32(0,!0),t=c.getUint32(4,!0),r=c.getUint32(8,!0),n=c.getUint32(12,!0);return[new Y4([a,t],0),new Y4([r,n],0)]}class pe{constructor(c,a,t){if(this.bitmap=c,this.padding=a,this.hashCount=t,a<0||a>=8)throw new I6(`Invalid padding: ${a}`);if(t<0)throw new I6(`Invalid hash count: ${t}`);if(c.length>0&&this.hashCount===0)throw new I6(`Invalid hash count: ${t}`);if(c.length===0&&a!==0)throw new I6(`Invalid padding when bitmap length is 0: ${a}`);this.Te=8*c.length-a,this.Ee=Y4.fromNumber(this.Te)}de(c,a,t){let r=c.add(a.multiply(Y4.fromNumber(t)));return r.compare(iS)===1&&(r=new Y4([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(c){return(this.bitmap[Math.floor(c/8)]&1<<c%8)!=0}mightContain(c){if(this.Te===0)return!1;const a=rn(c),[t,r]=nn(a);for(let n=0;n<this.hashCount;n++){const i=this.de(t,r,n);if(!this.Ae(i))return!1}return!0}static create(c,a,t){const r=c%8==0?0:8-c%8,n=new Uint8Array(Math.ceil(c/8)),i=new pe(n,r,a);return t.forEach(o=>i.insert(o)),i}insert(c){if(this.Te===0)return;const a=rn(c),[t,r]=nn(a);for(let n=0;n<this.hashCount;n++){const i=this.de(t,r,n);this.Re(i)}}Re(c){const a=Math.floor(c/8),t=c%8;this.bitmap[a]|=1<<t}}class I6 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Z5{constructor(c,a,t,r,n){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=t,this.documentUpdates=r,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(c,a,t){const r=new Map;return r.set(c,R0.createSynthesizedTargetChangeForCurrentChange(c,a,t)),new Z5(a1.min(),r,new N1(p1),d3(),f1())}}class R0{constructor(c,a,t,r,n){this.resumeToken=c,this.current=a,this.addedDocuments=t,this.modifiedDocuments=r,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(c,a,t){return new R0(t,a,f1(),f1(),f1())}}/**
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
 */class I8{constructor(c,a,t,r){this.Ve=c,this.removedTargetIds=a,this.key=t,this.me=r}}class Io{constructor(c,a){this.targetId=c,this.fe=a}}class Ro{constructor(c,a,t=u2.EMPTY_BYTE_STRING,r=null){this.state=c,this.targetIds=a,this.resumeToken=t,this.cause=r}}class sn{constructor(){this.ge=0,this.pe=ln(),this.ye=u2.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(c){c.approximateByteSize()>0&&(this.Se=!0,this.ye=c)}ve(){let c=f1(),a=f1(),t=f1();return this.pe.forEach((r,n)=>{switch(n){case 0:c=c.add(r);break;case 2:a=a.add(r);break;case 1:t=t.add(r);break;default:c1()}}),new R0(this.ye,this.we,c,a,t)}Fe(){this.Se=!1,this.pe=ln()}Me(c,a){this.Se=!0,this.pe=this.pe.insert(c,a)}xe(c){this.Se=!0,this.pe=this.pe.remove(c)}Oe(){this.ge+=1}Ne(){this.ge-=1,M1(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class sS{constructor(c){this.Be=c,this.ke=new Map,this.qe=d3(),this.Qe=on(),this.Ke=new N1(p1)}$e(c){for(const a of c.Ve)c.me&&c.me.isFoundDocument()?this.Ue(a,c.me):this.We(a,c.key,c.me);for(const a of c.removedTargetIds)this.We(a,c.key,c.me)}Ge(c){this.forEachTarget(c,a=>{const t=this.ze(a);switch(c.state){case 0:this.je(a)&&t.Ce(c.resumeToken);break;case 1:t.Ne(),t.be||t.Fe(),t.Ce(c.resumeToken);break;case 2:t.Ne(),t.be||this.removeTarget(a);break;case 3:this.je(a)&&(t.Le(),t.Ce(c.resumeToken));break;case 4:this.je(a)&&(this.He(a),t.Ce(c.resumeToken));break;default:c1()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.ke.forEach((t,r)=>{this.je(r)&&a(r)})}Je(c){const a=c.targetId,t=c.fe.count,r=this.Ye(a);if(r){const n=r.target;if(K9(n))if(t===0){const i=new Z(n.path);this.We(a,i,s2.newNoDocument(i,a1.min()))}else M1(t===1);else{const i=this.Ze(a);if(i!==t){const o=this.Xe(c),l=o?this.et(o,c,i):1;if(l!==0){this.He(a);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(a,u)}}}}}Xe(c){const a=c.fe.unchangedNames;if(!a||!a.bits)return null;const{bits:{bitmap:t="",padding:r=0},hashCount:n=0}=a;let i,o;try{i=V4(t).toUint8Array()}catch(l){if(l instanceof uo)return t6("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{o=new pe(i,r,n)}catch(l){return t6(l instanceof I6?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return o.Te===0?null:o}et(c,a,t){return a.fe.count===t-this.rt(c,a.targetId)?0:2}rt(c,a){const t=this.Be.getRemoteKeysForTarget(a);let r=0;return t.forEach(n=>{const i=this.Be.nt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;c.mightContain(o)||(this.We(a,n,null),r++)}),r}it(c){const a=new Map;this.ke.forEach((n,i)=>{const o=this.Ye(i);if(o){if(n.current&&K9(o.target)){const l=new Z(o.target.path);this.qe.get(l)!==null||this.st(i,l)||this.We(i,l,s2.newNoDocument(l,c))}n.De&&(a.set(i,n.ve()),n.Fe())}});let t=f1();this.Qe.forEach((n,i)=>{let o=!0;i.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(t=t.add(n))}),this.qe.forEach((n,i)=>i.setReadTime(c));const r=new Z5(c,a,this.Ke,this.qe,t);return this.qe=d3(),this.Qe=on(),this.Ke=new N1(p1),r}Ue(c,a){if(!this.je(c))return;const t=this.st(c,a.key)?2:0;this.ze(c).Me(a.key,t),this.qe=this.qe.insert(a.key,a),this.Qe=this.Qe.insert(a.key,this.ot(a.key).add(c))}We(c,a,t){if(!this.je(c))return;const r=this.ze(c);this.st(c,a)?r.Me(a,1):r.xe(a),this.Qe=this.Qe.insert(a,this.ot(a).delete(c)),t&&(this.qe=this.qe.insert(a,t))}removeTarget(c){this.ke.delete(c)}Ze(c){const a=this.ze(c).ve();return this.Be.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Oe(c){this.ze(c).Oe()}ze(c){let a=this.ke.get(c);return a||(a=new sn,this.ke.set(c,a)),a}ot(c){let a=this.Qe.get(c);return a||(a=new c2(p1),this.Qe=this.Qe.insert(c,a)),a}je(c){const a=this.Ye(c)!==null;return a||D("WatchChangeAggregator","Detected inactive target",c),a}Ye(c){const a=this.ke.get(c);return a&&a.be?null:this.Be._t(c)}He(c){this.ke.set(c,new sn),this.Be.getRemoteKeysForTarget(c).forEach(a=>{this.We(c,a,null)})}st(c,a){return this.Be.getRemoteKeysForTarget(c).has(a)}}function on(){return new N1(Z.comparator)}function ln(){return new N1(Z.comparator)}const oS={asc:"ASCENDING",desc:"DESCENDING"},lS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fS={and:"AND",or:"OR"};class uS{constructor(c,a){this.databaseId=c,this.useProto3Json=a}}function Q9(e,c){return e.useProto3Json||U5(c)?c:{value:c}}function s5(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Do(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function hS(e,c){return s5(e,c.toTimestamp())}function e3(e){return M1(!!e),a1.fromTimestamp(function(a){const t=O3(a);return new F1(t.seconds,t.nanos)}(e))}function ze(e,c){return Y9(e,c).canonicalString()}function Y9(e,c){const a=function(r){return new A1(["projects",r.projectId,"databases",r.database])}(e).child("documents");return c===void 0?a:a.child(c)}function Fo(e){const c=A1.fromString(e);return M1($o(c)),c}function X9(e,c){return ze(e.databaseId,c.path)}function r9(e,c){const a=Fo(c);if(a.get(1)!==e.databaseId.projectId)throw new W(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new W(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new Z(Oo(a))}function Bo(e,c){return ze(e.databaseId,c)}function mS(e){const c=Fo(e);return c.length===4?A1.emptyPath():Oo(c)}function J9(e){return new A1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oo(e){return M1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fn(e,c,a){return{name:X9(e,c),fields:a.value.mapValue.fields}}function dS(e,c){let a;if("targetChange"in c){c.targetChange;const t=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:c1()}(c.targetChange.targetChangeType||"NO_CHANGE"),r=c.targetChange.targetIds||[],n=function(u,d){return u.useProto3Json?(M1(d===void 0||typeof d=="string"),u2.fromBase64String(d||"")):(M1(d===void 0||d instanceof Uint8Array),u2.fromUint8Array(d||new Uint8Array))}(e,c.targetChange.resumeToken),i=c.targetChange.cause,o=i&&function(u){const d=u.code===void 0?A.UNKNOWN:Po(u.code);return new W(d,u.message||"")}(i);a=new Ro(t,r,n,o||null)}else if("documentChange"in c){c.documentChange;const t=c.documentChange;t.document,t.document.name,t.document.updateTime;const r=r9(e,t.document.name),n=e3(t.document.updateTime),i=t.document.createTime?e3(t.document.createTime):a1.min(),o=new T2({mapValue:{fields:t.document.fields}}),l=s2.newFoundDocument(r,n,i,o),u=t.targetIds||[],d=t.removedTargetIds||[];a=new I8(u,d,l.key,l)}else if("documentDelete"in c){c.documentDelete;const t=c.documentDelete;t.document;const r=r9(e,t.document),n=t.readTime?e3(t.readTime):a1.min(),i=s2.newNoDocument(r,n),o=t.removedTargetIds||[];a=new I8([],o,i.key,i)}else if("documentRemove"in c){c.documentRemove;const t=c.documentRemove;t.document;const r=r9(e,t.document),n=t.removedTargetIds||[];a=new I8([],n,r,null)}else{if(!("filter"in c))return c1();{c.filter;const t=c.filter;t.targetId;const{count:r=0,unchangedNames:n}=t,i=new tS(r,n),o=t.targetId;a=new Io(o,i)}}return a}function vS(e,c){let a;if(c instanceof I0)a={update:fn(e,c.key,c.value)};else if(c instanceof Eo)a={delete:X9(e,c.key)};else if(c instanceof x4)a={update:fn(e,c.key,c.data),updateMask:wS(c.fieldMask)};else{if(!(c instanceof cS))return c1();a={verify:X9(e,c.key)}}return c.fieldTransforms.length>0&&(a.updateTransforms=c.fieldTransforms.map(t=>function(n,i){const o=i.transform;if(o instanceof n5)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof p0)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof z0)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof i5)return{fieldPath:i.field.canonicalString(),increment:o.Ie};throw c1()}(0,t))),c.precondition.isNone||(a.currentDocument=function(r,n){return n.updateTime!==void 0?{updateTime:hS(r,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:c1()}(e,c.precondition)),a}function pS(e,c){return e&&e.length>0?(M1(c!==void 0),e.map(a=>function(r,n){let i=r.updateTime?e3(r.updateTime):e3(n);return i.isEqual(a1.min())&&(i=e3(n)),new Yx(i,r.transformResults||[])}(a,c))):[]}function zS(e,c){return{documents:[Bo(e,c.path)]}}function gS(e,c){const a={structuredQuery:{}},t=c.path;let r;c.collectionGroup!==null?(r=t,a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(r=t.popLast(),a.structuredQuery.from=[{collectionId:t.lastSegment()}]),a.parent=Bo(e,r);const n=function(u){if(u.length!==0)return Uo(r3.create(u,"and"))}(c.filters);n&&(a.structuredQuery.where=n);const i=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:B4(g.field),direction:CS(g.dir)}}(d))}(c.orderBy);i&&(a.structuredQuery.orderBy=i);const o=Q9(e,c.limit);return o!==null&&(a.structuredQuery.limit=o),c.startAt&&(a.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(c.startAt)),c.endAt&&(a.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(c.endAt)),{ut:a,parent:r}}function HS(e){let c=mS(e.parent);const a=e.structuredQuery,t=a.from?a.from.length:0;let r=null;if(t>0){M1(t===1);const d=a.from[0];d.allDescendants?r=d.collectionId:c=c.child(d.collectionId)}let n=[];a.where&&(n=function(v){const g=qo(v);return g instanceof r3&&po(g)?g.getFilters():[g]}(a.where));let i=[];a.orderBy&&(i=function(v){return v.map(g=>function(R){return new r5(O4(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(a.orderBy));let o=null;a.limit&&(o=function(v){let g;return g=typeof v=="object"?v.value:v,U5(g)?null:g}(a.limit));let l=null;a.startAt&&(l=function(v){const g=!!v.before,V=v.values||[];return new t5(V,g)}(a.startAt));let u=null;return a.endAt&&(u=function(v){const g=!v.before,V=v.values||[];return new t5(V,g)}(a.endAt)),Rx(c,r,i,n,o,"F",l,u)}function VS(e,c){const a=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return c1()}}(c.purpose);return a==null?null:{"goog-listen-tags":a}}function qo(e){return e.unaryFilter!==void 0?function(a){switch(a.unaryFilter.op){case"IS_NAN":const t=O4(a.unaryFilter.field);return D1.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=O4(a.unaryFilter.field);return D1.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=O4(a.unaryFilter.field);return D1.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=O4(a.unaryFilter.field);return D1.create(i,"!=",{nullValue:"NULL_VALUE"});default:return c1()}}(e):e.fieldFilter!==void 0?function(a){return D1.create(O4(a.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c1()}}(a.fieldFilter.op),a.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(a){return r3.create(a.compositeFilter.filters.map(t=>qo(t)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return c1()}}(a.compositeFilter.op))}(e):c1()}function CS(e){return oS[e]}function MS(e){return lS[e]}function LS(e){return fS[e]}function B4(e){return{fieldPath:e.canonicalString()}}function O4(e){return X1.fromServerFormat(e.fieldPath)}function Uo(e){return e instanceof D1?function(a){if(a.op==="=="){if(Zr(a.value))return{unaryFilter:{field:B4(a.field),op:"IS_NAN"}};if(Kr(a.value))return{unaryFilter:{field:B4(a.field),op:"IS_NULL"}}}else if(a.op==="!="){if(Zr(a.value))return{unaryFilter:{field:B4(a.field),op:"IS_NOT_NAN"}};if(Kr(a.value))return{unaryFilter:{field:B4(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:B4(a.field),op:MS(a.op),value:a.value}}}(e):e instanceof r3?function(a){const t=a.getFilters().map(r=>Uo(r));return t.length===1?t[0]:{compositeFilter:{op:LS(a.op),filters:t}}}(e):c1()}function wS(e){const c=[];return e.fields.forEach(a=>c.push(a.canonicalString())),{fieldPaths:c}}function $o(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class T3{constructor(c,a,t,r,n=a1.min(),i=a1.min(),o=u2.EMPTY_BYTE_STRING,l=null){this.target=c,this.targetId=a,this.purpose=t,this.sequenceNumber=r,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=l}withSequenceNumber(c){return new T3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(c,a){return new T3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c,null)}withExpectedCount(c){return new T3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,c)}withLastLimboFreeSnapshotVersion(c){return new T3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken,this.expectedCount)}}/**
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
 */class bS{constructor(c){this.ct=c}}function yS(e){const c=HS({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Z9(c,c.limit,"L"):c}/**
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
 */class xS{constructor(){this._n=new SS}addToCollectionParentIndex(c,a){return this._n.add(a),y.resolve()}getCollectionParents(c,a){return y.resolve(this._n.getEntries(a))}addFieldIndex(c,a){return y.resolve()}deleteFieldIndex(c,a){return y.resolve()}deleteAllFieldIndexes(c){return y.resolve()}createTargetIndexes(c,a){return y.resolve()}getDocumentsMatchingTarget(c,a){return y.resolve(null)}getIndexType(c,a){return y.resolve(0)}getFieldIndexes(c,a){return y.resolve([])}getNextCollectionGroupToUpdate(c){return y.resolve(null)}getMinOffset(c,a){return y.resolve(B3.min())}getMinOffsetFromCollectionGroup(c,a){return y.resolve(B3.min())}updateCollectionGroup(c,a,t){return y.resolve()}updateIndexEntries(c,a){return y.resolve()}}class SS{constructor(){this.index={}}add(c){const a=c.lastSegment(),t=c.popLast(),r=this.index[a]||new c2(A1.comparator),n=!r.has(t);return this.index[a]=r.add(t),n}has(c){const a=c.lastSegment(),t=c.popLast(),r=this.index[a];return r&&r.has(t)}getEntries(c){return(this.index[c]||new c2(A1.comparator)).toArray()}}/**
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
 */class s6{constructor(c){this.On=c}next(){return this.On+=2,this.On}static Nn(){return new s6(0)}static Ln(){return new s6(-1)}}/**
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
 */class AS{constructor(){this.changes=new z6(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,s2.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const t=this.changes.get(a);return t!==void 0?y.resolve(t):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
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
 */class NS{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
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
 */class _S{constructor(c,a,t,r){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=t,this.indexManager=r}getDocument(c,a){let t=null;return this.documentOverlayCache.getOverlay(c,a).next(r=>(t=r,this.remoteDocumentCache.getEntry(c,a))).next(r=>(t!==null&&W6(t.mutation,r,F2.empty(),F1.now()),r))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(t=>this.getLocalViewOfDocuments(c,t,f1()).next(()=>t))}getLocalViewOfDocuments(c,a,t=f1()){const r=u4();return this.populateOverlays(c,r,a).next(()=>this.computeViews(c,a,r,t).next(n=>{let i=P6();return n.forEach((o,l)=>{i=i.insert(o,l.overlayedDocument)}),i}))}getOverlayedDocuments(c,a){const t=u4();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,f1()))}populateOverlays(c,a,t){const r=[];return t.forEach(n=>{a.has(n)||r.push(n)}),this.documentOverlayCache.getOverlays(c,r).next(n=>{n.forEach((i,o)=>{a.set(i,o)})})}computeViews(c,a,t,r){let n=d3();const i=G6(),o=function(){return G6()}();return a.forEach((l,u)=>{const d=t.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof x4)?n=n.insert(u.key,u):d!==void 0?(i.set(u.key,d.mutation.getFieldMask()),W6(d.mutation,u,d.mutation.getFieldMask(),F1.now())):i.set(u.key,F2.empty())}),this.recalculateAndSaveOverlays(c,n).next(l=>(l.forEach((u,d)=>i.set(u,d)),a.forEach((u,d)=>{var v;return o.set(u,new NS(d,(v=i.get(u))!==null&&v!==void 0?v:null))}),o))}recalculateAndSaveOverlays(c,a){const t=G6();let r=new N1((i,o)=>i-o),n=f1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(i=>{for(const o of i)o.keys().forEach(l=>{const u=a.get(l);if(u===null)return;let d=t.get(l)||F2.empty();d=o.applyToLocalView(u,d),t.set(l,d);const v=(r.get(o.batchId)||f1()).add(l);r=r.insert(o.batchId,v)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const l=o.getNext(),u=l.key,d=l.value,v=bo();d.forEach(g=>{if(!n.has(g)){const V=ko(a.get(g),t.get(g));V!==null&&v.set(g,V),n=n.add(g)}}),i.push(this.documentOverlayCache.saveOverlays(c,u,v))}return y.waitFor(i)}).next(()=>t)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(t=>this.recalculateAndSaveOverlays(c,t))}getDocumentsMatchingQuery(c,a,t,r){return function(i){return Z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):Dx(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,t,r):this.getDocumentsMatchingCollectionQuery(c,a,t,r)}getNextDocuments(c,a,t,r){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,t,r).next(n=>{const i=r-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,t.largestBatchId,r-n.size):y.resolve(u4());let o=-1,l=n;return i.next(u=>y.forEach(u,(d,v)=>(o<v.largestBatchId&&(o=v.largestBatchId),n.get(d)?y.resolve():this.remoteDocumentCache.getEntry(c,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(c,u,n)).next(()=>this.computeViews(c,l,u,f1())).next(d=>({batchId:o,changes:wo(d)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new Z(a)).next(t=>{let r=P6();return t.isFoundDocument()&&(r=r.insert(t.key,t)),r})}getDocumentsMatchingCollectionGroupQuery(c,a,t,r){const n=a.collectionGroup;let i=P6();return this.indexManager.getCollectionParents(c,n).next(o=>y.forEach(o,l=>{const u=function(v,g){return new $5(g,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(a,l.child(n));return this.getDocumentsMatchingCollectionQuery(c,u,t,r).next(d=>{d.forEach((v,g)=>{i=i.insert(v,g)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(c,a,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(c,a.path,t.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(c,a,t,n,r))).next(i=>{n.forEach((l,u)=>{const d=u.getKey();i.get(d)===null&&(i=i.insert(d,s2.newInvalidDocument(d)))});let o=P6();return i.forEach((l,u)=>{const d=n.get(l);d!==void 0&&W6(d.mutation,u,F2.empty(),F1.now()),G5(a,u)&&(o=o.insert(l,u))}),o})}}/**
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
 */class kS{constructor(c){this.serializer=c,this.cr=new Map,this.lr=new Map}getBundleMetadata(c,a){return y.resolve(this.cr.get(a))}saveBundleMetadata(c,a){return this.cr.set(a.id,function(r){return{id:r.id,version:r.version,createTime:e3(r.createTime)}}(a)),y.resolve()}getNamedQuery(c,a){return y.resolve(this.lr.get(a))}saveNamedQuery(c,a){return this.lr.set(a.name,function(r){return{name:r.name,query:yS(r.bundledQuery),readTime:e3(r.readTime)}}(a)),y.resolve()}}/**
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
 */class TS{constructor(){this.overlays=new N1(Z.comparator),this.hr=new Map}getOverlay(c,a){return y.resolve(this.overlays.get(a))}getOverlays(c,a){const t=u4();return y.forEach(a,r=>this.getOverlay(c,r).next(n=>{n!==null&&t.set(r,n)})).next(()=>t)}saveOverlays(c,a,t){return t.forEach((r,n)=>{this.ht(c,a,n)}),y.resolve()}removeOverlaysForBatchId(c,a,t){const r=this.hr.get(t);return r!==void 0&&(r.forEach(n=>this.overlays=this.overlays.remove(n)),this.hr.delete(t)),y.resolve()}getOverlaysForCollection(c,a,t){const r=u4(),n=a.length+1,i=new Z(a.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const l=o.getNext().value,u=l.getKey();if(!a.isPrefixOf(u.path))break;u.path.length===n&&l.largestBatchId>t&&r.set(l.getKey(),l)}return y.resolve(r)}getOverlaysForCollectionGroup(c,a,t,r){let n=new N1((u,d)=>u-d);const i=this.overlays.getIterator();for(;i.hasNext();){const u=i.getNext().value;if(u.getKey().getCollectionGroup()===a&&u.largestBatchId>t){let d=n.get(u.largestBatchId);d===null&&(d=u4(),n=n.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const o=u4(),l=n.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>o.set(u,d)),!(o.size()>=r)););return y.resolve(o)}ht(c,a,t){const r=this.overlays.get(t.key);if(r!==null){const i=this.hr.get(r.largestBatchId).delete(t.key);this.hr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(t.key,new aS(a,t));let n=this.hr.get(a);n===void 0&&(n=f1(),this.hr.set(a,n)),this.hr.set(a,n.add(t.key))}}/**
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
 */class ge{constructor(){this.Pr=new c2($1.Ir),this.Tr=new c2($1.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(c,a){const t=new $1(c,a);this.Pr=this.Pr.add(t),this.Tr=this.Tr.add(t)}dr(c,a){c.forEach(t=>this.addReference(t,a))}removeReference(c,a){this.Ar(new $1(c,a))}Rr(c,a){c.forEach(t=>this.removeReference(t,a))}Vr(c){const a=new Z(new A1([])),t=new $1(a,c),r=new $1(a,c+1),n=[];return this.Tr.forEachInRange([t,r],i=>{this.Ar(i),n.push(i.key)}),n}mr(){this.Pr.forEach(c=>this.Ar(c))}Ar(c){this.Pr=this.Pr.delete(c),this.Tr=this.Tr.delete(c)}gr(c){const a=new Z(new A1([])),t=new $1(a,c),r=new $1(a,c+1);let n=f1();return this.Tr.forEachInRange([t,r],i=>{n=n.add(i.key)}),n}containsKey(c){const a=new $1(c,0),t=this.Pr.firstAfterOrEqual(a);return t!==null&&c.isEqual(t.key)}}class $1{constructor(c,a){this.key=c,this.pr=a}static Ir(c,a){return Z.comparator(c.key,a.key)||p1(c.pr,a.pr)}static Er(c,a){return p1(c.pr,a.pr)||Z.comparator(c.key,a.key)}}/**
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
 */class ES{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.yr=1,this.wr=new c2($1.Ir)}checkEmpty(c){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,t,r){const n=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new eS(n,a,t,r);this.mutationQueue.push(i);for(const o of r)this.wr=this.wr.add(new $1(o.key,n)),this.indexManager.addToCollectionParentIndex(c,o.key.path.popLast());return y.resolve(i)}lookupMutationBatch(c,a){return y.resolve(this.Sr(a))}getNextMutationBatchAfterBatchId(c,a){const t=a+1,r=this.br(t),n=r<0?0:r;return y.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(c){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const t=new $1(a,0),r=new $1(a,Number.POSITIVE_INFINITY),n=[];return this.wr.forEachInRange([t,r],i=>{const o=this.Sr(i.pr);n.push(o)}),y.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(c,a){let t=new c2(p1);return a.forEach(r=>{const n=new $1(r,0),i=new $1(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([n,i],o=>{t=t.add(o.pr)})}),y.resolve(this.Dr(t))}getAllMutationBatchesAffectingQuery(c,a){const t=a.path,r=t.length+1;let n=t;Z.isDocumentKey(n)||(n=n.child(""));const i=new $1(new Z(n),0);let o=new c2(p1);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!t.isPrefixOf(u)&&(u.length===r&&(o=o.add(l.pr)),!0)},i),y.resolve(this.Dr(o))}Dr(c){const a=[];return c.forEach(t=>{const r=this.Sr(t);r!==null&&a.push(r)}),a}removeMutationBatch(c,a){M1(this.Cr(a.batchId,"removed")===0),this.mutationQueue.shift();let t=this.wr;return y.forEach(a.mutations,r=>{const n=new $1(r.key,a.batchId);return t=t.delete(n),this.referenceDelegate.markPotentiallyOrphaned(c,r.key)}).next(()=>{this.wr=t})}Mn(c){}containsKey(c,a){const t=new $1(a,0),r=this.wr.firstAfterOrEqual(t);return y.resolve(a.isEqual(r&&r.key))}performConsistencyCheck(c){return this.mutationQueue.length,y.resolve()}Cr(c,a){return this.br(c)}br(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}Sr(c){const a=this.br(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
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
 */class PS{constructor(c){this.vr=c,this.docs=function(){return new N1(Z.comparator)}(),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const t=a.key,r=this.docs.get(t),n=r?r.size:0,i=this.vr(a);return this.docs=this.docs.insert(t,{document:a.mutableCopy(),size:i}),this.size+=i-n,this.indexManager.addToCollectionParentIndex(c,t.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const t=this.docs.get(a);return y.resolve(t?t.document.mutableCopy():s2.newInvalidDocument(a))}getEntries(c,a){let t=d3();return a.forEach(r=>{const n=this.docs.get(r);t=t.insert(r,n?n.document.mutableCopy():s2.newInvalidDocument(r))}),y.resolve(t)}getDocumentsMatchingQuery(c,a,t,r){let n=d3();const i=a.path,o=new Z(i.child("")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!i.isPrefixOf(u.path))break;u.path.length>i.length+1||gx(zx(d),t)<=0||(r.has(d.key)||G5(a,d))&&(n=n.insert(d.key,d.mutableCopy()))}return y.resolve(n)}getAllFromCollectionGroup(c,a,t,r){c1()}Fr(c,a){return y.forEach(this.docs,t=>a(t))}newChangeBuffer(c){return new IS(this)}getSize(c){return y.resolve(this.size)}}class IS extends AS{constructor(c){super(),this.ar=c}applyChanges(c){const a=[];return this.changes.forEach((t,r)=>{r.isValidDocument()?a.push(this.ar.addEntry(c,r)):this.ar.removeEntry(t)}),y.waitFor(a)}getFromCache(c,a){return this.ar.getEntry(c,a)}getAllFromCache(c,a){return this.ar.getEntries(c,a)}}/**
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
 */class RS{constructor(c){this.persistence=c,this.Mr=new z6(a=>me(a),de),this.lastRemoteSnapshotVersion=a1.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ge,this.targetCount=0,this.Lr=s6.Nn()}forEachTarget(c,a){return this.Mr.forEach((t,r)=>a(r)),y.resolve()}getLastRemoteSnapshotVersion(c){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return y.resolve(this.Or)}allocateTargetId(c){return this.highestTargetId=this.Lr.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(c,a,t){return t&&(this.lastRemoteSnapshotVersion=t),a>this.Or&&(this.Or=a),y.resolve()}qn(c){this.Mr.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.Lr=new s6(a),this.highestTargetId=a),c.sequenceNumber>this.Or&&(this.Or=c.sequenceNumber)}addTargetData(c,a){return this.qn(a),this.targetCount+=1,y.resolve()}updateTargetData(c,a){return this.qn(a),y.resolve()}removeTargetData(c,a){return this.Mr.delete(a.target),this.Nr.Vr(a.targetId),this.targetCount-=1,y.resolve()}removeTargets(c,a,t){let r=0;const n=[];return this.Mr.forEach((i,o)=>{o.sequenceNumber<=a&&t.get(o.targetId)===null&&(this.Mr.delete(i),n.push(this.removeMatchingKeysForTargetId(c,o.targetId)),r++)}),y.waitFor(n).next(()=>r)}getTargetCount(c){return y.resolve(this.targetCount)}getTargetData(c,a){const t=this.Mr.get(a)||null;return y.resolve(t)}addMatchingKeys(c,a,t){return this.Nr.dr(a,t),y.resolve()}removeMatchingKeys(c,a,t){this.Nr.Rr(a,t);const r=this.persistence.referenceDelegate,n=[];return r&&a.forEach(i=>{n.push(r.markPotentiallyOrphaned(c,i))}),y.waitFor(n)}removeMatchingKeysForTargetId(c,a){return this.Nr.Vr(a),y.resolve()}getMatchingKeysForTargetId(c,a){const t=this.Nr.gr(a);return y.resolve(t)}containsKey(c,a){return y.resolve(this.Nr.containsKey(a))}}/**
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
 */class DS{constructor(c,a){this.Br={},this.overlays={},this.kr=new le(0),this.qr=!1,this.qr=!0,this.referenceDelegate=c(this),this.Qr=new RS(this),this.indexManager=new xS,this.remoteDocumentCache=function(r){return new PS(r)}(t=>this.referenceDelegate.Kr(t)),this.serializer=new bS(a),this.$r=new kS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new TS,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let t=this.Br[c.toKey()];return t||(t=new ES(a,this.referenceDelegate),this.Br[c.toKey()]=t),t}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(c,a,t){D("MemoryPersistence","Starting transaction:",c);const r=new FS(this.kr.next());return this.referenceDelegate.Ur(),t(r).next(n=>this.referenceDelegate.Wr(r).next(()=>n)).toPromise().then(n=>(r.raiseOnCommittedEvent(),n))}Gr(c,a){return y.or(Object.values(this.Br).map(t=>()=>t.containsKey(c,a)))}}class FS extends Vx{constructor(c){super(),this.currentSequenceNumber=c}}class He{constructor(c){this.persistence=c,this.zr=new ge,this.jr=null}static Hr(c){return new He(c)}get Jr(){if(this.jr)return this.jr;throw c1()}addReference(c,a,t){return this.zr.addReference(t,a),this.Jr.delete(t.toString()),y.resolve()}removeReference(c,a,t){return this.zr.removeReference(t,a),this.Jr.add(t.toString()),y.resolve()}markPotentiallyOrphaned(c,a){return this.Jr.add(a.toString()),y.resolve()}removeTarget(c,a){this.zr.Vr(a.targetId).forEach(r=>this.Jr.add(r.toString()));const t=this.persistence.getTargetCache();return t.getMatchingKeysForTargetId(c,a.targetId).next(r=>{r.forEach(n=>this.Jr.add(n.toString()))}).next(()=>t.removeTargetData(c,a))}Ur(){this.jr=new Set}Wr(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Jr,t=>{const r=Z.fromPath(t);return this.Yr(c,r).next(n=>{n||a.removeEntry(r,a1.min())})}).next(()=>(this.jr=null,a.apply(c)))}updateLimboDocument(c,a){return this.Yr(c,a).next(t=>{t?this.Jr.delete(a.toString()):this.Jr.add(a.toString())})}Kr(c){return 0}Yr(c,a){return y.or([()=>y.resolve(this.zr.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Gr(c,a)])}}/**
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
 */class Ve{constructor(c,a,t,r){this.targetId=c,this.fromCache=a,this.qi=t,this.Qi=r}static Ki(c,a){let t=f1(),r=f1();for(const n of a.docChanges)switch(n.type){case 0:t=t.add(n.doc.key);break;case 1:r=r.add(n.doc.key)}return new Ve(c,a.fromCache,t,r)}}/**
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
 */class BS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(c){this._documentReadCount+=c}}/**
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
 */class OS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return qw()?8:f4.v(W8())>0?6:4}()}initialize(c,a){this.zi=c,this.indexManager=a,this.$i=!0}getDocumentsMatchingQuery(c,a,t,r){const n={result:null};return this.ji(c,a).next(i=>{n.result=i}).next(()=>{if(!n.result)return this.Hi(c,a,r,t).next(i=>{n.result=i})}).next(()=>{if(n.result)return;const i=new BS;return this.Ji(c,a,i).next(o=>{if(n.result=o,this.Ui)return this.Yi(c,a,i,o.size)})}).next(()=>n.result)}Yi(c,a,t,r){return t.documentReadCount<this.Wi?(_6()<=d1.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",F4(a),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),y.resolve()):(_6()<=d1.DEBUG&&D("QueryEngine","Query:",F4(a),"scans",t.documentReadCount,"local documents and returns",r,"documents as results."),t.documentReadCount>this.Gi*r?(_6()<=d1.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",F4(a),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(c,c3(a))):y.resolve())}ji(c,a){if(Jr(a))return y.resolve(null);let t=c3(a);return this.indexManager.getIndexType(c,t).next(r=>r===0?null:(a.limit!==null&&r===1&&(a=Z9(a,null,"F"),t=c3(a)),this.indexManager.getDocumentsMatchingTarget(c,t).next(n=>{const i=f1(...n);return this.zi.getDocuments(c,i).next(o=>this.indexManager.getMinOffset(c,t).next(l=>{const u=this.Zi(a,o);return this.Xi(a,u,i,l.readTime)?this.ji(c,Z9(a,null,"F")):this.es(c,u,a,l)}))})))}Hi(c,a,t,r){return Jr(a)||r.isEqual(a1.min())?y.resolve(null):this.zi.getDocuments(c,t).next(n=>{const i=this.Zi(a,n);return this.Xi(a,i,t,r)?y.resolve(null):(_6()<=d1.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),F4(a)),this.es(c,i,a,px(r,-1)).next(o=>o))})}Zi(c,a){let t=new c2(Mo(c));return a.forEach((r,n)=>{G5(c,n)&&(t=t.add(n))}),t}Xi(c,a,t,r){if(c.limit===null)return!1;if(t.size!==a.size)return!0;const n=c.limitType==="F"?a.last():a.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(r)>0)}Ji(c,a,t){return _6()<=d1.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",F4(a)),this.zi.getDocumentsMatchingQuery(c,a,B3.min(),t)}es(c,a,t,r){return this.zi.getDocumentsMatchingQuery(c,t,r).next(n=>(a.forEach(i=>{n=n.insert(i.key,i)}),n))}}/**
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
 */class qS{constructor(c,a,t,r){this.persistence=c,this.ts=a,this.serializer=r,this.ns=new N1(p1),this.rs=new z6(n=>me(n),de),this.ss=new Map,this.os=c.getRemoteDocumentCache(),this.Qr=c.getTargetCache(),this.$r=c.getBundleCache(),this._s(t)}_s(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new _S(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.ns))}}function US(e,c,a,t){return new qS(e,c,a,t)}async function jo(e,c){const a=t1(e);return await a.persistence.runTransaction("Handle user change","readonly",t=>{let r;return a.mutationQueue.getAllMutationBatches(t).next(n=>(r=n,a._s(c),a.mutationQueue.getAllMutationBatches(t))).next(n=>{const i=[],o=[];let l=f1();for(const u of r){i.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of n){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return a.localDocuments.getDocuments(t,l).next(u=>({us:u,removedBatchIds:i,addedBatchIds:o}))})})}function $S(e,c){const a=t1(e);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=c.batch.keys(),n=a.os.newChangeBuffer({trackRemovals:!0});return function(o,l,u,d){const v=u.batch,g=v.keys();let V=y.resolve();return g.forEach(R=>{V=V.next(()=>d.getEntry(l,R)).next(E=>{const k=u.docVersions.get(R);M1(k!==null),E.version.compareTo(k)<0&&(v.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),d.addEntry(E)))})}),V.next(()=>o.mutationQueue.removeMutationBatch(l,v))}(a,t,c,n).next(()=>n.apply(t)).next(()=>a.mutationQueue.performConsistencyCheck(t)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(t,r,c.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(o){let l=f1();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(l=l.add(o.batch.mutations[u].key));return l}(c))).next(()=>a.localDocuments.getDocuments(t,r))})}function Go(e){const c=t1(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Qr.getLastRemoteSnapshotVersion(a))}function jS(e,c){const a=t1(e),t=c.snapshotVersion;let r=a.ns;return a.persistence.runTransaction("Apply remote event","readwrite-primary",n=>{const i=a.os.newChangeBuffer({trackRemovals:!0});r=a.ns;const o=[];c.targetChanges.forEach((d,v)=>{const g=r.get(v);if(!g)return;o.push(a.Qr.removeMatchingKeys(n,d.removedDocuments,v).next(()=>a.Qr.addMatchingKeys(n,d.addedDocuments,v)));let V=g.withSequenceNumber(n.currentSequenceNumber);c.targetMismatches.get(v)!==null?V=V.withResumeToken(u2.EMPTY_BYTE_STRING,a1.min()).withLastLimboFreeSnapshotVersion(a1.min()):d.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(d.resumeToken,t)),r=r.insert(v,V),function(E,k,S){return E.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,V,d)&&o.push(a.Qr.updateTargetData(n,V))});let l=d3(),u=f1();if(c.documentUpdates.forEach(d=>{c.resolvedLimboDocuments.has(d)&&o.push(a.persistence.referenceDelegate.updateLimboDocument(n,d))}),o.push(GS(n,i,c.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!t.isEqual(a1.min())){const d=a.Qr.getLastRemoteSnapshotVersion(n).next(v=>a.Qr.setTargetsMetadata(n,n.currentSequenceNumber,t));o.push(d)}return y.waitFor(o).next(()=>i.apply(n)).next(()=>a.localDocuments.getLocalViewOfDocuments(n,l,u)).next(()=>l)}).then(n=>(a.ns=r,n))}function GS(e,c,a){let t=f1(),r=f1();return a.forEach(n=>t=t.add(n)),c.getEntries(e,t).next(n=>{let i=d3();return a.forEach((o,l)=>{const u=n.get(o);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(o)),l.isNoDocument()&&l.version.isEqual(a1.min())?(c.removeEntry(o,l.readTime),i=i.insert(o,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(c.addEntry(l),i=i.insert(o,l)):D("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",l.version)}),{cs:i,ls:r}})}function WS(e,c){const a=t1(e);return a.persistence.runTransaction("Get next mutation batch","readonly",t=>(c===void 0&&(c=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(t,c)))}function KS(e,c){const a=t1(e);return a.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return a.Qr.getTargetData(t,c).next(n=>n?(r=n,y.resolve(r)):a.Qr.allocateTargetId(t).next(i=>(r=new T3(c,i,"TargetPurposeListen",t.currentSequenceNumber),a.Qr.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=a.ns.get(t.targetId);return(r===null||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(a.ns=a.ns.insert(t.targetId,t),a.rs.set(c,t.targetId)),t})}async function cc(e,c,a){const t=t1(e),r=t.ns.get(c),n=a?"readwrite":"readwrite-primary";try{a||await t.persistence.runTransaction("Release target",n,i=>t.persistence.referenceDelegate.removeTarget(i,r))}catch(i){if(!P0(i))throw i;D("LocalStore",`Failed to update sequence numbers for target ${c}: ${i}`)}t.ns=t.ns.remove(c),t.rs.delete(r.target)}function un(e,c,a){const t=t1(e);let r=a1.min(),n=f1();return t.persistence.runTransaction("Execute query","readwrite",i=>function(l,u,d){const v=t1(l),g=v.rs.get(d);return g!==void 0?y.resolve(v.ns.get(g)):v.Qr.getTargetData(u,d)}(t,i,c3(c)).next(o=>{if(o)return r=o.lastLimboFreeSnapshotVersion,t.Qr.getMatchingKeysForTargetId(i,o.targetId).next(l=>{n=l})}).next(()=>t.ts.getDocumentsMatchingQuery(i,c,a?r:a1.min(),a?n:f1())).next(o=>(ZS(t,Bx(c),o),{documents:o,hs:n})))}function ZS(e,c,a){let t=e.ss.get(c)||a1.min();a.forEach((r,n)=>{n.readTime.compareTo(t)>0&&(t=n.readTime)}),e.ss.set(c,t)}class hn{constructor(){this.activeTargetIds=Gx()}As(c){this.activeTargetIds=this.activeTargetIds.add(c)}Rs(c){this.activeTargetIds=this.activeTargetIds.delete(c)}ds(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class QS{constructor(){this.no=new hn,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,t){}addLocalQueryTarget(c){return this.no.As(c),this.ro[c]||"not-current"}updateQueryState(c,a,t){this.ro[c]=a}removeLocalQueryTarget(c){this.no.Rs(c)}isLocalQueryTarget(c){return this.no.activeTargetIds.has(c)}clearQueryState(c){delete this.ro[c]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(c){return this.no.activeTargetIds.has(c)}start(){return this.no=new hn,Promise.resolve()}handleUserChange(c,a,t){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
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
 */class YS{io(c){}shutdown(){}}/**
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
 */class mn{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(c){this.uo.push(c)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.uo)c(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.uo)c(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let z8=null;function n9(){return z8===null?z8=function(){return 268435456+Math.round(2147483648*Math.random())}():z8++,"0x"+z8.toString(16)}/**
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
 */const XS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JS{constructor(c){this.lo=c.lo,this.ho=c.ho}Po(c){this.Io=c}To(c){this.Eo=c}onMessage(c){this.Ao=c}close(){this.ho()}send(c){this.lo(c)}Ro(){this.Io()}Vo(c){this.Eo(c)}mo(c){this.Ao(c)}}/**
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
 */const r2="WebChannelConnection";class cA extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;const t=a.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+a.host,this.po=`projects/${r}/databases/${n}`,this.yo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get wo(){return!1}So(a,t,r,n,i){const o=n9(),l=this.bo(a,t.toUriEncodedString());D("RestConnection",`Sending RPC '${a}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,n,i),this.Co(a,l,u,r).then(d=>(D("RestConnection",`Received RPC '${a}' ${o}: `,d),d),d=>{throw t6("RestConnection",`RPC '${a}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}vo(a,t,r,n,i,o){return this.So(a,t,r,n,i)}Do(a,t,r){a["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+v6}(),a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,i)=>a[i]=n),r&&r.headers.forEach((n,i)=>a[i]=n)}bo(a,t){const r=XS[a];return`${this.fo}/v1/${t}:${r}`}terminate(){}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams,this.longPollingOptions=c.longPollingOptions}Co(c,a,t,r){const n=n9();return new Promise((i,o)=>{const l=new nx;l.setWithCredentials(!0),l.listenOnce(tx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case t9.NO_ERROR:const d=l.getResponseJson();D(r2,`XHR for RPC '${c}' ${n} received:`,JSON.stringify(d)),i(d);break;case t9.TIMEOUT:D(r2,`RPC '${c}' ${n} timed out`),o(new W(A.DEADLINE_EXCEEDED,"Request time out"));break;case t9.HTTP_ERROR:const v=l.getStatus();if(D(r2,`RPC '${c}' ${n} failed with status:`,v,"response text:",l.getResponseText()),v>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const V=g?.error;if(V&&V.status&&V.message){const R=function(k){const S=k.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(S)>=0?S:A.UNKNOWN}(V.status);o(new W(R,V.message))}else o(new W(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new W(A.UNAVAILABLE,"Connection failed."));break;default:c1()}}finally{D(r2,`RPC '${c}' ${n} completed.`)}});const u=JSON.stringify(r);D(r2,`RPC '${c}' ${n} sending request:`,r),l.send(a,"POST",u,t,15)})}Fo(c,a,t){const r=n9(),n=[this.fo,"/","google.firestore.v1.Firestore","/",c,"/channel"],i=ex(),o=ax(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,a,t),l.encodeInitMessageHeaders=!0;const d=n.join("");D(r2,`Creating RPC '${c}' stream ${r}: ${d}`,l);const v=i.createWebChannel(d,l);let g=!1,V=!1;const R=new JS({lo:k=>{V?D(r2,`Not sending because RPC '${c}' stream ${r} is closed:`,k):(g||(D(r2,`Opening RPC '${c}' stream ${r} transport.`),v.open(),g=!0),D(r2,`RPC '${c}' stream ${r} sending:`,k),v.send(k))},ho:()=>v.close()}),E=(k,S,I)=>{k.listen(S,B=>{try{I(B)}catch(Q){setTimeout(()=>{throw Q},0)}})};return E(v,d8.EventType.OPEN,()=>{V||D(r2,`RPC '${c}' stream ${r} transport opened.`)}),E(v,d8.EventType.CLOSE,()=>{V||(V=!0,D(r2,`RPC '${c}' stream ${r} transport closed`),R.Vo())}),E(v,d8.EventType.ERROR,k=>{V||(V=!0,t6(r2,`RPC '${c}' stream ${r} transport errored:`,k),R.Vo(new W(A.UNAVAILABLE,"The operation could not be completed")))}),E(v,d8.EventType.MESSAGE,k=>{var S;if(!V){const I=k.data[0];M1(!!I);const B=I,Q=B.error||((S=B[0])===null||S===void 0?void 0:S.error);if(Q){D(r2,`RPC '${c}' stream ${r} received error:`,Q);const r1=Q.status;let Y=function(a2){const v2=I1[a2];if(v2!==void 0)return Po(v2)}(r1),H1=Q.message;Y===void 0&&(Y=A.INTERNAL,H1="Unknown error status: "+r1+" with message "+Q.message),V=!0,R.Vo(new W(Y,H1)),v.close()}else D(r2,`RPC '${c}' stream ${r} received:`,I),R.mo(I)}}),E(o,rx.STAT_EVENT,k=>{k.stat===qr.PROXY?D(r2,`RPC '${c}' stream ${r} detected buffering proxy`):k.stat===qr.NOPROXY&&D(r2,`RPC '${c}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function i9(){return typeof document<"u"?document:null}/**
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
 */function Q5(e){return new uS(e,!0)}/**
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
 */class Wo{constructor(c,a,t=1e3,r=1.5,n=6e4){this.oi=c,this.timerId=a,this.Mo=t,this.xo=r,this.Oo=n,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(c){this.cancel();const a=Math.floor(this.No+this.Qo()),t=Math.max(0,Date.now()-this.Bo),r=Math.max(0,a-t);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${a} ms, last attempt: ${t} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),c())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Ko{constructor(c,a,t,r,n,i,o,l){this.oi=c,this.$o=t,this.Uo=r,this.connection=n,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Wo(c,a)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(c){this.n_(),this.stream.send(c)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(c,a){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,c!==4?this.jo.reset():a&&a.code===A.RESOURCE_EXHAUSTED?(a3(a.toString()),a3("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):a&&a.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=c,await this.listener.To(a)}i_(){}auth(){this.state=1;const c=this.s_(this.Wo),a=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,r])=>{this.Wo===a&&this.o_(t,r)},t=>{c(()=>{const r=new W(A.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(r)})})}o_(c,a){const t=this.s_(this.Wo);this.stream=this.a_(c,a),this.stream.Po(()=>{t(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(r=>{t(()=>this.__(r))}),this.stream.onMessage(r=>{t(()=>this.onMessage(r))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(c){return D("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}s_(c){return a=>{this.oi.enqueueAndForget(()=>this.Wo===c?a():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eA extends Ko{constructor(c,a,t,r,n,i){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,t,r,i),this.serializer=n}a_(c,a){return this.connection.Fo("Listen",c,a)}onMessage(c){this.jo.reset();const a=dS(this.serializer,c),t=function(n){if(!("targetChange"in n))return a1.min();const i=n.targetChange;return i.targetIds&&i.targetIds.length?a1.min():i.readTime?e3(i.readTime):a1.min()}(c);return this.listener.u_(a,t)}c_(c){const a={};a.database=J9(this.serializer),a.addTarget=function(n,i){let o;const l=i.target;if(o=K9(l)?{documents:zS(n,l)}:{query:gS(n,l).ut},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Do(n,i.resumeToken);const u=Q9(n,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(a1.min())>0){o.readTime=s5(n,i.snapshotVersion.toTimestamp());const u=Q9(n,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,c);const t=VS(this.serializer,c);t&&(a.labels=t),this.t_(a)}l_(c){const a={};a.database=J9(this.serializer),a.removeTarget=c,this.t_(a)}}class aA extends Ko{constructor(c,a,t,r,n,i){super(c,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,t,r,i),this.serializer=n,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(c,a){return this.connection.Fo("Write",c,a)}onMessage(c){if(M1(!!c.streamToken),this.lastStreamToken=c.streamToken,this.h_){this.jo.reset();const a=pS(c.writeResults,c.commitTime),t=e3(c.commitTime);return this.listener.T_(t,a)}return M1(!c.writeResults||c.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const c={};c.database=J9(this.serializer),this.t_(c)}I_(c){const a={streamToken:this.lastStreamToken,writes:c.map(t=>vS(this.serializer,t))};this.t_(a)}}/**
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
 */class tA extends class{}{constructor(c,a,t,r){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=t,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new W(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(c,a,t,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.So(c,Y9(a,t),r,n,i)).catch(n=>{throw n.name==="FirebaseError"?(n.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new W(A.UNKNOWN,n.toString())})}vo(c,a,t,r,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(c,Y9(a,t),r,i,o,n)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(A.UNKNOWN,i.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class rA{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(c){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.y_("Offline")))}set(c){this.b_(),this.m_=0,c==="Online"&&(this.g_=!1),this.y_(c)}y_(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}w_(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(a3(a),this.g_=!1):D("OnlineStateTracker",a)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class nA{constructor(c,a,t,r,n){this.localStore=c,this.datastore=a,this.asyncQueue=t,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=n,this.M_.io(i=>{t.enqueueAndForget(async()=>{S4(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=t1(l);u.v_.add(4),await D0(u),u.x_.set("Unknown"),u.v_.delete(4),await Y5(u)}(this))})}),this.x_=new rA(t,r)}}async function Y5(e){if(S4(e))for(const c of e.F_)await c(!0)}async function D0(e){for(const c of e.F_)await c(!1)}function Zo(e,c){const a=t1(e);a.C_.has(c.targetId)||(a.C_.set(c.targetId,c),we(a)?Le(a):g6(a).Jo()&&Me(a,c))}function Ce(e,c){const a=t1(e),t=g6(a);a.C_.delete(c),t.Jo()&&Qo(a,c),a.C_.size===0&&(t.Jo()?t.Xo():S4(a)&&a.x_.set("Unknown"))}function Me(e,c){if(e.O_.Oe(c.targetId),c.resumeToken.approximateByteSize()>0||c.snapshotVersion.compareTo(a1.min())>0){const a=e.remoteSyncer.getRemoteKeysForTarget(c.targetId).size;c=c.withExpectedCount(a)}g6(e).c_(c)}function Qo(e,c){e.O_.Oe(c),g6(e).l_(c)}function Le(e){e.O_=new sS({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),_t:c=>e.C_.get(c)||null,nt:()=>e.datastore.serializer.databaseId}),g6(e).start(),e.x_.p_()}function we(e){return S4(e)&&!g6(e).Ho()&&e.C_.size>0}function S4(e){return t1(e).v_.size===0}function Yo(e){e.O_=void 0}async function iA(e){e.C_.forEach((c,a)=>{Me(e,c)})}async function sA(e,c){Yo(e),we(e)?(e.x_.S_(c),Le(e)):e.x_.set("Unknown")}async function oA(e,c,a){if(e.x_.set("Online"),c instanceof Ro&&c.state===2&&c.cause)try{await async function(r,n){const i=n.cause;for(const o of n.targetIds)r.C_.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.C_.delete(o),r.O_.removeTarget(o))}(e,c)}catch(t){D("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),t),await o5(e,t)}else if(c instanceof I8?e.O_.$e(c):c instanceof Io?e.O_.Je(c):e.O_.Ge(c),!a.isEqual(a1.min()))try{const t=await Go(e.localStore);a.compareTo(t)>=0&&await function(n,i){const o=n.O_.it(i);return o.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=n.C_.get(u);d&&n.C_.set(u,d.withResumeToken(l.resumeToken,i))}}),o.targetMismatches.forEach((l,u)=>{const d=n.C_.get(l);if(!d)return;n.C_.set(l,d.withResumeToken(u2.EMPTY_BYTE_STRING,d.snapshotVersion)),Qo(n,l);const v=new T3(d.target,l,u,d.sequenceNumber);Me(n,v)}),n.remoteSyncer.applyRemoteEvent(o)}(e,a)}catch(t){D("RemoteStore","Failed to raise snapshot:",t),await o5(e,t)}}async function o5(e,c,a){if(!P0(c))throw c;e.v_.add(1),await D0(e),e.x_.set("Offline"),a||(a=()=>Go(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await a(),e.v_.delete(1),await Y5(e)})}function Xo(e,c){return c().catch(a=>o5(e,a,c))}async function X5(e){const c=t1(e),a=q3(c);let t=c.D_.length>0?c.D_[c.D_.length-1].batchId:-1;for(;lA(c);)try{const r=await WS(c.localStore,t);if(r===null){c.D_.length===0&&a.Xo();break}t=r.batchId,fA(c,r)}catch(r){await o5(c,r)}Jo(c)&&cl(c)}function lA(e){return S4(e)&&e.D_.length<10}function fA(e,c){e.D_.push(c);const a=q3(e);a.Jo()&&a.P_&&a.I_(c.mutations)}function Jo(e){return S4(e)&&!q3(e).Ho()&&e.D_.length>0}function cl(e){q3(e).start()}async function uA(e){q3(e).d_()}async function hA(e){const c=q3(e);for(const a of e.D_)c.I_(a.mutations)}async function mA(e,c,a){const t=e.D_.shift(),r=ve.from(t,c,a);await Xo(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await X5(e)}async function dA(e,c){c&&q3(e).P_&&await async function(t,r){if(function(i){return rS(i)&&i!==A.ABORTED}(r.code)){const n=t.D_.shift();q3(t).Zo(),await Xo(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,r)),await X5(t)}}(e,c),Jo(e)&&cl(e)}async function dn(e,c){const a=t1(e);a.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const t=S4(a);a.v_.add(3),await D0(a),t&&a.x_.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a.v_.delete(3),await Y5(a)}async function vA(e,c){const a=t1(e);c?(a.v_.delete(2),await Y5(a)):c||(a.v_.add(2),await D0(a),a.x_.set("Unknown"))}function g6(e){return e.N_||(e.N_=function(a,t,r){const n=t1(a);return n.R_(),new eA(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)}(e.datastore,e.asyncQueue,{Po:iA.bind(null,e),To:sA.bind(null,e),u_:oA.bind(null,e)}),e.F_.push(async c=>{c?(e.N_.Zo(),we(e)?Le(e):e.x_.set("Unknown")):(await e.N_.stop(),Yo(e))})),e.N_}function q3(e){return e.L_||(e.L_=function(a,t,r){const n=t1(a);return n.R_(),new aA(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)}(e.datastore,e.asyncQueue,{Po:uA.bind(null,e),To:dA.bind(null,e),E_:hA.bind(null,e),T_:mA.bind(null,e)}),e.F_.push(async c=>{c?(e.L_.Zo(),await X5(e)):(await e.L_.stop(),e.D_.length>0&&(D("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
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
 */class be{constructor(c,a,t,r,n){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=t,this.op=r,this.removalCallback=n,this.deferred=new u3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(c,a,t,r,n){const i=Date.now()+t,o=new be(c,a,i,r,n);return o.start(t),o}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(A.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ye(e,c){if(a3("AsyncQueue",`${c}: ${e}`),P0(e))return new W(A.UNAVAILABLE,`${c}: ${e}`);throw e}/**
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
 */class X4{constructor(c){this.comparator=c?(a,t)=>c(a,t)||Z.comparator(a.key,t.key):(a,t)=>Z.comparator(a.key,t.key),this.keyedMap=P6(),this.sortedSet=new N1(this.comparator)}static emptySet(c){return new X4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,t)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof X4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),t=c.sortedSet.getIterator();for(;a.hasNext();){const r=a.getNext().key,n=t.getNext().key;if(!r.isEqual(n))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const t=new X4;return t.comparator=this.comparator,t.keyedMap=c,t.sortedSet=a,t}}/**
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
 */class vn{constructor(){this.B_=new N1(Z.comparator)}track(c){const a=c.doc.key,t=this.B_.get(a);t?c.type!==0&&t.type===3?this.B_=this.B_.insert(a,c):c.type===3&&t.type!==1?this.B_=this.B_.insert(a,{type:t.type,doc:c.doc}):c.type===2&&t.type===2?this.B_=this.B_.insert(a,{type:2,doc:c.doc}):c.type===2&&t.type===0?this.B_=this.B_.insert(a,{type:0,doc:c.doc}):c.type===1&&t.type===0?this.B_=this.B_.remove(a):c.type===1&&t.type===2?this.B_=this.B_.insert(a,{type:1,doc:t.doc}):c.type===0&&t.type===1?this.B_=this.B_.insert(a,{type:2,doc:c.doc}):c1():this.B_=this.B_.insert(a,c)}k_(){const c=[];return this.B_.inorderTraversal((a,t)=>{c.push(t)}),c}}class o6{constructor(c,a,t,r,n,i,o,l,u){this.query=c,this.docs=a,this.oldDocs=t,this.docChanges=r,this.mutatedKeys=n,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(c,a,t,r,n){const i=[];return a.forEach(o=>{i.push({type:0,doc:o})}),new o6(c,a,X4.emptySet(a),i,t,r,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&j5(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,t=c.docChanges;if(a.length!==t.length)return!1;for(let r=0;r<a.length;r++)if(a[r].type!==t[r].type||!a[r].doc.isEqual(t[r].doc))return!1;return!0}}/**
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
 */class pA{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(c=>c.U_())}}class zA{constructor(){this.queries=new z6(c=>Co(c),j5),this.onlineState="Unknown",this.W_=new Set}}async function gA(e,c){const a=t1(e);let t=3;const r=c.query;let n=a.queries.get(r);n?!n.K_()&&c.U_()&&(t=2):(n=new pA,t=c.U_()?0:1);try{switch(t){case 0:n.q_=await a.onListen(r,!0);break;case 1:n.q_=await a.onListen(r,!1);break;case 2:await a.onFirstRemoteStoreListen(r)}}catch(i){const o=ye(i,`Initialization of query '${F4(c.query)}' failed`);return void c.onError(o)}a.queries.set(r,n),n.Q_.push(c),c.G_(a.onlineState),n.q_&&c.z_(n.q_)&&xe(a)}async function HA(e,c){const a=t1(e),t=c.query;let r=3;const n=a.queries.get(t);if(n){const i=n.Q_.indexOf(c);i>=0&&(n.Q_.splice(i,1),n.Q_.length===0?r=c.U_()?0:1:!n.K_()&&c.U_()&&(r=2))}switch(r){case 0:return a.queries.delete(t),a.onUnlisten(t,!0);case 1:return a.queries.delete(t),a.onUnlisten(t,!1);case 2:return a.onLastRemoteStoreUnlisten(t);default:return}}function VA(e,c){const a=t1(e);let t=!1;for(const r of c){const n=r.query,i=a.queries.get(n);if(i){for(const o of i.Q_)o.z_(r)&&(t=!0);i.q_=r}}t&&xe(a)}function CA(e,c,a){const t=t1(e),r=t.queries.get(c);if(r)for(const n of r.Q_)n.onError(a);t.queries.delete(c)}function xe(e){e.W_.forEach(c=>{c.next()})}var ec,pn;(pn=ec||(ec={})).j_="default",pn.Cache="cache";class MA{constructor(c,a,t){this.query=c,this.H_=a,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=t||{}}z_(c){if(!this.options.includeMetadataChanges){const t=[];for(const r of c.docChanges)r.type!==3&&t.push(r);c=new o6(c.query,c.docs,c.oldDocs,t,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.J_?this.Z_(c)&&(this.H_.next(c),a=!0):this.X_(c,this.onlineState)&&(this.ea(c),a=!0),this.Y_=c,a}onError(c){this.H_.error(c)}G_(c){this.onlineState=c;let a=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,c)&&(this.ea(this.Y_),a=!0),a}X_(c,a){if(!c.fromCache||!this.U_())return!0;const t=a!=="Offline";return(!this.options.ta||!t)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Z_(c){if(c.docChanges.length>0)return!0;const a=this.Y_&&this.Y_.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}ea(c){c=o6.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.J_=!0,this.H_.next(c)}U_(){return this.options.source!==ec.Cache}}/**
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
 */class el{constructor(c){this.key=c}}class al{constructor(c){this.key=c}}class LA{constructor(c,a){this.query=c,this.ua=a,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=f1(),this.mutatedKeys=f1(),this.ha=Mo(c),this.Pa=new X4(this.ha)}get Ia(){return this.ua}Ta(c,a){const t=a?a.Ea:new vn,r=a?a.Pa:this.Pa;let n=a?a.mutatedKeys:this.mutatedKeys,i=r,o=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(c.inorderTraversal((d,v)=>{const g=r.get(d),V=G5(this.query,v)?v:null,R=!!g&&this.mutatedKeys.has(g.key),E=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let k=!1;g&&V?g.data.isEqual(V.data)?R!==E&&(t.track({type:3,doc:V}),k=!0):this.da(g,V)||(t.track({type:2,doc:V}),k=!0,(l&&this.ha(V,l)>0||u&&this.ha(V,u)<0)&&(o=!0)):!g&&V?(t.track({type:0,doc:V}),k=!0):g&&!V&&(t.track({type:1,doc:g}),k=!0,(l||u)&&(o=!0)),k&&(V?(i=i.add(V),n=E?n.add(d):n.delete(d)):(i=i.delete(d),n=n.delete(d)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const d=this.query.limitType==="F"?i.last():i.first();i=i.delete(d.key),n=n.delete(d.key),t.track({type:1,doc:d})}return{Pa:i,Ea:t,Xi:o,mutatedKeys:n}}da(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,t,r){const n=this.Pa;this.Pa=c.Pa,this.mutatedKeys=c.mutatedKeys;const i=c.Ea.k_();i.sort((d,v)=>function(V,R){const E=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c1()}};return E(V)-E(R)}(d.type,v.type)||this.ha(d.doc,v.doc)),this.Aa(t),r=r!=null&&r;const o=a&&!r?this.Ra():[],l=this.la.size===0&&this.current&&!r?1:0,u=l!==this.ca;return this.ca=l,i.length!==0||u?{snapshot:new o6(this.query,c.Pa,n,i,c.mutatedKeys,l===0,u,!1,!!t&&t.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new vn,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(c){return!this.ua.has(c)&&!!this.Pa.has(c)&&!this.Pa.get(c).hasLocalMutations}Aa(c){c&&(c.addedDocuments.forEach(a=>this.ua=this.ua.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.ua=this.ua.delete(a)),this.current=c.current)}Ra(){if(!this.current)return[];const c=this.la;this.la=f1(),this.Pa.forEach(t=>{this.ma(t.key)&&(this.la=this.la.add(t.key))});const a=[];return c.forEach(t=>{this.la.has(t)||a.push(new al(t))}),this.la.forEach(t=>{c.has(t)||a.push(new el(t))}),a}fa(c){this.ua=c.hs,this.la=f1();const a=this.Ta(c.documents);return this.applyChanges(a,!0)}ga(){return o6.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class wA{constructor(c,a,t){this.query=c,this.targetId=a,this.view=t}}class bA{constructor(c){this.key=c,this.pa=!1}}class yA{constructor(c,a,t,r,n,i){this.localStore=c,this.remoteStore=a,this.eventManager=t,this.sharedClientState=r,this.currentUser=n,this.maxConcurrentLimboResolutions=i,this.ya={},this.wa=new z6(o=>Co(o),j5),this.Sa=new Map,this.ba=new Set,this.Da=new N1(Z.comparator),this.Ca=new Map,this.va=new ge,this.Fa={},this.Ma=new Map,this.xa=s6.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function xA(e,c,a=!0){const t=ol(e);let r;const n=t.wa.get(c);return n?(t.sharedClientState.addLocalQueryTarget(n.targetId),r=n.view.ga()):r=await tl(t,c,a,!0),r}async function SA(e,c){const a=ol(e);await tl(a,c,!0,!1)}async function tl(e,c,a,t){const r=await KS(e.localStore,c3(c)),n=r.targetId,i=a?e.sharedClientState.addLocalQueryTarget(n):"not-current";let o;return t&&(o=await AA(e,c,n,i==="current",r.resumeToken)),e.isPrimaryClient&&a&&Zo(e.remoteStore,r),o}async function AA(e,c,a,t,r){e.Na=(v,g,V)=>async function(E,k,S,I){let B=k.view.Ta(S);B.Xi&&(B=await un(E.localStore,k.query,!1).then(({documents:H1})=>k.view.Ta(H1,B)));const Q=I&&I.targetChanges.get(k.targetId),r1=I&&I.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(B,E.isPrimaryClient,Q,r1);return gn(E,k.targetId,Y.Va),Y.snapshot}(e,v,g,V);const n=await un(e.localStore,c,!0),i=new LA(c,n.hs),o=i.Ta(n.documents),l=R0.createSynthesizedTargetChangeForCurrentChange(a,t&&e.onlineState!=="Offline",r),u=i.applyChanges(o,e.isPrimaryClient,l);gn(e,a,u.Va);const d=new wA(c,a,i);return e.wa.set(c,d),e.Sa.has(a)?e.Sa.get(a).push(c):e.Sa.set(a,[c]),u.snapshot}async function NA(e,c,a){const t=t1(e),r=t.wa.get(c),n=t.Sa.get(r.targetId);if(n.length>1)return t.Sa.set(r.targetId,n.filter(i=>!j5(i,c))),void t.wa.delete(c);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await cc(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),a&&Ce(t.remoteStore,r.targetId),ac(t,r.targetId)}).catch(E0)):(ac(t,r.targetId),await cc(t.localStore,r.targetId,!0))}async function _A(e,c){const a=t1(e),t=a.wa.get(c),r=a.Sa.get(t.targetId);a.isPrimaryClient&&r.length===1&&(a.sharedClientState.removeLocalQueryTarget(t.targetId),Ce(a.remoteStore,t.targetId))}async function kA(e,c,a){const t=FA(e);try{const r=await function(i,o){const l=t1(i),u=F1.now(),d=o.reduce((V,R)=>V.add(R.key),f1());let v,g;return l.persistence.runTransaction("Locally write mutations","readwrite",V=>{let R=d3(),E=f1();return l.os.getEntries(V,d).next(k=>{R=k,R.forEach((S,I)=>{I.isValidDocument()||(E=E.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(V,R)).next(k=>{v=k;const S=[];for(const I of o){const B=Jx(I,v.get(I.key).overlayedDocument);B!=null&&S.push(new x4(I.key,B,ho(B.value.mapValue),h3.exists(!0)))}return l.mutationQueue.addMutationBatch(V,u,S,o)}).next(k=>{g=k;const S=k.applyToLocalDocumentSet(v,E);return l.documentOverlayCache.saveOverlays(V,k.batchId,S)})}).then(()=>({batchId:g.batchId,changes:wo(v)}))}(t.localStore,c);t.sharedClientState.addPendingMutation(r.batchId),function(i,o,l){let u=i.Fa[i.currentUser.toKey()];u||(u=new N1(p1)),u=u.insert(o,l),i.Fa[i.currentUser.toKey()]=u}(t,r.batchId,a),await F0(t,r.changes),await X5(t.remoteStore)}catch(r){const n=ye(r,"Failed to persist write");a.reject(n)}}async function rl(e,c){const a=t1(e);try{const t=await jS(a.localStore,c);c.targetChanges.forEach((r,n)=>{const i=a.Ca.get(n);i&&(M1(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?i.pa=!0:r.modifiedDocuments.size>0?M1(i.pa):r.removedDocuments.size>0&&(M1(i.pa),i.pa=!1))}),await F0(a,t,c)}catch(t){await E0(t)}}function zn(e,c,a){const t=t1(e);if(t.isPrimaryClient&&a===0||!t.isPrimaryClient&&a===1){const r=[];t.wa.forEach((n,i)=>{const o=i.view.G_(c);o.snapshot&&r.push(o.snapshot)}),function(i,o){const l=t1(i);l.onlineState=o;let u=!1;l.queries.forEach((d,v)=>{for(const g of v.Q_)g.G_(o)&&(u=!0)}),u&&xe(l)}(t.eventManager,c),r.length&&t.ya.u_(r),t.onlineState=c,t.isPrimaryClient&&t.sharedClientState.setOnlineState(c)}}async function TA(e,c,a){const t=t1(e);t.sharedClientState.updateQueryState(c,"rejected",a);const r=t.Ca.get(c),n=r&&r.key;if(n){let i=new N1(Z.comparator);i=i.insert(n,s2.newNoDocument(n,a1.min()));const o=f1().add(n),l=new Z5(a1.min(),new Map,new N1(p1),i,o);await rl(t,l),t.Da=t.Da.remove(n),t.Ca.delete(c),Se(t)}else await cc(t.localStore,c,!1).then(()=>ac(t,c,a)).catch(E0)}async function EA(e,c){const a=t1(e),t=c.batch.batchId;try{const r=await $S(a.localStore,c);il(a,t,null),nl(a,t),a.sharedClientState.updateMutationState(t,"acknowledged"),await F0(a,r)}catch(r){await E0(r)}}async function PA(e,c,a){const t=t1(e);try{const r=await function(i,o){const l=t1(i);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,o).next(v=>(M1(v!==null),d=v.keys(),l.mutationQueue.removeMutationBatch(u,v))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(t.localStore,c);il(t,c,a),nl(t,c),t.sharedClientState.updateMutationState(c,"rejected",a),await F0(t,r)}catch(r){await E0(r)}}function nl(e,c){(e.Ma.get(c)||[]).forEach(a=>{a.resolve()}),e.Ma.delete(c)}function il(e,c,a){const t=t1(e);let r=t.Fa[t.currentUser.toKey()];if(r){const n=r.get(c);n&&(a?n.reject(a):n.resolve(),r=r.remove(c)),t.Fa[t.currentUser.toKey()]=r}}function ac(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const t of e.Sa.get(c))e.wa.delete(t),a&&e.ya.La(t,a);e.Sa.delete(c),e.isPrimaryClient&&e.va.Vr(c).forEach(t=>{e.va.containsKey(t)||sl(e,t)})}function sl(e,c){e.ba.delete(c.path.canonicalString());const a=e.Da.get(c);a!==null&&(Ce(e.remoteStore,a),e.Da=e.Da.remove(c),e.Ca.delete(a),Se(e))}function gn(e,c,a){for(const t of a)t instanceof el?(e.va.addReference(t.key,c),IA(e,t)):t instanceof al?(D("SyncEngine","Document no longer in limbo: "+t.key),e.va.removeReference(t.key,c),e.va.containsKey(t.key)||sl(e,t.key)):c1()}function IA(e,c){const a=c.key,t=a.path.canonicalString();e.Da.get(a)||e.ba.has(t)||(D("SyncEngine","New document in limbo: "+a),e.ba.add(t),Se(e))}function Se(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const c=e.ba.values().next().value;e.ba.delete(c);const a=new Z(A1.fromString(c)),t=e.xa.next();e.Ca.set(t,new bA(a)),e.Da=e.Da.insert(a,t),Zo(e.remoteStore,new T3(c3(Vo(a.path)),t,"TargetPurposeLimboResolution",le._e))}}async function F0(e,c,a){const t=t1(e),r=[],n=[],i=[];t.wa.isEmpty()||(t.wa.forEach((o,l)=>{i.push(t.Na(l,c,a).then(u=>{if((u||a)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(l.targetId,u?.fromCache?"not-current":"current"),u){r.push(u);const d=Ve.Ki(l.targetId,u);n.push(d)}}))}),await Promise.all(i),t.ya.u_(r),await async function(l,u){const d=t1(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>y.forEach(u,g=>y.forEach(g.qi,V=>d.persistence.referenceDelegate.addReference(v,g.targetId,V)).next(()=>y.forEach(g.Qi,V=>d.persistence.referenceDelegate.removeReference(v,g.targetId,V)))))}catch(v){if(!P0(v))throw v;D("LocalStore","Failed to update sequence numbers: "+v)}for(const v of u){const g=v.targetId;if(!v.fromCache){const V=d.ns.get(g),R=V.snapshotVersion,E=V.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(g,E)}}}(t.localStore,n))}async function RA(e,c){const a=t1(e);if(!a.currentUser.isEqual(c)){D("SyncEngine","User change. New user:",c.toKey());const t=await jo(a.localStore,c);a.currentUser=c,function(n,i){n.Ma.forEach(o=>{o.forEach(l=>{l.reject(new W(A.CANCELLED,i))})}),n.Ma.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,t.removedBatchIds,t.addedBatchIds),await F0(a,t.us)}}function DA(e,c){const a=t1(e),t=a.Ca.get(c);if(t&&t.pa)return f1().add(t.key);{let r=f1();const n=a.Sa.get(c);if(!n)return r;for(const i of n){const o=a.wa.get(i);r=r.unionWith(o.view.Ia)}return r}}function ol(e){const c=t1(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=rl.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=DA.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=TA.bind(null,c),c.ya.u_=VA.bind(null,c.eventManager),c.ya.La=CA.bind(null,c.eventManager),c}function FA(e){const c=t1(e);return c.remoteStore.remoteSyncer.applySuccessfulWrite=EA.bind(null,c),c.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,c),c}class Hn{constructor(){this.synchronizeTabs=!1}async initialize(c){this.serializer=Q5(c.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(c),this.persistence=this.createPersistence(c),await this.persistence.start(),this.localStore=this.createLocalStore(c),this.gcScheduler=this.createGarbageCollectionScheduler(c,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(c,this.localStore)}createGarbageCollectionScheduler(c,a){return null}createIndexBackfillerScheduler(c,a){return null}createLocalStore(c){return US(this.persistence,new OS,c.initialUser,this.serializer)}createPersistence(c){return new DS(He.Hr,this.serializer)}createSharedClientState(c){return new QS}async terminate(){var c,a;(c=this.gcScheduler)===null||c===void 0||c.stop(),(a=this.indexBackfillerScheduler)===null||a===void 0||a.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BA{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>zn(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=RA.bind(null,this.syncEngine),await vA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return function(){return new zA}()}createDatastore(c){const a=Q5(c.databaseInfo.databaseId),t=function(n){return new cA(n)}(c.databaseInfo);return function(n,i,o,l){return new tA(n,i,o,l)}(c.authCredentials,c.appCheckCredentials,t,a)}createRemoteStore(c){return function(t,r,n,i,o){return new nA(t,r,n,i,o)}(this.localStore,this.datastore,c.asyncQueue,a=>zn(this.syncEngine,a,0),function(){return mn.D()?new mn:new YS}())}createSyncEngine(c,a){return function(r,n,i,o,l,u,d){const v=new yA(r,n,i,o,l,u);return d&&(v.Oa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}async terminate(){var c;await async function(t){const r=t1(t);D("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await D0(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore),(c=this.datastore)===null||c===void 0||c.terminate()}}/**
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
 */class OA{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.qa(this.observer.next,c)}error(c){this.observer.error?this.qa(this.observer.error,c):a3("Uncaught Error in snapshot listener:",c.toString())}Qa(){this.muted=!0}qa(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
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
 */class qA{constructor(c,a,t,r){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=t,this.databaseInfo=r,this.user=i2.UNAUTHENTICATED,this.clientId=lo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(t,async n=>{D("FirestoreClient","Received user=",n.uid),await this.authCredentialListener(n),this.user=n}),this.appCheckCredentials.start(t,n=>(D("FirestoreClient","Received new app check token=",n),this.appCheckCredentialListener(n,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new u3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const t=ye(a,"Failed to shutdown persistence");c.reject(t)}}),c.promise}}async function s9(e,c){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const a=e.configuration;await c.initialize(a);let t=a.initialUser;e.setCredentialChangeListener(async r=>{t.isEqual(r)||(await jo(c.localStore,r),t=r)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=c}async function Vn(e,c){e.asyncQueue.verifyOperationInProgress();const a=await $A(e);D("FirestoreClient","Initializing OnlineComponentProvider"),await c.initialize(a,e.configuration),e.setCredentialChangeListener(t=>dn(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>dn(c.remoteStore,r)),e._onlineComponents=c}function UA(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function $A(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await s9(e,e._uninitializedComponentsProvider._offline)}catch(c){const a=c;if(!UA(a))throw a;t6("Error using user provided cache. Falling back to memory cache: "+a),await s9(e,new Hn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await s9(e,new Hn);return e._offlineComponents}async function ll(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Vn(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Vn(e,new BA))),e._onlineComponents}function jA(e){return ll(e).then(c=>c.syncEngine)}async function GA(e){const c=await ll(e),a=c.eventManager;return a.onListen=xA.bind(null,c.syncEngine),a.onUnlisten=NA.bind(null,c.syncEngine),a.onFirstRemoteStoreListen=SA.bind(null,c.syncEngine),a.onLastRemoteStoreUnlisten=_A.bind(null,c.syncEngine),a}function WA(e,c,a={}){const t=new u3;return e.asyncQueue.enqueueAndForget(async()=>function(n,i,o,l,u){const d=new OA({next:g=>{i.enqueueAndForget(()=>HA(n,v)),g.fromCache&&l.source==="server"?u.reject(new W(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),v=new MA(o,d,{includeMetadataChanges:!0,ta:!0});return gA(n,v)}(await GA(e),e.asyncQueue,c,a,t)),t.promise}/**
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
 */function fl(e){const c={};return e.timeoutSeconds!==void 0&&(c.timeoutSeconds=e.timeoutSeconds),c}/**
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
 */const Cn=new Map;/**
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
 */function ul(e,c,a){if(!a)throw new W(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function KA(e,c,a,t){if(c===!0&&t===!0)throw new W(A.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function Mn(e){if(!Z.isDocumentKey(e))throw new W(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ln(e){if(Z.isDocumentKey(e))throw new W(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ae(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(t){return t.constructor?t.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":c1()}function g0(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new W(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=Ae(e);throw new W(A.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
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
 */class wn{constructor(c){var a,t;if(c.host===void 0){if(c.ssl!==void 0)throw new W(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,this.localCache=c.localCache,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new W(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}KA("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:c.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fl((t=c.experimentalLongPollingOptions)!==null&&t!==void 0?t:{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!c.useFetchStreams}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&function(t,r){return t.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,c.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}class J5{constructor(c,a,t,r){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=t,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new W(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wn(c),c.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new sx;switch(t.type){case"firstParty":return new ux(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new W(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){const t=Cn.get(a);t&&(D("ComponentProvider","Removing Datastore"),Cn.delete(a),t.terminate())}(this),Promise.resolve()}}function ZA(e,c,a,t={}){var r;const n=(e=g0(e,J5))._getSettings(),i=`${c}:${a}`;if(n.host!=="firestore.googleapis.com"&&n.host!==i&&t6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},n),{host:i,ssl:!1})),t.mockUserToken){let o,l;if(typeof t.mockUserToken=="string")o=t.mockUserToken,l=i2.MOCK_USER;else{o=Bw(t.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=t.mockUserToken.sub||t.mockUserToken.user_id;if(!u)throw new W(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new i2(u)}e._authCredentials=new ox(new oo(o,l))}}/**
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
 */class c7{constructor(c,a,t){this.converter=a,this._query=t,this.type="query",this.firestore=c}withConverter(c){return new c7(this.firestore,c,this._query)}}class P2{constructor(c,a,t){this.converter=a,this._key=t,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new D3(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new P2(this.firestore,c,this._key)}}class D3 extends c7{constructor(c,a,t){super(c,a,Vo(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new P2(this.firestore,null,new Z(c))}withConverter(c){return new D3(this.firestore,c,this._path)}}function QA(e,c,...a){if(e=e0(e),ul("collection","path",c),e instanceof J5){const t=A1.fromString(c,...a);return Ln(t),new D3(e,null,t)}{if(!(e instanceof P2||e instanceof D3))throw new W(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(A1.fromString(c,...a));return Ln(t),new D3(e.firestore,null,t)}}function YA(e,c,...a){if(e=e0(e),arguments.length===1&&(c=lo.newId()),ul("doc","path",c),e instanceof J5){const t=A1.fromString(c,...a);return Mn(t),new P2(e,null,new Z(t))}{if(!(e instanceof P2||e instanceof D3))throw new W(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(A1.fromString(c,...a));return Mn(t),new P2(e.firestore,e instanceof D3?e.converter:null,new Z(t))}}/**
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
 */class XA{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Wo(this,"async_queue_retry"),this.cu=()=>{const a=i9();a&&D("AsyncQueue","Visibility state changed to "+a.visibilityState),this.jo.Ko()};const c=i9();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.lu(),this.hu(c)}enterRestrictedMode(c){if(!this.iu){this.iu=!0,this.au=c||!1;const a=i9();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.cu)}}enqueue(c){if(this.lu(),this.iu)return new Promise(()=>{});const a=new u3;return this.hu(()=>this.iu&&this.au?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.ru.push(c),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(c){if(!P0(c))throw c;D("AsyncQueue","Operation failed with retryable error: "+c)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(c){const a=this.nu.then(()=>(this._u=!0,c().catch(t=>{this.ou=t,this._u=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(t);throw a3("INTERNAL UNHANDLED ERROR: ",r),t}).then(t=>(this._u=!1,t))));return this.nu=a,a}enqueueAfterDelay(c,a,t){this.lu(),this.uu.indexOf(c)>-1&&(a=0);const r=be.createAndSchedule(this,c,a,t,n=>this.Iu(n));return this.su.push(r),r}lu(){this.ou&&c1()}verifyOperationInProgress(){}async Tu(){let c;do c=this.nu,await c;while(c!==this.nu)}Eu(c){for(const a of this.su)if(a.timerId===c)return!0;return!1}du(c){return this.Tu().then(()=>{this.su.sort((a,t)=>a.targetTimeMs-t.targetTimeMs);for(const a of this.su)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Tu()})}Au(c){this.uu.push(c)}Iu(c){const a=this.su.indexOf(c);this.su.splice(a,1)}}class Ne extends J5{constructor(c,a,t,r){super(c,a,t,r),this.type="firestore",this._queue=function(){return new XA}(),this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||ml(this),this._firestoreClient.terminate()}}function JA(e,c){const a=typeof e=="object"?e:jb(),t=typeof e=="string"?e:c||"(default)",r=Ob(a,"firestore").getImmediate({identifier:t});if(!r._initialized){const n=Dw("firestore");n&&ZA(r,...n)}return r}function hl(e){return e._firestoreClient||ml(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ml(e){var c,a,t;const r=e._freezeSettings(),n=function(o,l,u,d){return new bx(o,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fl(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new qA(e._authCredentials,e._appCheckCredentials,e._queue,n),!((a=r.localCache)===null||a===void 0)&&a._offlineComponentProvider&&(!((t=r.localCache)===null||t===void 0)&&t._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class l6{constructor(c){this._byteString=c}static fromBase64String(c){try{return new l6(u2.fromBase64String(c))}catch(a){throw new W(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new l6(u2.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
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
 */class _e{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new W(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X1(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
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
 */class dl{constructor(c){this._methodName=c}}/**
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
 */class ke{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new W(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new W(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return p1(this._lat,c._lat)||p1(this._long,c._long)}}/**
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
 */const cN=/^__.*__$/;class eN{constructor(c,a,t){this.data=c,this.fieldMask=a,this.fieldTransforms=t}toMutation(c,a){return this.fieldMask!==null?new x4(c,this.data,this.fieldMask,a,this.fieldTransforms):new I0(c,this.data,a,this.fieldTransforms)}}function vl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw c1()}}class Te{constructor(c,a,t,r,n,i){this.settings=c,this.databaseId=a,this.serializer=t,this.ignoreUndefinedProperties=r,n===void 0&&this.Ru(),this.fieldTransforms=n||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(c){return new Te(Object.assign(Object.assign({},this.settings),c),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(c){var a;const t=(a=this.path)===null||a===void 0?void 0:a.child(c),r=this.mu({path:t,gu:!1});return r.pu(c),r}yu(c){var a;const t=(a=this.path)===null||a===void 0?void 0:a.child(c),r=this.mu({path:t,gu:!1});return r.Ru(),r}wu(c){return this.mu({path:void 0,gu:!0})}Su(c){return l5(c,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(c){return this.fieldMask.find(a=>c.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>c.isPrefixOf(a.field))!==void 0}Ru(){if(this.path)for(let c=0;c<this.path.length;c++)this.pu(this.path.get(c))}pu(c){if(c.length===0)throw this.Su("Document fields must not be empty");if(vl(this.Vu)&&cN.test(c))throw this.Su('Document fields cannot begin and end with "__"')}}class aN{constructor(c,a,t){this.databaseId=c,this.ignoreUndefinedProperties=a,this.serializer=t||Q5(c)}Cu(c,a,t,r=!1){return new Te({Vu:c,methodName:a,Du:t,path:X1.emptyPath(),gu:!1,bu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function tN(e){const c=e._freezeSettings(),a=Q5(e._databaseId);return new aN(e._databaseId,!!c.ignoreUndefinedProperties,a)}function rN(e,c,a,t,r,n={}){const i=e.Cu(n.merge||n.mergeFields?2:0,c,a,r);Hl("Data must be an object, but it was:",i,t);const o=zl(t,i);let l,u;if(n.merge)l=new F2(i.fieldMask),u=i.fieldTransforms;else if(n.mergeFields){const d=[];for(const v of n.mergeFields){const g=nN(c,v,a);if(!i.contains(g))throw new W(A.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);sN(d,g)||d.push(g)}l=new F2(d),u=i.fieldTransforms.filter(v=>l.covers(v.field))}else l=null,u=i.fieldTransforms;return new eN(new T2(o),l,u)}function pl(e,c){if(gl(e=e0(e)))return Hl("Unsupported field value:",c,e),zl(e,c);if(e instanceof dl)return function(t,r){if(!vl(r.Vu))throw r.Su(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Su(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(r);n&&r.fieldTransforms.push(n)}(e,c),null;if(e===void 0&&c.ignoreUndefinedProperties)return null;if(c.path&&c.fieldMask.push(c.path),e instanceof Array){if(c.settings.gu&&c.Vu!==4)throw c.Su("Nested arrays are not supported");return function(t,r){const n=[];let i=0;for(const o of t){let l=pl(o,r.wu(i));l==null&&(l={nullValue:"NULL_VALUE"}),n.push(l),i++}return{arrayValue:{values:n}}}(e,c)}return function(t,r){if((t=e0(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Wx(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const n=F1.fromDate(t);return{timestampValue:s5(r.serializer,n)}}if(t instanceof F1){const n=new F1(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:s5(r.serializer,n)}}if(t instanceof ke)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof l6)return{bytesValue:Do(r.serializer,t._byteString)};if(t instanceof P2){const n=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw r.Su(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ze(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.Su(`Unsupported field value: ${Ae(t)}`)}(e,c)}function zl(e,c){const a={};return fo(e)?c.path&&c.path.length>0&&c.fieldMask.push(c.path):p6(e,(t,r)=>{const n=pl(r,c.fu(t));n!=null&&(a[t]=n)}),{mapValue:{fields:a}}}function gl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof F1||e instanceof ke||e instanceof l6||e instanceof P2||e instanceof dl)}function Hl(e,c,a){if(!gl(a)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(a)){const t=Ae(a);throw t==="an object"?c.Su(e+" a custom object"):c.Su(e+" "+t)}}function nN(e,c,a){if((c=e0(c))instanceof _e)return c._internalPath;if(typeof c=="string")return Vl(e,c);throw l5("Field path arguments must be of type string or ",e,!1,void 0,a)}const iN=new RegExp("[~\\*/\\[\\]]");function Vl(e,c,a){if(c.search(iN)>=0)throw l5(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new _e(...c.split("."))._internalPath}catch{throw l5(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function l5(e,c,a,t,r){const n=t&&!t.isEmpty(),i=r!==void 0;let o=`Function ${c}() called with invalid data`;a&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(n||i)&&(l+=" (found",n&&(l+=` in field ${t}`),i&&(l+=` in document ${r}`),l+=")"),new W(A.INVALID_ARGUMENT,o+e+l)}function sN(e,c){return e.some(a=>a.isEqual(c))}/**
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
 */class Cl{constructor(c,a,t,r,n){this._firestore=c,this._userDataWriter=a,this._key=t,this._document=r,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new P2(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new oN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(Ml("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class oN extends Cl{data(){return super.data()}}function Ml(e,c){return typeof c=="string"?Vl(e,c):c instanceof _e?c._internalPath:c._delegate._internalPath}/**
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
 */function lN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new W(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fN{convertValue(c,a="none"){switch(C4(c)){case 0:return null;case 1:return c.booleanValue;case 2:return R1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(V4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw c1()}}convertObject(c,a){return this.convertObjectMap(c.fields,a)}convertObjectMap(c,a="none"){const t={};return p6(c,(r,n)=>{t[r]=this.convertValue(n,a)}),t}convertGeoPoint(c){return new ke(R1(c.latitude),R1(c.longitude))}convertArray(c,a){return(c.values||[]).map(t=>this.convertValue(t,a))}convertServerTimestamp(c,a){switch(a){case"previous":const t=ue(c);return t==null?null:this.convertValue(t,a);case"estimate":return this.convertTimestamp(m0(c));default:return null}}convertTimestamp(c){const a=O3(c);return new F1(a.seconds,a.nanos)}convertDocumentKey(c,a){const t=A1.fromString(c);M1($o(t));const r=new d0(t.get(1),t.get(3)),n=new Z(t.popFirst(5));return r.isEqual(a)||a3(`Document ${n} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),n}}/**
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
 */function uN(e,c,a){let t;return t=e?a&&(a.merge||a.mergeFields)?e.toFirestore(c,a):e.toFirestore(c):c,t}/**
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
 */class g8{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class hN extends Cl{constructor(c,a,t,r,n,i){super(c,a,t,r,i),this._firestore=c,this._firestoreImpl=c,this.metadata=n}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new R8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const t=this._document.data.field(Ml("DocumentSnapshot.get",c));if(t!==null)return this._userDataWriter.convertValue(t,a.serverTimestamps)}}}class R8 extends hN{data(c={}){return super.data(c)}}class mN{constructor(c,a,t,r){this._firestore=c,this._userDataWriter=a,this._snapshot=r,this.metadata=new g8(r.hasPendingWrites,r.fromCache),this.query=t}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(t=>{c.call(a,new R8(this._firestore,this._userDataWriter,t.key,t,new g8(this._snapshot.mutatedKeys.has(t.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new W(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(r,n){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const l=new R8(r._firestore,r._userDataWriter,o.doc.key,o.doc,new g8(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:l,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>n||o.type!==3).map(o=>{const l=new R8(r._firestore,r._userDataWriter,o.doc.key,o.doc,new g8(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),d=i.indexOf(o.doc.key)),{type:dN(o.type),doc:l,oldIndex:u,newIndex:d}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function dN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c1()}}class vN extends fN{constructor(c){super(),this.firestore=c}convertBytes(c){return new l6(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new P2(this.firestore,null,a)}}function pN(e){e=g0(e,c7);const c=g0(e.firestore,Ne),a=hl(c),t=new vN(c);return lN(e._query),WA(a,e._query).then(r=>new mN(c,t,e,r))}function zN(e,c,a){e=g0(e,P2);const t=g0(e.firestore,Ne),r=uN(e.converter,c,a);return gN(t,[rN(tN(t),"setDoc",e._key,r,e.converter!==null,a).toMutation(e._key,h3.none())])}function gN(e,c){return function(t,r){const n=new u3;return t.asyncQueue.enqueueAndForget(async()=>kA(await jA(t),r,n)),n.promise}(hl(e),c)}(function(c,a=!0){(function(r){v6=r})($b),Z8(new a0("firestore",(t,{instanceIdentifier:r,options:n})=>{const i=t.getProvider("app").getImmediate(),o=new Ne(new lx(t.getProvider("auth-internal")),new mx(t.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new d0(u.options.projectId,d)}(i,r),i);return n=Object.assign({useFetchStreams:a},n),o._setSettings(n),o},"PUBLIC").setMultipleInstances(!0)),Z4(Ur,"4.5.0",c),Z4(Ur,"4.5.0","esm2017")})();async function bn(e){return new Promise((c,a)=>{const t=[];pN(QA(e,"agents")).then(r=>{r.forEach(n=>{const i={id:n.id,dept:n.data().dept,college:n.data().college,collegeFullName:n.data().collegeFullName,agent:n.data().agent,agentExt:n.data().agentExt,agentEmail:n.data().agentEmail,curriAgent:n.data().curriAgent,curriAgentExt:n.data().curriAgentExt,curriAgentEmail:n.data().curriAgentEmail};t.push(i)}),c(t)}).catch(r=>{a(r)})})}async function HN(e,c,a){return console.log("addAgent start..."),console.log(c),await zN(YA(e,"agents",a),{dept:c.dept,college:c.college,collegeFullName:c.collegeFullName,dept:c.dept,deptFullName:c.deptFullName,agent:c.agent,agentExt:c.agentExt,agentEmail:c.agentEmail,curriAgent:c.curriAgent,curriAgentExt:c.curriAgentExt,curriAgentEmail:c.curriAgentEmail},{merge:!0}),"add success"}const VN={apiKey:"AIzaSyBcRGOGcrY0bJgEw8Gp3rm5zq0cdLfRzAE",authDomain:"profound-iris-418105.firebaseapp.com",projectId:"profound-iris-418105",storageBucket:"profound-iris-418105.appspot.com",messagingSenderId:"168929492497",appId:"1:168929492497:web:3dd54b20d88a067f02bbb0",measurementId:"G-KQP85TR1FB"};var CN="firebase",MN="10.9.0";/**
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
 */Z4(CN,MN,"app");const LN=(e,c)=>{const a=e.__vccOpts||e;for(const[t,r]of c)a[t]=r;return a},wN=as(VN),o9=JA(wN),bN={created(){},mounted(){document.getElementById("curriAgentExt").placeholder="請選擇課務組承辦人",document.getElementById("curriAgentEmail").placeholder="請選擇課務組承辦人",document.getElementById("curriAgentExt").disabled=!0,document.getElementById("curriAgentEmail").disabled=!0},data(){return{validations:{college:{text:"尚未輸入",isShow:!1,isCorrect:!1},collegeFullName:{text:"尚未輸入",isShow:!1,isCorrect:!1},dept:{text:"尚未輸入",isShow:!1,isCorrect:!1},deptFullName:{text:"尚未輸入",isShow:!1,isCorrect:!1},agent:{text:"尚未輸入",isShow:!1,isCorrect:!1},agentExt:{text:"尚未輸入",isShow:!1,isCorrect:!1},agentEmail:{text:"尚未輸入",isShow:!1,isCorrect:!1},curriAgent:{text:"尚未輸入",isShow:!1,isCorrect:!1},curriAgentExt:{text:"尚未輸入",isShow:!1,isCorrect:!1},curriAgentEmail:{text:"尚未輸入",isShow:!1,isCorrect:!1}},showValidation:{},dataFields:{college:"學院",collegeFullName:"學院全名",dept:"系所",deptFullName:"系所全名",agent:"系辦助理",agentExt:"系辦助理分機",agentEmail:"系辦助理email",curriAgent:"課務組承辦人",curriAgentExt:"課務組承辦人分機",curriAgentEmail:"課務組承辦人email"},selectedOption:"",curriAgentOptions:[{name:"鍾博凱",value:0,disabled:!1,ext:"#5626",email:"s26153@cc.ncue.edu.tw"},{name:"黃思嘉",value:1,disabled:!1,ext:"#5622",email:"loria@cc.ncue.edu.tw"},{name:"黃嘉玲",value:2,disabled:!1,ext:"#5623",email:"chialing@cc.ncue.edu.tw"},{name:"范豈瑗",value:3,disabled:!1,ext:"#5624",email:"ang3188@cc.ncue.edu.tw"}]}},computed:{},methods:{validateInput(e,c){this.validations[c].isShow=e.target.value!=="";const a=/^[\u4E00-\u9FA5]+$/,t=/^\d{4}$/,r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;["college","collegeFullName","dept","deptFullName","agent"].includes(c)?a.test(e.target.value)?this.validations[c].isCorrect=!0:(this.validations[c].isCorrect=!1,this.validations[c].text="格式錯誤，限輸入中文"):c.includes("agentExt")?t.test(e.target.value)?this.validations[c].isCorrect=!0:(this.validations[c].isCorrect=!1,this.validations[c].text="格式錯誤，限輸入4位數數字"):c.includes("agentEmail")&&(r.test(e.target.value)?this.validations[c].isCorrect=!0:(this.validations[c].isCorrect=!1,this.validations[c].text="email格式錯誤，範例：example@gmail.com"))},curriAgentOnChange(){document.getElementById("curriAgentExt").value=this.curriAgentOptions[this.selectedOption].ext,document.getElementById("curriAgentEmail").value=this.curriAgentOptions[this.selectedOption].email,this.validations.curriAgent.isCorrect=!0,this.validations.curriAgentExt.isCorrect=!0,this.validations.curriAgentEmail.isCorrect=!0},async show(){bn(o9).then(e=>{console.log("取得使用者資料成功：",e);const a=`目前資料庫中共有${e.length}位使用者。`;console.log(a)}).catch(e=>{console.error("取得使用者資料失敗：",e)})},getInputs(){const e=[];for(let c=0;c<this.$refs.inputs.length;c++)console.log(this.$refs.inputs[c].value),e.push(this.$refs.inputs[c].value);return e},btnClear(){for(let e=0;e<this.$refs.inputs.length;e++)this.$refs.inputs[e].value="";this.selectedOption="",Object.keys(this.validations).forEach(e=>(this.validations[e].isShow=!1,this.validations[e].isCorrect=!1))},btnSubmitClick(){const e=this.getInputs(),c=Object.values(this.validations).every(({isCorrect:t})=>t);console.log("allCorrect="+c);const a={};for(const t in this.validations)this.validations.hasOwnProperty(t)&&(a[t]=this.validations[t].isCorrect);if(console.log("isCorrectValues",a),c){const t={college:e[0],collegeFullName:e[1],dept:e[2],deptFullName:e[3],agent:e[4],agentExt:"#"+e[5],agentEmail:e[6],curriAgent:this.curriAgentOptions[this.selectedOption].name,curriAgentExt:e[7],curriAgentEmail:e[8]};console.log("上傳前的資料：",t),l8.fire({title:"確認上傳資料",text:e+","+this.curriAgentOptions[this.selectedOption].name,showDenyButton:!0,showCancelButton:!0,confirmButtonText:"送出",cancelButtonText:"返回編輯",denyButtonText:"取消並清除"}).then(r=>{r.isConfirmed?(bn(o9).then(n=>{console.log("取得使用者資料成功：",n),console.log("取得使用者資料成功：",n.length.toString()),HN(o9,t,(n.length+1).toString())}).catch(n=>{console.error("取得使用者資料失敗：",n)}),l8.fire("資料已送出","","success")):r.isDenied&&(l8.fire("欄位已重置","","info"),this.clearInputs())})}else l8.fire("資料有誤","請重新檢查","error")}}},yN=e=>(KM("data-v-5ed82dd3"),e=e(),ZM(),e),xN={id:"outer",class:"my-20 flex items-center justify-center"},SN={id:"inner",class:"w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/3 text-center"},AN={class:"w-full mx-auto bg-white p-8 rounded form-shadow"},NN=yN(()=>n2("h2",{class:"text-2xl font-semibold mb-6"},"登記資料",-1)),_N={class:"md:w-1/4 flex flex-col align-items: flex-end;",id:"leftform"},kN=["for"],TN={class:"mr-1"},EN={class:"text-red-500 text-sm italic mt-1"},PN={class:"md:w-3/4 flex flex-col",id:"rightform"},IN=["id"],RN=["value"],DN=["id","placeholder","onInput"],FN={class:"flex items-center justify-around mt-4"};function BN(e,c,a,t,r,n){return e4(),a4("div",xN,[n2("div",SN,[n2("form",AN,[NN,(e4(!0),a4(_2,null,Qt(r.dataFields,(i,o,l)=>(e4(),a4("div",{class:"mb-4 flex flex-col md:flex-row md:items-center",key:l},[n2("div",_N,[n2("label",{class:"text-gray-700 text-sm font-bold mb-1 flex-shrink-0 md:text-right md:mb-0",for:o},[n2("span",TN,P7(i),1)],8,kN),F7(n2("span",EN," ",512),[[fr,r.validations[o].isShow&&!r.validations[o].isCorrect]])]),n2("div",PN,[o==="curriAgent"?F7((e4(),a4("select",{key:0,class:"shadow border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:o,"onUpdate:modelValue":c[0]||(c[0]=u=>r.selectedOption=u),onChange:c[1]||(c[1]=u=>n.curriAgentOnChange(u))},[(e4(!0),a4(_2,null,Qt(r.curriAgentOptions,(u,d)=>(e4(),a4("option",{key:d,value:u.value},P7(u.name),9,RN))),128))],40,IN)),[[Cw,r.selectedOption]]):(e4(),a4(_2,{key:1},[n2("input",{class:"shadow appearance-none border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:o,type:"text",placeholder:"請輸入"+i,ref_for:!0,ref:"inputs",onInput:u=>n.validateInput(u,o)},null,40,DN),F7(n2("span",{class:"text-red-500 text-sm italic mt-1 text-left"},P7(r.validations[o].text),513),[[fr,r.validations[o].isShow&&!r.validations[o].isCorrect]])],64))])]))),128)),n2("div",FN,[n2("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:c[2]||(c[2]=(...i)=>n.btnSubmitClick&&n.btnSubmitClick(...i))}," 登記 "),n2("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:c[3]||(c[3]=(...i)=>n.show&&n.show(...i))}," show agents in console "),n2("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:c[4]||(c[4]=(...i)=>n.btnClear&&n.btnClear(...i))}," 清除 ")])])])])}const ON=LN(bN,[["render",BN],["__scopeId","data-v-5ed82dd3"]]);function yn(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function U(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?yn(Object(a),!0).forEach(function(t){O1(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):yn(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f5(e){"@babel/helpers - typeof";return f5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},f5(e)}function qN(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function xn(e,c){for(var a=0;a<c.length;a++){var t=c[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function UN(e,c,a){return c&&xn(e.prototype,c),a&&xn(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function O1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Ee(e,c){return jN(e)||WN(e,c)||Ll(e,c)||ZN()}function B0(e){return $N(e)||GN(e)||Ll(e)||KN()}function $N(e){if(Array.isArray(e))return tc(e)}function jN(e){if(Array.isArray(e))return e}function GN(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WN(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var t=[],r=!0,n=!1,i,o;try{for(a=a.call(e);!(r=(i=a.next()).done)&&(t.push(i.value),!(c&&t.length===c));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&a.return!=null&&a.return()}finally{if(n)throw o}}return t}}function Ll(e,c){if(e){if(typeof e=="string")return tc(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return tc(e,c)}}function tc(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,t=new Array(c);a<c;a++)t[a]=e[a];return t}function KN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sn=function(){},Pe={},wl={},bl=null,yl={mark:Sn,measure:Sn};try{typeof window<"u"&&(Pe=window),typeof document<"u"&&(wl=document),typeof MutationObserver<"u"&&(bl=MutationObserver),typeof performance<"u"&&(yl=performance)}catch{}var QN=Pe.navigator||{},An=QN.userAgent,Nn=An===void 0?"":An,U3=Pe,S1=wl,_n=bl,H8=yl;U3.document;var H3=!!S1.documentElement&&!!S1.head&&typeof S1.addEventListener=="function"&&typeof S1.createElement=="function",xl=~Nn.indexOf("MSIE")||~Nn.indexOf("Trident/"),V8,C8,M8,L8,w8,v3="___FONT_AWESOME___",rc=16,Sl="fa",Al="svg-inline--fa",M4="data-fa-i2svg",nc="data-fa-pseudo-element",YN="data-fa-pseudo-element-pending",Ie="data-prefix",Re="data-icon",kn="fontawesome-i2svg",XN="async",JN=["HTML","HEAD","STYLE","SCRIPT"],Nl=function(){try{return!0}catch{return!1}}(),y1="classic",k1="sharp",De=[y1,k1];function O0(e){return new Proxy(e,{get:function(a,t){return t in a?a[t]:a[y1]}})}var H0=O0((V8={},O1(V8,y1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O1(V8,k1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),V8)),V0=O0((C8={},O1(C8,y1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O1(C8,k1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),C8)),C0=O0((M8={},O1(M8,y1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O1(M8,k1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),M8)),c_=O0((L8={},O1(L8,y1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O1(L8,k1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),L8)),e_=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_l="fa-layers-text",a_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,t_=O0((w8={},O1(w8,y1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O1(w8,k1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),w8)),kl=[1,2,3,4,5,6,7,8,9,10],r_=kl.concat([11,12,13,14,15,16,17,18,19,20]),n_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},M0=new Set;Object.keys(V0[y1]).map(M0.add.bind(M0));Object.keys(V0[k1]).map(M0.add.bind(M0));var i_=[].concat(De,B0(M0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",h4.GROUP,h4.SWAP_OPACITY,h4.PRIMARY,h4.SECONDARY]).concat(kl.map(function(e){return"".concat(e,"x")})).concat(r_.map(function(e){return"w-".concat(e)})),K6=U3.FontAwesomeConfig||{};function s_(e){var c=S1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function o_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(S1&&typeof S1.querySelector=="function"){var l_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];l_.forEach(function(e){var c=Ee(e,2),a=c[0],t=c[1],r=o_(s_(a));r!=null&&(K6[t]=r)})}var Tl={styleDefault:"solid",familyDefault:"classic",cssPrefix:Sl,replacementClass:Al,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K6.familyPrefix&&(K6.cssPrefix=K6.familyPrefix);var f6=U(U({},Tl),K6);f6.autoReplaceSvg||(f6.observeMutations=!1);var j={};Object.keys(Tl).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(a){f6[e]=a,Z6.forEach(function(t){return t(j)})},get:function(){return f6[e]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(c){f6.cssPrefix=c,Z6.forEach(function(a){return a(j)})},get:function(){return f6.cssPrefix}});U3.FontAwesomeConfig=j;var Z6=[];function f_(e){return Z6.push(e),function(){Z6.splice(Z6.indexOf(e),1)}}var A3=rc,J2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u_(e){if(!(!e||!H3)){var c=S1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=S1.head.childNodes,t=null,r=a.length-1;r>-1;r--){var n=a[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=n)}return S1.head.insertBefore(c,t),e}}var h_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function L0(){for(var e=12,c="";e-- >0;)c+=h_[Math.random()*62|0];return c}function H6(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function Fe(e){return e.classList?H6(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function El(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m_(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(El(e[a]),'" ')},"").trim()}function e7(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Be(e){return e.size!==J2.size||e.x!==J2.x||e.y!==J2.y||e.rotate!==J2.rotate||e.flipX||e.flipY}function d_(e){var c=e.transform,a=e.containerWidth,t=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),l={transform:"".concat(n," ").concat(i," ").concat(o)},u={transform:"translate(".concat(t/2*-1," -256)")};return{outer:r,inner:l,path:u}}function v_(e){var c=e.transform,a=e.width,t=a===void 0?rc:a,r=e.height,n=r===void 0?rc:r,i=e.startCentered,o=i===void 0?!1:i,l="";return o&&xl?l+="translate(".concat(c.x/A3-t/2,"em, ").concat(c.y/A3-n/2,"em) "):o?l+="translate(calc(-50% + ".concat(c.x/A3,"em), calc(-50% + ").concat(c.y/A3,"em)) "):l+="translate(".concat(c.x/A3,"em, ").concat(c.y/A3,"em) "),l+="scale(".concat(c.size/A3*(c.flipX?-1:1),", ").concat(c.size/A3*(c.flipY?-1:1),") "),l+="rotate(".concat(c.rotate,"deg) "),l}var p_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pl(){var e=Sl,c=Al,a=j.cssPrefix,t=j.replacementClass,r=p_;if(a!==e||t!==c){var n=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(t))}return r}var Tn=!1;function l9(){j.autoAddCss&&!Tn&&(u_(Pl()),Tn=!0)}var z_={mixout:function(){return{dom:{css:Pl,insertCss:l9}}},hooks:function(){return{beforeDOMElementCreation:function(){l9()},beforeI2svg:function(){l9()}}}},p3=U3||{};p3[v3]||(p3[v3]={});p3[v3].styles||(p3[v3].styles={});p3[v3].hooks||(p3[v3].hooks={});p3[v3].shims||(p3[v3].shims=[]);var B2=p3[v3],Il=[],g_=function e(){S1.removeEventListener("DOMContentLoaded",e),u5=1,Il.map(function(c){return c()})},u5=!1;H3&&(u5=(S1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S1.readyState),u5||S1.addEventListener("DOMContentLoaded",g_));function H_(e){H3&&(u5?setTimeout(e,0):Il.push(e))}function q0(e){var c=e.tag,a=e.attributes,t=a===void 0?{}:a,r=e.children,n=r===void 0?[]:r;return typeof e=="string"?El(e):"<".concat(c," ").concat(m_(t),">").concat(n.map(q0).join(""),"</").concat(c,">")}function En(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var V_=function(c,a){return function(t,r,n,i){return c.call(a,t,r,n,i)}},f9=function(c,a,t,r){var n=Object.keys(c),i=n.length,o=r!==void 0?V_(a,r):a,l,u,d;for(t===void 0?(l=1,d=c[n[0]]):(l=0,d=t);l<i;l++)u=n[l],d=o(d,c[u],u,c);return d};function C_(e){for(var c=[],a=0,t=e.length;a<t;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<t){var n=e.charCodeAt(a++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),a--)}else c.push(r)}return c}function ic(e){var c=C_(e);return c.length===1?c[0].toString(16):null}function M_(e,c){var a=e.length,t=e.charCodeAt(c),r;return t>=55296&&t<=56319&&a>c+1&&(r=e.charCodeAt(c+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function Pn(e){return Object.keys(e).reduce(function(c,a){var t=e[a],r=!!t.icon;return r?c[t.iconName]=t.icon:c[a]=t,c},{})}function sc(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=a.skipHooks,r=t===void 0?!1:t,n=Pn(c);typeof B2.hooks.addPack=="function"&&!r?B2.hooks.addPack(e,Pn(c)):B2.styles[e]=U(U({},B2.styles[e]||{}),n),e==="fas"&&sc("fa",c)}var b8,y8,x8,U4=B2.styles,L_=B2.shims,w_=(b8={},O1(b8,y1,Object.values(C0[y1])),O1(b8,k1,Object.values(C0[k1])),b8),Oe=null,Rl={},Dl={},Fl={},Bl={},Ol={},b_=(y8={},O1(y8,y1,Object.keys(H0[y1])),O1(y8,k1,Object.keys(H0[k1])),y8);function y_(e){return~i_.indexOf(e)}function x_(e,c){var a=c.split("-"),t=a[0],r=a.slice(1).join("-");return t===e&&r!==""&&!y_(r)?r:null}var ql=function(){var c=function(n){return f9(U4,function(i,o,l){return i[l]=f9(o,n,{}),i},{})};Rl=c(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var o=n[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=i})}return r}),Dl=c(function(r,n,i){if(r[i]=i,n[2]){var o=n[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=i})}return r}),Ol=c(function(r,n,i){var o=n[2];return r[i]=i,o.forEach(function(l){r[l]=i}),r});var a="far"in U4||j.autoFetchSvg,t=f9(L_,function(r,n){var i=n[0],o=n[1],l=n[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Fl=t.names,Bl=t.unicodes,Oe=a7(j.styleDefault,{family:j.familyDefault})};f_(function(e){Oe=a7(e.styleDefault,{family:j.familyDefault})});ql();function qe(e,c){return(Rl[e]||{})[c]}function S_(e,c){return(Dl[e]||{})[c]}function m4(e,c){return(Ol[e]||{})[c]}function Ul(e){return Fl[e]||{prefix:null,iconName:null}}function A_(e){var c=Bl[e],a=qe("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function $3(){return Oe}var Ue=function(){return{prefix:null,iconName:null,rest:[]}};function a7(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,t=a===void 0?y1:a,r=H0[t][e],n=V0[t][e]||V0[t][r],i=e in B2.styles?e:null;return n||i||null}var In=(x8={},O1(x8,y1,Object.keys(C0[y1])),O1(x8,k1,Object.keys(C0[k1])),x8);function t7(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=(c={},O1(c,y1,"".concat(j.cssPrefix,"-").concat(y1)),O1(c,k1,"".concat(j.cssPrefix,"-").concat(k1)),c),i=null,o=y1;(e.includes(n[y1])||e.some(function(u){return In[y1].includes(u)}))&&(o=y1),(e.includes(n[k1])||e.some(function(u){return In[k1].includes(u)}))&&(o=k1);var l=e.reduce(function(u,d){var v=x_(j.cssPrefix,d);if(U4[d]?(d=w_[o].includes(d)?c_[o][d]:d,i=d,u.prefix=d):b_[o].indexOf(d)>-1?(i=d,u.prefix=a7(d,{family:o})):v?u.iconName=v:d!==j.replacementClass&&d!==n[y1]&&d!==n[k1]&&u.rest.push(d),!r&&u.prefix&&u.iconName){var g=i==="fa"?Ul(u.iconName):{},V=m4(u.prefix,u.iconName);g.prefix&&(i=null),u.iconName=g.iconName||V||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!U4.far&&U4.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},Ue());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===k1&&(U4.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=m4(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=$3()||"fas"),l}var N_=function(){function e(){qN(this,e),this.definitions={}}return UN(e,[{key:"add",value:function(){for(var a=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=U(U({},a.definitions[o]||{}),i[o]),sc(o,i[o]);var l=C0[y1][o];l&&sc(l,i[o]),ql()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(n){var i=r[n],o=i.prefix,l=i.iconName,u=i.icon,d=u[2];a[o]||(a[o]={}),d.length>0&&d.forEach(function(v){typeof v=="string"&&(a[o][v]=u)}),a[o][l]=u}),a}}]),e}(),Rn=[],$4={},J4={},__=Object.keys(J4);function k_(e,c){var a=c.mixoutsTo;return Rn=e,$4={},Object.keys(J4).forEach(function(t){__.indexOf(t)===-1&&delete J4[t]}),Rn.forEach(function(t){var r=t.mixout?t.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),f5(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=r[i][o]})}),t.hooks){var n=t.hooks();Object.keys(n).forEach(function(i){$4[i]||($4[i]=[]),$4[i].push(n[i])})}t.provides&&t.provides(J4)}),a}function oc(e,c){for(var a=arguments.length,t=new Array(a>2?a-2:0),r=2;r<a;r++)t[r-2]=arguments[r];var n=$4[e]||[];return n.forEach(function(i){c=i.apply(null,[c].concat(t))}),c}function L4(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),t=1;t<c;t++)a[t-1]=arguments[t];var r=$4[e]||[];r.forEach(function(n){n.apply(null,a)})}function z3(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return J4[e]?J4[e].apply(null,c):void 0}function lc(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||$3();if(c)return c=m4(a,c)||c,En($l.definitions,a,c)||En(B2.styles,a,c)}var $l=new N_,T_=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,L4("noAuto")},E_={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H3?(L4("beforeI2svg",c),z3("pseudoElements2svg",c),z3("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,H_(function(){I_({autoReplaceSvgRoot:a}),L4("watch",c)})}},P_={icon:function(c){if(c===null)return null;if(f5(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:m4(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=a7(c[0]);return{prefix:t,iconName:m4(t,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(j.cssPrefix,"-"))>-1||c.match(e_))){var r=t7(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||$3(),iconName:m4(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=$3();return{prefix:n,iconName:m4(n,c)||c}}}},y2={noAuto:T_,config:j,dom:E_,parse:P_,library:$l,findIconDefinition:lc,toHtml:q0},I_=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,t=a===void 0?S1:a;(Object.keys(B2.styles).length>0||j.autoFetchSvg)&&H3&&j.autoReplaceSvg&&y2.dom.i2svg({node:t})};function r7(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return q0(t)})}}),Object.defineProperty(e,"node",{get:function(){if(H3){var t=S1.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function R_(e){var c=e.children,a=e.main,t=e.mask,r=e.attributes,n=e.styles,i=e.transform;if(Be(i)&&a.found&&!t.found){var o=a.width,l=a.height,u={x:o/l/2,y:.5};r.style=e7(U(U({},n),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function D_(e){var c=e.prefix,a=e.iconName,t=e.children,r=e.attributes,n=e.symbol,i=n===!0?"".concat(c,"-").concat(j.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},r),{},{id:i}),children:t}]}]}function $e(e){var c=e.icons,a=c.main,t=c.mask,r=e.prefix,n=e.iconName,i=e.transform,o=e.symbol,l=e.title,u=e.maskId,d=e.titleId,v=e.extra,g=e.watchable,V=g===void 0?!1:g,R=t.found?t:a,E=R.width,k=R.height,S=r==="fak",I=[j.replacementClass,n?"".concat(j.cssPrefix,"-").concat(n):""].filter(function(a2){return v.classes.indexOf(a2)===-1}).filter(function(a2){return a2!==""||!!a2}).concat(v.classes).join(" "),B={children:[],attributes:U(U({},v.attributes),{},{"data-prefix":r,"data-icon":n,class:I,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})},Q=S&&!~v.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};V&&(B.attributes[M4]=""),l&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(d||L0())},children:[l]}),delete B.attributes.title);var r1=U(U({},B),{},{prefix:r,iconName:n,main:a,mask:t,maskId:u,transform:i,symbol:o,styles:U(U({},Q),v.styles)}),Y=t.found&&a.found?z3("generateAbstractMask",r1)||{children:[],attributes:{}}:z3("generateAbstractIcon",r1)||{children:[],attributes:{}},H1=Y.children,W1=Y.attributes;return r1.children=H1,r1.attributes=W1,o?D_(r1):R_(r1)}function Dn(e){var c=e.content,a=e.width,t=e.height,r=e.transform,n=e.title,i=e.extra,o=e.watchable,l=o===void 0?!1:o,u=U(U(U({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});l&&(u[M4]="");var d=U({},i.styles);Be(r)&&(d.transform=v_({transform:r,startCentered:!0,width:a,height:t}),d["-webkit-transform"]=d.transform);var v=e7(d);v.length>0&&(u.style=v);var g=[];return g.push({tag:"span",attributes:u,children:[c]}),n&&g.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),g}function F_(e){var c=e.content,a=e.title,t=e.extra,r=U(U(U({},t.attributes),a?{title:a}:{}),{},{class:t.classes.join(" ")}),n=e7(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[c]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var u9=B2.styles;function fc(e){var c=e[0],a=e[1],t=e.slice(4),r=Ee(t,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(h4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(h4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(h4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:a,icon:i}}var B_={found:!1,width:512,height:512};function O_(e,c){!Nl&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function uc(e,c){var a=c;return c==="fa"&&j.styleDefault!==null&&(c=$3()),new Promise(function(t,r){if(z3("missingIconAbstract"),a==="fa"){var n=Ul(e)||{};e=n.iconName||e,c=n.prefix||c}if(e&&c&&u9[c]&&u9[c][e]){var i=u9[c][e];return t(fc(i))}O_(e,c),t(U(U({},B_),{},{icon:j.showMissingIcons&&e?z3("missingIconAbstract")||{}:{}}))})}var Fn=function(){},hc=j.measurePerformance&&H8&&H8.mark&&H8.measure?H8:{mark:Fn,measure:Fn},R6='FA "6.5.2"',q_=function(c){return hc.mark("".concat(R6," ").concat(c," begins")),function(){return jl(c)}},jl=function(c){hc.mark("".concat(R6," ").concat(c," ends")),hc.measure("".concat(R6," ").concat(c),"".concat(R6," ").concat(c," begins"),"".concat(R6," ").concat(c," ends"))},je={begin:q_,end:jl},D8=function(){};function Bn(e){var c=e.getAttribute?e.getAttribute(M4):null;return typeof c=="string"}function U_(e){var c=e.getAttribute?e.getAttribute(Ie):null,a=e.getAttribute?e.getAttribute(Re):null;return c&&a}function $_(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function j_(){if(j.autoReplaceSvg===!0)return F8.replace;var e=F8[j.autoReplaceSvg];return e||F8.replace}function G_(e){return S1.createElementNS("http://www.w3.org/2000/svg",e)}function W_(e){return S1.createElement(e)}function Gl(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,t=a===void 0?e.tag==="svg"?G_:W_:a;if(typeof e=="string")return S1.createTextNode(e);var r=t(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var n=e.children||[];return n.forEach(function(i){r.appendChild(Gl(i,{ceFn:t}))}),r}function K_(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var F8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(r){a.parentNode.insertBefore(Gl(r),a)}),a.getAttribute(M4)===null&&j.keepOriginalSource){var t=S1.createComment(K_(a));a.parentNode.replaceChild(t,a)}else a.remove()},nest:function(c){var a=c[0],t=c[1];if(~Fe(a).indexOf(j.replacementClass))return F8.replace(c);var r=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var n=t[0].attributes.class.split(" ").reduce(function(o,l){return l===j.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});t[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var i=t.map(function(o){return q0(o)}).join(`
`);a.setAttribute(M4,""),a.innerHTML=i}};function On(e){e()}function Wl(e,c){var a=typeof c=="function"?c:D8;if(e.length===0)a();else{var t=On;j.mutateApproach===XN&&(t=U3.requestAnimationFrame||On),t(function(){var r=j_(),n=je.begin("mutate");e.map(r),n(),a()})}}var Ge=!1;function Kl(){Ge=!0}function mc(){Ge=!1}var h5=null;function qn(e){if(_n&&j.observeMutations){var c=e.treeCallback,a=c===void 0?D8:c,t=e.nodeCallback,r=t===void 0?D8:t,n=e.pseudoElementsCallback,i=n===void 0?D8:n,o=e.observeMutationsRoot,l=o===void 0?S1:o;h5=new _n(function(u){if(!Ge){var d=$3();H6(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!Bn(v.addedNodes[0])&&(j.searchPseudoElements&&i(v.target),a(v.target)),v.type==="attributes"&&v.target.parentNode&&j.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&Bn(v.target)&&~n_.indexOf(v.attributeName))if(v.attributeName==="class"&&U_(v.target)){var g=t7(Fe(v.target)),V=g.prefix,R=g.iconName;v.target.setAttribute(Ie,V||d),R&&v.target.setAttribute(Re,R)}else $_(v.target)&&r(v.target)})}}),H3&&h5.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Z_(){h5&&h5.disconnect()}function Q_(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(t,r){var n=r.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(t[i]=o.join(":").trim()),t},{})),a}function Y_(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",r=t7(Fe(e));return r.prefix||(r.prefix=$3()),c&&a&&(r.prefix=c,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&t.length>0&&(r.iconName=S_(r.prefix,e.innerText)||qe(r.prefix,ic(e.innerText))),!r.iconName&&j.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function X_(e){var c=H6(e.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),a=e.getAttribute("title"),t=e.getAttribute("data-fa-title-id");return j.autoA11y&&(a?c["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(t||L0()):(c["aria-hidden"]="true",c.focusable="false")),c}function J_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Un(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Y_(e),t=a.iconName,r=a.prefix,n=a.rest,i=X_(e),o=oc("parseNodeAttributes",{},e),l=c.styleParser?Q_(e):[];return U({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:J2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:l,attributes:i}},o)}var ck=B2.styles;function Zl(e){var c=j.autoReplaceSvg==="nest"?Un(e,{styleParser:!1}):Un(e);return~c.extra.classes.indexOf(_l)?z3("generateLayersText",e,c):z3("generateSvgReplacementMutation",e,c)}var j3=new Set;De.map(function(e){j3.add("fa-".concat(e))});Object.keys(H0[y1]).map(j3.add.bind(j3));Object.keys(H0[k1]).map(j3.add.bind(j3));j3=B0(j3);function $n(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H3)return Promise.resolve();var a=S1.documentElement.classList,t=function(v){return a.add("".concat(kn,"-").concat(v))},r=function(v){return a.remove("".concat(kn,"-").concat(v))},n=j.autoFetchSvg?j3:De.map(function(d){return"fa-".concat(d)}).concat(Object.keys(ck));n.includes("fa")||n.push("fa");var i=[".".concat(_l,":not([").concat(M4,"])")].concat(n.map(function(d){return".".concat(d,":not([").concat(M4,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=H6(e.querySelectorAll(i))}catch{}if(o.length>0)t("pending"),r("complete");else return Promise.resolve();var l=je.begin("onTree"),u=o.reduce(function(d,v){try{var g=Zl(v);g&&d.push(g)}catch(V){Nl||V.name==="MissingIcon"&&console.error(V)}return d},[]);return new Promise(function(d,v){Promise.all(u).then(function(g){Wl(g,function(){t("active"),t("complete"),r("pending"),typeof c=="function"&&c(),l(),d()})}).catch(function(g){l(),v(g)})})}function ek(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zl(e).then(function(a){a&&Wl([a],c)})}function ak(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(c||{}).icon?c:lc(c||{}),r=a.mask;return r&&(r=(r||{}).icon?r:lc(r||{})),e(t,U(U({},a),{},{mask:r}))}}var tk=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.transform,r=t===void 0?J2:t,n=a.symbol,i=n===void 0?!1:n,o=a.mask,l=o===void 0?null:o,u=a.maskId,d=u===void 0?null:u,v=a.title,g=v===void 0?null:v,V=a.titleId,R=V===void 0?null:V,E=a.classes,k=E===void 0?[]:E,S=a.attributes,I=S===void 0?{}:S,B=a.styles,Q=B===void 0?{}:B;if(c){var r1=c.prefix,Y=c.iconName,H1=c.icon;return r7(U({type:"icon"},c),function(){return L4("beforeDOMElementCreation",{iconDefinition:c,params:a}),j.autoA11y&&(g?I["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(R||L0()):(I["aria-hidden"]="true",I.focusable="false")),$e({icons:{main:fc(H1),mask:l?fc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:r1,iconName:Y,transform:U(U({},J2),r),symbol:i,title:g,maskId:d,titleId:R,extra:{attributes:I,styles:Q,classes:k}})})}},rk={mixout:function(){return{icon:ak(tk)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=$n,a.nodeCallback=ek,a}}},provides:function(c){c.i2svg=function(a){var t=a.node,r=t===void 0?S1:t,n=a.callback,i=n===void 0?function(){}:n;return $n(r,i)},c.generateSvgReplacementMutation=function(a,t){var r=t.iconName,n=t.title,i=t.titleId,o=t.prefix,l=t.transform,u=t.symbol,d=t.mask,v=t.maskId,g=t.extra;return new Promise(function(V,R){Promise.all([uc(r,o),d.iconName?uc(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var k=Ee(E,2),S=k[0],I=k[1];V([a,$e({icons:{main:S,mask:I},prefix:o,iconName:r,transform:l,symbol:u,maskId:v,title:n,titleId:i,extra:g,watchable:!0})])}).catch(R)})},c.generateAbstractIcon=function(a){var t=a.children,r=a.attributes,n=a.main,i=a.transform,o=a.styles,l=e7(o);l.length>0&&(r.style=l);var u;return Be(i)&&(u=z3("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),t.push(u||n.icon),{children:t,attributes:r}}}},nk={mixout:function(){return{layer:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.classes,n=r===void 0?[]:r;return r7({type:"layer"},function(){L4("beforeDOMElementCreation",{assembler:a,params:t});var i=[];return a(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(B0(n)).join(" ")},children:i}]})}}}},ik={mixout:function(){return{counter:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.title,n=r===void 0?null:r,i=t.classes,o=i===void 0?[]:i,l=t.attributes,u=l===void 0?{}:l,d=t.styles,v=d===void 0?{}:d;return r7({type:"counter",content:a},function(){return L4("beforeDOMElementCreation",{content:a,params:t}),F_({content:a.toString(),title:n,extra:{attributes:u,styles:v,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(B0(o))}})})}}}},sk={mixout:function(){return{text:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?J2:r,i=t.title,o=i===void 0?null:i,l=t.classes,u=l===void 0?[]:l,d=t.attributes,v=d===void 0?{}:d,g=t.styles,V=g===void 0?{}:g;return r7({type:"text",content:a},function(){return L4("beforeDOMElementCreation",{content:a,params:t}),Dn({content:a,transform:U(U({},J2),n),title:o,extra:{attributes:v,styles:V,classes:["".concat(j.cssPrefix,"-layers-text")].concat(B0(u))}})})}}},provides:function(c){c.generateLayersText=function(a,t){var r=t.title,n=t.transform,i=t.extra,o=null,l=null;if(xl){var u=parseInt(getComputedStyle(a).fontSize,10),d=a.getBoundingClientRect();o=d.width/u,l=d.height/u}return j.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,Dn({content:a.innerHTML,width:o,height:l,transform:n,title:r,extra:i,watchable:!0})])}}},ok=new RegExp('"',"ug"),jn=[1105920,1112319];function lk(e){var c=e.replace(ok,""),a=M_(c,0),t=a>=jn[0]&&a<=jn[1],r=c.length===2?c[0]===c[1]:!1;return{value:ic(r?c[0]:c),isSecondary:t||r}}function Gn(e,c){var a="".concat(YN).concat(c.replace(":","-"));return new Promise(function(t,r){if(e.getAttribute(a)!==null)return t();var n=H6(e.children),i=n.filter(function(H1){return H1.getAttribute(nc)===c})[0],o=U3.getComputedStyle(e,c),l=o.getPropertyValue("font-family").match(a_),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),t();if(l&&d!=="none"&&d!==""){var v=o.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?k1:y1,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?V0[g][l[2].toLowerCase()]:t_[g][u],R=lk(v),E=R.value,k=R.isSecondary,S=l[0].startsWith("FontAwesome"),I=qe(V,E),B=I;if(S){var Q=A_(E);Q.iconName&&Q.prefix&&(I=Q.iconName,V=Q.prefix)}if(I&&!k&&(!i||i.getAttribute(Ie)!==V||i.getAttribute(Re)!==B)){e.setAttribute(a,B),i&&e.removeChild(i);var r1=J_(),Y=r1.extra;Y.attributes[nc]=c,uc(I,V).then(function(H1){var W1=$e(U(U({},r1),{},{icons:{main:H1,mask:Ue()},prefix:V,iconName:B,extra:Y,watchable:!0})),a2=S1.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(a2,e.firstChild):e.appendChild(a2),a2.outerHTML=W1.map(function(v2){return q0(v2)}).join(`