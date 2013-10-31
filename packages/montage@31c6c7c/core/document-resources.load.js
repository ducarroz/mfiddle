montageDefine("31c6c7c","core/document-resources",{dependencies:["montage","core/promise","core/mini-url"],factory:function(e,t){var n=e("montage").Montage,i=e("core/promise").Promise,r=e("core/mini-url"),o=n.specialize({_SCRIPT_TIMEOUT:{value:5e3},_document:{value:null},_resources:{value:null},_preloaded:{value:null},constructor:{value:function o(){this.super()}},initWithDocument:{value:function(e){return this.clear(),this._document=e,this}},clear:{value:function(){this._resources=Object.create(null),this._preloaded=Object.create(null)}},_addResource:{value:function(e){this._resources[e]=!0}},hasResource:{value:function(e){return e in this._resources}},isResourcePreloaded:{value:function(e){return this._preloaded[e]===!0}},isResourcePreloading:{value:function(e){return i.isPromise(this._preloaded[e])}},setResourcePreloadedPromise:{value:function(e,t){this._preloaded[e]=t}},setResourcePreloaded:{value:function(e){this._preloaded[e]=!0}},getResourcePreloadedPromise:{value:function(e){return this._preloaded[e]}},addScript:{value:function(e){var t=this.normalizeUrl(e.src);return t?this.isResourcePreloaded(t)?i.resolve():this.isResourcePreloading(t)?this.getResourcePreloadedPromise(t):this._importScript(e):this._importScript(e)}},_importScript:{value:function(e){var t,n,r=this,o=this._document,a=o.head,s=i.defer(),l=e.src;return l?(r._addResource(l),t=function(){r.setResourcePreloaded(l),e.removeEventListener("load",t),e.removeEventListener("error",t),clearTimeout(n),s.resolve()},e.addEventListener("load",t,!1),e.addEventListener("error",t,!1),n=setTimeout(function(){r.setResourcePreloaded(l),s.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(l,s.promise)):s.resolve(),a.appendChild(o.createComment("Inserted from FIXME")),a.appendChild(e),s.promise}},addStyle:{value:function(e){var t,n=e.getAttribute("href");if(n=this.normalizeUrl(n)){if(this.hasResource(n))return;this._addResource(n)}t=this._document.head,t.insertBefore(e,t.firstChild)}},normalizeUrl:{value:function(e,t){return r.resolve(t||"http://",e)}},preloadResource:{value:function(e){return e=this.normalizeUrl(e),this.isResourcePreloaded(e)?i.resolve():this.isResourcePreloading(e)?this.getResourcePreloadedPromise(e):this._preloadResource(e)}},_preloadResource:{value:function(e){var t,n,r=this,o=new XMLHttpRequest,a=i.defer();return o.open("GET",e),t=function(){r.setResourcePreloaded(e),o.removeEventListener("load",t),o.removeEventListener("error",t),clearTimeout(n),a.resolve()},o.addEventListener("load",t,!1),o.addEventListener("error",t,!1),o.send(),n=setTimeout(function(){r.setResourcePreloaded(e),a.resolve()},this._SCRIPT_TIMEOUT),this.setResourcePreloadedPromise(e,a.promise),a.promise}}},{getInstanceForDocument:{value:function(e){var t=e.__montage_resources__;return t||(t=e.__montage_resources__=(new o).initWithDocument(e)),t}}});t.DocumentResources=o}});