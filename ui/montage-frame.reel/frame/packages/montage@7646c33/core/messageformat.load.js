montageDefine("7646c33","core/messageformat",{dependencies:[],factory:function(e,t,n){(function(e){function r(e,t){var n;if(e&&t&&(r.locale[e]=t),n=e=e||"en",t=t||r.locale[n=r.Utils.getFallbackLocale(e)],!t)throw Error("Plural Function not found for locale: "+e);this.pluralFunc=t,this.locale=e,this.fallbackLocale=n}r.locale={en:function(e){return 1===e?"one":"other"}},r.SafeString=function(e){this.string=e},r.SafeString.prototype.toString=function(){return""+this.string},r.Utils={numSub:function(e,t,n){return e.replace(/^#|[^\\]#/g,function(e){var r=e&&2===e.length?e.charAt(0):"";return r+'" + (function(){ var x = '+t+';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_'+n+'+"` isnt a number.");\n}\nreturn x;\n})() + "'})},escapeExpression:function(e){var t={"\n":"\\n",'"':'\\"'},n=/[\n"]/g,i=/[\n"]/,a=function(e){return t[e]||"&amp;"};return e instanceof r.SafeString?""+e:null===e||e===!1?"":i.test(e)?e.replace(n,a):e},getFallbackLocale:function(e){for(var t=e.indexOf("-")>=0?"-":"_";!r.locale.hasOwnProperty(e);)if(e=e.substring(0,e.lastIndexOf(t)),0===e.length)return null;return e}};var i=function(){var e={parse:function(e,t){function n(e,t,n){for(var r=e,i=n-e.length,a=0;i>a;a++)r=t+r;return r}function r(e){var t=e.charCodeAt(0);if(255>=t)var r="x",i=2;else var r="u",i=4;return"\\"+r+n(t.toString(16).toUpperCase(),"0",i)}function i(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/[\x80-\uFFFF]/g,r)+'"'}function a(e){k>C||(C>k&&(k=C,L=[]),L.push(e))}function o(){var e="start@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=s(),i=null!==r?function(e){return{type:"program",program:e}}(r):null;if(null!==i)var a=i;else{var a=null;C=n}return A[e]={nextPos:C,result:a},a}function s(){var e="messageFormatPattern@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=C,i=b();if(null!==i){for(var a=[],o=l();null!==o;){a.push(o);var o=l()}if(null!==a)var s=[i,a];else{var s=null;C=r}}else{var s=null;C=r}var u=null!==s?function(e,t){var n=[];e&&e.val&&n.push(e);for(var r in t)t.hasOwnProperty(r)&&n.push(t[r]);return{type:"messageFormatPattern",statements:n}}(s[0],s[1]):null;if(null!==u)var c=u;else{var c=null;C=n}return A[e]={nextPos:C,result:c},c}function l(){var t="messageFormatPatternRight@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C;if("{"===e.substr(C,1)){var o="{";C+=1}else{var o=null;x&&a('"{"')}if(null!==o){var s=P();if(null!==s){var l=u();if(null!==l){var c=P();if(null!==c){if("}"===e.substr(C,1)){var d="}";C+=1}else{var d=null;x&&a('"}"')}if(null!==d){var h=b();if(null!==h)var f=[o,s,l,c,d,h];else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}var v=null!==f?function(e,t){var n=[];return e&&n.push(e),t&&t.val&&n.push(t),{type:"messageFormatPatternRight",statements:n}}(f[2],f[5]):null;if(null!==v)var p=v;else{var p=null;C=r}return A[t]={nextPos:C,result:p},p}function u(){var t="messageFormatElement@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C,o=y();if(null!==o){var s=C;if(","===e.substr(C,1)){var l=",";C+=1}else{var l=null;x&&a('","')}if(null!==l){var u=c();if(null!==u)var d=[l,u];else{var d=null;C=s}}else{var d=null;C=s}var h=null!==d?d:"";if(null!==h)var f=[o,h];else{var f=null;C=i}}else{var f=null;C=i}var v=null!==f?function(e,t){var n={type:"messageFormatElement",argumentIndex:e};return t&&t.length?n.elementFormat=t[1]:n.output=!0,n}(f[0],f[1]):null;if(null!==v)var p=v;else{var p=null;C=r}return A[t]={nextPos:C,result:p},p}function c(){var t="elementFormat@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C,o=P();if(null!==o){if("plural"===e.substr(C,6)){var s="plural";C+=6}else{var s=null;x&&a('"plural"')}if(null!==s){var l=P();if(null!==l){if(","===e.substr(C,1)){var u=",";C+=1}else{var u=null;x&&a('","')}if(null!==u){var c=P();if(null!==c){var f=d();if(null!==f){var v=P();if(null!==v)var p=[o,s,l,u,c,f,v];else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}var m=null!==p?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(p[1],p[5]):null;if(null!==m)var g=m;else{var g=null;C=r}if(null!==g)var b=g;else{var y=C,_=C,E=P();if(null!==E){if("select"===e.substr(C,6)){var w="select";C+=6}else{var w=null;x&&a('"select"')}if(null!==w){var M=P();if(null!==M){if(","===e.substr(C,1)){var T=",";C+=1}else{var T=null;x&&a('","')}if(null!==T){var S=P();if(null!==S){var O=h();if(null!==O){var D=P();if(null!==D)var k=[E,w,M,T,S,O,D];else{var k=null;C=_}}else{var k=null;C=_}}else{var k=null;C=_}}else{var k=null;C=_}}else{var k=null;C=_}}else{var k=null;C=_}}else{var k=null;C=_}var L=null!==k?function(e,t){return{type:"elementFormat",key:e,val:t.val}}(k[1],k[5]):null;if(null!==L)var I=L;else{var I=null;C=y}if(null!==I)var b=I;else var b=null}return A[t]={nextPos:C,result:b},b}function d(){var e="pluralStyle@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=f(),i=null!==r?function(e){return{type:"pluralStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;C=n}return A[e]={nextPos:C,result:a},a}function h(){var e="selectStyle@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=p(),i=null!==r?function(e){return{type:"selectStyle",val:e}}(r):null;if(null!==i)var a=i;else{var a=null;C=n}return A[e]={nextPos:C,result:a},a}function f(){var e="pluralFormatPattern@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=C,i=v(),a=null!==i?i:"";if(null!==a){for(var o=[],s=m();null!==s;){o.push(s);var s=m()}if(null!==o)var l=[a,o];else{var l=null;C=r}}else{var l=null;C=r}var u=null!==l?function(e,t){var n={type:"pluralFormatPattern",pluralForms:t};return n.offset=e?e:0,n}(l[0],l[1]):null;if(null!==u)var c=u;else{var c=null;C=n}return A[e]={nextPos:C,result:c},c}function v(){var t="offsetPattern@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C,o=P();if(null!==o){if("offset"===e.substr(C,6)){var s="offset";C+=6}else{var s=null;x&&a('"offset"')}if(null!==s){var l=P();if(null!==l){if(":"===e.substr(C,1)){var u=":";C+=1}else{var u=null;x&&a('":"')}if(null!==u){var c=P();if(null!==c){var d=w();if(null!==d){var h=P();if(null!==h)var f=[o,s,l,u,c,d,h];else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}}else{var f=null;C=i}var v=null!==f?function(e){return e}(f[5]):null;if(null!==v)var p=v;else{var p=null;C=r}return A[t]={nextPos:C,result:p},p}function p(){var e="selectFormatPattern@"+C,t=A[e];if(t)return C=t.nextPos,t.result;for(var n=C,r=[],i=m();null!==i;){r.push(i);var i=m()}var a=null!==r?function(e){return{type:"selectFormatPattern",pluralForms:e}}(r):null;if(null!==a)var o=a;else{var o=null;C=n}return A[e]={nextPos:C,result:o},o}function m(){var t="pluralForms@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C,o=P();if(null!==o){var l=g();if(null!==l){var u=P();if(null!==u){if("{"===e.substr(C,1)){var c="{";C+=1}else{var c=null;x&&a('"{"')}if(null!==c){var d=P();if(null!==d){var h=s();if(null!==h){var f=P();if(null!==f){if("}"===e.substr(C,1)){var v="}";C+=1}else{var v=null;x&&a('"}"')}if(null!==v)var p=[o,l,u,c,d,h,f,v];else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}}else{var p=null;C=i}var m=null!==p?function(e,t){return{type:"pluralForms",key:e,val:t}}(p[1],p[5]):null;if(null!==m)var b=m;else{var b=null;C=r}return A[t]={nextPos:C,result:b},b}function g(){var t="stringKey@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=y(),o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;C=r}if(null!==s)var l=s;else{var u=C,c=C;if("="===e.substr(C,1)){var d="=";C+=1}else{var d=null;x&&a('"="')}if(null!==d){var h=w();if(null!==h)var f=[d,h];else{var f=null;C=c}}else{var f=null;C=c}var v=null!==f?function(e){return e}(f[1]):null;if(null!==v)var p=v;else{var p=null;C=u}if(null!==p)var l=p;else var l=null}return A[t]={nextPos:C,result:l},l}function b(){var e="string@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=C,i=P();if(null!==i){var a=[],o=C,s=P();if(null!==s){var l=_();if(null!==l){var u=P();if(null!==u)var c=[s,l,u];else{var c=null;C=o}}else{var c=null;C=o}}else{var c=null;C=o}for(;null!==c;){a.push(c);var o=C,s=P();if(null!==s){var l=_();if(null!==l){var u=P();if(null!==u)var c=[s,l,u];else{var c=null;C=o}}else{var c=null;C=o}}else{var c=null;C=o}}if(null!==a)var d=[i,a];else{var d=null;C=r}}else{var d=null;C=r}var h=null!==d?function(e,t){for(var n=[],r=0;t.length>r;++r)for(var i=0;t[r].length>i;++i)n.push(t[r][i]);return{type:"string",val:e+n.join("")}}(d[0],d[1]):null;if(null!==h)var f=h;else{var f=null;C=n}return A[e]={nextPos:C,result:f},f}function y(){var t="id@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C,i=C,o=P();if(null!==o){if(null!==e.substr(C).match(/^[a-zA-Z$_]/)){var s=e.charAt(C);C++}else{var s=null;x&&a("[a-zA-Z$_]")}if(null!==s){var l=[];if(null!==e.substr(C).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(C);C++}else{var u=null;x&&a("[^ 	\\n\\r,.+={}]")}for(;null!==u;)if(l.push(u),null!==e.substr(C).match(/^[^ 	\n\r,.+={}]/)){var u=e.charAt(C);C++}else{var u=null;x&&a("[^ 	\\n\\r,.+={}]")}if(null!==l){var c=P();if(null!==c)var d=[o,s,l,c];else{var d=null;C=i}}else{var d=null;C=i}}else{var d=null;C=i}}else{var d=null;C=i}var h=null!==d?function(e,t){return e+(t?t.join(""):"")}(d[1],d[2]):null;if(null!==h)var f=h;else{var f=null;C=r}return A[t]={nextPos:C,result:f},f}function _(){var e="chars@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=C,r=E();if(null!==r)for(var i=[];null!==r;){i.push(r);var r=E()}else var i=null;var a=null!==i?function(e){return e.join("")}(i):null;if(null!==a)var o=a;else{var o=null;C=n}return A[e]={nextPos:C,result:o},o}function E(){var t="char@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C;if(null!==e.substr(C).match(/^[^{}\\\0- 	\n\r]/)){var i=e.charAt(C);C++}else{var i=null;x&&a("[^{}\\\\\\0- 	\\n\\r]")}var o=null!==i?function(e){return e}(i):null;if(null!==o)var s=o;else{var s=null;C=r}if(null!==s)var l=s;else{var u=C;if("\\#"===e.substr(C,2)){var c="\\#";C+=2}else{var c=null;x&&a('"\\\\#"')}var d=null!==c?function(){return"\\#"}():null;if(null!==d)var h=d;else{var h=null;C=u}if(null!==h)var l=h;else{var f=C;if("\\{"===e.substr(C,2)){var v="\\{";C+=2}else{var v=null;x&&a('"\\\\{"')}var p=null!==v?function(){return"{"}():null;if(null!==p)var m=p;else{var m=null;C=f}if(null!==m)var l=m;else{var g=C;if("\\}"===e.substr(C,2)){var b="\\}";C+=2}else{var b=null;x&&a('"\\\\}"')}var y=null!==b?function(){return"}"}():null;if(null!==y)var _=y;else{var _=null;C=g}if(null!==_)var l=_;else{var E=C,w=C;if("\\u"===e.substr(C,2)){var P="\\u";C+=2}else{var P=null;x&&a('"\\\\u"')}if(null!==P){var T=M();if(null!==T){var S=M();if(null!==S){var O=M();if(null!==O){var D=M();if(null!==D)var k=[P,T,S,O,D];else{var k=null;C=w}}else{var k=null;C=w}}else{var k=null;C=w}}else{var k=null;C=w}}else{var k=null;C=w}var L=null!==k?function(e,t,n,r){return String.fromCharCode(parseInt("0x"+e+t+n+r))}(k[1],k[2],k[3],k[4]):null;if(null!==L)var I=L;else{var I=null;C=E}if(null!==I)var l=I;else var l=null}}}}return A[t]={nextPos:C,result:l},l}function w(){var t="digits@"+C,n=A[t];if(n)return C=n.nextPos,n.result;var r=C;if(null!==e.substr(C).match(/^[0-9]/)){var i=e.charAt(C);C++}else{var i=null;x&&a("[0-9]")}if(null!==i)for(var o=[];null!==i;)if(o.push(i),null!==e.substr(C).match(/^[0-9]/)){var i=e.charAt(C);C++}else{var i=null;x&&a("[0-9]")}else var o=null;var s=null!==o?function(e){return parseInt(e.join(""),10)}(o):null;if(null!==s)var l=s;else{var l=null;C=r}return A[t]={nextPos:C,result:l},l}function M(){var t="hexDigit@"+C,n=A[t];if(n)return C=n.nextPos,n.result;if(null!==e.substr(C).match(/^[0-9a-fA-F]/)){var r=e.charAt(C);C++}else{var r=null;x&&a("[0-9a-fA-F]")}return A[t]={nextPos:C,result:r},r}function P(){var e="_@"+C,t=A[e];if(t)return C=t.nextPos,t.result;var n=x;x=!1;for(var r=C,i=[],o=T();null!==o;){i.push(o);var o=T()}var s=null!==i?function(e){return e.join("")}(i):null;if(null!==s)var l=s;else{var l=null;C=r}return x=n,x&&null===l&&a("whitespace"),A[e]={nextPos:C,result:l},l}function T(){var t="whitespace@"+C,n=A[t];if(n)return C=n.nextPos,n.result;if(null!==e.substr(C).match(/^[ 	\n\r]/)){var r=e.charAt(C);C++}else{var r=null;x&&a("[ 	\\n\\r]")}return A[t]={nextPos:C,result:r},r}function S(){function t(e){e.sort();for(var t=null,n=[],r=0;e.length>r;r++)e[r]!==t&&(n.push(e[r]),t=e[r]);switch(n.length){case 0:return"end of input";case 1:return n[0];default:return n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}}var n=t(L),r=Math.max(C,k),a=e.length>r?i(e.charAt(r)):"end of input";return"Expected "+n+" but "+a+" found."}function O(){for(var t=1,n=1,r=!1,i=0;k>i;i++){var a=e.charAt(i);"\n"===a?(r||t++,n=1,r=!1):"\r"===a|"\u2028"===a||"\u2029"===a?(t++,n=1,r=!0):(n++,r=!1)}return{line:t,column:n}}var D={_:P,"char":E,chars:_,digits:w,elementFormat:c,hexDigit:M,id:y,messageFormatElement:u,messageFormatPattern:s,messageFormatPatternRight:l,offsetPattern:v,pluralFormatPattern:f,pluralForms:m,pluralStyle:d,selectFormatPattern:p,selectStyle:h,start:o,string:b,stringKey:g,whitespace:T};if(void 0!==t){if(void 0===D[t])throw Error("Invalid rule name: "+i(t)+".")}else t="start";var C=0,x=!0,k=0,L=[],A={},I=D[t]();if(null===I||C!==e.length){var j=O();throw new this.SyntaxError(S(),j.line,j.column)}return I},toSource:function(){return this._source}};return e.SyntaxError=function(e,t,n){this.name="SyntaxError",this.message=e,this.line=t,this.column=n},e.SyntaxError.prototype=Error.prototype,e}();r.prototype.parse=function(){return i.parse.apply(i,arguments)},r.prototype.precompile=function(e){function t(e,o){o=o||{};var s,l,u,c="";switch(e.type){case"program":return t(e.program);case"messageFormatPattern":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return a.begin+c+a.end;case"messageFormatPatternRight":for(s=0;e.statements.length>s;++s)c+=t(e.statements[s],o);return c;case"messageFormatElement":return o.pf_count=o.pf_count||0,c+='if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n',e.output?c+='r += d["'+e.argumentIndex+'"];\n':(u="lastkey_"+(o.pf_count+1),c+="var "+u+' = "'+e.argumentIndex+'";\n',c+="var k_"+(o.pf_count+1)+"=d["+u+"];\n",c+=t(e.elementFormat,o)),c;case"elementFormat":return"select"===e.key?(c+=t(e.val,o),c+="r += (pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+" ] || pf_"+o.pf_count+'[ "other" ])( d );\n'):"plural"===e.key&&(c+=t(e.val,o),c+="if ( pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ] ) {\n',c+="r += pf_"+o.pf_count+"[ k_"+(o.pf_count+1)+' + "" ]( d ); \n',c+="}\nelse {\n",c+="r += (pf_"+o.pf_count+'[ MessageFormat.locale["'+n.fallbackLocale+'"]( k_'+(o.pf_count+1)+" - off_"+o.pf_count+" ) ] || pf_"+o.pf_count+'[ "other" ] )( d );\n',c+="}\n"),c;case"pluralFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = "+e.offset+";\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in pluralFormatPattern "+o.pf_count);return c;case"selectFormatPattern":for(o.pf_count=o.pf_count||0,c+="var off_"+o.pf_count+" = 0;\n",c+="var pf_"+o.pf_count+" = { \n",i=!0,s=0;e.pluralForms.length>s;++s)"other"===e.pluralForms[s].key&&(i=!1),l?c+=",\n":l=1,c+='"'+e.pluralForms[s].key+'" : '+t(e.pluralForms[s].val,function(){var e=JSON.parse(JSON.stringify(o));return e.pf_count++,e}());if(c+="\n};\n",i)throw Error("No 'other' form found in selectFormatPattern "+o.pf_count);return c;case"string":return'r += "'+r.Utils.numSub(r.Utils.escapeExpression(e.val),"k_"+o.pf_count+" - off_"+(o.pf_count-1),o.pf_count)+'";\n';default:throw Error("Bad AST type: "+e.type)}}var n=this,i=!1,a={begin:'function(d){\nvar r = "";\n',end:"return r;\n}"};return t(e)},r.prototype.compile=function(e){return Function("MessageFormat","return "+this.precompile(this.parse(e)))(r)},t!==void 0?(n!==void 0&&n.exports&&(t=n.exports=r),t.MessageFormat=r):"function"==typeof define&&define.amd?define(function(){return r}):e.MessageFormat=r})(this)}});