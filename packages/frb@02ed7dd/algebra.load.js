montageDefine("02ed7dd","algebra",{dependencies:[],factory:function(e,t,n){function i(e,t){return i.semantics.solve(e,t)}n.exports=i,i.semantics={solve:function(e,t){for(;;){for(;this.simplifiers.hasOwnProperty(e.type);){var n=this.simplifiers[e.type](e);if(!n)break;e=n}if(!this.solvers.hasOwnProperty(e.type))break;t=this.solvers[e.type](e,t),e=e.args[0]}return[e,t]},simplifiers:{not:function(e){var t=e.args[0];return"not"===t.type?t.args[0]:void 0},add:function(e){var t=e.args[0];return"literal"===t.type&&""===t.value?{type:"toString",args:[e.args[1]]}:void 0},someBlock:function(e){return{type:"not",args:[{type:"everyBlock",args:[e.args[0],{type:"not",args:[e.args[1]]}]}]}}},solvers:{reflect:function(e,t){return{type:e.type,args:[t]}},invert:function(e,t,n){return{type:n,args:[t,e.args[1]]}},toNumber:function(e,t){return this.reflect(e,t)},toString:function(e,t){return this.reflect(e,t)},not:function(e,t){return this.reflect(e,t)},neg:function(e,t){return this.reflect(e,t)},add:function(e,t){return this.invert(e,t,"sub")},sub:function(e,t){return this.invert(e,t,"add")},mul:function(e,t){return this.invert(e,t,"div")},div:function(e,t){return this.invert(e,t,"mul")},pow:function(e,t){return this.invert(e,t,"root")},root:function(e,t){return this.invert(e,t,"pow")}}}}});