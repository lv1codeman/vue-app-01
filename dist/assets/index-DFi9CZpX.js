(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Z9(e,c){const a=new Set(e.split(","));return c?t=>a.has(t.toLowerCase()):t=>a.has(t)}const w1={},F4=[],T2=()=>{},dC=()=>!1,Q8=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Q9=e=>e.startsWith("onUpdate:"),J1=Object.assign,Y9=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},pC=Object.prototype.hasOwnProperty,h1=(e,c)=>pC.call(e,c),X=Array.isArray,B4=e=>v0(e)==="[object Map]",Y8=e=>v0(e)==="[object Set]",dt=e=>v0(e)==="[object Date]",r1=e=>typeof e=="function",F1=e=>typeof e=="string",E3=e=>typeof e=="symbol",M1=e=>e!==null&&typeof e=="object",An=e=>(M1(e)||r1(e))&&r1(e.then)&&r1(e.catch),_n=Object.prototype.toString,v0=e=>_n.call(e),zC=e=>v0(e).slice(8,-1),kn=e=>v0(e)==="[object Object]",X9=e=>F1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,k6=Z9(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X8=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},HC=/-(\w)/g,Q4=X8(e=>e.replace(HC,(c,a)=>a?a.toUpperCase():"")),gC=/\B([A-Z])/g,i6=X8(e=>e.replace(gC,"-$1").toLowerCase()),Tn=X8(e=>e.charAt(0).toUpperCase()+e.slice(1)),m7=X8(e=>e?`on${Tn(e)}`:""),m4=(e,c)=>!Object.is(e,c),d8=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},y8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},J9=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let pt;const En=()=>pt||(pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(e){if(X(e)){const c={};for(let a=0;a<e.length;a++){const t=e[a],r=F1(t)?LC(t):cc(t);if(r)for(const n in r)c[n]=r[n]}return c}else if(F1(e)||M1(e))return e}const VC=/;(?![^(]*\))/g,CC=/:([^]+)/,MC=/\/\*[^]*?\*\//g;function LC(e){const c={};return e.replace(MC,"").split(VC).forEach(a=>{if(a){const t=a.split(CC);t.length>1&&(c[t[0].trim()]=t[1].trim())}}),c}function ec(e){let c="";if(F1(e))c=e;else if(X(e))for(let a=0;a<e.length;a++){const t=ec(e[a]);t&&(c+=t+" ")}else if(M1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const wC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bC=Z9(wC);function Pn(e){return!!e||e===""}function yC(e,c){if(e.length!==c.length)return!1;let a=!0;for(let t=0;a&&t<e.length;t++)a=J8(e[t],c[t]);return a}function J8(e,c){if(e===c)return!0;let a=dt(e),t=dt(c);if(a||t)return a&&t?e.getTime()===c.getTime():!1;if(a=E3(e),t=E3(c),a||t)return e===c;if(a=X(e),t=X(c),a||t)return a&&t?yC(e,c):!1;if(a=M1(e),t=M1(c),a||t){if(!a||!t)return!1;const r=Object.keys(e).length,n=Object.keys(c).length;if(r!==n)return!1;for(const i in e){const o=e.hasOwnProperty(i),f=c.hasOwnProperty(i);if(o&&!f||!o&&f||!J8(e[i],c[i]))return!1}}return String(e)===String(c)}function xC(e,c){return e.findIndex(a=>J8(a,c))}const v7=e=>F1(e)?e:e==null?"":X(e)||M1(e)&&(e.toString===_n||!r1(e.toString))?JSON.stringify(e,In,2):String(e),In=(e,c)=>c&&c.__v_isRef?In(e,c.value):B4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[t,r],n)=>(a[d7(t,n)+" =>"]=r,a),{})}:Y8(c)?{[`Set(${c.size})`]:[...c.values()].map(a=>d7(a))}:E3(c)?d7(c):M1(c)&&!X(c)&&!kn(c)?String(c):c,d7=(e,c="")=>{var a;return E3(e)?`Symbol(${(a=e.description)!=null?a:c})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let E2;class SC{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=E2,!c&&E2&&(this.index=(E2.scopes||(E2.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const a=E2;try{return E2=this,c()}finally{E2=a}}}on(){E2=this}off(){E2=this.parent}stop(c){if(this._active){let a,t;for(a=0,t=this.effects.length;a<t;a++)this.effects[a].stop();for(a=0,t=this.cleanups.length;a<t;a++)this.cleanups[a]();if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function NC(e,c=E2){c&&c.active&&c.effects.push(e)}function AC(){return E2}let l4;class ac{constructor(c,a,t,r){this.fn=c,this.trigger=a,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,NC(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,V4();for(let c=0;c<this._depsLength;c++){const a=this.deps[c];if(a.computed&&(_C(a.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),C4()}return this._dirtyLevel>=4}set dirty(c){this._dirtyLevel=c?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let c=N3,a=l4;try{return N3=!0,l4=this,this._runnings++,zt(this),this.fn()}finally{Ht(this),this._runnings--,l4=a,N3=c}}stop(){var c;this.active&&(zt(this),Ht(this),(c=this.onStop)==null||c.call(this),this.active=!1)}}function _C(e){return e.value}function zt(e){e._trackId++,e._depsLength=0}function Ht(e){if(e.deps.length>e._depsLength){for(let c=e._depsLength;c<e.deps.length;c++)Rn(e.deps[c],e);e.deps.length=e._depsLength}}function Rn(e,c){const a=e.get(c);a!==void 0&&c._trackId!==a&&(e.delete(c),e.size===0&&e.cleanup())}let N3=!0,j7=0;const Dn=[];function V4(){Dn.push(N3),N3=!1}function C4(){const e=Dn.pop();N3=e===void 0?!0:e}function tc(){j7++}function rc(){for(j7--;!j7&&W7.length;)W7.shift()()}function Fn(e,c,a){if(c.get(e)!==e._trackId){c.set(e,e._trackId);const t=e.deps[e._depsLength];t!==c?(t&&Rn(t,e),e.deps[e._depsLength++]=c):e._depsLength++}}const W7=[];function Bn(e,c,a){tc();for(const t of e.keys()){let r;t._dirtyLevel<c&&(r??(r=e.get(t)===t._trackId))&&(t._shouldSchedule||(t._shouldSchedule=t._dirtyLevel===0),t._dirtyLevel=c),t._shouldSchedule&&(r??(r=e.get(t)===t._trackId))&&(t.trigger(),(!t._runnings||t.allowRecurse)&&t._dirtyLevel!==2&&(t._shouldSchedule=!1,t.scheduler&&W7.push(t.scheduler)))}rc()}const On=(e,c)=>{const a=new Map;return a.cleanup=e,a.computed=c,a},K7=new WeakMap,f4=Symbol(""),Z7=Symbol("");function H2(e,c,a){if(N3&&l4){let t=K7.get(e);t||K7.set(e,t=new Map);let r=t.get(a);r||t.set(a,r=On(()=>t.delete(a))),Fn(l4,r)}}function s3(e,c,a,t,r,n){const i=K7.get(e);if(!i)return;let o=[];if(c==="clear")o=[...i.values()];else if(a==="length"&&X(e)){const f=Number(t);i.forEach((h,v)=>{(v==="length"||!E3(v)&&v>=f)&&o.push(h)})}else switch(a!==void 0&&o.push(i.get(a)),c){case"add":X(e)?X9(a)&&o.push(i.get("length")):(o.push(i.get(f4)),B4(e)&&o.push(i.get(Z7)));break;case"delete":X(e)||(o.push(i.get(f4)),B4(e)&&o.push(i.get(Z7)));break;case"set":B4(e)&&o.push(i.get(f4));break}tc();for(const f of o)f&&Bn(f,4);rc()}const kC=Z9("__proto__,__v_isRef,__isVue"),qn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(E3)),gt=TC();function TC(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const t=z1(this);for(let n=0,i=this.length;n<i;n++)H2(t,"get",n+"");const r=t[c](...a);return r===-1||r===!1?t[c](...a.map(z1)):r}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){V4(),tc();const t=z1(this)[c].apply(this,a);return rc(),C4(),t}}),e}function EC(e){const c=z1(this);return H2(c,"has",e),c.hasOwnProperty(e)}class Un{constructor(c=!1,a=!1){this._isReadonly=c,this._isShallow=a}get(c,a,t){const r=this._isReadonly,n=this._isShallow;if(a==="__v_isReactive")return!r;if(a==="__v_isReadonly")return r;if(a==="__v_isShallow")return n;if(a==="__v_raw")return t===(r?n?WC:Wn:n?jn:Gn).get(c)||Object.getPrototypeOf(c)===Object.getPrototypeOf(t)?c:void 0;const i=X(c);if(!r){if(i&&h1(gt,a))return Reflect.get(gt,a,t);if(a==="hasOwnProperty")return EC}const o=Reflect.get(c,a,t);return(E3(a)?qn.has(a):kC(a))||(r||H2(c,"get",a),n)?o:b2(o)?i&&X9(a)?o:o.value:M1(o)?r?Kn(o):sc(o):o}}class $n extends Un{constructor(c=!1){super(!1,c)}set(c,a,t,r){let n=c[a];if(!this._isShallow){const f=$6(n);if(!Q7(t)&&!$6(t)&&(n=z1(n),t=z1(t)),!X(c)&&b2(n)&&!b2(t))return f?!1:(n.value=t,!0)}const i=X(c)&&X9(a)?Number(a)<c.length:h1(c,a),o=Reflect.set(c,a,t,r);return c===z1(r)&&(i?m4(t,n)&&s3(c,"set",a,t):s3(c,"add",a,t)),o}deleteProperty(c,a){const t=h1(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&t&&s3(c,"delete",a,void 0),r}has(c,a){const t=Reflect.has(c,a);return(!E3(a)||!qn.has(a))&&H2(c,"has",a),t}ownKeys(c){return H2(c,"iterate",X(c)?"length":f4),Reflect.ownKeys(c)}}class PC extends Un{constructor(c=!1){super(!0,c)}set(c,a){return!0}deleteProperty(c,a){return!0}}const IC=new $n,RC=new PC,DC=new $n(!0),nc=e=>e,c5=e=>Reflect.getPrototypeOf(e);function G0(e,c,a=!1,t=!1){e=e.__v_raw;const r=z1(e),n=z1(c);a||(m4(c,n)&&H2(r,"get",c),H2(r,"get",n));const{has:i}=c5(r),o=t?nc:a?fc:lc;if(i.call(r,c))return o(e.get(c));if(i.call(r,n))return o(e.get(n));e!==r&&e.get(c)}function j0(e,c=!1){const a=this.__v_raw,t=z1(a),r=z1(e);return c||(m4(e,r)&&H2(t,"has",e),H2(t,"has",r)),e===r?a.has(e):a.has(e)||a.has(r)}function W0(e,c=!1){return e=e.__v_raw,!c&&H2(z1(e),"iterate",f4),Reflect.get(e,"size",e)}function Vt(e){e=z1(e);const c=z1(this);return c5(c).has.call(c,e)||(c.add(e),s3(c,"add",e,e)),this}function Ct(e,c){c=z1(c);const a=z1(this),{has:t,get:r}=c5(a);let n=t.call(a,e);n||(e=z1(e),n=t.call(a,e));const i=r.call(a,e);return a.set(e,c),n?m4(c,i)&&s3(a,"set",e,c):s3(a,"add",e,c),this}function Mt(e){const c=z1(this),{has:a,get:t}=c5(c);let r=a.call(c,e);r||(e=z1(e),r=a.call(c,e)),t&&t.call(c,e);const n=c.delete(e);return r&&s3(c,"delete",e,void 0),n}function Lt(){const e=z1(this),c=e.size!==0,a=e.clear();return c&&s3(e,"clear",void 0,void 0),a}function K0(e,c){return function(t,r){const n=this,i=n.__v_raw,o=z1(i),f=c?nc:e?fc:lc;return!e&&H2(o,"iterate",f4),i.forEach((h,v)=>t.call(r,f(h),f(v),n))}}function Z0(e,c,a){return function(...t){const r=this.__v_raw,n=z1(r),i=B4(n),o=e==="entries"||e===Symbol.iterator&&i,f=e==="keys"&&i,h=r[e](...t),v=a?nc:c?fc:lc;return!c&&H2(n,"iterate",f?Z7:f4),{next(){const{value:d,done:H}=h.next();return H?{value:d,done:H}:{value:o?[v(d[0]),v(d[1])]:v(d),done:H}},[Symbol.iterator](){return this}}}}function C3(e){return function(...c){return e==="delete"?!1:e==="clear"?void 0:this}}function FC(){const e={get(n){return G0(this,n)},get size(){return W0(this)},has:j0,add:Vt,set:Ct,delete:Mt,clear:Lt,forEach:K0(!1,!1)},c={get(n){return G0(this,n,!1,!0)},get size(){return W0(this)},has:j0,add:Vt,set:Ct,delete:Mt,clear:Lt,forEach:K0(!1,!0)},a={get(n){return G0(this,n,!0)},get size(){return W0(this,!0)},has(n){return j0.call(this,n,!0)},add:C3("add"),set:C3("set"),delete:C3("delete"),clear:C3("clear"),forEach:K0(!0,!1)},t={get(n){return G0(this,n,!0,!0)},get size(){return W0(this,!0)},has(n){return j0.call(this,n,!0)},add:C3("add"),set:C3("set"),delete:C3("delete"),clear:C3("clear"),forEach:K0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{e[n]=Z0(n,!1,!1),a[n]=Z0(n,!0,!1),c[n]=Z0(n,!1,!0),t[n]=Z0(n,!0,!0)}),[e,a,c,t]}const[BC,OC,qC,UC]=FC();function ic(e,c){const a=c?e?UC:qC:e?OC:BC;return(t,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?t:Reflect.get(h1(a,r)&&r in t?a:t,r,n)}const $C={get:ic(!1,!1)},GC={get:ic(!1,!0)},jC={get:ic(!0,!1)},Gn=new WeakMap,jn=new WeakMap,Wn=new WeakMap,WC=new WeakMap;function KC(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ZC(e){return e.__v_skip||!Object.isExtensible(e)?0:KC(zC(e))}function sc(e){return $6(e)?e:oc(e,!1,IC,$C,Gn)}function QC(e){return oc(e,!1,DC,GC,jn)}function Kn(e){return oc(e,!0,RC,jC,Wn)}function oc(e,c,a,t,r){if(!M1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const n=r.get(e);if(n)return n;const i=ZC(e);if(i===0)return e;const o=new Proxy(e,i===2?t:a);return r.set(e,o),o}function O4(e){return $6(e)?O4(e.__v_raw):!!(e&&e.__v_isReactive)}function $6(e){return!!(e&&e.__v_isReadonly)}function Q7(e){return!!(e&&e.__v_isShallow)}function Zn(e){return O4(e)||$6(e)}function z1(e){const c=e&&e.__v_raw;return c?z1(c):e}function Qn(e){return Object.isExtensible(e)&&y8(e,"__v_skip",!0),e}const lc=e=>M1(e)?sc(e):e,fc=e=>M1(e)?Kn(e):e;class Yn{constructor(c,a,t,r){this.getter=c,this._setter=a,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ac(()=>c(this._value),()=>p7(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=t}get value(){const c=z1(this);return(!c._cacheable||c.effect.dirty)&&m4(c._value,c._value=c.effect.run())&&p7(c,4),XC(c),c.effect._dirtyLevel>=2&&p7(c,2),c._value}set value(c){this._setter(c)}get _dirty(){return this.effect.dirty}set _dirty(c){this.effect.dirty=c}}function YC(e,c,a=!1){let t,r;const n=r1(e);return n?(t=e,r=T2):(t=e.get,r=e.set),new Yn(t,r,n||!r,a)}function XC(e){var c;N3&&l4&&(e=z1(e),Fn(l4,(c=e.dep)!=null?c:e.dep=On(()=>e.dep=void 0,e instanceof Yn?e:void 0)))}function p7(e,c=4,a){e=z1(e);const t=e.dep;t&&Bn(t,c)}function b2(e){return!!(e&&e.__v_isRef===!0)}function JC(e){return b2(e)?e.value:e}const cM={get:(e,c,a)=>JC(Reflect.get(e,c,a)),set:(e,c,a,t)=>{const r=e[c];return b2(r)&&!b2(a)?(r.value=a,!0):Reflect.set(e,c,a,t)}};function Xn(e){return O4(e)?e:new Proxy(e,cM)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function A3(e,c,a,t){try{return t?e(...t):e()}catch(r){e5(r,c,a)}}function D2(e,c,a,t){if(r1(e)){const n=A3(e,c,a,t);return n&&An(n)&&n.catch(i=>{e5(i,c,a)}),n}const r=[];for(let n=0;n<e.length;n++)r.push(D2(e[n],c,a,t));return r}function e5(e,c,a,t=!0){const r=c?c.vnode:null;if(c){let n=c.parent;const i=c.proxy,o=`https://vuejs.org/error-reference/#runtime-${a}`;for(;n;){const h=n.ec;if(h){for(let v=0;v<h.length;v++)if(h[v](e,i,o)===!1)return}n=n.parent}const f=c.appContext.config.errorHandler;if(f){A3(f,null,10,[e,i,o]);return}}eM(e,a,r,t)}function eM(e,c,a,t=!0){console.error(e)}let G6=!1,Y7=!1;const n2=[];let j2=0;const q4=[];let w3=null,c4=0;const Jn=Promise.resolve();let hc=null;function ci(e){const c=hc||Jn;return e?c.then(this?e.bind(this):e):c}function aM(e){let c=j2+1,a=n2.length;for(;c<a;){const t=c+a>>>1,r=n2[t],n=j6(r);n<e||n===e&&r.pre?c=t+1:a=t}return c}function uc(e){(!n2.length||!n2.includes(e,G6&&e.allowRecurse?j2+1:j2))&&(e.id==null?n2.push(e):n2.splice(aM(e.id),0,e),ei())}function ei(){!G6&&!Y7&&(Y7=!0,hc=Jn.then(ti))}function tM(e){const c=n2.indexOf(e);c>j2&&n2.splice(c,1)}function rM(e){X(e)?q4.push(...e):(!w3||!w3.includes(e,e.allowRecurse?c4+1:c4))&&q4.push(e),ei()}function wt(e,c,a=G6?j2+1:0){for(;a<n2.length;a++){const t=n2[a];if(t&&t.pre){if(e&&t.id!==e.uid)continue;n2.splice(a,1),a--,t()}}}function ai(e){if(q4.length){const c=[...new Set(q4)].sort((a,t)=>j6(a)-j6(t));if(q4.length=0,w3){w3.push(...c);return}for(w3=c,c4=0;c4<w3.length;c4++)w3[c4]();w3=null,c4=0}}const j6=e=>e.id==null?1/0:e.id,nM=(e,c)=>{const a=j6(e)-j6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function ti(e){Y7=!1,G6=!0,n2.sort(nM);try{for(j2=0;j2<n2.length;j2++){const c=n2[j2];c&&c.active!==!1&&A3(c,null,14)}}finally{j2=0,n2.length=0,ai(),G6=!1,hc=null,(n2.length||q4.length)&&ti()}}function iM(e,c,...a){if(e.isUnmounted)return;const t=e.vnode.props||w1;let r=a;const n=c.startsWith("update:"),i=n&&c.slice(7);if(i&&i in t){const v=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:H}=t[v]||w1;H&&(r=a.map(V=>F1(V)?V.trim():V)),d&&(r=a.map(J9))}let o,f=t[o=m7(c)]||t[o=m7(Q4(c))];!f&&n&&(f=t[o=m7(i6(c))]),f&&D2(f,e,6,r);const h=t[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,D2(h,e,6,r)}}function ri(e,c,a=!1){const t=c.emitsCache,r=t.get(e);if(r!==void 0)return r;const n=e.emits;let i={},o=!1;if(!r1(e)){const f=h=>{const v=ri(h,c,!0);v&&(o=!0,J1(i,v))};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!n&&!o?(M1(e)&&t.set(e,null),null):(X(n)?n.forEach(f=>i[f]=null):J1(i,n),M1(e)&&t.set(e,i),i)}function a5(e,c){return!e||!Q8(c)?!1:(c=c.slice(2).replace(/Once$/,""),h1(e,c[0].toLowerCase()+c.slice(1))||h1(e,i6(c))||h1(e,c))}let w2=null,ni=null;function x8(e){const c=w2;return w2=e,ni=e&&e.type.__scopeId||null,c}function sM(e,c=w2,a){if(!c||e._n)return e;const t=(...r)=>{t._d&&Pt(-1);const n=x8(c);let i;try{i=e(...r)}finally{x8(n),t._d&&Pt(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function z7(e){const{type:c,vnode:a,proxy:t,withProxy:r,props:n,propsOptions:[i],slots:o,attrs:f,emit:h,render:v,renderCache:d,data:H,setupState:V,ctx:F,inheritAttrs:P}=e;let I,N;const E=x8(e);try{if(a.shapeFlag&4){const Z=r||t,a1=Z;I=G2(v.call(a1,Z,d,n,V,H,F)),N=f}else{const Z=c;I=G2(Z.length>1?Z(n,{attrs:f,slots:o,emit:h}):Z(n,null)),N=c.props?f:oM(f)}}catch(Z){P6.length=0,e5(Z,e,1),I=I2(W6)}let U=I;if(N&&P!==!1){const Z=Object.keys(N),{shapeFlag:a1}=U;Z.length&&a1&7&&(i&&Z.some(Q9)&&(N=lM(N,i)),U=Y4(U,N))}return a.dirs&&(U=Y4(U),U.dirs=U.dirs?U.dirs.concat(a.dirs):a.dirs),a.transition&&(U.transition=a.transition),I=U,x8(E),I}const oM=e=>{let c;for(const a in e)(a==="class"||a==="style"||Q8(a))&&((c||(c={}))[a]=e[a]);return c},lM=(e,c)=>{const a={};for(const t in e)(!Q9(t)||!(t.slice(9)in c))&&(a[t]=e[t]);return a};function fM(e,c,a){const{props:t,children:r,component:n}=e,{props:i,children:o,patchFlag:f}=c,h=n.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&f>=0){if(f&1024)return!0;if(f&16)return t?bt(t,i,h):!!i;if(f&8){const v=c.dynamicProps;for(let d=0;d<v.length;d++){const H=v[d];if(i[H]!==t[H]&&!a5(h,H))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:t===i?!1:t?i?bt(t,i,h):!0:!!i;return!1}function bt(e,c,a){const t=Object.keys(c);if(t.length!==Object.keys(e).length)return!0;for(let r=0;r<t.length;r++){const n=t[r];if(c[n]!==e[n]&&!a5(a,n))return!0}return!1}function hM({vnode:e,parent:c},a){for(;c;){const t=c.subTree;if(t.suspense&&t.suspense.activeBranch===e&&(t.el=e.el),t===e)(e=c.vnode).el=a,c=c.parent;else break}}const uM=Symbol.for("v-ndc"),mM=e=>e.__isSuspense;function vM(e,c){c&&c.pendingBranch?X(e)?c.effects.push(...e):c.effects.push(e):rM(e)}const dM=Symbol.for("v-scx"),pM=()=>H8(dM),Q0={};function p8(e,c,a){return ii(e,c,a)}function ii(e,c,{immediate:a,deep:t,flush:r,once:n,onTrack:i,onTrigger:o}=w1){if(c&&n){const Q=c;c=(...g1)=>{Q(...g1),a1()}}const f=h2,h=Q=>t===!0?Q:a4(Q,t===!1?1:void 0);let v,d=!1,H=!1;if(b2(e)?(v=()=>e.value,d=Q7(e)):O4(e)?(v=()=>h(e),d=!0):X(e)?(H=!0,d=e.some(Q=>O4(Q)||Q7(Q)),v=()=>e.map(Q=>{if(b2(Q))return Q.value;if(O4(Q))return h(Q);if(r1(Q))return A3(Q,f,2)})):r1(e)?c?v=()=>A3(e,f,2):v=()=>(V&&V(),D2(e,f,3,[F])):v=T2,c&&t){const Q=v;v=()=>a4(Q())}let V,F=Q=>{V=U.onStop=()=>{A3(Q,f,4),V=U.onStop=void 0}},P;if(i5)if(F=T2,c?a&&D2(c,f,3,[v(),H?[]:void 0,F]):v(),r==="sync"){const Q=pM();P=Q.__watcherHandles||(Q.__watcherHandles=[])}else return T2;let I=H?new Array(e.length).fill(Q0):Q0;const N=()=>{if(!(!U.active||!U.dirty))if(c){const Q=U.run();(t||d||(H?Q.some((g1,j1)=>m4(g1,I[j1])):m4(Q,I)))&&(V&&V(),D2(c,f,3,[Q,I===Q0?void 0:H&&I[0]===Q0?[]:I,F]),I=Q)}else U.run()};N.allowRecurse=!!c;let E;r==="sync"?E=N:r==="post"?E=()=>p2(N,f&&f.suspense):(N.pre=!0,f&&(N.id=f.uid),E=()=>uc(N));const U=new ac(v,T2,E),Z=AC(),a1=()=>{U.stop(),Z&&Y9(Z.effects,U)};return c?a?N():I=U.run():r==="post"?p2(U.run.bind(U),f&&f.suspense):U.run(),P&&P.push(a1),a1}function zM(e,c,a){const t=this.proxy,r=F1(e)?e.includes(".")?si(t,e):()=>t[e]:e.bind(t,t);let n;r1(c)?n=c:(n=c.handler,a=c);const i=d0(this),o=ii(r,n.bind(t),a);return i(),o}function si(e,c){const a=c.split(".");return()=>{let t=e;for(let r=0;r<a.length&&t;r++)t=t[a[r]];return t}}function a4(e,c,a=0,t){if(!M1(e)||e.__v_skip)return e;if(c&&c>0){if(a>=c)return e;a++}if(t=t||new Set,t.has(e))return e;if(t.add(e),b2(e))a4(e.value,c,a,t);else if(X(e))for(let r=0;r<e.length;r++)a4(e[r],c,a,t);else if(Y8(e)||B4(e))e.forEach(r=>{a4(r,c,a,t)});else if(kn(e))for(const r in e)a4(e[r],c,a,t);return e}function HM(e,c){if(w2===null)return e;const a=s5(w2)||w2.proxy,t=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[n,i,o,f=w1]=c[r];n&&(r1(n)&&(n={mounted:n,updated:n}),n.deep&&a4(i),t.push({dir:n,instance:a,value:i,oldValue:void 0,arg:o,modifiers:f}))}return e}function K3(e,c,a,t){const r=e.dirs,n=c&&c.dirs;for(let i=0;i<r.length;i++){const o=r[i];n&&(o.oldValue=n[i].value);let f=o.dir[t];f&&(V4(),D2(f,a,8,[e.el,o,e,c]),C4())}}/*! #__NO_SIDE_EFFECTS__ */function gM(e,c){return r1(e)?J1({name:e.name},c,{setup:e}):e}const z8=e=>!!e.type.__asyncLoader,oi=e=>e.type.__isKeepAlive;function VM(e,c){li(e,"a",c)}function CM(e,c){li(e,"da",c)}function li(e,c,a=h2){const t=e.__wdc||(e.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(t5(c,t,a),a){let r=a.parent;for(;r&&r.parent;)oi(r.parent.vnode)&&MM(t,c,a,r),r=r.parent}}function MM(e,c,a,t){const r=t5(c,e,t,!0);fi(()=>{Y9(t[c],r)},a)}function t5(e,c,a=h2,t=!1){if(a){const r=a[e]||(a[e]=[]),n=c.__weh||(c.__weh=(...i)=>{if(a.isUnmounted)return;V4();const o=d0(a),f=D2(c,a,e,i);return o(),C4(),f});return t?r.unshift(n):r.push(n),n}}const u3=e=>(c,a=h2)=>(!i5||e==="sp")&&t5(e,(...t)=>c(...t),a),LM=u3("bm"),wM=u3("m"),bM=u3("bu"),yM=u3("u"),xM=u3("bum"),fi=u3("um"),SM=u3("sp"),NM=u3("rtg"),AM=u3("rtc");function _M(e,c=h2){t5("ec",e,c)}function yt(e,c,a,t){let r;const n=a&&a[t];if(X(e)||F1(e)){r=new Array(e.length);for(let i=0,o=e.length;i<o;i++)r[i]=c(e[i],i,void 0,n&&n[i])}else if(typeof e=="number"){r=new Array(e);for(let i=0;i<e;i++)r[i]=c(i+1,i,void 0,n&&n[i])}else if(M1(e))if(e[Symbol.iterator])r=Array.from(e,(i,o)=>c(i,o,void 0,n&&n[o]));else{const i=Object.keys(e);r=new Array(i.length);for(let o=0,f=i.length;o<f;o++){const h=i[o];r[o]=c(e[h],h,o,n&&n[o])}}else r=[];return a&&(a[t]=r),r}const X7=e=>e?Ci(e)?s5(e)||e.proxy:X7(e.parent):null,T6=J1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>X7(e.parent),$root:e=>X7(e.root),$emit:e=>e.emit,$options:e=>mc(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,uc(e.update)}),$nextTick:e=>e.n||(e.n=ci.bind(e.proxy)),$watch:e=>zM.bind(e)}),H7=(e,c)=>e!==w1&&!e.__isScriptSetup&&h1(e,c),kM={get({_:e},c){const{ctx:a,setupState:t,data:r,props:n,accessCache:i,type:o,appContext:f}=e;let h;if(c[0]!=="$"){const V=i[c];if(V!==void 0)switch(V){case 1:return t[c];case 2:return r[c];case 4:return a[c];case 3:return n[c]}else{if(H7(t,c))return i[c]=1,t[c];if(r!==w1&&h1(r,c))return i[c]=2,r[c];if((h=e.propsOptions[0])&&h1(h,c))return i[c]=3,n[c];if(a!==w1&&h1(a,c))return i[c]=4,a[c];J7&&(i[c]=0)}}const v=T6[c];let d,H;if(v)return c==="$attrs"&&H2(e,"get",c),v(e);if((d=o.__cssModules)&&(d=d[c]))return d;if(a!==w1&&h1(a,c))return i[c]=4,a[c];if(H=f.config.globalProperties,h1(H,c))return H[c]},set({_:e},c,a){const{data:t,setupState:r,ctx:n}=e;return H7(r,c)?(r[c]=a,!0):t!==w1&&h1(t,c)?(t[c]=a,!0):h1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(n[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:t,appContext:r,propsOptions:n}},i){let o;return!!a[i]||e!==w1&&h1(e,i)||H7(c,i)||(o=n[0])&&h1(o,i)||h1(t,i)||h1(T6,i)||h1(r.config.globalProperties,i)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:h1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};function xt(e){return X(e)?e.reduce((c,a)=>(c[a]=null,c),{}):e}let J7=!0;function TM(e){const c=mc(e),a=e.proxy,t=e.ctx;J7=!1,c.beforeCreate&&St(c.beforeCreate,e,"bc");const{data:r,computed:n,methods:i,watch:o,provide:f,inject:h,created:v,beforeMount:d,mounted:H,beforeUpdate:V,updated:F,activated:P,deactivated:I,beforeDestroy:N,beforeUnmount:E,destroyed:U,unmounted:Z,render:a1,renderTracked:Q,renderTriggered:g1,errorCaptured:j1,serverPrefetch:c2,expose:v2,inheritAttrs:v3,components:d3,directives:L4,filters:d6}=c;if(h&&EM(h,t,null),i)for(const L1 in i){const $=i[L1];r1($)&&(t[L1]=$.bind(a))}if(r){const L1=r.call(a,a);M1(L1)&&(e.data=sc(L1))}if(J7=!0,n)for(const L1 in n){const $=n[L1],a3=r1($)?$.bind(a,a):r1($.get)?$.get.bind(a,a):T2,w4=!r1($)&&r1($.set)?$.set.bind(a):T2,B2=X3({get:a3,set:w4});Object.defineProperty(t,L1,{enumerable:!0,configurable:!0,get:()=>B2.value,set:S2=>B2.value=S2})}if(o)for(const L1 in o)hi(o[L1],t,a,L1);if(f){const L1=r1(f)?f.call(a):f;Reflect.ownKeys(L1).forEach($=>{BM($,L1[$])})}v&&St(v,e,"c");function W1(L1,$){X($)?$.forEach(a3=>L1(a3.bind(a))):$&&L1($.bind(a))}if(W1(LM,d),W1(wM,H),W1(bM,V),W1(yM,F),W1(VM,P),W1(CM,I),W1(_M,j1),W1(AM,Q),W1(NM,g1),W1(xM,E),W1(fi,Z),W1(SM,c2),X(v2))if(v2.length){const L1=e.exposed||(e.exposed={});v2.forEach($=>{Object.defineProperty(L1,$,{get:()=>a[$],set:a3=>a[$]=a3})})}else e.exposed||(e.exposed={});a1&&e.render===T2&&(e.render=a1),v3!=null&&(e.inheritAttrs=v3),d3&&(e.components=d3),L4&&(e.directives=L4)}function EM(e,c,a=T2){X(e)&&(e=c9(e));for(const t in e){const r=e[t];let n;M1(r)?"default"in r?n=H8(r.from||t,r.default,!0):n=H8(r.from||t):n=H8(r),b2(n)?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function St(e,c,a){D2(X(e)?e.map(t=>t.bind(c.proxy)):e.bind(c.proxy),c,a)}function hi(e,c,a,t){const r=t.includes(".")?si(a,t):()=>a[t];if(F1(e)){const n=c[e];r1(n)&&p8(r,n)}else if(r1(e))p8(r,e.bind(a));else if(M1(e))if(X(e))e.forEach(n=>hi(n,c,a,t));else{const n=r1(e.handler)?e.handler.bind(a):c[e.handler];r1(n)&&p8(r,n,e)}}function mc(e){const c=e.type,{mixins:a,extends:t}=c,{mixins:r,optionsCache:n,config:{optionMergeStrategies:i}}=e.appContext,o=n.get(c);let f;return o?f=o:!r.length&&!a&&!t?f=c:(f={},r.length&&r.forEach(h=>S8(f,h,i,!0)),S8(f,c,i)),M1(c)&&n.set(c,f),f}function S8(e,c,a,t=!1){const{mixins:r,extends:n}=c;n&&S8(e,n,a,!0),r&&r.forEach(i=>S8(e,i,a,!0));for(const i in c)if(!(t&&i==="expose")){const o=PM[i]||a&&a[i];e[i]=o?o(e[i],c[i]):c[i]}return e}const PM={data:Nt,props:At,emits:At,methods:y6,computed:y6,beforeCreate:l2,created:l2,beforeMount:l2,mounted:l2,beforeUpdate:l2,updated:l2,beforeDestroy:l2,beforeUnmount:l2,destroyed:l2,unmounted:l2,activated:l2,deactivated:l2,errorCaptured:l2,serverPrefetch:l2,components:y6,directives:y6,watch:RM,provide:Nt,inject:IM};function Nt(e,c){return c?e?function(){return J1(r1(e)?e.call(this,this):e,r1(c)?c.call(this,this):c)}:c:e}function IM(e,c){return y6(c9(e),c9(c))}function c9(e){if(X(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function l2(e,c){return e?[...new Set([].concat(e,c))]:c}function y6(e,c){return e?J1(Object.create(null),e,c):c}function At(e,c){return e?X(e)&&X(c)?[...new Set([...e,...c])]:J1(Object.create(null),xt(e),xt(c??{})):c}function RM(e,c){if(!e)return c;if(!c)return e;const a=J1(Object.create(null),e);for(const t in c)a[t]=l2(e[t],c[t]);return a}function ui(){return{app:null,config:{isNativeTag:dC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let DM=0;function FM(e,c){return function(t,r=null){r1(t)||(t=J1({},t)),r!=null&&!M1(r)&&(r=null);const n=ui(),i=new WeakSet;let o=!1;const f=n.app={_uid:DM++,_component:t,_props:r,_container:null,_context:n,_instance:null,version:uL,get config(){return n.config},set config(h){},use(h,...v){return i.has(h)||(h&&r1(h.install)?(i.add(h),h.install(f,...v)):r1(h)&&(i.add(h),h(f,...v))),f},mixin(h){return n.mixins.includes(h)||n.mixins.push(h),f},component(h,v){return v?(n.components[h]=v,f):n.components[h]},directive(h,v){return v?(n.directives[h]=v,f):n.directives[h]},mount(h,v,d){if(!o){const H=I2(t,r);return H.appContext=n,d===!0?d="svg":d===!1&&(d=void 0),v&&c?c(H,h):e(H,h,d),o=!0,f._container=h,h.__vue_app__=f,s5(H.component)||H.component.proxy}},unmount(){o&&(e(null,f._container),delete f._container.__vue_app__)},provide(h,v){return n.provides[h]=v,f},runWithContext(h){const v=E6;E6=f;try{return h()}finally{E6=v}}};return f}}let E6=null;function BM(e,c){if(h2){let a=h2.provides;const t=h2.parent&&h2.parent.provides;t===a&&(a=h2.provides=Object.create(t)),a[e]=c}}function H8(e,c,a=!1){const t=h2||w2;if(t||E6){const r=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:E6._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return a&&r1(c)?c.call(t&&t.proxy):c}}function OM(e,c,a,t=!1){const r={},n={};y8(n,n5,1),e.propsDefaults=Object.create(null),mi(e,c,r,n);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);a?e.props=t?r:QC(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function qM(e,c,a,t){const{props:r,attrs:n,vnode:{patchFlag:i}}=e,o=z1(r),[f]=e.propsOptions;let h=!1;if((t||i>0)&&!(i&16)){if(i&8){const v=e.vnode.dynamicProps;for(let d=0;d<v.length;d++){let H=v[d];if(a5(e.emitsOptions,H))continue;const V=c[H];if(f)if(h1(n,H))V!==n[H]&&(n[H]=V,h=!0);else{const F=Q4(H);r[F]=e9(f,o,F,V,e,!1)}else V!==n[H]&&(n[H]=V,h=!0)}}}else{mi(e,c,r,n)&&(h=!0);let v;for(const d in o)(!c||!h1(c,d)&&((v=i6(d))===d||!h1(c,v)))&&(f?a&&(a[d]!==void 0||a[v]!==void 0)&&(r[d]=e9(f,o,d,void 0,e,!0)):delete r[d]);if(n!==o)for(const d in n)(!c||!h1(c,d))&&(delete n[d],h=!0)}h&&s3(e,"set","$attrs")}function mi(e,c,a,t){const[r,n]=e.propsOptions;let i=!1,o;if(c)for(let f in c){if(k6(f))continue;const h=c[f];let v;r&&h1(r,v=Q4(f))?!n||!n.includes(v)?a[v]=h:(o||(o={}))[v]=h:a5(e.emitsOptions,f)||(!(f in t)||h!==t[f])&&(t[f]=h,i=!0)}if(n){const f=z1(a),h=o||w1;for(let v=0;v<n.length;v++){const d=n[v];a[d]=e9(r,f,d,h[d],e,!h1(h,d))}}return i}function e9(e,c,a,t,r,n){const i=e[a];if(i!=null){const o=h1(i,"default");if(o&&t===void 0){const f=i.default;if(i.type!==Function&&!i.skipFactory&&r1(f)){const{propsDefaults:h}=r;if(a in h)t=h[a];else{const v=d0(r);t=h[a]=f.call(null,c),v()}}else t=f}i[0]&&(n&&!o?t=!1:i[1]&&(t===""||t===i6(a))&&(t=!0))}return t}function vi(e,c,a=!1){const t=c.propsCache,r=t.get(e);if(r)return r;const n=e.props,i={},o=[];let f=!1;if(!r1(e)){const v=d=>{f=!0;const[H,V]=vi(d,c,!0);J1(i,H),V&&o.push(...V)};!a&&c.mixins.length&&c.mixins.forEach(v),e.extends&&v(e.extends),e.mixins&&e.mixins.forEach(v)}if(!n&&!f)return M1(e)&&t.set(e,F4),F4;if(X(n))for(let v=0;v<n.length;v++){const d=Q4(n[v]);_t(d)&&(i[d]=w1)}else if(n)for(const v in n){const d=Q4(v);if(_t(d)){const H=n[v],V=i[d]=X(H)||r1(H)?{type:H}:J1({},H);if(V){const F=Et(Boolean,V.type),P=Et(String,V.type);V[0]=F>-1,V[1]=P<0||F<P,(F>-1||h1(V,"default"))&&o.push(d)}}}const h=[i,o];return M1(e)&&t.set(e,h),h}function _t(e){return e[0]!=="$"&&!k6(e)}function kt(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Tt(e,c){return kt(e)===kt(c)}function Et(e,c){return X(c)?c.findIndex(a=>Tt(a,e)):r1(c)&&Tt(c,e)?0:-1}const di=e=>e[0]==="_"||e==="$stable",vc=e=>X(e)?e.map(G2):[G2(e)],UM=(e,c,a)=>{if(c._n)return c;const t=sM((...r)=>vc(c(...r)),a);return t._c=!1,t},pi=(e,c,a)=>{const t=e._ctx;for(const r in e){if(di(r))continue;const n=e[r];if(r1(n))c[r]=UM(r,n,t);else if(n!=null){const i=vc(n);c[r]=()=>i}}},zi=(e,c)=>{const a=vc(c);e.slots.default=()=>a},$M=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=z1(c),y8(c,"_",a)):pi(c,e.slots={})}else e.slots={},c&&zi(e,c);y8(e.slots,n5,1)},GM=(e,c,a)=>{const{vnode:t,slots:r}=e;let n=!0,i=w1;if(t.shapeFlag&32){const o=c._;o?a&&o===1?n=!1:(J1(r,c),!a&&o===1&&delete r._):(n=!c.$stable,pi(c,r)),i=c}else c&&(zi(e,c),i={default:1});if(n)for(const o in r)!di(o)&&i[o]==null&&delete r[o]};function a9(e,c,a,t,r=!1){if(X(e)){e.forEach((H,V)=>a9(H,c&&(X(c)?c[V]:c),a,t,r));return}if(z8(t)&&!r)return;const n=t.shapeFlag&4?s5(t.component)||t.component.proxy:t.el,i=r?null:n,{i:o,r:f}=e,h=c&&c.r,v=o.refs===w1?o.refs={}:o.refs,d=o.setupState;if(h!=null&&h!==f&&(F1(h)?(v[h]=null,h1(d,h)&&(d[h]=null)):b2(h)&&(h.value=null)),r1(f))A3(f,o,12,[i,v]);else{const H=F1(f),V=b2(f);if(H||V){const F=()=>{if(e.f){const P=H?h1(d,f)?d[f]:v[f]:f.value;r?X(P)&&Y9(P,n):X(P)?P.includes(n)||P.push(n):H?(v[f]=[n],h1(d,f)&&(d[f]=v[f])):(f.value=[n],e.k&&(v[e.k]=f.value))}else H?(v[f]=i,h1(d,f)&&(d[f]=i)):V&&(f.value=i,e.k&&(v[e.k]=i))};i?(F.id=-1,p2(F,a)):F()}}}const p2=vM;function jM(e){return WM(e)}function WM(e,c){const a=En();a.__VUE__=!0;const{insert:t,remove:r,patchProp:n,createElement:i,createText:o,createComment:f,setText:h,setElementText:v,parentNode:d,nextSibling:H,setScopeId:V=T2,insertStaticContent:F}=e,P=(z,g,L,y=null,w=null,A=null,_=void 0,b=null,k=!!g.dynamicChildren)=>{if(z===g)return;z&&!M6(z,g)&&(y=p3(z),S2(z,w,A,!0),z=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:S,ref:B,shapeFlag:W}=g;switch(S){case r5:I(z,g,L,y);break;case W6:N(z,g,L,y);break;case V7:z==null&&E(g,L,y,_);break;case L2:d3(z,g,L,y,w,A,_,b,k);break;default:W&1?a1(z,g,L,y,w,A,_,b,k):W&6?L4(z,g,L,y,w,A,_,b,k):(W&64||W&128)&&S.process(z,g,L,y,w,A,_,b,k,t3)}B!=null&&w&&a9(B,z&&z.ref,A,g||z,!g)},I=(z,g,L,y)=>{if(z==null)t(g.el=o(g.children),L,y);else{const w=g.el=z.el;g.children!==z.children&&h(w,g.children)}},N=(z,g,L,y)=>{z==null?t(g.el=f(g.children||""),L,y):g.el=z.el},E=(z,g,L,y)=>{[z.el,z.anchor]=F(z.children,g,L,y,z.el,z.anchor)},U=({el:z,anchor:g},L,y)=>{let w;for(;z&&z!==g;)w=H(z),t(z,L,y),z=w;t(g,L,y)},Z=({el:z,anchor:g})=>{let L;for(;z&&z!==g;)L=H(z),r(z),z=L;r(g)},a1=(z,g,L,y,w,A,_,b,k)=>{g.type==="svg"?_="svg":g.type==="math"&&(_="mathml"),z==null?Q(g,L,y,w,A,_,b,k):c2(z,g,w,A,_,b,k)},Q=(z,g,L,y,w,A,_,b)=>{let k,S;const{props:B,shapeFlag:W,transition:j,dirs:Y}=z;if(k=z.el=i(z.type,A,B&&B.is,B),W&8?v(k,z.children):W&16&&j1(z.children,k,null,y,w,g7(z,A),_,b),Y&&K3(z,null,y,"created"),g1(k,z,z.scopeId,_,y),B){for(const i1 in B)i1!=="value"&&!k6(i1)&&n(k,i1,null,B[i1],A,z.children,y,w,N2);"value"in B&&n(k,"value",null,B.value,A),(S=B.onVnodeBeforeMount)&&$2(S,y,z)}Y&&K3(z,null,y,"beforeMount");const t1=KM(w,j);t1&&j.beforeEnter(k),t(k,g,L),((S=B&&B.onVnodeMounted)||t1||Y)&&p2(()=>{S&&$2(S,y,z),t1&&j.enter(k),Y&&K3(z,null,y,"mounted")},w)},g1=(z,g,L,y,w)=>{if(L&&V(z,L),y)for(let A=0;A<y.length;A++)V(z,y[A]);if(w){let A=w.subTree;if(g===A){const _=w.vnode;g1(z,_,_.scopeId,_.slotScopeIds,w.parent)}}},j1=(z,g,L,y,w,A,_,b,k=0)=>{for(let S=k;S<z.length;S++){const B=z[S]=b?b3(z[S]):G2(z[S]);P(null,B,g,L,y,w,A,_,b)}},c2=(z,g,L,y,w,A,_)=>{const b=g.el=z.el;let{patchFlag:k,dynamicChildren:S,dirs:B}=g;k|=z.patchFlag&16;const W=z.props||w1,j=g.props||w1;let Y;if(L&&Z3(L,!1),(Y=j.onVnodeBeforeUpdate)&&$2(Y,L,g,z),B&&K3(g,z,L,"beforeUpdate"),L&&Z3(L,!0),S?v2(z.dynamicChildren,S,b,L,y,g7(g,w),A):_||$(z,g,b,null,L,y,g7(g,w),A,!1),k>0){if(k&16)v3(b,g,W,j,L,y,w);else if(k&2&&W.class!==j.class&&n(b,"class",null,j.class,w),k&4&&n(b,"style",W.style,j.style,w),k&8){const t1=g.dynamicProps;for(let i1=0;i1<t1.length;i1++){const d1=t1[i1],V1=W[d1],g2=j[d1];(g2!==V1||d1==="value")&&n(b,d1,V1,g2,w,z.children,L,y,N2)}}k&1&&z.children!==g.children&&v(b,g.children)}else!_&&S==null&&v3(b,g,W,j,L,y,w);((Y=j.onVnodeUpdated)||B)&&p2(()=>{Y&&$2(Y,L,g,z),B&&K3(g,z,L,"updated")},y)},v2=(z,g,L,y,w,A,_)=>{for(let b=0;b<g.length;b++){const k=z[b],S=g[b],B=k.el&&(k.type===L2||!M6(k,S)||k.shapeFlag&70)?d(k.el):L;P(k,S,B,null,y,w,A,_,!0)}},v3=(z,g,L,y,w,A,_)=>{if(L!==y){if(L!==w1)for(const b in L)!k6(b)&&!(b in y)&&n(z,b,L[b],null,_,g.children,w,A,N2);for(const b in y){if(k6(b))continue;const k=y[b],S=L[b];k!==S&&b!=="value"&&n(z,b,S,k,_,g.children,w,A,N2)}"value"in y&&n(z,"value",L.value,y.value,_)}},d3=(z,g,L,y,w,A,_,b,k)=>{const S=g.el=z?z.el:o(""),B=g.anchor=z?z.anchor:o("");let{patchFlag:W,dynamicChildren:j,slotScopeIds:Y}=g;Y&&(b=b?b.concat(Y):Y),z==null?(t(S,L,y),t(B,L,y),j1(g.children||[],L,B,w,A,_,b,k)):W>0&&W&64&&j&&z.dynamicChildren?(v2(z.dynamicChildren,j,L,w,A,_,b),(g.key!=null||w&&g===w.subTree)&&Hi(z,g,!0)):$(z,g,L,B,w,A,_,b,k)},L4=(z,g,L,y,w,A,_,b,k)=>{g.slotScopeIds=b,z==null?g.shapeFlag&512?w.ctx.activate(g,L,y,_,k):d6(g,L,y,w,A,_,k):I0(z,g,k)},d6=(z,g,L,y,w,A,_)=>{const b=z.component=nL(z,y,w);if(oi(z)&&(b.ctx.renderer=t3),iL(b),b.asyncDep){if(w&&w.registerDep(b,W1),!z.el){const k=b.subTree=I2(W6);N(null,k,g,L)}}else W1(b,z,g,L,w,A,_)},I0=(z,g,L)=>{const y=g.component=z.component;if(fM(z,g,L))if(y.asyncDep&&!y.asyncResolved){L1(y,g,L);return}else y.next=g,tM(y.update),y.effect.dirty=!0,y.update();else g.el=z.el,y.vnode=g},W1=(z,g,L,y,w,A,_)=>{const b=()=>{if(z.isMounted){let{next:B,bu:W,u:j,parent:Y,vnode:t1}=z;{const V2=gi(z);if(V2){B&&(B.el=t1.el,L1(z,B,_)),V2.asyncDep.then(()=>{z.isUnmounted||b()});return}}let i1=B,d1;Z3(z,!1),B?(B.el=t1.el,L1(z,B,_)):B=t1,W&&d8(W),(d1=B.props&&B.props.onVnodeBeforeUpdate)&&$2(d1,Y,B,t1),Z3(z,!0);const V1=z7(z),g2=z.subTree;z.subTree=V1,P(g2,V1,d(g2.el),p3(g2),z,w,A),B.el=V1.el,i1===null&&hM(z,V1.el),j&&p2(j,w),(d1=B.props&&B.props.onVnodeUpdated)&&p2(()=>$2(d1,Y,B,t1),w)}else{let B;const{el:W,props:j}=g,{bm:Y,m:t1,parent:i1}=z,d1=z8(g);if(Z3(z,!1),Y&&d8(Y),!d1&&(B=j&&j.onVnodeBeforeMount)&&$2(B,i1,g),Z3(z,!0),W&&z6){const V1=()=>{z.subTree=z7(z),z6(W,z.subTree,z,w,null)};d1?g.type.__asyncLoader().then(()=>!z.isUnmounted&&V1()):V1()}else{const V1=z.subTree=z7(z);P(null,V1,L,y,z,w,A),g.el=V1.el}if(t1&&p2(t1,w),!d1&&(B=j&&j.onVnodeMounted)){const V1=g;p2(()=>$2(B,i1,V1),w)}(g.shapeFlag&256||i1&&z8(i1.vnode)&&i1.vnode.shapeFlag&256)&&z.a&&p2(z.a,w),z.isMounted=!0,g=L=y=null}},k=z.effect=new ac(b,T2,()=>uc(S),z.scope),S=z.update=()=>{k.dirty&&k.run()};S.id=z.uid,Z3(z,!0),S()},L1=(z,g,L)=>{g.component=z;const y=z.vnode.props;z.vnode=g,z.next=null,qM(z,g.props,y,L),GM(z,g.children,L),V4(),wt(z),C4()},$=(z,g,L,y,w,A,_,b,k=!1)=>{const S=z&&z.children,B=z?z.shapeFlag:0,W=g.children,{patchFlag:j,shapeFlag:Y}=g;if(j>0){if(j&128){w4(S,W,L,y,w,A,_,b,k);return}else if(j&256){a3(S,W,L,y,w,A,_,b,k);return}}Y&8?(B&16&&N2(S,w,A),W!==S&&v(L,W)):B&16?Y&16?w4(S,W,L,y,w,A,_,b,k):N2(S,w,A,!0):(B&8&&v(L,""),Y&16&&j1(W,L,y,w,A,_,b,k))},a3=(z,g,L,y,w,A,_,b,k)=>{z=z||F4,g=g||F4;const S=z.length,B=g.length,W=Math.min(S,B);let j;for(j=0;j<W;j++){const Y=g[j]=k?b3(g[j]):G2(g[j]);P(z[j],Y,L,null,w,A,_,b,k)}S>B?N2(z,w,A,!0,!1,W):j1(g,L,y,w,A,_,b,k,W)},w4=(z,g,L,y,w,A,_,b,k)=>{let S=0;const B=g.length;let W=z.length-1,j=B-1;for(;S<=W&&S<=j;){const Y=z[S],t1=g[S]=k?b3(g[S]):G2(g[S]);if(M6(Y,t1))P(Y,t1,L,null,w,A,_,b,k);else break;S++}for(;S<=W&&S<=j;){const Y=z[W],t1=g[j]=k?b3(g[j]):G2(g[j]);if(M6(Y,t1))P(Y,t1,L,null,w,A,_,b,k);else break;W--,j--}if(S>W){if(S<=j){const Y=j+1,t1=Y<B?g[Y].el:y;for(;S<=j;)P(null,g[S]=k?b3(g[S]):G2(g[S]),L,t1,w,A,_,b,k),S++}}else if(S>j)for(;S<=W;)S2(z[S],w,A,!0),S++;else{const Y=S,t1=S,i1=new Map;for(S=t1;S<=j;S++){const K1=g[S]=k?b3(g[S]):G2(g[S]);K1.key!=null&&i1.set(K1.key,S)}let d1,V1=0;const g2=j-t1+1;let V2=!1,z3=0;const H3=new Array(g2);for(S=0;S<g2;S++)H3[S]=0;for(S=Y;S<=W;S++){const K1=z[S];if(V1>=g2){S2(K1,w,A,!0);continue}let A2;if(K1.key!=null)A2=i1.get(K1.key);else for(d1=t1;d1<=j;d1++)if(H3[d1-t1]===0&&M6(K1,g[d1])){A2=d1;break}A2===void 0?S2(K1,w,A,!0):(H3[A2-t1]=S+1,A2>=z3?z3=A2:V2=!0,P(K1,g[A2],L,null,w,A,_,b,k),V1++)}const U3=V2?ZM(H3):F4;for(d1=U3.length-1,S=g2-1;S>=0;S--){const K1=t1+S,A2=g[K1],y4=K1+1<B?g[K1+1].el:y;H3[S]===0?P(null,A2,L,y4,w,A,_,b,k):V2&&(d1<0||S!==U3[d1]?B2(A2,L,y4,2):d1--)}}},B2=(z,g,L,y,w=null)=>{const{el:A,type:_,transition:b,children:k,shapeFlag:S}=z;if(S&6){B2(z.component.subTree,g,L,y);return}if(S&128){z.suspense.move(g,L,y);return}if(S&64){_.move(z,g,L,t3);return}if(_===L2){t(A,g,L);for(let W=0;W<k.length;W++)B2(k[W],g,L,y);t(z.anchor,g,L);return}if(_===V7){U(z,g,L);return}if(y!==2&&S&1&&b)if(y===0)b.beforeEnter(A),t(A,g,L),p2(()=>b.enter(A),w);else{const{leave:W,delayLeave:j,afterLeave:Y}=b,t1=()=>t(A,g,L),i1=()=>{W(A,()=>{t1(),Y&&Y()})};j?j(A,t1,i1):i1()}else t(A,g,L)},S2=(z,g,L,y=!1,w=!1)=>{const{type:A,props:_,ref:b,children:k,dynamicChildren:S,shapeFlag:B,patchFlag:W,dirs:j}=z;if(b!=null&&a9(b,null,L,z,!0),B&256){g.ctx.deactivate(z);return}const Y=B&1&&j,t1=!z8(z);let i1;if(t1&&(i1=_&&_.onVnodeBeforeUnmount)&&$2(i1,g,z),B&6)b4(z.component,L,y);else{if(B&128){z.suspense.unmount(L,y);return}Y&&K3(z,null,g,"beforeUnmount"),B&64?z.type.remove(z,g,L,w,t3,y):S&&(A!==L2||W>0&&W&64)?N2(S,g,L,!1,!0):(A===L2&&W&384||!w&&B&16)&&N2(k,g,L),y&&C(z)}(t1&&(i1=_&&_.onVnodeUnmounted)||Y)&&p2(()=>{i1&&$2(i1,g,z),Y&&K3(z,null,g,"unmounted")},L)},C=z=>{const{type:g,el:L,anchor:y,transition:w}=z;if(g===L2){e7(L,y);return}if(g===V7){Z(z);return}const A=()=>{r(L),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(z.shapeFlag&1&&w&&!w.persisted){const{leave:_,delayLeave:b}=w,k=()=>_(L,A);b?b(z.el,A,k):k()}else A()},e7=(z,g)=>{let L;for(;z!==g;)L=H(z),r(z),z=L;r(g)},b4=(z,g,L)=>{const{bum:y,scope:w,update:A,subTree:_,um:b}=z;y&&d8(y),w.stop(),A&&(A.active=!1,S2(_,z,g,L)),b&&p2(b,g),p2(()=>{z.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N2=(z,g,L,y=!1,w=!1,A=0)=>{for(let _=A;_<z.length;_++)S2(z[_],g,L,y,w)},p3=z=>z.shapeFlag&6?p3(z.component.subTree):z.shapeFlag&128?z.suspense.next():H(z.anchor||z.el);let O1=!1;const O2=(z,g,L)=>{z==null?g._vnode&&S2(g._vnode,null,null,!0):P(g._vnode||null,z,g,null,null,null,L),O1||(O1=!0,wt(),ai(),O1=!1),g._vnode=z},t3={p:P,um:S2,m:B2,r:C,mt:d6,mc:j1,pc:$,pbc:v2,n:p3,o:e};let p6,z6;return c&&([p6,z6]=c(t3)),{render:O2,hydrate:p6,createApp:FM(O2,p6)}}function g7({type:e,props:c},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&c&&c.encoding&&c.encoding.includes("html")?void 0:a}function Z3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function KM(e,c){return(!e||e&&!e.pendingBranch)&&c&&!c.persisted}function Hi(e,c,a=!1){const t=e.children,r=c.children;if(X(t)&&X(r))for(let n=0;n<t.length;n++){const i=t[n];let o=r[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[n]=b3(r[n]),o.el=i.el),a||Hi(i,o)),o.type===r5&&(o.el=i.el)}}function ZM(e){const c=e.slice(),a=[0];let t,r,n,i,o;const f=e.length;for(t=0;t<f;t++){const h=e[t];if(h!==0){if(r=a[a.length-1],e[r]<h){c[t]=r,a.push(t);continue}for(n=0,i=a.length-1;n<i;)o=n+i>>1,e[a[o]]<h?n=o+1:i=o;h<e[a[n]]&&(n>0&&(c[t]=a[n-1]),a[n]=t)}}for(n=a.length,i=a[n-1];n-- >0;)a[n]=i,i=c[i];return a}function gi(e){const c=e.subTree.component;if(c)return c.asyncDep&&!c.asyncResolved?c:gi(c)}const QM=e=>e.__isTeleport,L2=Symbol.for("v-fgt"),r5=Symbol.for("v-txt"),W6=Symbol.for("v-cmt"),V7=Symbol.for("v-stc"),P6=[];let P2=null;function Q3(e=!1){P6.push(P2=e?null:[])}function YM(){P6.pop(),P2=P6[P6.length-1]||null}let K6=1;function Pt(e){K6+=e}function XM(e){return e.dynamicChildren=K6>0?P2||F4:null,YM(),K6>0&&P2&&P2.push(e),e}function Y3(e,c,a,t,r,n){return XM(f2(e,c,a,t,r,n,!0))}function t9(e){return e?e.__v_isVNode===!0:!1}function M6(e,c){return e.type===c.type&&e.key===c.key}const n5="__vInternal",Vi=({key:e})=>e??null,g8=({ref:e,ref_key:c,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?F1(e)||b2(e)||r1(e)?{i:w2,r:e,k:c,f:!!a}:e:null);function f2(e,c=null,a=null,t=0,r=null,n=e===L2?0:1,i=!1,o=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&Vi(c),ref:c&&g8(c),scopeId:ni,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:t,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:w2};return o?(dc(f,a),n&128&&e.normalize(f)):a&&(f.shapeFlag|=F1(a)?8:16),K6>0&&!i&&P2&&(f.patchFlag>0||n&6)&&f.patchFlag!==32&&P2.push(f),f}const I2=JM;function JM(e,c=null,a=null,t=0,r=null,n=!1){if((!e||e===uM)&&(e=W6),t9(e)){const o=Y4(e,c,!0);return a&&dc(o,a),K6>0&&!n&&P2&&(o.shapeFlag&6?P2[P2.indexOf(e)]=o:P2.push(o)),o.patchFlag|=-2,o}if(fL(e)&&(e=e.__vccOpts),c){c=cL(c);let{class:o,style:f}=c;o&&!F1(o)&&(c.class=ec(o)),M1(f)&&(Zn(f)&&!X(f)&&(f=J1({},f)),c.style=cc(f))}const i=F1(e)?1:mM(e)?128:QM(e)?64:M1(e)?4:r1(e)?2:0;return f2(e,c,a,t,r,i,n,!0)}function cL(e){return e?Zn(e)||n5 in e?J1({},e):e:null}function Y4(e,c,a=!1){const{props:t,ref:r,patchFlag:n,children:i}=e,o=c?aL(t||{},c):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Vi(o),ref:c&&c.ref?a&&r?X(r)?r.concat(g8(c)):[r,g8(c)]:g8(c):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==L2?n===-1?16:n|16:n,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Y4(e.ssContent),ssFallback:e.ssFallback&&Y4(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function eL(e=" ",c=0){return I2(r5,null,e,c)}function G2(e){return e==null||typeof e=="boolean"?I2(W6):X(e)?I2(L2,null,e.slice()):typeof e=="object"?b3(e):I2(r5,null,String(e))}function b3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Y4(e)}function dc(e,c){let a=0;const{shapeFlag:t}=e;if(c==null)c=null;else if(X(c))a=16;else if(typeof c=="object")if(t&65){const r=c.default;r&&(r._c&&(r._d=!1),dc(e,r()),r._c&&(r._d=!0));return}else{a=32;const r=c._;!r&&!(n5 in c)?c._ctx=w2:r===3&&w2&&(w2.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else r1(c)?(c={default:c,_ctx:w2},a=32):(c=String(c),t&64?(a=16,c=[eL(c)]):a=8);e.children=c,e.shapeFlag|=a}function aL(...e){const c={};for(let a=0;a<e.length;a++){const t=e[a];for(const r in t)if(r==="class")c.class!==t.class&&(c.class=ec([c.class,t.class]));else if(r==="style")c.style=cc([c.style,t.style]);else if(Q8(r)){const n=c[r],i=t[r];i&&n!==i&&!(X(n)&&n.includes(i))&&(c[r]=n?[].concat(n,i):i)}else r!==""&&(c[r]=t[r])}return c}function $2(e,c,a,t=null){D2(e,c,7,[a,t])}const tL=ui();let rL=0;function nL(e,c,a){const t=e.type,r=(c?c.appContext:e.appContext)||tL,n={uid:rL++,vnode:e,type:t,parent:c,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new SC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vi(t,r),emitsOptions:ri(t,r),emit:null,emitted:null,propsDefaults:w1,inheritAttrs:t.inheritAttrs,ctx:w1,data:w1,props:w1,attrs:w1,slots:w1,refs:w1,setupState:w1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=c?c.root:n,n.emit=iM.bind(null,n),e.ce&&e.ce(n),n}let h2=null,N8,r9;{const e=En(),c=(a,t)=>{let r;return(r=e[a])||(r=e[a]=[]),r.push(t),n=>{r.length>1?r.forEach(i=>i(n)):r[0](n)}};N8=c("__VUE_INSTANCE_SETTERS__",a=>h2=a),r9=c("__VUE_SSR_SETTERS__",a=>i5=a)}const d0=e=>{const c=h2;return N8(e),e.scope.on(),()=>{e.scope.off(),N8(c)}},It=()=>{h2&&h2.scope.off(),N8(null)};function Ci(e){return e.vnode.shapeFlag&4}let i5=!1;function iL(e,c=!1){c&&r9(c);const{props:a,children:t}=e.vnode,r=Ci(e);OM(e,a,r,c),$M(e,t);const n=r?sL(e,c):void 0;return c&&r9(!1),n}function sL(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=Qn(new Proxy(e.ctx,kM));const{setup:t}=a;if(t){const r=e.setupContext=t.length>1?lL(e):null,n=d0(e);V4();const i=A3(t,e,0,[e.props,r]);if(C4(),n(),An(i)){if(i.then(It,It),c)return i.then(o=>{Rt(e,o,c)}).catch(o=>{e5(o,e,0)});e.asyncDep=i}else Rt(e,i,c)}else Mi(e,c)}function Rt(e,c,a){r1(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:M1(c)&&(e.setupState=Xn(c)),Mi(e,a)}let Dt;function Mi(e,c,a){const t=e.type;if(!e.render){if(!c&&Dt&&!t.render){const r=t.template||mc(e).template;if(r){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:f}=t,h=J1(J1({isCustomElement:n,delimiters:o},i),f);t.render=Dt(r,h)}}e.render=t.render||T2}{const r=d0(e);V4();try{TM(e)}finally{C4(),r()}}}function oL(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(c,a){return H2(e,"get","$attrs"),c[a]}}))}function lL(e){const c=a=>{e.exposed=a||{}};return{get attrs(){return oL(e)},slots:e.slots,emit:e.emit,expose:c}}function s5(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Xn(Qn(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in T6)return T6[a](e)},has(c,a){return a in c||a in T6}}))}function fL(e){return r1(e)&&"__vccOpts"in e}const X3=(e,c)=>YC(e,c,i5);function hL(e,c,a){const t=arguments.length;return t===2?M1(c)&&!X(c)?t9(c)?I2(e,null,[c]):I2(e,c):I2(e,null,c):(t>3?a=Array.prototype.slice.call(arguments,2):t===3&&t9(a)&&(a=[a]),I2(e,c,a))}const uL="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mL="http://www.w3.org/2000/svg",vL="http://www.w3.org/1998/Math/MathML",y3=typeof document<"u"?document:null,Ft=y3&&y3.createElement("template"),dL={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,t)=>{const r=c==="svg"?y3.createElementNS(mL,e):c==="mathml"?y3.createElementNS(vL,e):y3.createElement(e,a?{is:a}:void 0);return e==="select"&&t&&t.multiple!=null&&r.setAttribute("multiple",t.multiple),r},createText:e=>y3.createTextNode(e),createComment:e=>y3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>y3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,t,r,n){const i=a?a.previousSibling:c.lastChild;if(r&&(r===n||r.nextSibling))for(;c.insertBefore(r.cloneNode(!0),a),!(r===n||!(r=r.nextSibling)););else{Ft.innerHTML=t==="svg"?`<svg>${e}</svg>`:t==="mathml"?`<math>${e}</math>`:e;const o=Ft.content;if(t==="svg"||t==="mathml"){const f=o.firstChild;for(;f.firstChild;)o.appendChild(f.firstChild);o.removeChild(f)}c.insertBefore(o,a)}return[i?i.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}},pL=Symbol("_vtc");function zL(e,c,a){const t=e[pL];t&&(c=(c?[c,...t]:[...t]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}const Bt=Symbol("_vod"),HL=Symbol("_vsh"),gL=Symbol(""),VL=/(^|;)\s*display\s*:/;function CL(e,c,a){const t=e.style,r=F1(a);let n=!1;if(a&&!r){if(c)if(F1(c))for(const i of c.split(";")){const o=i.slice(0,i.indexOf(":")).trim();a[o]==null&&V8(t,o,"")}else for(const i in c)a[i]==null&&V8(t,i,"");for(const i in a)i==="display"&&(n=!0),V8(t,i,a[i])}else if(r){if(c!==a){const i=t[gL];i&&(a+=";"+i),t.cssText=a,n=VL.test(a)}}else c&&e.removeAttribute("style");Bt in e&&(e[Bt]=n?t.display:"",e[HL]&&(t.display="none"))}const Ot=/\s*!important$/;function V8(e,c,a){if(X(a))a.forEach(t=>V8(e,c,t));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const t=ML(e,c);Ot.test(a)?e.setProperty(i6(t),a.replace(Ot,""),"important"):e[t]=a}}const qt=["Webkit","Moz","ms"],C7={};function ML(e,c){const a=C7[c];if(a)return a;let t=Q4(c);if(t!=="filter"&&t in e)return C7[c]=t;t=Tn(t);for(let r=0;r<qt.length;r++){const n=qt[r]+t;if(n in e)return C7[c]=n}return c}const Ut="http://www.w3.org/1999/xlink";function LL(e,c,a,t,r){if(t&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(Ut,c.slice(6,c.length)):e.setAttributeNS(Ut,c,a);else{const n=bC(c);a==null||n&&!Pn(a)?e.removeAttribute(c):e.setAttribute(c,n?"":a)}}function wL(e,c,a,t,r,n,i){if(c==="innerHTML"||c==="textContent"){t&&i(t,r,n),e[c]=a??"";return}const o=e.tagName;if(c==="value"&&o!=="PROGRESS"&&!o.includes("-")){const h=o==="OPTION"?e.getAttribute("value")||"":e.value,v=a??"";(h!==v||!("_value"in e))&&(e.value=v),a==null&&e.removeAttribute(c),e._value=a;return}let f=!1;if(a===""||a==null){const h=typeof e[c];h==="boolean"?a=Pn(a):a==null&&h==="string"?(a="",f=!0):h==="number"&&(a=0,f=!0)}try{e[c]=a}catch{}f&&e.removeAttribute(c)}function Li(e,c,a,t){e.addEventListener(c,a,t)}function bL(e,c,a,t){e.removeEventListener(c,a,t)}const $t=Symbol("_vei");function yL(e,c,a,t,r=null){const n=e[$t]||(e[$t]={}),i=n[c];if(t&&i)i.value=t;else{const[o,f]=xL(c);if(t){const h=n[c]=AL(t,r);Li(e,o,h,f)}else i&&(bL(e,o,i,f),n[c]=void 0)}}const Gt=/(?:Once|Passive|Capture)$/;function xL(e){let c;if(Gt.test(e)){c={};let t;for(;t=e.match(Gt);)e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):i6(e.slice(2)),c]}let M7=0;const SL=Promise.resolve(),NL=()=>M7||(SL.then(()=>M7=0),M7=Date.now());function AL(e,c){const a=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=a.attached)return;D2(_L(t,a.value),c,5,[t])};return a.value=e,a.attached=NL(),a}function _L(e,c){if(X(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(t=>r=>!r._stopped&&t&&t(r))}else return c}const jt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,kL=(e,c,a,t,r,n,i,o,f)=>{const h=r==="svg";c==="class"?zL(e,t,h):c==="style"?CL(e,a,t):Q8(c)?Q9(c)||yL(e,c,a,t,i):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):TL(e,c,t,h))?wL(e,c,t,n,i,o,f):(c==="true-value"?e._trueValue=t:c==="false-value"&&(e._falseValue=t),LL(e,c,t,h))};function TL(e,c,a,t){if(t)return!!(c==="innerHTML"||c==="textContent"||c in e&&jt(c)&&r1(a));if(c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA")return!1;if(c==="width"||c==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return jt(c)&&F1(a)?!1:c in e}const Wt=e=>{const c=e.props["onUpdate:modelValue"]||!1;return X(c)?a=>d8(c,a):c},L7=Symbol("_assign"),EL={deep:!0,created(e,{value:c,modifiers:{number:a}},t){const r=Y8(c);Li(e,"change",()=>{const n=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>a?J9(A8(i)):A8(i));e[L7](e.multiple?r?new Set(n):n:n[0]),e._assigning=!0,ci(()=>{e._assigning=!1})}),e[L7]=Wt(t)},mounted(e,{value:c,modifiers:{number:a}}){Kt(e,c,a)},beforeUpdate(e,c,a){e[L7]=Wt(a)},updated(e,{value:c,modifiers:{number:a}}){e._assigning||Kt(e,c,a)}};function Kt(e,c,a){const t=e.multiple,r=X(c);if(!(t&&!r&&!Y8(c))){for(let n=0,i=e.options.length;n<i;n++){const o=e.options[n],f=A8(o);if(t)if(r){const h=typeof f;h==="string"||h==="number"?o.selected=c.includes(a?J9(f):f):o.selected=xC(c,f)>-1}else o.selected=c.has(f);else if(J8(A8(o),c)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function A8(e){return"_value"in e?e._value:e.value}const PL=J1({patchProp:kL},dL);let Zt;function IL(){return Zt||(Zt=jM(PL))}const RL=(...e)=>{const c=IL().createApp(...e),{mount:a}=c;return c.mount=t=>{const r=FL(t);if(!r)return;const n=c._component;!r1(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.innerHTML="";const i=a(r,!1,DL(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},c};function DL(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function FL(e){return F1(e)?document.querySelector(e):e}var M3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function BL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wi={exports:{}};/*!
* sweetalert2 v11.10.7
* Released under the MIT License.
*/(function(e,c){(function(a,t){e.exports=t()})(M3,function(){function a(m,s,l){if(typeof m=="function"?m===s:m.has(s))return arguments.length<3?s:l;throw new TypeError("Private element is not present on this object")}function t(m,s,l){return s=I(s),U(m,o()?Reflect.construct(s,l||[],I(m).constructor):s.apply(m,l))}function r(m,s){return m.get(a(m,s))}function n(m,s,l){return m.set(a(m,s),l),l}function i(m,s,l){if(o())return Reflect.construct.apply(null,arguments);var u=[null];u.push.apply(u,s);var p=new(m.bind.apply(m,u));return l&&N(p,l.prototype),p}function o(){try{var m=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(o=function(){return!!m})()}function f(m,s){var l=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(l!=null){var u,p,M,O,s1=[],o1=!0,S1=!1;try{if(M=(l=l.call(m)).next,s===0){if(Object(l)!==l)return;o1=!1}else for(;!(o1=(u=M.call(l)).done)&&(s1.push(u.value),s1.length!==s);o1=!0);}catch(C6){S1=!0,p=C6}finally{try{if(!o1&&l.return!=null&&(O=l.return(),Object(O)!==O))return}finally{if(S1)throw p}}return s1}}function h(m,s){if(typeof m!="object"||!m)return m;var l=m[Symbol.toPrimitive];if(l!==void 0){var u=l.call(m,s||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(m)}function v(m){var s=h(m,"string");return typeof s=="symbol"?s:String(s)}function d(m){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},d(m)}function H(m,s){if(!(m instanceof s))throw new TypeError("Cannot call a class as a function")}function V(m,s){for(var l=0;l<s.length;l++){var u=s[l];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(m,v(u.key),u)}}function F(m,s,l){return s&&V(m.prototype,s),l&&V(m,l),Object.defineProperty(m,"prototype",{writable:!1}),m}function P(m,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(s&&s.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),s&&N(m,s)}function I(m){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},I(m)}function N(m,s){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,p){return u.__proto__=p,u},N(m,s)}function E(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function U(m,s){if(s&&(typeof s=="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(m)}function Z(m,s){for(;!Object.prototype.hasOwnProperty.call(m,s)&&(m=I(m),m!==null););return m}function a1(){return typeof Reflect<"u"&&Reflect.get?a1=Reflect.get.bind():a1=function(s,l,u){var p=Z(s,l);if(p){var M=Object.getOwnPropertyDescriptor(p,l);return M.get?M.get.call(arguments.length<3?s:u):M.value}},a1.apply(this,arguments)}function Q(m,s){return c2(m)||f(m,s)||v3(m,s)||d6()}function g1(m){return j1(m)||v2(m)||v3(m)||L4()}function j1(m){if(Array.isArray(m))return d3(m)}function c2(m){if(Array.isArray(m))return m}function v2(m){if(typeof Symbol<"u"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function v3(m,s){if(m){if(typeof m=="string")return d3(m,s);var l=Object.prototype.toString.call(m).slice(8,-1);if(l==="Object"&&m.constructor&&(l=m.constructor.name),l==="Map"||l==="Set")return Array.from(m);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return d3(m,s)}}function d3(m,s){(s==null||s>m.length)&&(s=m.length);for(var l=0,u=new Array(s);l<s;l++)u[l]=m[l];return u}function L4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I0(m,s){if(s.has(m))throw new TypeError("Cannot initialize the same private elements twice on an object")}function W1(m,s,l){I0(m,s),s.set(m,l)}var L1=100,$={},a3=function(){$.previousActiveElement instanceof HTMLElement?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},w4=function(s){return new Promise(function(l){if(!s)return l();var u=window.scrollX,p=window.scrollY;$.restoreFocusTimeout=setTimeout(function(){a3(),l()},L1),window.scrollTo(u,p)})},B2="swal2-",S2=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],C=S2.reduce(function(m,s){return m[s]=B2+s,m},{}),e7=["success","warning","info","question","error"],b4=e7.reduce(function(m,s){return m[s]=B2+s,m},{}),N2="SweetAlert2:",p3=function(s){return s.charAt(0).toUpperCase()+s.slice(1)},O1=function(s){console.warn("".concat(N2," ").concat(d(s)==="object"?s.join(" "):s))},O2=function(s){console.error("".concat(N2," ").concat(s))},t3=[],p6=function(s){t3.includes(s)||(t3.push(s),O1(s))},z6=function(s,l){p6('"'.concat(s,'" is deprecated and will be removed in the next major release. Please use "').concat(l,'" instead.'))},z=function(s){return typeof s=="function"?s():s},g=function(s){return s&&typeof s.toPromise=="function"},L=function(s){return g(s)?s.toPromise():Promise.resolve(s)},y=function(s){return s&&Promise.resolve(s)===s},w=function(){return document.body.querySelector(".".concat(C.container))},A=function(s){var l=w();return l?l.querySelector(s):null},_=function(s){return A(".".concat(s))},b=function(){return _(C.popup)},k=function(){return _(C.icon)},S=function(){return _(C["icon-content"])},B=function(){return _(C.title)},W=function(){return _(C["html-container"])},j=function(){return _(C.image)},Y=function(){return _(C["progress-steps"])},t1=function(){return _(C["validation-message"])},i1=function(){return A(".".concat(C.actions," .").concat(C.confirm))},d1=function(){return A(".".concat(C.actions," .").concat(C.cancel))},V1=function(){return A(".".concat(C.actions," .").concat(C.deny))},g2=function(){return _(C["input-label"])},V2=function(){return A(".".concat(C.loader))},z3=function(){return _(C.actions)},H3=function(){return _(C.footer)},U3=function(){return _(C["timer-progress-bar"])},K1=function(){return _(C.close)},A2=`
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
`,y4=function(){var s=b();if(!s)return[];var l=s.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),u=Array.from(l).sort(function(O,s1){var o1=parseInt(O.getAttribute("tabindex")||"0"),S1=parseInt(s1.getAttribute("tabindex")||"0");return o1>S1?1:o1<S1?-1:0}),p=s.querySelectorAll(A2),M=Array.from(p).filter(function(O){return O.getAttribute("tabindex")!=="-1"});return g1(new Set(u.concat(M))).filter(function(O){return M2(O)})},a7=function(){return r3(document.body,C.shown)&&!r3(document.body,C["toast-shown"])&&!r3(document.body,C["no-backdrop"])},R0=function(){var s=b();return s?r3(s,C.toast):!1},$H=function(){var s=b();return s?s.hasAttribute("data-loading"):!1},C2=function(s,l){if(s.textContent="",l){var u=new DOMParser,p=u.parseFromString(l,"text/html"),M=p.querySelector("head");M&&Array.from(M.childNodes).forEach(function(s1){s.appendChild(s1)});var O=p.querySelector("body");O&&Array.from(O.childNodes).forEach(function(s1){s1 instanceof HTMLVideoElement||s1 instanceof HTMLAudioElement?s.appendChild(s1.cloneNode(!0)):s.appendChild(s1)})}},r3=function(s,l){if(!l)return!1;for(var u=l.split(/\s+/),p=0;p<u.length;p++)if(!s.classList.contains(u[p]))return!1;return!0},GH=function(s,l){Array.from(s.classList).forEach(function(u){!Object.values(C).includes(u)&&!Object.values(b4).includes(u)&&!Object.values(l.showClass||{}).includes(u)&&s.classList.remove(u)})},_2=function(s,l,u){if(GH(s,l),l.customClass&&l.customClass[u]){if(typeof l.customClass[u]!="string"&&!l.customClass[u].forEach){O1("Invalid type of customClass.".concat(u,'! Expected string or iterable object, got "').concat(d(l.customClass[u]),'"'));return}f1(s,l.customClass[u])}},D0=function(s,l){if(!l)return null;switch(l){case"select":case"textarea":case"file":return s.querySelector(".".concat(C.popup," > .").concat(C[l]));case"checkbox":return s.querySelector(".".concat(C.popup," > .").concat(C.checkbox," input"));case"radio":return s.querySelector(".".concat(C.popup," > .").concat(C.radio," input:checked"))||s.querySelector(".".concat(C.popup," > .").concat(C.radio," input:first-child"));case"range":return s.querySelector(".".concat(C.popup," > .").concat(C.range," input"));default:return s.querySelector(".".concat(C.popup," > .").concat(C.input))}},Ca=function(s){if(s.focus(),s.type!=="file"){var l=s.value;s.value="",s.value=l}},Ma=function(s,l,u){!s||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(function(p){Array.isArray(s)?s.forEach(function(M){u?M.classList.add(p):M.classList.remove(p)}):u?s.classList.add(p):s.classList.remove(p)}))},f1=function(s,l){Ma(s,l,!0)},q2=function(s,l){Ma(s,l,!1)},g3=function(s,l){for(var u=Array.from(s.children),p=0;p<u.length;p++){var M=u[p];if(M instanceof HTMLElement&&r3(M,l))return M}},$3=function(s,l,u){u==="".concat(parseInt(u))&&(u=parseInt(u)),u||parseInt(u)===0?s.style.setProperty(l,typeof u=="number"?"".concat(u,"px"):u):s.style.removeProperty(l)},q1=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s&&(s.style.display=l)},e2=function(s){s&&(s.style.display="none")},t7=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";s&&new MutationObserver(function(){H6(s,s.innerHTML,l)}).observe(s,{childList:!0,subtree:!0})},La=function(s,l,u,p){var M=s.querySelector(l);M&&M.style.setProperty(u,p)},H6=function(s,l){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?q1(s,u):e2(s)},M2=function(s){return!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length))},jH=function(){return!M2(i1())&&!M2(V1())&&!M2(d1())},wa=function(s){return s.scrollHeight>s.clientHeight},ba=function(s){var l=window.getComputedStyle(s),u=parseFloat(l.getPropertyValue("animation-duration")||"0"),p=parseFloat(l.getPropertyValue("transition-duration")||"0");return u>0||p>0},r7=function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=U3();u&&M2(u)&&(l&&(u.style.transition="none",u.style.width="100%"),setTimeout(function(){u.style.transition="width ".concat(s/1e3,"s linear"),u.style.width="0%"},10))},WH=function(){var s=U3();if(s){var l=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";var u=parseInt(window.getComputedStyle(s).width),p=l/u*100;s.style.width="".concat(p,"%")}},ya=function(){return typeof window>"u"||typeof document>"u"},KH=`
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
`).replace(/(^|\n)\s*/g,""),ZH=function(){var s=w();return s?(s.remove(),q2([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]]),!0):!1},G3=function(){$.currentInstance.resetValidationMessage()},QH=function(){var s=b(),l=g3(s,C.input),u=g3(s,C.file),p=s.querySelector(".".concat(C.range," input")),M=s.querySelector(".".concat(C.range," output")),O=g3(s,C.select),s1=s.querySelector(".".concat(C.checkbox," input")),o1=g3(s,C.textarea);l.oninput=G3,u.onchange=G3,O.onchange=G3,s1.onchange=G3,o1.oninput=G3,p.oninput=function(){G3(),M.value=p.value},p.onchange=function(){G3(),M.value=p.value}},YH=function(s){return typeof s=="string"?document.querySelector(s):s},XH=function(s){var l=b();l.setAttribute("role",s.toast?"alert":"dialog"),l.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||l.setAttribute("aria-modal","true")},JH=function(s){window.getComputedStyle(s).direction==="rtl"&&f1(w(),C.rtl)},cg=function(s){var l=ZH();if(ya()){O2("SweetAlert2 requires document to initialize");return}var u=document.createElement("div");u.className=C.container,l&&f1(u,C["no-transition"]),C2(u,KH);var p=YH(s.target);p.appendChild(u),XH(s),JH(p),QH()},n7=function(s,l){s instanceof HTMLElement?l.appendChild(s):d(s)==="object"?eg(s,l):s&&C2(l,s)},eg=function(s,l){s.jquery?ag(l,s):C2(l,s.toString())},ag=function(s,l){if(s.textContent="",0 in l)for(var u=0;u in l;u++)s.appendChild(l[u].cloneNode(!0));else s.appendChild(l.cloneNode(!0))},j3=function(){if(ya())return!1;var m=document.createElement("div");return typeof m.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof m.style.animation<"u"?"animationend":!1}(),tg=function(s,l){var u=z3(),p=V2();!u||!p||(!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?e2(u):q1(u),_2(u,l,"actions"),rg(u,p,l),C2(p,l.loaderHtml||""),_2(p,l,"loader"))};function rg(m,s,l){var u=i1(),p=V1(),M=d1();!u||!p||!M||(i7(u,"confirm",l),i7(p,"deny",l),i7(M,"cancel",l),ng(u,p,M,l),l.reverseButtons&&(l.toast?(m.insertBefore(M,u),m.insertBefore(p,u)):(m.insertBefore(M,s),m.insertBefore(p,s),m.insertBefore(u,s))))}function ng(m,s,l,u){if(!u.buttonsStyling){q2([m,s,l],C.styled);return}f1([m,s,l],C.styled),u.confirmButtonColor&&(m.style.backgroundColor=u.confirmButtonColor,f1(m,C["default-outline"])),u.denyButtonColor&&(s.style.backgroundColor=u.denyButtonColor,f1(s,C["default-outline"])),u.cancelButtonColor&&(l.style.backgroundColor=u.cancelButtonColor,f1(l,C["default-outline"]))}function i7(m,s,l){var u=p3(s);H6(m,l["show".concat(u,"Button")],"inline-block"),C2(m,l["".concat(s,"ButtonText")]||""),m.setAttribute("aria-label",l["".concat(s,"ButtonAriaLabel")]||""),m.className=C[s],_2(m,l,"".concat(s,"Button"))}var ig=function(s,l){var u=K1();u&&(C2(u,l.closeButtonHtml||""),_2(u,l,"closeButton"),H6(u,l.showCloseButton),u.setAttribute("aria-label",l.closeButtonAriaLabel||""))},sg=function(s,l){var u=w();u&&(og(u,l.backdrop),lg(u,l.position),fg(u,l.grow),_2(u,l,"container"))};function og(m,s){typeof s=="string"?m.style.background=s:s||f1([document.documentElement,document.body],C["no-backdrop"])}function lg(m,s){s&&(s in C?f1(m,C[s]):(O1('The "position" parameter is not valid, defaulting to "center"'),f1(m,C.center)))}function fg(m,s){s&&f1(m,C["grow-".concat(s)])}var C1={innerParams:new WeakMap,domCache:new WeakMap},hg=["input","file","range","select","radio","checkbox","textarea"],ug=function(s,l){var u=b();if(u){var p=C1.innerParams.get(s),M=!p||l.input!==p.input;hg.forEach(function(O){var s1=g3(u,C[O]);s1&&(dg(O,l.inputAttributes),s1.className=C[O],M&&e2(s1))}),l.input&&(M&&mg(l),pg(l))}},mg=function(s){if(s.input){if(!k1[s.input]){O2("Unexpected type of input! Expected ".concat(Object.keys(k1).join(" | "),', got "').concat(s.input,'"'));return}var l=xa(s.input),u=k1[s.input](l,s);q1(l),s.inputAutoFocus&&setTimeout(function(){Ca(u)})}},vg=function(s){for(var l=0;l<s.attributes.length;l++){var u=s.attributes[l].name;["id","type","value","style"].includes(u)||s.removeAttribute(u)}},dg=function(s,l){var u=D0(b(),s);if(u){vg(u);for(var p in l)u.setAttribute(p,l[p])}},pg=function(s){var l=xa(s.input);d(s.customClass)==="object"&&f1(l,s.customClass.input)},s7=function(s,l){(!s.placeholder||l.inputPlaceholder)&&(s.placeholder=l.inputPlaceholder)},g6=function(s,l,u){if(u.inputLabel){var p=document.createElement("label"),M=C["input-label"];p.setAttribute("for",s.id),p.className=M,d(u.customClass)==="object"&&f1(p,u.customClass.inputLabel),p.innerText=u.inputLabel,l.insertAdjacentElement("beforebegin",p)}},xa=function(s){return g3(b(),C[s]||C.input)},F0=function(s,l){["string","number"].includes(d(l))?s.value="".concat(l):y(l)||O1('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(d(l),'"'))},k1={};k1.text=k1.email=k1.password=k1.number=k1.tel=k1.url=k1.search=k1.date=k1["datetime-local"]=k1.time=k1.week=k1.month=function(m,s){return F0(m,s.inputValue),g6(m,m,s),s7(m,s),m.type=s.input,m},k1.file=function(m,s){return g6(m,m,s),s7(m,s),m},k1.range=function(m,s){var l=m.querySelector("input"),u=m.querySelector("output");return F0(l,s.inputValue),l.type=s.input,F0(u,s.inputValue),g6(l,m,s),m},k1.select=function(m,s){if(m.textContent="",s.inputPlaceholder){var l=document.createElement("option");C2(l,s.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,m.appendChild(l)}return g6(m,m,s),m},k1.radio=function(m){return m.textContent="",m},k1.checkbox=function(m,s){var l=D0(b(),"checkbox");l.value="1",l.checked=!!s.inputValue;var u=m.querySelector("span");return C2(u,s.inputPlaceholder),l},k1.textarea=function(m,s){F0(m,s.inputValue),s7(m,s),g6(m,m,s);var l=function(p){return parseInt(window.getComputedStyle(p).marginLeft)+parseInt(window.getComputedStyle(p).marginRight)};return setTimeout(function(){if("MutationObserver"in window){var u=parseInt(window.getComputedStyle(b()).width),p=function(){if(document.body.contains(m)){var O=m.offsetWidth+l(m);O>u?b().style.width="".concat(O,"px"):$3(b(),"width",s.width)}};new MutationObserver(p).observe(m,{attributes:!0,attributeFilter:["style"]})}}),m};var zg=function(s,l){var u=W();u&&(t7(u),_2(u,l,"htmlContainer"),l.html?(n7(l.html,u),q1(u,"block")):l.text?(u.textContent=l.text,q1(u,"block")):e2(u),ug(s,l))},Hg=function(s,l){var u=H3();u&&(t7(u),H6(u,l.footer,"block"),l.footer&&n7(l.footer,u),_2(u,l,"footer"))},gg=function(s,l){var u=C1.innerParams.get(s),p=k();if(p){if(u&&l.icon===u.icon){Na(p,l),Sa(p,l);return}if(!l.icon&&!l.iconHtml){e2(p);return}if(l.icon&&Object.keys(b4).indexOf(l.icon)===-1){O2('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(l.icon,'"')),e2(p);return}q1(p),Na(p,l),Sa(p,l),f1(p,l.showClass&&l.showClass.icon)}},Sa=function(s,l){for(var u=0,p=Object.entries(b4);u<p.length;u++){var M=Q(p[u],2),O=M[0],s1=M[1];l.icon!==O&&q2(s,s1)}f1(s,l.icon&&b4[l.icon]),Lg(s,l),Vg(),_2(s,l,"icon")},Vg=function(){var s=b();if(s)for(var l=window.getComputedStyle(s).getPropertyValue("background-color"),u=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),p=0;p<u.length;p++)u[p].style.backgroundColor=l},Cg=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Mg=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Na=function(s,l){if(!(!l.icon&&!l.iconHtml)){var u=s.innerHTML,p="";if(l.iconHtml)p=Aa(l.iconHtml);else if(l.icon==="success")p=Cg,u=u.replace(/ style=".*?"/g,"");else if(l.icon==="error")p=Mg;else if(l.icon){var M={question:"?",warning:"!",info:"i"};p=Aa(M[l.icon])}u.trim()!==p.trim()&&C2(s,p)}},Lg=function(s,l){if(l.iconColor){s.style.color=l.iconColor,s.style.borderColor=l.iconColor;for(var u=0,p=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];u<p.length;u++){var M=p[u];La(s,M,"background-color",l.iconColor)}La(s,".swal2-success-ring","border-color",l.iconColor)}},Aa=function(s){return'<div class="'.concat(C["icon-content"],'">').concat(s,"</div>")},wg=function(s,l){var u=j();if(u){if(!l.imageUrl){e2(u);return}q1(u,""),u.setAttribute("src",l.imageUrl),u.setAttribute("alt",l.imageAlt||""),$3(u,"width",l.imageWidth),$3(u,"height",l.imageHeight),u.className=C.image,_2(u,l,"image")}},bg=function(s,l){var u=w(),p=b();if(!(!u||!p)){if(l.toast){$3(u,"width",l.width),p.style.width="100%";var M=V2();M&&p.insertBefore(M,k())}else $3(p,"width",l.width);$3(p,"padding",l.padding),l.color&&(p.style.color=l.color),l.background&&(p.style.background=l.background),e2(t1()),yg(p,l)}},yg=function(s,l){var u=l.showClass||{};s.className="".concat(C.popup," ").concat(M2(s)?u.popup:""),l.toast?(f1([document.documentElement,document.body],C["toast-shown"]),f1(s,C.toast)):f1(s,C.modal),_2(s,l,"popup"),typeof l.customClass=="string"&&f1(s,l.customClass),l.icon&&f1(s,C["icon-".concat(l.icon)])},xg=function(s,l){var u=Y();if(u){var p=l.progressSteps,M=l.currentProgressStep;if(!p||p.length===0||M===void 0){e2(u);return}q1(u),u.textContent="",M>=p.length&&O1("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),p.forEach(function(O,s1){var o1=Sg(O);if(u.appendChild(o1),s1===M&&f1(o1,C["active-progress-step"]),s1!==p.length-1){var S1=Ng(l);u.appendChild(S1)}})}},Sg=function(s){var l=document.createElement("li");return f1(l,C["progress-step"]),C2(l,s),l},Ng=function(s){var l=document.createElement("li");return f1(l,C["progress-step-line"]),s.progressStepsDistance&&$3(l,"width",s.progressStepsDistance),l},Ag=function(s,l){var u=B();u&&(t7(u),H6(u,l.title||l.titleText,"block"),l.title&&n7(l.title,u),l.titleText&&(u.innerText=l.titleText),_2(u,l,"title"))},_a=function(s,l){bg(s,l),sg(s,l),xg(s,l),gg(s,l),wg(s,l),Ag(s,l),ig(s,l),zg(s,l),tg(s,l),Hg(s,l);var u=b();typeof l.didRender=="function"&&u&&l.didRender(u)},_g=function(){return M2(b())},ka=function(){var s;return(s=i1())===null||s===void 0?void 0:s.click()},kg=function(){var s;return(s=V1())===null||s===void 0?void 0:s.click()},Tg=function(){var s;return(s=d1())===null||s===void 0?void 0:s.click()},x4=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ta=function(s){s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},Eg=function(s,l,u){Ta(s),l.toast||(s.keydownHandler=function(p){return Ig(l,p,u)},s.keydownTarget=l.keydownListenerCapture?window:b(),s.keydownListenerCapture=l.keydownListenerCapture,s.keydownTarget.addEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!0)},o7=function(s,l){var u,p=y4();if(p.length){s=s+l,s===p.length?s=0:s===-1&&(s=p.length-1),p[s].focus();return}(u=b())===null||u===void 0||u.focus()},Ea=["ArrowRight","ArrowDown"],Pg=["ArrowLeft","ArrowUp"],Ig=function(s,l,u){s&&(l.isComposing||l.keyCode===229||(s.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?Rg(l,s):l.key==="Tab"?Dg(l):[].concat(Ea,Pg).includes(l.key)?Fg(l.key):l.key==="Escape"&&Bg(l,s,u)))},Rg=function(s,l){if(z(l.allowEnterKey)){var u=D0(b(),l.input);if(s.target&&u&&s.target instanceof HTMLElement&&s.target.outerHTML===u.outerHTML){if(["textarea","file"].includes(l.input))return;ka(),s.preventDefault()}}},Dg=function(s){for(var l=s.target,u=y4(),p=-1,M=0;M<u.length;M++)if(l===u[M]){p=M;break}s.shiftKey?o7(p,-1):o7(p,1),s.stopPropagation(),s.preventDefault()},Fg=function(s){var l=z3(),u=i1(),p=V1(),M=d1();if(!(!l||!u||!p||!M)){var O=[u,p,M];if(!(document.activeElement instanceof HTMLElement&&!O.includes(document.activeElement))){var s1=Ea.includes(s)?"nextElementSibling":"previousElementSibling",o1=document.activeElement;if(o1){for(var S1=0;S1<l.children.length;S1++){if(o1=o1[s1],!o1)return;if(o1 instanceof HTMLButtonElement&&M2(o1))break}o1 instanceof HTMLButtonElement&&o1.focus()}}}},Bg=function(s,l,u){z(l.allowEscapeKey)&&(s.preventDefault(),u(x4.esc))},S4={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Og=function(){var s=w(),l=Array.from(document.body.children);l.forEach(function(u){u.contains(s)||(u.hasAttribute("aria-hidden")&&u.setAttribute("data-previous-aria-hidden",u.getAttribute("aria-hidden")||""),u.setAttribute("aria-hidden","true"))})},Pa=function(){var s=Array.from(document.body.children);s.forEach(function(l){l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},Ia=typeof window<"u"&&!!window.GestureEvent,qg=function(){if(Ia&&!r3(document.body,C.iosfix)){var s=document.body.scrollTop;document.body.style.top="".concat(s*-1,"px"),f1(document.body,C.iosfix),Ug()}},Ug=function(){var s=w();if(s){var l;s.ontouchstart=function(u){l=$g(u)},s.ontouchmove=function(u){l&&(u.preventDefault(),u.stopPropagation())}}},$g=function(s){var l=s.target,u=w(),p=W();return!u||!p||Gg(s)||jg(s)?!1:l===u||!wa(u)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(wa(p)&&p.contains(l))},Gg=function(s){return s.touches&&s.touches.length&&s.touches[0].touchType==="stylus"},jg=function(s){return s.touches&&s.touches.length>1},Wg=function(){if(r3(document.body,C.iosfix)){var s=parseInt(document.body.style.top,10);q2(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},Kg=function(){var s=document.createElement("div");s.className=C["scrollbar-measure"],document.body.appendChild(s);var l=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),l},N4=null,Zg=function(s){N4===null&&(document.body.scrollHeight>window.innerHeight||s==="scroll")&&(N4=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(N4+Kg(),"px"))},Qg=function(){N4!==null&&(document.body.style.paddingRight="".concat(N4,"px"),N4=null)};function Ra(m,s,l,u){R0()?Fa(m,u):(w4(l).then(function(){return Fa(m,u)}),Ta($)),Ia?(s.setAttribute("style","display:none !important"),s.removeAttribute("class"),s.innerHTML=""):s.remove(),a7()&&(Qg(),Wg(),Pa()),Yg()}function Yg(){q2([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"]])}function V3(m){m=Jg(m);var s=S4.swalPromiseResolve.get(this),l=Xg(this);this.isAwaitingPromise?m.isDismissed||(V6(this),s(m)):l&&s(m)}var Xg=function(s){var l=b();if(!l)return!1;var u=C1.innerParams.get(s);if(!u||r3(l,u.hideClass.popup))return!1;q2(l,u.showClass.popup),f1(l,u.hideClass.popup);var p=w();return q2(p,u.showClass.backdrop),f1(p,u.hideClass.backdrop),cV(s,l,u),!0};function Da(m){var s=S4.swalPromiseReject.get(this);V6(this),s&&s(m)}var V6=function(s){s.isAwaitingPromise&&(delete s.isAwaitingPromise,C1.innerParams.get(s)||s._destroy())},Jg=function(s){return typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s)},cV=function(s,l,u){var p=w(),M=j3&&ba(l);typeof u.willClose=="function"&&u.willClose(l),M?eV(s,l,p,u.returnFocus,u.didClose):Ra(s,p,u.returnFocus,u.didClose)},eV=function(s,l,u,p,M){j3&&($.swalCloseEventFinishedCallback=Ra.bind(null,s,u,p,M),l.addEventListener(j3,function(O){O.target===l&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)}))},Fa=function(s,l){setTimeout(function(){typeof l=="function"&&l.bind(s.params)(),s._destroy&&s._destroy()})},A4=function(s){var l=b();if(l||new $0,l=b(),!!l){var u=V2();R0()?e2(k()):aV(l,s),q1(u),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()}},aV=function(s,l){var u=z3(),p=V2();!u||!p||(!l&&M2(i1())&&(l=i1()),q1(u),l&&(e2(l),p.setAttribute("data-button-to-replace",l.className),u.insertBefore(p,l)),f1([s,u],C.loading))},tV=function(s,l){l.input==="select"||l.input==="radio"?oV(s,l):["text","email","number","tel","textarea"].some(function(u){return u===l.input})&&(g(l.inputValue)||y(l.inputValue))&&(A4(i1()),lV(s,l))},rV=function(s,l){var u=s.getInput();if(!u)return null;switch(l.input){case"checkbox":return nV(u);case"radio":return iV(u);case"file":return sV(u);default:return l.inputAutoTrim?u.value.trim():u.value}},nV=function(s){return s.checked?1:0},iV=function(s){return s.checked?s.value:null},sV=function(s){return s.files&&s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null},oV=function(s,l){var u=b();if(u){var p=function(O){l.input==="select"?fV(u,Ba(O),l):l.input==="radio"&&hV(u,Ba(O),l)};g(l.inputOptions)||y(l.inputOptions)?(A4(i1()),L(l.inputOptions).then(function(M){s.hideLoading(),p(M)})):d(l.inputOptions)==="object"?p(l.inputOptions):O2("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(d(l.inputOptions)))}},lV=function(s,l){var u=s.getInput();u&&(e2(u),L(l.inputValue).then(function(p){u.value=l.input==="number"?"".concat(parseFloat(p)||0):"".concat(p),q1(u),u.focus(),s.hideLoading()}).catch(function(p){O2("Error in inputValue promise: ".concat(p)),u.value="",q1(u),u.focus(),s.hideLoading()}))};function fV(m,s,l){var u=g3(m,C.select);if(u){var p=function(O,s1,o1){var S1=document.createElement("option");S1.value=o1,C2(S1,s1),S1.selected=Oa(o1,l.inputValue),O.appendChild(S1)};s.forEach(function(M){var O=M[0],s1=M[1];if(Array.isArray(s1)){var o1=document.createElement("optgroup");o1.label=O,o1.disabled=!1,u.appendChild(o1),s1.forEach(function(S1){return p(o1,S1[1],S1[0])})}else p(u,s1,O)}),u.focus()}}function hV(m,s,l){var u=g3(m,C.radio);if(u){s.forEach(function(M){var O=M[0],s1=M[1],o1=document.createElement("input"),S1=document.createElement("label");o1.type="radio",o1.name=C.radio,o1.value=O,Oa(O,l.inputValue)&&(o1.checked=!0);var C6=document.createElement("span");C2(C6,s1),C6.className=C.label,S1.appendChild(o1),S1.appendChild(C6),u.appendChild(S1)});var p=u.querySelectorAll("input");p.length&&p[0].focus()}}var Ba=function m(s){var l=[];return s instanceof Map?s.forEach(function(u,p){var M=u;d(M)==="object"&&(M=m(M)),l.push([p,M])}):Object.keys(s).forEach(function(u){var p=s[u];d(p)==="object"&&(p=m(p)),l.push([u,p])}),l},Oa=function(s,l){return!!l&&l.toString()===s.toString()},B0=void 0,uV=function(s){var l=C1.innerParams.get(s);s.disableButtons(),l.input?qa(s,"confirm"):f7(s,!0)},mV=function(s){var l=C1.innerParams.get(s);s.disableButtons(),l.returnInputValueOnDeny?qa(s,"deny"):l7(s,!1)},vV=function(s,l){s.disableButtons(),l(x4.cancel)},qa=function(s,l){var u=C1.innerParams.get(s);if(!u.input){O2('The "input" parameter is needed to be set when using returnInputValueOn'.concat(p3(l)));return}var p=s.getInput(),M=rV(s,u);u.inputValidator?dV(s,M,l):p&&!p.checkValidity()?(s.enableButtons(),s.showValidationMessage(u.validationMessage||p.validationMessage)):l==="deny"?l7(s,M):f7(s,M)},dV=function(s,l,u){var p=C1.innerParams.get(s);s.disableInput();var M=Promise.resolve().then(function(){return L(p.inputValidator(l,p.validationMessage))});M.then(function(O){s.enableButtons(),s.enableInput(),O?s.showValidationMessage(O):u==="deny"?l7(s,l):f7(s,l)})},l7=function(s,l){var u=C1.innerParams.get(s||B0);if(u.showLoaderOnDeny&&A4(V1()),u.preDeny){s.isAwaitingPromise=!0;var p=Promise.resolve().then(function(){return L(u.preDeny(l,u.validationMessage))});p.then(function(M){M===!1?(s.hideLoading(),V6(s)):s.close({isDenied:!0,value:typeof M>"u"?l:M})}).catch(function(M){return $a(s||B0,M)})}else s.close({isDenied:!0,value:l})},Ua=function(s,l){s.close({isConfirmed:!0,value:l})},$a=function(s,l){s.rejectPromise(l)},f7=function(s,l){var u=C1.innerParams.get(s||B0);if(u.showLoaderOnConfirm&&A4(),u.preConfirm){s.resetValidationMessage(),s.isAwaitingPromise=!0;var p=Promise.resolve().then(function(){return L(u.preConfirm(l,u.validationMessage))});p.then(function(M){M2(t1())||M===!1?(s.hideLoading(),V6(s)):Ua(s,typeof M>"u"?l:M)}).catch(function(M){return $a(s||B0,M)})}else Ua(s,l)};function O0(){var m=C1.innerParams.get(this);if(m){var s=C1.domCache.get(this);e2(s.loader),R0()?m.icon&&q1(k()):pV(s),q2([s.popup,s.actions],C.loading),s.popup.removeAttribute("aria-busy"),s.popup.removeAttribute("data-loading"),s.confirmButton.disabled=!1,s.denyButton.disabled=!1,s.cancelButton.disabled=!1}}var pV=function(s){var l=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));l.length?q1(l[0],"inline-block"):jH()&&e2(s.actions)};function Ga(){var m=C1.innerParams.get(this),s=C1.domCache.get(this);return s?D0(s.popup,m.input):null}function ja(m,s,l){var u=C1.domCache.get(m);s.forEach(function(p){u[p].disabled=l})}function Wa(m,s){var l=b();if(!(!l||!m))if(m.type==="radio")for(var u=l.querySelectorAll('[name="'.concat(C.radio,'"]')),p=0;p<u.length;p++)u[p].disabled=s;else m.disabled=s}function Ka(){ja(this,["confirmButton","denyButton","cancelButton"],!1)}function Za(){ja(this,["confirmButton","denyButton","cancelButton"],!0)}function Qa(){Wa(this.getInput(),!1)}function Ya(){Wa(this.getInput(),!0)}function Xa(m){var s=C1.domCache.get(this),l=C1.innerParams.get(this);C2(s.validationMessage,m),s.validationMessage.className=C["validation-message"],l.customClass&&l.customClass.validationMessage&&f1(s.validationMessage,l.customClass.validationMessage),q1(s.validationMessage);var u=this.getInput();u&&(u.setAttribute("aria-invalid","true"),u.setAttribute("aria-describedby",C["validation-message"]),Ca(u),f1(u,C.inputerror))}function Ja(){var m=C1.domCache.get(this);m.validationMessage&&e2(m.validationMessage);var s=this.getInput();s&&(s.removeAttribute("aria-invalid"),s.removeAttribute("aria-describedby"),q2(s,C.inputerror))}var _4={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},zV=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],HV={},gV=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ct=function(s){return Object.prototype.hasOwnProperty.call(_4,s)},et=function(s){return zV.indexOf(s)!==-1},at=function(s){return HV[s]},VV=function(s){ct(s)||O1('Unknown parameter "'.concat(s,'"'))},CV=function(s){gV.includes(s)&&O1('The parameter "'.concat(s,'" is incompatible with toasts'))},MV=function(s){var l=at(s);l&&z6(s,l)},LV=function(s){s.backdrop===!1&&s.allowOutsideClick&&O1('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(var l in s)VV(l),s.toast&&CV(l),MV(l)};function tt(m){var s=b(),l=C1.innerParams.get(this);if(!s||r3(s,l.hideClass.popup)){O1("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}var u=wV(m),p=Object.assign({},l,u);_a(this,p),C1.innerParams.set(this,p),Object.defineProperties(this,{params:{value:Object.assign({},this.params,m),writable:!1,enumerable:!0}})}var wV=function(s){var l={};return Object.keys(s).forEach(function(u){et(u)?l[u]=s[u]:O1("Invalid parameter to update: ".concat(u))}),l};function rt(){var m=C1.domCache.get(this),s=C1.innerParams.get(this);if(!s){nt(this);return}m.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),typeof s.didDestroy=="function"&&s.didDestroy(),bV(this)}var bV=function(s){nt(s),delete s.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},nt=function(s){s.isAwaitingPromise?(h7(C1,s),s.isAwaitingPromise=!0):(h7(S4,s),h7(C1,s),delete s.isAwaitingPromise,delete s.disableButtons,delete s.enableButtons,delete s.getInput,delete s.disableInput,delete s.enableInput,delete s.hideLoading,delete s.disableLoading,delete s.showValidationMessage,delete s.resetValidationMessage,delete s.close,delete s.closePopup,delete s.closeModal,delete s.closeToast,delete s.rejectPromise,delete s.update,delete s._destroy)},h7=function(s,l){for(var u in s)s[u].delete(l)},yV=Object.freeze({__proto__:null,_destroy:rt,close:V3,closeModal:V3,closePopup:V3,closeToast:V3,disableButtons:Za,disableInput:Ya,disableLoading:O0,enableButtons:Ka,enableInput:Qa,getInput:Ga,handleAwaitingPromise:V6,hideLoading:O0,rejectPromise:Da,resetValidationMessage:Ja,showValidationMessage:Xa,update:tt}),xV=function(s,l,u){s.toast?SV(s,l,u):(AV(l),_V(l),kV(s,l,u))},SV=function(s,l,u){l.popup.onclick=function(){s&&(NV(s)||s.timer||s.input)||u(x4.close)}},NV=function(s){return!!(s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton)},q0=!1,AV=function(s){s.popup.onmousedown=function(){s.container.onmouseup=function(l){s.container.onmouseup=function(){},l.target===s.container&&(q0=!0)}}},_V=function(s){s.container.onmousedown=function(){s.popup.onmouseup=function(l){s.popup.onmouseup=function(){},(l.target===s.popup||l.target instanceof HTMLElement&&s.popup.contains(l.target))&&(q0=!0)}}},kV=function(s,l,u){l.container.onclick=function(p){if(q0){q0=!1;return}p.target===l.container&&z(s.allowOutsideClick)&&u(x4.backdrop)}},TV=function(s){return d(s)==="object"&&s.jquery},it=function(s){return s instanceof Element||TV(s)},EV=function(s){var l={};return d(s[0])==="object"&&!it(s[0])?Object.assign(l,s[0]):["title","html","icon"].forEach(function(u,p){var M=s[p];typeof M=="string"||it(M)?l[u]=M:M!==void 0&&O2("Unexpected type of ".concat(u,'! Expected "string" or "Element", got ').concat(d(M)))}),l};function PV(){for(var m=this,s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return i(m,l)}function IV(m){var s=function(l){P(u,l);function u(){return H(this,u),t(this,u,arguments)}return F(u,[{key:"_main",value:function(M,O){return a1(I(u.prototype),"_main",this).call(this,M,Object.assign({},m,O))}}]),u}(this);return s}var RV=function(){return $.timeout&&$.timeout.getTimerLeft()},st=function(){if($.timeout)return WH(),$.timeout.stop()},ot=function(){if($.timeout){var s=$.timeout.start();return r7(s),s}},DV=function(){var s=$.timeout;return s&&(s.running?st():ot())},FV=function(s){if($.timeout){var l=$.timeout.increase(s);return r7(l,!0),l}},BV=function(){return!!($.timeout&&$.timeout.isRunning())},lt=!1,u7={};function OV(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";u7[m]=this,lt||(document.body.addEventListener("click",qV),lt=!0)}var qV=function(s){for(var l=s.target;l&&l!==document;l=l.parentNode)for(var u in u7){var p=l.getAttribute(u);if(p){u7[u].fire({template:p});return}}},UV=Object.freeze({__proto__:null,argsToParams:EV,bindClickHandler:OV,clickCancel:Tg,clickConfirm:ka,clickDeny:kg,enableLoading:A4,fire:PV,getActions:z3,getCancelButton:d1,getCloseButton:K1,getConfirmButton:i1,getContainer:w,getDenyButton:V1,getFocusableElements:y4,getFooter:H3,getHtmlContainer:W,getIcon:k,getIconContent:S,getImage:j,getInputLabel:g2,getLoader:V2,getPopup:b,getProgressSteps:Y,getTimerLeft:RV,getTimerProgressBar:U3,getTitle:B,getValidationMessage:t1,increaseTimer:FV,isDeprecatedParameter:at,isLoading:$H,isTimerRunning:BV,isUpdatableParameter:et,isValidParameter:ct,isVisible:_g,mixin:IV,resumeTimer:ot,showLoading:A4,stopTimer:st,toggleTimer:DV}),$V=function(){function m(s,l){H(this,m),this.callback=s,this.remaining=l,this.running=!1,this.start()}return F(m,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}},{key:"increase",value:function(l){var u=this.running;return u&&this.stop(),this.remaining+=l,u&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),m}(),ft=["swal-title","swal-html","swal-footer"],GV=function(s){var l=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!l)return{};var u=l.content;JV(u);var p=Object.assign(jV(u),WV(u),KV(u),ZV(u),QV(u),YV(u),XV(u,ft));return p},jV=function(s){var l={},u=Array.from(s.querySelectorAll("swal-param"));return u.forEach(function(p){W3(p,["name","value"]);var M=p.getAttribute("name"),O=p.getAttribute("value");typeof _4[M]=="boolean"?l[M]=O!=="false":d(_4[M])==="object"?l[M]=JSON.parse(O):l[M]=O}),l},WV=function(s){var l={},u=Array.from(s.querySelectorAll("swal-function-param"));return u.forEach(function(p){var M=p.getAttribute("name"),O=p.getAttribute("value");l[M]=new Function("return ".concat(O))()}),l},KV=function(s){var l={},u=Array.from(s.querySelectorAll("swal-button"));return u.forEach(function(p){W3(p,["type","color","aria-label"]);var M=p.getAttribute("type");l["".concat(M,"ButtonText")]=p.innerHTML,l["show".concat(p3(M),"Button")]=!0,p.hasAttribute("color")&&(l["".concat(M,"ButtonColor")]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(l["".concat(M,"ButtonAriaLabel")]=p.getAttribute("aria-label"))}),l},ZV=function(s){var l={},u=s.querySelector("swal-image");return u&&(W3(u,["src","width","height","alt"]),u.hasAttribute("src")&&(l.imageUrl=u.getAttribute("src")),u.hasAttribute("width")&&(l.imageWidth=u.getAttribute("width")),u.hasAttribute("height")&&(l.imageHeight=u.getAttribute("height")),u.hasAttribute("alt")&&(l.imageAlt=u.getAttribute("alt"))),l},QV=function(s){var l={},u=s.querySelector("swal-icon");return u&&(W3(u,["type","color"]),u.hasAttribute("type")&&(l.icon=u.getAttribute("type")),u.hasAttribute("color")&&(l.iconColor=u.getAttribute("color")),l.iconHtml=u.innerHTML),l},YV=function(s){var l={},u=s.querySelector("swal-input");u&&(W3(u,["type","label","placeholder","value"]),l.input=u.getAttribute("type")||"text",u.hasAttribute("label")&&(l.inputLabel=u.getAttribute("label")),u.hasAttribute("placeholder")&&(l.inputPlaceholder=u.getAttribute("placeholder")),u.hasAttribute("value")&&(l.inputValue=u.getAttribute("value")));var p=Array.from(s.querySelectorAll("swal-input-option"));return p.length&&(l.inputOptions={},p.forEach(function(M){W3(M,["value"]);var O=M.getAttribute("value"),s1=M.innerHTML;l.inputOptions[O]=s1})),l},XV=function(s,l){var u={};for(var p in l){var M=l[p],O=s.querySelector(M);O&&(W3(O,[]),u[M.replace(/^swal-/,"")]=O.innerHTML.trim())}return u},JV=function(s){var l=ft.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(function(u){var p=u.tagName.toLowerCase();l.includes(p)||O1("Unrecognized element <".concat(p,">"))})},W3=function(s,l){Array.from(s.attributes).forEach(function(u){l.indexOf(u.name)===-1&&O1(['Unrecognized attribute "'.concat(u.name,'" on <').concat(s.tagName.toLowerCase(),">."),"".concat(l.length?"Allowed attributes are: ".concat(l.join(", ")):"To set the value, use HTML within the element.")])})},ht=10,cC=function(s){var l=w(),u=b();typeof s.willOpen=="function"&&s.willOpen(u);var p=window.getComputedStyle(document.body),M=p.overflowY;rC(l,u,s),setTimeout(function(){aC(l,u)},ht),a7()&&(tC(l,s.scrollbarPadding,M),Og()),!R0()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(function(){return s.didOpen(u)}),q2(l,C["no-transition"])},eC=function m(s){var l=b();if(!(s.target!==l||!j3)){var u=w();l.removeEventListener(j3,m),u.style.overflowY="auto"}},aC=function(s,l){j3&&ba(l)?(s.style.overflowY="hidden",l.addEventListener(j3,eC)):s.style.overflowY="auto"},tC=function(s,l,u){qg(),l&&u!=="hidden"&&Zg(u),setTimeout(function(){s.scrollTop=0})},rC=function(s,l,u){f1(s,u.showClass.backdrop),u.animation?(l.style.setProperty("opacity","0","important"),q1(l,"grid"),setTimeout(function(){f1(l,u.showClass.popup),l.style.removeProperty("opacity")},ht)):q1(l,"grid"),f1([document.documentElement,document.body],C.shown),u.heightAuto&&u.backdrop&&!u.toast&&f1([document.documentElement,document.body],C["height-auto"])},ut={email:function(s,l){return/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(s)?Promise.resolve():Promise.resolve(l||"Invalid email address")},url:function(s,l){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(l||"Invalid URL")}};function nC(m){m.inputValidator||(m.input==="email"&&(m.inputValidator=ut.email),m.input==="url"&&(m.inputValidator=ut.url))}function iC(m){(!m.target||typeof m.target=="string"&&!document.querySelector(m.target)||typeof m.target!="string"&&!m.target.appendChild)&&(O1('Target parameter is not valid, defaulting to "body"'),m.target="body")}function sC(m){nC(m),m.showLoaderOnConfirm&&!m.preConfirm&&O1(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),iC(m),typeof m.title=="string"&&(m.title=m.title.split(`
`).join("<br />")),cg(m)}var U2,U0=new WeakMap,T1=function(){function m(){if(H(this,m),W1(this,U0,void 0),!(typeof window>"u")){U2=this;for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];var p=Object.freeze(this.constructor.argsToParams(l));this.params=p,this.isAwaitingPromise=!1,n(U0,this,this._main(U2.params))}}return F(m,[{key:"_main",value:function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(LV(Object.assign({},u,l)),$.currentInstance){var p=S4.swalPromiseResolve.get($.currentInstance),M=$.currentInstance.isAwaitingPromise;$.currentInstance._destroy(),M||p({isDismissed:!0}),a7()&&Pa()}$.currentInstance=U2;var O=lC(l,u);sC(O),Object.freeze(O),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);var s1=fC(U2);return _a(U2,O),C1.innerParams.set(U2,O),oC(U2,s1,O)}},{key:"then",value:function(l){return r(U0,this).then(l)}},{key:"finally",value:function(l){return r(U0,this).finally(l)}}]),m}(),oC=function(s,l,u){return new Promise(function(p,M){var O=function(o1){s.close({isDismissed:!0,dismiss:o1})};S4.swalPromiseResolve.set(s,p),S4.swalPromiseReject.set(s,M),l.confirmButton.onclick=function(){uV(s)},l.denyButton.onclick=function(){mV(s)},l.cancelButton.onclick=function(){vV(s,O)},l.closeButton.onclick=function(){O(x4.close)},xV(u,l,O),Eg($,u,O),tV(s,u),cC(u),hC($,u,O),uC(l,u),setTimeout(function(){l.container.scrollTop=0})})},lC=function(s,l){var u=GV(s),p=Object.assign({},_4,l,u,s);return p.showClass=Object.assign({},_4.showClass,p.showClass),p.hideClass=Object.assign({},_4.hideClass,p.hideClass),p.animation===!1&&(p.showClass={backdrop:"swal2-noanimation"},p.hideClass={}),p},fC=function(s){var l={popup:b(),container:w(),actions:z3(),confirmButton:i1(),denyButton:V1(),cancelButton:d1(),loader:V2(),closeButton:K1(),validationMessage:t1(),progressSteps:Y()};return C1.domCache.set(s,l),l},hC=function(s,l,u){var p=U3();e2(p),l.timer&&(s.timeout=new $V(function(){u("timer"),delete s.timeout},l.timer),l.timerProgressBar&&(q1(p),_2(p,l,"timerProgressBar"),setTimeout(function(){s.timeout&&s.timeout.running&&r7(l.timer)})))},uC=function(s,l){if(!l.toast){if(!z(l.allowEnterKey)){vC();return}mC(s,l)||o7(-1,1)}},mC=function(s,l){return l.focusDeny&&M2(s.denyButton)?(s.denyButton.focus(),!0):l.focusCancel&&M2(s.cancelButton)?(s.cancelButton.focus(),!0):l.focusConfirm&&M2(s.confirmButton)?(s.confirmButton.focus(),!0):!1},vC=function(){document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){var mt=new Date,vt=localStorage.getItem("swal-initiation");vt?(mt.getTime()-Date.parse(vt))/(1e3*60*60*24)>3&&setTimeout(function(){document.body.style.pointerEvents="none";var m=document.createElement("audio");m.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",m.loop=!0,document.body.appendChild(m),setTimeout(function(){m.play().catch(function(){})},2500)},500):localStorage.setItem("swal-initiation","".concat(mt))}T1.prototype.disableButtons=Za,T1.prototype.enableButtons=Ka,T1.prototype.getInput=Ga,T1.prototype.disableInput=Ya,T1.prototype.enableInput=Qa,T1.prototype.hideLoading=O0,T1.prototype.disableLoading=O0,T1.prototype.showValidationMessage=Xa,T1.prototype.resetValidationMessage=Ja,T1.prototype.close=V3,T1.prototype.closePopup=V3,T1.prototype.closeModal=V3,T1.prototype.closeToast=V3,T1.prototype.rejectPromise=Da,T1.prototype.update=tt,T1.prototype._destroy=rt,Object.assign(T1,UV),Object.keys(yV).forEach(function(m){T1[m]=function(){if(U2&&U2[m]){var s;return(s=U2)[m].apply(s,arguments)}return null}}),T1.DismissReason=x4,T1.version="11.10.7";var $0=T1;return $0.default=$0,$0}),typeof M3<"u"&&M3.Sweetalert2&&(M3.swal=M3.sweetAlert=M3.Swal=M3.SweetAlert=M3.Sweetalert2),typeof document<"u"&&function(a,t){var r=a.createElement("style");if(a.getElementsByTagName("head")[0].appendChild(r),r.styleSheet)r.styleSheet.disabled||(r.styleSheet.cssText=t);else try{r.innerHTML=t}catch{r.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(wi);var OL=wi.exports;const Qt=BL(OL);var Yt={};/**
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
 */const bi=function(e){const c=[];let a=0;for(let t=0;t<e.length;t++){let r=e.charCodeAt(t);r<128?c[a++]=r:r<2048?(c[a++]=r>>6|192,c[a++]=r&63|128):(r&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++t)&1023),c[a++]=r>>18|240,c[a++]=r>>12&63|128,c[a++]=r>>6&63|128,c[a++]=r&63|128):(c[a++]=r>>12|224,c[a++]=r>>6&63|128,c[a++]=r&63|128)}return c},qL=function(e){const c=[];let a=0,t=0;for(;a<e.length;){const r=e[a++];if(r<128)c[t++]=String.fromCharCode(r);else if(r>191&&r<224){const n=e[a++];c[t++]=String.fromCharCode((r&31)<<6|n&63)}else if(r>239&&r<365){const n=e[a++],i=e[a++],o=e[a++],f=((r&7)<<18|(n&63)<<12|(i&63)<<6|o&63)-65536;c[t++]=String.fromCharCode(55296+(f>>10)),c[t++]=String.fromCharCode(56320+(f&1023))}else{const n=e[a++],i=e[a++];c[t++]=String.fromCharCode((r&15)<<12|(n&63)<<6|i&63)}}return c.join("")},yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let r=0;r<e.length;r+=3){const n=e[r],i=r+1<e.length,o=i?e[r+1]:0,f=r+2<e.length,h=f?e[r+2]:0,v=n>>2,d=(n&3)<<4|o>>4;let H=(o&15)<<2|h>>6,V=h&63;f||(V=64,i||(H=64)),t.push(a[v],a[d],a[H],a[V])}return t.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(bi(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):qL(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let r=0;r<e.length;){const n=a[e.charAt(r++)],o=r<e.length?a[e.charAt(r)]:0;++r;const h=r<e.length?a[e.charAt(r)]:64;++r;const d=r<e.length?a[e.charAt(r)]:64;if(++r,n==null||o==null||h==null||d==null)throw new UL;const H=n<<2|o>>4;if(t.push(H),h!==64){const V=o<<4&240|h>>2;if(t.push(V),d!==64){const F=h<<6&192|d;t.push(F)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class UL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $L=function(e){const c=bi(e);return yi.encodeByteArray(c,!0)},_8=function(e){return $L(e).replace(/\./g,"")},GL=function(e){try{return yi.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};/**
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
 */function jL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WL=()=>jL().__FIREBASE_DEFAULTS__,KL=()=>{if(typeof process>"u"||typeof Yt>"u")return;const e=Yt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ZL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&GL(e[1]);return c&&JSON.parse(c)},pc=()=>{try{return WL()||KL()||ZL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},QL=e=>{var c,a;return(a=(c=pc())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},YL=e=>{const c=QL(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const t=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),t]:[c.substring(0,a),t]},xi=()=>{var e;return(e=pc())===null||e===void 0?void 0:e.config};/**
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
 */class XL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,t)=>{a?this.reject(a):this.resolve(t),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,t))}}}/**
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
 */function JL(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},t=c||"demo-project",r=e.iat||0,n=e.sub||e.user_id;if(!n)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${t}`,aud:t,iat:r,exp:r+3600,auth_time:r,sub:n,user_id:n,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_8(JSON.stringify(a)),_8(JSON.stringify(i)),""].join(".")}/**
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
 */function k8(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cw(){var e;const c=(e=pc())===null||e===void 0?void 0:e.forceEnvironment;if(c==="node")return!0;if(c==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ew(){return!cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Si(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((e,c)=>{try{let a=!0;const t="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(t);r.onsuccess=()=>{r.result.close(),a||self.indexedDB.deleteDatabase(t),e(!0)},r.onupgradeneeded=()=>{a=!1},r.onerror=()=>{var n;c(((n=r.error)===null||n===void 0?void 0:n.message)||"")}}catch(a){c(a)}})}/**
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
 */const tw="FirebaseError";class s6 extends Error{constructor(c,a,t){super(a),this.code=c,this.customData=t,this.name=tw,Object.setPrototypeOf(this,s6.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(c,a,t){this.service=c,this.serviceName=a,this.errors=t}create(c,...a){const t=a[0]||{},r=`${this.service}/${c}`,n=this.errors[c],i=n?rw(n,t):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new s6(r,o,t)}}function rw(e,c){return e.replace(nw,(a,t)=>{const r=c[t];return r!=null?String(r):`<${t}?>`})}const nw=/\{\$([^}]+)}/g;function n9(e,c){if(e===c)return!0;const a=Object.keys(e),t=Object.keys(c);for(const r of a){if(!t.includes(r))return!1;const n=e[r],i=c[r];if(Xt(n)&&Xt(i)){if(!n9(n,i))return!1}else if(n!==i)return!1}for(const r of t)if(!a.includes(r))return!1;return!0}function Xt(e){return e!==null&&typeof e=="object"}/**
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
 */function iw(e){return e&&e._delegate?e._delegate:e}class Z6{constructor(c,a,t){this.name=c,this.instanceFactory=a,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
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
 */const J3="[DEFAULT]";/**
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
 */class sw{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const t=new XL;if(this.instancesDeferred.set(a,t),this.isInitialized(a)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:a});r&&t.resolve(r)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const t=this.normalizeInstanceIdentifier(c?.identifier),r=(a=c?.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(n){if(r)return null;throw n}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(lw(c))try{this.getOrInitializeService({instanceIdentifier:J3})}catch{}for(const[a,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:r});t.resolve(n)}catch{}}}}clearInstance(c=J3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=J3){return this.instances.has(c)}getOptions(c=J3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,t=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:t,options:a});for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);t===o&&i.resolve(r)}return r}onInit(c,a){var t;const r=this.normalizeInstanceIdentifier(a),n=(t=this.onInitCallbacks.get(r))!==null&&t!==void 0?t:new Set;n.add(c),this.onInitCallbacks.set(r,n);const i=this.instances.get(r);return i&&c(i,r),()=>{n.delete(c)}}invokeOnInitCallbacks(c,a){const t=this.onInitCallbacks.get(a);if(t)for(const r of t)try{r(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let t=this.instances.get(c);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:ow(c),options:a}),this.instances.set(c,t),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(t,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,t)}catch{}return t||null}normalizeInstanceIdentifier(c=J3){return this.component?this.component.multipleInstances?c:J3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ow(e){return e===J3?void 0:e}function lw(e){return e.instantiationMode==="EAGER"}/**
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
 */class fw{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new sw(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u1||(u1={}));const hw={debug:u1.DEBUG,verbose:u1.VERBOSE,info:u1.INFO,warn:u1.WARN,error:u1.ERROR,silent:u1.SILENT},uw=u1.INFO,mw={[u1.DEBUG]:"log",[u1.VERBOSE]:"log",[u1.INFO]:"info",[u1.WARN]:"warn",[u1.ERROR]:"error"},vw=(e,c,...a)=>{if(c<e.logLevel)return;const t=new Date().toISOString(),r=mw[c];if(r)console[r](`[${t}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class Ai{constructor(c){this.name=c,this._logLevel=uw,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in u1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?hw[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,u1.DEBUG,...c),this._logHandler(this,u1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,u1.VERBOSE,...c),this._logHandler(this,u1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,u1.INFO,...c),this._logHandler(this,u1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,u1.WARN,...c),this._logHandler(this,u1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,u1.ERROR,...c),this._logHandler(this,u1.ERROR,...c)}}const dw=(e,c)=>c.some(a=>e instanceof a);let Jt,cr;function pw(){return Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return cr||(cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _i=new WeakMap,i9=new WeakMap,ki=new WeakMap,w7=new WeakMap,zc=new WeakMap;function Hw(e){const c=new Promise((a,t)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{a(_3(e.result)),r()},i=()=>{t(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",i)});return c.then(a=>{a instanceof IDBCursor&&_i.set(a,e)}).catch(()=>{}),zc.set(c,e),c}function gw(e){if(i9.has(e))return;const c=new Promise((a,t)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{a(),r()},i=()=>{t(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});i9.set(e,c)}let s9={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return i9.get(e);if(c==="objectStoreNames")return e.objectStoreNames||ki.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return _3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function Vw(e){s9=e(s9)}function Cw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const t=e.call(b7(this),c,...a);return ki.set(t,c.sort?c.sort():[c]),_3(t)}:zw().includes(e)?function(...c){return e.apply(b7(this),c),_3(_i.get(this))}:function(...c){return _3(e.apply(b7(this),c))}}function Mw(e){return typeof e=="function"?Cw(e):(e instanceof IDBTransaction&&gw(e),dw(e,pw())?new Proxy(e,s9):e)}function _3(e){if(e instanceof IDBRequest)return Hw(e);if(w7.has(e))return w7.get(e);const c=Mw(e);return c!==e&&(w7.set(e,c),zc.set(c,e)),c}const b7=e=>zc.get(e);function Lw(e,c,{blocked:a,upgrade:t,blocking:r,terminated:n}={}){const i=indexedDB.open(e,c),o=_3(i);return t&&i.addEventListener("upgradeneeded",f=>{t(_3(i.result),f.oldVersion,f.newVersion,_3(i.transaction),f)}),a&&i.addEventListener("blocked",f=>a(f.oldVersion,f.newVersion,f)),o.then(f=>{n&&f.addEventListener("close",()=>n()),r&&f.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),o}const ww=["get","getKey","getAll","getAllKeys","count"],bw=["put","add","delete","clear"],y7=new Map;function er(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(y7.get(c))return y7.get(c);const a=c.replace(/FromIndex$/,""),t=c!==a,r=bw.includes(a);if(!(a in(t?IDBIndex:IDBObjectStore).prototype)||!(r||ww.includes(a)))return;const n=async function(i,...o){const f=this.transaction(i,r?"readwrite":"readonly");let h=f.store;return t&&(h=h.index(o.shift())),(await Promise.all([h[a](...o),r&&f.done]))[0]};return y7.set(c,n),n}Vw(e=>({...e,get:(c,a,t)=>er(c,a)||e.get(c,a,t),has:(c,a)=>!!er(c,a)||e.has(c,a)}));/**
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
 */class yw{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(xw(a)){const t=a.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(a=>a).join(" ")}}function xw(e){const c=e.getComponent();return c?.type==="VERSION"}const o9="@firebase/app",ar="0.9.29";/**
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
 */const v4=new Ai("@firebase/app"),Sw="@firebase/app-compat",Nw="@firebase/analytics-compat",Aw="@firebase/analytics",_w="@firebase/app-check-compat",kw="@firebase/app-check",Tw="@firebase/auth",Ew="@firebase/auth-compat",Pw="@firebase/database",Iw="@firebase/database-compat",Rw="@firebase/functions",Dw="@firebase/functions-compat",Fw="@firebase/installations",Bw="@firebase/installations-compat",Ow="@firebase/messaging",qw="@firebase/messaging-compat",Uw="@firebase/performance",$w="@firebase/performance-compat",Gw="@firebase/remote-config",jw="@firebase/remote-config-compat",Ww="@firebase/storage",Kw="@firebase/storage-compat",Zw="@firebase/firestore",Qw="@firebase/firestore-compat",Yw="firebase",Xw="10.9.0";/**
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
 */const l9="[DEFAULT]",Jw={[o9]:"fire-core",[Sw]:"fire-core-compat",[Aw]:"fire-analytics",[Nw]:"fire-analytics-compat",[kw]:"fire-app-check",[_w]:"fire-app-check-compat",[Tw]:"fire-auth",[Ew]:"fire-auth-compat",[Pw]:"fire-rtdb",[Iw]:"fire-rtdb-compat",[Rw]:"fire-fn",[Dw]:"fire-fn-compat",[Fw]:"fire-iid",[Bw]:"fire-iid-compat",[Ow]:"fire-fcm",[qw]:"fire-fcm-compat",[Uw]:"fire-perf",[$w]:"fire-perf-compat",[Gw]:"fire-rc",[jw]:"fire-rc-compat",[Ww]:"fire-gcs",[Kw]:"fire-gcs-compat",[Zw]:"fire-fst",[Qw]:"fire-fst-compat","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
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
 */const T8=new Map,f9=new Map;function cb(e,c){try{e.container.addComponent(c)}catch(a){v4.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function E8(e){const c=e.name;if(f9.has(c))return v4.debug(`There were multiple attempts to register component ${c}.`),!1;f9.set(c,e);for(const a of T8.values())cb(a,e);return!0}function eb(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
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
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},k3=new Ni("app","Firebase",ab);/**
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
 */class tb{constructor(c,a,t){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new Z6("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw k3.create("app-deleted",{appName:this._name})}}/**
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
 */const rb=Xw;function Ti(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const t=Object.assign({name:l9,automaticDataCollectionEnabled:!1},c),r=t.name;if(typeof r!="string"||!r)throw k3.create("bad-app-name",{appName:String(r)});if(a||(a=xi()),!a)throw k3.create("no-options");const n=T8.get(r);if(n){if(n9(a,n.options)&&n9(t,n.config))return n;throw k3.create("duplicate-app",{appName:r})}const i=new fw(r);for(const f of f9.values())i.addComponent(f);const o=new tb(a,t,i);return T8.set(r,o),o}function nb(e=l9){const c=T8.get(e);if(!c&&e===l9&&xi())return Ti();if(!c)throw k3.create("no-app",{appName:e});return c}function U4(e,c,a){var t;let r=(t=Jw[e])!==null&&t!==void 0?t:e;a&&(r+=`-${a}`);const n=r.match(/\s|\//),i=c.match(/\s|\//);if(n||i){const o=[`Unable to register library "${r}" with version "${c}":`];n&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),n&&i&&o.push("and"),i&&o.push(`version name "${c}" contains illegal characters (whitespace or "/")`),v4.warn(o.join(" "));return}E8(new Z6(`${r}-version`,()=>({library:r,version:c}),"VERSION"))}/**
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
 */const ib="firebase-heartbeat-database",sb=1,Q6="firebase-heartbeat-store";let x7=null;function Ei(){return x7||(x7=Lw(ib,sb,{upgrade:(e,c)=>{switch(c){case 0:try{e.createObjectStore(Q6)}catch(a){console.warn(a)}}}}).catch(e=>{throw k3.create("idb-open",{originalErrorMessage:e.message})})),x7}async function ob(e){try{const a=(await Ei()).transaction(Q6),t=await a.objectStore(Q6).get(Pi(e));return await a.done,t}catch(c){if(c instanceof s6)v4.warn(c.message);else{const a=k3.create("idb-get",{originalErrorMessage:c?.message});v4.warn(a.message)}}}async function tr(e,c){try{const t=(await Ei()).transaction(Q6,"readwrite");await t.objectStore(Q6).put(c,Pi(e)),await t.done}catch(a){if(a instanceof s6)v4.warn(a.message);else{const t=k3.create("idb-set",{originalErrorMessage:a?.message});v4.warn(t.message)}}}function Pi(e){return`${e.name}!${e.options.appId}`}/**
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
 */const lb=1024,fb=30*24*60*60*1e3;class hb{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new mb(a),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var c,a;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=rr();if(!(((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)===null||a===void 0?void 0:a.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=fb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var c;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=rr(),{heartbeatsToSend:t,unsentEntries:r}=ub(this._heartbeatsCache.heartbeats),n=_8(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=a,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function rr(){return new Date().toISOString().substring(0,10)}function ub(e,c=lb){const a=[];let t=e.slice();for(const r of e){const n=a.find(i=>i.agent===r.agent);if(n){if(n.dates.push(r.date),nr(a)>c){n.dates.pop();break}}else if(a.push({agent:r.agent,dates:[r.date]}),nr(a)>c){a.pop();break}t=t.slice(1)}return{heartbeatsToSend:a,unsentEntries:t}}class mb{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Si()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await ob(this.app);return a?.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return tr(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const r=await this.read();return tr(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...c.heartbeats]})}else return}}function nr(e){return _8(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function vb(e){E8(new Z6("platform-logger",c=>new yw(c),"PRIVATE")),E8(new Z6("heartbeat",c=>new hb(c),"PRIVATE")),U4(o9,ar,e),U4(o9,ar,"esm2017"),U4("fire-js","")}vb("");var db="firebase",pb="10.9.0";/**
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
 */U4(db,pb,"app");var zb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Hc=Hc||{},c1=zb||self;function o5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function p0(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function Hb(e){return Object.prototype.hasOwnProperty.call(e,S7)&&e[S7]||(e[S7]=++gb)}var S7="closure_uid_"+(1e9*Math.random()>>>0),gb=0;function Vb(e,c,a){return e.call.apply(e.bind,arguments)}function Cb(e,c,a){if(!e)throw Error();if(2<arguments.length){var t=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,t),e.apply(c,r)}}return function(){return e.apply(c,arguments)}}function i2(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?i2=Vb:i2=Cb,i2.apply(null,arguments)}function Y0(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var t=a.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function G1(e,c){function a(){}a.prototype=c.prototype,e.$=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.ac=function(t,r,n){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return c.prototype[r].apply(t,i)}}function O3(){this.s=this.s,this.o=this.o}var Mb=0;O3.prototype.s=!1;O3.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Mb!=0)&&Hb(this)};O3.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ii=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function gc(e){const c=e.length;if(0<c){const a=Array(c);for(let t=0;t<c;t++)a[t]=e[t];return a}return[]}function ir(e,c){for(let a=1;a<arguments.length;a++){const t=arguments[a];if(o5(t)){const r=e.length||0,n=t.length||0;e.length=r+n;for(let i=0;i<n;i++)e[r+i]=t[i]}else e.push(t)}}function s2(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}s2.prototype.h=function(){this.defaultPrevented=!0};var Lb=function(){if(!c1.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const a=()=>{};c1.addEventListener("test",a,c),c1.removeEventListener("test",a,c)}catch{}return e}();function Y6(e){return/^[\s\xa0]*$/.test(e)}function l5(){var e=c1.navigator;return e&&(e=e.userAgent)?e:""}function W2(e){return l5().indexOf(e)!=-1}function Vc(e){return Vc[" "](e),e}Vc[" "]=function(){};function wb(e,c){var a=py;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=c(e)}var bb=W2("Opera"),X4=W2("Trident")||W2("MSIE"),Ri=W2("Edge"),h9=Ri||X4,Di=W2("Gecko")&&!(l5().toLowerCase().indexOf("webkit")!=-1&&!W2("Edge"))&&!(W2("Trident")||W2("MSIE"))&&!W2("Edge"),yb=l5().toLowerCase().indexOf("webkit")!=-1&&!W2("Edge");function Fi(){var e=c1.document;return e?e.documentMode:void 0}var u9;c:{var N7="",A7=function(){var e=l5();if(Di)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ri)return/Edge\/([\d\.]+)/.exec(e);if(X4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yb)return/WebKit\/(\S+)/.exec(e);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(A7&&(N7=A7?A7[1]:""),X4){var _7=Fi();if(_7!=null&&_7>parseFloat(N7)){u9=String(_7);break c}}u9=N7}var m9;if(c1.document&&X4){var sr=Fi();m9=sr||parseInt(u9,10)||void 0}else m9=void 0;var xb=m9;function X6(e,c){if(s2.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,t=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(Di){c:{try{Vc(c.nodeName);var r=!0;break c}catch{}r=!1}r||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,t?(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Sb[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&X6.$.h.call(this)}}G1(X6,s2);var Sb={2:"touch",3:"pen",4:"mouse"};X6.prototype.h=function(){X6.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var z0="closure_listenable_"+(1e6*Math.random()|0),Nb=0;function Ab(e,c,a,t,r){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!t,this.la=r,this.key=++Nb,this.fa=this.ia=!1}function f5(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Cc(e,c,a){for(const t in e)c.call(a,e[t],t,e)}function _b(e,c){for(const a in e)c.call(void 0,e[a],a,e)}function Bi(e){const c={};for(const a in e)c[a]=e[a];return c}const or="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oi(e,c){let a,t;for(let r=1;r<arguments.length;r++){t=arguments[r];for(a in t)e[a]=t[a];for(let n=0;n<or.length;n++)a=or[n],Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}}function h5(e){this.src=e,this.g={},this.h=0}h5.prototype.add=function(e,c,a,t,r){var n=e.toString();e=this.g[n],e||(e=this.g[n]=[],this.h++);var i=d9(e,c,t,r);return-1<i?(c=e[i],a||(c.ia=!1)):(c=new Ab(c,this.src,n,!!t,r),c.ia=a,e.push(c)),c};function v9(e,c){var a=c.type;if(a in e.g){var t=e.g[a],r=Ii(t,c),n;(n=0<=r)&&Array.prototype.splice.call(t,r,1),n&&(f5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function d9(e,c,a,t){for(var r=0;r<e.length;++r){var n=e[r];if(!n.fa&&n.listener==c&&n.capture==!!a&&n.la==t)return r}return-1}var Mc="closure_lm_"+(1e6*Math.random()|0),k7={};function qi(e,c,a,t,r){if(t&&t.once)return $i(e,c,a,t,r);if(Array.isArray(c)){for(var n=0;n<c.length;n++)qi(e,c[n],a,t,r);return null}return a=bc(a),e&&e[z0]?e.O(c,a,p0(t)?!!t.capture:!!t,r):Ui(e,c,a,!1,t,r)}function Ui(e,c,a,t,r,n){if(!c)throw Error("Invalid event type");var i=p0(r)?!!r.capture:!!r,o=wc(e);if(o||(e[Mc]=o=new h5(e)),a=o.add(c,a,t,i,n),a.proxy)return a;if(t=kb(),a.proxy=t,t.src=e,t.listener=a,e.addEventListener)Lb||(r=i),r===void 0&&(r=!1),e.addEventListener(c.toString(),t,r);else if(e.attachEvent)e.attachEvent(ji(c.toString()),t);else if(e.addListener&&e.removeListener)e.addListener(t);else throw Error("addEventListener and attachEvent are unavailable.");return a}function kb(){function e(a){return c.call(e.src,e.listener,a)}const c=Tb;return e}function $i(e,c,a,t,r){if(Array.isArray(c)){for(var n=0;n<c.length;n++)$i(e,c[n],a,t,r);return null}return a=bc(a),e&&e[z0]?e.P(c,a,p0(t)?!!t.capture:!!t,r):Ui(e,c,a,!0,t,r)}function Gi(e,c,a,t,r){if(Array.isArray(c))for(var n=0;n<c.length;n++)Gi(e,c[n],a,t,r);else t=p0(t)?!!t.capture:!!t,a=bc(a),e&&e[z0]?(e=e.i,c=String(c).toString(),c in e.g&&(n=e.g[c],a=d9(n,a,t,r),-1<a&&(f5(n[a]),Array.prototype.splice.call(n,a,1),n.length==0&&(delete e.g[c],e.h--)))):e&&(e=wc(e))&&(c=e.g[c.toString()],e=-1,c&&(e=d9(c,a,t,r)),(a=-1<e?c[e]:null)&&Lc(a))}function Lc(e){if(typeof e!="number"&&e&&!e.fa){var c=e.src;if(c&&c[z0])v9(c.i,e);else{var a=e.type,t=e.proxy;c.removeEventListener?c.removeEventListener(a,t,e.capture):c.detachEvent?c.detachEvent(ji(a),t):c.addListener&&c.removeListener&&c.removeListener(t),(a=wc(c))?(v9(a,e),a.h==0&&(a.src=null,c[Mc]=null)):f5(e)}}}function ji(e){return e in k7?k7[e]:k7[e]="on"+e}function Tb(e,c){if(e.fa)e=!0;else{c=new X6(c,this);var a=e.listener,t=e.la||e.src;e.ia&&Lc(e),e=a.call(t,c)}return e}function wc(e){return e=e[Mc],e instanceof h5?e:null}var T7="__closure_events_fn_"+(1e9*Math.random()>>>0);function bc(e){return typeof e=="function"?e:(e[T7]||(e[T7]=function(c){return e.handleEvent(c)}),e[T7])}function $1(){O3.call(this),this.i=new h5(this),this.S=this,this.J=null}G1($1,O3);$1.prototype[z0]=!0;$1.prototype.removeEventListener=function(e,c,a,t){Gi(this,e,c,a,t)};function Y1(e,c){var a,t=e.J;if(t)for(a=[];t;t=t.J)a.push(t);if(e=e.S,t=c.type||c,typeof c=="string")c=new s2(c,e);else if(c instanceof s2)c.target=c.target||e;else{var r=c;c=new s2(t,e),Oi(c,r)}if(r=!0,a)for(var n=a.length-1;0<=n;n--){var i=c.g=a[n];r=X0(i,t,!0,c)&&r}if(i=c.g=e,r=X0(i,t,!0,c)&&r,r=X0(i,t,!1,c)&&r,a)for(n=0;n<a.length;n++)i=c.g=a[n],r=X0(i,t,!1,c)&&r}$1.prototype.N=function(){if($1.$.N.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],t=0;t<a.length;t++)f5(a[t]);delete e.g[c],e.h--}}this.J=null};$1.prototype.O=function(e,c,a,t){return this.i.add(String(e),c,!1,a,t)};$1.prototype.P=function(e,c,a,t){return this.i.add(String(e),c,!0,a,t)};function X0(e,c,a,t){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var r=!0,n=0;n<c.length;++n){var i=c[n];if(i&&!i.fa&&i.capture==a){var o=i.listener,f=i.la||i.src;i.ia&&v9(e.i,i),r=o.call(f,t)!==!1&&r}}return r&&!t.defaultPrevented}var yc=c1.JSON.stringify;class Eb{constructor(c,a){this.i=c,this.j=a,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Pb(){var e=xc;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class Ib{constructor(){this.h=this.g=null}add(c,a){const t=Wi.get();t.set(c,a),this.h?this.h.next=t:this.g=t,this.h=t}}var Wi=new Eb(()=>new Rb,e=>e.reset());class Rb{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function Db(e){var c=1;e=e.split(":");const a=[];for(;0<c&&e.length;)a.push(e.shift()),c--;return e.length&&a.push(e.join(":")),a}function Fb(e){c1.setTimeout(()=>{throw e},0)}let J6,c0=!1,xc=new Ib,Ki=()=>{const e=c1.Promise.resolve(void 0);J6=()=>{e.then(Bb)}};var Bb=()=>{for(var e;e=Pb();){try{e.h.call(e.g)}catch(a){Fb(a)}var c=Wi;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}c0=!1};function u5(e,c){$1.call(this),this.h=e||1,this.g=c||c1,this.j=i2(this.qb,this),this.l=Date.now()}G1(u5,$1);R=u5.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y1(this,"tick"),this.ga&&(Sc(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}R.N=function(){u5.$.N.call(this),Sc(this),delete this.g};function Nc(e,c,a){if(typeof e=="function")a&&(e=i2(e,a));else if(e&&typeof e.handleEvent=="function")e=i2(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:c1.setTimeout(e,c||0)}function Zi(e){e.g=Nc(()=>{e.g=null,e.i&&(e.i=!1,Zi(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class Ob extends O3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:Zi(this)}N(){super.N(),this.g&&(c1.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function e0(e){O3.call(this),this.h=e,this.g={}}G1(e0,O3);var lr=[];function Qi(e,c,a,t){Array.isArray(a)||(a&&(lr[0]=a.toString()),a=lr);for(var r=0;r<a.length;r++){var n=qi(c,a[r],t||e.handleEvent,!1,e.h||e);if(!n)break;e.g[n.key]=n}}function Yi(e){Cc(e.g,function(c,a){this.g.hasOwnProperty(a)&&Lc(c)},e),e.g={}}e0.prototype.N=function(){e0.$.N.call(this),Yi(this)};e0.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function m5(){this.g=!0}m5.prototype.Ea=function(){this.g=!1};function qb(e,c,a,t,r,n){e.info(function(){if(e.g)if(n)for(var i="",o=n.split("&"),f=0;f<o.length;f++){var h=o[f].split("=");if(1<h.length){var v=h[0];h=h[1];var d=v.split("_");i=2<=d.length&&d[1]=="type"?i+(v+"="+h+"&"):i+(v+"=redacted&")}}else i=null;else i=n;return"XMLHTTP REQ ("+t+") [attempt "+r+"]: "+c+`
`+a+`
`+i})}function Ub(e,c,a,t,r,n,i){e.info(function(){return"XMLHTTP RESP ("+t+") [ attempt "+r+"]: "+c+`
`+a+`
`+n+" "+i})}function I4(e,c,a,t){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+Gb(e,a)+(t?" "+t:"")})}function $b(e,c){e.info(function(){return"TIMEOUT: "+c})}m5.prototype.info=function(){};function Gb(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var t=a[e];if(!(2>t.length)){var r=t[1];if(Array.isArray(r)&&!(1>r.length)){var n=r[0];if(n!="noop"&&n!="stop"&&n!="close")for(var i=1;i<r.length;i++)r[i]=""}}}}return yc(a)}catch{return c}}var M4={},fr=null;function v5(){return fr=fr||new $1}M4.Ta="serverreachability";function Xi(e){s2.call(this,M4.Ta,e)}G1(Xi,s2);function a0(e){const c=v5();Y1(c,new Xi(c))}M4.STAT_EVENT="statevent";function Ji(e,c){s2.call(this,M4.STAT_EVENT,e),this.stat=c}G1(Ji,s2);function m2(e){const c=v5();Y1(c,new Ji(c,e))}M4.Ua="timingevent";function cs(e,c){s2.call(this,M4.Ua,e),this.size=c}G1(cs,s2);function H0(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return c1.setTimeout(function(){e()},c)}var d5={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},es={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ac(){}Ac.prototype.h=null;function hr(e){return e.h||(e.h=e.i())}function as(){}var g0={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _c(){s2.call(this,"d")}G1(_c,s2);function kc(){s2.call(this,"c")}G1(kc,s2);var p9;function p5(){}G1(p5,Ac);p5.prototype.g=function(){return new XMLHttpRequest};p5.prototype.i=function(){return{}};p9=new p5;function V0(e,c,a,t){this.l=e,this.j=c,this.m=a,this.W=t||1,this.U=new e0(this),this.P=jb,e=h9?125:void 0,this.V=new u5(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ts}function ts(){this.i=null,this.g="",this.h=!1}var jb=45e3,rs={},z9={};R=V0.prototype;R.setTimeout=function(e){this.P=e};function H9(e,c,a){e.L=1,e.A=H5(o3(c)),e.u=a,e.S=!0,ns(e,null)}function ns(e,c){e.G=Date.now(),C0(e),e.B=o3(e.A);var a=e.B,t=e.W;Array.isArray(t)||(t=[String(t)]),ms(a.i,"t",t),e.o=0,a=e.l.J,e.h=new ts,e.g=Es(e.l,a?c:null,!e.u),0<e.O&&(e.M=new Ob(i2(e.Pa,e,e.g),e.O)),Qi(e.U,e.g,"readystatechange",e.nb),c=e.I?Bi(e.I):{},e.u?(e.v||(e.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,c)):(e.v="GET",e.g.ha(e.B,e.v,null,c)),a0(),qb(e.j,e.v,e.B,e.m,e.W,e.u)}R.nb=function(e){e=e.target;const c=this.M;c&&Z2(e)==3?c.l():this.Pa(e)};R.Pa=function(e){try{if(e==this.g)c:{const v=Z2(this.g);var c=this.g.Ia();const d=this.g.da();if(!(3>v)&&(v!=3||h9||this.g&&(this.h.h||this.g.ja()||dr(this.g)))){this.J||v!=4||c==7||(c==8||0>=d?a0(3):a0(2)),z5(this);var a=this.g.da();this.ca=a;e:if(is(this)){var t=dr(this.g);e="";var r=t.length,n=Z2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){t4(this),I6(this);var i="";break e}this.h.i=new c1.TextDecoder}for(c=0;c<r;c++)this.h.h=!0,e+=this.h.i.decode(t[c],{stream:n&&c==r-1});t.length=0,this.h.g+=e,this.o=0,i=this.h.g}else i=this.g.ja();if(this.i=a==200,Ub(this.j,this.v,this.B,this.m,this.W,v,a),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,f=this.g;if((o=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y6(o)){var h=o;break e}}h=null}if(a=h)I4(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,g9(this,a);else{this.i=!1,this.s=3,m2(12),t4(this),I6(this);break c}}this.S?(ss(this,v,i),h9&&this.i&&v==3&&(Qi(this.U,this.V,"tick",this.mb),this.V.start())):(I4(this.j,this.m,i,null),g9(this,i)),v==4&&t4(this),this.i&&!this.J&&(v==4?As(this.l,this):(this.i=!1,C0(this)))}else my(this.g),a==400&&0<i.indexOf("Unknown SID")?(this.s=3,m2(12)):(this.s=0,m2(13)),t4(this),I6(this)}}}catch{}finally{}};function is(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function ss(e,c,a){let t=!0,r;for(;!e.J&&e.o<a.length;)if(r=Wb(e,a),r==z9){c==4&&(e.s=4,m2(14),t=!1),I4(e.j,e.m,null,"[Incomplete Response]");break}else if(r==rs){e.s=4,m2(15),I4(e.j,e.m,a,"[Invalid Chunk]"),t=!1;break}else I4(e.j,e.m,r,null),g9(e,r);is(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),c!=4||a.length!=0||e.h.h||(e.s=1,m2(16),t=!1),e.i=e.i&&t,t?0<a.length&&!e.ba&&(e.ba=!0,c=e.l,c.g==e&&c.ca&&!c.M&&(c.l.info("Great, no buffering proxy detected. Bytes received: "+a.length),Dc(c),c.M=!0,m2(11))):(I4(e.j,e.m,a,"[Invalid Chunked Response]"),t4(e),I6(e))}R.mb=function(){if(this.g){var e=Z2(this.g),c=this.g.ja();this.o<c.length&&(z5(this),ss(this,e,c),this.i&&e!=4&&C0(this))}};function Wb(e,c){var a=e.o,t=c.indexOf(`
`,a);return t==-1?z9:(a=Number(c.substring(a,t)),isNaN(a)?rs:(t+=1,t+a>c.length?z9:(c=c.slice(t,t+a),e.o=t+a,c)))}R.cancel=function(){this.J=!0,t4(this)};function C0(e){e.Y=Date.now()+e.P,os(e,e.P)}function os(e,c){if(e.C!=null)throw Error("WatchDog timer not null");e.C=H0(i2(e.lb,e),c)}function z5(e){e.C&&(c1.clearTimeout(e.C),e.C=null)}R.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?($b(this.j,this.B),this.L!=2&&(a0(),m2(17)),t4(this),this.s=2,I6(this)):os(this,this.Y-e)};function I6(e){e.l.H==0||e.J||As(e.l,e)}function t4(e){z5(e);var c=e.M;c&&typeof c.sa=="function"&&c.sa(),e.M=null,Sc(e.V),Yi(e.U),e.g&&(c=e.g,e.g=null,c.abort(),c.sa())}function g9(e,c){try{var a=e.l;if(a.H!=0&&(a.g==e||V9(a.i,e))){if(!e.K&&V9(a.i,e)&&a.H==3){try{var t=a.Ja.g.parse(c)}catch{t=null}if(Array.isArray(t)&&t.length==3){var r=t;if(r[0]==0){c:if(!a.u){if(a.g)if(a.g.G+3e3<e.G)R8(a),M5(a);else break c;Rc(a),m2(18)}}else a.Fa=r[1],0<a.Fa-a.V&&37500>r[2]&&a.G&&a.A==0&&!a.v&&(a.v=H0(i2(a.ib,a),6e3));if(1>=ps(a.i)&&a.oa){try{a.oa()}catch{}a.oa=void 0}}else r4(a,11)}else if((e.K||a.g==e)&&R8(a),!Y6(c))for(r=a.Ja.g.parse(c),c=0;c<r.length;c++){let h=r[c];if(a.V=h[0],h=h[1],a.H==2)if(h[0]=="c"){a.K=h[1],a.pa=h[2];const v=h[3];v!=null&&(a.ra=v,a.l.info("VER="+a.ra));const d=h[4];d!=null&&(a.Ga=d,a.l.info("SVER="+a.Ga));const H=h[5];H!=null&&typeof H=="number"&&0<H&&(t=1.5*H,a.L=t,a.l.info("backChannelRequestTimeoutMs_="+t)),t=a;const V=e.g;if(V){const F=V.g?V.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(F){var n=t.i;n.g||F.indexOf("spdy")==-1&&F.indexOf("quic")==-1&&F.indexOf("h2")==-1||(n.j=n.l,n.g=new Set,n.h&&(Tc(n,n.h),n.h=null))}if(t.F){const P=V.g?V.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(t.Da=P,y1(t.I,t.F,P))}}a.H=3,a.h&&a.h.Ba(),a.ca&&(a.S=Date.now()-e.G,a.l.info("Handshake RTT: "+a.S+"ms")),t=a;var i=e;if(t.wa=Ts(t,t.J?t.pa:null,t.Y),i.K){zs(t.i,i);var o=i,f=t.L;f&&o.setTimeout(f),o.C&&(z5(o),C0(o)),t.g=i}else Ss(t);0<a.j.length&&L5(a)}else h[0]!="stop"&&h[0]!="close"||r4(a,7);else a.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?r4(a,7):Ic(a):h[0]!="noop"&&a.h&&a.h.Aa(h),a.A=0)}}a0(4)}catch{}}function Kb(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(o5(e)){for(var c=[],a=e.length,t=0;t<a;t++)c.push(e[t]);return c}c=[],a=0;for(t in e)c[a++]=e[t];return c}function Zb(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(o5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const t in e)c[a++]=t;return c}}}function ls(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(o5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=Zb(e),t=Kb(e),r=t.length,n=0;n<r;n++)c.call(void 0,t[n],a&&a[n],e)}var fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qb(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var t=e[a].indexOf("="),r=null;if(0<=t){var n=e[a].substring(0,t);r=e[a].substring(t+1)}else n=e[a];c(n,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function h4(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof h4){this.h=e.h,P8(this,e.j),this.s=e.s,this.g=e.g,I8(this,e.m),this.l=e.l;var c=e.i,a=new t0;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),ur(this,a),this.o=e.o}else e&&(c=String(e).match(fs))?(this.h=!1,P8(this,c[1]||"",!0),this.s=x6(c[2]||""),this.g=x6(c[3]||"",!0),I8(this,c[4]),this.l=x6(c[5]||"",!0),ur(this,c[6]||"",!0),this.o=x6(c[7]||"")):(this.h=!1,this.i=new t0(null,this.h))}h4.prototype.toString=function(){var e=[],c=this.j;c&&e.push(S6(c,mr,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push(S6(c,mr,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(S6(a,a.charAt(0)=="/"?Jb:Xb,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",S6(a,ey)),e.join("")};function o3(e){return new h4(e)}function P8(e,c,a){e.j=a?x6(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function I8(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function ur(e,c,a){c instanceof t0?(e.i=c,ay(e.i,e.h)):(a||(c=S6(c,cy)),e.i=new t0(c,e.h))}function y1(e,c,a){e.i.set(c,a)}function H5(e){return y1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function x6(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function S6(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,Yb),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var mr=/[#\/\?@]/g,Xb=/[#\?:]/g,Jb=/[#\?]/g,cy=/[#\?@]/g,ey=/#/g;function t0(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function q3(e){e.g||(e.g=new Map,e.h=0,e.i&&Qb(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}R=t0.prototype;R.add=function(e,c){q3(this),this.i=null,e=o6(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function hs(e,c){q3(e),c=o6(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function us(e,c){return q3(e),c=o6(e,c),e.g.has(c)}R.forEach=function(e,c){q3(this),this.g.forEach(function(a,t){a.forEach(function(r){e.call(c,r,t,this)},this)},this)};R.ta=function(){q3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let t=0;t<c.length;t++){const r=e[t];for(let n=0;n<r.length;n++)a.push(c[t])}return a};R.Z=function(e){q3(this);let c=[];if(typeof e=="string")us(this,e)&&(c=c.concat(this.g.get(o6(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};R.set=function(e,c){return q3(this),this.i=null,e=o6(this,e),us(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};R.get=function(e,c){return e?(e=this.Z(e),0<e.length?String(e[0]):c):c};function ms(e,c,a){hs(e,c),0<a.length&&(e.i=null,e.g.set(o6(e,c),gc(a)),e.h+=a.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var t=c[a];const n=encodeURIComponent(String(t)),i=this.Z(t);for(t=0;t<i.length;t++){var r=n;i[t]!==""&&(r+="="+encodeURIComponent(String(i[t]))),e.push(r)}}return this.i=e.join("&")};function o6(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function ay(e,c){c&&!e.j&&(q3(e),e.i=null,e.g.forEach(function(a,t){var r=t.toLowerCase();t!=r&&(hs(this,t),ms(this,r,a))},e)),e.j=c}var ty=class{constructor(e,c){this.g=e,this.map=c}};function vs(e){this.l=e||ry,c1.PerformanceNavigationTiming?(e=c1.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(c1.g&&c1.g.Ka&&c1.g.Ka()&&c1.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ry=10;function ds(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ps(e){return e.h?1:e.g?e.g.size:0}function V9(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function Tc(e,c){e.g?e.g.add(c):e.h=c}function zs(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}vs.prototype.cancel=function(){if(this.i=Hs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Hs(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.F);return c}return gc(e.i)}var ny=class{stringify(e){return c1.JSON.stringify(e,void 0)}parse(e){return c1.JSON.parse(e,void 0)}};function iy(){this.g=new ny}function sy(e,c,a){const t=a||"";try{ls(e,function(r,n){let i=r;p0(r)&&(i=yc(r)),c.push(t+n+"="+encodeURIComponent(i))})}catch(r){throw c.push(t+"type="+encodeURIComponent("_badmap")),r}}function oy(e,c){const a=new m5;if(c1.Image){const t=new Image;t.onload=Y0(J0,a,t,"TestLoadImage: loaded",!0,c),t.onerror=Y0(J0,a,t,"TestLoadImage: error",!1,c),t.onabort=Y0(J0,a,t,"TestLoadImage: abort",!1,c),t.ontimeout=Y0(J0,a,t,"TestLoadImage: timeout",!1,c),c1.setTimeout(function(){t.ontimeout&&t.ontimeout()},1e4),t.src=e}else c(!1)}function J0(e,c,a,t,r){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,r(t)}catch{}}function g5(e){this.l=e.ec||null,this.j=e.ob||!1}G1(g5,Ac);g5.prototype.g=function(){return new V5(this.l,this.j)};g5.prototype.i=function(e){return function(){return e}}({});function V5(e,c){$1.call(this),this.F=e,this.u=c,this.m=void 0,this.readyState=Ec,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G1(V5,$1);var Ec=0;R=V5.prototype;R.open=function(e,c){if(this.readyState!=Ec)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,r0(this)};R.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.F||c1).fetch(new Request(this.B,c)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,M0(this)),this.readyState=Ec};R.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,r0(this)),this.g&&(this.readyState=3,r0(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof c1.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gs(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function gs(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}R.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?M0(this):r0(this),this.readyState==3&&gs(this)}};R.Za=function(e){this.g&&(this.response=this.responseText=e,M0(this))};R.Ya=function(e){this.g&&(this.response=e,M0(this))};R.ka=function(){this.g&&M0(this)};function M0(e){e.readyState=4,e.l=null,e.j=null,e.A=null,r0(e)}R.setRequestHeader=function(e,c){this.v.append(e,c)};R.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function r0(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(V5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ly=c1.JSON.parse;function _1(e){$1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vs,this.L=this.M=!1}G1(_1,$1);var Vs="",fy=/^https?$/i,hy=["POST","PUT"];R=_1.prototype;R.Oa=function(e){this.M=e};R.ha=function(e,c,a,t){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);c=c?c.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():p9.g(),this.C=this.u?hr(this.u):hr(p9),this.g.onreadystatechange=i2(this.La,this);try{this.G=!0,this.g.open(c,String(e),!0),this.G=!1}catch(n){vr(this,n);return}if(e=a||"",a=new Map(this.headers),t)if(Object.getPrototypeOf(t)===Object.prototype)for(var r in t)a.set(r,t[r]);else if(typeof t.keys=="function"&&typeof t.get=="function")for(const n of t.keys())a.set(n,t.get(n));else throw Error("Unknown input type for opt_headers: "+String(t));t=Array.from(a.keys()).find(n=>n.toLowerCase()=="content-type"),r=c1.FormData&&e instanceof c1.FormData,!(0<=Ii(hy,c))||t||r||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[n,i]of a)this.g.setRequestHeader(n,i);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ls(this),0<this.B&&((this.L=uy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=i2(this.ua,this)):this.A=Nc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(n){vr(this,n)}};function uy(e){return X4&&typeof e.timeout=="number"&&e.ontimeout!==void 0}R.ua=function(){typeof Hc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y1(this,"timeout"),this.abort(8))};function vr(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,Cs(e),C5(e)}function Cs(e){e.F||(e.F=!0,Y1(e,"complete"),Y1(e,"error"))}R.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Y1(this,"complete"),Y1(this,"abort"),C5(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),C5(this,!0)),_1.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?Ms(this):this.kb())};R.kb=function(){Ms(this)};function Ms(e){if(e.h&&typeof Hc<"u"&&(!e.C[1]||Z2(e)!=4||e.da()!=2)){if(e.v&&Z2(e)==4)Nc(e.La,0,e);else if(Y1(e,"readystatechange"),Z2(e)==4){e.h=!1;try{const i=e.da();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var t;if(t=i===0){var r=String(e.I).match(fs)[1]||null;!r&&c1.self&&c1.self.location&&(r=c1.self.location.protocol.slice(0,-1)),t=!fy.test(r?r.toLowerCase():"")}a=t}if(a)Y1(e,"complete"),Y1(e,"success");else{e.m=6;try{var n=2<Z2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.da()+"]",Cs(e)}}finally{C5(e)}}}}function C5(e,c){if(e.g){Ls(e);const a=e.g,t=e.C[0]?()=>{}:null;e.g=null,e.C=null,c||Y1(e,"ready");try{a.onreadystatechange=t}catch{}}}function Ls(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(c1.clearTimeout(e.A),e.A=null)}R.isActive=function(){return!!this.g};function Z2(e){return e.g?e.g.readyState:0}R.da=function(){try{return 2<Z2(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),ly(c)}};function dr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Vs:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function my(e){const c={};e=(e.g&&2<=Z2(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let t=0;t<e.length;t++){if(Y6(e[t]))continue;var a=Db(e[t]);const r=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const n=c[r]||[];c[r]=n,n.push(a)}_b(c,function(t){return t.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ws(e){let c="";return Cc(e,function(a,t){c+=t,c+=":",c+=a,c+=`\r
`}),c}function Pc(e,c,a){c:{for(t in a){var t=!1;break c}t=!0}t||(a=ws(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):y1(e,c,a))}function L6(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function bs(e){this.Ga=0,this.j=[],this.l=new m5,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=L6("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=L6("baseRetryDelayMs",5e3,e),this.hb=L6("retryDelaySeedMs",1e4,e),this.eb=L6("forwardChannelMaxRetries",2,e),this.xa=L6("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new vs(e&&e.concurrentRequestLimit),this.Ja=new iy,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=bs.prototype;R.ra=8;R.H=1;function Ic(e){if(ys(e),e.H==3){var c=e.W++,a=o3(e.I);if(y1(a,"SID",e.K),y1(a,"RID",c),y1(a,"TYPE","terminate"),L0(e,a),c=new V0(e,e.l,c),c.L=2,c.A=H5(o3(a)),a=!1,c1.navigator&&c1.navigator.sendBeacon)try{a=c1.navigator.sendBeacon(c.A.toString(),"")}catch{}!a&&c1.Image&&(new Image().src=c.A,a=!0),a||(c.g=Es(c.l,null),c.g.ha(c.A)),c.G=Date.now(),C0(c)}ks(e)}function M5(e){e.g&&(Dc(e),e.g.cancel(),e.g=null)}function ys(e){M5(e),e.u&&(c1.clearTimeout(e.u),e.u=null),R8(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&c1.clearTimeout(e.m),e.m=null)}function L5(e){if(!ds(e.i)&&!e.m){e.m=!0;var c=e.Na;J6||Ki(),c0||(J6(),c0=!0),xc.add(c,e),e.C=0}}function vy(e,c){return ps(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=c.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=H0(i2(e.Na,e,c),_s(e,e.C)),e.C++,!0)}R.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new V0(this,this.l,e);let n=this.s;if(this.U&&(n?(n=Bi(n),Oi(n,this.U)):n=this.U),this.o!==null||this.O||(r.I=n,n=null),this.P)c:{for(var c=0,a=0;a<this.j.length;a++){e:{var t=this.j[a];if("__data__"in t.map&&(t=t.map.__data__,typeof t=="string")){t=t.length;break e}t=void 0}if(t===void 0)break;if(c+=t,4096<c){c=a;break c}if(c===4096||a===this.j.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=xs(this,r,c),a=o3(this.I),y1(a,"RID",e),y1(a,"CVER",22),this.F&&y1(a,"X-HTTP-Session-Id",this.F),L0(this,a),n&&(this.O?c="headers="+encodeURIComponent(String(ws(n)))+"&"+c:this.o&&Pc(a,this.o,n)),Tc(this.i,r),this.bb&&y1(a,"TYPE","init"),this.P?(y1(a,"$req",c),y1(a,"SID","null"),r.aa=!0,H9(r,a,null)):H9(r,a,c),this.H=2}}else this.H==3&&(e?pr(this,e):this.j.length==0||ds(this.i)||pr(this))};function pr(e,c){var a;c?a=c.m:a=e.W++;const t=o3(e.I);y1(t,"SID",e.K),y1(t,"RID",a),y1(t,"AID",e.V),L0(e,t),e.o&&e.s&&Pc(t,e.o,e.s),a=new V0(e,e.l,a,e.C+1),e.o===null&&(a.I=e.s),c&&(e.j=c.F.concat(e.j)),c=xs(e,a,1e3),a.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Tc(e.i,a),H9(a,t,c)}function L0(e,c){e.na&&Cc(e.na,function(a,t){y1(c,t,a)}),e.h&&ls({},function(a,t){y1(c,t,a)})}function xs(e,c,a){a=Math.min(e.j.length,a);var t=e.h?i2(e.h.Va,e.h,e):null;c:{var r=e.j;let n=-1;for(;;){const i=["count="+a];n==-1?0<a?(n=r[0].g,i.push("ofs="+n)):n=0:i.push("ofs="+n);let o=!0;for(let f=0;f<a;f++){let h=r[f].g;const v=r[f].map;if(h-=n,0>h)n=Math.max(0,r[f].g-100),o=!1;else try{sy(v,i,"req"+h+"_")}catch{t&&t(v)}}if(o){t=i.join("&");break c}}}return e=e.j.splice(0,a),c.F=e,t}function Ss(e){if(!e.g&&!e.u){e.ba=1;var c=e.Ma;J6||Ki(),c0||(J6(),c0=!0),xc.add(c,e),e.A=0}}function Rc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=H0(i2(e.Ma,e),_s(e,e.A)),e.A++,!0)}R.Ma=function(){if(this.u=null,Ns(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=H0(i2(this.jb,this),e)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,m2(10),M5(this),Ns(this))};function Dc(e){e.B!=null&&(c1.clearTimeout(e.B),e.B=null)}function Ns(e){e.g=new V0(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var c=o3(e.wa);y1(c,"RID","rpc"),y1(c,"SID",e.K),y1(c,"AID",e.V),y1(c,"CI",e.G?"0":"1"),!e.G&&e.qa&&y1(c,"TO",e.qa),y1(c,"TYPE","xmlhttp"),L0(e,c),e.o&&e.s&&Pc(c,e.o,e.s),e.L&&e.g.setTimeout(e.L);var a=e.g;e=e.pa,a.L=1,a.A=H5(o3(c)),a.u=null,a.S=!0,ns(a,e)}R.ib=function(){this.v!=null&&(this.v=null,M5(this),Rc(this),m2(19))};function R8(e){e.v!=null&&(c1.clearTimeout(e.v),e.v=null)}function As(e,c){var a=null;if(e.g==c){R8(e),Dc(e),e.g=null;var t=2}else if(V9(e.i,c))a=c.F,zs(e.i,c),t=1;else return;if(e.H!=0){if(c.i)if(t==1){a=c.u?c.u.length:0,c=Date.now()-c.G;var r=e.C;t=v5(),Y1(t,new cs(t,a)),L5(e)}else Ss(e);else if(r=c.s,r==3||r==0&&0<c.ca||!(t==1&&vy(e,c)||t==2&&Rc(e)))switch(a&&0<a.length&&(c=e.i,c.i=c.i.concat(a)),r){case 1:r4(e,5);break;case 4:r4(e,10);break;case 3:r4(e,6);break;default:r4(e,2)}}}function _s(e,c){let a=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(a*=2),a*c}function r4(e,c){if(e.l.info("Error code "+c),c==2){var a=null;e.h&&(a=null);var t=i2(e.pb,e);a||(a=new h4("//www.google.com/images/cleardot.gif"),c1.location&&c1.location.protocol=="http"||P8(a,"https"),H5(a)),oy(a.toString(),t)}else m2(2);e.H=0,e.h&&e.h.za(c),ks(e),ys(e)}R.pb=function(e){e?(this.l.info("Successfully pinged google.com"),m2(2)):(this.l.info("Failed to ping google.com"),m2(1))};function ks(e){if(e.H=0,e.ma=[],e.h){const c=Hs(e.i);(c.length!=0||e.j.length!=0)&&(ir(e.ma,c),ir(e.ma,e.j),e.i.i.length=0,gc(e.j),e.j.length=0),e.h.ya()}}function Ts(e,c,a){var t=a instanceof h4?o3(a):new h4(a);if(t.g!="")c&&(t.g=c+"."+t.g),I8(t,t.m);else{var r=c1.location;t=r.protocol,c=c?c+"."+r.hostname:r.hostname,r=+r.port;var n=new h4(null);t&&P8(n,t),c&&(n.g=c),r&&I8(n,r),a&&(n.l=a),t=n}return a=e.F,c=e.Da,a&&c&&y1(t,a,c),y1(t,"VER",e.ra),L0(e,t),t}function Es(e,c,a){if(c&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=e.Ha&&!e.va?new _1(new g5({ob:a})):new _1(e.va),c.Oa(e.J),c}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ps(){}R=Ps.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function D8(){if(X4&&!(10<=Number(xb)))throw Error("Environmental error: no available transport.")}D8.prototype.g=function(e,c){return new y2(e,c)};function y2(e,c){$1.call(this),this.g=new bs(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.Ca&&(e?e["X-WebChannel-Client-Profile"]=c.Ca:e={"X-WebChannel-Client-Profile":c.Ca}),this.g.U=e,(e=c&&c.cc)&&!Y6(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Y6(c)&&(this.g.F=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new l6(this)}G1(y2,$1);y2.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,c=this.l,a=this.h||void 0;m2(0),e.Y=c,e.na=a||{},e.G=e.aa,e.I=Ts(e,null,e.Y),L5(e)};y2.prototype.close=function(){Ic(this.g)};y2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=yc(e),e=a);c.j.push(new ty(c.fb++,e)),c.H==3&&L5(c)};y2.prototype.N=function(){this.g.h=null,delete this.j,Ic(this.g),delete this.g,y2.$.N.call(this)};function Is(e){_c.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}G1(Is,_c);function Rs(){kc.call(this),this.status=1}G1(Rs,kc);function l6(e){this.g=e}G1(l6,Ps);l6.prototype.Ba=function(){Y1(this.g,"a")};l6.prototype.Aa=function(e){Y1(this.g,new Is(e))};l6.prototype.za=function(e){Y1(this.g,new Rs)};l6.prototype.ya=function(){Y1(this.g,"b")};function dy(){this.blockSize=-1}function F2(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G1(F2,dy);F2.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function E7(e,c,a){a||(a=0);var t=Array(16);if(typeof c=="string")for(var r=0;16>r;++r)t[r]=c.charCodeAt(a++)|c.charCodeAt(a++)<<8|c.charCodeAt(a++)<<16|c.charCodeAt(a++)<<24;else for(r=0;16>r;++r)t[r]=c[a++]|c[a++]<<8|c[a++]<<16|c[a++]<<24;c=e.g[0],a=e.g[1],r=e.g[2];var n=e.g[3],i=c+(n^a&(r^n))+t[0]+3614090360&4294967295;c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[1]+3905402710&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[2]+606105819&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[3]+3250441966&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[4]+4118548399&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[5]+1200080426&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[6]+2821735955&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[7]+4249261313&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[8]+1770035416&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[9]+2336552879&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[10]+4294925233&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[11]+2304563134&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(n^a&(r^n))+t[12]+1804603682&4294967295,c=a+(i<<7&4294967295|i>>>25),i=n+(r^c&(a^r))+t[13]+4254626195&4294967295,n=c+(i<<12&4294967295|i>>>20),i=r+(a^n&(c^a))+t[14]+2792965006&4294967295,r=n+(i<<17&4294967295|i>>>15),i=a+(c^r&(n^c))+t[15]+1236535329&4294967295,a=r+(i<<22&4294967295|i>>>10),i=c+(r^n&(a^r))+t[1]+4129170786&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[6]+3225465664&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[11]+643717713&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[0]+3921069994&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[5]+3593408605&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[10]+38016083&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[15]+3634488961&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[4]+3889429448&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[9]+568446438&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[14]+3275163606&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[3]+4107603335&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[8]+1163531501&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(r^n&(a^r))+t[13]+2850285829&4294967295,c=a+(i<<5&4294967295|i>>>27),i=n+(a^r&(c^a))+t[2]+4243563512&4294967295,n=c+(i<<9&4294967295|i>>>23),i=r+(c^a&(n^c))+t[7]+1735328473&4294967295,r=n+(i<<14&4294967295|i>>>18),i=a+(n^c&(r^n))+t[12]+2368359562&4294967295,a=r+(i<<20&4294967295|i>>>12),i=c+(a^r^n)+t[5]+4294588738&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[8]+2272392833&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[11]+1839030562&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[14]+4259657740&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[1]+2763975236&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[4]+1272893353&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[7]+4139469664&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[10]+3200236656&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[13]+681279174&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[0]+3936430074&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[3]+3572445317&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[6]+76029189&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(a^r^n)+t[9]+3654602809&4294967295,c=a+(i<<4&4294967295|i>>>28),i=n+(c^a^r)+t[12]+3873151461&4294967295,n=c+(i<<11&4294967295|i>>>21),i=r+(n^c^a)+t[15]+530742520&4294967295,r=n+(i<<16&4294967295|i>>>16),i=a+(r^n^c)+t[2]+3299628645&4294967295,a=r+(i<<23&4294967295|i>>>9),i=c+(r^(a|~n))+t[0]+4096336452&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[7]+1126891415&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[14]+2878612391&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[5]+4237533241&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[12]+1700485571&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[3]+2399980690&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[10]+4293915773&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[1]+2240044497&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[8]+1873313359&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[15]+4264355552&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[6]+2734768916&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[13]+1309151649&4294967295,a=r+(i<<21&4294967295|i>>>11),i=c+(r^(a|~n))+t[4]+4149444226&4294967295,c=a+(i<<6&4294967295|i>>>26),i=n+(a^(c|~r))+t[11]+3174756917&4294967295,n=c+(i<<10&4294967295|i>>>22),i=r+(c^(n|~a))+t[2]+718787259&4294967295,r=n+(i<<15&4294967295|i>>>17),i=a+(n^(r|~c))+t[9]+3951481745&4294967295,e.g[0]=e.g[0]+c&4294967295,e.g[1]=e.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+n&4294967295}F2.prototype.j=function(e,c){c===void 0&&(c=e.length);for(var a=c-this.blockSize,t=this.m,r=this.h,n=0;n<c;){if(r==0)for(;n<=a;)E7(this,e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<c;)if(t[r++]=e.charCodeAt(n++),r==this.blockSize){E7(this,t),r=0;break}}else for(;n<c;)if(t[r++]=e[n++],r==this.blockSize){E7(this,t),r=0;break}}this.h=r,this.i+=c};F2.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var c=1;c<e.length-8;++c)e[c]=0;var a=8*this.i;for(c=e.length-8;c<e.length;++c)e[c]=a&255,a/=256;for(this.j(e),e=Array(16),c=a=0;4>c;++c)for(var t=0;32>t;t+=8)e[a++]=this.g[c]>>>t&255;return e};function H1(e,c){this.h=c;for(var a=[],t=!0,r=e.length-1;0<=r;r--){var n=e[r]|0;t&&n==c||(a[r]=n,t=!1)}this.g=a}var py={};function Fc(e){return-128<=e&&128>e?wb(e,function(c){return new H1([c|0],0>c?-1:0)}):new H1([e|0],0>e?-1:0)}function Q2(e){if(isNaN(e)||!isFinite(e))return $4;if(0>e)return Q1(Q2(-e));for(var c=[],a=1,t=0;e>=a;t++)c[t]=e/a|0,a*=C9;return new H1(c,0)}function Ds(e,c){if(e.length==0)throw Error("number format error: empty string");if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(e.charAt(0)=="-")return Q1(Ds(e.substring(1),c));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var a=Q2(Math.pow(c,8)),t=$4,r=0;r<e.length;r+=8){var n=Math.min(8,e.length-r),i=parseInt(e.substring(r,r+n),c);8>n?(n=Q2(Math.pow(c,n)),t=t.R(n).add(Q2(i))):(t=t.R(a),t=t.add(Q2(i)))}return t}var C9=4294967296,$4=Fc(0),M9=Fc(1),zr=Fc(16777216);R=H1.prototype;R.ea=function(){if(k2(this))return-Q1(this).ea();for(var e=0,c=1,a=0;a<this.g.length;a++){var t=this.D(a);e+=(0<=t?t:C9+t)*c,c*=C9}return e};R.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(i3(this))return"0";if(k2(this))return"-"+Q1(this).toString(e);for(var c=Q2(Math.pow(e,6)),a=this,t="";;){var r=B8(a,c).g;a=F8(a,r.R(c));var n=((0<a.g.length?a.g[0]:a.h)>>>0).toString(e);if(a=r,i3(a))return n+t;for(;6>n.length;)n="0"+n;t=n+t}};R.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function i3(e){if(e.h!=0)return!1;for(var c=0;c<e.g.length;c++)if(e.g[c]!=0)return!1;return!0}function k2(e){return e.h==-1}R.X=function(e){return e=F8(this,e),k2(e)?-1:i3(e)?0:1};function Q1(e){for(var c=e.g.length,a=[],t=0;t<c;t++)a[t]=~e.g[t];return new H1(a,~e.h).add(M9)}R.abs=function(){return k2(this)?Q1(this):this};R.add=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0,r=0;r<=c;r++){var n=t+(this.D(r)&65535)+(e.D(r)&65535),i=(n>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);t=i>>>16,n&=65535,i&=65535,a[r]=i<<16|n}return new H1(a,a[a.length-1]&-2147483648?-1:0)};function F8(e,c){return e.add(Q1(c))}R.R=function(e){if(i3(this)||i3(e))return $4;if(k2(this))return k2(e)?Q1(this).R(Q1(e)):Q1(Q1(this).R(e));if(k2(e))return Q1(this.R(Q1(e)));if(0>this.X(zr)&&0>e.X(zr))return Q2(this.ea()*e.ea());for(var c=this.g.length+e.g.length,a=[],t=0;t<2*c;t++)a[t]=0;for(t=0;t<this.g.length;t++)for(var r=0;r<e.g.length;r++){var n=this.D(t)>>>16,i=this.D(t)&65535,o=e.D(r)>>>16,f=e.D(r)&65535;a[2*t+2*r]+=i*f,c8(a,2*t+2*r),a[2*t+2*r+1]+=n*f,c8(a,2*t+2*r+1),a[2*t+2*r+1]+=i*o,c8(a,2*t+2*r+1),a[2*t+2*r+2]+=n*o,c8(a,2*t+2*r+2)}for(t=0;t<c;t++)a[t]=a[2*t+1]<<16|a[2*t];for(t=c;t<2*c;t++)a[t]=0;return new H1(a,0)};function c8(e,c){for(;(e[c]&65535)!=e[c];)e[c+1]+=e[c]>>>16,e[c]&=65535,c++}function w6(e,c){this.g=e,this.h=c}function B8(e,c){if(i3(c))throw Error("division by zero");if(i3(e))return new w6($4,$4);if(k2(e))return c=B8(Q1(e),c),new w6(Q1(c.g),Q1(c.h));if(k2(c))return c=B8(e,Q1(c)),new w6(Q1(c.g),c.h);if(30<e.g.length){if(k2(e)||k2(c))throw Error("slowDivide_ only works with positive integers.");for(var a=M9,t=c;0>=t.X(e);)a=Hr(a),t=Hr(t);var r=k4(a,1),n=k4(t,1);for(t=k4(t,2),a=k4(a,2);!i3(t);){var i=n.add(t);0>=i.X(e)&&(r=r.add(a),n=i),t=k4(t,1),a=k4(a,1)}return c=F8(e,r.R(c)),new w6(r,c)}for(r=$4;0<=e.X(c);){for(a=Math.max(1,Math.floor(e.ea()/c.ea())),t=Math.ceil(Math.log(a)/Math.LN2),t=48>=t?1:Math.pow(2,t-48),n=Q2(a),i=n.R(c);k2(i)||0<i.X(e);)a-=t,n=Q2(a),i=n.R(c);i3(n)&&(n=M9),r=r.add(n),e=F8(e,i)}return new w6(r,e)}R.gb=function(e){return B8(this,e).h};R.and=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)&e.D(t);return new H1(a,this.h&e.h)};R.or=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)|e.D(t);return new H1(a,this.h|e.h)};R.xor=function(e){for(var c=Math.max(this.g.length,e.g.length),a=[],t=0;t<c;t++)a[t]=this.D(t)^e.D(t);return new H1(a,this.h^e.h)};function Hr(e){for(var c=e.g.length+1,a=[],t=0;t<c;t++)a[t]=e.D(t)<<1|e.D(t-1)>>>31;return new H1(a,e.h)}function k4(e,c){var a=c>>5;c%=32;for(var t=e.g.length-a,r=[],n=0;n<t;n++)r[n]=0<c?e.D(n+a)>>>c|e.D(n+a+1)<<32-c:e.D(n+a);return new H1(r,e.h)}D8.prototype.createWebChannel=D8.prototype.g;y2.prototype.send=y2.prototype.u;y2.prototype.open=y2.prototype.m;y2.prototype.close=y2.prototype.close;d5.NO_ERROR=0;d5.TIMEOUT=8;d5.HTTP_ERROR=6;es.COMPLETE="complete";as.EventType=g0;g0.OPEN="a";g0.CLOSE="b";g0.ERROR="c";g0.MESSAGE="d";$1.prototype.listen=$1.prototype.O;_1.prototype.listenOnce=_1.prototype.P;_1.prototype.getLastError=_1.prototype.Sa;_1.prototype.getLastErrorCode=_1.prototype.Ia;_1.prototype.getStatus=_1.prototype.da;_1.prototype.getResponseJson=_1.prototype.Wa;_1.prototype.getResponseText=_1.prototype.ja;_1.prototype.send=_1.prototype.ha;_1.prototype.setWithCredentials=_1.prototype.Oa;F2.prototype.digest=F2.prototype.l;F2.prototype.reset=F2.prototype.reset;F2.prototype.update=F2.prototype.j;H1.prototype.add=H1.prototype.add;H1.prototype.multiply=H1.prototype.R;H1.prototype.modulo=H1.prototype.gb;H1.prototype.compare=H1.prototype.X;H1.prototype.toNumber=H1.prototype.ea;H1.prototype.toString=H1.prototype.toString;H1.prototype.getBits=H1.prototype.D;H1.fromNumber=Q2;H1.fromString=Ds;var zy=function(){return new D8},Hy=function(){return v5()},P7=d5,gy=es,Vy=M4,gr={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},e8=as,Cy=_1,My=F2,G4=H1;const Vr="@firebase/firestore";/**
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
 */class t2{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}t2.UNAUTHENTICATED=new t2(null),t2.GOOGLE_CREDENTIALS=new t2("google-credentials-uid"),t2.FIRST_PARTY=new t2("first-party-uid"),t2.MOCK_USER=new t2("mock-user");/**
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
 */let f6="10.9.0";/**
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
 */const d4=new Ai("@firebase/firestore");function b6(){return d4.logLevel}function D(e,...c){if(d4.logLevel<=u1.DEBUG){const a=c.map(Bc);d4.debug(`Firestore (${f6}): ${e}`,...a)}}function J2(e,...c){if(d4.logLevel<=u1.ERROR){const a=c.map(Bc);d4.error(`Firestore (${f6}): ${e}`,...a)}}function J4(e,...c){if(d4.logLevel<=u1.WARN){const a=c.map(Bc);d4.warn(`Firestore (${f6}): ${e}`,...a)}}function Bc(e){if(typeof e=="string")return e;try{/**
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
 */function n1(e="Unexpected state"){const c=`FIRESTORE (${f6}) INTERNAL ASSERTION FAILED: `+e;throw J2(c),new Error(c)}function R1(e,c){e||n1()}function v1(e,c){return e}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends s6{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class T3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
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
 */class Fs{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(t2.UNAUTHENTICATED))}shutdown(){}}class wy{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class by{constructor(c){this.t=c,this.currentUser=t2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let t=this.i;const r=f=>this.i!==t?(t=this.i,a(f)):Promise.resolve();let n=new T3;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new T3,c.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const f=n;c.enqueueRetryable(async()=>{await f.promise,await r(this.currentUser)})},o=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(f=>o(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?o(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new T3)}},0),i()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(t=>this.i!==c?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(R1(typeof t.accessToken=="string"),new Fs(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return R1(c===null||typeof c=="string"),new t2(c)}}class yy{constructor(c,a,t){this.l=c,this.h=a,this.P=t,this.type="FirstParty",this.user=t2.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const c=this.T();return c&&this.I.set("Authorization",c),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xy{constructor(c,a,t){this.l=c,this.h=a,this.P=t}getToken(){return Promise.resolve(new yy(this.l,this.h,this.P))}start(c,a){c.enqueueRetryable(()=>a(t2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sy{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ny{constructor(c){this.A=c,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(c,a){const t=n=>{n.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${n.error.message}`);const i=n.token!==this.R;return this.R=n.token,D("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?a(n.token):Promise.resolve()};this.o=n=>{c.enqueueRetryable(()=>t(n))};const r=n=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=n,this.appCheck.addTokenListener(this.o)};this.A.onInit(n=>r(n)),setTimeout(()=>{if(!this.appCheck){const n=this.A.getImmediate({optional:!0});n?r(n):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(R1(typeof a.token=="string"),this.R=a.token,new Sy(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ay(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}/**
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
 */class _y{static newId(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let t="";for(;t.length<20;){const r=Ay(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<a&&(t+=c.charAt(r[n]%c.length))}return t}}function p1(e,c){return e<c?-1:e>c?1:0}function c6(e,c,a){return e.length===c.length&&e.every((t,r)=>a(t,c[r]))}/**
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
 */class z2{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new K(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new K(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new K(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new K(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return z2.fromMillis(Date.now())}static fromDate(c){return z2.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),t=Math.floor(1e6*(c-1e3*a));return new z2(a,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?p1(this.nanoseconds,c.nanoseconds):p1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class e1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new e1(c)}static min(){return new e1(new z2(0,0))}static max(){return new e1(new z2(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class n0{constructor(c,a,t){a===void 0?a=0:a>c.length&&n1(),t===void 0?t=c.length-a:t>c.length-a&&n1(),this.segments=c,this.offset=a,this.len=t}get length(){return this.len}isEqual(c){return n0.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof n0?c.forEach(t=>{a.push(t)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,t=this.limit();a<t;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const t=Math.min(c.length,a.length);for(let r=0;r<t;r++){const n=c.get(r),i=a.get(r);if(n<i)return-1;if(n>i)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class A1 extends n0{construct(c,a,t){return new A1(c,a,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...c){const a=[];for(const t of c){if(t.indexOf("//")>=0)throw new K(T.INVALID_ARGUMENT,`Invalid segment (${t}). Paths must not contain // in them.`);a.push(...t.split("/").filter(r=>r.length>0))}return new A1(a)}static emptyPath(){return new A1([])}}const ky=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class u2 extends n0{construct(c,a,t){return new u2(c,a,t)}static isValidIdentifier(c){return ky.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),u2.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new u2(["__name__"])}static fromServerFormat(c){const a=[];let t="",r=0;const n=()=>{if(t.length===0)throw new K(T.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(t),t=""};let i=!1;for(;r<c.length;){const o=c[r];if(o==="\\"){if(r+1===c.length)throw new K(T.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const f=c[r+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new K(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);t+=f,r+=2}else o==="`"?(i=!i,r++):o!=="."||i?(t+=o,r++):(n(),r++)}if(n(),i)throw new K(T.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new u2(a)}static emptyPath(){return new u2([])}}/**
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
 */class J{constructor(c){this.path=c}static fromPath(c){return new J(A1.fromString(c))}static fromName(c){return new J(A1.fromString(c).popFirst(5))}static empty(){return new J(A1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&A1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return A1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new J(new A1(c.slice()))}}function Ty(e,c){const a=e.toTimestamp().seconds,t=e.toTimestamp().nanoseconds+1,r=e1.fromTimestamp(t===1e9?new z2(a+1,0):new z2(a,t));return new P3(r,J.empty(),c)}function Ey(e){return new P3(e.readTime,e.key,-1)}class P3{constructor(c,a,t){this.readTime=c,this.documentKey=a,this.largestBatchId=t}static min(){return new P3(e1.min(),J.empty(),-1)}static max(){return new P3(e1.max(),J.empty(),-1)}}function Py(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=J.comparator(e.documentKey,c.documentKey),a!==0?a:p1(e.largestBatchId,c.largestBatchId))}/**
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
 */const Iy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ry{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
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
 */async function Oc(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==Iy)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&n1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new x((t,r)=>{this.nextCallback=n=>{this.wrapSuccess(c,n).next(t,r)},this.catchCallback=n=>{this.wrapFailure(a,n).next(t,r)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof x?a:x.resolve(a)}catch(a){return x.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):x.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):x.reject(a)}static resolve(c){return new x((a,t)=>{a(c)})}static reject(c){return new x((a,t)=>{t(c)})}static waitFor(c){return new x((a,t)=>{let r=0,n=0,i=!1;c.forEach(o=>{++r,o.next(()=>{++n,i&&n===r&&a()},f=>t(f))}),i=!0,n===r&&a()})}static or(c){let a=x.resolve(!1);for(const t of c)a=a.next(r=>r?x.resolve(r):t());return a}static forEach(c,a){const t=[];return c.forEach((r,n)=>{t.push(a.call(this,r,n))}),this.waitFor(t)}static mapArray(c,a){return new x((t,r)=>{const n=c.length,i=new Array(n);let o=0;for(let f=0;f<n;f++){const h=f;a(c[h]).next(v=>{i[h]=v,++o,o===n&&t(i)},v=>r(v))}})}static doWhile(c,a){return new x((t,r)=>{const n=()=>{c()===!0?a().next(()=>{n()},r):t()};n()})}}/**
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
 */class qc{constructor(c,a){this.action=c,this.transaction=a,this.aborted=!1,this.V=new T3,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{a.error?this.V.reject(new R6(c,a.error)):this.V.resolve()},this.transaction.onerror=t=>{const r=Uc(t.target.error);this.V.reject(new R6(c,r))}}static open(c,a,t,r){try{return new qc(a,c.transaction(r,t))}catch(n){throw new R6(a,n)}}get m(){return this.V.promise}abort(c){c&&this.V.reject(c),this.aborted||(D("SimpleDb","Aborting transaction:",c?c.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const c=this.transaction;this.aborted||typeof c.commit!="function"||c.commit()}store(c){const a=this.transaction.objectStore(c);return new Fy(a)}}class n4{constructor(c,a,t){this.name=c,this.version=a,this.p=t,n4.S(k8())===12.2&&J2("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(c){return D("SimpleDb","Removing database:",c),e4(window.indexedDB.deleteDatabase(c)).toPromise()}static D(){if(!Si())return!1;if(n4.C())return!0;const c=k8(),a=n4.S(c),t=0<a&&a<10,r=n4.v(c),n=0<r&&r<4.5;return!(c.indexOf("MSIE ")>0||c.indexOf("Trident/")>0||c.indexOf("Edge/")>0||t||n)}static C(){var c;return typeof process<"u"&&((c=process.__PRIVATE_env)===null||c===void 0?void 0:c.F)==="YES"}static M(c,a){return c.store(a)}static S(c){const a=c.match(/i(?:phone|pad|pod) os ([\d_]+)/i),t=a?a[1].split("_").slice(0,2).join("."):"-1";return Number(t)}static v(c){const a=c.match(/Android ([\d.]+)/i),t=a?a[1].split(".").slice(0,2).join("."):"-1";return Number(t)}async O(c){return this.db||(D("SimpleDb","Opening database:",this.name),this.db=await new Promise((a,t)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=n=>{const i=n.target.result;a(i)},r.onblocked=()=>{t(new R6(c,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=n=>{const i=n.target.error;i.name==="VersionError"?t(new K(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):i.name==="InvalidStateError"?t(new K(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):t(new R6(c,i))},r.onupgradeneeded=n=>{D("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',n.oldVersion);const i=n.target.result;this.p.N(i,r.transaction,n.oldVersion,this.version).next(()=>{D("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=a=>this.L(a)),this.db}B(c){this.L=c,this.db&&(this.db.onversionchange=a=>c(a))}async runTransaction(c,a,t,r){const n=a==="readonly";let i=0;for(;;){++i;try{this.db=await this.O(c);const o=qc.open(this.db,c,n?"readonly":"readwrite",t),f=r(o).next(h=>(o.g(),h)).catch(h=>(o.abort(h),x.reject(h))).toPromise();return f.catch(()=>{}),await o.m,f}catch(o){const f=o,h=f.name!=="FirebaseError"&&i<3;if(D("SimpleDb","Transaction failed with error:",f.message,"Retrying:",h),this.close(),!h)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Dy{constructor(c){this.k=c,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(c){this.k=c}done(){this.q=!0}U(c){this.K=c}delete(){return e4(this.k.delete())}}class R6 extends K{constructor(c,a){super(T.UNAVAILABLE,`IndexedDB transaction '${c}' failed: ${a}`),this.name="IndexedDbTransactionError"}}function w0(e){return e.name==="IndexedDbTransactionError"}class Fy{constructor(c){this.store=c}put(c,a){let t;return a!==void 0?(D("SimpleDb","PUT",this.store.name,c,a),t=this.store.put(a,c)):(D("SimpleDb","PUT",this.store.name,"<auto-key>",c),t=this.store.put(c)),e4(t)}add(c){return D("SimpleDb","ADD",this.store.name,c,c),e4(this.store.add(c))}get(c){return e4(this.store.get(c)).next(a=>(a===void 0&&(a=null),D("SimpleDb","GET",this.store.name,c,a),a))}delete(c){return D("SimpleDb","DELETE",this.store.name,c),e4(this.store.delete(c))}count(){return D("SimpleDb","COUNT",this.store.name),e4(this.store.count())}W(c,a){const t=this.options(c,a),r=t.index?this.store.index(t.index):this.store;if(typeof r.getAll=="function"){const n=r.getAll(t.range);return new x((i,o)=>{n.onerror=f=>{o(f.target.error)},n.onsuccess=f=>{i(f.target.result)}})}{const n=this.cursor(t),i=[];return this.G(n,(o,f)=>{i.push(f)}).next(()=>i)}}j(c,a){const t=this.store.getAll(c,a===null?void 0:a);return new x((r,n)=>{t.onerror=i=>{n(i.target.error)},t.onsuccess=i=>{r(i.target.result)}})}H(c,a){D("SimpleDb","DELETE ALL",this.store.name);const t=this.options(c,a);t.J=!1;const r=this.cursor(t);return this.G(r,(n,i,o)=>o.delete())}Y(c,a){let t;a?t=c:(t={},a=c);const r=this.cursor(t);return this.G(r,a)}Z(c){const a=this.cursor({});return new x((t,r)=>{a.onerror=n=>{const i=Uc(n.target.error);r(i)},a.onsuccess=n=>{const i=n.target.result;i?c(i.primaryKey,i.value).next(o=>{o?i.continue():t()}):t()}})}G(c,a){const t=[];return new x((r,n)=>{c.onerror=i=>{n(i.target.error)},c.onsuccess=i=>{const o=i.target.result;if(!o)return void r();const f=new Dy(o),h=a(o.primaryKey,o.value,f);if(h instanceof x){const v=h.catch(d=>(f.done(),x.reject(d)));t.push(v)}f.isDone?r():f.$===null?o.continue():o.continue(f.$)}}).next(()=>x.waitFor(t))}options(c,a){let t;return c!==void 0&&(typeof c=="string"?t=c:a=c),{index:t,range:a}}cursor(c){let a="next";if(c.reverse&&(a="prev"),c.index){const t=this.store.index(c.index);return c.J?t.openKeyCursor(c.range,a):t.openCursor(c.range,a)}return this.store.openCursor(c.range,a)}}function e4(e){return new x((c,a)=>{e.onsuccess=t=>{const r=t.target.result;c(r)},e.onerror=t=>{const r=Uc(t.target.error);a(r)}})}let Cr=!1;function Uc(e){const c=n4.S(k8());if(c>=12.2&&c<13){const a="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(a)>=0){const t=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${a}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cr||(Cr=!0,setTimeout(()=>{throw t},0)),t}}return e}/**
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
 */class $c{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=t=>this.se(t),this.oe=t=>a.writeSequenceNumber(t))}se(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.oe&&this.oe(c),c}}$c._e=-1;function w5(e){return e==null}function L9(e){return e===0&&1/e==-1/0}/**
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
 */function Mr(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function b5(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function By(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
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
 */class E1{constructor(c,a){this.comparator=c,this.root=a||Z1.EMPTY}insert(c,a){return new E1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,Z1.BLACK,null,null))}remove(c){return new E1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,Z1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const t=this.comparator(c,a.key);if(t===0)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}indexOf(c){let a=0,t=this.root;for(;!t.isEmpty();){const r=this.comparator(c,t.key);if(r===0)return a+t.left.size;r<0?t=t.left:(a+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,t)=>(c(a,t),!1))}toString(){const c=[];return this.inorderTraversal((a,t)=>(c.push(`${a}:${t}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new a8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new a8(this.root,c,this.comparator,!1)}getReverseIterator(){return new a8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new a8(this.root,c,this.comparator,!0)}}class a8{constructor(c,a,t,r){this.isReverse=r,this.nodeStack=[];let n=1;for(;!c.isEmpty();)if(n=a?t(c.key,a):1,a&&r&&(n*=-1),n<0)c=this.isReverse?c.left:c.right;else{if(n===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class Z1{constructor(c,a,t,r,n){this.key=c,this.value=a,this.color=t??Z1.RED,this.left=r??Z1.EMPTY,this.right=n??Z1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,t,r,n){return new Z1(c??this.key,a??this.value,t??this.color,r??this.left,n??this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,t){let r=this;const n=t(c,r.key);return r=n<0?r.copy(null,null,null,r.left.insert(c,a,t),null):n===0?r.copy(null,a,null,null,null):r.copy(null,null,null,null,r.right.insert(c,a,t)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let t,r=this;if(a(c,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(c,a),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),a(c,r.key)===0){if(r.right.isEmpty())return Z1.EMPTY;t=r.right.min(),r=r.copy(t.key,t.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(c,a))}return r.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,Z1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,Z1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw n1();const c=this.left.check();if(c!==this.right.check())throw n1();return c+(this.isRed()?0:1)}}Z1.EMPTY=null,Z1.RED=!0,Z1.BLACK=!1;Z1.EMPTY=new class{constructor(){this.size=0}get key(){throw n1()}get value(){throw n1()}get color(){throw n1()}get left(){throw n1()}get right(){throw n1()}copy(c,a,t,r,n){return this}insert(c,a,t){return new Z1(c,a)}remove(c,a){return this}isEmpty(){return!0}inorderTraversal(c){return!1}reverseTraversal(c){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class X1{constructor(c){this.comparator=c,this.data=new E1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,t)=>(c(a),!1))}forEachInRange(c,a){const t=this.data.getIteratorFrom(c[0]);for(;t.hasNext();){const r=t.getNext();if(this.comparator(r.key,c[1])>=0)return;a(r.key)}}forEachWhile(c,a){let t;for(t=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();t.hasNext();)if(!c(t.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new Lr(this.data.getIterator())}getIteratorFrom(c){return new Lr(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(t=>{a=a.add(t)}),a}isEqual(c){if(!(c instanceof X1)||this.size!==c.size)return!1;const a=this.data.getIterator(),t=c.data.getIterator();for(;a.hasNext();){const r=a.getNext().key,n=t.getNext().key;if(this.comparator(r,n)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new X1(this.comparator);return a.data=c,a}}class Lr{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class x3{constructor(c){this.fields=c,c.sort(u2.comparator)}static empty(){return new x3([])}unionWith(c){let a=new X1(u2.comparator);for(const t of this.fields)a=a.add(t);for(const t of c)a=a.add(t);return new x3(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return c6(this.fields,c.fields,(a,t)=>a.isEqual(t))}}/**
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
 */class Bs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class o2{constructor(c){this.binaryString=c}static fromBase64String(c){const a=function(r){try{return atob(r)}catch(n){throw typeof DOMException<"u"&&n instanceof DOMException?new Bs("Invalid base64 string: "+n):n}}(c);return new o2(a)}static fromUint8Array(c){const a=function(r){let n="";for(let i=0;i<r.length;++i)n+=String.fromCharCode(r[i]);return n}(c);return new o2(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(a){return btoa(a)}(this.binaryString)}toUint8Array(){return function(a){const t=new Uint8Array(a.length);for(let r=0;r<a.length;r++)t[r]=a.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return p1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}o2.EMPTY_BYTE_STRING=new o2("");const Oy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function I3(e){if(R1(!!e),typeof e=="string"){let c=0;const a=Oy.exec(e);if(R1(!!a),a[1]){let r=a[1];r=(r+"000000000").substr(0,9),c=Number(r)}const t=new Date(e);return{seconds:Math.floor(t.getTime()/1e3),nanos:c}}return{seconds:I1(e.seconds),nanos:I1(e.nanos)}}function I1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function p4(e){return typeof e=="string"?o2.fromBase64String(e):o2.fromUint8Array(e)}/**
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
 */function Gc(e){var c,a;return((a=(((c=e?.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function jc(e){const c=e.mapValue.fields.__previous_value__;return Gc(c)?jc(c):c}function i0(e){const c=I3(e.mapValue.fields.__local_write_time__.timestampValue);return new z2(c.seconds,c.nanos)}/**
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
 */class qy{constructor(c,a,t,r,n,i,o,f,h){this.databaseId=c,this.appId=a,this.persistenceKey=t,this.host=r,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=f,this.useFetchStreams=h}}class s0{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new s0("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof s0&&c.projectId===this.projectId&&c.database===this.database}}/**
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
 */const t8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function z4(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Gc(e)?4:Uy(e)?9007199254740991:10:n1()}function c3(e,c){if(e===c)return!0;const a=z4(e);if(a!==z4(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return i0(e).isEqual(i0(c));case 3:return function(r,n){if(typeof r.timestampValue=="string"&&typeof n.timestampValue=="string"&&r.timestampValue.length===n.timestampValue.length)return r.timestampValue===n.timestampValue;const i=I3(r.timestampValue),o=I3(n.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(r,n){return p4(r.bytesValue).isEqual(p4(n.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(r,n){return I1(r.geoPointValue.latitude)===I1(n.geoPointValue.latitude)&&I1(r.geoPointValue.longitude)===I1(n.geoPointValue.longitude)}(e,c);case 2:return function(r,n){if("integerValue"in r&&"integerValue"in n)return I1(r.integerValue)===I1(n.integerValue);if("doubleValue"in r&&"doubleValue"in n){const i=I1(r.doubleValue),o=I1(n.doubleValue);return i===o?L9(i)===L9(o):isNaN(i)&&isNaN(o)}return!1}(e,c);case 9:return c6(e.arrayValue.values||[],c.arrayValue.values||[],c3);case 10:return function(r,n){const i=r.mapValue.fields||{},o=n.mapValue.fields||{};if(Mr(i)!==Mr(o))return!1;for(const f in i)if(i.hasOwnProperty(f)&&(o[f]===void 0||!c3(i[f],o[f])))return!1;return!0}(e,c);default:return n1()}}function o0(e,c){return(e.values||[]).find(a=>c3(a,c))!==void 0}function e6(e,c){if(e===c)return 0;const a=z4(e),t=z4(c);if(a!==t)return p1(a,t);switch(a){case 0:case 9007199254740991:return 0;case 1:return p1(e.booleanValue,c.booleanValue);case 2:return function(n,i){const o=I1(n.integerValue||n.doubleValue),f=I1(i.integerValue||i.doubleValue);return o<f?-1:o>f?1:o===f?0:isNaN(o)?isNaN(f)?0:-1:1}(e,c);case 3:return wr(e.timestampValue,c.timestampValue);case 4:return wr(i0(e),i0(c));case 5:return p1(e.stringValue,c.stringValue);case 6:return function(n,i){const o=p4(n),f=p4(i);return o.compareTo(f)}(e.bytesValue,c.bytesValue);case 7:return function(n,i){const o=n.split("/"),f=i.split("/");for(let h=0;h<o.length&&h<f.length;h++){const v=p1(o[h],f[h]);if(v!==0)return v}return p1(o.length,f.length)}(e.referenceValue,c.referenceValue);case 8:return function(n,i){const o=p1(I1(n.latitude),I1(i.latitude));return o!==0?o:p1(I1(n.longitude),I1(i.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(n,i){const o=n.values||[],f=i.values||[];for(let h=0;h<o.length&&h<f.length;++h){const v=e6(o[h],f[h]);if(v)return v}return p1(o.length,f.length)}(e.arrayValue,c.arrayValue);case 10:return function(n,i){if(n===t8.mapValue&&i===t8.mapValue)return 0;if(n===t8.mapValue)return 1;if(i===t8.mapValue)return-1;const o=n.fields||{},f=Object.keys(o),h=i.fields||{},v=Object.keys(h);f.sort(),v.sort();for(let d=0;d<f.length&&d<v.length;++d){const H=p1(f[d],v[d]);if(H!==0)return H;const V=e6(o[f[d]],h[v[d]]);if(V!==0)return V}return p1(f.length,v.length)}(e.mapValue,c.mapValue);default:throw n1()}}function wr(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return p1(e,c);const a=I3(e),t=I3(c),r=p1(a.seconds,t.seconds);return r!==0?r:p1(a.nanos,t.nanos)}function a6(e){return w9(e)}function w9(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(a){const t=I3(a);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(a){return p4(a).toBase64()}(e.bytesValue):"referenceValue"in e?function(a){return J.fromName(a).toString()}(e.referenceValue):"geoPointValue"in e?function(a){return`geo(${a.latitude},${a.longitude})`}(e.geoPointValue):"arrayValue"in e?function(a){let t="[",r=!0;for(const n of a.values||[])r?r=!1:t+=",",t+=w9(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(a){const t=Object.keys(a.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${w9(a.fields[i])}`;return r+"}"}(e.mapValue):n1()}function b9(e){return!!e&&"integerValue"in e}function Wc(e){return!!e&&"arrayValue"in e}function br(e){return!!e&&"nullValue"in e}function yr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function I7(e){return!!e&&"mapValue"in e}function D6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return b5(e.mapValue.fields,(a,t)=>c.mapValue.fields[a]=D6(t)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=D6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function Uy(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class K2{constructor(c){this.value=c}static empty(){return new K2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let t=0;t<c.length-1;++t)if(a=(a.mapValue.fields||{})[c.get(t)],!I7(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=D6(a)}setAll(c){let a=u2.emptyPath(),t={},r=[];c.forEach((i,o)=>{if(!a.isImmediateParentOf(o)){const f=this.getFieldsMap(a);this.applyChanges(f,t,r),t={},r=[],a=o.popLast()}i?t[o.lastSegment()]=D6(i):r.push(o.lastSegment())});const n=this.getFieldsMap(a);this.applyChanges(n,t,r)}delete(c){const a=this.field(c.popLast());I7(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return c3(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let t=0;t<c.length;++t){let r=a.mapValue.fields[c.get(t)];I7(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},a.mapValue.fields[c.get(t)]=r),a=r}return a.mapValue.fields}applyChanges(c,a,t){b5(a,(r,n)=>c[r]=n);for(const r of t)delete c[r]}clone(){return new K2(D6(this.value))}}/**
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
 */class r2{constructor(c,a,t,r,n,i,o){this.key=c,this.documentType=a,this.version=t,this.readTime=r,this.createTime=n,this.data=i,this.documentState=o}static newInvalidDocument(c){return new r2(c,0,e1.min(),e1.min(),e1.min(),K2.empty(),0)}static newFoundDocument(c,a,t,r){return new r2(c,1,a,e1.min(),t,r,0)}static newNoDocument(c,a){return new r2(c,2,a,e1.min(),e1.min(),K2.empty(),0)}static newUnknownDocument(c,a){return new r2(c,3,a,e1.min(),e1.min(),K2.empty(),2)}convertToFoundDocument(c,a){return!this.createTime.isEqual(e1.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=c),this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=K2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=K2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=e1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof r2&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new r2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class O8{constructor(c,a){this.position=c,this.inclusive=a}}function xr(e,c,a){let t=0;for(let r=0;r<e.position.length;r++){const n=c[r],i=e.position[r];if(n.field.isKeyField()?t=J.comparator(J.fromName(i.referenceValue),a.key):t=e6(i,a.data.field(n.field)),n.dir==="desc"&&(t*=-1),t!==0)break}return t}function Sr(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!c3(e.position[a],c.position[a]))return!1;return!0}/**
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
 */class q8{constructor(c,a="asc"){this.field=c,this.dir=a}}function $y(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}/**
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
 */class Os{}class D1 extends Os{constructor(c,a,t){super(),this.field=c,this.op=a,this.value=t}static create(c,a,t){return c.isKeyField()?a==="in"||a==="not-in"?this.createKeyFieldInFilter(c,a,t):new jy(c,a,t):a==="array-contains"?new Zy(c,t):a==="in"?new Qy(c,t):a==="not-in"?new Yy(c,t):a==="array-contains-any"?new Xy(c,t):new D1(c,a,t)}static createKeyFieldInFilter(c,a,t){return a==="in"?new Wy(c,t):new Ky(c,t)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.matchesComparison(e6(a,this.value)):a!==null&&z4(this.value)===z4(a)&&this.matchesComparison(e6(a,this.value))}matchesComparison(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return n1()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class e3 extends Os{constructor(c,a){super(),this.filters=c,this.op=a,this.ue=null}static create(c,a){return new e3(c,a)}matches(c){return qs(this)?this.filters.find(a=>!a.matches(c))===void 0:this.filters.find(a=>a.matches(c))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((c,a)=>c.concat(a.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function qs(e){return e.op==="and"}function Us(e){return Gy(e)&&qs(e)}function Gy(e){for(const c of e.filters)if(c instanceof e3)return!1;return!0}function y9(e){if(e instanceof D1)return e.field.canonicalString()+e.op.toString()+a6(e.value);if(Us(e))return e.filters.map(c=>y9(c)).join(",");{const c=e.filters.map(a=>y9(a)).join(",");return`${e.op}(${c})`}}function $s(e,c){return e instanceof D1?function(t,r){return r instanceof D1&&t.op===r.op&&t.field.isEqual(r.field)&&c3(t.value,r.value)}(e,c):e instanceof e3?function(t,r){return r instanceof e3&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((n,i,o)=>n&&$s(i,r.filters[o]),!0):!1}(e,c):void n1()}function Gs(e){return e instanceof D1?function(a){return`${a.field.canonicalString()} ${a.op} ${a6(a.value)}`}(e):e instanceof e3?function(a){return a.op.toString()+" {"+a.getFilters().map(Gs).join(" ,")+"}"}(e):"Filter"}class jy extends D1{constructor(c,a,t){super(c,a,t),this.key=J.fromName(t.referenceValue)}matches(c){const a=J.comparator(c.key,this.key);return this.matchesComparison(a)}}class Wy extends D1{constructor(c,a){super(c,"in",a),this.keys=js("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class Ky extends D1{constructor(c,a){super(c,"not-in",a),this.keys=js("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function js(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(t=>J.fromName(t.referenceValue))}class Zy extends D1{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return Wc(a)&&o0(a.arrayValue,this.value)}}class Qy extends D1{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&o0(this.value.arrayValue,a)}}class Yy extends D1{constructor(c,a){super(c,"not-in",a)}matches(c){if(o0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!o0(this.value.arrayValue,a)}}class Xy extends D1{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!Wc(a)||!a.arrayValue.values)&&a.arrayValue.values.some(t=>o0(this.value.arrayValue,t))}}/**
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
 */class Jy{constructor(c,a=null,t=[],r=[],n=null,i=null,o=null){this.path=c,this.collectionGroup=a,this.orderBy=t,this.filters=r,this.limit=n,this.startAt=i,this.endAt=o,this.ce=null}}function Nr(e,c=null,a=[],t=[],r=null,n=null,i=null){return new Jy(e,c,a,t,r,n,i)}function Kc(e){const c=v1(e);if(c.ce===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(t=>y9(t)).join(","),a+="|ob:",a+=c.orderBy.map(t=>function(n){return n.field.canonicalString()+n.dir}(t)).join(","),w5(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(t=>a6(t)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(t=>a6(t)).join(",")),c.ce=a}return c.ce}function Zc(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(!$y(e.orderBy[a],c.orderBy[a]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!$s(e.filters[a],c.filters[a]))return!1;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!Sr(e.startAt,c.startAt)&&Sr(e.endAt,c.endAt)}function x9(e){return J.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class y5{constructor(c,a=null,t=[],r=[],n=null,i="F",o=null,f=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=t,this.filters=r,this.limit=n,this.limitType=i,this.startAt=o,this.endAt=f,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function cx(e,c,a,t,r,n,i,o){return new y5(e,c,a,t,r,n,i,o)}function Ws(e){return new y5(e)}function Ar(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ex(e){return e.collectionGroup!==null}function F6(e){const c=v1(e);if(c.le===null){c.le=[];const a=new Set;for(const n of c.explicitOrderBy)c.le.push(n),a.add(n.field.canonicalString());const t=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";(function(i){let o=new X1(u2.comparator);return i.filters.forEach(f=>{f.getFlattenedFilters().forEach(h=>{h.isInequality()&&(o=o.add(h.field))})}),o})(c).forEach(n=>{a.has(n.canonicalString())||n.isKeyField()||c.le.push(new q8(n,t))}),a.has(u2.keyField().canonicalString())||c.le.push(new q8(u2.keyField(),t))}return c.le}function X2(e){const c=v1(e);return c.he||(c.he=ax(c,F6(e))),c.he}function ax(e,c){if(e.limitType==="F")return Nr(e.path,e.collectionGroup,c,e.filters,e.limit,e.startAt,e.endAt);{c=c.map(r=>{const n=r.dir==="desc"?"asc":"desc";return new q8(r.field,n)});const a=e.endAt?new O8(e.endAt.position,e.endAt.inclusive):null,t=e.startAt?new O8(e.startAt.position,e.startAt.inclusive):null;return Nr(e.path,e.collectionGroup,c,e.filters,e.limit,a,t)}}function S9(e,c,a){return new y5(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function x5(e,c){return Zc(X2(e),X2(c))&&e.limitType===c.limitType}function Ks(e){return`${Kc(X2(e))}|lt:${e.limitType}`}function T4(e){return`Query(target=${function(a){let t=a.path.canonicalString();return a.collectionGroup!==null&&(t+=" collectionGroup="+a.collectionGroup),a.filters.length>0&&(t+=`, filters: [${a.filters.map(r=>Gs(r)).join(", ")}]`),w5(a.limit)||(t+=", limit: "+a.limit),a.orderBy.length>0&&(t+=`, orderBy: [${a.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),a.startAt&&(t+=", startAt: ",t+=a.startAt.inclusive?"b:":"a:",t+=a.startAt.position.map(r=>a6(r)).join(",")),a.endAt&&(t+=", endAt: ",t+=a.endAt.inclusive?"a:":"b:",t+=a.endAt.position.map(r=>a6(r)).join(",")),`Target(${t})`}(X2(e))}; limitType=${e.limitType})`}function S5(e,c){return c.isFoundDocument()&&function(t,r){const n=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):J.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(e,c)&&function(t,r){for(const n of F6(t))if(!n.field.isKeyField()&&r.data.field(n.field)===null)return!1;return!0}(e,c)&&function(t,r){for(const n of t.filters)if(!n.matches(r))return!1;return!0}(e,c)&&function(t,r){return!(t.startAt&&!function(i,o,f){const h=xr(i,o,f);return i.inclusive?h<=0:h<0}(t.startAt,F6(t),r)||t.endAt&&!function(i,o,f){const h=xr(i,o,f);return i.inclusive?h>=0:h>0}(t.endAt,F6(t),r))}(e,c)}function tx(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Zs(e){return(c,a)=>{let t=!1;for(const r of F6(e)){const n=rx(r,c,a);if(n!==0)return n;t=t||r.field.isKeyField()}return 0}}function rx(e,c,a){const t=e.field.isKeyField()?J.comparator(c.key,a.key):function(n,i,o){const f=i.data.field(n),h=o.data.field(n);return f!==null&&h!==null?e6(f,h):n1()}(e.field,c,a);switch(e.dir){case"asc":return t;case"desc":return-1*t;default:return n1()}}/**
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
 */class h6{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),t=this.inner[a];if(t!==void 0){for(const[r,n]of t)if(this.equalsFn(r,c))return n}}has(c){return this.get(c)!==void 0}set(c,a){const t=this.mapKeyFn(c),r=this.inner[t];if(r===void 0)return this.inner[t]=[[c,a]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],c))return void(r[n]=[c,a]);r.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),t=this.inner[a];if(t===void 0)return!1;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return t.length===1?delete this.inner[a]:t.splice(r,1),this.innerSize--,!0;return!1}forEach(c){b5(this.inner,(a,t)=>{for(const[r,n]of t)c(r,n)})}isEmpty(){return By(this.inner)}size(){return this.innerSize}}/**
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
 */const nx=new E1(J.comparator);function R3(){return nx}const Qs=new E1(J.comparator);function N6(...e){let c=Qs;for(const a of e)c=c.insert(a.key,a);return c}function ix(e){let c=Qs;return e.forEach((a,t)=>c=c.insert(a,t.overlayedDocument)),c}function i4(){return B6()}function Ys(){return B6()}function B6(){return new h6(e=>e.toString(),(e,c)=>e.isEqual(c))}const sx=new X1(J.comparator);function m1(...e){let c=sx;for(const a of e)c=c.add(a);return c}const ox=new X1(p1);function lx(){return ox}/**
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
 */function fx(e,c){if(e.useProto3Json){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:L9(c)?"-0":c}}function hx(e){return{integerValue:""+e}}/**
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
 */class N5{constructor(){this._=void 0}}function ux(e,c,a){return e instanceof N9?function(r,n){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return n&&Gc(n)&&(n=jc(n)),n&&(i.fields.__previous_value__=n),{mapValue:i}}(a,c):e instanceof U8?Xs(e,c):e instanceof $8?Js(e,c):function(r,n){const i=vx(r,n),o=_r(i)+_r(r.Ie);return b9(i)&&b9(r.Ie)?hx(o):fx(r.serializer,o)}(e,c)}function mx(e,c,a){return e instanceof U8?Xs(e,c):e instanceof $8?Js(e,c):a}function vx(e,c){return e instanceof A9?function(t){return b9(t)||function(n){return!!n&&"doubleValue"in n}(t)}(c)?c:{integerValue:0}:null}class N9 extends N5{}class U8 extends N5{constructor(c){super(),this.elements=c}}function Xs(e,c){const a=co(c);for(const t of e.elements)a.some(r=>c3(r,t))||a.push(t);return{arrayValue:{values:a}}}class $8 extends N5{constructor(c){super(),this.elements=c}}function Js(e,c){let a=co(c);for(const t of e.elements)a=a.filter(r=>!c3(r,t));return{arrayValue:{values:a}}}class A9 extends N5{constructor(c,a){super(),this.serializer=c,this.Ie=a}}function _r(e){return I1(e.integerValue||e.doubleValue)}function co(e){return Wc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dx(e,c){return e.field.isEqual(c.field)&&function(t,r){return t instanceof U8&&r instanceof U8||t instanceof $8&&r instanceof $8?c6(t.elements,r.elements,c3):t instanceof A9&&r instanceof A9?c3(t.Ie,r.Ie):t instanceof N9&&r instanceof N9}(e.transform,c.transform)}class u4{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new u4}static exists(c){return new u4(void 0,c)}static updateTime(c){return new u4(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function C8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class Qc{}function eo(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new zx(e.key,u4.none()):new Yc(e.key,e.data,u4.none());{const a=e.data,t=K2.empty();let r=new X1(u2.comparator);for(let n of c.fields)if(!r.has(n)){let i=a.field(n);i===null&&n.length>1&&(n=n.popLast(),i=a.field(n)),i===null?t.delete(n):t.set(n,i),r=r.add(n)}return new A5(e.key,t,new x3(r.toArray()),u4.none())}}function px(e,c,a){e instanceof Yc?function(r,n,i){const o=r.value.clone(),f=Tr(r.fieldTransforms,n,i.transformResults);o.setAll(f),n.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,c,a):e instanceof A5?function(r,n,i){if(!C8(r.precondition,n))return void n.convertToUnknownDocument(i.version);const o=Tr(r.fieldTransforms,n,i.transformResults),f=n.data;f.setAll(ao(r)),f.setAll(o),n.convertToFoundDocument(i.version,f).setHasCommittedMutations()}(e,c,a):function(r,n,i){n.convertToNoDocument(i.version).setHasCommittedMutations()}(0,c,a)}function O6(e,c,a,t){return e instanceof Yc?function(n,i,o,f){if(!C8(n.precondition,i))return o;const h=n.value.clone(),v=Er(n.fieldTransforms,f,i);return h.setAll(v),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),null}(e,c,a,t):e instanceof A5?function(n,i,o,f){if(!C8(n.precondition,i))return o;const h=Er(n.fieldTransforms,f,i),v=i.data;return v.setAll(ao(n)),v.setAll(h),i.convertToFoundDocument(i.version,v).setHasLocalMutations(),o===null?null:o.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(d=>d.field))}(e,c,a,t):function(n,i,o){return C8(n.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,c,a)}function kr(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&c6(t,r,(n,i)=>dx(n,i))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class Yc extends Qc{constructor(c,a,t,r=[]){super(),this.key=c,this.value=a,this.precondition=t,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class A5 extends Qc{constructor(c,a,t,r,n=[]){super(),this.key=c,this.data=a,this.fieldMask=t,this.precondition=r,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function ao(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const t=e.data.field(a);c.set(a,t)}}),c}function Tr(e,c,a){const t=new Map;R1(e.length===a.length);for(let r=0;r<a.length;r++){const n=e[r],i=n.transform,o=c.data.field(n.field);t.set(n.field,mx(i,o,a[r]))}return t}function Er(e,c,a){const t=new Map;for(const r of e){const n=r.transform,i=a.data.field(r.field);t.set(r.field,ux(n,i,c))}return t}class zx extends Qc{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hx{constructor(c,a,t,r){this.batchId=c,this.localWriteTime=a,this.baseMutations=t,this.mutations=r}applyToRemoteDocument(c,a){const t=a.mutationResults;for(let r=0;r<this.mutations.length;r++){const n=this.mutations[r];n.key.isEqual(c.key)&&px(n,c,t[r])}}applyToLocalView(c,a){for(const t of this.baseMutations)t.key.isEqual(c.key)&&(a=O6(t,c,a,this.localWriteTime));for(const t of this.mutations)t.key.isEqual(c.key)&&(a=O6(t,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const t=Ys();return this.mutations.forEach(r=>{const n=c.get(r.key),i=n.overlayedDocument;let o=this.applyToLocalView(i,n.mutatedFields);o=a.has(r.key)?null:o;const f=eo(i,o);f!==null&&t.set(r.key,f),i.isValidDocument()||i.convertToNoDocument(e1.min())}),t}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),m1())}isEqual(c){return this.batchId===c.batchId&&c6(this.mutations,c.mutations,(a,t)=>kr(a,t))&&c6(this.baseMutations,c.baseMutations,(a,t)=>kr(a,t))}}/**
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
 */class gx{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
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
 */class Vx{constructor(c,a){this.count=c,this.unchangedNames=a}}/**
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
 */var P1,l1;function to(e){if(e===void 0)return J2("GRPC error has no .code"),T.UNKNOWN;switch(e){case P1.OK:return T.OK;case P1.CANCELLED:return T.CANCELLED;case P1.UNKNOWN:return T.UNKNOWN;case P1.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case P1.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case P1.INTERNAL:return T.INTERNAL;case P1.UNAVAILABLE:return T.UNAVAILABLE;case P1.UNAUTHENTICATED:return T.UNAUTHENTICATED;case P1.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case P1.NOT_FOUND:return T.NOT_FOUND;case P1.ALREADY_EXISTS:return T.ALREADY_EXISTS;case P1.PERMISSION_DENIED:return T.PERMISSION_DENIED;case P1.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case P1.ABORTED:return T.ABORTED;case P1.OUT_OF_RANGE:return T.OUT_OF_RANGE;case P1.UNIMPLEMENTED:return T.UNIMPLEMENTED;case P1.DATA_LOSS:return T.DATA_LOSS;default:return n1()}}(l1=P1||(P1={}))[l1.OK=0]="OK",l1[l1.CANCELLED=1]="CANCELLED",l1[l1.UNKNOWN=2]="UNKNOWN",l1[l1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l1[l1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l1[l1.NOT_FOUND=5]="NOT_FOUND",l1[l1.ALREADY_EXISTS=6]="ALREADY_EXISTS",l1[l1.PERMISSION_DENIED=7]="PERMISSION_DENIED",l1[l1.UNAUTHENTICATED=16]="UNAUTHENTICATED",l1[l1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l1[l1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l1[l1.ABORTED=10]="ABORTED",l1[l1.OUT_OF_RANGE=11]="OUT_OF_RANGE",l1[l1.UNIMPLEMENTED=12]="UNIMPLEMENTED",l1[l1.INTERNAL=13]="INTERNAL",l1[l1.UNAVAILABLE=14]="UNAVAILABLE",l1[l1.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Cx(){return new TextEncoder}/**
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
 */const Mx=new G4([4294967295,4294967295],0);function Pr(e){const c=Cx().encode(e),a=new My;return a.update(c),new Uint8Array(a.digest())}function Ir(e){const c=new DataView(e.buffer),a=c.getUint32(0,!0),t=c.getUint32(4,!0),r=c.getUint32(8,!0),n=c.getUint32(12,!0);return[new G4([a,t],0),new G4([r,n],0)]}class Xc{constructor(c,a,t){if(this.bitmap=c,this.padding=a,this.hashCount=t,a<0||a>=8)throw new A6(`Invalid padding: ${a}`);if(t<0)throw new A6(`Invalid hash count: ${t}`);if(c.length>0&&this.hashCount===0)throw new A6(`Invalid hash count: ${t}`);if(c.length===0&&a!==0)throw new A6(`Invalid padding when bitmap length is 0: ${a}`);this.Te=8*c.length-a,this.Ee=G4.fromNumber(this.Te)}de(c,a,t){let r=c.add(a.multiply(G4.fromNumber(t)));return r.compare(Mx)===1&&(r=new G4([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(c){return(this.bitmap[Math.floor(c/8)]&1<<c%8)!=0}mightContain(c){if(this.Te===0)return!1;const a=Pr(c),[t,r]=Ir(a);for(let n=0;n<this.hashCount;n++){const i=this.de(t,r,n);if(!this.Ae(i))return!1}return!0}static create(c,a,t){const r=c%8==0?0:8-c%8,n=new Uint8Array(Math.ceil(c/8)),i=new Xc(n,r,a);return t.forEach(o=>i.insert(o)),i}insert(c){if(this.Te===0)return;const a=Pr(c),[t,r]=Ir(a);for(let n=0;n<this.hashCount;n++){const i=this.de(t,r,n);this.Re(i)}}Re(c){const a=Math.floor(c/8),t=c%8;this.bitmap[a]|=1<<t}}class A6 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _5{constructor(c,a,t,r,n){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=t,this.documentUpdates=r,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(c,a,t){const r=new Map;return r.set(c,b0.createSynthesizedTargetChangeForCurrentChange(c,a,t)),new _5(e1.min(),r,new E1(p1),R3(),m1())}}class b0{constructor(c,a,t,r,n){this.resumeToken=c,this.current=a,this.addedDocuments=t,this.modifiedDocuments=r,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(c,a,t){return new b0(t,a,m1(),m1(),m1())}}/**
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
 */class M8{constructor(c,a,t,r){this.Ve=c,this.removedTargetIds=a,this.key=t,this.me=r}}class ro{constructor(c,a){this.targetId=c,this.fe=a}}class no{constructor(c,a,t=o2.EMPTY_BYTE_STRING,r=null){this.state=c,this.targetIds=a,this.resumeToken=t,this.cause=r}}class Rr{constructor(){this.ge=0,this.pe=Fr(),this.ye=o2.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(c){c.approximateByteSize()>0&&(this.Se=!0,this.ye=c)}ve(){let c=m1(),a=m1(),t=m1();return this.pe.forEach((r,n)=>{switch(n){case 0:c=c.add(r);break;case 2:a=a.add(r);break;case 1:t=t.add(r);break;default:n1()}}),new b0(this.ye,this.we,c,a,t)}Fe(){this.Se=!1,this.pe=Fr()}Me(c,a){this.Se=!0,this.pe=this.pe.insert(c,a)}xe(c){this.Se=!0,this.pe=this.pe.remove(c)}Oe(){this.ge+=1}Ne(){this.ge-=1,R1(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Lx{constructor(c){this.Be=c,this.ke=new Map,this.qe=R3(),this.Qe=Dr(),this.Ke=new E1(p1)}$e(c){for(const a of c.Ve)c.me&&c.me.isFoundDocument()?this.Ue(a,c.me):this.We(a,c.key,c.me);for(const a of c.removedTargetIds)this.We(a,c.key,c.me)}Ge(c){this.forEachTarget(c,a=>{const t=this.ze(a);switch(c.state){case 0:this.je(a)&&t.Ce(c.resumeToken);break;case 1:t.Ne(),t.be||t.Fe(),t.Ce(c.resumeToken);break;case 2:t.Ne(),t.be||this.removeTarget(a);break;case 3:this.je(a)&&(t.Le(),t.Ce(c.resumeToken));break;case 4:this.je(a)&&(this.He(a),t.Ce(c.resumeToken));break;default:n1()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.ke.forEach((t,r)=>{this.je(r)&&a(r)})}Je(c){const a=c.targetId,t=c.fe.count,r=this.Ye(a);if(r){const n=r.target;if(x9(n))if(t===0){const i=new J(n.path);this.We(a,i,r2.newNoDocument(i,e1.min()))}else R1(t===1);else{const i=this.Ze(a);if(i!==t){const o=this.Xe(c),f=o?this.et(o,c,i):1;if(f!==0){this.He(a);const h=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(a,h)}}}}}Xe(c){const a=c.fe.unchangedNames;if(!a||!a.bits)return null;const{bits:{bitmap:t="",padding:r=0},hashCount:n=0}=a;let i,o;try{i=p4(t).toUint8Array()}catch(f){if(f instanceof Bs)return J4("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{o=new Xc(i,r,n)}catch(f){return J4(f instanceof A6?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return o.Te===0?null:o}et(c,a,t){return a.fe.count===t-this.rt(c,a.targetId)?0:2}rt(c,a){const t=this.Be.getRemoteKeysForTarget(a);let r=0;return t.forEach(n=>{const i=this.Be.nt(),o=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;c.mightContain(o)||(this.We(a,n,null),r++)}),r}it(c){const a=new Map;this.ke.forEach((n,i)=>{const o=this.Ye(i);if(o){if(n.current&&x9(o.target)){const f=new J(o.target.path);this.qe.get(f)!==null||this.st(i,f)||this.We(i,f,r2.newNoDocument(f,c))}n.De&&(a.set(i,n.ve()),n.Fe())}});let t=m1();this.Qe.forEach((n,i)=>{let o=!0;i.forEachWhile(f=>{const h=this.Ye(f);return!h||h.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(t=t.add(n))}),this.qe.forEach((n,i)=>i.setReadTime(c));const r=new _5(c,a,this.Ke,this.qe,t);return this.qe=R3(),this.Qe=Dr(),this.Ke=new E1(p1),r}Ue(c,a){if(!this.je(c))return;const t=this.st(c,a.key)?2:0;this.ze(c).Me(a.key,t),this.qe=this.qe.insert(a.key,a),this.Qe=this.Qe.insert(a.key,this.ot(a.key).add(c))}We(c,a,t){if(!this.je(c))return;const r=this.ze(c);this.st(c,a)?r.Me(a,1):r.xe(a),this.Qe=this.Qe.insert(a,this.ot(a).delete(c)),t&&(this.qe=this.qe.insert(a,t))}removeTarget(c){this.ke.delete(c)}Ze(c){const a=this.ze(c).ve();return this.Be.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Oe(c){this.ze(c).Oe()}ze(c){let a=this.ke.get(c);return a||(a=new Rr,this.ke.set(c,a)),a}ot(c){let a=this.Qe.get(c);return a||(a=new X1(p1),this.Qe=this.Qe.insert(c,a)),a}je(c){const a=this.Ye(c)!==null;return a||D("WatchChangeAggregator","Detected inactive target",c),a}Ye(c){const a=this.ke.get(c);return a&&a.be?null:this.Be._t(c)}He(c){this.ke.set(c,new Rr),this.Be.getRemoteKeysForTarget(c).forEach(a=>{this.We(c,a,null)})}st(c,a){return this.Be.getRemoteKeysForTarget(c).has(a)}}function Dr(){return new E1(J.comparator)}function Fr(){return new E1(J.comparator)}const wx={asc:"ASCENDING",desc:"DESCENDING"},bx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yx={and:"AND",or:"OR"};class xx{constructor(c,a){this.databaseId=c,this.useProto3Json=a}}function _9(e,c){return e.useProto3Json||w5(c)?c:{value:c}}function Sx(e,c){return e.useProto3Json?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Nx(e,c){return e.useProto3Json?c.toBase64():c.toUint8Array()}function j4(e){return R1(!!e),e1.fromTimestamp(function(a){const t=I3(a);return new z2(t.seconds,t.nanos)}(e))}function Ax(e,c){return k9(e,c).canonicalString()}function k9(e,c){const a=function(r){return new A1(["projects",r.projectId,"databases",r.database])}(e).child("documents");return c===void 0?a:a.child(c)}function io(e){const c=A1.fromString(e);return R1(ho(c)),c}function R7(e,c){const a=io(c);if(a.get(1)!==e.databaseId.projectId)throw new K(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new K(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new J(oo(a))}function so(e,c){return Ax(e.databaseId,c)}function _x(e){const c=io(e);return c.length===4?A1.emptyPath():oo(c)}function Br(e){return new A1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function oo(e){return R1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function kx(e,c){let a;if("targetChange"in c){c.targetChange;const t=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:n1()}(c.targetChange.targetChangeType||"NO_CHANGE"),r=c.targetChange.targetIds||[],n=function(h,v){return h.useProto3Json?(R1(v===void 0||typeof v=="string"),o2.fromBase64String(v||"")):(R1(v===void 0||v instanceof Uint8Array),o2.fromUint8Array(v||new Uint8Array))}(e,c.targetChange.resumeToken),i=c.targetChange.cause,o=i&&function(h){const v=h.code===void 0?T.UNKNOWN:to(h.code);return new K(v,h.message||"")}(i);a=new no(t,r,n,o||null)}else if("documentChange"in c){c.documentChange;const t=c.documentChange;t.document,t.document.name,t.document.updateTime;const r=R7(e,t.document.name),n=j4(t.document.updateTime),i=t.document.createTime?j4(t.document.createTime):e1.min(),o=new K2({mapValue:{fields:t.document.fields}}),f=r2.newFoundDocument(r,n,i,o),h=t.targetIds||[],v=t.removedTargetIds||[];a=new M8(h,v,f.key,f)}else if("documentDelete"in c){c.documentDelete;const t=c.documentDelete;t.document;const r=R7(e,t.document),n=t.readTime?j4(t.readTime):e1.min(),i=r2.newNoDocument(r,n),o=t.removedTargetIds||[];a=new M8([],o,i.key,i)}else if("documentRemove"in c){c.documentRemove;const t=c.documentRemove;t.document;const r=R7(e,t.document),n=t.removedTargetIds||[];a=new M8([],n,r,null)}else{if(!("filter"in c))return n1();{c.filter;const t=c.filter;t.targetId;const{count:r=0,unchangedNames:n}=t,i=new Vx(r,n),o=t.targetId;a=new ro(o,i)}}return a}function Tx(e,c){return{documents:[so(e,c.path)]}}function Ex(e,c){const a={structuredQuery:{}},t=c.path;let r;c.collectionGroup!==null?(r=t,a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(r=t.popLast(),a.structuredQuery.from=[{collectionId:t.lastSegment()}]),a.parent=so(e,r);const n=function(h){if(h.length!==0)return fo(e3.create(h,"and"))}(c.filters);n&&(a.structuredQuery.where=n);const i=function(h){if(h.length!==0)return h.map(v=>function(H){return{field:E4(H.field),direction:Rx(H.dir)}}(v))}(c.orderBy);i&&(a.structuredQuery.orderBy=i);const o=_9(e,c.limit);return o!==null&&(a.structuredQuery.limit=o),c.startAt&&(a.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(c.startAt)),c.endAt&&(a.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(c.endAt)),{ut:a,parent:r}}function Px(e){let c=_x(e.parent);const a=e.structuredQuery,t=a.from?a.from.length:0;let r=null;if(t>0){R1(t===1);const v=a.from[0];v.allDescendants?r=v.collectionId:c=c.child(v.collectionId)}let n=[];a.where&&(n=function(d){const H=lo(d);return H instanceof e3&&Us(H)?H.getFilters():[H]}(a.where));let i=[];a.orderBy&&(i=function(d){return d.map(H=>function(F){return new q8(P4(F.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(H))}(a.orderBy));let o=null;a.limit&&(o=function(d){let H;return H=typeof d=="object"?d.value:d,w5(H)?null:H}(a.limit));let f=null;a.startAt&&(f=function(d){const H=!!d.before,V=d.values||[];return new O8(V,H)}(a.startAt));let h=null;return a.endAt&&(h=function(d){const H=!d.before,V=d.values||[];return new O8(V,H)}(a.endAt)),cx(c,r,i,n,o,"F",f,h)}function Ix(e,c){const a=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return n1()}}(c.purpose);return a==null?null:{"goog-listen-tags":a}}function lo(e){return e.unaryFilter!==void 0?function(a){switch(a.unaryFilter.op){case"IS_NAN":const t=P4(a.unaryFilter.field);return D1.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=P4(a.unaryFilter.field);return D1.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=P4(a.unaryFilter.field);return D1.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=P4(a.unaryFilter.field);return D1.create(i,"!=",{nullValue:"NULL_VALUE"});default:return n1()}}(e):e.fieldFilter!==void 0?function(a){return D1.create(P4(a.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return n1()}}(a.fieldFilter.op),a.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(a){return e3.create(a.compositeFilter.filters.map(t=>lo(t)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return n1()}}(a.compositeFilter.op))}(e):n1()}function Rx(e){return wx[e]}function Dx(e){return bx[e]}function Fx(e){return yx[e]}function E4(e){return{fieldPath:e.canonicalString()}}function P4(e){return u2.fromServerFormat(e.fieldPath)}function fo(e){return e instanceof D1?function(a){if(a.op==="=="){if(yr(a.value))return{unaryFilter:{field:E4(a.field),op:"IS_NAN"}};if(br(a.value))return{unaryFilter:{field:E4(a.field),op:"IS_NULL"}}}else if(a.op==="!="){if(yr(a.value))return{unaryFilter:{field:E4(a.field),op:"IS_NOT_NAN"}};if(br(a.value))return{unaryFilter:{field:E4(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:E4(a.field),op:Dx(a.op),value:a.value}}}(e):e instanceof e3?function(a){const t=a.getFilters().map(r=>fo(r));return t.length===1?t[0]:{compositeFilter:{op:Fx(a.op),filters:t}}}(e):n1()}function ho(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class S3{constructor(c,a,t,r,n=e1.min(),i=e1.min(),o=o2.EMPTY_BYTE_STRING,f=null){this.target=c,this.targetId=a,this.purpose=t,this.sequenceNumber=r,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=f}withSequenceNumber(c){return new S3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(c,a){return new S3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c,null)}withExpectedCount(c){return new S3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,c)}withLastLimboFreeSnapshotVersion(c){return new S3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken,this.expectedCount)}}/**
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
 */class Bx{constructor(c){this.ct=c}}function Ox(e){const c=Px({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?S9(c,c.limit,"L"):c}/**
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
 */class qx{constructor(){this._n=new Ux}addToCollectionParentIndex(c,a){return this._n.add(a),x.resolve()}getCollectionParents(c,a){return x.resolve(this._n.getEntries(a))}addFieldIndex(c,a){return x.resolve()}deleteFieldIndex(c,a){return x.resolve()}deleteAllFieldIndexes(c){return x.resolve()}createTargetIndexes(c,a){return x.resolve()}getDocumentsMatchingTarget(c,a){return x.resolve(null)}getIndexType(c,a){return x.resolve(0)}getFieldIndexes(c,a){return x.resolve([])}getNextCollectionGroupToUpdate(c){return x.resolve(null)}getMinOffset(c,a){return x.resolve(P3.min())}getMinOffsetFromCollectionGroup(c,a){return x.resolve(P3.min())}updateCollectionGroup(c,a,t){return x.resolve()}updateIndexEntries(c,a){return x.resolve()}}class Ux{constructor(){this.index={}}add(c){const a=c.lastSegment(),t=c.popLast(),r=this.index[a]||new X1(A1.comparator),n=!r.has(t);return this.index[a]=r.add(t),n}has(c){const a=c.lastSegment(),t=c.popLast(),r=this.index[a];return r&&r.has(t)}getEntries(c){return(this.index[c]||new X1(A1.comparator)).toArray()}}/**
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
 */class t6{constructor(c){this.On=c}next(){return this.On+=2,this.On}static Nn(){return new t6(0)}static Ln(){return new t6(-1)}}/**
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
 */class $x{constructor(){this.changes=new h6(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,r2.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const t=this.changes.get(a);return t!==void 0?x.resolve(t):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
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
 */class Gx{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
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
 */class jx{constructor(c,a,t,r){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=t,this.indexManager=r}getDocument(c,a){let t=null;return this.documentOverlayCache.getOverlay(c,a).next(r=>(t=r,this.remoteDocumentCache.getEntry(c,a))).next(r=>(t!==null&&O6(t.mutation,r,x3.empty(),z2.now()),r))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(t=>this.getLocalViewOfDocuments(c,t,m1()).next(()=>t))}getLocalViewOfDocuments(c,a,t=m1()){const r=i4();return this.populateOverlays(c,r,a).next(()=>this.computeViews(c,a,r,t).next(n=>{let i=N6();return n.forEach((o,f)=>{i=i.insert(o,f.overlayedDocument)}),i}))}getOverlayedDocuments(c,a){const t=i4();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,m1()))}populateOverlays(c,a,t){const r=[];return t.forEach(n=>{a.has(n)||r.push(n)}),this.documentOverlayCache.getOverlays(c,r).next(n=>{n.forEach((i,o)=>{a.set(i,o)})})}computeViews(c,a,t,r){let n=R3();const i=B6(),o=function(){return B6()}();return a.forEach((f,h)=>{const v=t.get(h.key);r.has(h.key)&&(v===void 0||v.mutation instanceof A5)?n=n.insert(h.key,h):v!==void 0?(i.set(h.key,v.mutation.getFieldMask()),O6(v.mutation,h,v.mutation.getFieldMask(),z2.now())):i.set(h.key,x3.empty())}),this.recalculateAndSaveOverlays(c,n).next(f=>(f.forEach((h,v)=>i.set(h,v)),a.forEach((h,v)=>{var d;return o.set(h,new Gx(v,(d=i.get(h))!==null&&d!==void 0?d:null))}),o))}recalculateAndSaveOverlays(c,a){const t=B6();let r=new E1((i,o)=>i-o),n=m1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(i=>{for(const o of i)o.keys().forEach(f=>{const h=a.get(f);if(h===null)return;let v=t.get(f)||x3.empty();v=o.applyToLocalView(h,v),t.set(f,v);const d=(r.get(o.batchId)||m1()).add(f);r=r.insert(o.batchId,d)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const f=o.getNext(),h=f.key,v=f.value,d=Ys();v.forEach(H=>{if(!n.has(H)){const V=eo(a.get(H),t.get(H));V!==null&&d.set(H,V),n=n.add(H)}}),i.push(this.documentOverlayCache.saveOverlays(c,h,d))}return x.waitFor(i)}).next(()=>t)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(t=>this.recalculateAndSaveOverlays(c,t))}getDocumentsMatchingQuery(c,a,t,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):ex(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,t,r):this.getDocumentsMatchingCollectionQuery(c,a,t,r)}getNextDocuments(c,a,t,r){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,t,r).next(n=>{const i=r-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,t.largestBatchId,r-n.size):x.resolve(i4());let o=-1,f=n;return i.next(h=>x.forEach(h,(v,d)=>(o<d.largestBatchId&&(o=d.largestBatchId),n.get(v)?x.resolve():this.remoteDocumentCache.getEntry(c,v).next(H=>{f=f.insert(v,H)}))).next(()=>this.populateOverlays(c,h,n)).next(()=>this.computeViews(c,f,h,m1())).next(v=>({batchId:o,changes:ix(v)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new J(a)).next(t=>{let r=N6();return t.isFoundDocument()&&(r=r.insert(t.key,t)),r})}getDocumentsMatchingCollectionGroupQuery(c,a,t,r){const n=a.collectionGroup;let i=N6();return this.indexManager.getCollectionParents(c,n).next(o=>x.forEach(o,f=>{const h=function(d,H){return new y5(H,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(a,f.child(n));return this.getDocumentsMatchingCollectionQuery(c,h,t,r).next(v=>{v.forEach((d,H)=>{i=i.insert(d,H)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(c,a,t,r){let n;return this.documentOverlayCache.getOverlaysForCollection(c,a.path,t.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(c,a,t,n,r))).next(i=>{n.forEach((f,h)=>{const v=h.getKey();i.get(v)===null&&(i=i.insert(v,r2.newInvalidDocument(v)))});let o=N6();return i.forEach((f,h)=>{const v=n.get(f);v!==void 0&&O6(v.mutation,h,x3.empty(),z2.now()),S5(a,h)&&(o=o.insert(f,h))}),o})}}/**
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
 */class Wx{constructor(c){this.serializer=c,this.cr=new Map,this.lr=new Map}getBundleMetadata(c,a){return x.resolve(this.cr.get(a))}saveBundleMetadata(c,a){return this.cr.set(a.id,function(r){return{id:r.id,version:r.version,createTime:j4(r.createTime)}}(a)),x.resolve()}getNamedQuery(c,a){return x.resolve(this.lr.get(a))}saveNamedQuery(c,a){return this.lr.set(a.name,function(r){return{name:r.name,query:Ox(r.bundledQuery),readTime:j4(r.readTime)}}(a)),x.resolve()}}/**
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
 */class Kx{constructor(){this.overlays=new E1(J.comparator),this.hr=new Map}getOverlay(c,a){return x.resolve(this.overlays.get(a))}getOverlays(c,a){const t=i4();return x.forEach(a,r=>this.getOverlay(c,r).next(n=>{n!==null&&t.set(r,n)})).next(()=>t)}saveOverlays(c,a,t){return t.forEach((r,n)=>{this.ht(c,a,n)}),x.resolve()}removeOverlaysForBatchId(c,a,t){const r=this.hr.get(t);return r!==void 0&&(r.forEach(n=>this.overlays=this.overlays.remove(n)),this.hr.delete(t)),x.resolve()}getOverlaysForCollection(c,a,t){const r=i4(),n=a.length+1,i=new J(a.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const f=o.getNext().value,h=f.getKey();if(!a.isPrefixOf(h.path))break;h.path.length===n&&f.largestBatchId>t&&r.set(f.getKey(),f)}return x.resolve(r)}getOverlaysForCollectionGroup(c,a,t,r){let n=new E1((h,v)=>h-v);const i=this.overlays.getIterator();for(;i.hasNext();){const h=i.getNext().value;if(h.getKey().getCollectionGroup()===a&&h.largestBatchId>t){let v=n.get(h.largestBatchId);v===null&&(v=i4(),n=n.insert(h.largestBatchId,v)),v.set(h.getKey(),h)}}const o=i4(),f=n.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((h,v)=>o.set(h,v)),!(o.size()>=r)););return x.resolve(o)}ht(c,a,t){const r=this.overlays.get(t.key);if(r!==null){const i=this.hr.get(r.largestBatchId).delete(t.key);this.hr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(t.key,new gx(a,t));let n=this.hr.get(a);n===void 0&&(n=m1(),this.hr.set(a,n)),this.hr.set(a,n.add(t.key))}}/**
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
 */class Jc{constructor(){this.Pr=new X1(U1.Ir),this.Tr=new X1(U1.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(c,a){const t=new U1(c,a);this.Pr=this.Pr.add(t),this.Tr=this.Tr.add(t)}dr(c,a){c.forEach(t=>this.addReference(t,a))}removeReference(c,a){this.Ar(new U1(c,a))}Rr(c,a){c.forEach(t=>this.removeReference(t,a))}Vr(c){const a=new J(new A1([])),t=new U1(a,c),r=new U1(a,c+1),n=[];return this.Tr.forEachInRange([t,r],i=>{this.Ar(i),n.push(i.key)}),n}mr(){this.Pr.forEach(c=>this.Ar(c))}Ar(c){this.Pr=this.Pr.delete(c),this.Tr=this.Tr.delete(c)}gr(c){const a=new J(new A1([])),t=new U1(a,c),r=new U1(a,c+1);let n=m1();return this.Tr.forEachInRange([t,r],i=>{n=n.add(i.key)}),n}containsKey(c){const a=new U1(c,0),t=this.Pr.firstAfterOrEqual(a);return t!==null&&c.isEqual(t.key)}}class U1{constructor(c,a){this.key=c,this.pr=a}static Ir(c,a){return J.comparator(c.key,a.key)||p1(c.pr,a.pr)}static Er(c,a){return p1(c.pr,a.pr)||J.comparator(c.key,a.key)}}/**
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
 */class Zx{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.yr=1,this.wr=new X1(U1.Ir)}checkEmpty(c){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,t,r){const n=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Hx(n,a,t,r);this.mutationQueue.push(i);for(const o of r)this.wr=this.wr.add(new U1(o.key,n)),this.indexManager.addToCollectionParentIndex(c,o.key.path.popLast());return x.resolve(i)}lookupMutationBatch(c,a){return x.resolve(this.Sr(a))}getNextMutationBatchAfterBatchId(c,a){const t=a+1,r=this.br(t),n=r<0?0:r;return x.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(c){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const t=new U1(a,0),r=new U1(a,Number.POSITIVE_INFINITY),n=[];return this.wr.forEachInRange([t,r],i=>{const o=this.Sr(i.pr);n.push(o)}),x.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(c,a){let t=new X1(p1);return a.forEach(r=>{const n=new U1(r,0),i=new U1(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([n,i],o=>{t=t.add(o.pr)})}),x.resolve(this.Dr(t))}getAllMutationBatchesAffectingQuery(c,a){const t=a.path,r=t.length+1;let n=t;J.isDocumentKey(n)||(n=n.child(""));const i=new U1(new J(n),0);let o=new X1(p1);return this.wr.forEachWhile(f=>{const h=f.key.path;return!!t.isPrefixOf(h)&&(h.length===r&&(o=o.add(f.pr)),!0)},i),x.resolve(this.Dr(o))}Dr(c){const a=[];return c.forEach(t=>{const r=this.Sr(t);r!==null&&a.push(r)}),a}removeMutationBatch(c,a){R1(this.Cr(a.batchId,"removed")===0),this.mutationQueue.shift();let t=this.wr;return x.forEach(a.mutations,r=>{const n=new U1(r.key,a.batchId);return t=t.delete(n),this.referenceDelegate.markPotentiallyOrphaned(c,r.key)}).next(()=>{this.wr=t})}Mn(c){}containsKey(c,a){const t=new U1(a,0),r=this.wr.firstAfterOrEqual(t);return x.resolve(a.isEqual(r&&r.key))}performConsistencyCheck(c){return this.mutationQueue.length,x.resolve()}Cr(c,a){return this.br(c)}br(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}Sr(c){const a=this.br(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
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
 */class Qx{constructor(c){this.vr=c,this.docs=function(){return new E1(J.comparator)}(),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const t=a.key,r=this.docs.get(t),n=r?r.size:0,i=this.vr(a);return this.docs=this.docs.insert(t,{document:a.mutableCopy(),size:i}),this.size+=i-n,this.indexManager.addToCollectionParentIndex(c,t.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const t=this.docs.get(a);return x.resolve(t?t.document.mutableCopy():r2.newInvalidDocument(a))}getEntries(c,a){let t=R3();return a.forEach(r=>{const n=this.docs.get(r);t=t.insert(r,n?n.document.mutableCopy():r2.newInvalidDocument(r))}),x.resolve(t)}getDocumentsMatchingQuery(c,a,t,r){let n=R3();const i=a.path,o=new J(i.child("")),f=this.docs.getIteratorFrom(o);for(;f.hasNext();){const{key:h,value:{document:v}}=f.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||Py(Ey(v),t)<=0||(r.has(v.key)||S5(a,v))&&(n=n.insert(v.key,v.mutableCopy()))}return x.resolve(n)}getAllFromCollectionGroup(c,a,t,r){n1()}Fr(c,a){return x.forEach(this.docs,t=>a(t))}newChangeBuffer(c){return new Yx(this)}getSize(c){return x.resolve(this.size)}}class Yx extends $x{constructor(c){super(),this.ar=c}applyChanges(c){const a=[];return this.changes.forEach((t,r)=>{r.isValidDocument()?a.push(this.ar.addEntry(c,r)):this.ar.removeEntry(t)}),x.waitFor(a)}getFromCache(c,a){return this.ar.getEntry(c,a)}getAllFromCache(c,a){return this.ar.getEntries(c,a)}}/**
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
 */class Xx{constructor(c){this.persistence=c,this.Mr=new h6(a=>Kc(a),Zc),this.lastRemoteSnapshotVersion=e1.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Jc,this.targetCount=0,this.Lr=t6.Nn()}forEachTarget(c,a){return this.Mr.forEach((t,r)=>a(r)),x.resolve()}getLastRemoteSnapshotVersion(c){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return x.resolve(this.Or)}allocateTargetId(c){return this.highestTargetId=this.Lr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(c,a,t){return t&&(this.lastRemoteSnapshotVersion=t),a>this.Or&&(this.Or=a),x.resolve()}qn(c){this.Mr.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.Lr=new t6(a),this.highestTargetId=a),c.sequenceNumber>this.Or&&(this.Or=c.sequenceNumber)}addTargetData(c,a){return this.qn(a),this.targetCount+=1,x.resolve()}updateTargetData(c,a){return this.qn(a),x.resolve()}removeTargetData(c,a){return this.Mr.delete(a.target),this.Nr.Vr(a.targetId),this.targetCount-=1,x.resolve()}removeTargets(c,a,t){let r=0;const n=[];return this.Mr.forEach((i,o)=>{o.sequenceNumber<=a&&t.get(o.targetId)===null&&(this.Mr.delete(i),n.push(this.removeMatchingKeysForTargetId(c,o.targetId)),r++)}),x.waitFor(n).next(()=>r)}getTargetCount(c){return x.resolve(this.targetCount)}getTargetData(c,a){const t=this.Mr.get(a)||null;return x.resolve(t)}addMatchingKeys(c,a,t){return this.Nr.dr(a,t),x.resolve()}removeMatchingKeys(c,a,t){this.Nr.Rr(a,t);const r=this.persistence.referenceDelegate,n=[];return r&&a.forEach(i=>{n.push(r.markPotentiallyOrphaned(c,i))}),x.waitFor(n)}removeMatchingKeysForTargetId(c,a){return this.Nr.Vr(a),x.resolve()}getMatchingKeysForTargetId(c,a){const t=this.Nr.gr(a);return x.resolve(t)}containsKey(c,a){return x.resolve(this.Nr.containsKey(a))}}/**
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
 */class Jx{constructor(c,a){this.Br={},this.overlays={},this.kr=new $c(0),this.qr=!1,this.qr=!0,this.referenceDelegate=c(this),this.Qr=new Xx(this),this.indexManager=new qx,this.remoteDocumentCache=function(r){return new Qx(r)}(t=>this.referenceDelegate.Kr(t)),this.serializer=new Bx(a),this.$r=new Wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new Kx,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let t=this.Br[c.toKey()];return t||(t=new Zx(a,this.referenceDelegate),this.Br[c.toKey()]=t),t}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(c,a,t){D("MemoryPersistence","Starting transaction:",c);const r=new cS(this.kr.next());return this.referenceDelegate.Ur(),t(r).next(n=>this.referenceDelegate.Wr(r).next(()=>n)).toPromise().then(n=>(r.raiseOnCommittedEvent(),n))}Gr(c,a){return x.or(Object.values(this.Br).map(t=>()=>t.containsKey(c,a)))}}class cS extends Ry{constructor(c){super(),this.currentSequenceNumber=c}}class ce{constructor(c){this.persistence=c,this.zr=new Jc,this.jr=null}static Hr(c){return new ce(c)}get Jr(){if(this.jr)return this.jr;throw n1()}addReference(c,a,t){return this.zr.addReference(t,a),this.Jr.delete(t.toString()),x.resolve()}removeReference(c,a,t){return this.zr.removeReference(t,a),this.Jr.add(t.toString()),x.resolve()}markPotentiallyOrphaned(c,a){return this.Jr.add(a.toString()),x.resolve()}removeTarget(c,a){this.zr.Vr(a.targetId).forEach(r=>this.Jr.add(r.toString()));const t=this.persistence.getTargetCache();return t.getMatchingKeysForTargetId(c,a.targetId).next(r=>{r.forEach(n=>this.Jr.add(n.toString()))}).next(()=>t.removeTargetData(c,a))}Ur(){this.jr=new Set}Wr(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Jr,t=>{const r=J.fromPath(t);return this.Yr(c,r).next(n=>{n||a.removeEntry(r,e1.min())})}).next(()=>(this.jr=null,a.apply(c)))}updateLimboDocument(c,a){return this.Yr(c,a).next(t=>{t?this.Jr.delete(a.toString()):this.Jr.add(a.toString())})}Kr(c){return 0}Yr(c,a){return x.or([()=>x.resolve(this.zr.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Gr(c,a)])}}/**
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
 */class ee{constructor(c,a,t,r){this.targetId=c,this.fromCache=a,this.qi=t,this.Qi=r}static Ki(c,a){let t=m1(),r=m1();for(const n of a.docChanges)switch(n.type){case 0:t=t.add(n.doc.key);break;case 1:r=r.add(n.doc.key)}return new ee(c,a.fromCache,t,r)}}/**
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
 */class eS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(c){this._documentReadCount+=c}}/**
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
 */class aS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ew()?8:n4.v(k8())>0?6:4}()}initialize(c,a){this.zi=c,this.indexManager=a,this.$i=!0}getDocumentsMatchingQuery(c,a,t,r){const n={result:null};return this.ji(c,a).next(i=>{n.result=i}).next(()=>{if(!n.result)return this.Hi(c,a,r,t).next(i=>{n.result=i})}).next(()=>{if(n.result)return;const i=new eS;return this.Ji(c,a,i).next(o=>{if(n.result=o,this.Ui)return this.Yi(c,a,i,o.size)})}).next(()=>n.result)}Yi(c,a,t,r){return t.documentReadCount<this.Wi?(b6()<=u1.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",T4(a),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),x.resolve()):(b6()<=u1.DEBUG&&D("QueryEngine","Query:",T4(a),"scans",t.documentReadCount,"local documents and returns",r,"documents as results."),t.documentReadCount>this.Gi*r?(b6()<=u1.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",T4(a),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(c,X2(a))):x.resolve())}ji(c,a){if(Ar(a))return x.resolve(null);let t=X2(a);return this.indexManager.getIndexType(c,t).next(r=>r===0?null:(a.limit!==null&&r===1&&(a=S9(a,null,"F"),t=X2(a)),this.indexManager.getDocumentsMatchingTarget(c,t).next(n=>{const i=m1(...n);return this.zi.getDocuments(c,i).next(o=>this.indexManager.getMinOffset(c,t).next(f=>{const h=this.Zi(a,o);return this.Xi(a,h,i,f.readTime)?this.ji(c,S9(a,null,"F")):this.es(c,h,a,f)}))})))}Hi(c,a,t,r){return Ar(a)||r.isEqual(e1.min())?x.resolve(null):this.zi.getDocuments(c,t).next(n=>{const i=this.Zi(a,n);return this.Xi(a,i,t,r)?x.resolve(null):(b6()<=u1.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),T4(a)),this.es(c,i,a,Ty(r,-1)).next(o=>o))})}Zi(c,a){let t=new X1(Zs(c));return a.forEach((r,n)=>{S5(c,n)&&(t=t.add(n))}),t}Xi(c,a,t,r){if(c.limit===null)return!1;if(t.size!==a.size)return!0;const n=c.limitType==="F"?a.last():a.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(r)>0)}Ji(c,a,t){return b6()<=u1.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",T4(a)),this.zi.getDocumentsMatchingQuery(c,a,P3.min(),t)}es(c,a,t,r){return this.zi.getDocumentsMatchingQuery(c,t,r).next(n=>(a.forEach(i=>{n=n.insert(i.key,i)}),n))}}/**
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
 */class tS{constructor(c,a,t,r){this.persistence=c,this.ts=a,this.serializer=r,this.ns=new E1(p1),this.rs=new h6(n=>Kc(n),Zc),this.ss=new Map,this.os=c.getRemoteDocumentCache(),this.Qr=c.getTargetCache(),this.$r=c.getBundleCache(),this._s(t)}_s(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new jx(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.ns))}}function rS(e,c,a,t){return new tS(e,c,a,t)}async function uo(e,c){const a=v1(e);return await a.persistence.runTransaction("Handle user change","readonly",t=>{let r;return a.mutationQueue.getAllMutationBatches(t).next(n=>(r=n,a._s(c),a.mutationQueue.getAllMutationBatches(t))).next(n=>{const i=[],o=[];let f=m1();for(const h of r){i.push(h.batchId);for(const v of h.mutations)f=f.add(v.key)}for(const h of n){o.push(h.batchId);for(const v of h.mutations)f=f.add(v.key)}return a.localDocuments.getDocuments(t,f).next(h=>({us:h,removedBatchIds:i,addedBatchIds:o}))})})}function mo(e){const c=v1(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Qr.getLastRemoteSnapshotVersion(a))}function nS(e,c){const a=v1(e),t=c.snapshotVersion;let r=a.ns;return a.persistence.runTransaction("Apply remote event","readwrite-primary",n=>{const i=a.os.newChangeBuffer({trackRemovals:!0});r=a.ns;const o=[];c.targetChanges.forEach((v,d)=>{const H=r.get(d);if(!H)return;o.push(a.Qr.removeMatchingKeys(n,v.removedDocuments,d).next(()=>a.Qr.addMatchingKeys(n,v.addedDocuments,d)));let V=H.withSequenceNumber(n.currentSequenceNumber);c.targetMismatches.get(d)!==null?V=V.withResumeToken(o2.EMPTY_BYTE_STRING,e1.min()).withLastLimboFreeSnapshotVersion(e1.min()):v.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(v.resumeToken,t)),r=r.insert(d,V),function(P,I,N){return P.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(H,V,v)&&o.push(a.Qr.updateTargetData(n,V))});let f=R3(),h=m1();if(c.documentUpdates.forEach(v=>{c.resolvedLimboDocuments.has(v)&&o.push(a.persistence.referenceDelegate.updateLimboDocument(n,v))}),o.push(iS(n,i,c.documentUpdates).next(v=>{f=v.cs,h=v.ls})),!t.isEqual(e1.min())){const v=a.Qr.getLastRemoteSnapshotVersion(n).next(d=>a.Qr.setTargetsMetadata(n,n.currentSequenceNumber,t));o.push(v)}return x.waitFor(o).next(()=>i.apply(n)).next(()=>a.localDocuments.getLocalViewOfDocuments(n,f,h)).next(()=>f)}).then(n=>(a.ns=r,n))}function iS(e,c,a){let t=m1(),r=m1();return a.forEach(n=>t=t.add(n)),c.getEntries(e,t).next(n=>{let i=R3();return a.forEach((o,f)=>{const h=n.get(o);f.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(o)),f.isNoDocument()&&f.version.isEqual(e1.min())?(c.removeEntry(o,f.readTime),i=i.insert(o,f)):!h.isValidDocument()||f.version.compareTo(h.version)>0||f.version.compareTo(h.version)===0&&h.hasPendingWrites?(c.addEntry(f),i=i.insert(o,f)):D("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",f.version)}),{cs:i,ls:r}})}function sS(e,c){const a=v1(e);return a.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return a.Qr.getTargetData(t,c).next(n=>n?(r=n,x.resolve(r)):a.Qr.allocateTargetId(t).next(i=>(r=new S3(c,i,"TargetPurposeListen",t.currentSequenceNumber),a.Qr.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=a.ns.get(t.targetId);return(r===null||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(a.ns=a.ns.insert(t.targetId,t),a.rs.set(c,t.targetId)),t})}async function T9(e,c,a){const t=v1(e),r=t.ns.get(c),n=a?"readwrite":"readwrite-primary";try{a||await t.persistence.runTransaction("Release target",n,i=>t.persistence.referenceDelegate.removeTarget(i,r))}catch(i){if(!w0(i))throw i;D("LocalStore",`Failed to update sequence numbers for target ${c}: ${i}`)}t.ns=t.ns.remove(c),t.rs.delete(r.target)}function Or(e,c,a){const t=v1(e);let r=e1.min(),n=m1();return t.persistence.runTransaction("Execute query","readwrite",i=>function(f,h,v){const d=v1(f),H=d.rs.get(v);return H!==void 0?x.resolve(d.ns.get(H)):d.Qr.getTargetData(h,v)}(t,i,X2(c)).next(o=>{if(o)return r=o.lastLimboFreeSnapshotVersion,t.Qr.getMatchingKeysForTargetId(i,o.targetId).next(f=>{n=f})}).next(()=>t.ts.getDocumentsMatchingQuery(i,c,a?r:e1.min(),a?n:m1())).next(o=>(oS(t,tx(c),o),{documents:o,hs:n})))}function oS(e,c,a){let t=e.ss.get(c)||e1.min();a.forEach((r,n)=>{n.readTime.compareTo(t)>0&&(t=n.readTime)}),e.ss.set(c,t)}class qr{constructor(){this.activeTargetIds=lx()}As(c){this.activeTargetIds=this.activeTargetIds.add(c)}Rs(c){this.activeTargetIds=this.activeTargetIds.delete(c)}ds(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class lS{constructor(){this.no=new qr,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,t){}addLocalQueryTarget(c){return this.no.As(c),this.ro[c]||"not-current"}updateQueryState(c,a,t){this.ro[c]=a}removeLocalQueryTarget(c){this.no.Rs(c)}isLocalQueryTarget(c){return this.no.activeTargetIds.has(c)}clearQueryState(c){delete this.ro[c]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(c){return this.no.activeTargetIds.has(c)}start(){return this.no=new qr,Promise.resolve()}handleUserChange(c,a,t){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
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
 */class fS{io(c){}shutdown(){}}/**
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
 */class Ur{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(c){this.uo.push(c)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.uo)c(0)}ao(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.uo)c(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let r8=null;function D7(){return r8===null?r8=function(){return 268435456+Math.round(2147483648*Math.random())}():r8++,"0x"+r8.toString(16)}/**
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
 */const hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class uS{constructor(c){this.lo=c.lo,this.ho=c.ho}Po(c){this.Io=c}To(c){this.Eo=c}onMessage(c){this.Ao=c}close(){this.ho()}send(c){this.lo(c)}Ro(){this.Io()}Vo(c){this.Eo(c)}mo(c){this.Ao(c)}}/**
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
 */const a2="WebChannelConnection";class mS extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;const t=a.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+a.host,this.po=`projects/${r}/databases/${n}`,this.yo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get wo(){return!1}So(a,t,r,n,i){const o=D7(),f=this.bo(a,t.toUriEncodedString());D("RestConnection",`Sending RPC '${a}' ${o}:`,f,r);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,n,i),this.Co(a,f,h,r).then(v=>(D("RestConnection",`Received RPC '${a}' ${o}: `,v),v),v=>{throw J4("RestConnection",`RPC '${a}' ${o} failed with error: `,v,"url: ",f,"request:",r),v})}vo(a,t,r,n,i,o){return this.So(a,t,r,n,i)}Do(a,t,r){a["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+f6}(),a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,i)=>a[i]=n),r&&r.headers.forEach((n,i)=>a[i]=n)}bo(a,t){const r=hS[a];return`${this.fo}/v1/${t}:${r}`}terminate(){}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams,this.longPollingOptions=c.longPollingOptions}Co(c,a,t,r){const n=D7();return new Promise((i,o)=>{const f=new Cy;f.setWithCredentials(!0),f.listenOnce(gy.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case P7.NO_ERROR:const v=f.getResponseJson();D(a2,`XHR for RPC '${c}' ${n} received:`,JSON.stringify(v)),i(v);break;case P7.TIMEOUT:D(a2,`RPC '${c}' ${n} timed out`),o(new K(T.DEADLINE_EXCEEDED,"Request time out"));break;case P7.HTTP_ERROR:const d=f.getStatus();if(D(a2,`RPC '${c}' ${n} failed with status:`,d,"response text:",f.getResponseText()),d>0){let H=f.getResponseJson();Array.isArray(H)&&(H=H[0]);const V=H?.error;if(V&&V.status&&V.message){const F=function(I){const N=I.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(N)>=0?N:T.UNKNOWN}(V.status);o(new K(F,V.message))}else o(new K(T.UNKNOWN,"Server responded with status "+f.getStatus()))}else o(new K(T.UNAVAILABLE,"Connection failed."));break;default:n1()}}finally{D(a2,`RPC '${c}' ${n} completed.`)}});const h=JSON.stringify(r);D(a2,`RPC '${c}' ${n} sending request:`,r),f.send(a,"POST",h,t,15)})}Fo(c,a,t){const r=D7(),n=[this.fo,"/","google.firestore.v1.Firestore","/",c,"/channel"],i=zy(),o=Hy(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(f.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,a,t),f.encodeInitMessageHeaders=!0;const v=n.join("");D(a2,`Creating RPC '${c}' stream ${r}: ${v}`,f);const d=i.createWebChannel(v,f);let H=!1,V=!1;const F=new uS({lo:I=>{V?D(a2,`Not sending because RPC '${c}' stream ${r} is closed:`,I):(H||(D(a2,`Opening RPC '${c}' stream ${r} transport.`),d.open(),H=!0),D(a2,`RPC '${c}' stream ${r} sending:`,I),d.send(I))},ho:()=>d.close()}),P=(I,N,E)=>{I.listen(N,U=>{try{E(U)}catch(Z){setTimeout(()=>{throw Z},0)}})};return P(d,e8.EventType.OPEN,()=>{V||D(a2,`RPC '${c}' stream ${r} transport opened.`)}),P(d,e8.EventType.CLOSE,()=>{V||(V=!0,D(a2,`RPC '${c}' stream ${r} transport closed`),F.Vo())}),P(d,e8.EventType.ERROR,I=>{V||(V=!0,J4(a2,`RPC '${c}' stream ${r} transport errored:`,I),F.Vo(new K(T.UNAVAILABLE,"The operation could not be completed")))}),P(d,e8.EventType.MESSAGE,I=>{var N;if(!V){const E=I.data[0];R1(!!E);const U=E,Z=U.error||((N=U[0])===null||N===void 0?void 0:N.error);if(Z){D(a2,`RPC '${c}' stream ${r} received error:`,Z);const a1=Z.status;let Q=function(c2){const v2=P1[c2];if(v2!==void 0)return to(v2)}(a1),g1=Z.message;Q===void 0&&(Q=T.INTERNAL,g1="Unknown error status: "+a1+" with message "+Z.message),V=!0,F.Vo(new K(Q,g1)),d.close()}else D(a2,`RPC '${c}' stream ${r} received:`,E),F.mo(E)}}),P(o,Vy.STAT_EVENT,I=>{I.stat===gr.PROXY?D(a2,`RPC '${c}' stream ${r} detected buffering proxy`):I.stat===gr.NOPROXY&&D(a2,`RPC '${c}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{F.Ro()},0),F}}function F7(){return typeof document<"u"?document:null}/**
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
 */function vo(e){return new xx(e,!0)}/**
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
 */class po{constructor(c,a,t=1e3,r=1.5,n=6e4){this.oi=c,this.timerId=a,this.Mo=t,this.xo=r,this.Oo=n,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(c){this.cancel();const a=Math.floor(this.No+this.Qo()),t=Math.max(0,Date.now()-this.Bo),r=Math.max(0,a-t);r>0&&D("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${a} ms, last attempt: ${t} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),c())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class vS{constructor(c,a,t,r,n,i,o,f){this.oi=c,this.$o=t,this.Uo=r,this.connection=n,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=f,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new po(c,a)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(c){this.n_(),this.stream.send(c)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(c,a){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,c!==4?this.jo.reset():a&&a.code===T.RESOURCE_EXHAUSTED?(J2(a.toString()),J2("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):a&&a.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=c,await this.listener.To(a)}i_(){}auth(){this.state=1;const c=this.s_(this.Wo),a=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,r])=>{this.Wo===a&&this.o_(t,r)},t=>{c(()=>{const r=new K(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(r)})})}o_(c,a){const t=this.s_(this.Wo);this.stream=this.a_(c,a),this.stream.Po(()=>{t(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(r=>{t(()=>this.__(r))}),this.stream.onMessage(r=>{t(()=>this.onMessage(r))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(c){return D("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}s_(c){return a=>{this.oi.enqueueAndForget(()=>this.Wo===c?a():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dS extends vS{constructor(c,a,t,r,n,i){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,t,r,i),this.serializer=n}a_(c,a){return this.connection.Fo("Listen",c,a)}onMessage(c){this.jo.reset();const a=kx(this.serializer,c),t=function(n){if(!("targetChange"in n))return e1.min();const i=n.targetChange;return i.targetIds&&i.targetIds.length?e1.min():i.readTime?j4(i.readTime):e1.min()}(c);return this.listener.u_(a,t)}c_(c){const a={};a.database=Br(this.serializer),a.addTarget=function(n,i){let o;const f=i.target;if(o=x9(f)?{documents:Tx(n,f)}:{query:Ex(n,f).ut},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Nx(n,i.resumeToken);const h=_9(n,i.expectedCount);h!==null&&(o.expectedCount=h)}else if(i.snapshotVersion.compareTo(e1.min())>0){o.readTime=Sx(n,i.snapshotVersion.toTimestamp());const h=_9(n,i.expectedCount);h!==null&&(o.expectedCount=h)}return o}(this.serializer,c);const t=Ix(this.serializer,c);t&&(a.labels=t),this.t_(a)}l_(c){const a={};a.database=Br(this.serializer),a.removeTarget=c,this.t_(a)}}/**
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
 */class pS extends class{}{constructor(c,a,t,r){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=t,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new K(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(c,a,t,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.So(c,k9(a,t),r,n,i)).catch(n=>{throw n.name==="FirebaseError"?(n.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new K(T.UNKNOWN,n.toString())})}vo(c,a,t,r,n){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(c,k9(a,t),r,i,o,n)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(T.UNKNOWN,i.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class zS{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(c){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.y_("Offline")))}set(c){this.b_(),this.m_=0,c==="Online"&&(this.g_=!1),this.y_(c)}y_(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}w_(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(J2(a),this.g_=!1):D("OnlineStateTracker",a)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class HS{constructor(c,a,t,r,n){this.localStore=c,this.datastore=a,this.asyncQueue=t,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=n,this.M_.io(i=>{t.enqueueAndForget(async()=>{x0(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const h=v1(f);h.v_.add(4),await y0(h),h.x_.set("Unknown"),h.v_.delete(4),await k5(h)}(this))})}),this.x_=new zS(t,r)}}async function k5(e){if(x0(e))for(const c of e.F_)await c(!0)}async function y0(e){for(const c of e.F_)await c(!1)}function zo(e,c){const a=v1(e);a.C_.has(c.targetId)||(a.C_.set(c.targetId,c),ne(a)?re(a):u6(a).Jo()&&te(a,c))}function ae(e,c){const a=v1(e),t=u6(a);a.C_.delete(c),t.Jo()&&Ho(a,c),a.C_.size===0&&(t.Jo()?t.Xo():x0(a)&&a.x_.set("Unknown"))}function te(e,c){if(e.O_.Oe(c.targetId),c.resumeToken.approximateByteSize()>0||c.snapshotVersion.compareTo(e1.min())>0){const a=e.remoteSyncer.getRemoteKeysForTarget(c.targetId).size;c=c.withExpectedCount(a)}u6(e).c_(c)}function Ho(e,c){e.O_.Oe(c),u6(e).l_(c)}function re(e){e.O_=new Lx({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),_t:c=>e.C_.get(c)||null,nt:()=>e.datastore.serializer.databaseId}),u6(e).start(),e.x_.p_()}function ne(e){return x0(e)&&!u6(e).Ho()&&e.C_.size>0}function x0(e){return v1(e).v_.size===0}function go(e){e.O_=void 0}async function gS(e){e.C_.forEach((c,a)=>{te(e,c)})}async function VS(e,c){go(e),ne(e)?(e.x_.S_(c),re(e)):e.x_.set("Unknown")}async function CS(e,c,a){if(e.x_.set("Online"),c instanceof no&&c.state===2&&c.cause)try{await async function(r,n){const i=n.cause;for(const o of n.targetIds)r.C_.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.C_.delete(o),r.O_.removeTarget(o))}(e,c)}catch(t){D("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),t),await $r(e,t)}else if(c instanceof M8?e.O_.$e(c):c instanceof ro?e.O_.Je(c):e.O_.Ge(c),!a.isEqual(e1.min()))try{const t=await mo(e.localStore);a.compareTo(t)>=0&&await function(n,i){const o=n.O_.it(i);return o.targetChanges.forEach((f,h)=>{if(f.resumeToken.approximateByteSize()>0){const v=n.C_.get(h);v&&n.C_.set(h,v.withResumeToken(f.resumeToken,i))}}),o.targetMismatches.forEach((f,h)=>{const v=n.C_.get(f);if(!v)return;n.C_.set(f,v.withResumeToken(o2.EMPTY_BYTE_STRING,v.snapshotVersion)),Ho(n,f);const d=new S3(v.target,f,h,v.sequenceNumber);te(n,d)}),n.remoteSyncer.applyRemoteEvent(o)}(e,a)}catch(t){D("RemoteStore","Failed to raise snapshot:",t),await $r(e,t)}}async function $r(e,c,a){if(!w0(c))throw c;e.v_.add(1),await y0(e),e.x_.set("Offline"),a||(a=()=>mo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await a(),e.v_.delete(1),await k5(e)})}async function Gr(e,c){const a=v1(e);a.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const t=x0(a);a.v_.add(3),await y0(a),t&&a.x_.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a.v_.delete(3),await k5(a)}async function MS(e,c){const a=v1(e);c?(a.v_.delete(2),await k5(a)):c||(a.v_.add(2),await y0(a),a.x_.set("Unknown"))}function u6(e){return e.N_||(e.N_=function(a,t,r){const n=v1(a);return n.R_(),new dS(t,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,r)}(e.datastore,e.asyncQueue,{Po:gS.bind(null,e),To:VS.bind(null,e),u_:CS.bind(null,e)}),e.F_.push(async c=>{c?(e.N_.Zo(),ne(e)?re(e):e.x_.set("Unknown")):(await e.N_.stop(),go(e))})),e.N_}/**
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
 */class ie{constructor(c,a,t,r,n){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=t,this.op=r,this.removalCallback=n,this.deferred=new T3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(c,a,t,r,n){const i=Date.now()+t,o=new ie(c,a,i,r,n);return o.start(t),o}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(T.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vo(e,c){if(J2("AsyncQueue",`${c}: ${e}`),w0(e))return new K(T.UNAVAILABLE,`${c}: ${e}`);throw e}/**
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
 */class W4{constructor(c){this.comparator=c?(a,t)=>c(a,t)||J.comparator(a.key,t.key):(a,t)=>J.comparator(a.key,t.key),this.keyedMap=N6(),this.sortedSet=new E1(this.comparator)}static emptySet(c){return new W4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,t)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof W4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),t=c.sortedSet.getIterator();for(;a.hasNext();){const r=a.getNext().key,n=t.getNext().key;if(!r.isEqual(n))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const t=new W4;return t.comparator=this.comparator,t.keyedMap=c,t.sortedSet=a,t}}/**
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
 */class jr{constructor(){this.B_=new E1(J.comparator)}track(c){const a=c.doc.key,t=this.B_.get(a);t?c.type!==0&&t.type===3?this.B_=this.B_.insert(a,c):c.type===3&&t.type!==1?this.B_=this.B_.insert(a,{type:t.type,doc:c.doc}):c.type===2&&t.type===2?this.B_=this.B_.insert(a,{type:2,doc:c.doc}):c.type===2&&t.type===0?this.B_=this.B_.insert(a,{type:0,doc:c.doc}):c.type===1&&t.type===0?this.B_=this.B_.remove(a):c.type===1&&t.type===2?this.B_=this.B_.insert(a,{type:1,doc:t.doc}):c.type===0&&t.type===1?this.B_=this.B_.insert(a,{type:2,doc:c.doc}):n1():this.B_=this.B_.insert(a,c)}k_(){const c=[];return this.B_.inorderTraversal((a,t)=>{c.push(t)}),c}}class r6{constructor(c,a,t,r,n,i,o,f,h){this.query=c,this.docs=a,this.oldDocs=t,this.docChanges=r,this.mutatedKeys=n,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=f,this.hasCachedResults=h}static fromInitialDocuments(c,a,t,r,n){const i=[];return a.forEach(o=>{i.push({type:0,doc:o})}),new r6(c,a,W4.emptySet(a),i,t,r,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&x5(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,t=c.docChanges;if(a.length!==t.length)return!1;for(let r=0;r<a.length;r++)if(a[r].type!==t[r].type||!a[r].doc.isEqual(t[r].doc))return!1;return!0}}/**
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
 */class LS{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(c=>c.U_())}}class wS{constructor(){this.queries=new h6(c=>Ks(c),x5),this.onlineState="Unknown",this.W_=new Set}}async function bS(e,c){const a=v1(e);let t=3;const r=c.query;let n=a.queries.get(r);n?!n.K_()&&c.U_()&&(t=2):(n=new LS,t=c.U_()?0:1);try{switch(t){case 0:n.q_=await a.onListen(r,!0);break;case 1:n.q_=await a.onListen(r,!1);break;case 2:await a.onFirstRemoteStoreListen(r)}}catch(i){const o=Vo(i,`Initialization of query '${T4(c.query)}' failed`);return void c.onError(o)}a.queries.set(r,n),n.Q_.push(c),c.G_(a.onlineState),n.q_&&c.z_(n.q_)&&se(a)}async function yS(e,c){const a=v1(e),t=c.query;let r=3;const n=a.queries.get(t);if(n){const i=n.Q_.indexOf(c);i>=0&&(n.Q_.splice(i,1),n.Q_.length===0?r=c.U_()?0:1:!n.K_()&&c.U_()&&(r=2))}switch(r){case 0:return a.queries.delete(t),a.onUnlisten(t,!0);case 1:return a.queries.delete(t),a.onUnlisten(t,!1);case 2:return a.onLastRemoteStoreUnlisten(t);default:return}}function xS(e,c){const a=v1(e);let t=!1;for(const r of c){const n=r.query,i=a.queries.get(n);if(i){for(const o of i.Q_)o.z_(r)&&(t=!0);i.q_=r}}t&&se(a)}function SS(e,c,a){const t=v1(e),r=t.queries.get(c);if(r)for(const n of r.Q_)n.onError(a);t.queries.delete(c)}function se(e){e.W_.forEach(c=>{c.next()})}var E9,Wr;(Wr=E9||(E9={})).j_="default",Wr.Cache="cache";class NS{constructor(c,a,t){this.query=c,this.H_=a,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=t||{}}z_(c){if(!this.options.includeMetadataChanges){const t=[];for(const r of c.docChanges)r.type!==3&&t.push(r);c=new r6(c.query,c.docs,c.oldDocs,t,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.J_?this.Z_(c)&&(this.H_.next(c),a=!0):this.X_(c,this.onlineState)&&(this.ea(c),a=!0),this.Y_=c,a}onError(c){this.H_.error(c)}G_(c){this.onlineState=c;let a=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,c)&&(this.ea(this.Y_),a=!0),a}X_(c,a){if(!c.fromCache||!this.U_())return!0;const t=a!=="Offline";return(!this.options.ta||!t)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Z_(c){if(c.docChanges.length>0)return!0;const a=this.Y_&&this.Y_.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}ea(c){c=r6.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.J_=!0,this.H_.next(c)}U_(){return this.options.source!==E9.Cache}}/**
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
 */class Co{constructor(c){this.key=c}}class Mo{constructor(c){this.key=c}}class AS{constructor(c,a){this.query=c,this.ua=a,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=m1(),this.mutatedKeys=m1(),this.ha=Zs(c),this.Pa=new W4(this.ha)}get Ia(){return this.ua}Ta(c,a){const t=a?a.Ea:new jr,r=a?a.Pa:this.Pa;let n=a?a.mutatedKeys:this.mutatedKeys,i=r,o=!1;const f=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(c.inorderTraversal((v,d)=>{const H=r.get(v),V=S5(this.query,d)?d:null,F=!!H&&this.mutatedKeys.has(H.key),P=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let I=!1;H&&V?H.data.isEqual(V.data)?F!==P&&(t.track({type:3,doc:V}),I=!0):this.da(H,V)||(t.track({type:2,doc:V}),I=!0,(f&&this.ha(V,f)>0||h&&this.ha(V,h)<0)&&(o=!0)):!H&&V?(t.track({type:0,doc:V}),I=!0):H&&!V&&(t.track({type:1,doc:H}),I=!0,(f||h)&&(o=!0)),I&&(V?(i=i.add(V),n=P?n.add(v):n.delete(v)):(i=i.delete(v),n=n.delete(v)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const v=this.query.limitType==="F"?i.last():i.first();i=i.delete(v.key),n=n.delete(v.key),t.track({type:1,doc:v})}return{Pa:i,Ea:t,Xi:o,mutatedKeys:n}}da(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,t,r){const n=this.Pa;this.Pa=c.Pa,this.mutatedKeys=c.mutatedKeys;const i=c.Ea.k_();i.sort((v,d)=>function(V,F){const P=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return n1()}};return P(V)-P(F)}(v.type,d.type)||this.ha(v.doc,d.doc)),this.Aa(t),r=r!=null&&r;const o=a&&!r?this.Ra():[],f=this.la.size===0&&this.current&&!r?1:0,h=f!==this.ca;return this.ca=f,i.length!==0||h?{snapshot:new r6(this.query,c.Pa,n,i,c.mutatedKeys,f===0,h,!1,!!t&&t.resumeToken.approximateByteSize()>0),Va:o}:{Va:o}}G_(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new jr,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(c){return!this.ua.has(c)&&!!this.Pa.has(c)&&!this.Pa.get(c).hasLocalMutations}Aa(c){c&&(c.addedDocuments.forEach(a=>this.ua=this.ua.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.ua=this.ua.delete(a)),this.current=c.current)}Ra(){if(!this.current)return[];const c=this.la;this.la=m1(),this.Pa.forEach(t=>{this.ma(t.key)&&(this.la=this.la.add(t.key))});const a=[];return c.forEach(t=>{this.la.has(t)||a.push(new Mo(t))}),this.la.forEach(t=>{c.has(t)||a.push(new Co(t))}),a}fa(c){this.ua=c.hs,this.la=m1();const a=this.Ta(c.documents);return this.applyChanges(a,!0)}ga(){return r6.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class _S{constructor(c,a,t){this.query=c,this.targetId=a,this.view=t}}class kS{constructor(c){this.key=c,this.pa=!1}}class TS{constructor(c,a,t,r,n,i){this.localStore=c,this.remoteStore=a,this.eventManager=t,this.sharedClientState=r,this.currentUser=n,this.maxConcurrentLimboResolutions=i,this.ya={},this.wa=new h6(o=>Ks(o),x5),this.Sa=new Map,this.ba=new Set,this.Da=new E1(J.comparator),this.Ca=new Map,this.va=new Jc,this.Fa={},this.Ma=new Map,this.xa=t6.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function ES(e,c,a=!0){const t=xo(e);let r;const n=t.wa.get(c);return n?(t.sharedClientState.addLocalQueryTarget(n.targetId),r=n.view.ga()):r=await Lo(t,c,a,!0),r}async function PS(e,c){const a=xo(e);await Lo(a,c,!0,!1)}async function Lo(e,c,a,t){const r=await sS(e.localStore,X2(c)),n=r.targetId,i=a?e.sharedClientState.addLocalQueryTarget(n):"not-current";let o;return t&&(o=await IS(e,c,n,i==="current",r.resumeToken)),e.isPrimaryClient&&a&&zo(e.remoteStore,r),o}async function IS(e,c,a,t,r){e.Na=(d,H,V)=>async function(P,I,N,E){let U=I.view.Ta(N);U.Xi&&(U=await Or(P.localStore,I.query,!1).then(({documents:g1})=>I.view.Ta(g1,U)));const Z=E&&E.targetChanges.get(I.targetId),a1=E&&E.targetMismatches.get(I.targetId)!=null,Q=I.view.applyChanges(U,P.isPrimaryClient,Z,a1);return Zr(P,I.targetId,Q.Va),Q.snapshot}(e,d,H,V);const n=await Or(e.localStore,c,!0),i=new AS(c,n.hs),o=i.Ta(n.documents),f=b0.createSynthesizedTargetChangeForCurrentChange(a,t&&e.onlineState!=="Offline",r),h=i.applyChanges(o,e.isPrimaryClient,f);Zr(e,a,h.Va);const v=new _S(c,a,i);return e.wa.set(c,v),e.Sa.has(a)?e.Sa.get(a).push(c):e.Sa.set(a,[c]),h.snapshot}async function RS(e,c,a){const t=v1(e),r=t.wa.get(c),n=t.Sa.get(r.targetId);if(n.length>1)return t.Sa.set(r.targetId,n.filter(i=>!x5(i,c))),void t.wa.delete(c);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await T9(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),a&&ae(t.remoteStore,r.targetId),P9(t,r.targetId)}).catch(Oc)):(P9(t,r.targetId),await T9(t.localStore,r.targetId,!0))}async function DS(e,c){const a=v1(e),t=a.wa.get(c),r=a.Sa.get(t.targetId);a.isPrimaryClient&&r.length===1&&(a.sharedClientState.removeLocalQueryTarget(t.targetId),ae(a.remoteStore,t.targetId))}async function wo(e,c){const a=v1(e);try{const t=await nS(a.localStore,c);c.targetChanges.forEach((r,n)=>{const i=a.Ca.get(n);i&&(R1(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?i.pa=!0:r.modifiedDocuments.size>0?R1(i.pa):r.removedDocuments.size>0&&(R1(i.pa),i.pa=!1))}),await yo(a,t,c)}catch(t){await Oc(t)}}function Kr(e,c,a){const t=v1(e);if(t.isPrimaryClient&&a===0||!t.isPrimaryClient&&a===1){const r=[];t.wa.forEach((n,i)=>{const o=i.view.G_(c);o.snapshot&&r.push(o.snapshot)}),function(i,o){const f=v1(i);f.onlineState=o;let h=!1;f.queries.forEach((v,d)=>{for(const H of d.Q_)H.G_(o)&&(h=!0)}),h&&se(f)}(t.eventManager,c),r.length&&t.ya.u_(r),t.onlineState=c,t.isPrimaryClient&&t.sharedClientState.setOnlineState(c)}}async function FS(e,c,a){const t=v1(e);t.sharedClientState.updateQueryState(c,"rejected",a);const r=t.Ca.get(c),n=r&&r.key;if(n){let i=new E1(J.comparator);i=i.insert(n,r2.newNoDocument(n,e1.min()));const o=m1().add(n),f=new _5(e1.min(),new Map,new E1(p1),i,o);await wo(t,f),t.Da=t.Da.remove(n),t.Ca.delete(c),oe(t)}else await T9(t.localStore,c,!1).then(()=>P9(t,c,a)).catch(Oc)}function P9(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const t of e.Sa.get(c))e.wa.delete(t),a&&e.ya.La(t,a);e.Sa.delete(c),e.isPrimaryClient&&e.va.Vr(c).forEach(t=>{e.va.containsKey(t)||bo(e,t)})}function bo(e,c){e.ba.delete(c.path.canonicalString());const a=e.Da.get(c);a!==null&&(ae(e.remoteStore,a),e.Da=e.Da.remove(c),e.Ca.delete(a),oe(e))}function Zr(e,c,a){for(const t of a)t instanceof Co?(e.va.addReference(t.key,c),BS(e,t)):t instanceof Mo?(D("SyncEngine","Document no longer in limbo: "+t.key),e.va.removeReference(t.key,c),e.va.containsKey(t.key)||bo(e,t.key)):n1()}function BS(e,c){const a=c.key,t=a.path.canonicalString();e.Da.get(a)||e.ba.has(t)||(D("SyncEngine","New document in limbo: "+a),e.ba.add(t),oe(e))}function oe(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const c=e.ba.values().next().value;e.ba.delete(c);const a=new J(A1.fromString(c)),t=e.xa.next();e.Ca.set(t,new kS(a)),e.Da=e.Da.insert(a,t),zo(e.remoteStore,new S3(X2(Ws(a.path)),t,"TargetPurposeLimboResolution",$c._e))}}async function yo(e,c,a){const t=v1(e),r=[],n=[],i=[];t.wa.isEmpty()||(t.wa.forEach((o,f)=>{i.push(t.Na(f,c,a).then(h=>{if((h||a)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(f.targetId,h?.fromCache?"not-current":"current"),h){r.push(h);const v=ee.Ki(f.targetId,h);n.push(v)}}))}),await Promise.all(i),t.ya.u_(r),await async function(f,h){const v=v1(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>x.forEach(h,H=>x.forEach(H.qi,V=>v.persistence.referenceDelegate.addReference(d,H.targetId,V)).next(()=>x.forEach(H.Qi,V=>v.persistence.referenceDelegate.removeReference(d,H.targetId,V)))))}catch(d){if(!w0(d))throw d;D("LocalStore","Failed to update sequence numbers: "+d)}for(const d of h){const H=d.targetId;if(!d.fromCache){const V=v.ns.get(H),F=V.snapshotVersion,P=V.withLastLimboFreeSnapshotVersion(F);v.ns=v.ns.insert(H,P)}}}(t.localStore,n))}async function OS(e,c){const a=v1(e);if(!a.currentUser.isEqual(c)){D("SyncEngine","User change. New user:",c.toKey());const t=await uo(a.localStore,c);a.currentUser=c,function(n,i){n.Ma.forEach(o=>{o.forEach(f=>{f.reject(new K(T.CANCELLED,i))})}),n.Ma.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,t.removedBatchIds,t.addedBatchIds),await yo(a,t.us)}}function qS(e,c){const a=v1(e),t=a.Ca.get(c);if(t&&t.pa)return m1().add(t.key);{let r=m1();const n=a.Sa.get(c);if(!n)return r;for(const i of n){const o=a.wa.get(i);r=r.unionWith(o.view.Ia)}return r}}function xo(e){const c=v1(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=wo.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=qS.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=FS.bind(null,c),c.ya.u_=xS.bind(null,c.eventManager),c.ya.La=SS.bind(null,c.eventManager),c}class Qr{constructor(){this.synchronizeTabs=!1}async initialize(c){this.serializer=vo(c.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(c),this.persistence=this.createPersistence(c),await this.persistence.start(),this.localStore=this.createLocalStore(c),this.gcScheduler=this.createGarbageCollectionScheduler(c,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(c,this.localStore)}createGarbageCollectionScheduler(c,a){return null}createIndexBackfillerScheduler(c,a){return null}createLocalStore(c){return rS(this.persistence,new aS,c.initialUser,this.serializer)}createPersistence(c){return new Jx(ce.Hr,this.serializer)}createSharedClientState(c){return new lS}async terminate(){var c,a;(c=this.gcScheduler)===null||c===void 0||c.stop(),(a=this.indexBackfillerScheduler)===null||a===void 0||a.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class US{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Kr(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=OS.bind(null,this.syncEngine),await MS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return function(){return new wS}()}createDatastore(c){const a=vo(c.databaseInfo.databaseId),t=function(n){return new mS(n)}(c.databaseInfo);return function(n,i,o,f){return new pS(n,i,o,f)}(c.authCredentials,c.appCheckCredentials,t,a)}createRemoteStore(c){return function(t,r,n,i,o){return new HS(t,r,n,i,o)}(this.localStore,this.datastore,c.asyncQueue,a=>Kr(this.syncEngine,a,0),function(){return Ur.D()?new Ur:new fS}())}createSyncEngine(c,a){return function(r,n,i,o,f,h,v){const d=new TS(r,n,i,o,f,h);return v&&(d.Oa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}async terminate(){var c;await async function(t){const r=v1(t);D("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await y0(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore),(c=this.datastore)===null||c===void 0||c.terminate()}}/**
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
 */class $S{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.qa(this.observer.next,c)}error(c){this.observer.error?this.qa(this.observer.error,c):J2("Uncaught Error in snapshot listener:",c.toString())}Qa(){this.muted=!0}qa(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
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
 */class GS{constructor(c,a,t,r){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=t,this.databaseInfo=r,this.user=t2.UNAUTHENTICATED,this.clientId=_y.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(t,async n=>{D("FirestoreClient","Received user=",n.uid),await this.authCredentialListener(n),this.user=n}),this.appCheckCredentials.start(t,n=>(D("FirestoreClient","Received new app check token=",n),this.appCheckCredentialListener(n,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new T3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const t=Vo(a,"Failed to shutdown persistence");c.reject(t)}}),c.promise}}async function B7(e,c){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const a=e.configuration;await c.initialize(a);let t=a.initialUser;e.setCredentialChangeListener(async r=>{t.isEqual(r)||(await uo(c.localStore,r),t=r)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=c}async function Yr(e,c){e.asyncQueue.verifyOperationInProgress();const a=await WS(e);D("FirestoreClient","Initializing OnlineComponentProvider"),await c.initialize(a,e.configuration),e.setCredentialChangeListener(t=>Gr(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>Gr(c.remoteStore,r)),e._onlineComponents=c}function jS(e){return e.name==="FirebaseError"?e.code===T.FAILED_PRECONDITION||e.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function WS(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await B7(e,e._uninitializedComponentsProvider._offline)}catch(c){const a=c;if(!jS(a))throw a;J4("Error using user provided cache. Falling back to memory cache: "+a),await B7(e,new Qr)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await B7(e,new Qr);return e._offlineComponents}async function KS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Yr(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Yr(e,new US))),e._onlineComponents}async function ZS(e){const c=await KS(e),a=c.eventManager;return a.onListen=ES.bind(null,c.syncEngine),a.onUnlisten=RS.bind(null,c.syncEngine),a.onFirstRemoteStoreListen=PS.bind(null,c.syncEngine),a.onLastRemoteStoreUnlisten=DS.bind(null,c.syncEngine),a}function QS(e,c,a={}){const t=new T3;return e.asyncQueue.enqueueAndForget(async()=>function(n,i,o,f,h){const v=new $S({next:H=>{i.enqueueAndForget(()=>yS(n,d)),H.fromCache&&f.source==="server"?h.reject(new K(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(H)},error:H=>h.reject(H)}),d=new NS(o,v,{includeMetadataChanges:!0,ta:!0});return bS(n,d)}(await ZS(e),e.asyncQueue,c,a,t)),t.promise}/**
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
 */function So(e){const c={};return e.timeoutSeconds!==void 0&&(c.timeoutSeconds=e.timeoutSeconds),c}/**
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
 */const Xr=new Map;/**
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
 */function YS(e,c,a){if(!a)throw new K(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function XS(e,c,a,t){if(c===!0&&t===!0)throw new K(T.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function Jr(e){if(J.isDocumentKey(e))throw new K(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function JS(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(t){return t.constructor?t.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":n1()}function I9(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new K(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=JS(e);throw new K(T.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
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
 */class cn{constructor(c){var a,t;if(c.host===void 0){if(c.ssl!==void 0)throw new K(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,this.localCache=c.localCache,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new K(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}XS("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:c.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=So((t=c.experimentalLongPollingOptions)!==null&&t!==void 0?t:{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new K(T.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new K(T.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new K(T.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!c.useFetchStreams}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&function(t,r){return t.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,c.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}class le{constructor(c,a,t,r){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=t,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new K(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cn(c),c.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ly;switch(t.type){case"firstParty":return new xy(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new K(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){const t=Xr.get(a);t&&(D("ComponentProvider","Removing Datastore"),Xr.delete(a),t.terminate())}(this),Promise.resolve()}}function cN(e,c,a,t={}){var r;const n=(e=I9(e,le))._getSettings(),i=`${c}:${a}`;if(n.host!=="firestore.googleapis.com"&&n.host!==i&&J4("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},n),{host:i,ssl:!1})),t.mockUserToken){let o,f;if(typeof t.mockUserToken=="string")o=t.mockUserToken,f=t2.MOCK_USER;else{o=JL(t.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const h=t.mockUserToken.sub||t.mockUserToken.user_id;if(!h)throw new K(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new t2(h)}e._authCredentials=new wy(new Fs(o,f))}}/**
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
 */class T5{constructor(c,a,t){this.converter=a,this._query=t,this.type="query",this.firestore=c}withConverter(c){return new T5(this.firestore,c,this._query)}}class m6{constructor(c,a,t){this.converter=a,this._key=t,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new K4(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new m6(this.firestore,c,this._key)}}class K4 extends T5{constructor(c,a,t){super(c,a,Ws(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new m6(this.firestore,null,new J(c))}withConverter(c){return new K4(this.firestore,c,this._path)}}function eN(e,c,...a){if(e=iw(e),YS("collection","path",c),e instanceof le){const t=A1.fromString(c,...a);return Jr(t),new K4(e,null,t)}{if(!(e instanceof m6||e instanceof K4))throw new K(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(A1.fromString(c,...a));return Jr(t),new K4(e.firestore,null,t)}}/**
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
 */class aN{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new po(this,"async_queue_retry"),this.cu=()=>{const a=F7();a&&D("AsyncQueue","Visibility state changed to "+a.visibilityState),this.jo.Ko()};const c=F7();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.lu(),this.hu(c)}enterRestrictedMode(c){if(!this.iu){this.iu=!0,this.au=c||!1;const a=F7();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.cu)}}enqueue(c){if(this.lu(),this.iu)return new Promise(()=>{});const a=new T3;return this.hu(()=>this.iu&&this.au?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.ru.push(c),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(c){if(!w0(c))throw c;D("AsyncQueue","Operation failed with retryable error: "+c)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(c){const a=this.nu.then(()=>(this._u=!0,c().catch(t=>{this.ou=t,this._u=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(t);throw J2("INTERNAL UNHANDLED ERROR: ",r),t}).then(t=>(this._u=!1,t))));return this.nu=a,a}enqueueAfterDelay(c,a,t){this.lu(),this.uu.indexOf(c)>-1&&(a=0);const r=ie.createAndSchedule(this,c,a,t,n=>this.Iu(n));return this.su.push(r),r}lu(){this.ou&&n1()}verifyOperationInProgress(){}async Tu(){let c;do c=this.nu,await c;while(c!==this.nu)}Eu(c){for(const a of this.su)if(a.timerId===c)return!0;return!1}du(c){return this.Tu().then(()=>{this.su.sort((a,t)=>a.targetTimeMs-t.targetTimeMs);for(const a of this.su)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Tu()})}Au(c){this.uu.push(c)}Iu(c){const a=this.su.indexOf(c);this.su.splice(a,1)}}class No extends le{constructor(c,a,t,r){super(c,a,t,r),this.type="firestore",this._queue=function(){return new aN}(),this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ao(this),this._firestoreClient.terminate()}}function tN(e,c){const a=typeof e=="object"?e:nb(),t=typeof e=="string"?e:c||"(default)",r=eb(a,"firestore").getImmediate({identifier:t});if(!r._initialized){const n=YL("firestore");n&&cN(r,...n)}return r}function rN(e){return e._firestoreClient||Ao(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ao(e){var c,a,t;const r=e._freezeSettings(),n=function(o,f,h,v){return new qy(o,f,h,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,So(v.experimentalLongPollingOptions),v.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new GS(e._authCredentials,e._appCheckCredentials,e._queue,n),!((a=r.localCache)===null||a===void 0)&&a._offlineComponentProvider&&(!((t=r.localCache)===null||t===void 0)&&t._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class G8{constructor(c){this._byteString=c}static fromBase64String(c){try{return new G8(o2.fromBase64String(c))}catch(a){throw new K(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new G8(o2.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
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
 */class _o{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new K(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new u2(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
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
 */class nN{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new K(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new K(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return p1(this._lat,c._lat)||p1(this._long,c._long)}}const iN=new RegExp("[~\\*/\\[\\]]");function sN(e,c,a){if(c.search(iN)>=0)throw en(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new _o(...c.split("."))._internalPath}catch{throw en(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function en(e,c,a,t,r){const n=t&&!t.isEmpty(),i=r!==void 0;let o=`Function ${c}() called with invalid data`;a&&(o+=" (via `toFirestore()`)"),o+=". ";let f="";return(n||i)&&(f+=" (found",n&&(f+=` in field ${t}`),i&&(f+=` in document ${r}`),f+=")"),new K(T.INVALID_ARGUMENT,o+e+f)}/**
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
 */class ko{constructor(c,a,t,r,n){this._firestore=c,this._userDataWriter=a,this._key=t,this._document=r,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new m6(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new oN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(To("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class oN extends ko{data(){return super.data()}}function To(e,c){return typeof c=="string"?sN(e,c):c instanceof _o?c._internalPath:c._delegate._internalPath}/**
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
 */function lN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new K(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fN{convertValue(c,a="none"){switch(z4(c)){case 0:return null;case 1:return c.booleanValue;case 2:return I1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(p4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw n1()}}convertObject(c,a){return this.convertObjectMap(c.fields,a)}convertObjectMap(c,a="none"){const t={};return b5(c,(r,n)=>{t[r]=this.convertValue(n,a)}),t}convertGeoPoint(c){return new nN(I1(c.latitude),I1(c.longitude))}convertArray(c,a){return(c.values||[]).map(t=>this.convertValue(t,a))}convertServerTimestamp(c,a){switch(a){case"previous":const t=jc(c);return t==null?null:this.convertValue(t,a);case"estimate":return this.convertTimestamp(i0(c));default:return null}}convertTimestamp(c){const a=I3(c);return new z2(a.seconds,a.nanos)}convertDocumentKey(c,a){const t=A1.fromString(c);R1(ho(t));const r=new s0(t.get(1),t.get(3)),n=new J(t.popFirst(5));return r.isEqual(a)||J2(`Document ${n} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),n}}/**
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
 */class n8{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class hN extends ko{constructor(c,a,t,r,n,i){super(c,a,t,r,i),this._firestore=c,this._firestoreImpl=c,this.metadata=n}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new L8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const t=this._document.data.field(To("DocumentSnapshot.get",c));if(t!==null)return this._userDataWriter.convertValue(t,a.serverTimestamps)}}}class L8 extends hN{data(c={}){return super.data(c)}}class uN{constructor(c,a,t,r){this._firestore=c,this._userDataWriter=a,this._snapshot=r,this.metadata=new n8(r.hasPendingWrites,r.fromCache),this.query=t}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(t=>{c.call(a,new L8(this._firestore,this._userDataWriter,t.key,t,new n8(this._snapshot.mutatedKeys.has(t.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new K(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(r,n){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const f=new L8(r._firestore,r._userDataWriter,o.doc.key,o.doc,new n8(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:f,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>n||o.type!==3).map(o=>{const f=new L8(r._firestore,r._userDataWriter,o.doc.key,o.doc,new n8(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,v=-1;return o.type!==0&&(h=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),v=i.indexOf(o.doc.key)),{type:mN(o.type),doc:f,oldIndex:h,newIndex:v}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function mN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return n1()}}class vN extends fN{constructor(c){super(),this.firestore=c}convertBytes(c){return new G8(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new m6(this.firestore,null,a)}}function dN(e){e=I9(e,T5);const c=I9(e.firestore,No),a=rN(c),t=new vN(c);return lN(e._query),QS(a,e._query).then(r=>new uN(c,t,e,r))}(function(c,a=!0){(function(r){f6=r})(rb),E8(new Z6("firestore",(t,{instanceIdentifier:r,options:n})=>{const i=t.getProvider("app").getImmediate(),o=new No(new by(t.getProvider("auth-internal")),new Ny(t.getProvider("app-check-internal")),function(h,v){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new s0(h.options.projectId,v)}(i,r),i);return n=Object.assign({useFetchStreams:a},n),o._setSettings(n),o},"PUBLIC").setMultipleInstances(!0)),U4(Vr,"4.5.0",c),U4(Vr,"4.5.0","esm2017")})();const Eo={apiKey:"AIzaSyBcRGOGcrY0bJgEw8Gp3rm5zq0cdLfRzAE",authDomain:"profound-iris-418105.firebaseapp.com",projectId:"profound-iris-418105",storageBucket:"profound-iris-418105.appspot.com",messagingSenderId:"168929492497",appId:"1:168929492497:web:3dd54b20d88a067f02bbb0",measurementId:"G-KQP85TR1FB"},pN=Ti(Eo),zN=tN(pN),Po=[];console.log("firebaseConfig.apiKey: "+Eo.apiKey);const HN=await dN(eN(zN,"agents"));HN.forEach(e=>{const c={id:e.id,dept:e.data().dept,college:e.data().college,collegeFullName:e.data().collegeFullName,dept:e.data().dept,deptFullName:e.data().deptFullName,agent:e.data().agent,agentExt:e.data().agentExt,agentEmail:e.data().agentEmail,curriAgent:e.data().curriAgent,curriAgentExt:e.data().curriAgentExt,curriAgentEmail:e.data().curriAgentEmail};Po.push(c)});const gN=(e,c)=>{const a=e.__vccOpts||e;for(const[t,r]of c)a[t]=r;return a},VN={created(){},data(){return{dataFields:{college:"學院",collegeFullName:"學院全名",dept:"系所",deptFullName:"系所全名",agent:"系辦助理",agentExt:"系辦助理分機",agentEmail:"系辦助理email",curriAgent:"課務組承辦人",curriAgentExt:"課務組承辦人分機",curriAgentEmail:"課務組承辦人email"},selectedOption:"",curriAgentOptions:[{label:"鍾博凱",value:1,disabled:!1},{label:"黃思嘉",value:2,disabled:!1},{label:"黃嘉玲",value:3,disabled:!1},{label:"范豈瑗",value:4,disabled:!1}]}},computed:{},methods:{show(){console.log(Po)},getInputs(){const e=[];console.log(this.$refs.inputs),console.log(typeof this.$refs.inputs[0].value);for(let c=0;c<this.$refs.inputs.length;c++)console.log(this.$refs.inputs[c].value),e.push(this.$refs.inputs[c].value);return e},clearInputs(){for(let e=0;e<this.$refs.inputs.length;e++)this.$refs.inputs[e].value="";this.selectedOption=""},btnSubmitClick(){const e=this.getInputs();Qt.fire({title:"確認上傳資料",text:e,showDenyButton:!0,showCancelButton:!0,confirmButtonText:"送出",cancelButtonText:"返回編輯",denyButtonText:"取消並清除"}).then(c=>{c.isConfirmed?Qt.fire("資料已送出","","success"):c.isDenied&&this.clearInputs()})}}},CN={id:"outer",class:"my-20 flex items-center justify-center"},MN={id:"inner",class:"w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 text-center"},LN={class:"w-full mx-auto bg-white p-8 rounded form-shadow"},wN=f2("h2",{class:"text-2xl font-semibold mb-6"},"登記資料",-1),bN=["for"],yN={class:"mr-1"},xN=["id"],SN=["value"],NN=["for"],AN={class:"mr-1"},_N=["id","placeholder"],kN=f2("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},null,-1),TN={class:"flex items-center justify-between"};function EN(e,c,a,t,r,n){return Q3(),Y3("div",CN,[f2("div",MN,[f2("form",LN,[wN,(Q3(!0),Y3(L2,null,yt(r.dataFields,(i,o,f)=>(Q3(),Y3("div",{class:"mb-4 flex flex-col md:flex-row md:items-center",key:f},[o==="curriAgent"?(Q3(),Y3(L2,{key:0},[f2("label",{class:"text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left",for:o},[f2("span",yN,v7(i),1)],8,bN),HM(f2("select",{class:"shadow border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4",id:o,"onUpdate:modelValue":c[0]||(c[0]=h=>r.selectedOption=h)},[(Q3(!0),Y3(L2,null,yt(r.curriAgentOptions,(h,v)=>(Q3(),Y3("option",{key:v,value:h.value},v7(h.label),9,SN))),128))],8,xN),[[EL,r.selectedOption]])],64)):(Q3(),Y3(L2,{key:1},[f2("label",{class:"text-gray-700 text-sm font-bold mr-2 flex-shrink-0 md:w-1/4 text-right max-[768px]:text-left",for:o},[f2("span",AN,v7(i),1)],8,NN),f2("input",{class:"shadow appearance-none border-2 border-indigo-200 focus:border-indigo-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4",id:o,type:"text",placeholder:"請輸入"+i,ref_for:!0,ref:"inputs"},null,8,_N),kN],64))]))),128)),f2("div",TN,[f2("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:c[1]||(c[1]=(...i)=>n.show&&n.show(...i))}," 登記 "),f2("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:c[2]||(c[2]=(...i)=>n.clearInputs&&n.clearInputs(...i))}," 清除 ")])])])])}const PN=gN(VN,[["render",EN]]);function an(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function q(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?an(Object(a),!0).forEach(function(t){B1(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):an(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function j8(e){"@babel/helpers - typeof";return j8=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},j8(e)}function IN(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function tn(e,c){for(var a=0;a<c.length;a++){var t=c[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function RN(e,c,a){return c&&tn(e.prototype,c),a&&tn(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function B1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function fe(e,c){return FN(e)||ON(e,c)||Io(e,c)||UN()}function S0(e){return DN(e)||BN(e)||Io(e)||qN()}function DN(e){if(Array.isArray(e))return R9(e)}function FN(e){if(Array.isArray(e))return e}function BN(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ON(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var t=[],r=!0,n=!1,i,o;try{for(a=a.call(e);!(r=(i=a.next()).done)&&(t.push(i.value),!(c&&t.length===c));r=!0);}catch(f){n=!0,o=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(n)throw o}}return t}}function Io(e,c){if(e){if(typeof e=="string")return R9(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R9(e,c)}}function R9(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,t=new Array(c);a<c;a++)t[a]=e[a];return t}function qN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rn=function(){},he={},Ro={},Do=null,Fo={mark:rn,measure:rn};try{typeof window<"u"&&(he=window),typeof document<"u"&&(Ro=document),typeof MutationObserver<"u"&&(Do=MutationObserver),typeof performance<"u"&&(Fo=performance)}catch{}var $N=he.navigator||{},nn=$N.userAgent,sn=nn===void 0?"":nn,D3=he,x1=Ro,on=Do,i8=Fo;D3.document;var m3=!!x1.documentElement&&!!x1.head&&typeof x1.addEventListener=="function"&&typeof x1.createElement=="function",Bo=~sn.indexOf("MSIE")||~sn.indexOf("Trident/"),s8,o8,l8,f8,h8,l3="___FONT_AWESOME___",D9=16,Oo="fa",qo="svg-inline--fa",H4="data-fa-i2svg",F9="data-fa-pseudo-element",GN="data-fa-pseudo-element-pending",ue="data-prefix",me="data-icon",ln="fontawesome-i2svg",jN="async",WN=["HTML","HEAD","STYLE","SCRIPT"],Uo=function(){try{return!0}catch{return!1}}(),b1="classic",N1="sharp",ve=[b1,N1];function N0(e){return new Proxy(e,{get:function(a,t){return t in a?a[t]:a[b1]}})}var l0=N0((s8={},B1(s8,b1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),B1(s8,N1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),s8)),f0=N0((o8={},B1(o8,b1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),B1(o8,N1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),o8)),h0=N0((l8={},B1(l8,b1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),B1(l8,N1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),l8)),KN=N0((f8={},B1(f8,b1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),B1(f8,N1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),f8)),ZN=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,$o="fa-layers-text",QN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,YN=N0((h8={},B1(h8,b1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),B1(h8,N1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),h8)),Go=[1,2,3,4,5,6,7,8,9,10],XN=Go.concat([11,12,13,14,15,16,17,18,19,20]),JN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],s4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},u0=new Set;Object.keys(f0[b1]).map(u0.add.bind(u0));Object.keys(f0[N1]).map(u0.add.bind(u0));var cA=[].concat(ve,S0(u0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",s4.GROUP,s4.SWAP_OPACITY,s4.PRIMARY,s4.SECONDARY]).concat(Go.map(function(e){return"".concat(e,"x")})).concat(XN.map(function(e){return"w-".concat(e)})),q6=D3.FontAwesomeConfig||{};function eA(e){var c=x1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function aA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x1&&typeof x1.querySelector=="function"){var tA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];tA.forEach(function(e){var c=fe(e,2),a=c[0],t=c[1],r=aA(eA(a));r!=null&&(q6[t]=r)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Oo,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q6.familyPrefix&&(q6.cssPrefix=q6.familyPrefix);var n6=q(q({},jo),q6);n6.autoReplaceSvg||(n6.observeMutations=!1);var G={};Object.keys(jo).forEach(function(e){Object.defineProperty(G,e,{enumerable:!0,set:function(a){n6[e]=a,U6.forEach(function(t){return t(G)})},get:function(){return n6[e]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(c){n6.cssPrefix=c,U6.forEach(function(a){return a(G)})},get:function(){return n6.cssPrefix}});D3.FontAwesomeConfig=G;var U6=[];function rA(e){return U6.push(e),function(){U6.splice(U6.indexOf(e),1)}}var L3=D9,Y2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nA(e){if(!(!e||!m3)){var c=x1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=x1.head.childNodes,t=null,r=a.length-1;r>-1;r--){var n=a[r],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=n)}return x1.head.insertBefore(c,t),e}}var iA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m0(){for(var e=12,c="";e-- >0;)c+=iA[Math.random()*62|0];return c}function v6(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function de(e){return e.classList?v6(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function Wo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sA(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(Wo(e[a]),'" ')},"").trim()}function E5(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function pe(e){return e.size!==Y2.size||e.x!==Y2.x||e.y!==Y2.y||e.rotate!==Y2.rotate||e.flipX||e.flipY}function oA(e){var c=e.transform,a=e.containerWidth,t=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),f={transform:"".concat(n," ").concat(i," ").concat(o)},h={transform:"translate(".concat(t/2*-1," -256)")};return{outer:r,inner:f,path:h}}function lA(e){var c=e.transform,a=e.width,t=a===void 0?D9:a,r=e.height,n=r===void 0?D9:r,i=e.startCentered,o=i===void 0?!1:i,f="";return o&&Bo?f+="translate(".concat(c.x/L3-t/2,"em, ").concat(c.y/L3-n/2,"em) "):o?f+="translate(calc(-50% + ".concat(c.x/L3,"em), calc(-50% + ").concat(c.y/L3,"em)) "):f+="translate(".concat(c.x/L3,"em, ").concat(c.y/L3,"em) "),f+="scale(".concat(c.size/L3*(c.flipX?-1:1),", ").concat(c.size/L3*(c.flipY?-1:1),") "),f+="rotate(".concat(c.rotate,"deg) "),f}var fA=`:root, :host {
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
}`;function Ko(){var e=Oo,c=qo,a=G.cssPrefix,t=G.replacementClass,r=fA;if(a!==e||t!==c){var n=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(t))}return r}var fn=!1;function O7(){G.autoAddCss&&!fn&&(nA(Ko()),fn=!0)}var hA={mixout:function(){return{dom:{css:Ko,insertCss:O7}}},hooks:function(){return{beforeDOMElementCreation:function(){O7()},beforeI2svg:function(){O7()}}}},f3=D3||{};f3[l3]||(f3[l3]={});f3[l3].styles||(f3[l3].styles={});f3[l3].hooks||(f3[l3].hooks={});f3[l3].shims||(f3[l3].shims=[]);var R2=f3[l3],Zo=[],uA=function e(){x1.removeEventListener("DOMContentLoaded",e),W8=1,Zo.map(function(c){return c()})},W8=!1;m3&&(W8=(x1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x1.readyState),W8||x1.addEventListener("DOMContentLoaded",uA));function mA(e){m3&&(W8?setTimeout(e,0):Zo.push(e))}function A0(e){var c=e.tag,a=e.attributes,t=a===void 0?{}:a,r=e.children,n=r===void 0?[]:r;return typeof e=="string"?Wo(e):"<".concat(c," ").concat(sA(t),">").concat(n.map(A0).join(""),"</").concat(c,">")}function hn(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var vA=function(c,a){return function(t,r,n,i){return c.call(a,t,r,n,i)}},q7=function(c,a,t,r){var n=Object.keys(c),i=n.length,o=r!==void 0?vA(a,r):a,f,h,v;for(t===void 0?(f=1,v=c[n[0]]):(f=0,v=t);f<i;f++)h=n[f],v=o(v,c[h],h,c);return v};function dA(e){for(var c=[],a=0,t=e.length;a<t;){var r=e.charCodeAt(a++);if(r>=55296&&r<=56319&&a<t){var n=e.charCodeAt(a++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),a--)}else c.push(r)}return c}function B9(e){var c=dA(e);return c.length===1?c[0].toString(16):null}function pA(e,c){var a=e.length,t=e.charCodeAt(c),r;return t>=55296&&t<=56319&&a>c+1&&(r=e.charCodeAt(c+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function un(e){return Object.keys(e).reduce(function(c,a){var t=e[a],r=!!t.icon;return r?c[t.iconName]=t.icon:c[a]=t,c},{})}function O9(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=a.skipHooks,r=t===void 0?!1:t,n=un(c);typeof R2.hooks.addPack=="function"&&!r?R2.hooks.addPack(e,un(c)):R2.styles[e]=q(q({},R2.styles[e]||{}),n),e==="fas"&&O9("fa",c)}var u8,m8,v8,R4=R2.styles,zA=R2.shims,HA=(u8={},B1(u8,b1,Object.values(h0[b1])),B1(u8,N1,Object.values(h0[N1])),u8),ze=null,Qo={},Yo={},Xo={},Jo={},cl={},gA=(m8={},B1(m8,b1,Object.keys(l0[b1])),B1(m8,N1,Object.keys(l0[N1])),m8);function VA(e){return~cA.indexOf(e)}function CA(e,c){var a=c.split("-"),t=a[0],r=a.slice(1).join("-");return t===e&&r!==""&&!VA(r)?r:null}var el=function(){var c=function(n){return q7(R4,function(i,o,f){return i[f]=q7(o,n,{}),i},{})};Qo=c(function(r,n,i){if(n[3]&&(r[n[3]]=i),n[2]){var o=n[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){r[f.toString(16)]=i})}return r}),Yo=c(function(r,n,i){if(r[i]=i,n[2]){var o=n[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){r[f]=i})}return r}),cl=c(function(r,n,i){var o=n[2];return r[i]=i,o.forEach(function(f){r[f]=i}),r});var a="far"in R4||G.autoFetchSvg,t=q7(zA,function(r,n){var i=n[0],o=n[1],f=n[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:f}),r},{names:{},unicodes:{}});Xo=t.names,Jo=t.unicodes,ze=P5(G.styleDefault,{family:G.familyDefault})};rA(function(e){ze=P5(e.styleDefault,{family:G.familyDefault})});el();function He(e,c){return(Qo[e]||{})[c]}function MA(e,c){return(Yo[e]||{})[c]}function o4(e,c){return(cl[e]||{})[c]}function al(e){return Xo[e]||{prefix:null,iconName:null}}function LA(e){var c=Jo[e],a=He("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function F3(){return ze}var ge=function(){return{prefix:null,iconName:null,rest:[]}};function P5(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,t=a===void 0?b1:a,r=l0[t][e],n=f0[t][e]||f0[t][r],i=e in R2.styles?e:null;return n||i||null}var mn=(v8={},B1(v8,b1,Object.keys(h0[b1])),B1(v8,N1,Object.keys(h0[N1])),v8);function I5(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=(c={},B1(c,b1,"".concat(G.cssPrefix,"-").concat(b1)),B1(c,N1,"".concat(G.cssPrefix,"-").concat(N1)),c),i=null,o=b1;(e.includes(n[b1])||e.some(function(h){return mn[b1].includes(h)}))&&(o=b1),(e.includes(n[N1])||e.some(function(h){return mn[N1].includes(h)}))&&(o=N1);var f=e.reduce(function(h,v){var d=CA(G.cssPrefix,v);if(R4[v]?(v=HA[o].includes(v)?KN[o][v]:v,i=v,h.prefix=v):gA[o].indexOf(v)>-1?(i=v,h.prefix=P5(v,{family:o})):d?h.iconName=d:v!==G.replacementClass&&v!==n[b1]&&v!==n[N1]&&h.rest.push(v),!r&&h.prefix&&h.iconName){var H=i==="fa"?al(h.iconName):{},V=o4(h.prefix,h.iconName);H.prefix&&(i=null),h.iconName=H.iconName||V||h.iconName,h.prefix=H.prefix||h.prefix,h.prefix==="far"&&!R4.far&&R4.fas&&!G.autoFetchSvg&&(h.prefix="fas")}return h},ge());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===N1&&(R4.fass||G.autoFetchSvg)&&(f.prefix="fass",f.iconName=o4(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=F3()||"fas"),f}var wA=function(){function e(){IN(this,e),this.definitions={}}return RN(e,[{key:"add",value:function(){for(var a=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=q(q({},a.definitions[o]||{}),i[o]),O9(o,i[o]);var f=h0[b1][o];f&&O9(f,i[o]),el()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(n){var i=r[n],o=i.prefix,f=i.iconName,h=i.icon,v=h[2];a[o]||(a[o]={}),v.length>0&&v.forEach(function(d){typeof d=="string"&&(a[o][d]=h)}),a[o][f]=h}),a}}]),e}(),vn=[],D4={},Z4={},bA=Object.keys(Z4);function yA(e,c){var a=c.mixoutsTo;return vn=e,D4={},Object.keys(Z4).forEach(function(t){bA.indexOf(t)===-1&&delete Z4[t]}),vn.forEach(function(t){var r=t.mixout?t.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),j8(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=r[i][o]})}),t.hooks){var n=t.hooks();Object.keys(n).forEach(function(i){D4[i]||(D4[i]=[]),D4[i].push(n[i])})}t.provides&&t.provides(Z4)}),a}function q9(e,c){for(var a=arguments.length,t=new Array(a>2?a-2:0),r=2;r<a;r++)t[r-2]=arguments[r];var n=D4[e]||[];return n.forEach(function(i){c=i.apply(null,[c].concat(t))}),c}function g4(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),t=1;t<c;t++)a[t-1]=arguments[t];var r=D4[e]||[];r.forEach(function(n){n.apply(null,a)})}function h3(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return Z4[e]?Z4[e].apply(null,c):void 0}function U9(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||F3();if(c)return c=o4(a,c)||c,hn(tl.definitions,a,c)||hn(R2.styles,a,c)}var tl=new wA,xA=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,g4("noAuto")},SA={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return m3?(g4("beforeI2svg",c),h3("pseudoElements2svg",c),h3("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,mA(function(){AA({autoReplaceSvgRoot:a}),g4("watch",c)})}},NA={icon:function(c){if(c===null)return null;if(j8(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:o4(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=P5(c[0]);return{prefix:t,iconName:o4(t,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(G.cssPrefix,"-"))>-1||c.match(ZN))){var r=I5(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||F3(),iconName:o4(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=F3();return{prefix:n,iconName:o4(n,c)||c}}}},x2={noAuto:xA,config:G,dom:SA,parse:NA,library:tl,findIconDefinition:U9,toHtml:A0},AA=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,t=a===void 0?x1:a;(Object.keys(R2.styles).length>0||G.autoFetchSvg)&&m3&&G.autoReplaceSvg&&x2.dom.i2svg({node:t})};function R5(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return A0(t)})}}),Object.defineProperty(e,"node",{get:function(){if(m3){var t=x1.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function _A(e){var c=e.children,a=e.main,t=e.mask,r=e.attributes,n=e.styles,i=e.transform;if(pe(i)&&a.found&&!t.found){var o=a.width,f=a.height,h={x:o/f/2,y:.5};r.style=E5(q(q({},n),{},{"transform-origin":"".concat(h.x+i.x/16,"em ").concat(h.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function kA(e){var c=e.prefix,a=e.iconName,t=e.children,r=e.attributes,n=e.symbol,i=n===!0?"".concat(c,"-").concat(G.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},r),{},{id:i}),children:t}]}]}function Ve(e){var c=e.icons,a=c.main,t=c.mask,r=e.prefix,n=e.iconName,i=e.transform,o=e.symbol,f=e.title,h=e.maskId,v=e.titleId,d=e.extra,H=e.watchable,V=H===void 0?!1:H,F=t.found?t:a,P=F.width,I=F.height,N=r==="fak",E=[G.replacementClass,n?"".concat(G.cssPrefix,"-").concat(n):""].filter(function(c2){return d.classes.indexOf(c2)===-1}).filter(function(c2){return c2!==""||!!c2}).concat(d.classes).join(" "),U={children:[],attributes:q(q({},d.attributes),{},{"data-prefix":r,"data-icon":n,class:E,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(I)})},Z=N&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/I*16*.0625,"em")}:{};V&&(U.attributes[H4]=""),f&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(v||m0())},children:[f]}),delete U.attributes.title);var a1=q(q({},U),{},{prefix:r,iconName:n,main:a,mask:t,maskId:h,transform:i,symbol:o,styles:q(q({},Z),d.styles)}),Q=t.found&&a.found?h3("generateAbstractMask",a1)||{children:[],attributes:{}}:h3("generateAbstractIcon",a1)||{children:[],attributes:{}},g1=Q.children,j1=Q.attributes;return a1.children=g1,a1.attributes=j1,o?kA(a1):_A(a1)}function dn(e){var c=e.content,a=e.width,t=e.height,r=e.transform,n=e.title,i=e.extra,o=e.watchable,f=o===void 0?!1:o,h=q(q(q({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});f&&(h[H4]="");var v=q({},i.styles);pe(r)&&(v.transform=lA({transform:r,startCentered:!0,width:a,height:t}),v["-webkit-transform"]=v.transform);var d=E5(v);d.length>0&&(h.style=d);var H=[];return H.push({tag:"span",attributes:h,children:[c]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function TA(e){var c=e.content,a=e.title,t=e.extra,r=q(q(q({},t.attributes),a?{title:a}:{}),{},{class:t.classes.join(" ")}),n=E5(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[c]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var U7=R2.styles;function $9(e){var c=e[0],a=e[1],t=e.slice(4),r=fe(t,1),n=r[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(s4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(s4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(s4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:a,icon:i}}var EA={found:!1,width:512,height:512};function PA(e,c){!Uo&&!G.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function G9(e,c){var a=c;return c==="fa"&&G.styleDefault!==null&&(c=F3()),new Promise(function(t,r){if(h3("missingIconAbstract"),a==="fa"){var n=al(e)||{};e=n.iconName||e,c=n.prefix||c}if(e&&c&&U7[c]&&U7[c][e]){var i=U7[c][e];return t($9(i))}PA(e,c),t(q(q({},EA),{},{icon:G.showMissingIcons&&e?h3("missingIconAbstract")||{}:{}}))})}var pn=function(){},j9=G.measurePerformance&&i8&&i8.mark&&i8.measure?i8:{mark:pn,measure:pn},_6='FA "6.5.2"',IA=function(c){return j9.mark("".concat(_6," ").concat(c," begins")),function(){return rl(c)}},rl=function(c){j9.mark("".concat(_6," ").concat(c," ends")),j9.measure("".concat(_6," ").concat(c),"".concat(_6," ").concat(c," begins"),"".concat(_6," ").concat(c," ends"))},Ce={begin:IA,end:rl},w8=function(){};function zn(e){var c=e.getAttribute?e.getAttribute(H4):null;return typeof c=="string"}function RA(e){var c=e.getAttribute?e.getAttribute(ue):null,a=e.getAttribute?e.getAttribute(me):null;return c&&a}function DA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(G.replacementClass)}function FA(){if(G.autoReplaceSvg===!0)return b8.replace;var e=b8[G.autoReplaceSvg];return e||b8.replace}function BA(e){return x1.createElementNS("http://www.w3.org/2000/svg",e)}function OA(e){return x1.createElement(e)}function nl(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,t=a===void 0?e.tag==="svg"?BA:OA:a;if(typeof e=="string")return x1.createTextNode(e);var r=t(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var n=e.children||[];return n.forEach(function(i){r.appendChild(nl(i,{ceFn:t}))}),r}function qA(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var b8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(r){a.parentNode.insertBefore(nl(r),a)}),a.getAttribute(H4)===null&&G.keepOriginalSource){var t=x1.createComment(qA(a));a.parentNode.replaceChild(t,a)}else a.remove()},nest:function(c){var a=c[0],t=c[1];if(~de(a).indexOf(G.replacementClass))return b8.replace(c);var r=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var n=t[0].attributes.class.split(" ").reduce(function(o,f){return f===G.replacementClass||f.match(r)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});t[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var i=t.map(function(o){return A0(o)}).join(`
`);a.setAttribute(H4,""),a.innerHTML=i}};function Hn(e){e()}function il(e,c){var a=typeof c=="function"?c:w8;if(e.length===0)a();else{var t=Hn;G.mutateApproach===jN&&(t=D3.requestAnimationFrame||Hn),t(function(){var r=FA(),n=Ce.begin("mutate");e.map(r),n(),a()})}}var Me=!1;function sl(){Me=!0}function W9(){Me=!1}var K8=null;function gn(e){if(on&&G.observeMutations){var c=e.treeCallback,a=c===void 0?w8:c,t=e.nodeCallback,r=t===void 0?w8:t,n=e.pseudoElementsCallback,i=n===void 0?w8:n,o=e.observeMutationsRoot,f=o===void 0?x1:o;K8=new on(function(h){if(!Me){var v=F3();v6(h).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!zn(d.addedNodes[0])&&(G.searchPseudoElements&&i(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&zn(d.target)&&~JN.indexOf(d.attributeName))if(d.attributeName==="class"&&RA(d.target)){var H=I5(de(d.target)),V=H.prefix,F=H.iconName;d.target.setAttribute(ue,V||v),F&&d.target.setAttribute(me,F)}else DA(d.target)&&r(d.target)})}}),m3&&K8.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function UA(){K8&&K8.disconnect()}function $A(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(t,r){var n=r.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(t[i]=o.join(":").trim()),t},{})),a}function GA(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",r=I5(de(e));return r.prefix||(r.prefix=F3()),c&&a&&(r.prefix=c,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&t.length>0&&(r.iconName=MA(r.prefix,e.innerText)||He(r.prefix,B9(e.innerText))),!r.iconName&&G.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function jA(e){var c=v6(e.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),a=e.getAttribute("title"),t=e.getAttribute("data-fa-title-id");return G.autoA11y&&(a?c["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(t||m0()):(c["aria-hidden"]="true",c.focusable="false")),c}function WA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vn(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=GA(e),t=a.iconName,r=a.prefix,n=a.rest,i=jA(e),o=q9("parseNodeAttributes",{},e),f=c.styleParser?$A(e):[];return q({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Y2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:f,attributes:i}},o)}var KA=R2.styles;function ol(e){var c=G.autoReplaceSvg==="nest"?Vn(e,{styleParser:!1}):Vn(e);return~c.extra.classes.indexOf($o)?h3("generateLayersText",e,c):h3("generateSvgReplacementMutation",e,c)}var B3=new Set;ve.map(function(e){B3.add("fa-".concat(e))});Object.keys(l0[b1]).map(B3.add.bind(B3));Object.keys(l0[N1]).map(B3.add.bind(B3));B3=S0(B3);function Cn(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!m3)return Promise.resolve();var a=x1.documentElement.classList,t=function(d){return a.add("".concat(ln,"-").concat(d))},r=function(d){return a.remove("".concat(ln,"-").concat(d))},n=G.autoFetchSvg?B3:ve.map(function(v){return"fa-".concat(v)}).concat(Object.keys(KA));n.includes("fa")||n.push("fa");var i=[".".concat($o,":not([").concat(H4,"])")].concat(n.map(function(v){return".".concat(v,":not([").concat(H4,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=v6(e.querySelectorAll(i))}catch{}if(o.length>0)t("pending"),r("complete");else return Promise.resolve();var f=Ce.begin("onTree"),h=o.reduce(function(v,d){try{var H=ol(d);H&&v.push(H)}catch(V){Uo||V.name==="MissingIcon"&&console.error(V)}return v},[]);return new Promise(function(v,d){Promise.all(h).then(function(H){il(H,function(){t("active"),t("complete"),r("pending"),typeof c=="function"&&c(),f(),v()})}).catch(function(H){f(),d(H)})})}function ZA(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ol(e).then(function(a){a&&il([a],c)})}function QA(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(c||{}).icon?c:U9(c||{}),r=a.mask;return r&&(r=(r||{}).icon?r:U9(r||{})),e(t,q(q({},a),{},{mask:r}))}}var YA=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.transform,r=t===void 0?Y2:t,n=a.symbol,i=n===void 0?!1:n,o=a.mask,f=o===void 0?null:o,h=a.maskId,v=h===void 0?null:h,d=a.title,H=d===void 0?null:d,V=a.titleId,F=V===void 0?null:V,P=a.classes,I=P===void 0?[]:P,N=a.attributes,E=N===void 0?{}:N,U=a.styles,Z=U===void 0?{}:U;if(c){var a1=c.prefix,Q=c.iconName,g1=c.icon;return R5(q({type:"icon"},c),function(){return g4("beforeDOMElementCreation",{iconDefinition:c,params:a}),G.autoA11y&&(H?E["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(F||m0()):(E["aria-hidden"]="true",E.focusable="false")),Ve({icons:{main:$9(g1),mask:f?$9(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:a1,iconName:Q,transform:q(q({},Y2),r),symbol:i,title:H,maskId:v,titleId:F,extra:{attributes:E,styles:Z,classes:I}})})}},XA={mixout:function(){return{icon:QA(YA)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Cn,a.nodeCallback=ZA,a}}},provides:function(c){c.i2svg=function(a){var t=a.node,r=t===void 0?x1:t,n=a.callback,i=n===void 0?function(){}:n;return Cn(r,i)},c.generateSvgReplacementMutation=function(a,t){var r=t.iconName,n=t.title,i=t.titleId,o=t.prefix,f=t.transform,h=t.symbol,v=t.mask,d=t.maskId,H=t.extra;return new Promise(function(V,F){Promise.all([G9(r,o),v.iconName?G9(v.iconName,v.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var I=fe(P,2),N=I[0],E=I[1];V([a,Ve({icons:{main:N,mask:E},prefix:o,iconName:r,transform:f,symbol:h,maskId:d,title:n,titleId:i,extra:H,watchable:!0})])}).catch(F)})},c.generateAbstractIcon=function(a){var t=a.children,r=a.attributes,n=a.main,i=a.transform,o=a.styles,f=E5(o);f.length>0&&(r.style=f);var h;return pe(i)&&(h=h3("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),t.push(h||n.icon),{children:t,attributes:r}}}},JA={mixout:function(){return{layer:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.classes,n=r===void 0?[]:r;return R5({type:"layer"},function(){g4("beforeDOMElementCreation",{assembler:a,params:t});var i=[];return a(function(o){Array.isArray(o)?o.map(function(f){i=i.concat(f.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(S0(n)).join(" ")},children:i}]})}}}},c_={mixout:function(){return{counter:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.title,n=r===void 0?null:r,i=t.classes,o=i===void 0?[]:i,f=t.attributes,h=f===void 0?{}:f,v=t.styles,d=v===void 0?{}:v;return R5({type:"counter",content:a},function(){return g4("beforeDOMElementCreation",{content:a,params:t}),TA({content:a.toString(),title:n,extra:{attributes:h,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(S0(o))}})})}}}},e_={mixout:function(){return{text:function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?Y2:r,i=t.title,o=i===void 0?null:i,f=t.classes,h=f===void 0?[]:f,v=t.attributes,d=v===void 0?{}:v,H=t.styles,V=H===void 0?{}:H;return R5({type:"text",content:a},function(){return g4("beforeDOMElementCreation",{content:a,params:t}),dn({content:a,transform:q(q({},Y2),n),title:o,extra:{attributes:d,styles:V,classes:["".concat(G.cssPrefix,"-layers-text")].concat(S0(h))}})})}}},provides:function(c){c.generateLayersText=function(a,t){var r=t.title,n=t.transform,i=t.extra,o=null,f=null;if(Bo){var h=parseInt(getComputedStyle(a).fontSize,10),v=a.getBoundingClientRect();o=v.width/h,f=v.height/h}return G.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,dn({content:a.innerHTML,width:o,height:f,transform:n,title:r,extra:i,watchable:!0})])}}},a_=new RegExp('"',"ug"),Mn=[1105920,1112319];function t_(e){var c=e.replace(a_,""),a=pA(c,0),t=a>=Mn[0]&&a<=Mn[1],r=c.length===2?c[0]===c[1]:!1;return{value:B9(r?c[0]:c),isSecondary:t||r}}function Ln(e,c){var a="".concat(GN).concat(c.replace(":","-"));return new Promise(function(t,r){if(e.getAttribute(a)!==null)return t();var n=v6(e.children),i=n.filter(function(g1){return g1.getAttribute(F9)===c})[0],o=D3.getComputedStyle(e,c),f=o.getPropertyValue("font-family").match(QN),h=o.getPropertyValue("font-weight"),v=o.getPropertyValue("content");if(i&&!f)return e.removeChild(i),t();if(f&&v!=="none"&&v!==""){var d=o.getPropertyValue("content"),H=~["Sharp"].indexOf(f[2])?N1:b1,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?f0[H][f[2].toLowerCase()]:YN[H][h],F=t_(d),P=F.value,I=F.isSecondary,N=f[0].startsWith("FontAwesome"),E=He(V,P),U=E;if(N){var Z=LA(P);Z.iconName&&Z.prefix&&(E=Z.iconName,V=Z.prefix)}if(E&&!I&&(!i||i.getAttribute(ue)!==V||i.getAttribute(me)!==U)){e.setAttribute(a,U),i&&e.removeChild(i);var a1=WA(),Q=a1.extra;Q.attributes[F9]=c,G9(E,V).then(function(g1){var j1=Ve(q(q({},a1),{},{icons:{main:g1,mask:ge()},prefix:V,iconName:U,extra:Q,watchable:!0})),c2=x1.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(c2,e.firstChild):e.appendChild(c2),c2.outerHTML=j1.map(function(v2){return A0(v2)}).join(`