montageDefine("c081c7d","test/simple/test-stream2-finish-pipe",{dependencies:["../common.js","../../readable","buffer"],factory:function(e){e("../common.js");var t=e("../../readable"),n=e("buffer").Buffer,r=new t.Readable;r._read=function(e){r.push(new n(e))};var i=new t.Writable;i._write=function(e,t,n){n(null)},r.pipe(i),i.end()}});