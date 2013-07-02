montageDefine("b1cf93a","core/converter/number-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter,i=e("core/converter/converter").Validator,r=e("core/converter/converter").isNumber,o=e("core/converter/converter").isDef,a=/^([\-]?\d+\.?\d*)([K,M,G,T,P,k,m,u,n]?)[B]?$/,s=["P","T","B","M","K","","m","u","n"],l=t.NUMERIC_SCALES_SI_={"":1,n:1e-9,u:1e-6,m:.001,k:1e3,K:1e3,M:1e6,B:1e9,T:1e12,P:1e15},u=t.NUMERIC_SCALES_BINARY_={"":1,n:Math.pow(1024,-3),u:Math.pow(1024,-2),m:1/1024,k:1024,K:1024,M:Math.pow(1024,2),G:Math.pow(1024,3),T:Math.pow(1024,4),P:Math.pow(1024,5)},c=t._numericValueToString=function(e,t,n,i,r){r=r||s;var a=e,l="",u=1;0>e&&(e=-e);for(var c=0;r.length>c;c++){var h=r[c];if(u=t[h],e>=u||1>=u&&e>.1*u){l=h;break}}l?i&&(l+=i):u=1;var d=Math.pow(10,o(n)?n:2);return Math.round(a/u*d)/d+l},h=function(e,t){var n=e.match(a);return n?n[1]*t[n[2]]:0/0};t.stringToNumericValue=function(e){return e.endsWith("B")?h(e,u):h(e,l)};var d=t.numericValueToString=function(e,t){return c(e,l,t)},f=t.NumberValidator=i.specialize({allowFloat:{value:!0},allowNegative:{value:!0},validate:{value:function(e){var t;return e=e||"",e=e.replace(/,/g,""),t=r(e)?e:this.allowFloat===!0?parseFloat(e,10):parseInt(e,10),isNaN(t)?{message:"Invalid Number"}:t}}});t.NumberConverter=n.specialize({allowPartialConversion:{value:!1},validator:{value:new f},shorten:{value:null},decimals:{value:2},round:{value:null},_reg:{value:/(\d+)(\d{3})/},allowFloat:{value:!0},allowNegative:{value:!0},_makeReadable:{value:function(e,t,n){t=t||",",n=n||".";for(var i=(""+e).split("."),r=i[0],o=i.length>1?n+i[1]:"";this._reg.test(r);)r=r.replace(this._reg,"$1"+t+"$2");return r+o}},convert:{value:function(e){if(this.shorten)return d(e,this.decimals);var t;if(this.round)t=""+Number(Math.round(e));else{var n=Math.pow(10,this.decimals||2),i=1;t=Number(Math.round(e/i*n)/n)}return this._makeReadable(t)}},revert:{value:function(e){this.validator.allowFloat=this.allowFloat,this.validator.allowNegative=this.allowNegative;var t=this.validator.validate(e);if(r(t))return t;throw Error(t.message)}}})}});