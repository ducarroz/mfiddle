var common=require("../common"),assert=require("assert"),stream=require("../../readable");(function(){var e=1e3,t=new stream.Readable;t._read=function(n){n=Math.min(e,n),e-=n,t.push(new Buffer(n))};var n;t.unpipe=function(e){n=e,stream.Readable.prototype.unpipe.call(this,e)};var i=new stream.Writable;i._write=function(e,t,n){n()},t.pipe(i);var r=null;i.on("error",function(e){r=e});var a;i.on("unpipe",function(e){a=e});var o=Error("This stream turned into bacon.");i.emit("error",o),assert.strictEqual(r,o),assert.strictEqual(a,t),assert.strictEqual(n,i)})(),function(){var e=1e3,t=new stream.Readable;t._read=function(n){n=Math.min(e,n),e-=n,t.push(new Buffer(n))};var n;t.unpipe=function(e){n=e,stream.Readable.prototype.unpipe.call(this,e)};var i=new stream.Writable;i._write=function(e,t,n){n()},t.pipe(i);var r;i.on("unpipe",function(e){r=e});var a=Error("This stream turned into bacon."),o=null;try{i.emit("error",a)}catch(s){o=s}assert.strictEqual(o,a),assert.strictEqual(r,t),assert.strictEqual(n,i)}();