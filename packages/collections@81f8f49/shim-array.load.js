montageDefine("81f8f49","shim-array",{dependencies:["./shim-function","./generic-collection","./generic-order","weak-map"],factory:function(e,t,n){"use strict";function i(e,t){Object.defineProperty(Array.prototype,e,{value:t,writable:!0,configurable:!0,enumerable:!1})}function r(e,t,n){this.array=e,this.start=null==t?0:t,this.end=n}e("./shim-function");var a=e("./generic-collection"),o=e("./generic-order"),s=e("weak-map");n.exports=Array,Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(e){var t=[];return t.addEach(e),t},Array.unzip=function(e){for(var t=[],n=1/0,i=0;e.length>i;i++){var r=e[i];e[i]=r.toArray(),n>r.length&&(n=r.length)}for(var i=0;e.length>i;i++)for(var r=e[i],a=0;r.length>a;a++)n>a&&a in r&&(t[a]=t[a]||[],t[a][i]=r[a]);return t},i("addEach",a.prototype.addEach),i("deleteEach",a.prototype.deleteEach),i("toArray",a.prototype.toArray),i("toObject",a.prototype.toObject),i("all",a.prototype.all),i("any",a.prototype.any),i("min",a.prototype.min),i("max",a.prototype.max),i("sum",a.prototype.sum),i("average",a.prototype.average),i("only",a.prototype.only),i("flatten",a.prototype.flatten),i("zip",a.prototype.zip),i("enumerate",a.prototype.enumerate),i("group",a.prototype.group),i("sorted",a.prototype.sorted),i("reversed",a.prototype.reversed),i("constructClone",function(e){var t=new this.constructor;return t.addEach(e),t}),i("has",function(e,t){return-1!==this.find(e,t)}),i("get",function(e,t){if(+e!==e)throw Error("Indicies must be numbers");return!e in this?t:this[e]}),i("set",function(e,t){return this.splice(e,1,t),!0}),i("add",function(e){return this.push(e),!0}),i("delete",function(e,t){var n=this.find(e,t);return-1!==n?(this.splice(n,1),!0):!1}),i("find",function(e,t){t=t||this.contentEquals||Object.equals;for(var n=0;this.length>n;n++)if(n in this&&t(this[n],e))return n;return-1}),i("findLast",function(e,t){t=t||this.contentEquals||Object.equals;var n=this.length;do if(n--,n in this&&t(this[n],e))return n;while(n>0);return-1}),i("swap",function(e,t,n){var i=Array.prototype.slice.call(arguments,0,2);return n&&(Array.isArray(n)||(n=Array.prototype.slice.call(n)),i.push.apply(i,n)),this.splice.apply(this,i)}),i("one",function(){for(var e in this)if(Object.owns(this,e))return this[e]}),i("clear",function(){return this.length=0,this}),i("compare",function(e,t){t=t||Object.compare;var n,i,r,a,s;if(this===e)return 0;if(!e||!Array.isArray(e))return o.prototype.compare.call(this,e,t);for(i=Math.min(this.length,e.length),n=0;i>n;n++)if(n in this){if(!(n in e))return-1;if(r=this[n],a=e[n],s=t(r,a))return s}else if(n in e)return 1;return this.length-e.length}),i("equals",function(e,t){t=t||Object.equals;var n,i,r=0,a=this.length;if(this===e)return!0;if(!e||!Array.isArray(e))return o.prototype.equals.call(this,e);if(a!==e.length)return!1;for(;a>r;++r)if(r in this){if(!(r in e))return!1;if(n=this[r],i=e[r],!t(n,i))return!1}else if(r in e)return!1;return!0}),i("clone",function(e,t){if(void 0===e)e=1/0;else if(0===e)return this;t=t||new s;var n=[];for(var i in this)Object.owns(this,i)&&(n[i]=Object.clone(this[i],e-1,t));return n}),i("iterate",function(e,t){return new r(this,e,t)}),i("Iterator",r),r.prototype.next=function(){if(this.start===(null==this.end?this.array.length:this.end))throw StopIteration;return this.array[this.start++]}}});