montageDefine("b1cf93a","ui/base/abstract-control",{dependencies:["montage","ui/component","collections/dict"],factory:function(e,t){var n=(e("montage").Montage,e("ui/component").Component),r=e("collections/dict");t.AbstractControl=n.specialize({dispatchActionEvent:{value:function(){this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new r),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}}})}});