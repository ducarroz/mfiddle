montageDefine("663b209","ui/example-button.reel/example-button",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.ExampleButton=n.specialize({hasTemplate:{value:!1},example:{value:!1},enterDocument:{value:function(e){if(e){var t=this,n=this._element;n.classList.add("example-button"),n.addEventListener("click",function(){t._dispatchActionEvent()},!1)}}},draw:{value:function(){this._element.textContent=this.example.label}}})}});