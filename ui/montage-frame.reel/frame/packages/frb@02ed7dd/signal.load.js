montageDefine("02ed7dd","signal",{dependencies:["collections/map"],factory:function(e,t,n){function r(e){var t=new i;return t.getDefault=function(){return 0},{observe:function(n){return n(e),t.set(n,t.get(n)+1),function(){t.set(n,t.get(n)-1)}},emit:function(n){e=n,t.forEach(function(e,t){t(n)})}}}var i=e("collections/map");n.exports=r}});