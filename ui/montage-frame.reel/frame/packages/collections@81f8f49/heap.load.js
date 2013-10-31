montageDefine("81f8f49","heap",{dependencies:["./listen/array-changes","./shim","./generic-collection","./listen/map-changes","./listen/range-changes","./listen/property-changes"],factory:function(e,t,n){function i(e,t,n){return this instanceof i?(this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.content=[],this.length=0,this.addEach(e),void 0):new i(e,t,n)}e("./listen/array-changes"),e("./shim");var r=e("./generic-collection"),a=e("./listen/map-changes"),o=e("./listen/range-changes"),s=e("./listen/property-changes");n.exports=i,Object.addEach(i.prototype,r.prototype),Object.addEach(i.prototype,s.prototype),Object.addEach(i.prototype,o.prototype),Object.addEach(i.prototype,a.prototype),i.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare)},i.prototype.push=function(e){this.content.push(e),this.float(this.content.length-1),this.length++},i.prototype.pop=function(){var e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content.set(0,t),this.sink(0)),this.length--,e},i.prototype.add=function(e){this.push(e)},i.prototype.indexOf=function(e){for(var t=0;this.length>t;t++)if(this.contentEquals(this.content[t],e))return t;return-1},i.prototype.delete=function(e){var t=this.indexOf(e);if(-1===t)return!1;var n=this.content.pop();if(t===this.content.length)return!0;this.content.set(t,n);var i=this.contentCompare(n,e);return i>0?this.float(t):0>i&&this.sink(t),this.length--,!0},i.prototype.peek=function(){return this.length?this.content[0]:void 0},i.prototype.max=function(){return this.peek()},i.prototype.one=function(){return this.peek()},i.prototype.float=function(e){for(var t=this.content[e];e>0;){var n=Math.floor((e+1)/2)-1,i=this.content[n];if(!(0>this.contentCompare(i,t)))break;this.content.set(n,t),this.content.set(e,i),e=n}},i.prototype.sink=function(e){for(var t,n,i,r,a,o,s=this.content.length,l=this.content[e];;){if(r=2*(e+1),i=r-1,o=!1,s>i){var t=this.content[i],u=this.contentCompare(t,l);u>0&&(a=i,o=!0)}if(s>r){var n=this.content[r],u=this.contentCompare(n,o?t:l);u>0&&(a=r,o=!0)}if(!o)break;this.content.set(e,this.content[a]),this.content.set(a,l),e=a}},i.prototype.clear=function(){this.content.clear(),this.length=0},i.prototype.reduce=function(e,t){var n=arguments[2];return this.content.reduce(function(t,i,r){return e.call(n,t,i,r,this)},t,this)},i.prototype.reduceRight=function(e,t){var n=arguments[2];return this.content.reduceRight(function(t,i,r){return e.call(n,t,i,r,this)},t,this)},i.prototype.makeObservable=function(){this.content.addRangeChangeListener(this,"content"),this.content.addBeforeRangeChangeListener(this,"content"),this.content.addMapChangeListener(this,"content"),this.content.addBeforeMapChangeListener(this,"content")},i.prototype.handleContentRangeChange=function(e,t,n){this.dispatchRangeChange(e,t,n)},i.prototype.handleContentRangeWillChange=function(e,t,n){this.dispatchBeforeRangeChange(e,t,n)},i.prototype.handleContentMapChange=function(e,t){this.dispatchMapChange(t,e)},i.prototype.handleContentMapWillChange=function(e,t){this.dispatchBeforeMapChange(t,e)}}});