montageDefine("e47202a","observe",{dependencies:["./parse","./compile-observer","./observers","./scope"],factory:function(t,e,n){function i(t,e,n){var i;i="function"==typeof n?{change:n}:n,i=i||c,i.source=t,i.sourcePath=e;var u=i.parameters=i.parameters||t,h=i.document,d=i.components,p=i.beforeChange,g=i.contentChange,m=new l(t,null,u,h,d,p),v=a(e),f=r(v);return g===!0&&(f=s.makeRangeContentObserver(f)),f(o(function(e){if(e){if("function"!=typeof g)return i.change.apply(t,arguments);if("function"==typeof g)return e.addRangeChangeListener(g),s.once(function(){e.removeRangeChangeListener(g)})}else;}),m)}var a=t("./parse"),r=t("./compile-observer"),s=t("./observers"),o=s.autoCancelPrevious,l=t("./scope");n.exports=i;var c={}}});