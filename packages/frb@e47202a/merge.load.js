montageDefine("e47202a","merge",{dependencies:["collections/shim"],factory:function(t,e){"use strict";function n(t,e){for(var n,i=(e.length+1)*(t.length+1),a=Array(i),r=Array(e.length+1),s=Array(e.length+1),o=0;t.length+1>o;o++){for(var l=0;e.length+1>l;l++){var c,u;if(0===o&&0===l)c=" ",u=0;else if(0===o)c="insert",u=l;else if(0===l)c="delete",u=o;else if(t[o-1]===e[l-1])c="retain",u=s[l-1];else{var h=r[l-1],d=s[l];h>d?(c="delete",u=d+1):(c="insert",u=h+1)}a[o+l*(t.length+1)]=c,r[l]=u}n=r,r=s,s=n}return{edges:a,cost:s[e.length],source:e,target:t}}function i(t){for(var e,n,i=[],a=t.edges,r=e=t.target.length,s=t.source.length;e||s;){var o=a[e+s*(r+1)];if("delete"===o){if(n&&"delete"===n[0])n[1]++;else{var l=["delete",1];n=l,i.push(l)}e--}else if("insert"===o){if(n&&"insert"===n[0])n[1]++;else{var l=["insert",1];n=l,i.push(l)}s--}else if("retain"===o){var l=["retain",1];n&&"retain"===n[0]?n[1]++:(n=l,i.push(l)),e--,s--}}return i.reverse(),i}function a(t,e){return i(n(t,e))}function r(t,e){for(var n=a(t,e),i=[],r=0,s=0,o=0;n.length>o;){var l=n[o++];if("insert"===l[0])i.push([s,0,e.slice(s,s+l[1])]),s+=l[1];else if("delete"===l[0])if(n.length>o&&"insert"===n[o][0]){var c=n[o++];i.push([s,l[1],e.slice(s,s+c[1])]),r+=l[1],s+=c[1]}else i.push([s,l[1]]),r+=l[1];else"retain"==l[0]&&(r+=l[1],s+=l[1])}return i}function s(t,e){for(var n=0;e.length>n;n++)t.swap.apply(t,e[n])}function o(t,e){s(t,r(t,e))}t("collections/shim"),e.graphOt=n,e.traceOt=i,e.ot=a,e.diff=r,e.apply=s,e.merge=o}});