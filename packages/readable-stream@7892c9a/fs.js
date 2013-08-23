function rethrow(){if(DEBUG){var e=Error();return function(t){if(t)throw e.message=t.message,t=e}}return function(e){if(e)throw e}}function maybeCallback(e){return"function"==typeof e?e:rethrow()}function makeCallback(e){return"function"!=typeof e?rethrow():function(){return e.apply(null,arguments)}}function assertEncoding(e){if(e&&!Buffer.isEncoding(e))throw Error("Unknown encoding: "+e)}function nullCheck(e,t){if(-1!==(""+e).indexOf("\0")){var n=Error("Path must be a string without null bytes.");if(!t)throw n;return process.nextTick(function(){t(n)}),!1}return!0}function stringToFlags(e){if("string"!=typeof e)return e;if(!O_EXCL&&~e.indexOf("x"))throw errnoException("ENOSYS","fs.open(O_EXCL)");switch(e){case"r":return O_RDONLY;case"rs":return O_RDONLY|O_SYNC;case"r+":return O_RDWR;case"rs+":return O_RDWR|O_SYNC;case"w":return O_TRUNC|O_CREAT|O_WRONLY;case"wx":case"xw":return O_TRUNC|O_CREAT|O_WRONLY|O_EXCL;case"w+":return O_TRUNC|O_CREAT|O_RDWR;case"wx+":case"xw+":return O_TRUNC|O_CREAT|O_RDWR|O_EXCL;case"a":return O_APPEND|O_CREAT|O_WRONLY;case"ax":case"xa":return O_APPEND|O_CREAT|O_WRONLY|O_EXCL;case"a+":return O_APPEND|O_CREAT|O_RDWR;case"ax+":case"xa+":return O_APPEND|O_CREAT|O_RDWR|O_EXCL}throw Error("Unknown file open flag: "+e)}function modeNum(e,t){switch(typeof e){case"number":return e;case"string":return parseInt(e,8);default:return t?modeNum(t):void 0}}function preprocessSymlinkDestination(e,t){return isWindows?"junction"===t?pathModule._makeLong(e):(""+e).replace(/\//g,"\\"):e}function toUnixTimestamp(e){if("number"==typeof e)return e;if(e instanceof Date)return e.getTime()/1e3;throw Error("Cannot parse time: "+e)}function writeAll(e,t,n,i,a,r){r=maybeCallback(arguments[arguments.length-1]),fs.write(e,t,n,i,a,function(s,o){s?fs.close(e,function(){r&&r(s)}):o===i?fs.close(e,r):(n+=o,i-=o,a+=o,writeAll(e,t,n,i,a,r))})}function errnoException(e,t){var n=Error(t+" "+e);return n.errno=n.code=e,n.syscall=t,n}function FSWatcher(){EventEmitter.call(this);var e=this,t=process.binding("fs_event_wrap").FSEvent;this._handle=new t,this._handle.owner=this,this._handle.onchange=function(t,n,i){t?(e._handle.close(),e.emit("error",errnoException(errno,"watch"))):e.emit("change",n,i)}}function StatWatcher(){EventEmitter.call(this);var e=this;this._handle=new binding.StatWatcher;var t=-1;this._handle.onchange=function(n,i,a){(-1!==t||-1!==a||n.nlink!==i.nlink)&&(t=a,e.emit("change",n,i))},this._handle.onstop=function(){e.emit("stop")}}function inStatWatchers(e){return Object.prototype.hasOwnProperty.call(statWatchers,e)&&statWatchers[e]}function allocNewPool(){pool=new Buffer(kPoolSize),pool.used=0}function ReadStream(e,t){if(!(this instanceof ReadStream))return new ReadStream(e,t);if(t=util._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),Readable.call(this,t),this.path=e,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"r",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.end=t.hasOwnProperty("start")?t.end:void 0,this.pos=void 0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw Error("start must be <= end");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.on("end",function(){this.destroy()})}function WriteStream(e,t){if(!(this instanceof WriteStream))return new WriteStream(e,t);if(t=util._extend({bufferSize:65536,lowWaterMark:16384,highWaterMark:65536},t||{}),Writable.call(this,t),this.path=e,this.fd=null,this.fd=t.hasOwnProperty("fd")?t.fd:null,this.flags=t.hasOwnProperty("flags")?t.flags:"w",this.mode=t.hasOwnProperty("mode")?t.mode:438,this.start=t.hasOwnProperty("start")?t.start:void 0,this.pos=void 0,this.bytesWritten=0,void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(0>this.start)throw Error("start must be >= zero");this.pos=this.start}"number"!=typeof this.fd&&this.open(),this.once("finish",this.close)}function SyncWriteStream(e){Stream.call(this),this.fd=e,this.writable=!0,this.readable=!1}var util=require("util"),pathModule=require("path"),binding=process.binding("fs"),constants=process.binding("constants"),fs=exports,Stream=require("stream").Stream,EventEmitter=require("events").EventEmitter,Readable=require("./lib/_stream_readable.js"),Writable=require("./lib/_stream_writable.js"),kMinPoolSpace=128,kPoolSize=40960,O_APPEND=constants.O_APPEND||0,O_CREAT=constants.O_CREAT||0,O_DIRECTORY=constants.O_DIRECTORY||0,O_EXCL=constants.O_EXCL||0,O_NOCTTY=constants.O_NOCTTY||0,O_NOFOLLOW=constants.O_NOFOLLOW||0,O_RDONLY=constants.O_RDONLY||0,O_RDWR=constants.O_RDWR||0,O_SYMLINK=constants.O_SYMLINK||0,O_SYNC=constants.O_SYNC||0,O_TRUNC=constants.O_TRUNC||0,O_WRONLY=constants.O_WRONLY||0,isWindows="win32"===process.platform,DEBUG=process.env.NODE_DEBUG&&/fs/.test(process.env.NODE_DEBUG);fs.Stats=binding.Stats,fs.Stats.prototype._checkModeProperty=function(e){return(this.mode&constants.S_IFMT)===e},fs.Stats.prototype.isDirectory=function(){return this._checkModeProperty(constants.S_IFDIR)},fs.Stats.prototype.isFile=function(){return this._checkModeProperty(constants.S_IFREG)},fs.Stats.prototype.isBlockDevice=function(){return this._checkModeProperty(constants.S_IFBLK)},fs.Stats.prototype.isCharacterDevice=function(){return this._checkModeProperty(constants.S_IFCHR)},fs.Stats.prototype.isSymbolicLink=function(){return this._checkModeProperty(constants.S_IFLNK)},fs.Stats.prototype.isFIFO=function(){return this._checkModeProperty(constants.S_IFIFO)},fs.Stats.prototype.isSocket=function(){return this._checkModeProperty(constants.S_IFSOCK)},fs.exists=function(e,t){function n(e){t&&t(e?!1:!0)}nullCheck(e,n)&&binding.stat(pathModule._makeLong(e),n)},fs.existsSync=function(e){try{return nullCheck(e),binding.stat(pathModule._makeLong(e)),!0}catch(t){return!1}},fs.readFile=function(e,t){function n(){0===o?(l=new Buffer(8192),fs.read(u,l,0,8192,-1,i)):fs.read(u,l,h,o-h,-1,i)}function i(e,t){return e?fs.close(u,function(){return s(e)}):0===t?a():(h+=t,0!==o?h===o?a():n():(c.push(l.slice(0,t)),n()),void 0)}function a(){fs.close(u,function(e){return 0===o?l=Buffer.concat(c,h):o>h&&(l=l.slice(0,h)),r&&(l=l.toString(r)),s(e,l)})}var r="string"==typeof t?t:null,s=maybeCallback(arguments[arguments.length-1]);assertEncoding(r);var o,l,c,u,h=0;fs.open(e,constants.O_RDONLY,438,function(e,t){return e?s(e):(u=t,fs.fstat(u,function(e,t){return e?s(e):(o=t.size,0===o?(c=[],n()):(l=new Buffer(o),n(),void 0))}),void 0)})},fs.readFileSync=function(e,t){assertEncoding(t);var n,i=fs.openSync(e,constants.O_RDONLY,438),a=!0;try{n=fs.fstatSync(i).size,a=!1}finally{a&&fs.closeSync(i)}var r,s,o=0;0===n?s=[]:r=new Buffer(n);for(var l=!1;!l;){var a=!0;try{if(0!==n)var c=fs.readSync(i,r,o,n-o);else{r=new Buffer(8192);var c=fs.readSync(i,r,0,8192);c&&s.push(r.slice(0,c))}a=!1}finally{a&&fs.closeSync(i)}o+=c,l=0===c||0!==n&&o>=n}return fs.closeSync(i),0===n?r=Buffer.concat(s,o):n>o&&(r=r.slice(0,o)),t&&(r=r.toString(t)),r},Object.defineProperty(exports,"_stringToFlags",{enumerable:!1,value:stringToFlags}),fs.close=function(e,t){binding.close(e,makeCallback(t))},fs.closeSync=function(e){return binding.close(e)},fs.open=function(e,t,n,i){i=makeCallback(arguments[arguments.length-1]),n=modeNum(n,438),nullCheck(e,i)&&binding.open(pathModule._makeLong(e),stringToFlags(t),n,i)},fs.openSync=function(e,t,n){return n=modeNum(n,438),nullCheck(e),binding.open(pathModule._makeLong(e),stringToFlags(t),n)},fs.read=function(e,t,n,i,a,r){function s(e,n){r&&r(e,n||0,t)}if(!Buffer.isBuffer(t)){var o=arguments[4],l=arguments[3];assertEncoding(l),a=arguments[2],i=arguments[1],t=new Buffer(i),n=0,r=function(e,n){if(o){var i=n>0?t.toString(l,0,n):"";o(e,i,n)}}}binding.read(e,t,n,i,a,s)},fs.readSync=function(e,t,n,i,a){var r=!1;if(!Buffer.isBuffer(t)){r=!0;var s=arguments[3];assertEncoding(s),a=arguments[2],i=arguments[1],t=new Buffer(i),n=0}var o=binding.read(e,t,n,i,a);if(!r)return o;var l=o>0?t.toString(s,0,o):"";return[l,o]},fs.write=function(e,t,n,i,a,r){function s(e,n){r(e,n||0,t)}return Buffer.isBuffer(t)||(r=arguments[4],a=arguments[2],assertEncoding(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,i=t.length),i?(r=maybeCallback(r),binding.write(e,t,n,i,a,s),void 0):("function"==typeof r&&process.nextTick(function(){r(void 0,0)}),void 0)},fs.writeSync=function(e,t,n,i,a){return Buffer.isBuffer(t)||(a=arguments[2],assertEncoding(arguments[3]),t=new Buffer(""+arguments[1],arguments[3]),n=0,i=t.length),i?binding.write(e,t,n,i,a):0},fs.rename=function(e,t,n){n=makeCallback(n),nullCheck(e,n)&&nullCheck(t,n)&&binding.rename(pathModule._makeLong(e),pathModule._makeLong(t),n)},fs.renameSync=function(e,t){return nullCheck(e),nullCheck(t),binding.rename(pathModule._makeLong(e),pathModule._makeLong(t))},fs.truncate=function(e,t,n){return"number"==typeof e?fs.ftruncate(e,t,n):("function"==typeof t?(n=t,t=0):t===void 0&&(t=0),n=maybeCallback(n),fs.open(e,"w",function(e,i){return e?n(e):(binding.ftruncate(i,t,function(e){fs.close(i,function(t){n(e||t)})}),void 0)}),void 0)},fs.truncateSync=function(e,t){if("number"==typeof e)return fs.ftruncateSync(e,t);t===void 0&&(t=0);var n=fs.openSync(e,"w");try{var i=fs.ftruncateSync(n,t)}finally{fs.closeSync(n)}return i},fs.ftruncate=function(e,t,n){"function"==typeof t?(n=t,t=0):t===void 0&&(t=0),binding.ftruncate(e,t,makeCallback(n))},fs.ftruncateSync=function(e,t){return t===void 0&&(t=0),binding.ftruncate(e,t)},fs.rmdir=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.rmdir(pathModule._makeLong(e),t)},fs.rmdirSync=function(e){return nullCheck(e),binding.rmdir(pathModule._makeLong(e))},fs.fdatasync=function(e,t){binding.fdatasync(e,makeCallback(t))},fs.fdatasyncSync=function(e){return binding.fdatasync(e)},fs.fsync=function(e,t){binding.fsync(e,makeCallback(t))},fs.fsyncSync=function(e){return binding.fsync(e)},fs.mkdir=function(e,t,n){"function"==typeof t&&(n=t),n=makeCallback(n),nullCheck(e,n)&&binding.mkdir(pathModule._makeLong(e),modeNum(t,511),n)},fs.mkdirSync=function(e,t){return nullCheck(e),binding.mkdir(pathModule._makeLong(e),modeNum(t,511))},fs.sendfile=function(e,t,n,i,a){binding.sendfile(e,t,n,i,makeCallback(a))},fs.sendfileSync=function(e,t,n,i){return binding.sendfile(e,t,n,i)},fs.readdir=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.readdir(pathModule._makeLong(e),t)},fs.readdirSync=function(e){return nullCheck(e),binding.readdir(pathModule._makeLong(e))},fs.fstat=function(e,t){binding.fstat(e,makeCallback(t))},fs.lstat=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.lstat(pathModule._makeLong(e),t)},fs.stat=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.stat(pathModule._makeLong(e),t)},fs.fstatSync=function(e){return binding.fstat(e)},fs.lstatSync=function(e){return nullCheck(e),binding.lstat(pathModule._makeLong(e))},fs.statSync=function(e){return nullCheck(e),binding.stat(pathModule._makeLong(e))},fs.readlink=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.readlink(pathModule._makeLong(e),t)},fs.readlinkSync=function(e){return nullCheck(e),binding.readlink(pathModule._makeLong(e))},fs.symlink=function(e,t,n,i){var a="string"==typeof n?n:null,i=makeCallback(arguments[arguments.length-1]);nullCheck(e,i)&&nullCheck(t,i)&&binding.symlink(preprocessSymlinkDestination(e,a),pathModule._makeLong(t),a,i)},fs.symlinkSync=function(e,t,n){return n="string"==typeof n?n:null,nullCheck(e),nullCheck(t),binding.symlink(preprocessSymlinkDestination(e,n),pathModule._makeLong(t),n)},fs.link=function(e,t,n){n=makeCallback(n),nullCheck(e,n)&&nullCheck(t,n)&&binding.link(pathModule._makeLong(e),pathModule._makeLong(t),n)},fs.linkSync=function(e,t){return nullCheck(e),nullCheck(t),binding.link(pathModule._makeLong(e),pathModule._makeLong(t))},fs.unlink=function(e,t){t=makeCallback(t),nullCheck(e,t)&&binding.unlink(pathModule._makeLong(e),t)},fs.unlinkSync=function(e){return nullCheck(e),binding.unlink(pathModule._makeLong(e))},fs.fchmod=function(e,t,n){binding.fchmod(e,modeNum(t),makeCallback(n))},fs.fchmodSync=function(e,t){return binding.fchmod(e,modeNum(t))},constants.hasOwnProperty("O_SYMLINK")&&(fs.lchmod=function(e,t,n){n=maybeCallback(n),fs.open(e,constants.O_WRONLY|constants.O_SYMLINK,function(e,i){return e?(n(e),void 0):(fs.fchmod(i,t,function(e){fs.close(i,function(t){n(e||t)})}),void 0)})},fs.lchmodSync=function(e,t){var n,i,a=fs.openSync(e,constants.O_WRONLY|constants.O_SYMLINK);try{var r=fs.fchmodSync(a,t)}catch(s){n=s}try{fs.closeSync(a)}catch(s){i=s}if(n||i)throw n||i;return r}),fs.chmod=function(e,t,n){n=makeCallback(n),nullCheck(e,n)&&binding.chmod(pathModule._makeLong(e),modeNum(t),n)},fs.chmodSync=function(e,t){return nullCheck(e),binding.chmod(pathModule._makeLong(e),modeNum(t))},constants.hasOwnProperty("O_SYMLINK")&&(fs.lchown=function(e,t,n,i){i=maybeCallback(i),fs.open(e,constants.O_WRONLY|constants.O_SYMLINK,function(e,a){return e?(i(e),void 0):(fs.fchown(a,t,n,i),void 0)})},fs.lchownSync=function(e,t,n){var i=fs.openSync(e,constants.O_WRONLY|constants.O_SYMLINK);return fs.fchownSync(i,t,n)}),fs.fchown=function(e,t,n,i){binding.fchown(e,t,n,makeCallback(i))},fs.fchownSync=function(e,t,n){return binding.fchown(e,t,n)},fs.chown=function(e,t,n,i){i=makeCallback(i),nullCheck(e,i)&&binding.chown(pathModule._makeLong(e),t,n,i)},fs.chownSync=function(e,t,n){return nullCheck(e),binding.chown(pathModule._makeLong(e),t,n)},fs._toUnixTimestamp=toUnixTimestamp,fs.utimes=function(e,t,n,i){i=makeCallback(i),nullCheck(e,i)&&binding.utimes(pathModule._makeLong(e),toUnixTimestamp(t),toUnixTimestamp(n),i)},fs.utimesSync=function(e,t,n){nullCheck(e),t=toUnixTimestamp(t),n=toUnixTimestamp(n),binding.utimes(pathModule._makeLong(e),t,n)},fs.futimes=function(e,t,n,i){t=toUnixTimestamp(t),n=toUnixTimestamp(n),binding.futimes(e,t,n,makeCallback(i))},fs.futimesSync=function(e,t,n){t=toUnixTimestamp(t),n=toUnixTimestamp(n),binding.futimes(e,t,n)},fs.writeFile=function(e,t,n,i){var a="string"==typeof n?n:"utf8";assertEncoding(a),i=maybeCallback(arguments[arguments.length-1]),fs.open(e,"w",438,function(e,n){if(e)i&&i(e);else{var r=Buffer.isBuffer(t)?t:new Buffer(""+t,a);writeAll(n,r,0,r.length,0,i)}})},fs.writeFileSync=function(e,t,n){assertEncoding(n);var i=fs.openSync(e,"w");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var a=0,r=t.length;try{for(;r>a;)a+=fs.writeSync(i,t,a,r-a,a)}finally{fs.closeSync(i)}},fs.appendFile=function(e,t,n,i){var a="string"==typeof n?n:"utf8";assertEncoding(a),i=maybeCallback(arguments[arguments.length-1]),fs.open(e,"a",438,function(e,n){if(e)return i(e);var r=Buffer.isBuffer(t)?t:new Buffer(""+t,a);writeAll(n,r,0,r.length,null,i)})},fs.appendFileSync=function(e,t,n){assertEncoding(n);var i=fs.openSync(e,"a");Buffer.isBuffer(t)||(t=new Buffer(""+t,n||"utf8"));var a=0,r=null,s=t.length;try{for(;s>a;)a+=fs.writeSync(i,t,a,s-a,r),r+=a}finally{fs.closeSync(i)}},util.inherits(FSWatcher,EventEmitter),FSWatcher.prototype.start=function(e,t){nullCheck(e);var n=this._handle.start(pathModule._makeLong(e),t);if(n)throw this._handle.close(),errnoException(errno,"watch")},FSWatcher.prototype.close=function(){this._handle.close()},fs.watch=function(e){nullCheck(e);var t,n,i;return"object"==typeof arguments[1]?(n=arguments[1],i=arguments[2]):(n={},i=arguments[1]),void 0===n.persistent&&(n.persistent=!0),t=new FSWatcher,t.start(e,n.persistent),i&&t.addListener("change",i),t},util.inherits(StatWatcher,EventEmitter),StatWatcher.prototype.start=function(e,t,n){nullCheck(e),this._handle.start(pathModule._makeLong(e),t,n)},StatWatcher.prototype.stop=function(){this._handle.stop()};var statWatchers={};fs.watchFile=function(e){nullCheck(e);var t,n,i={interval:5007,persistent:!0};if("object"==typeof arguments[1]?(i=util._extend(i,arguments[1]),n=arguments[2]):n=arguments[1],!n)throw Error("watchFile requires a listener function");return inStatWatchers(e)?t=statWatchers[e]:(t=statWatchers[e]=new StatWatcher,t.start(e,i.persistent,i.interval)),t.addListener("change",n),t},fs.unwatchFile=function(e,t){if(nullCheck(e),inStatWatchers(e)){var n=statWatchers[e];"function"==typeof t?n.removeListener("change",t):n.removeAllListeners("change"),0===n.listeners("change").length&&(n.stop(),statWatchers[e]=void 0)}};var normalize=pathModule.normalize;if(isWindows)var nextPartRe=/(.*?)(?:[\/\\]+|$)/g;else var nextPartRe=/(.*?)(?:[\/]+|$)/g;if(isWindows)var splitRootRe=/^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;else var splitRootRe=/^[\/]*/;fs.realpathSync=function(e,t){function n(){var t=splitRootRe.exec(e);i=t[0].length,a=t[0],r=t[0],s="",isWindows&&!c[r]&&(fs.lstatSync(r),c[r]=!0)}if(e=pathModule.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return t[e];var i,a,r,s,o=e,l={},c={};for(n();e.length>i;){nextPartRe.lastIndex=i;var u=nextPartRe.exec(e);if(s=a,a+=u[0],r=s+u[1],i=nextPartRe.lastIndex,!(c[r]||t&&t[r]===r)){var h;if(t&&Object.prototype.hasOwnProperty.call(t,r))h=t[r];else{var d=fs.lstatSync(r);if(!d.isSymbolicLink()){c[r]=!0,t&&(t[r]=r);continue}var p=null;if(!isWindows){var g=d.dev.toString(32)+":"+d.ino.toString(32);l.hasOwnProperty(g)&&(p=l[g])}null===p&&(fs.statSync(r),p=fs.readlinkSync(r)),h=pathModule.resolve(s,p),t&&(t[r]=h),isWindows||(l[g]=p)}e=pathModule.resolve(h,e.slice(i)),n()}}return t&&(t[o]=e),e},fs.realpath=function(e,t,n){function i(){var t=splitRootRe.exec(e);l=t[0].length,c=t[0],u=t[0],h="",isWindows&&!g[u]?fs.lstat(u,function(e){return e?n(e):(g[u]=!0,a(),void 0)}):process.nextTick(a)}function a(){if(l>=e.length)return t&&(t[d]=e),n(null,e);nextPartRe.lastIndex=l;var i=nextPartRe.exec(e);return h=c,c+=i[0],u=h+i[1],l=nextPartRe.lastIndex,g[u]||t&&t[u]===u?process.nextTick(a):t&&Object.prototype.hasOwnProperty.call(t,u)?o(t[u]):fs.lstat(u,r)}function r(e,i){if(e)return n(e);if(!i.isSymbolicLink())return g[u]=!0,t&&(t[u]=u),process.nextTick(a);if(!isWindows){var r=i.dev.toString(32)+":"+i.ino.toString(32);if(p.hasOwnProperty(r))return s(null,p[r],u)}fs.stat(u,function(e){return e?n(e):(fs.readlink(u,function(e,t){isWindows||(p[r]=t),s(e,t)}),void 0)})}function s(e,i,a){if(e)return n(e);var r=pathModule.resolve(h,i);t&&(t[a]=r),o(r)}function o(t){e=pathModule.resolve(t,e.slice(l)),i()}if("function"!=typeof n&&(n=maybeCallback(t),t=null),e=pathModule.resolve(e),t&&Object.prototype.hasOwnProperty.call(t,e))return process.nextTick(n.bind(null,null,t[e]));var l,c,u,h,d=e,p={},g={};i()};var pool;fs.createReadStream=function(e,t){return new ReadStream(e,t)},util.inherits(ReadStream,Readable),fs.ReadStream=ReadStream,fs.FileReadStream=fs.ReadStream,ReadStream.prototype.open=function(){var e=this;fs.open(this.path,this.flags,this.mode,function(t,n){return t?(e.destroy(),e.emit("error",t),void 0):(e.fd=n,e.emit("open",n),e.read(),void 0)})},ReadStream.prototype._read=function(e,t){function n(e,n){if(e)return s.destroy(),t(e);var a=null;n>0&&(a=i.slice(r,r+n)),t(null,a)}if("number"!=typeof this.fd)return this.once("open",function(){this._read(e,t)});if(!this.destroyed){(!pool||kMinPoolSpace>pool.length-pool.used)&&(pool=null,allocNewPool());var i=pool,a=Math.min(pool.length-pool.used,e),r=pool.used;if(void 0!==this.pos&&(a=Math.min(this.end-this.pos+1,a)),0>=a)return t();var s=this;fs.read(this.fd,pool,pool.used,a,this.pos,n),void 0!==this.pos&&(this.pos+=a),pool.used+=a}},ReadStream.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,"number"==typeof this.fd&&this.close())},ReadStream.prototype.close=function(e){function t(){fs.close(n.fd,function(e){e?n.emit("error",e):n.emit("close")})}if(e&&this.once("close",e),this.closed||"number"!=typeof this.fd)return"number"!=typeof this.fd&&this.once("open",t),process.nextTick(this.emit.bind(this,"close"));this.closed=!0;var n=this;t()},fs.createWriteStream=function(e,t){return new WriteStream(e,t)},util.inherits(WriteStream,Writable),fs.WriteStream=WriteStream,fs.FileWriteStream=fs.WriteStream,WriteStream.prototype.open=function(){fs.open(this.path,this.flags,this.mode,function(e,t){return e?(this.destroy(),this.emit("error",e),void 0):(this.fd=t,this.emit("open",t),void 0)}.bind(this))},WriteStream.prototype._write=function(e,t){return Buffer.isBuffer(e)?"number"!=typeof this.fd?this.once("open",this._write.bind(this,e,t)):(fs.write(this.fd,e,0,e.length,this.pos,function(e,n){return e?(this.destroy(),t(e)):(this.bytesWritten+=n,t(),void 0)}.bind(this)),void 0!==this.pos&&(this.pos+=e.length),void 0):this.emit("error",Error("Invalid data"))},WriteStream.prototype.destroy=ReadStream.prototype.destroy,WriteStream.prototype.close=ReadStream.prototype.close,WriteStream.prototype.destroySoon=WriteStream.prototype.end,util.inherits(SyncWriteStream,Stream),fs.SyncWriteStream=SyncWriteStream,SyncWriteStream.prototype.write=function(e,t,n){var i,a;if(t)if("string"==typeof t)i=t,a=n;else{if("function"!=typeof t)throw Error("bad arg");a=t}return assertEncoding(i),"string"==typeof e&&(e=new Buffer(e,i)),fs.writeSync(this.fd,e,0,e.length),a&&process.nextTick(a),!0},SyncWriteStream.prototype.end=function(e,t,n){e&&this.write(e,t,n),this.destroy()},SyncWriteStream.prototype.destroy=function(){return fs.closeSync(this.fd),this.fd=null,this.emit("close"),!0},SyncWriteStream.prototype.destroySoon=SyncWriteStream.prototype.destroy;