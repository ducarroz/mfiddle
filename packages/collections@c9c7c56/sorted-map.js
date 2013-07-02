"use strict";function SortedMap(e,t,n,i){return this instanceof SortedMap?(t=t||Object.equals,n=n||Object.compare,i=i||Function.noop,this.contentEquals=t,this.contentCompare=n,this.getDefault=i,this.store=new SortedSet(null,function(e,n){return t(e.key,n.key)},function(e,t){return n(e.key,t.key)}),this.length=0,this.addEach(e),void 0):new SortedMap(e,t,n,i)}var Shim=require("./shim"),SortedSet=require("./sorted-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=SortedMap,Object.addEach(SortedMap.prototype,GenericCollection.prototype),Object.addEach(SortedMap.prototype,GenericMap.prototype),Object.addEach(SortedMap.prototype,PropertyChanges.prototype),SortedMap.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},SortedMap.prototype.log=function(e,t,n,i){t=t||this.logNode,this.store.log(e,function(e,n,i){t(e.value,n,i)},n,i)},SortedMap.prototype.logNode=function(e,t){t(" key: "+e.key),t(" value: "+e.value)};