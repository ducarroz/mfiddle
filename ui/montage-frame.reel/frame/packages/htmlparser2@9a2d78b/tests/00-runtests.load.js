montageDefine("9a2d78b","tests/00-runtests",{dependencies:["fs","path","assert"],factory:function(t){var e=t("fs"),n=t("path"),i=t("assert"),a=0,r=0,s=!1;["./01-events.js","./02-stream.js","./03-feed.js"].map(t).forEach(function(o){console.log("\nStarting",o.dir,"\n----");var l=n.resolve(__dirname,o.dir);e.readdirSync(l).filter(RegExp.prototype.test,/^[^\._]/).map(function(t){return n.resolve(l,t)}).map(t).forEach(function(t){a++,console.log("Testing:",t.name);var e=!1;o.test(t,function(n,o){i.ifError(n),i.deepEqual(t.expected,o,"didn't get expected output"),e?(r++,!--a&&s&&console.log("Total tests:",r)):e=!0})})});var s=!0}});