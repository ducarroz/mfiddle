function WriteReq(e,t,n){this.chunk=e,this.encoding=t,this.callback=n}function WritableState(e,t){e=e||{};var n=e.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.objectMode=!!e.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=e.decodeStrings===!1;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){onwrite(t,e)},this.writecb=null,this.writelen=0,this.buffer=[]}function Writable(e){return this instanceof Writable||this instanceof require("./_stream_duplex")?(this._writableState=new WritableState(e,this),this.writable=!0,Stream.call(this),void 0):new Writable(e)}function writeAfterEnd(e,t,n){var a=Error("write after end");e.emit("error",a),process.nextTick(function(){n(a)})}function validChunk(e,t,n,a){var i=!0;if(!Buffer.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!t.objectMode){var r=new TypeError("Invalid non-string/buffer chunk");e.emit("error",r),process.nextTick(function(){a(r)}),i=!1}return i}function decodeChunk(e,t,n){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new Buffer(t,n)),t}function writeOrBuffer(e,t,n,a,i){n=decodeChunk(t,n,a);var r=t.objectMode?1:n.length;t.length+=r;var s=t.length<t.highWaterMark;return t.needDrain=!s,t.writing?t.buffer.push(new WriteReq(n,a,i)):doWrite(e,t,r,n,a,i),s}function doWrite(e,t,n,a,i,r){t.writelen=n,t.writecb=r,t.writing=!0,t.sync=!0,e._write(a,i,t.onwrite),t.sync=!1}function onwriteError(e,t,n,a,i){n?process.nextTick(function(){i(a)}):i(a),e.emit("error",a)}function onwriteStateUpdate(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function onwrite(e,t){var n=e._writableState,a=n.sync,i=n.writecb;if(onwriteStateUpdate(n),t)onwriteError(e,n,a,t,i);else{var r=needFinish(e,n);r||n.bufferProcessing||!n.buffer.length||clearBuffer(e,n),a?process.nextTick(function(){afterWrite(e,n,r,i)}):afterWrite(e,n,r,i)}}function afterWrite(e,t,n,a){n||onwriteDrain(e,t),a(),n&&finishMaybe(e,t)}function onwriteDrain(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function clearBuffer(e,t){t.bufferProcessing=!0;for(var n=0;t.buffer.length>n;n++){var a=t.buffer[n],i=a.chunk,r=a.encoding,s=a.callback,o=t.objectMode?1:i.length;if(doWrite(e,t,o,i,r,s),t.writing){n++;break}}t.bufferProcessing=!1,t.buffer.length>n?t.buffer=t.buffer.slice(n):t.buffer.length=0}function needFinish(e,t){return t.ending&&0===t.length&&!t.finished&&!t.writing}function finishMaybe(e,t){var n=needFinish(e,t);return n&&(t.finished=!0,e.emit("finish")),n}function endWritable(e,t,n){t.ending=!0,finishMaybe(e,t),n&&(t.finished?process.nextTick(n):e.once("finish",n)),t.ended=!0}module.exports=Writable,Writable.WritableState=WritableState;var util=require("util"),assert=require("assert"),Stream=require("stream");util.inherits(Writable,Stream),Writable.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},Writable.prototype.write=function(e,t,n){var a=this._writableState,i=!1;return"function"==typeof t&&(n=t,t=null),Buffer.isBuffer(e)?t="buffer":t||(t=a.defaultEncoding),"function"!=typeof n&&(n=function(){}),a.ended?writeAfterEnd(this,a,n):validChunk(this,a,e,n)&&(i=writeOrBuffer(this,a,e,t,n)),i},Writable.prototype._write=function(e,t,n){n(Error("not implemented"))},Writable.prototype.end=function(e,t,n){var a=this._writableState;"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),e!==void 0&&null!==e&&this.write(e,t),a.ending||a.finished||endWritable(this,a,n)};