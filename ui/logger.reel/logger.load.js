montageDefine("27de9f6","ui/logger.reel/logger",{dependencies:["montage/ui/component"],factory:function(t,e){var n=t("montage/ui/component").Component;e.Logger=n.specialize({constructor:{value:function(){this.super()}},_scroller:{value:null},_output:{value:null},input:{distinct:!0,value:[]},_isOpen:{value:!1},isOpen:{get:function(){return this._isOpen},set:function(t){this._isOpen!==t&&(this._isOpen=t,this.needsDraw=!0)}},_value:{value:""},_newMessages:{distinct:!0,value:[]},templateDidLoad:{value:function(){this.addRangeAtPathChangeListener("input",this,"handleInputChange")}},log:{value:function(t){this._newMessages.push(t),this.needsDraw=!0}},draw:{value:function(){var t=this._newMessages;if(t.length>0){this._value+=t.join("\n")+"\n",t.length=0,this._element.classList.add("Logger-hilight"),this._scroller.scrollY=Number.MAX_VALUE;var e=this;window.setTimeout(function(){e.needsDraw=!0},100)}else this._element.classList.remove("Logger-hilight");this.isOpen?(this._element.classList.add("open"),this._scroller.needsDraw=!0):(this._element.classList.remove("open"),this._scroller.scrollY=Number.MAX_VALUE),this._output.textContent=this._value}},handleInputChange:{value:function(t){for(var e,n=0;e=t[n];n++)this.log(e)}},handleClearAction:{value:function(){this._value="",this.needsDraw=!0}}})}});