montageDefine("31c6c7c","core/bindings",{dependencies:["core/core","frb"],factory:function(e,t){var n=e("core/core").Montage,i=t.Bindings=e("frb"),s={defineBinding:{value:function(e,t,n){return i.defineBinding(this,e,t,n)}},defineBindings:{value:function(e,t){return i.defineBindings(this,e,t)}},cancelBinding:{value:function(e){return i.cancelBinding(this,e)}},cancelBindings:{value:function(){return i.cancelBindings(this)}},getBinding:{value:function(e){return i.getBinding(this,e)}},getBindings:{value:function(){return i.getBindings(this)}}};n.defineProperties(n,s),n.defineProperties(n.prototype,s)}});