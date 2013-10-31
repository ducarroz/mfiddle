montageDefine("81f8f49","iterator",{dependencies:["./shim-object","./generic-collection"],factory:function(e,t,n){"use strict";function i(e){if(!(this instanceof i))return new i(e);if(Array.isArray(e)||"string"==typeof e)return i.iterate(e);if(e=r(e),e instanceof i)return e;if(e.next)this.next=function(){return e.next()};else if(e.iterate){var t=e.iterate();this.next=function(){return t.next()}}else{if("[object Function]"!==r.prototype.toString.call(e))throw new TypeError("Can't iterate "+e);this.next=e}}n.exports=i;var r=e("./shim-object"),a=e("./generic-collection");i.prototype.forEach=a.prototype.forEach,i.prototype.map=a.prototype.map,i.prototype.filter=a.prototype.filter,i.prototype.every=a.prototype.every,i.prototype.some=a.prototype.some,i.prototype.any=a.prototype.any,i.prototype.all=a.prototype.all,i.prototype.min=a.prototype.min,i.prototype.max=a.prototype.max,i.prototype.sum=a.prototype.sum,i.prototype.average=a.prototype.average,i.prototype.flatten=a.prototype.flatten,i.prototype.zip=a.prototype.zip,i.prototype.enumerate=a.prototype.enumerate,i.prototype.sorted=a.prototype.sorted,i.prototype.group=a.prototype.group,i.prototype.reversed=a.prototype.reversed,i.prototype.toArray=a.prototype.toArray,i.prototype.toObject=a.prototype.toObject,i.prototype.iterator=a.prototype.iterator,i.prototype.constructClone=function(e){var t=[];return t.addEach(e),t},i.prototype.mapIterator=function(e){var t=i(this),n=arguments[1],a=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){return e.call(n,t.next(),a++,t)})},i.prototype.filterIterator=function(e){var t=i(this),n=arguments[1],a=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){for(var i;;)if(i=t.next(),e.call(n,i,a++,t))return i})},i.prototype.reduce=function(e){var t,n=i(this),a=arguments[1],o=arguments[2],s=0;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;try{t=n.next(),a=arguments.length>1?e.call(o,a,t,s,n):t,s++}catch(l){if(isStopIteration(l)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw l}try{for(;;)t=n.next(),a=e.call(o,a,t,s,n),s++}catch(l){if(isStopIteration(l))return a;throw l}},i.prototype.concat=function(){return i.concat(Array.prototype.concat.apply(this,arguments))},i.prototype.dropWhile=function(e){var t,n=i(this),a=arguments[1],o=!1;if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return n.forEach(function(i,r){if(!e.call(a,i,r,n))throw o=!0,t=i,StopIteration}),o?n.constructor([t]).concat(n):n.constructor([])},i.prototype.takeWhile=function(e){var t=i(this),n=arguments[1];if("[object Function]"!=r.prototype.toString.call(e))throw new TypeError;return t.mapIterator(function(i,r){if(!e.call(n,i,r,t))throw StopIteration;return i})},i.prototype.zipIterator=function(){return i.unzip(Array.prototype.concat.apply(this,arguments))},i.prototype.enumerateIterator=function(e){return i.count(e).zipIterator(this)},i.iterate=function(e){var t;return t=0,new i(function(){if("object"==typeof e)for(;!(t in e);){if(t>=e.length)throw StopIteration;t+=1}else if(t>=e.length)throw StopIteration;var n=e[t];return t+=1,n})},i.cycle=function(e,t){2>arguments.length&&(t=1/0);var n=function(){throw StopIteration};return new i(function(){var r;try{return n()}catch(a){if(isStopIteration(a)){if(0>=t)throw a;return t--,r=i.iterate(e),n=r.next.bind(r),n()}throw a}})},i.concat=function(e){e=i(e);var t=function(){throw StopIteration};return new i(function(){var n;try{return t()}catch(r){if(isStopIteration(r))return n=i(e.next()),t=n.next.bind(n),t();throw r}})},i.unzip=function(e){return e=i(e).map(i),0===e.length?new i([]):new i(function(){var t,n=e.map(function(e){try{return e.next()}catch(n){if(!isStopIteration(n))throw n;t=!0}});if(t)throw StopIteration;return n})},i.zip=function(){return i.unzip(Array.prototype.slice.call(arguments))},i.chain=function(){return i.concat(Array.prototype.slice.call(arguments))},i.range=function(e,t,n){return 3>arguments.length&&(n=1),2>arguments.length&&(t=e,e=0),e=e||0,n=n||1,new i(function(){if(e>=t)throw StopIteration;var i=e;return e+=n,i})},i.count=function(e,t){return i.range(e,1/0,t)},i.repeat=function(e,t){return new i.range(t).mapIterator(function(){return e})},"undefined"==typeof isStopIteration&&(global.isStopIteration=function(e){return"[object StopIteration]"===r.prototype.toString.call(e)}),"undefined"==typeof StopIteration&&(global.StopIteration={},r.prototype.toString=function(e){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":e.call(this,arguments)}}(r.prototype.toString)),o===void 0&&(global.ReturnValue=function o(e){return this.message="Iteration stopped with "+e,Error.captureStackTrace&&Error.captureStackTrace(this,o),this instanceof global.ReturnValue?(this.value=e,void 0):new global.ReturnValue(e)},o.prototype=Error.prototype)}});