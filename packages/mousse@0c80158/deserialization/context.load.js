montageDefine("0c80158","deserialization/context",{dependencies:["q"],factory:function(e,t){var n=e("q");(function(e){function t(e,t,n){if(this._reviver=t,this._serialization=e,this._objects=Object.create(null),n){this._userObjects=Object.create(null);for(var i in n)this._userObjects[i]=n[i]}}Object.defineProperties(t.prototype,{_objects:{value:null,writable:!0},_userObjects:{value:null,writable:!0},_serialization:{value:null,writable:!0},_reviver:{value:null,writable:!0},setObjectLabel:{value:function(e,t){this._objects[t]=e}},getObject:{value:function(e){var t,i=this._serialization,r=this._reviver,a=this._objects;return e in a?a[e]:e in i?(t=r.reviveRootObject(i[e],this,e),e in a||(a[e]=t),t):n.reject(Error("Object with label '"+e+"' was not found."))}},getObjects:{value:function(){var e,t=this,i=(this._reviver,this._serialization),r=[];for(var a in i)e=this.getObject(a),n.isPromise(e)&&r.push(e);return 0===r.length?n.resolve(this._invokeDidReviveObjects()):n.all(r).then(function(){return t._invokeDidReviveObjects()})}},hasUserObject:{value:function(e){var t=this._userObjects;return t?e in t:!1}},getUserObject:{value:function(e){var t=this._userObjects;return t?t[e]:void 0}},_invokeDidReviveObjects:{value:function(){var e,t=this,i=this._reviver;return"function"==typeof i.didReviveObjects&&(e=i.didReviveObjects(this._objects,this),n.isPromise(e))?e.then(function(){return t._objects}):this._objects}}}),e.Context=t})(t)}});