montageDefine("4203091","tests/test-helper",{dependencies:[".."],factory:function(e,t){var n=e(".."),r=n.Parser,i=n.CollectingHandler,a=5;t.writeToParser=function(e,t,n){for(var i=new r(e,t),o=0;n.length>o;o+=a)i.write(n.substr(o,a));i.end(),i.parseComplete(n)},t.getEventCollector=function(e){var t=new i({onerror:e,onend:function(){e(null,t.events.reduce(function(e,t){return"onerror"===t[0]||"onend"===t[0]||("ontext"===t[0]&&e.length&&"text"===e[e.length-1].event?e[e.length-1].data[0]+=t[1]:e.push({event:t[0].slice(2),data:t.slice(1)})),e},[]))}});return t}}});