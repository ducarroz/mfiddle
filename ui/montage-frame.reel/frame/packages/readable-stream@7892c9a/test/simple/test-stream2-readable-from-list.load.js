montageDefine("7892c9a","test/simple/test-stream2-readable-from-list",{dependencies:["assert","../common.js","../../lib/_stream_readable"],factory:function(e){function t(e,t){s++,r.push([e,t])}function n(){var e=r.shift();if(!e)return console.error("ok");var t=e[0],i=e[1];console.log("# %s",t),i({same:a.deepEqual,equal:a.equal,end:function(){s--,n()}})}var a=e("assert");e("../common.js");var i=e("../../lib/_stream_readable")._fromList,r=[],s=0;process.on("exit",function(){a.equal(s,0)}),process.nextTick(n),t("buffers",function(e){var t=[new Buffer("foog"),new Buffer("bark"),new Buffer("bazy"),new Buffer("kuel")],n=i(6,{buffer:t,length:16});e.equal(""+n,"foogba"),n=i(2,{buffer:t,length:10}),e.equal(""+n,"rk"),n=i(2,{buffer:t,length:8}),e.equal(""+n,"ba"),n=i(100,{buffer:t,length:6}),e.equal(""+n,"zykuel"),e.same(t,[]),e.end()}),t("strings",function(e){var t=["foog","bark","bazy","kuel"],n=i(6,{buffer:t,length:16,decoder:!0});e.equal(n,"foogba"),n=i(2,{buffer:t,length:10,decoder:!0}),e.equal(n,"rk"),n=i(2,{buffer:t,length:8,decoder:!0}),e.equal(n,"ba"),n=i(100,{buffer:t,length:6,decoder:!0}),e.equal(n,"zykuel"),e.same(t,[]),e.end()})}});