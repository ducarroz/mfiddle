var gist=exports.gist={clientId:"clientId",files:null,oauth:[function(e){gist.oauth.callback=e,open("https://github.com/login/oauth/authorize?client_id="+gist.clientId+"&scope=gist","popup","width=1015,height=500")},function(e){e?(window.ACCESS_TOKEN=localStorage.access_token=e,gist.getUser(gist.oauth.callback)):alert("Authentication error"),gist.oauth.callback=null}],request:function(e){e.method=e.method||"GET",e.id=e.id||"",e.rev=e.rev||"",e.accepted=e.accepted||[];var t=e.anon||"GET"===e.method;if(!t&&!window.ACCESS_TOKEN)return gist.oauth[0](function(){gist.request(e)}),void 0;var n=e.path||"gists"+(e.id?"/"+e.id:"")+(e.rev?"/"+e.rev:"")+(e.gpath||"");this._xhr({method:e.method,url:"https://api.github.com/"+n+(!e.anon&&window.ACCESS_TOKEN?"?access_token="+ACCESS_TOKEN:""),headers:e.headers,callback:function(t){var n=t.responseText?JSON.parse(t.responseText):null;n&&n.message&&-1===e.accepted.indexOf(t.status)?alert("Sorry, I got a "+t.status+" ("+n.message+")"):e.callback&&e.callback(n,t)},data:e.data?JSON.stringify(e.data):null})},_xhr:function(e){var t=new XMLHttpRequest,n=e.method||"GET",i=e.data||"";if(t.open(n,e.url+("GET"===n&&i?"?"+i:""),!0),"GET"!==n&&t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.headers)for(var o in e.headers)t.setRequestHeader(o,e.headers[o]);return t.onreadystatechange=function(){4===t.readyState&&t.responseText&&e.callback(t)},t.send("GET"===n?null:i),t},getUser:function(e){gist.request({path:"user",callback:function(t){window.user=t,e&&e(t)}})},save:function(e){e=e||{};var t=e.anon||!window.user,n=e.callback;if(!(!gist.id||gist.user&&window.user&&gist.user.id==user.id||t))return gist.fork(gist.id,gist.save,e.anon),void 0;var i=gist.id||"",o=e.cssCode,a=e.htmlMarkup,r=e.jsCode,l=e.settings,s="title",p={};o&&(p["component.css"]={content:o}),a&&(p["component.html"]={content:a}),r&&(p["component.js"]={content:r}),p["settings.json"]={content:JSON.stringify(l)},gist.request({anon:e.anon,id:t||e.forceNew?null:i,method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},callback:function(e){e.id&&gist.update(e),n&&n(e.id)},data:{description:s,"public":!0,files:p}})},fork:function(e,t){gist.request({method:"POST",gpath:"/fork",id:e||gist.id||null,headers:{"Content-Type":"text/plain; charset=UTF-8"},callback:function(e){e.id&&(gist.update(e),t&&t())},data:{}})},load:function(e,t,n){gist.request({id:e||gist.id,rev:t||gist.rev,callback:function(e){gist.update(e);var t,i,o,a,r=this.files=e.files,l=r["component.css"],s=r["component.html"],p=r["component.js"],d=r["settings.json"];if(!l||!s||!p)for(var c in r){var m=c.slice(c.lastIndexOf("."));if(l||".css"!=m||(l=r[c]),s||".html"!=m||(s=r[c]),p||".js"!=m||(p=r[c]),l&&s&&p)break}if(l&&(t=l.content),s&&(i=s.content),p&&(o=p.content),d)try{a=JSON.parse(d.content)}catch(u){console.warn("Unknown settings: ",d),a={}}else a={};n&&n(a,t,i,o)}})},update:function(e){var t=e.id,n=e.history&&e.history[0]&&e.history[0].version||"";gist.id!=t?(gist.id=t,gist.rev=void 0):gist.rev&&gist.rev!==n&&(gist.rev=n),e.user&&(gist.user=e.user),gist.saved=!0},saved:!1};window.ACCESS_TOKEN=localStorage.access_token;