montageDefine("b1cf93a","core/converter/bytes-converter",{dependencies:["montage","core/converter/converter","core/converter/number-converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter,i=e("core/converter/number-converter")._numericValueToString;e("core/converter/number-converter")._stringToNumericValue;var r=e("core/converter/number-converter").NUMERIC_SCALES_BINARY_,o=e("core/converter/converter").isDef,a=["P","T","G","M","K","","m","u","n"],s=function(e,t,n){var s="";return(!o(n)||n)&&(s="B"),i(e,r,t,s,a)},l=function(e,t){return s(e,t,!1)};t.BytesConverter=n.specialize({decimals:{value:2},convert:{value:function(e){return l(e,this.decimals)}},revert:{value:function(e){return e}}})}});