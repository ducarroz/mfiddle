montageDefine("81f8f49","listen/array-changes",{dependencies:["../shim","../list","weak-map","./property-changes","./range-changes","./map-changes"],factory:function(e){function t(e){for(var t in e)Object.defineProperty(Array.prototype,t,{value:e[t],writable:!0,configurable:!0,enumerable:!1})}e("../shim"),e("../list"),e("weak-map");var n=e("./property-changes"),i=e("./range-changes"),r=e("./map-changes"),a=Array.prototype.splice,o=Array.prototype.slice;Array.prototype.reverse;var s,l=Array.prototype.sort,u={}.__proto__===Object.prototype;s=u?function(){this.__proto__=h}:function(){Object.defineProperties(this,c)},Object.defineProperty(Array.prototype,"makeObservable",{value:s,writable:!0,configurable:!0,enumerable:!1}),t(n.prototype),t(i.prototype),t(r.prototype);var c={isObservable:{value:!0,writable:!0,configurable:!0},makeObservable:{value:Function.noop,writable:!0,configurable:!0},reverse:{value:function(){var e=this.constructClone(this);return e.reverse(),this.swap(0,this.length,e),this},writable:!0,configurable:!0},sort:{value:function(){this.dispatchBeforeRangeChange(this,this,0);for(var e=0;this.length>e;e++)n.dispatchBeforeOwnPropertyChange(this,e,this[e]),this.dispatchBeforeMapChange(e,this[e]);l.apply(this,arguments);for(var e=0;this.length>e;e++)n.dispatchOwnPropertyChange(this,e,this[e]),this.dispatchMapChange(e,this[e]);return this.dispatchRangeChange(this,this,0),this},writable:!0,configurable:!0},splice:{value:function(e,t){var i=o.call(this,e,e+t),r=o.call(arguments,2);if(!i.length&&!r.length)return r;var s=r.length-i.length,l=this.length,u=Math.max(this.length+s,e+r.length),c=Math.max(l,u);if(s&&n.dispatchBeforeOwnPropertyChange(this,"length",this.length),this.dispatchBeforeRangeChange(r,i,e),0===s)for(var h=e;e+r.length>h;h++)n.dispatchBeforeOwnPropertyChange(this,h,this[h]),this.dispatchBeforeMapChange(h,this[h]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var h=e;c>h;h++)n.dispatchBeforeOwnPropertyChange(this,h,this[h]),this.dispatchBeforeMapChange(h,this[h]);e>l&&(this.length=e);var d=a.apply(this,arguments);if(0===s)for(var h=e;e+r.length>h;h++)n.dispatchOwnPropertyChange(this,h,this[h]),this.dispatchMapChange(h,this[h]);else if(n.hasOwnPropertyChangeDescriptor(this))for(var h=e;c>h;h++)n.dispatchOwnPropertyChange(this,h,this[h]),this.dispatchMapChange(h,this[h]);return this.dispatchRangeChange(r,i,e),s&&n.dispatchOwnPropertyChange(this,"length",this.length),d},writable:!0,configurable:!0},set:{value:function(e,t){return this.splice(e,1,t),this},writable:!0,configurable:!0},shift:{value:function(){return this.splice(0,1)[0]},writable:!0,configurable:!0},pop:{value:function(){return this.length?this.splice(this.length-1,1)[0]:void 0},writable:!0,configurable:!0},push:{value:function(e){if(1===arguments.length)return this.splice(this.length,0,e);var t=o.call(arguments);return this.swap(this.length,0,t)},writable:!0,configurable:!0},unshift:{value:function(e){if(1===arguments.length)return this.splice(0,0,e);var t=o.call(arguments);return this.swap(0,0,t)},writable:!0,configurable:!0},clear:{value:function(){return this.splice(0,this.length)},writable:!0,configurable:!0}},h=Object.create(Array.prototype,c)}});