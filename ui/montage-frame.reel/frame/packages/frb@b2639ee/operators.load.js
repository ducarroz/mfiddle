montageDefine("b2639ee","operators",{dependencies:["collections/shim-object","collections/shim-regexp","collections/map","collections/set"],factory:function(e,t){e("collections/shim-object"),e("collections/shim-regexp");var n=e("collections/map"),i=e("collections/set");t.toNumber=function(e){return+e},t.toString=function(e){return null==e?e:"string"==typeof e||"number"==typeof e?""+e:null},t.toArray=Array.from,t.toMap=n,t.toSet=i,t.not=function(e){return!e},t.neg=function(e){return-e},t.pow=function(e,t){return Math.pow(e,t)},t.root=function(e,t){return Math.pow(e,1/t)},t.log=function(e,t){return Math.log(e)/Math.log(t)},t.mul=function(e,t){return e*t},t.div=function(e,t){return e/t},t.mod=function(e,t){return(e%t+t)%t},t.rem=function(e,t){return e%t},t.add=function(e,t){return e+t},t.sub=function(e,t){return e-t},t.ceil=function(e){return Math.ceil(e)},t.floor=function(e){return Math.floor(e)},t.round=function(e){return Math.round(e)},t.lt=function(e,t){return 0>Object.compare(e,t)},t.gt=function(e,t){return Object.compare(e,t)>0},t.le=function(e,t){return 0>=Object.compare(e,t)},t.ge=function(e,t){return Object.compare(e,t)>=0},t.equals=Object.equals,t.compare=Object.compare,t.and=function(e,t){return e&&t},t.or=function(e,t){return e||t},t.defined=function(e){return null!=e},t.startsWith=function(e,t){var n=RegExp("^"+RegExp.escape(t));return n.test(e)},t.endsWith=function(e,t){var n=RegExp(RegExp.escape(t)+"$");return n.test(e)},t.contains=function(e,t){var n=RegExp(RegExp.escape(t));return n.test(e)},t.join=function(e,t){return e.join(t||"")},t.split=function(e,t){return e.split(t||"")},t.range=function(e){for(var t=[],n=0;e>n;n++)t.push(n);return t},t.last=function(e){return e.get(e.length-1)}}});