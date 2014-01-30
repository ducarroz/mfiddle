montageDefine("e90eba3","core/localizer",{dependencies:["montage","core/messageformat","core/logger","core/serialization","core/promise","core/bindings","collections/listen/property-changes","frb/bindings","frb/stringify","frb/expand","frb/scope","core/messageformat-locale"],factory:function(e,t){var n=e("montage").Montage,i=e("core/messageformat"),r=e("core/logger").logger("localizer"),a=e("core/serialization").Serializer,o=e("core/serialization").Deserializer,s=e("core/promise").Promise,l=e("core/bindings").Bindings,u=(e("collections/listen/property-changes"),e("frb/bindings")),c=e("frb/stringify"),d=e("frb/expand"),h=e("frb/scope");i.locale=e("core/messageformat-locale");var f="key",p="default",m="montage_locale",v="locale",g="messages",b="manifest.json",y=function(){return""},_=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,w=t.Localizer=n.specialize({constructor:{value:function w(){this.super()}},init:{value:function(e){return this.locale=e||M.locale,this}},initWithMessages:{value:function(e,t){return this.locale=e,this.messages=t,this}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(null!=e&&"object"!=typeof e)throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!_.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");this._locale!==e&&(this._locale=e,this.messageFormat=new i(e))}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:this._availableLocales=this._manifest.get("files").get(v).get("files").then(function(e){return Object.keys(e)})}},_require:{value:"undefined"!=typeof global?global.require:"undefined"!=typeof window?window.require:null},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?this.__manifest?this.__manifest:this.__manifest=e.async(b):s.reject(Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+b+" must exist"))}},loadMessages:{value:function(e,t){if(!this.require)throw Error("Cannot load messages as",this,"require is not set");null===e&&(e=5e3),this.messages=null;var n=this;this.require;var i=this._manifest;return e&&(i=i.timeout(e)),this.messagesPromise=i.get("files").then(function(e){return n._loadMessageFiles(e)}).then(function(e){return n._collapseMessages(e)}).fail(function(e){throw console.error("Could not load messages for '"+n.locale+"': "+e),e}).then(function(e){return"function"==typeof t&&t(e),e})}},_loadMessageFiles:{value:function(e){var t=this.require;if(!e)return s.reject(Error(t.location+b+" does not contain a 'files' property"));var n,i,a,o,l=[];if(!(v in e))return s.reject(Error("Package does not contain a '"+v+"' directory"));for(n=e[v].files,i=this._locale;""!==i;)n.hasOwnProperty(i)&&(a=n[i].files,(o=g+".js")in a||(o=g+".json")in a?l.push(t.async(v+"/"+i+"/"+o)):r.isDebug&&r.debug(this,"Warning: '"+v+"/"+i+"/' does not contain '"+g+".json' or '"+g+".js'")),i=i.substring(0,i.lastIndexOf("-"));if(!l.length)return s.reject(Error("Could not find any "+g+".json or "+g+".js files"));var u=s.all(l);if(r.isDebug){var c=this;u=u.then(function(e){return r.debug(c,"loaded "+e.length+" message files"),e})}return u}},_collapseMessages:{value:function(e){for(var t={},n=0,i=e.length;i>n;n++){var r=e[n];for(var a in r)a in t||(t[a]=r[a])}return this.messages=t,t}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,t){var n,r,a;if(!e&&!t)throw Error("Key or default message must be truthy, not "+e+" and "+t);if(this._messages&&e in this._messages){if(n=this._messages[e],r=typeof n,"function"===r)return n;if("object"===r){if(!("message"in n))throw Error(n,"does not contain a 'message' property");n=n.message}}else n=t;if(n||(console.warn("No message or default message for key '"+e+"'"),n=e),n in this._compiledMessageCache)return this._compiledMessageCache[n];var o=this.messageFormat.parse(n);return o.program&&o.program.statements&&1===o.program.statements.length&&"string"===o.program.statements[0].type?(a=function(){return n},a.toString=a):a=Function("MessageFormat","return "+this.messageFormat.precompile(o))(i),this._compiledMessageCache[n]=a,a}},localize:{value:function(e,t,n,i){var r,a=this;if(n=n===void 0?!0:n,!this.messagesPromise)return r=s.resolve(this.localizeSync(e,t)),r.then(i),r;var o=function(){var n=a.localizeSync(e,t);return"function"==typeof i&&i(n),n};return n?this.messagesPromise.then(o,o):this.messagesPromise.then(o)}}}),E=w.specialize({init:{value:function(){var e=this.callDelegateMethod("getDefaultLocale");return e||"undefined"==typeof window||(window.localStorage&&(e=window.localStorage.getItem(m)),e=e||window.navigator.userLanguage||window.navigator.language),e=e||"en",this.locale=e,this.loadMessages().done(),this}},_delegate:{value:null},delegate:{get:function(){return this._delegate},set:function(e){this._delegate!==e&&(this._delegate=e,this.init())}},locale:{get:function(){return this._locale},set:function(e){try{Object.getPropertyDescriptor(w,"locale").set.call(this,e)}catch(t){e="en",Object.getPropertyDescriptor(w,"locale").set.call(this,e)}"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem(m,e)}},reset:{value:function(){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.removeItem(m),this.init(),this._locale}}}),M=t.defaultLocalizer=(new E).init();t.localize=M.localize.bind(M);var T=t.Message=n.specialize({constructor:{value:function(){this.defineBinding("_data",{"<-":"_dataObject.toMap()"}),this._data.addMapChangeListener(this,"data")}},init:{value:function(e,t,n){return e&&(this.key=e),t&&(this.defaultMessage=t),n&&(this.data=n),this}},_localizer:{value:M},localizer:{get:function(){return this._localizer},set:function(e){this._localizer!=e&&(this._localizer=e,this._localize())}},_key:{value:null},key:{get:function(){return this._key},set:function(e){this._key!==e&&(this._key=e,this._localize())}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){this._defaultMessage!==e&&(this._defaultMessage=e,this._localize())}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(!this._isLocalizeQueued){this._isLocalizeQueued=!0;var e=this,t=s.defer();this._messageFunction=t.promise,this.localized=this._messageFunction.then(function(t){return t(e._data.toObject())}),s.nextTick(function(){return e._isLocalizeQueued=!1,e._key||e._defaultMessage?(t.resolve(e._localizer.localize(e._key,e._defaultMessage)),void 0):(console.warn("Both key and default message are falsey for",e,"If this is in a repetition this warning can be ignored"),t.resolve(y),void 0)})}}},_messageFunction:{value:s.resolve(y)},_dataObject:{value:null},_data:{value:null},data:{get:function(){return this._data},set:function(e){this._dataObject!==e&&(this._dataObject=e)}},__localizedResolved:{value:""},_localizedDeferred:{value:s.defer()},localized:{get:function(){return this._localizedDeferred.promise},set:function(e){if(e!==this._localized){var t=this,n=s.defer();this._localizedDeferred.resolve(n.promise),e.then(n.resolve,n.reject),n.promise.then(function(e){return t.__localizedResolved=e}).done(),this._localizedDeferred=n}}},handleDataMapChange:{value:function(){this.localized=this._messageFunction.fcall(this._data.toObject())}},serializeSelf:{value:function(){var e={_bindingDescriptors:this._bindingDescriptors};return e.key=this._key,e.defaultMessage=this._defaultMessage,this._localizer!==M&&(e.localizer=this._localizer),e}},serializeForLocalizations:{value:function(e){var t,n,i={};n=u.getBindings(this),n&&n.key?(i[f]={},this._serializeBinding(this,i[f],n.key,e)):i[f]=this._key,n&&n.defaultMessage?(i[p]={},this._serializeBinding(this,i[p],n.defaultMessage,e)):i[p]=this._defaultMessage;var r=u.getBindings(this._data);t=this._data.toObject();for(var a in t)!t.hasOwnProperty(a)||r&&r[".get('"+a+"')"]||(i.data||(i.data={}),i.data[a]=t[a]);for(var o in r){var s=/\.get\('([^']+)'\)/.exec(o)[1];i.data||(i.data={}),i.data[s]={},this._serializeBinding(this._data,i.data[s],r[o],e)}return i}},_serializeBinding:{value:function(e,t,n,i){if(!("serializable"in n)||n.serializable){var r=n.sourceSyntax;if(n.source!==e){var a=i.addObjectReference(n.source),o=new h({type:"component",label:a["@"]});o.components=i,r=d(r,o)}var o=new h;o.components=i;var s=c(r,o);n.twoWay?t["<->"]=s:t["<-"]=s,n.converter?t.converter=n.converter:(t.convert=n.convert,t.revert=n.revert),n.trace&&(t.trace=!0)}}}}),x=function(e,t,n,i,r,a){var o=new T;for(var s in r)"string"==typeof r[s]?o.data.set(s,r[s]):l.defineBinding(o.data,".get('"+s+"')",r[s],{components:a});"object"==typeof n?l.defineBinding(o,"key",n,{components:a}):o.key=n,"object"==typeof i?l.defineBinding(o,"defaultMessage",i,{components:a}):o.defaultMessage=i,l.defineBinding(e,t,{"<-":"__localizedResolved",source:o,serializable:!1})};a.defineSerializationUnit("localizations",function(e,t){var n=u.getBindings(t);if(n){var i;for(var r in n){var a=n[r];if(T.prototype.isPrototypeOf(a.source)){i||(i={});var o=a.source;i[r]=o.serializeForLocalizations(e)}}return i}}),o.defineDeserializationUnit("localizations",function(e,t,n){for(var i in n){var a,o,s=n[i];f in s?(!r.isDebug||p in s||r.debug(this,"Warning: localized property '"+i+"' does not contain a default message property ("+p+"), in ",t),a=s[f],o=s[p],x(t,i,a,o,s.data,e)):console.error("localized property '"+i+"' must contain a key property ("+f+"), in ",n[i])}})}});