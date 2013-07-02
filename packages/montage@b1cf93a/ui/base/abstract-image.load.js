montageDefine("b1cf93a","ui/base/abstract-image",{dependencies:["montage","ui/component","core/mini-url"],factory:function(e,t){var n=(e("montage").Montage,e("ui/component").Component),r=e("core/mini-url"),i=t.AbstractImage=n.specialize({constructor:{value:function i(){if(this.constructor===i)throw Error("AbstractImage cannot be instantiated.");n.constructor.call(this),this._image=new Image,this._image.onload=this.handleImageLoad.bind(this),this.addPathChangeListener("_ownerDocumentPart",this,"_rebaseSrc")}},emptyImageSrc:{value:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},_isLoadingImage:{value:!1},_image:{value:null},_src:{value:null},src:{set:function(e){this._src!==e&&(this._src=e,e=this._getRebasedSrc(),e?(this._isLoadingImage=!0,this._isInvalidSrc=!1,this._image.src=e):this._isInvalidSrc=!0,this.needsDraw=!0)},get:function(){return this._src}},_isInvalidSrc:{value:!0},width:{value:null},height:{value:null},_textAlternative:{value:null},textAlternative:{set:function(e){this._textAlternative=e,this.needsDraw=!0},get:function(){return this._textAlternative}},_rebaseSrc:{value:function(){var e;e=this._getRebasedSrc(),e&&(this.src=e)}},_getRebasedSrc:{value:function(){var e,t=this._src,n=/^[\w\-]+:|^\//;if(t){if(n.test(t))return t;if(this._ownerDocumentPart&&(e=this._ownerDocumentPart.template.getBaseUrl()))return r.resolve(e,t)}return null}},enterDocument:{value:function(e){e&&this.element.setAttribute("role","img")}},draw:{value:function(){this.element.src=this._isLoadingImage||this._isInvalidSrc?this.emptyImageSrc:this._src,this.element.setAttribute("aria-label",this._textAlternative)}},handleImageLoad:{value:function(){this._isLoadingImage=!1,this.needsDraw=!0}}})}});