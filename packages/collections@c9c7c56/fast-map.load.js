montageDefine("c9c7c56","fast-map",{dependencies:["./shim","./fast-set","./generic-collection","./generic-map","./listen/property-changes"],factory:function(e,t,n){"use strict";function i(e,t,n,a){return this instanceof i?(t=t||Object.equals,n=n||Object.hash,a=a||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=a,this.store=new r(void 0,function(e,n){return t(e.key,n.key)},function(e){return n(e.key)}),this.length=0,this.addEach(e),void 0):new i(e,t,n,a)}e("./shim");var r=e("./fast-set"),a=e("./generic-collection"),o=e("./generic-map"),s=e("./listen/property-changes");n.exports=i,Object.addEach(i.prototype,a.prototype),Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,s.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},i.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},i.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)}}});