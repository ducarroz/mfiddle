montageDefine("b1cf93a","core/converter/currency-converter",{dependencies:["montage","core/converter/converter","core/converter/number-converter"],factory:function(e,t){e("montage").Montage,e("core/converter/converter");var n=e("core/converter/number-converter").numericValueToString,i=e("core/converter/number-converter").NumberConverter,s=function(e,t,i,s){var a=n(e,i);return t=t||"$",0>e&&s&&(a="("+a.substring(1,a.length)+")"),a=a+" "+t};t.CurrencyConverter=i.specialize({currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},convert:{value:function(e){return s(e,this.currency,this.decimals,this.useParensForNegative)}}})}});