var Montage=require("montage").Montage,Converter=require("core/converter/converter"),numericValueToString=require("core/converter/number-converter").numericValueToString,NumberConverter=require("core/converter/number-converter").NumberConverter,formatCurrency=function(e,t,n,i){var s=numericValueToString(e,n);return t=t||"$",0>e&&i&&(s="("+s.substring(1,s.length)+")"),s=s+" "+t};exports.CurrencyConverter=NumberConverter.specialize({currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},convert:{value:function(e){return formatCurrency(e,this.currency,this.decimals,this.useParensForNegative)}}});