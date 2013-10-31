var Bindings=require("montage/core/bindings").Bindings,RangeController=require("montage/core/range-controller").RangeController,NativeControl=require("ui/native-control").NativeControl,PressComposer=require("montage/composer/press-composer").PressComposer,Select=exports.Select=NativeControl.specialize({_fromInput:{value:null},_synching:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){for(var t=this.content,n=[],i=0,r=e.length;r>i;i++)n.push(t[e[i]][this.valuePropertyPath||"value"]);1>=e.length?this.value=n[0]:this.values=n}},constructor:{value:function Select(){this.super(),this._selectedIndexes=[],this._selectedIndexes.addRangeChangeListener(this,"selectedIndexes")}},handleSelectedIndexesRangeChange:{value:function(){this.needsDraw===!1&&(this.needsDraw=this._synching||!this._fromInput)}},_setContentControllerSelectedIndexes:{value:function(e){for(var t,n=this.content,i=this._contentController.selection,r=0,a=n.length;a>r;r++)e.indexOf(r)>=0?-1===i.indexOf(n[r])&&i.push(n[r]):(t=i.indexOf(n[r]),t>=0&&i.splice(t,1))}},_content:{value:null,enumerable:!1},content:{set:function(e){if(this._content=e,!this.contentController){var t=new RangeController;t.content=e,this.contentController=t}this.needsDraw=!0},get:function(){return this._content}},valuePropertyPath:{value:null},textPropertyPath:{value:null},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){this._contentController!==e&&(this._contentController=e,e.multiSelect=this.multiple,Bindings.defineBindings(this,{content:{"<-":"_contentController.organizedContent"},_selection:{"<-":"_contentController.selection"},"_selectedIndexes.rangeContent()":{"<-":"content.enumerate().filter{$_selection.has(.1)}.map{.0}"}}))}},_getSelectedValuesFromIndexes:{value:function(){var e,t,n=this._selectedIndexes,i=this._content,r=n.length;if(r>0){e=[],t=this.valuePropertyPath||"value";for(var a=0;r>a;a++)i[n[a]][t]&&e.push(i[n[a]][t])}return e}},_synchValues:{value:function(){this._synching||(this._synching=!0,this.values=this._getSelectedValuesFromIndexes(),this.value=this.values&&this.values.length>0?this.values[0]:null,this._synching=!1)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){var t=this.content;if(e&&t&&(this._values=e,!this._synching)){for(var n,i=[],r=0,a=this._values.length;a>r;r++)n=this._indexOf(this._values[r]),n>=0&&i.push(n);this._synching=!0,this._setContentControllerSelectedIndexes(i),this._synching=!1}}},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._synching||(this.values=null==e?[]:[e])}},blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}},_addOptionsFromMarkup:{value:function(){var e=this.element,t=e.querySelectorAll("option");if(!this.contentController){var n=new RangeController,i=[],r=[];if(t&&t.length>0){for(var a,o=0,s=t.length;s>o;o++){a=t[o].getAttribute("selected");var l={value:t[o].value,text:t[o].textContent};a&&i.push(l),r.push(l)}0===i.length&&s>0&&i.push(r[0]),this._fromInput=!0,this.contentController=n,n.content=r,n.selection=i}}}},deserializedFromTemplate:{value:function(){this._addOptionsFromMarkup()}},_removeAll:{value:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},_refreshOptions:{value:function(){var e,t,n,i,r=this.content||[],a=r.length;for(e=0;a>e;e++)t=document.createElement("option"),"string"==typeof r[e]?n=i=r[e]:(n=r[e][this.textPropertyPath||"text"],i=r[e][this.valuePropertyPath||"value"]),t.value=i,t.textContent=n||i,this._selectedIndexes&&this._selectedIndexes.length>0&&this._selectedIndexes.indexOf(e)>=0&&t.setAttribute("selected","true"),this.element.appendChild(t);0===this._selectedIndexes.length&&this.element.selectedIndex>=0&&(this._selectedIndexes[0]=this.element.selectedIndex)}},enterDocument:{value:function(e){e&&(this.element.addEventListener("focus",this),this.element.addEventListener("change",this))}},prepareForActivationEvents:{value:function(){var e=new PressComposer;this.addComposer(e)}},draw:{enumerable:!1,value:function(){var e=this.element;this._fromInput=!1,this._synching=!1,this._removeAll(e),this._refreshOptions(),this.super()}},didDraw:{value:function(){this._synchValues()}},_indexOf:{value:function(e){var t,n,i=this.content||[],r=i.length;for(t=0;r>t;t++)if(n="string"==typeof i[t]?i[t]:i[t][this.valuePropertyPath||"value"],n&&n===e)return t;return-1}},_getSelectedOptions:{value:function(e){var t,n=e.querySelectorAll("option"),i=n.length,r=[];for(t=0;i>t;t++)n[t].selected&&r.push(n[t]);return r}},_getSelectedOptionsIndexes:{value:function(e){var t,n=e.querySelectorAll("option"),i=n.length,r=[];for(t=0;i>t;t++)n[t].selected&&r.push(t);return r}},handleChange:{value:function(){var e=this._getSelectedOptionsIndexes(this.element);e.length>0&&(this._fromInput=!0,this._synching=!1,this._setContentControllerSelectedIndexes(e),this._synchValues()),this._dispatchActionEvent()}}});Select.addAttributes({autofocus:{dataType:"boolean"},disabled:{dataType:"boolean"},form:null,multiple:{dataType:"boolean"},name:null,required:{dataType:"boolean"},size:{dataType:"number",value:"1"}});