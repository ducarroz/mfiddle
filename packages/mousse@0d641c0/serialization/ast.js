(function(t){function e(){this.object=Object.create(null)}function n(t,e){this.root=t,this.value=e}function i(t,e){n.call(this,t,e)}function a(t,e){n.call(this,t,e)}function r(t,e){n.call(this,t,e)}function s(t){n.call(this,t,Object.create(null))}function o(t,e){n.call(this,t,e)}Object.defineProperties(e.prototype,{object:{value:null,writable:!0},setProperty:{value:function(t,e){null!=t&&(this.object[t]=e)}},getProperty:{value:function(t){return this.object[t]}},clearProperty:{value:function(t){delete this.object[t]}},hasProperty:{value:function(t){return t in this.object}},serialize:{value:function(t){return JSON.stringify(this,null,t)}},toJSON:{value:function(){var t,e=Object.create(null);for(var n in this.object)t=this.object[n],e[n]=t.toJSON?t.toJSON(1):t;return e}}}),Object.defineProperties(n.prototype,{root:{value:null,writable:!0},label:{value:null,writable:!0},value:{value:null,writable:!0},setLabel:{value:function(t){this.label&&this.root.clearProperty(this.label),this.label=t,this.root.setProperty(t,this)}},getLabel:{value:function(){return this.label}},clearLabel:{value:function(){this.root.clearProperty(this.label),this.label=null}},_getSerializationValue:{value:function(){return this.value}},toJSON:{value:function(t){var e=this._getSerializationValue();return 1===t?{value:e}:e}}}),i.prototype=Object.create(n.prototype,{constructor:{value:i},toJSON:{value:function(t){var e,n=this._getSerializationValue();return 1===t?{value:n}:this.label?(e=new o(this.root,this.label),e.toJSON()):n}}}),a.prototype=Object.create(i.prototype,{constructor:{value:a},setProperty:{value:function(t,e){null!=t&&(this.value[t]=e)}},getProperty:{value:function(t){return this.value[t]}},clearProperty:{value:function(t){delete this.value[t]}},getPropertyNames:{value:function(){return Object.keys(this.value)}}}),r.prototype=Object.create(i.prototype,{constructor:{value:r},_getSerializationValue:{value:function(){var t=this.value;return{"/":{source:t.source,flags:(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")}}}}}),s.prototype=Object.create(n.prototype,{constructor:{value:s},setProperty:{value:function(t,e){null!=t&&(this.value[t]=e)}},getProperty:{value:function(t){return this.value[t]}},clearProperty:{value:function(t){delete this.value[t]}},toJSON:{value:function(t){var e,n=this._getSerializationValue();return 1===t?n:(e=new o(this.root,this.label),e.toJSON())}}}),o.prototype=Object.create(n.prototype,{constructor:{value:o},_getSerializationValue:{value:function(){return{"@":this.value}}}}),t.Root=e,t.Value=n,t.ReferenceableValue=i,t.ObjectLiteral=a,t.RegExpObject=r,t.CustomObject=s,t.ObjectReference=o})(exports);