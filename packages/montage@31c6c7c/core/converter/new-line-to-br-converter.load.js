montageDefine("31c6c7c","core/converter/new-line-to-br-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter,i=function(e){return e.replace(/(\r\n|\r|\n)/g,"<br />")};t.NewLineToBrConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?i(e):e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});