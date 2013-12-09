montageDefine("1b63201","lib/_stream_writable",{dependencies:["util","assert","stream","./_stream_duplex"],factory:function(e,t,n){function i(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function r(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var i=e.decodeStrings===!1;this.decodeStrings=!i,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){p(t,e)},this.writecb=null,this.writelen=0,this.buffer=[]}function a(t){return this instanceof a||this instanceof e("./_stream_duplex")?(this._writableState=new r(t,this),this.writable=!0,w.call(this),void 0):new a(t)}function o(e,t,n){var i=Error("write after end");e.emit("error",i),process.nextTick(function(){n(i)})}function s(e,t,n,i){var r=!0;if(!Buffer.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk");e.emit("error",a),process.nextTick(function(){i(a)}),r=!1}return r}function l(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,n)),t}function u(e,t,n,r,a){n=l(t,n,r);var o=t.objectMode?1:n.length;t.length+=o;var s=t.length<t.highWaterMark;return t.needDrain=!s,t.writing?t.buffer.push(new i(n,r,a)):c(e,t,o,n,r,a),s}function c(e,t,n,i,r,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,e._write(i,r,t.onwrite),t.sync=!1}function h(e,t,n,i,r){n?process.nextTick(function(){r(i)}):r(i),e.emit("error",i)}function d(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function p(e,t){var n=e._writableState,i=n.sync,r=n.writecb;if(d(n),t)h(e,n,i,t,r);else{var a=g(e,n);a||n.bufferProcessing||!n.buffer.length||v(e,n),i?process.nextTick(function(){f(e,n,a,r)}):f(e,n,a,r)}}function f(e,t,n,i){n||m(e,t),i(),n&&_(e,t)}function m(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function v(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var i=t.buffer[n],r=i.chunk,a=i.encoding,o=i.callback,s=t.objectMode?1:r.length;if(c(e,t,s,r,a,o),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function g(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function _(e,t){var n=g(e,t);return n&&(t.finished=!0,e.emit("finish")),n}function b(e,t,n){t.ending=!0,_(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}n.exports=a,a.WritableState=r;var y=e("util");e("assert");var w=e("stream");y.inherits(a,w),a.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},a.prototype.write=function(e,t,n){var i=this._writableState,r=!1;return"function"==typeof t&&(n=t,t=null),Buffer.isBuffer(e)?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof n&&(n=function(){}),i.ended?o(this,i,n):s(this,i,e,n)&&(r=u(this,i,e,t,n)),r},a.prototype._write=function(e,t,n){n(Error("not implemented"))},a.prototype.end=function(e,t,n){var i=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),i.ending||i.finished||b(this,i,n)}}});