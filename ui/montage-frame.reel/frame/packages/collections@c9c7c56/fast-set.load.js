montageDefine("c9c7c56","fast-set",{dependencies:["./shim","./dict","./list","./generic-collection","./generic-set","./tree-log","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(e,t,n,r){return this instanceof i?(t=t||Object.equals,n=n||Object.hash,r=r||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=r,this.buckets=new this.Buckets(null,this.Bucket),this.length=0,this.addEach(e),void 0):new i(e,t,n,r)}e("./shim");var r=e("./dict"),a=e("./list"),o=e("./generic-collection"),s=e("./generic-set"),l=e("./tree-log"),u=e("./listen/property-changes");Object.prototype.hasOwnProperty,n.exports=i,Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,u.prototype),i.prototype.Buckets=r,i.prototype.Bucket=a,i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.has=function(e){var t=this.contentHash(e);return this.buckets.get(t).has(e)},i.prototype.get=function(e){var t=this.contentHash(e),n=this.buckets;return n.has(t)?n.get(t).get(e):this.getDefault(e)},i.prototype["delete"]=function(e){var t=this.contentHash(e),n=this.buckets;if(n.has(t)){var i=n.get(t);if(i["delete"](e))return this.length--,0===i.length&&n["delete"](t),!0}return!1},i.prototype.clear=function(){this.buckets.clear(),this.length=0},i.prototype.add=function(e){var t=this.contentHash(e),n=this.buckets;return n.has(t)||n.set(t,new this.Bucket(null,this.contentEquals)),n.get(t).has(e)?!1:(n.get(t).add(e),this.length++,!0)},i.prototype.reduce=function(e,t){var n=arguments[2],i=this.buckets,r=0;return i.reduce(function(t,i){return i.reduce(function(t,i){return e.call(n,t,i,r++,this)},t,this)},t,this)},i.prototype.one=function(){return this.length>0?this.buckets.one().one():void 0},i.prototype.iterate=function(){return this.buckets.values().flatten().iterate()},i.prototype.log=function(e,t,n,i){e=e||l.unicodeSharp,t=t||this.logNode,n||(n=console.log,i=console),n=n.bind(i);var r=this.buckets,a=r.keys();a.forEach(function(o,s){var l,u;s===a.length-1?(l=e.fromAbove,u=" "):0===s?(l=e.branchDown,u=e.strafe):(l=e.fromBoth,u=e.strafe);var c=r.get(o);n.call(i,l+e.through+e.branchDown+" "+o),c.forEach(function(r,a){var o,s;a===c.head.prev?(o=e.fromAbove,s=" "):(o=e.fromBoth,s=e.strafe);var l;t(a,function(t){l?n.call(i,u+" "+s+"  "+t):(n.call(i,u+" "+o+e.through+e.through+t),l=!0)},function(t){n.call(i,u+" "+e.strafe+"  "+t)})})})},i.prototype.logNode=function(e,t){var n=e.value;Object(n)===n?JSON.stringify(n,null,4).split("\n").forEach(function(e){t(" "+e)}):t(" "+n)}}});