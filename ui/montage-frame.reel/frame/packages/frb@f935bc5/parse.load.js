montageDefine("f935bc5","parse",{dependencies:["collections/shim","./grammar"],factory:function(e,t,n){function i(e,t){if(Array.isArray(e))return{type:"tuple",args:e.map(function(e){return i(e,t)})};try{return r.parse(e,t||Object.empty)}catch(n){throw n.message=n.message.replace(/[\s\.]+$/,"")+" "+" on line "+n.line+" column "+n.column,n}}e("collections/shim");var r=e("./grammar");n.exports=i}});