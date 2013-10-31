montageDefine("31c6c7c","ui/overlay.reel/overlay",{dependencies:["montage","ui/component","composer/press-composer"],factory:function(e,t){var n=(e("montage").Montage,e("ui/component").Component),i=e("composer/press-composer").PressComposer,r="montage-Overlay";t.Overlay=n.specialize({_pressComposer:{value:null},_anchor:{value:null},anchor:{set:function(e){this._anchor=e,this.needsDraw=!0},get:function(){return this._anchor}},_position:{value:null},position:{set:function(e){this._position=e,this.needsDraw=!0},get:function(){return this._position}},_drawPosition:{value:null},_isShown:{value:!1},isShown:{get:function(){return this._isShown}},_isDisplayed:{value:!1},_resizeHandlerTimeout:{value:null},delegate:{value:null},constructor:{value:function(){this.super(),this._pressComposer=new i,this._pressComposer.lazyLoad=!0}},enterDocument:{value:function(e){var t,n;e&&(t=this.element.ownerDocument.body,t.appendChild(this.element),this.attachToParentComponent(),n=this.element.ownerDocument.defaultView,n.addEventListener("resize",this),this.addComposerForElement(this._pressComposer,this.element.ownerDocument),this._pressComposer.addEventListener("pressStart",this,!1))}},show:{value:function(){this._isShown||(this.attachToParentComponent(),this.classList.add(r+"--visible"),this._pressComposer.load(),this._isShown=!0,this.needsDraw=!0)}},hide:{value:function(){this._isShown&&(this.classList.remove(r+"--visible"),this._pressComposer.unload(),this._isShown=!1,this.needsDraw=!0)}},handleResize:{value:function(){this.isShown&&(this.needsDraw=!0)}},handlePressStart:{value:function(e){var t=e.targetElement,n=this.element;n.contains(t)||(this.hide(),this._dispatchDismissEvent())}},willDraw:{value:function(){this._isDisplayed&&this._isShown&&this._calculatePosition()}},draw:{value:function(){this._isShown?this._isDisplayed?(this._reposition(),this.element.style.visibility="visible"):(this.element.style.visibility="hidden",this._isDisplayed=!0,this.needsDraw=!0):this._isDisplayed=!1}},didDraw:{value:function(){this._isShown||this.detachFromParentComponent()}},_reposition:{value:function(){var e=this._drawPosition;this.element.style.top=e.top+"px",this.element.style.left=e.left+"px"}},_getElementPosition:{value:function(e){var t=0,n=0;do t+=e.offsetLeft,n+=e.offsetTop;while(e=e.offsetParent);return{top:n,left:t}}},_calculatePosition:{value:function(){var e,t;e=this.position?this.position:this.anchor?this._calculateAnchorPosition():this._calculateCenteredPosition(),t=this.callDelegateMethod("willPositionOverlay",this,e),t&&(e=t),this._drawPosition=e}},_calculateAnchorPosition:{value:function(){var e,t=this.anchor,n=this.element.offsetWidth,i=this._getElementPosition(t),r=t.offsetHeight||0,a=t.offsetWidth||0;return e={top:i.top+r,left:i.left+a/2-n/2},0>e.left&&(e.left=0),e}},_calculateCenteredPosition:{value:function(){var e=this.element.ownerDocument.defaultView,t=e.innerHeight,n=e.innerWidth,i=this.element.offsetHeight,r=this.element.offsetWidth;return{top:t/2-i/2,left:n/2-r/2}}},_dispatchDismissEvent:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("dismiss",!0,!0),this.dispatchEvent(e)}}})}});