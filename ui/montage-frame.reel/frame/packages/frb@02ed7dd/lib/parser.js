function makeParser(e){return function(t){var n,r=0,i=1,a=e.apply(this,[function(e){return n=e,expectEof()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var o=0;t.length>o;o++)a=a(t[o],{index:o,line:i,column:r}),"\n"===t[o]?(i++,r=0):r++;a=a("",{index:o,line:i,column:r})}catch(s){if(s.loc){var l=s.loc;s.message+=t.length>80?" at line "+l.line+", column "+l.column:" in "+JSON.stringify(t)+" at index "+l.index}throw s}return n}}function expectEof(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function r(){return r}}}function makeExpect(e){return function(t){return function(n,r){return n===e?t(n,r):t(null,r)(n,r)}}}exports.makeParser=makeParser,exports.expectEof=expectEof,exports.makeExpect=makeExpect;