montageDefine("3e301a2","runtests",{dependencies:["fs","path","assert","htmlparser2","./"],factory:function(e){function t(e,n){if(i.equal(typeof e,typeof n,"types didn't match"),"object"!=typeof e||null===e)i.strictEqual(e,n,"result doesn't equal expected");else for(var a in e)i.ok(a in n,"result didn't contain property "+a),t(e[a],n[a])}var n=e("fs"),a=e("path"),i=e("assert"),r=e("htmlparser2").Parser,s=e("./"),o=a.resolve(__dirname,"tests"),l=5;n.readdirSync(o).filter(RegExp.prototype.test,/\.json$/).map(function(e){return a.resolve(o,e)}).map(e).forEach(function(e){console.log("Testing:",e.name);for(var n=new s(function(n,a){i.ifError(n),t(e.expected,a)},e.options.handler),a=e.html,o=new r(n,e.options.parser),c=0;a.length>c;c+=l)o.write(a.substring(c,c+l));o.done(),o.parseComplete(a)}),console.log("\nAll tests passed!")}});