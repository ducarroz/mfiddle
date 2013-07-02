(function(e){if("function"==typeof bootstrap)bootstrap("promise",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=e}else Q=e()})(function(){"use strict";function e(e){var t=Function.call;return function(){return t.apply(e,arguments)}}function t(e){return e===Object(e)}function n(e){return"[object StopIteration]"===_t(e)||e instanceof st}function i(e,t){if(rt&&t.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(yt)){for(var n=[],i=t;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(e.stack);var a=n.join("\n"+yt+"\n");e.stack=r(a)}}function r(e){for(var t=e.split("\n"),n=[],i=0;t.length>i;++i){var r=t[i];s(r)||a(r)||!r||n.push(r)}return n.join("\n")}function a(e){return-1!==e.indexOf("(module.js:")||-1!==e.indexOf("(node.js:")}function o(e){var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if(t)return[t[1],Number(t[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(e);return i?[i[1],Number(i[2])]:void 0}function s(e){var t=o(e);if(!t)return!1;var n=t[0],i=t[1];return n===ot&&i>=lt&&xt>=i}function l(){if(rt)try{throw Error()}catch(e){var t=e.stack.split("\n"),n=t[0].indexOf("@")>0?t[1]:t[2],i=o(n);if(!i)return;return ot=i[0],i[1]}}function u(e,t,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t+" is deprecated, use "+n+" instead.",Error("").stack),e.apply(e,arguments)}}function c(e){return P(e)}function h(){function e(e){t=e,a.source=e,dt(n,function(t,n){ct(function(){e.promiseDispatch.apply(e,n)})},void 0),n=void 0,i=void 0}var t,n=[],i=[],r=ft(h.prototype),a=ft(p.prototype);if(a.promiseDispatch=function(e,r,a){var o=ht(arguments);n?(n.push(o),"when"===r&&a[1]&&i.push(a[1])):ct(function(){t.promiseDispatch.apply(t,o)})},a.valueOf=u(function(){if(n)return a;var e=m(t);return f(e)&&(t=e),e},"valueOf","inspect"),a.inspect=function(){return t?t.inspect():{state:"pending"}},c.longStackSupport&&rt)try{throw Error()}catch(o){a.stack=o.stack.substring(o.stack.indexOf("\n")+1)}return r.promise=a,r.resolve=function(n){t||e(P(n))},r.fulfill=function(n){t||e(x(n))},r.reject=function(n){t||e(T(n))},r.notify=function(e){t||dt(i,function(t,n){ct(function(){n(e)})},void 0)},r}function d(e){if("function"!=typeof e)throw new TypeError("resolver must be a function.");var t=h();return F(e,t.resolve,t.reject,t.notify).fail(t.reject),t.promise}function p(e,t,n){void 0===t&&(t=function(e){return T(Error("Promise does not support operation: "+e))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=ft(p.prototype);if(i.promiseDispatch=function(n,r,a){var o;try{o=e[r]?e[r].apply(i,a):t.call(i,r,a)}catch(s){o=T(s)}n&&n(o)},i.inspect=n,n){var r=n();"rejected"===r.state&&(i.exception=r.reason),i.valueOf=u(function(){var e=n();return"pending"===e.state||"rejected"===e.state?i:e.value})}return i}function m(e){if(f(e)){var t=e.inspect();if("fulfilled"===t.state)return t.value}return e}function f(e){return t(e)&&"function"==typeof e.promiseDispatch&&"function"==typeof e.inspect}function v(e){return t(e)&&"function"==typeof e.then}function g(e){return f(e)&&"pending"===e.inspect().state}function _(e){return!f(e)||"fulfilled"===e.inspect().state}function b(e){return f(e)&&"rejected"===e.inspect().state}function y(){Ct||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",wt),Ct=!0}function w(){for(var e=0;wt.length>e;e++){var t=wt[e];t&&t.stack!==void 0?console.warn("Unhandled rejection reason:",t.stack):console.warn("Unhandled rejection reason (no stack):",t)}}function E(){wt.length=0,Et.length=0,Ct=!1,St||(St=!0,"undefined"!=typeof process&&process.on&&process.on("exit",w))}function C(e,t){St&&(Et.push(e),wt.push(t),y())}function S(e){if(St){var t=pt(Et,e);-1!==t&&(Et.splice(t,1),wt.splice(t,1))}}function T(e){var t=p({when:function(t){return t&&S(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return C(t,e),t}function x(e){return p({when:function(){return e},get:function(t){return e[t]},set:function(t,n){e[t]=n},"delete":function(t){delete e[t]},post:function(t,n){return null===t||void 0===t?e.apply(void 0,n):e[t].apply(e,n)},apply:function(t,n){return e.apply(t,n)},keys:function(){return gt(e)}},void 0,function(){return{state:"fulfilled",value:e}})}function P(e){return f(e)?e:v(e)?D(e):x(e)}function D(e){var t=h();return ct(function(){try{e.then(t.resolve,t.reject,t.notify)}catch(n){t.reject(n)}}),t.promise}function M(e){return p({isDef:function(){}},function(t,n){return j(e,t,n)},function(){return P(e).inspect()})}function L(e,t,n,i){return c(e).then(t,n,i)}function O(e,t,n){return L(e,function(e){return W(e).then(function(e){return t.apply(void 0,e)},n)},n)}function k(e){return function(){function t(e,t){var o;if(bt){try{o=i[e](t)}catch(s){return T(s)}return o.done?o.value:L(o.value,r,a)}try{o=i[e](t)}catch(s){return n(s)?s.value:T(s)}return L(o,r,a)}var i=e.apply(this,arguments),r=t.bind(t,"send"),a=t.bind(t,"throw");return r()}}function z(e){c.done(c.async(e)())}function A(e){throw new st(e)}function I(e){return function(){return O([this,W(arguments)],function(t,n){return e.apply(t,n)})}}function j(e,t,n){var i=h();return ct(function(){P(e).promiseDispatch(i.resolve,t,n)}),i.promise}function N(e){return function(t){var n=ht(arguments,1);return j(t,e,n)}}function R(e,t){var n=ht(arguments,2);return Tt(e,t,n)}function B(e,t){return j(e,"apply",[void 0,t])}function F(e){var t=ht(arguments,1);return B(e,t)}function q(e){var t=ht(arguments,1);return function(){var n=t.concat(ht(arguments));return j(e,"apply",[this,n])}}function W(e){return L(e,function(e){var t=0,n=h();return dt(e,function(i,r,a){var o;f(r)&&"fulfilled"===(o=r.inspect()).state?e[a]=o.value:(++t,L(r,function(i){e[a]=i,0===--t&&n.resolve(e)},n.reject))},void 0),0===t&&n.resolve(e),n.promise})}function V(e){return L(e,function(e){return e=mt(e,P),L(W(mt(e,function(e){return L(e,ut,ut)})),function(){return e})})}function U(e){return L(e,function(e){return W(mt(e,function(t,n){return L(t,function(t){return e[n]={state:"fulfilled",value:t},e[n]},function(t){return e[n]={state:"rejected",reason:t},e[n]})})).thenResolve(e)})}function H(e,t){return L(e,void 0,t)}function Y(e,t){return L(e,void 0,void 0,t)}function K(e,t){return L(e,function(e){return L(t(),function(){return e})},function(e){return L(t(),function(){return T(e)})})}function X(e,t,n,r){var a=function(t){ct(function(){if(i(t,e),!c.onerror)throw t;c.onerror(t)})},o=t||n||r?L(e,t,n,r):e;"object"==typeof process&&process&&process.domain&&(a=process.domain.bind(a)),H(o,a)}function G(e,t,n){var i=h(),r=setTimeout(function(){i.reject(Error(n||"Timed out after "+t+" ms"))},t);return L(e,function(e){clearTimeout(r),i.resolve(e)},function(e){clearTimeout(r),i.reject(e)},i.notify),i.promise}function $(e,t){void 0===t&&(t=e,e=void 0);var n=h();return L(e,void 0,void 0,n.notify),setTimeout(function(){n.resolve(e)},t),n.promise}function J(e,t){var n=ht(t),i=h();return n.push(i.makeNodeResolver()),B(e,n).fail(i.reject),i.promise}function Z(e){var t=ht(arguments,1),n=h();return t.push(n.makeNodeResolver()),B(e,t).fail(n.reject),n.promise}function Q(e){var t=ht(arguments,1);return function(){var n=t.concat(ht(arguments)),i=h();return n.push(i.makeNodeResolver()),B(e,n).fail(i.reject),i.promise}}function et(e,t){var n=ht(arguments,2);return function(){function i(){return e.apply(t,arguments)}var r=n.concat(ht(arguments)),a=h();return r.push(a.makeNodeResolver()),B(i,r).fail(a.reject),a.promise}}function tt(e,t,n){var i=ht(n||[]),r=h();return i.push(r.makeNodeResolver()),Tt(e,t,i).fail(r.reject),r.promise}function nt(e,t){var n=ht(arguments,2),i=h();return n.push(i.makeNodeResolver()),Tt(e,t,n).fail(i.reject),i.promise}function it(e,t){return t?(e.then(function(e){ct(function(){t(null,e)})},function(e){ct(function(){t(e)})}),void 0):e}var rt=!1;try{throw Error()}catch(at){rt=!!at.stack}var ot,st,lt=l(),ut=function(){},ct=function(){function e(){for(;t.next;){t=t.next;var n=t.task;t.task=void 0;var r=t.domain;r&&(t.domain=void 0,r.enter());try{n()}catch(o){if(a)throw r&&r.exit(),setTimeout(e,0),r&&r.enter(),o;setTimeout(function(){throw o},0)}r&&r.exit()}i=!1}var t={task:void 0,next:null},n=t,i=!1,r=void 0,a=!1;if(ct=function(e){n=n.next={task:e,domain:a&&process.domain,next:null},i||(i=!0,r())},"undefined"!=typeof process&&process.nextTick)a=!0,r=function(){process.nextTick(e)};else if("function"==typeof setImmediate)r="undefined"!=typeof window?setImmediate.bind(window,e):function(){setImmediate(e)};else if("undefined"!=typeof MessageChannel){var o=new MessageChannel;o.port1.onmessage=e,r=function(){o.port2.postMessage(0)}}else r=function(){setTimeout(e,0)};return ct}(),ht=e(Array.prototype.slice),dt=e(Array.prototype.reduce||function(e,t){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){t=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(t=e(t,this[n],n));return t}),pt=e(Array.prototype.indexOf||function(e){for(var t=0;this.length>t;t++)if(this[t]===e)return t;return-1}),mt=e(Array.prototype.map||function(e,t){var n=this,i=[];return dt(n,function(r,a,o){i.push(e.call(t,a,o,n))},void 0),i}),ft=Object.create||function(e){function t(){}return t.prototype=e,new t},vt=e(Object.prototype.hasOwnProperty),gt=Object.keys||function(e){var t=[];for(var n in e)vt(e,n)&&t.push(n);return t},_t=e(Object.prototype.toString);st="undefined"!=typeof ReturnValue?ReturnValue:function(e){this.value=e};var bt;try{Function("(function* (){ yield 1; })"),bt=!0}catch(at){bt=!1}var yt="From previous event:";c.nextTick=ct,c.longStackSupport=!1,c.defer=h,h.prototype.makeNodeResolver=function(){var e=this;return function(t,n){t?e.reject(t):arguments.length>2?e.resolve(ht(arguments,1)):e.resolve(n)}},c.promise=d,c.makePromise=p,p.prototype.then=function(e,t,n){function r(t){try{return"function"==typeof e?e(t):t}catch(n){return T(n)}}function a(e){if("function"==typeof t){i(e,s);try{return t(e)}catch(n){return T(n)}}return T(e)}function o(e){return"function"==typeof n?n(e):e}var s=this,l=h(),u=!1;return ct(function(){s.promiseDispatch(function(e){u||(u=!0,l.resolve(r(e)))},"when",[function(e){u||(u=!0,l.resolve(a(e)))}])}),s.promiseDispatch(void 0,"when",[void 0,function(e){var t,n=!1;try{t=o(e)}catch(i){if(n=!0,!c.onerror)throw i;c.onerror(i)}n||l.notify(t)}]),l.promise},p.prototype.thenResolve=function(e){return L(this,function(){return e})},p.prototype.thenReject=function(e){return L(this,function(){throw e})},dt(["isFulfilled","isRejected","isPending","dispatch","when","spread","get","set","del","delete","post","send","mapply","invoke","mcall","keys","fapply","fcall","fbind","all","allResolved","timeout","delay","catch","finally","fail","fin","progress","done","nfcall","nfapply","nfbind","denodeify","nbind","npost","nsend","nmapply","ninvoke","nmcall","nodeify"],function(e,t){p.prototype[t]=function(){return c[t].apply(c,[this].concat(ht(arguments)))}},void 0),p.prototype.toSource=function(){return""+this},p.prototype.toString=function(){return"[object Promise]"},c.nearer=m,c.isPromise=f,c.isPromiseAlike=v,c.isPending=g,c.isFulfilled=_,c.isRejected=b;var wt=[],Et=[],Ct=!1,St=!0;c.resetUnhandledRejections=E,c.getUnhandledReasons=function(){return wt.slice()},c.stopUnhandledRejectionTracking=function(){E(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",w),St=!1},E(),c.reject=T,c.fulfill=x,c.resolve=P,c.master=M,c.when=L,c.spread=O,c.async=k,c.spawn=z,c["return"]=A,c.promised=I,c.dispatch=j,c.dispatcher=N,c.get=N("get"),c.set=N("set"),c["delete"]=c.del=N("delete");var Tt=c.post=N("post");c.mapply=Tt,c.send=R,c.invoke=R,c.mcall=R,c.fapply=B,c["try"]=F,c.fcall=F,c.fbind=q,c.keys=N("keys"),c.all=W,c.allResolved=u(V,"allResolved","allSettled"),c.allSettled=U,c["catch"]=c.fail=H,c.progress=Y,c["finally"]=c.fin=K,c.done=X,c.timeout=G,c.delay=$,c.nfapply=J,c.nfcall=Z,c.nfbind=Q,c.denodeify=c.nfbind,c.nbind=et,c.npost=tt,c.nmapply=tt,c.nsend=nt,c.ninvoke=c.nsend,c.nmcall=c.nsend,c.nodeify=it;var xt=l();return c});