montageDefine("31c6c7c","core/core",{dependencies:["collections/shim","core/shim/object","core/shim/array","core/shim/string","core/extras/object","core/extras/date","core/extras/element","core/extras/function","core/extras/regexp","core/extras/string","core/uuid","collections/listen/property-changes","core/bindings","core/paths","core/serialization/bindings","core/promise"],factory:function(e,t){function n(e,t){var a=i+t+r;return e.hasOwnProperty(a)?e[a]:Object.defineProperty(e,a,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(n(Object.getPrototypeOf(e),t))})[a]}e("collections/shim"),e("core/shim/object"),e("core/shim/array"),e("core/shim/string"),e("core/extras/object"),e("core/extras/date"),e("core/extras/element"),e("core/extras/function"),e("core/extras/regexp"),e("core/extras/string");var r="AttributeProperties",i="_",a="__proto__",o="value",s="enumerable",u="distinct",l="serializable",c=Array.prototype,h=Object.prototype,d=!0,m=t.Montage=function m(){};m.deprecate=function(e,t,n,r){var i=function(){var i=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(r?console.warn(n+" is deprecated, use "+r+" instead.",Error("").stack):console.warn(n,Error("").stack)),Error.stackTraceLimit=i,t.apply(e?e:this,arguments)};return i.deprecatedFunction=t,i},m.callDeprecatedFunction=function(e,t,n,r){var i,a,o=Error.stackTraceLimit;return Error.stackTraceLimit=2,"undefined"!=typeof console&&"function"==typeof console.warn&&(i=m.getInfoForObject(e).objectName,r?console.warn(n+" is deprecated, use "+r+" instead.",i):console.warn(n,i)),Error.stackTraceLimit=o,a=c.slice.call(arguments,4),t.apply(e?e:this,a)};var p={}.__proto__===Object.prototype,f={_montage_metadata:1,__state__:1},v=Object.getOwnPropertyNames(Function);if(Object.defineProperty(m,"specialize",{value:function(e,t){var n,r,i,a,o,s,u,l=this,c=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?m.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return l.apply(this,arguments)||this},p)n.__proto__=l;else{i=Object.getOwnPropertyNames(l);for(var s=0;i.length>s;s++)a=i[s],f.hasOwnProperty(a)||(o=Object.getOwnPropertyDescriptor(n,a),(!o||o.configurable)&&m.defineProperty(n,a,Object.getOwnPropertyDescriptor(l,a)));n.__constructorProto__=l,m.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(r=Object.create(this.prototype),c){for(i=Object.getOwnPropertyNames(m),s=0;i.length>s;s++)a=i[s],o=Object.getOwnPropertyDescriptor(n,a),(!o||o.configurable)&&m.defineProperty(n,a,Object.getOwnPropertyDescriptor(m,a));for(i=Object.getOwnPropertyNames(m.prototype),s=0;i.length>s;s++)a=i[s],o=Object.getOwnPropertyDescriptor(n,a),(!o||o.configurable)&&m.defineProperty(r,a,Object.getOwnPropertyDescriptor(m.prototype,a))}if(m.defineProperties(r,e),d){u=function(e,t,n){function r(){return this===t&&console.warn("Deprecated - "+m.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties"),e.apply(this,arguments)}return r.deprecatedFunction=e,r};for(a in e)v.has(a)?delete e[a]:(o=e[a],o.value&&"function"==typeof o.value&&!o.value.__isConstructor__?o.value=u(o.value,n,a):(o.get&&(o.get=u(o.get,n,a)),o.set&&(o.set=u(o.set,n,a))));m.defineProperties(n,e),m.defineProperty(n,"create",{value:function(){return new n},enumerable:!1}),r.hasOwnProperty("didCreate")||m.defineProperty(r,"didCreate",{value:n,enumerable:!1}),n.hasOwnProperty("didCreate")||m.defineProperty(n,"didCreate",{value:n,enumerable:!1})}return m.defineProperties(n,t),m.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),n.prototype=r,m.defineProperty(r,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!p){var g=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:g.apply(Object,arguments)}}Object.defineProperty(m,"create",{configurable:!0,value:function(e,t){if(void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&m.defineProperties(n,t),n}});var _=[l];_.forEach(function(e){Object.defineProperty(Object.prototype,i+e+r,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(m,"defineProperty",{value:function(e,t,r){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var d=o in r;if(u in r&&!d)throw"Cannot use distinct attribute on non-value property '"+t+"'";if(a in r)r.__proto__=d?"function"==typeof r.value?M:b:y;else{var m;m=d?"function"==typeof r.value?M:b:y;for(var p in m)p in r||(r[p]=m[p])}return r.hasOwnProperty(s)||t.charAt(0)!==i||(r.enumerable=!1),r.hasOwnProperty(l)||(r.enumerable?r.get&&!r.set?r.serializable=!1:r.writable===!1&&(r.serializable=!1):r.serializable=!1),l in r&&(n(e,l)[t]=r.serializable),r.distinct!==!0||"object"!=typeof r.value?Object.defineProperty(e,t,r):(function(e,t,n,r){var i=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===h?0!==Object.keys(n).length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e={};for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===c?0!==n.length?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r,a;for(e=[],r=0;(a=n[r])!==void 0;r++)e[r]=a;this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];if(!e){var r;e=new n.constructor;for(r in n)e[r]=n[r];this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}}):Object.defineProperty(r,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:i(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:i(this,t,e)}})}(t,i+t,r.value,e),void 0)}}),Object.defineProperty(m,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var y={enumerable:!0,configurable:!0,serializable:!0},b={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},M={writable:!0,enumerable:!1,configurable:!0,serializable:!1};m.defineProperty(m,"didCreate",{value:Function.noop});var w=function(e,t){for(var n,r,i,a,o,s,u,l;u===void 0&&null!==e;){for(n=Object.getOwnPropertyNames(e),a=0,o=n.length,a;o>a;a++)if(r=n[a],i=Object.getOwnPropertyDescriptor(e,r),null!=(s=i.value)){if(s===t||s.deprecatedFunction&&s.deprecatedFunction===t){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),r),u=l?l.value:null;break}}else if(null!=(s=i.get)){if(s===t||s.deprecatedFunction&&s.deprecatedFunction===t){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),r),u=l?l.get:null;break}}else if(null!=(s=i.set)&&(s===t||s.deprecatedFunction&&s.deprecatedFunction===t)){l=Object.getPropertyDescriptor(Object.getPrototypeOf(e),r),u=l?l.set:null;break}e=Object.getPrototypeOf(e)}return u},T=function(){var e=w(this,T.caller);return"function"==typeof e?w(this,T.caller).bind(this):Function.noop};m.defineProperty(m,"super",{get:T}),m.defineProperty(m.prototype,"super",{get:T}),m.defineProperty(m,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var r in n)n[r]&&t.push(r);return t}}),m.defineProperty(m,"getPropertyAttribute",{value:function(e,t,n){var a=i+n+r,o=e[a];return o?o[t]:void 0}}),m.defineProperty(m,"getPropertyAttributes",{value:function(e,t){var n={},a=i+t+r,o=e[a];if(o){for(var s in o)n[s]=o[s];return n}}});var P={isInstance:{value:!0}},D={objectName:{value:"Function"},isInstance:{value:!0}};m.defineProperty(m,"getInfoForObject",{value:function(e){var t,n;if(S.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?D:P,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(r){return e._montage_metadata=Object.create(t,n)}}});var E=e("core/uuid");"undefined"!=typeof window&&(window.uuid=E.generate());var S=Object.prototype.hasOwnProperty,O=function(){var e=E.generate(),t=m.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:O.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&o in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&a in this||(this._uuid=e))}catch(n){this._uuid=e}return e},C=function C(){return S.call(this,"_uuid")?this._uuid:O.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:C,set:function(){}}),m.defineProperty(m,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),m.defineProperty(m,"equals",{value:m.prototype.equals}),m.defineProperty(m.prototype,"callDelegateMethod",{value:function(e){var t,n,r=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),r&&"function"==typeof(n=r[t]))?(c.shift.call(arguments),n.apply(r,arguments)):r&&"function"==typeof(n=r[e])?(c.shift.call(arguments),n.apply(r,arguments)):void 0}});var Y=e("collections/listen/property-changes");Object.addEach(m,Y.prototype),Object.addEach(m.prototype,Y.prototype),e("core/bindings"),e("core/paths"),e("core/serialization/bindings"),t._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=m.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=m.getInfoForObject(t);var n=e.moduleId,r=n.lastIndexOf("/"),i=n.lastIndexOf(".");r=-1===r?0:r+1,i=-1===i?n.length:i,i=r>i?n.length:i,m.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,i)+".meta"})}return t._blueprintModuleId}},t._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var n=m.getInfoForObject(this),r=n&&!n.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(r,"_blueprint")||!r._blueprint){var i=r.blueprintModuleId;if(""===i)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(r)+"'");t._blueprintDescriptor.BlueprintModulePromise||(t._blueprintDescriptor.BlueprintModulePromise=e.async("core/meta/module-blueprint").get("ModuleBlueprint")),m.defineProperty(r,"_blueprint",{enumerable:!1,value:t._blueprintDescriptor.BlueprintModulePromise.then(function(e){var t=m.getInfoForObject(r);return e.getBlueprintWithModuleId(i,t.require).fail(function(t){if(-1!==t.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(r).then(function(e){return e});throw t})})})}return r._blueprint},set:function(t){var n,r=m.getInfoForObject(this),i=r&&!r.isInstance?this:this.constructor;if(null===t)n=null;else{if("function"==typeof t.then)throw new TypeError("Object blueprint should not be a promise");t.blueprintInstanceModule=i.blueprintModule,n=e("core/promise").Promise.resolve(t)}m.defineProperty(i,"_blueprint",{enumerable:!1,value:n})}}}});