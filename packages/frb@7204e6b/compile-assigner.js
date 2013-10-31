function compile(e){return compile.semantics.compile(e)}var compileEvaluator=require("./compile-evaluator"),solve=require("./algebra"),Scope=require("./scope"),valueSyntax={type:"value"},trueScope={type:"literal",value:!0},falseScope={type:"literal",value:!1};module.exports=compile,compile.semantics={compile:function(e){var t=this.compilers;if("equals"===e.type){var n=this.compile(e.args[0]),i=this.compileEvaluator(e.args[1]);return t.equals(n,i)}if("if"===e.type){var r=this.compileEvaluator(e.args[0]),a=this.compile(e.args[1]),o=this.compile(e.args[2]);return t["if"](r,a,o)}if("and"===e.type||"or"===e.type){var s=solve(e.args[0],valueSyntax),l=solve(e.args[1],valueSyntax),u=this.compileEvaluator(e.args[0]),i=this.compileEvaluator(e.args[1]),c=this.compileEvaluator(s[1]),h=this.compileEvaluator(l[1]),n=this.compile(s[0]),d=this.compile(l[0]);return t[e.type](n,d,u,i,c,h)}if("everyBlock"===e.type){var p=this.compileEvaluator(e.args[0]),f=solve(e.args[1],{type:"literal",value:!0}),m=this.compile(f[0]),v=this.compileEvaluator(f[1]);return t.everyBlock(p,m,v)}if("parent"===e.type){var g=this.compile(e.args[0]);return function(e,t){return g(e,t.parent)}}if(t.hasOwnProperty(e.type)){var _=e.args.map(this.compileEvaluator,this.compileEvaluator.semantics);return t[e.type].apply(null,_)}throw Error("Can't compile assigner for "+JSON.stringify(e.type))},compileEvaluator:compileEvaluator,compilers:{property:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=a&&(Array.isArray(r)?r.set(a,n):r[a]=n)}}},get:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=a&&r.set(a,n)}}},has:function(e,t){return function(n,i){var r=e(i);if(r){var a=t(i);null!=n&&(n?(r.has||r.contains).call(r,a)||r.add(a):(r.has||r.contains).call(r,a)&&(r.remove||r["delete"]).call(r,a))}}},equals:function(e,t){return function(n,i){return n?e(t(i),i):void 0}},"if":function(e,t,n){return function(i,r){var a=e(r);if(null!=a)return a?t(i,r):n(i,r)}},and:function(e,t,n,i,r,a){return function(o,s){null!=o&&(o?(e(r(trueScope),s),t(a(trueScope),s)):e(n(s)&&!i(s),s))}},or:function(e,t,n,i,r,a){return function(o,s){null!=o&&(o?e(n(s)||!i(s),s):(e(r(falseScope),s),t(a(falseScope),s)))}},rangeContent:function(e){return function(t,n){var i=e(n);i&&(t?i.swap(0,i.length,t):i.clear())}},mapContent:function(e){return function(t,n){var i=e(n);i&&(i.clear(),n.value&&i.addEach(t))}},reversed:function(e){return function(t,n){var i=e(n);i&&i.swap(0,i.length,t.reversed())}},everyBlock:function(e,t,n){return function(i,r){if(i){var a=e(r),o=n(r);a.forEach(function(e){t(o,r.nest(e))})}}}}};