montageDefine("0b807b2","queue",{dependencies:["./q"],factory:function(e,t,n){function i(){var e=r.defer(),t=r.defer();return{put:function(t){var n=r.defer();e.resolve({head:t,tail:n.promise}),e.resolve=n.resolve},get:function(){var n=e.promise.get("head");return e.promise=e.promise.get("tail"),n.fail(function(e){throw t.resolve(e),e})},closed:t.promise,close:function(n){n=n||Error("Can't get value from closed queue");var i={head:r.reject(n)};return i.tail=i,e.resolve(i),t.promise}}}var r=e("./q");n.exports=i}});