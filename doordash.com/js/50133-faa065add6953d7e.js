"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50133],{15761:function(a,b,c){c.d(b,{j:function(){return g}});var d=c(33989),e=c(32161);class f extends d.l{constructor(){super(),this.setup=a=>{if(!e.sk&&window.addEventListener){let b=()=>a();return window.addEventListener("visibilitychange",b,!1),window.addEventListener("focus",b,!1),()=>{window.removeEventListener("visibilitychange",b),window.removeEventListener("focus",b)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var a;null==(a=this.cleanup)||a.call(this),this.cleanup=void 0}}setEventListener(a){var b;this.setup=a,null==(b=this.cleanup)||b.call(this),this.cleanup=a(a=>{"boolean"==typeof a?this.setFocused(a):this.onFocus()})}setFocused(a){this.focused=a,a&&this.onFocus()}onFocus(){this.listeners.forEach(a=>{a()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let g=new f},30819:function(a,b,c){c.d(b,{"_":function(){return d}});let d=console},89886:function(a,b,c){c.d(b,{R:function(){return i},m:function(){return h}});var d=c(30819),e=c(30081),f=c(89643),g=c(72379);class h extends f.F{constructor(a){super(),this.defaultOptions=a.defaultOptions,this.mutationId=a.mutationId,this.mutationCache=a.mutationCache,this.logger=a.logger||d._,this.observers=[],this.state=a.state||i(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options={...this.defaultOptions,...a},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(a){this.dispatch({type:"setState",state:a})}addObserver(a){-1===this.observers.indexOf(a)&&(this.observers.push(a),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){this.observers=this.observers.filter(b=>b!==a),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var a,b;return null!=(a=null==(b=this.retryer)?void 0:b.continue())?a:this.execute()}async execute(){var a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await(null==(j=(k=this.mutationCache.config).onMutate)?void 0:j.call(k,this.state.variables,this));let w=await(null==(l=(m=this.options).onMutate)?void 0:l.call(m,this.state.variables));w!==this.state.context&&this.dispatch({type:"loading",context:w,variables:this.state.variables})}let x=await(()=>{var a;return this.retryer=(0,g.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(a,b)=>{this.dispatch({type:"failed",failureCount:a,error:b})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(a=this.options.retry)?a:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await(null==(a=(b=this.mutationCache.config).onSuccess)?void 0:a.call(b,x,this.state.variables,this.state.context,this)),await(null==(c=(d=this.options).onSuccess)?void 0:c.call(d,x,this.state.variables,this.state.context)),await(null==(e=(f=this.mutationCache.config).onSettled)?void 0:e.call(f,x,null,this.state.variables,this.state.context,this)),await(null==(h=(i=this.options).onSettled)?void 0:h.call(i,x,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:x}),x}catch(y){try{throw await(null==(n=(o=this.mutationCache.config).onError)?void 0:n.call(o,y,this.state.variables,this.state.context,this)),await(null==(p=(q=this.options).onError)?void 0:p.call(q,y,this.state.variables,this.state.context)),await(null==(r=(s=this.mutationCache.config).onSettled)?void 0:r.call(s,void 0,y,this.state.variables,this.state.context,this)),await(null==(t=(u=this.options).onSettled)?void 0:t.call(u,void 0,y,this.state.variables,this.state.context)),y}finally{this.dispatch({type:"error",error:y})}}}dispatch(a){this.state=(b=>{switch(a.type){case"failed":return{...b,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...b,isPaused:!0};case"continue":return{...b,isPaused:!1};case"loading":return{...b,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,g.Kw)(this.options.networkMode),status:"loading",variables:a.variables};case"success":return{...b,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...b,data:void 0,error:a.error,failureCount:b.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"};case"setState":return{...b,...a.state}}})(this.state),e.V.batch(()=>{this.observers.forEach(b=>{b.onMutationUpdate(a)}),this.mutationCache.notify({mutation:this,type:"updated",action:a})})}}function i(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},30081:function(a,b,c){c.d(b,{V:function(){return e}});var d=c(32161);let e=function(){let a=[],b=0,c=a=>{a()},e=a=>{a()},f=a=>{let c;b++;try{c=a()}finally{--b||i()}return c},g=e=>{b?a.push(e):(0,d.A4)(()=>{c(e)})},h=a=>(...b)=>{g(()=>{a(...b)})},i=()=>{let b=a;a=[],b.length&&(0,d.A4)(()=>{e(()=>{b.forEach(a=>{c(a)})})})},j=a=>{c=a},k=a=>{e=a};return{batch:f,batchCalls:h,schedule:g,setNotifyFunction:j,setBatchNotifyFunction:k}}()},96474:function(a,b,c){c.d(b,{N:function(){return g}});var d=c(33989),e=c(32161);class f extends d.l{constructor(){super(),this.setup=a=>{if(!e.sk&&window.addEventListener){let b=()=>a();return window.addEventListener("online",b,!1),window.addEventListener("offline",b,!1),()=>{window.removeEventListener("online",b),window.removeEventListener("offline",b)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var a;null==(a=this.cleanup)||a.call(this),this.cleanup=void 0}}setEventListener(a){var b;this.setup=a,null==(b=this.cleanup)||b.call(this),this.cleanup=a(a=>{"boolean"==typeof a?this.setOnline(a):this.onOnline()})}setOnline(a){this.online=a,a&&this.onOnline()}onOnline(){this.listeners.forEach(a=>{a()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let g=new f},89643:function(a,b,c){c.d(b,{F:function(){return e}});var d=c(32161);class e{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,d.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(a){this.cacheTime=Math.max(this.cacheTime||0,null!=a?a:d.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},72379:function(a,b,c){c.d(b,{DV:function(){return j},Kw:function(){return h},Mz:function(){return k}});var d=c(15761),e=c(96474),f=c(32161);function g(a){return Math.min(1e3*2**a,3e4)}function h(a){return(null!=a?a:"online")!=="online"||e.N.isOnline()}class i{constructor(a){this.revert=null==a?void 0:a.revert,this.silent=null==a?void 0:a.silent}}function j(a){return a instanceof i}function k(a){let b=!1,c=0,j=!1,k,l,m,n=new Promise((a,b)=>{l=a,m=b}),o=b=>{j||(t(new i(b)),null==a.abort||a.abort())},p=()=>{b=!0},q=()=>{b=!1},r=()=>!d.j.isFocused()||"always"!==a.networkMode&&!e.N.isOnline(),s=b=>{j||(j=!0,null==a.onSuccess||a.onSuccess(b),null==k||k(),l(b))},t=b=>{j||(j=!0,null==a.onError||a.onError(b),null==k||k(),m(b))},u=()=>new Promise(b=>{k=a=>{let c=j||!r();return c&&b(a),c},null==a.onPause||a.onPause()}).then(()=>{k=void 0,j||null==a.onContinue||a.onContinue()}),v=()=>{if(j)return;let d;try{d=a.fn()}catch(e){d=Promise.reject(e)}Promise.resolve(d).then(s).catch(d=>{var e,h;if(j)return;let i=null!=(e=a.retry)?e:3,k=null!=(h=a.retryDelay)?h:g,l="function"==typeof k?k(c,d):k,m=!0===i||"number"==typeof i&&c<i||"function"==typeof i&&i(c,d);if(b||!m){t(d);return}c++,null==a.onFail||a.onFail(c,d),(0,f.Gh)(l).then(()=>{if(r())return u()}).then(()=>{b?t(d):v()})})};return h(a.networkMode)?v():u().then(v),{promise:n,cancel:o,continue:()=>{let a=null==k?void 0:k();return a?n:Promise.resolve()},cancelRetry:p,continueRetry:q}}},33989:function(a,b,c){c.d(b,{l:function(){return d}});class d{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.push(a),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(b=>b!==a),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},32161:function(a,b,c){c.d(b,{A4:function(){return z},G9:function(){return A},Gh:function(){return y},I6:function(){return k},Kp:function(){return h},PN:function(){return g},Rm:function(){return o},SE:function(){return f},VS:function(){return t},X7:function(){return n},ZT:function(){return e},"_v":function(){return i},"_x":function(){return m},cb:function(){return l},lV:function(){return j},oE:function(){return B},sk:function(){return d},to:function(){return q},yF:function(){return p}});let d="undefined"==typeof window||"Deno"in window;function e(){}function f(a,b){return"function"==typeof a?a(b):a}function g(a){return"number"==typeof a&&a>=0&&a!==1/0}function h(a,b){return Math.max(a+(b||0)-Date.now(),0)}function i(a,b,c){return x(a)?"function"==typeof b?{...c,queryKey:a,queryFn:b}:{...b,queryKey:a}:a}function j(a,b,c){return x(a)?"function"==typeof b?{...c,mutationKey:a,mutationFn:b}:{...b,mutationKey:a}:"function"==typeof a?{...b,mutationFn:a}:{...a}}function k(a,b,c){return x(a)?[{...b,queryKey:a},c]:[a||{},b]}function l(a,b,c){return x(a)?[{...b,mutationKey:a},c]:[a||{},b]}function m(a,b){let{type:c="all",exact:d,fetchStatus:e,predicate:f,queryKey:g,stale:h}=a;if(x(g)){if(d){if(b.queryHash!==o(g,b.options))return!1}else{var i,j;if(i=b.queryKey,j=g,!r(i,j))return!1}}if("all"!==c){let k=b.isActive();if("active"===c&&!k||"inactive"===c&&k)return!1}return("boolean"!=typeof h||b.isStale()===h)&&(void 0===e||e===b.state.fetchStatus)&&(!f||!!f(b))}function n(a,b){let{exact:c,fetching:d,predicate:e,mutationKey:f}=a;if(x(f)){if(!b.options.mutationKey)return!1;if(c){if(p(b.options.mutationKey)!==p(f))return!1}else{var g,h;if(g=b.options.mutationKey,h=f,!r(g,h))return!1}}return("boolean"!=typeof d||"loading"===b.state.status===d)&&(!e||!!e(b))}function o(a,b){let c=(null==b?void 0:b.queryKeyHashFn)||p;return c(a)}function p(a){return JSON.stringify(a,(a,b)=>v(b)?Object.keys(b).sort().reduce((a,c)=>(a[c]=b[c],a),{}):b)}function q(a,b){return r(a,b)}function r(a,b){return a===b||typeof a==typeof b&&!!a&&!!b&&"object"==typeof a&&"object"==typeof b&&!Object.keys(b).some(c=>!r(a[c],b[c]))}function s(a,b){if(a===b)return a;let c=u(a)&&u(b);if(c||v(a)&&v(b)){let d=c?a.length:Object.keys(a).length,e=c?b:Object.keys(b),f=e.length,g=c?[]:{},h=0;for(let i=0;i<f;i++){let j=c?i:e[i];g[j]=s(a[j],b[j]),g[j]===a[j]&&h++}return d===f&&h===d?a:g}return b}function t(a,b){if(a&&!b||b&&!a)return!1;for(let c in a)if(a[c]!==b[c])return!1;return!0}function u(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function v(a){if(!w(a))return!1;let b=a.constructor;if(void 0===b)return!0;let c=b.prototype;return!!(w(c)&&c.hasOwnProperty("isPrototypeOf"))}function w(a){return"[object Object]"===Object.prototype.toString.call(a)}function x(a){return Array.isArray(a)}function y(a){return new Promise(b=>{setTimeout(b,a)})}function z(a){y(0).then(a)}function A(){if("function"==typeof AbortController)return new AbortController}function B(a,b,c){return null!=c.isDataEqual&&c.isDataEqual(a,b)?a:"function"==typeof c.structuralSharing?c.structuralSharing(a,b):!1!==c.structuralSharing?s(a,b):b}},85945:function(a,b,c){c.d(b,{NL:function(){return h},aH:function(){return i}});var d=c(67294);let e=d.createContext(void 0),f=d.createContext(!1);function g(a,b){return a||(b&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=e),window.ReactQueryClientContext):e)}let h=({context:a}={})=>{let b=d.useContext(g(a,d.useContext(f)));if(!b)throw Error("No QueryClient set, use QueryClientProvider to set one");return b},i=({client:a,children:b,context:c,contextSharing:e=!1})=>{d.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]);let h=g(c,e);return d.createElement(f.Provider,{value:!c&&e},d.createElement(h.Provider,{value:a},b))}}}])