montageDefine("5e6e5a4","ui/token-field/token-field.reel/token-field",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component,i=46,r=8,a=37,o=38,s=39,l=40;t.TokenField=n.specialize({delegate:{value:null},values:{value:null},textPropertyPath:{value:null},allowAdHocValues:{value:null},placeholder:{value:null},__hasFocus:{value:null},_hasFocus:{get:function(){return this.__hasFocus},set:function(e){e!=this.__hasFocus&&(this.__hasFocus=e,this.needsDraw=!0)}},_tokensController:{value:null},_tokenList:{value:null},_autocomplete:{value:null},__autocompleteValue:{value:null},_autocompleteValue:{get:function(){return this.__autocompleteValue},set:function(e){this.__autocompleteValue=e}},__suggestedValue:{value:null},_suggestedValue:{get:function(){return this.__suggestedValue},set:function(e){if(e){var t;t=this.allowAdHocValues||"string"!=typeof e?e:this.callDelegateMethod("getRepresentedObject",e),t&&(this.__suggestedValue=t,this.values||(this.values=[]),this.values.push(this.__suggestedValue),this._autocomplete.value=""),this.__suggestedValue=null}}},prepareForActivationEvents:{value:function(){this.element.addEventListener("mouseup",this)}},enterDocument:{value:function(e){e&&(this._autocomplete.delegate=this.delegate,this.identifier&&(this._autocomplete.identifier=this.identifier),this._autocomplete.element.addEventListener("keyup",this))}},draw:{value:function(){this._hasFocus?(this._autocomplete.element.focus(),this.__hasFocus=!1):this.placeholder&&(this._autocomplete.element.style.width="auto")}},handleMouseup:{value:function(){this._hasFocus=!0}},handleKeyup:{value:function(e){var t=e.keyCode;if(this.values&&this.values.length>0){var n=this._tokensController.selectedIndexes,u=n&&n.length>0?n[0]:null,c=this.values.length-1;switch(this.values.length,t){case r:case i:this._autocompleteValue||(n&&n.length>0?(this._tokensController.removeObjectsAtSelectedIndexes(),this._tokensController.selectedIndexes=[]):this._tokensController.selectedIndexes=[this.values.length-1]);break;case a:this._autocompleteValue||(null!=u?(u-=1,0>u&&(u=c)):u=c,this._tokensController.selectedIndexes=[u]);break;case s:this._autocompleteValue||(null!=u?(u+=1,u>c&&(u=0)):u=0,this._tokensController.selectedIndexes=[u]);break;case o:null!=u&&(this._tokensController.selectedIndexes=[0]);break;case l:null!=u&&(this._tokensController.selectedIndexes=[c]);break;default:this._tokensController.selectedIndexes=[]}}}}})}});