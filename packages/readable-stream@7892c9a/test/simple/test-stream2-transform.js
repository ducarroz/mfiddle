function test(e,t){count++,tests.push([e,t])}function run(){var e=tests.shift();if(!e)return console.error("ok");var t=e[0],n=e[1];console.log("# %s",t),n({same:assert.deepEqual,equal:assert.equal,ok:assert,end:function(){count--,run()}})}var assert=require("assert"),common=require("../common.js"),PassThrough=require("../../lib/_stream_passthrough"),Transform=require("../../lib/_stream_transform"),tests=[],count=0;process.on("exit",function(){assert.equal(count,0)}),process.nextTick(run),test("writable side consumption",function(e){var t=new Transform({highWaterMark:10}),n=0;t._transform=function(e,i,r){n+=e.length,t.push(e),r()};for(var i=1;10>=i;i++)t.write(new Buffer(i));t.end(),e.equal(t._readableState.length,10),e.equal(n,10),e.equal(t._transformState.writechunk.length,5),e.same(t._writableState.buffer.map(function(e){return e.chunk.length}),[6,7,8,9,10]),e.end()}),test("passthrough",function(e){var t=new PassThrough;t.write(new Buffer("foog")),t.write(new Buffer("bark")),t.write(new Buffer("bazy")),t.write(new Buffer("kuel")),t.end(),e.equal(""+t.read(5),"foogb"),e.equal(""+t.read(5),"arkba"),e.equal(""+t.read(5),"zykue"),e.equal(""+t.read(5),"l"),e.end()}),test("simple transform",function(e){var t=new Transform;t._transform=function(e,n,i){var r=new Buffer(e.length);r.fill("x"),t.push(r),i()},t.write(new Buffer("foog")),t.write(new Buffer("bark")),t.write(new Buffer("bazy")),t.write(new Buffer("kuel")),t.end(),e.equal(""+t.read(5),"xxxxx"),e.equal(""+t.read(5),"xxxxx"),e.equal(""+t.read(5),"xxxxx"),e.equal(""+t.read(5),"x"),e.end()}),test("async passthrough",function(e){var t=new Transform;t._transform=function(e,n,i){setTimeout(function(){t.push(e),i()},10)},t.write(new Buffer("foog")),t.write(new Buffer("bark")),t.write(new Buffer("bazy")),t.write(new Buffer("kuel")),t.end(),t.on("finish",function(){e.equal(""+t.read(5),"foogb"),e.equal(""+t.read(5),"arkba"),e.equal(""+t.read(5),"zykue"),e.equal(""+t.read(5),"l"),e.end()})}),test("assymetric transform (expand)",function(e){var t=new Transform;t._transform=function(e,n,i){setTimeout(function(){t.push(e),setTimeout(function(){t.push(e),i()},10)},10)},t.write(new Buffer("foog")),t.write(new Buffer("bark")),t.write(new Buffer("bazy")),t.write(new Buffer("kuel")),t.end(),t.on("finish",function(){e.equal(""+t.read(5),"foogf"),e.equal(""+t.read(5),"oogba"),e.equal(""+t.read(5),"rkbar"),e.equal(""+t.read(5),"kbazy"),e.equal(""+t.read(5),"bazyk"),e.equal(""+t.read(5),"uelku"),e.equal(""+t.read(5),"el"),e.end()})}),test("assymetric transform (compress)",function(e){var t=new Transform;t.state="",t._transform=function(e,n,i){e||(e="");var r=""+e;setTimeout(function(){this.state+=r.charAt(0),3===this.state.length&&(t.push(new Buffer(this.state)),this.state=""),i()}.bind(this),10)},t._flush=function(e){t.push(new Buffer(this.state)),this.state="",e()},t.write(new Buffer("aaaa")),t.write(new Buffer("bbbb")),t.write(new Buffer("cccc")),t.write(new Buffer("dddd")),t.write(new Buffer("eeee")),t.write(new Buffer("aaaa")),t.write(new Buffer("bbbb")),t.write(new Buffer("cccc")),t.write(new Buffer("dddd")),t.write(new Buffer("eeee")),t.write(new Buffer("aaaa")),t.write(new Buffer("bbbb")),t.write(new Buffer("cccc")),t.write(new Buffer("dddd")),t.end(),t.on("finish",function(){e.equal(""+t.read(5),"abcde"),e.equal(""+t.read(5),"abcde"),e.equal(""+t.read(5),"abcd"),e.end()})}),test("passthrough event emission",function(e){var t=new PassThrough,n=0;t.on("readable",function(){t._readableState,console.error(">>> emit readable %d",n),n++}),t.write(new Buffer("foog")),console.error("need emit 0"),t.write(new Buffer("bark")),console.error("should have emitted readable now 1 === %d",n),e.equal(n,1),e.equal(""+t.read(5),"foogb"),e.equal(t.read(5)+"","null"),console.error("need emit 1"),t.write(new Buffer("bazy")),console.error("should have emitted, but not again"),t.write(new Buffer("kuel")),console.error("should have emitted readable now 2 === %d",n),e.equal(n,2),e.equal(""+t.read(5),"arkba"),e.equal(""+t.read(5),"zykue"),e.equal(t.read(5),null),console.error("need emit 2"),t.end(),e.equal(n,3),e.equal(""+t.read(5),"l"),e.equal(t.read(5),null),console.error("should not have emitted again"),e.equal(n,3),e.end()}),test("passthrough event emission reordered",function(e){var t=new PassThrough,n=0;t.on("readable",function(){console.error("emit readable",n),n++}),t.write(new Buffer("foog")),console.error("need emit 0"),t.write(new Buffer("bark")),console.error("should have emitted readable now 1 === %d",n),e.equal(n,1),e.equal(""+t.read(5),"foogb"),e.equal(t.read(5),null),console.error("need emit 1"),t.once("readable",function(){e.equal(""+t.read(5),"arkba"),e.equal(t.read(5),null),console.error("need emit 2"),t.once("readable",function(){e.equal(""+t.read(5),"zykue"),e.equal(t.read(5),null),t.once("readable",function(){e.equal(""+t.read(5),"l"),e.equal(t.read(5),null),e.equal(n,4),e.end()}),t.end()}),t.write(new Buffer("kuel"))}),t.write(new Buffer("bazy"))}),test("passthrough facaded",function(e){console.error("passthrough facaded");var t=new PassThrough,n=[];t.on("data",function(e){n.push(""+e)}),t.on("end",function(){e.same(n,["foog","bark","bazy","kuel"]),e.end()}),t.write(new Buffer("foog")),setTimeout(function(){t.write(new Buffer("bark")),setTimeout(function(){t.write(new Buffer("bazy")),setTimeout(function(){t.write(new Buffer("kuel")),setTimeout(function(){t.end()},10)},10)},10)},10)}),test("object transform (json parse)",function(e){console.error("json parse stream");var t=new Transform({objectMode:!0});t._transform=function(e,n,i){try{t.push(JSON.parse(e)),i()}catch(r){i(r)}};var n=[{foo:"bar"},100,"string",{nested:{things:[{foo:"bar"},100,"string"]}}],i=!1;t.on("end",function(){i=!0}),n.forEach(function(n){t.write(JSON.stringify(n));var i=t.read();e.same(i,n)}),t.end(),process.nextTick(function(){e.ok(i),e.end()})}),test("object transform (json stringify)",function(e){console.error("json parse stream");var t=new Transform({objectMode:!0});t._transform=function(e,n,i){try{t.push(JSON.stringify(e)),i()}catch(r){i(r)}};var n=[{foo:"bar"},100,"string",{nested:{things:[{foo:"bar"},100,"string"]}}],i=!1;t.on("end",function(){i=!0}),n.forEach(function(n){t.write(n);var i=t.read();e.equal(i,JSON.stringify(n))}),t.end(),process.nextTick(function(){e.ok(i),e.end()})});