montageDefine("02ed7dd","language",{dependencies:["collections/set","collections/dict"],factory:function(e,t){var n=e("collections/set"),r=e("collections/dict"),i=t.precedence=r(),a=t.precedenceLevels=[["tuple","record"],["literal","value","parameters","property","element","component","mapBlock","filterBlock","sortedBlock","groupBlock","groupMapBlock","with"],["not","neg","number","parent"],["scope"],["default"],["pow","root","log"],["mul","div","mod","rem"],["add","sub"],["equals","lt","gt","le","ge","compare"],["and"],["or"],["if"]];a.forEach(function(e){var t=n(i.keys());e.forEach(function(e){i.set(e,t)})});var o=t.operatorTokens=r({"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","!=":"notEquals","??":"default","&&":"and","||":"or","?":"then",":":"else"});t.operatorTypes=r(o.map(function(e,t){return[e,t]}))}});