montageDefine("663b209","ui/embed.reel/embed",{dependencies:["montage/ui/component","core/fiddle"],factory:function(t,e){var n=t("montage/ui/component").Component,i=t("core/fiddle").Fiddle;e.Embed=n.specialize({constructor:{value:function(){this.super()}},mfiddleUrl:{value:"http://montagejs.github.io/mfiddle/"},_id:{value:null},id:{set:function(t){this._id!==t&&(this._id=t,this.loadGist(t))},get:function(){return this._id}},_fiddle:{value:null},fiddle:{get:function(){return this._fiddle},set:function(t){this._fiddle=t,this._updateActiveTabContent()}},_activeTab:{value:"serialization"},activeTab:{get:function(){return this._activeTab},set:function(t){t!==this._activeTab&&(this._activeTab=t,this._updateActiveTabContent())}},templateDidLoad:{value:function(){this.addEventListener("action",this,!1)}},loadGist:{value:function(t){var e=this;i.fromId(t).then(function(t){e.fiddle=t})}},_updateActiveTabContent:{value:function(){var t,e=this._activeTab,n=this.fiddle;n&&("html"==e?t=n.html||"":"css"==e?t=n.css||"":"javascript"==e?t=n.javascript||"":"serialization"==e&&(t=n.serialization||""),this.templateObjects.content.value=t)}},handleTabAction:{value:function(t){this.activeTab=t.detail.get("tab")}}})}});