var NativeControl=require("ui/native-control").NativeControl,PressComposer=require("montage/composer/press-composer").PressComposer,Dict=require("montage/collections/dict"),Button=exports.Button=NativeControl.specialize({_preventFocus:{enumerable:!1,value:!1},preventFocus:{get:function(){return this._preventFocus},set:function(t){this._preventFocus=t===!0?!0:!1}},enabled:{dependencies:["disabled"],get:function(){return!this._disabled},set:function(t){this.disabled=!t}},converter:{value:null},_labelNode:{value:void 0,enumerable:!1},_label:{value:void 0,enumerable:!1},label:{get:function(){return this._label},set:function(t){if(t&&t.length>0&&this.converter)try{t=this.converter.convert(t),this.error&&(this.error=null)}catch(e){this.error=e}this._label=t,this._isInputElement&&(this._value=t),this.needsDraw=!0}},setLabelInitialValue:{value:function(t){void 0===this._label&&(this._label=t)}},holdThreshold:{get:function(){return this._pressComposer.longPressThreshold},set:function(t){this._pressComposer.longPressThreshold=t}},_pressComposer:{enumberable:!1,value:null},_active:{enumerable:!1,value:!1},active:{get:function(){return this._active},set:function(t){this._active=t,this.needsDraw=!0}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},constructor:{value:function(){this.super(),this._pressComposer=new PressComposer,this._pressComposer.longPressThreshold=this.holdThreshold,this.addComposer(this._pressComposer)}},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},addEventListener:{value:function(t,e,n){this.super(t,e,n),"hold"===t&&this._pressComposer.addEventListener("longPress",this,!1)}},handlePressStart:{value:function(t){this.active=!0,t.touch&&document.addEventListener("touchmove",this,!1),this._preventFocus||this._element.focus()}},handlePress:{value:function(){this.active=!1,this._dispatchActionEvent(),document.removeEventListener("touchmove",this,!1)}},handleKeyup:{value:function(t){32===t.keyCode&&(this.active=!1,this._dispatchActionEvent())}},handleLongPress:{value:function(){this._pressComposer.cancelPress();var t=document.createEvent("CustomEvent");t.initCustomEvent("hold",!0,!0,null),this.dispatchEvent(t)}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(t){t.preventDefault()}},_isInputElement:{value:!1,enumerable:!1},enterDocument:{value:function(t){NativeControl.enterDocument&&NativeControl.enterDocument.apply(this,arguments),t&&(this._isInputElement="INPUT"===this.originalElement.tagName,this._isInputElement?(Object.defineProperty(this,"value",{get:function(){return this._label},set:function(t){this.label=t}}),void 0===this._label&&(this._label=this.originalElement.value)):(this.originalElement.firstChild||this.originalElement.appendChild(document.createTextNode("")),this._labelNode=this.originalElement.firstChild,this.setLabelInitialValue(this._labelNode.data),void 0===this._label&&(this._label=this._labelNode.data)),this.element.setAttribute("role","button"),this.element.addEventListener("keyup",this,!1))}},_drawLabel:{enumerable:!1,value:function(t){this._isInputElement?this._element.setAttribute("value",t):this._labelNode.data=t}},draw:{value:function(){this.super(),this._disabled?this._element.classList.add("disabled"):this._element.classList.remove("disabled"),this._active?this._element.classList.add("active"):this._element.classList.remove("active"),this._drawLabel(this.label)}},_detail:{value:null},detail:{get:function(){return null===this._detail&&(this._detail=new Dict),this._detail}},createActionEvent:{value:function(){var t,e=document.createEvent("CustomEvent");return t=this._detail,e.initCustomEvent("action",!0,!0,t),e}}});Button.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},form:null,formaction:null,formenctype:null,formmethod:null,formnovalidate:{dataType:"boolean"},formtarget:null,type:{value:"button"},name:null,value:null});