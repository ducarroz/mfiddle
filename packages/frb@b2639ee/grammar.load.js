montageDefine("b2639ee","grammar",{dependencies:[],factory:function(e,t,n){n.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,i,r){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var i,r;switch(e.length){case 0:i="end of input";break;case 1:i=e[0];break;default:i=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return r=t?'"'+n(t)+'"':"end of input","Expected "+i+" but "+r+" found."}this.expected=e,this.found=t,this.offset=n,this.line=i,this.column=r,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,i){var r,a;for(r=n;i>r;r++)a=e.charAt(r),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Hr!==t&&(Hr>t&&(Hr=0,Yr={line:1,column:1,seenCR:!1}),n(Yr,Hr,t),Hr=t),Yr}function i(e){Gr>Wr||(Wr>Gr&&(Gr=Wr,Xr=[]),Xr.push(e))}function r(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Kr++,e=l(),Kr--,null===e&&(t=null,0===Kr&&i(Q)),e}function o(){var t,n,r,o,s,l,u;if(t=Wr,n=a(),null!==n){for(r=[],o=Wr,44===e.charCodeAt(Wr)?(s=tt,Wr++):(s=null,0===Kr&&i(nt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et);null!==o;)r.push(o),o=Wr,44===e.charCodeAt(Wr)?(s=tt,Wr++):(s=null,0===Kr&&i(nt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et);null!==r?(Ur=t,n=it(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function s(){var t,n,r,a;return t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=F(),null!==r?(41===e.charCodeAt(Wr)?(a=ot,Wr++):(a=null,0===Kr&&i(st)),null!==a?(Ur=t,n=lt(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=o(),null!==r?(41===e.charCodeAt(Wr)?(a=ot,Wr++):(a=null,0===Kr&&i(st)),null!==a?(Ur=t,n=ut(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function l(){var t,n,r,o,s,l,c,h,d,p,f;return t=Wr,n=u(),null!==n?(r=F(),null!==r?(o=Wr,63===e.charCodeAt(Wr)?(s=ht,Wr++):(s=null,0===Kr&&i(dt)),null!==s?(l=F(),null!==l?(c=a(),null!==c?(h=F(),null!==h?(58===e.charCodeAt(Wr)?(d=pt,Wr++):(d=null,0===Kr&&i(ft)),null!==d?(p=F(),null!==p?(f=a(),null!==f?(s=[s,l,c,h,d,p,f],o=s):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et),null===o&&(o=ct),null!==o?(Ur=t,n=mt(n,o),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function u(){var t,n,r,a,o,s,l,u;if(t=Wr,n=c(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(e.substr(Wr,2)===vt?(s=vt,Wr+=2):(s=null,0===Kr&&i(gt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(e.substr(Wr,2)===vt?(s=vt,Wr+=2):(s=null,0===Kr&&i(gt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function c(){var t,n,r,a,o,s,l,u;if(t=Wr,n=h(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(e.substr(Wr,2)===bt?(s=bt,Wr+=2):(s=null,0===Kr&&i(yt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(e.substr(Wr,2)===bt?(s=bt,Wr+=2):(s=null,0===Kr&&i(yt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function h(){var t,n,r,a,o,s,l,u,c;return t=Wr,n=d(),null!==n?(r=Wr,a=F(),null!==a?(o=Wr,e.substr(Wr,3)===wt?(s=wt,Wr+=3):(s=null,0===Kr&&i(Ct)),null===s&&(e.substr(Wr,2)===Et?(s=Et,Wr+=2):(s=null,0===Kr&&i(xt)),null===s&&(e.substr(Wr,2)===St?(s=St,Wr+=2):(s=null,0===Kr&&i(Tt)),null===s&&(s=Wr,60===e.charCodeAt(Wr)?(l=Pt,Wr++):(l=null,0===Kr&&i(Ot)),null!==l?(u=Wr,Kr++,45===e.charCodeAt(Wr)?(c=Mt,Wr++):(c=null,0===Kr&&i(Dt)),Kr--,null===c?u=ct:(Wr=u,u=et),null!==u?(l=[l,u],s=l):(Wr=s,s=et)):(Wr=s,s=et),null===s&&(62===e.charCodeAt(Wr)?(s=kt,Wr++):(s=null,0===Kr&&i(Lt)),null===s&&(e.substr(Wr,2)===At?(s=At,Wr+=2):(s=null,0===Kr&&i(jt)),null===s&&(e.substr(Wr,2)===It?(s=It,Wr+=2):(s=null,0===Kr&&i(zt)))))))),null!==s&&(s=e.substring(o,Wr)),o=s,null!==o?(s=F(),null!==s?(l=d(),null!==l?(a=[a,o,s,l],r=a):(Wr=r,r=et)):(Wr=r,r=et)):(Wr=r,r=et)):(Wr=r,r=et),null===r&&(r=ct),null!==r?(Ur=t,n=Rt(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function d(){var t,n,r,a,o,s,l,u;if(t=Wr,n=p(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(s=Wr,43===e.charCodeAt(Wr)?(l=Nt,Wr++):(l=null,0===Kr&&i(Bt)),null===l&&(45===e.charCodeAt(Wr)?(l=Mt,Wr++):(l=null,0===Kr&&i(Dt))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(s=Wr,43===e.charCodeAt(Wr)?(l=Nt,Wr++):(l=null,0===Kr&&i(Bt)),null===l&&(45===e.charCodeAt(Wr)?(l=Mt,Wr++):(l=null,0===Kr&&i(Dt))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function p(){var t,n,r,a,o,s,l,u;if(t=Wr,n=f(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(s=Wr,42===e.charCodeAt(Wr)?(l=Ft,Wr++):(l=null,0===Kr&&i(qt)),null===l&&(47===e.charCodeAt(Wr)?(l=Vt,Wr++):(l=null,0===Kr&&i(Wt)),null===l&&(37===e.charCodeAt(Wr)?(l=Ut,Wr++):(l=null,0===Kr&&i(Ht)),null===l&&(e.substr(Wr,3)===Yt?(l=Yt,Wr+=3):(l=null,0===Kr&&i(Gt))))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(s=Wr,42===e.charCodeAt(Wr)?(l=Ft,Wr++):(l=null,0===Kr&&i(qt)),null===l&&(47===e.charCodeAt(Wr)?(l=Vt,Wr++):(l=null,0===Kr&&i(Wt)),null===l&&(37===e.charCodeAt(Wr)?(l=Ut,Wr++):(l=null,0===Kr&&i(Ht)),null===l&&(e.substr(Wr,3)===Yt?(l=Yt,Wr+=3):(l=null,0===Kr&&i(Gt))))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function f(){var t,n,r,a,o,s,l,u;if(t=Wr,n=m(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(s=Wr,e.substr(Wr,2)===Xt?(l=Xt,Wr+=2):(l=null,0===Kr&&i(Kt)),null===l&&(e.substr(Wr,2)===Jt?(l=Jt,Wr+=2):(l=null,0===Kr&&i($t)),null===l&&(e.substr(Wr,2)===Zt?(l=Zt,Wr+=2):(l=null,0===Kr&&i(Qt)))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(s=Wr,e.substr(Wr,2)===Xt?(l=Xt,Wr+=2):(l=null,0===Kr&&i(Kt)),null===l&&(e.substr(Wr,2)===Jt?(l=Jt,Wr+=2):(l=null,0===Kr&&i($t)),null===l&&(e.substr(Wr,2)===Zt?(l=Zt,Wr+=2):(l=null,0===Kr&&i(Qt)))),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function m(){var t,n,r,a,o,s,l,u;if(t=Wr,n=v(),null!==n){for(r=[],a=Wr,o=F(),null!==o?(e.substr(Wr,2)===en?(s=en,Wr+=2):(s=null,0===Kr&&i(tn)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,o=F(),null!==o?(e.substr(Wr,2)===en?(s=en,Wr+=2):(s=null,0===Kr&&i(tn)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=_t(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function v(){var t,n,r;return t=Wr,n=Wr,33===e.charCodeAt(Wr)?(r=nn,Wr++):(r=null,0===Kr&&i(rn)),null===r&&(43===e.charCodeAt(Wr)?(r=Nt,Wr++):(r=null,0===Kr&&i(Bt)),null===r&&(45===e.charCodeAt(Wr)?(r=Mt,Wr++):(r=null,0===Kr&&i(Dt)))),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=v(),null!==r?(Ur=t,n=an(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=g()),t}function g(){var e,t,n,i;if(e=Wr,t=y(),null!==t){for(n=[],i=_();null!==i;)n.push(i),i=_();null!==n?(Ur=e,t=on(t,n),null===t?(Wr=e,e=t):e=t):(Wr=e,e=et)}else Wr=e,e=et;return e}function _(){var t,n,r,o;return t=Wr,46===e.charCodeAt(Wr)?(n=sn,Wr++):(n=null,0===Kr&&i(ln)),null!==n?(r=b(),null!==r?(Ur=t,n=un(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,91===e.charCodeAt(Wr)?(n=cn,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=a(),null!==r?(93===e.charCodeAt(Wr)?(o=dn,Wr++):(o=null,0===Kr&&i(pn)),null!==o?(Ur=t,n=fn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function b(){var t,n,r,o,l;return t=Wr,n=Wr,r=w(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(123===e.charCodeAt(Wr)?(r=mn,Wr++):(r=null,0===Kr&&i(vn)),null!==r?(o=a(),null!==o?(125===e.charCodeAt(Wr)?(l=gn,Wr++):(l=null,0===Kr&&i(_n)),null!==l?(Ur=t,n=bn(n,o),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=Wr,r=w(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=s(),null!==r?(Ur=t,n=yn(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=z(),null!==n&&(Ur=t,n=wn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=Wr,r=w(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n&&(Ur=t,n=Cn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=P(),null!==n&&(Ur=t,n=En(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=O(),null!==n&&(Ur=t,n=En(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Wr)?(o=ot,Wr++):(o=null,0===Kr&&i(st)),null!==o?(Ur=t,n=En(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et))))))),t}function y(){var t,n,r,o;return t=P(),null===t&&(t=O(),null===t&&(t=C(),null===t&&(t=k(),null===t&&(t=Wr,e.substr(Wr,4)===xn?(n=xn,Wr+=4):(n=null,0===Kr&&i(Sn)),null!==n&&(Ur=t,n=Tn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,4)===Pn?(n=Pn,Wr+=4):(n=null,0===Kr&&i(On)),null!==n&&(Ur=t,n=Mn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,5)===Dn?(n=Dn,Wr+=5):(n=null,0===Kr&&i(kn)),null!==n&&(Ur=t,n=Ln()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,4)===An?(n=An,Wr+=4):(n=null,0===Kr&&i(jn)),null!==n&&(Ur=t,n=In()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,64===e.charCodeAt(Wr)?(n=zn,Wr++):(n=null,0===Kr&&i(Rn)),null!==n?(r=Wr,o=Y(),null!==o&&(o=e.substring(r,Wr)),r=o,null!==r?(Ur=t,n=Nn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,36===e.charCodeAt(Wr)?(n=Bn,Wr++):(n=null,0===Kr&&i(Fn)),null!==n?(r=Wr,o=w(),null!==o&&(o=e.substring(r,Wr)),r=o,null!==r?(Ur=t,n=qn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,36===e.charCodeAt(Wr)?(n=Bn,Wr++):(n=null,0===Kr&&i(Fn)),null!==n&&(Ur=t,n=Vn()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,35===e.charCodeAt(Wr)?(n=Wn,Wr++):(n=null,0===Kr&&i(Un)),null!==n?(r=Wr,o=w(),null!==o&&(o=e.substring(r,Wr)),r=o,null!==r?(Ur=t,n=Hn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,38===e.charCodeAt(Wr)?(n=Yn,Wr++):(n=null,0===Kr&&i(Gn)),null!==n?(r=Wr,o=w(),null!==o&&(o=e.substring(r,Wr)),r=o,null!==r?(o=s(),null!==o?(Ur=t,n=Xn(r,o),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,94===e.charCodeAt(Wr)?(n=Kn,Wr++):(n=null,0===Kr&&i(Jn)),null!==n?(r=y(),null!==r?(Ur=t,n=$n(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,40===e.charCodeAt(Wr)?(n=rt,Wr++):(n=null,0===Kr&&i(at)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(Wr)?(o=ot,Wr++):(o=null,0===Kr&&i(st)),null!==o?(Ur=t,n=Zn(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=b(),null!==n&&(Ur=t,n=Qn(n)),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,n=[],null!==n&&(Ur=t,n=ei()),null===n?(Wr=t,t=n):t=n)))))))))))))))),t}function w(){var t,n;if(Kr++,t=[],ni.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(ii)),null!==n)for(;null!==n;)t.push(n),ni.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(ii));else t=et;return Kr--,null===t&&(n=null,0===Kr&&i(ti)),t}function C(){var t,n,r,a;if(Kr++,t=Wr,39===e.charCodeAt(Wr)?(n=ai,Wr++):(n=null,0===Kr&&i(oi)),null!==n){for(r=[],a=E();null!==a;)r.push(a),a=E();null!==r?(39===e.charCodeAt(Wr)?(a=ai,Wr++):(a=null,0===Kr&&i(oi)),null!==a?(Ur=t,n=si(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;if(null===t)if(t=Wr,34===e.charCodeAt(Wr)?(n=li,Wr++):(n=null,0===Kr&&i(ui)),null!==n){for(r=[],a=x();null!==a;)r.push(a),a=x();null!==r?(34===e.charCodeAt(Wr)?(a=li,Wr++):(a=null,0===Kr&&i(ui)),null!==a?(Ur=t,n=si(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;return Kr--,null===t&&(n=null,0===Kr&&i(ri)),t}function E(){var t,n;return ci.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(hi)),null===t&&(t=Wr,e.substr(Wr,2)===di?(n=di,Wr+=2):(n=null,0===Kr&&i(pi)),null!==n&&(Ur=t,n=fi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=S())),t}function x(){var t,n;return mi.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(vi)),null===t&&(t=Wr,e.substr(Wr,2)===gi?(n=gi,Wr+=2):(n=null,0===Kr&&i(_i)),null!==n&&(Ur=t,n=bi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=S())),t}function S(){var t,n,r,a,o,s,l,u;return t=Wr,e.substr(Wr,2)===yi?(n=yi,Wr+=2):(n=null,0===Kr&&i(wi)),null!==n&&(Ur=t,n=Ci()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ei?(n=Ei,Wr+=2):(n=null,0===Kr&&i(xi)),null!==n&&(Ur=t,n=Si()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ti?(n=Ti,Wr+=2):(n=null,0===Kr&&i(Pi)),null!==n&&(Ur=t,n=Oi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Mi?(n=Mi,Wr+=2):(n=null,0===Kr&&i(Di)),null!==n&&(Ur=t,n=ki()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Li?(n=Li,Wr+=2):(n=null,0===Kr&&i(Ai)),null!==n&&(Ur=t,n=ji()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ii?(n=Ii,Wr+=2):(n=null,0===Kr&&i(zi)),null!==n&&(Ur=t,n=Ri()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ni?(n=Ni,Wr+=2):(n=null,0===Kr&&i(Bi)),null!==n&&(Ur=t,n=Fi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===qi?(n=qi,Wr+=2):(n=null,0===Kr&&i(Vi)),null!==n&&(Ur=t,n=Wi()),null===n?(Wr=t,t=n):t=n,null===t&&(t=Wr,e.substr(Wr,2)===Ui?(n=Ui,Wr+=2):(n=null,0===Kr&&i(Hi)),null!==n?(r=Wr,a=Wr,o=T(),null!==o?(s=T(),null!==s?(l=T(),null!==l?(u=T(),null!==u?(o=[o,s,l,u],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et),null!==a&&(a=e.substring(r,Wr)),r=a,null!==r?(Ur=t,n=Yi(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et))))))))),t}function T(){var t;return Gi.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(Xi)),t}function P(){var t,n,r,a;return t=Wr,91===e.charCodeAt(Wr)?(n=cn,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=F(),null!==r?(93===e.charCodeAt(Wr)?(a=dn,Wr++):(a=null,0===Kr&&i(pn)),null!==a?(Ur=t,n=Ki(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,91===e.charCodeAt(Wr)?(n=cn,Wr++):(n=null,0===Kr&&i(hn)),null!==n?(r=o(),null!==r?(93===e.charCodeAt(Wr)?(a=dn,Wr++):(a=null,0===Kr&&i(pn)),null!==a?(Ur=t,n=Ji(r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function O(){var t,n,r,a,o,s;return t=Wr,123===e.charCodeAt(Wr)?(n=mn,Wr++):(n=null,0===Kr&&i(vn)),null!==n?(r=F(),null!==r?(125===e.charCodeAt(Wr)?(a=gn,Wr++):(a=null,0===Kr&&i(_n)),null!==a?(o=F(),null!==o?(Ur=t,n=$i(),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,123===e.charCodeAt(Wr)?(n=mn,Wr++):(n=null,0===Kr&&i(vn)),null!==n?(r=F(),null!==r?(a=M(),null!==a?(125===e.charCodeAt(Wr)?(o=gn,Wr++):(o=null,0===Kr&&i(_n)),null!==o?(s=F(),null!==s?(Ur=t,n=Zi(a),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)),t}function M(){var t,n,r,a,o,s,l;if(t=Wr,n=D(),null!==n){for(r=[],a=Wr,44===e.charCodeAt(Wr)?(o=tt,Wr++):(o=null,0===Kr&&i(nt)),null!==o?(s=F(),null!==s?(l=D(),null!==l?(o=[o,s,l],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==a;)r.push(a),a=Wr,44===e.charCodeAt(Wr)?(o=tt,Wr++):(o=null,0===Kr&&i(nt)),null!==o?(s=F(),null!==s?(l=D(),null!==l?(o=[o,s,l],a=o):(Wr=a,a=et)):(Wr=a,a=et)):(Wr=a,a=et);null!==r?(Ur=t,n=Qi(n,r),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function D(){var t,n,r,o,s;return t=Wr,n=Wr,r=w(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(58===e.charCodeAt(Wr)?(r=pt,Wr++):(r=null,0===Kr&&i(ft)),null!==r?(o=F(),null!==o?(s=a(),null!==s?(Ur=t,n=er(n,s),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function k(){var t,n,r;return Kr++,t=Wr,n=Wr,r=L(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n&&(Ur=t,n=nr(n)),null===n?(Wr=t,t=n):t=n,Kr--,null===t&&(n=null,0===Kr&&i(tr)),t}function L(){var e,t,n,i;return e=Wr,t=A(),null!==t?(n=j(),null!==n?(i=I(),null!==i?(t=[t,n,i],e=t):(Wr=e,e=et)):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=Wr,t=A(),null!==t?(n=j(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=Wr,t=A(),null!==t?(n=I(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),null===e&&(e=A()))),e}function A(){var t,n,r,a;return t=Wr,n=B(),null!==n?(r=z(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=N(),null===t&&(t=Wr,45===e.charCodeAt(Wr)?(n=Mt,Wr++):(n=null,0===Kr&&i(Dt)),null!==n?(r=B(),null!==r?(a=z(),null!==a?(n=[n,r,a],t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,45===e.charCodeAt(Wr)?(n=Mt,Wr++):(n=null,0===Kr&&i(Dt)),null!==n?(r=N(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et)))),t}function j(){var t,n,r;return t=Wr,46===e.charCodeAt(Wr)?(n=sn,Wr++):(n=null,0===Kr&&i(ln)),null!==n?(r=z(),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function I(){var e,t,n;return e=Wr,t=R(),null!==t?(n=z(),null!==n?(t=[t,n],e=t):(Wr=e,e=et)):(Wr=e,e=et),e}function z(){var e,t;if(e=[],t=N(),null!==t)for(;null!==t;)e.push(t),t=N();else e=et;return e}function R(){var t,n,r;return t=Wr,ir.test(e.charAt(Wr))?(n=e.charAt(Wr),Wr++):(n=null,0===Kr&&i(rr)),null!==n?(ar.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(or)),null===r&&(r=ct),null!==r?(n=[n,r],t=n):(Wr=t,t=et)):(Wr=t,t=et),t}function N(){var t;return sr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(lr)),t}function B(){var t;return ur.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(cr)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=V());null!==t;)e.push(t),t=q(),null===t&&(t=V());return e}function q(){var t,n;return Kr++,dr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(pr)),null===t&&(fr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(mr))),Kr--,null===t&&(n=null,0===Kr&&i(hr)),t}function V(){var t,n;return Kr++,gr.test(e.charAt(Wr))?(t=e.charAt(Wr),Wr++):(t=null,0===Kr&&i(_r)),Kr--,null===t&&(n=null,0===Kr&&i(vr)),t}function W(){var e,t,n,i;if(e=Wr,t=F(),null!==t){for(n=[],i=U();null!==i;)n.push(i),i=U();null!==n?(i=F(),null!==i?(Ur=e,t=br(n),null===t?(Wr=e,e=t):e=t):(Wr=e,e=et)):(Wr=e,e=et)}else Wr=e,e=et;return e}function U(){var t,n,r,a,o,s,l,u,c,h;return t=Wr,64===e.charCodeAt(Wr)?(n=zn,Wr++):(n=null,0===Kr&&i(Rn)),null!==n?(r=Wr,a=Y(),null!==a&&(a=e.substring(r,Wr)),r=a,null!==r?(a=F(),null!==a?(o=H(),null===o&&(o=ct),null!==o?(123===e.charCodeAt(Wr)?(s=mn,Wr++):(s=null,0===Kr&&i(vn)),null!==s?(l=F(),null!==l?(u=G(),null!==u?(125===e.charCodeAt(Wr)?(c=gn,Wr++):(c=null,0===Kr&&i(_n)),null!==c?(h=F(),null!==h?(Ur=t,n=yr(r,o,u),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),t}function H(){var t,n,r,o,s,l,u,c;return t=Wr,60===e.charCodeAt(Wr)?(n=Pt,Wr++):(n=null,0===Kr&&i(Ot)),null===n&&(58===e.charCodeAt(Wr)?(n=pt,Wr++):(n=null,0===Kr&&i(ft))),null!==n?(r=F(),null!==r?(o=C(),null===o&&(o=ct),null!==o?(s=F(),null!==s?(l=Wr,u=Wr,Kr++,123===e.charCodeAt(Wr)?(c=mn,Wr++):(c=null,0===Kr&&i(vn)),Kr--,null===c?u=ct:(Wr=u,u=et),null!==u?(c=a(),null!==c?(u=[u,c],l=u):(Wr=l,l=et)):(Wr=l,l=et),null===l&&(l=ct),null!==l?(u=F(),null!==u?(Ur=t,n=wr(n,o,l),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=F(),null!==n&&(Ur=t,n=Cr()),null===n?(Wr=t,t=n):t=n),t}function Y(){var t,n,r,a,o,s,l;if(t=Wr,n=[],Er.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(xr)),null!==r)for(;null!==r;)n.push(r),Er.test(e.charAt(Wr))?(r=e.charAt(Wr),Wr++):(r=null,0===Kr&&i(xr));else n=et;if(null!==n){if(r=[],a=Wr,58===e.charCodeAt(Wr)?(o=pt,Wr++):(o=null,0===Kr&&i(ft)),null!==o){if(s=[],Er.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr)),null!==l)for(;null!==l;)s.push(l),Er.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr));else s=et;null!==s?(o=[o,s],a=o):(Wr=a,a=et)}else Wr=a,a=et;for(;null!==a;)if(r.push(a),a=Wr,58===e.charCodeAt(Wr)?(o=pt,Wr++):(o=null,0===Kr&&i(ft)),null!==o){if(s=[],Er.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr)),null!==l)for(;null!==l;)s.push(l),Er.test(e.charAt(Wr))?(l=e.charAt(Wr),Wr++):(l=null,0===Kr&&i(xr));else s=et;null!==s?(o=[o,s],a=o):(Wr=a,a=et)}else Wr=a,a=et;null!==r?(n=[n,r],t=n):(Wr=t,t=et)}else Wr=t,t=et;return t}function G(){var t,n,r,a,o,s,l,u,c;if(t=Wr,n=X(),null!==n)if(r=F(),null!==r){for(a=[],o=Wr,59===e.charCodeAt(Wr)?(s=Sr,Wr++):(s=null,0===Kr&&i(Tr)),null!==s?(l=F(),null!==l?(u=X(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et);null!==o;)a.push(o),o=Wr,59===e.charCodeAt(Wr)?(s=Sr,Wr++):(s=null,0===Kr&&i(Tr)),null!==s?(l=F(),null!==l?(u=X(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et)):(Wr=o,o=et);null!==a?(59===e.charCodeAt(Wr)?(o=Sr,Wr++):(o=null,0===Kr&&i(Tr)),null===o&&(o=ct),null!==o?(s=F(),null!==s?(Ur=t,n=it(n,a),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)}else Wr=t,t=et;else Wr=t,t=et;return null===t&&(t=Wr,n=X(),null!==n?(r=F(),null!==r?(59===e.charCodeAt(Wr)?(a=Sr,Wr++):(a=null,0===Kr&&i(Tr)),null===a&&(a=ct),null!==a?(o=F(),null!==o?(Ur=t,n=Pr(n),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t&&(t=Wr,n=F(),null!==n&&(Ur=t,n=lt()),null===n?(Wr=t,t=n):t=n)),t}function X(){var t,n,r,o,s,l,u,c,h,d,p,f,m,v,g,_,b;if(t=Wr,e.substr(Wr,2)===Or?(n=Or,Wr+=2):(n=null,0===Kr&&i(Mr)),null===n&&(e.substr(Wr,6)===Dr?(n=Dr,Wr+=6):(n=null,0===Kr&&i(kr))),null!==n?(32===e.charCodeAt(Wr)?(r=Lr,Wr++):(r=null,0===Kr&&i(Ar)),null!==r?(o=F(),null!==o?(s=Wr,l=w(),null!==l&&(l=e.substring(s,Wr)),s=l,null!==s?(l=F(),null!==l?(e.substr(Wr,2)===jr?(u=jr,Wr+=2):(u=null,0===Kr&&i(Ir)),null!==u?(c=F(),null!==c?(h=a(),null!==h?(d=F(),null!==d?(Ur=t,n=zr(n,s,h),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et),null===t){if(t=Wr,n=a(),null!==n)if(r=F(),null!==r)if(58===e.charCodeAt(Wr)?(o=pt,Wr++):(o=null,0===Kr&&i(ft)),null===o&&(e.substr(Wr,3)===Rr?(o=Rr,Wr+=3):(o=null,0===Kr&&i(Nr)),null===o&&(e.substr(Wr,2)===Br?(o=Br,Wr+=2):(o=null,0===Kr&&i(Fr)))),null!==o)if(s=F(),null!==s)if(l=a(),null!==l)if(u=F(),null!==u){for(c=[],h=Wr,44===e.charCodeAt(Wr)?(d=tt,Wr++):(d=null,0===Kr&&i(nt)),null!==d?(p=F(),null!==p?(f=Wr,m=w(),null!==m&&(m=e.substring(f,Wr)),f=m,null!==f?(m=F(),null!==m?(58===e.charCodeAt(Wr)?(v=pt,Wr++):(v=null,0===Kr&&i(ft)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et);null!==h;)c.push(h),h=Wr,44===e.charCodeAt(Wr)?(d=tt,Wr++):(d=null,0===Kr&&i(nt)),null!==d?(p=F(),null!==p?(f=Wr,m=w(),null!==m&&(m=e.substring(f,Wr)),f=m,null!==f?(m=F(),null!==m?(58===e.charCodeAt(Wr)?(v=pt,Wr++):(v=null,0===Kr&&i(ft)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et)):(Wr=h,h=et);null!==c?(Ur=t,n=qr(n,o,l,c),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)}else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;else Wr=t,t=et;null===t&&(t=Wr,n=Wr,r=w(),null!==r&&(r=e.substring(n,Wr)),n=r,null!==n?(r=F(),null!==r?(o=a(),null!==o?(s=F(),null!==s?(Ur=t,n=Vr(n,o),null===n?(Wr=t,t=n):t=n):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et)):(Wr=t,t=et))}return t}var K,J=arguments.length>1?arguments[1]:{},$={expression:a,sheet:W},Z=a,Q="expression",et=null,tt=",",nt='","',it=function(e,t){for(var n=[e],i=0;t.length>i;i++)n.push(t[i][2]);return n},rt="(",at='"("',ot=")",st='")"',lt=function(){return[]},ut=function(e){return e},ct="",ht="?",dt='"?"',pt=":",ft='":"',mt=function(e,t){if(t){var n=t[2],i=t[6];return{type:"if",args:[e,n,i]}}return e},vt="||",gt='"||"',_t=function(e,t){for(var n=0;t.length>n;n++)e={type:Jr[t[n][1]],args:[e,t[n][3]]};return e},bt="&&",yt='"&&"',wt="<=>",Ct='"<=>"',Et="<=",xt='"<="',St=">=",Tt='">="',Pt="<",Ot='"<"',Mt="-",Dt='"-"',kt=">",Lt='">"',At="==",jt='"=="',It="!=",zt='"!="',Rt=function(e,t){if(t){var n=t[1],i=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,i]}]}:{type:Jr[n],args:[e,i]}}return e},Nt="+",Bt='"+"',Ft="*",qt='"*"',Vt="/",Wt='"/"',Ut="%",Ht='"%"',Yt="rem",Gt='"rem"',Xt="**",Kt='"**"',Jt="//",$t='"//"',Zt="%%",Qt='"%%"',en="??",tn='"??"',nn="!",rn='"!"',an=function(e,t){return{type:$r[e],args:[t]}},on=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},sn=".",ln='"."',un=function(e){return e},cn="[",hn='"["',dn="]",pn='"]"',fn=function(e){return function(t){return{type:"property",args:[t,e]}}},mn="{",vn='"{"',gn="}",_n='"}"',bn=function(e,t){return Zr[e]?function(n){return{type:Zr[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},yn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},wn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},Cn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},En=function(e){return function(t){return{type:"with",args:[t,e]}}},xn="this",Sn='"this"',Tn=function(){return{type:"value"}},Pn="true",On='"true"',Mn=function(){return{type:"literal",value:!0}},Dn="false",kn='"false"',Ln=function(){return{type:"literal",value:!1}},An="null",jn='"null"',In=function(){return{type:"literal",value:null}},zn="@",Rn='"@"',Nn=function(e){return{type:"component",label:e}},Bn="$",Fn='"$"',qn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},Vn=function(){return{type:"parameters"}},Wn="#",Un='"#"',Hn=function(e){return{type:"element",id:e}},Yn="&",Gn='"&"',Xn=function(e,t){return{type:e,args:t,inline:!0}},Kn="^",Jn='"^"',$n=function(e){return{type:"parent",args:[e]}},Zn=function(e){return e},Qn=function(e){return e({type:"value"})},ei=function(){return{type:"value"}},ti="word",ni=/^[a-zA-Z_0-9\-]/,ii="[a-zA-Z_0-9\\-]",ri="string",ai="'",oi='"\'"',si=function(e){return{type:"literal",value:e.join("")}},li='"',ui='"\\""',ci=/^[^'\\\0-\x1F]/,hi="[^'\\\\\\0-\\x1F]",di="\\'",pi='"\\\\\'"',fi=function(){return"'"},mi=/^[^"\\\0-\x1F]/,vi='[^"\\\\\\0-\\x1F]',gi='\\"',_i='"\\\\\\""',bi=function(){return'"'},yi="\\\\",wi='"\\\\\\\\"',Ci=function(){return"\\"},Ei="\\/",xi='"\\\\/"',Si=function(){return"/"},Ti="\\b",Pi='"\\\\b"',Oi=function(){return"\b"},Mi="\\f",Di='"\\\\f"',ki=function(){return"\f"},Li="\\n",Ai='"\\\\n"',ji=function(){return"\n"},Ii="\\r",zi='"\\\\r"',Ri=function(){return"\r"},Ni="\\t",Bi='"\\\\t"',Fi=function(){return"	"},qi="\\0",Vi='"\\\\0"',Wi=function(){return"\0"},Ui="\\u",Hi='"\\\\u"',Yi=function(e){return String.fromCharCode(parseInt(e,16))},Gi=/^[0-9a-fA-F]/,Xi="[0-9a-fA-F]",Ki=function(){return{type:"tuple",args:[]}},Ji=function(e){return{type:"tuple",args:e}},$i=function(){return{type:"record",args:[]}},Zi=function(e){return{type:"record",args:e}},Qi=function(e,t){var n={};n[e[0]]=e[1];for(var i=0;t.length>i;i++)n[t[i][2][0]]=t[i][2][1];return n},er=function(e,t){return[e,t]},tr="number",nr=function(e){return{type:"literal",value:+e}},ir=/^[eE]/,rr="[eE]",ar=/^[+\-]/,or="[+\\-]",sr=/^[0-9]/,lr="[0-9]",ur=/^[1-9]/,cr="[1-9]",hr="whitespace",dr=/^[\t\x0B\f \xA0\uFEFF]/,pr="[\\t\\x0B\\f \\xA0\\uFEFF]",fr=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,mr="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",vr="line terminator",gr=/^[\n\r\u2028\u2029]/,_r="[\\n\\r\\u2028\\u2029]",br=function(e){return{type:"sheet",blocks:e}},yr=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},wr=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Cr=function(){return{}},Er=/^[a-zA-Z_0-9]/,xr="[a-zA-Z_0-9]",Sr=";",Tr='";"',Pr=function(e){return[e]},Or="on",Mr='"on"',Dr="before",kr='"before"',Lr=" ",Ar='" "',jr="->",Ir='"->"',zr=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},Rr="<->",Nr='"<->"',Br="<-",Fr='"<-"',qr=function(e,t,n,i){var r={type:Qr[t],args:[e,n]};if(i.length){for(var a={},o=0;i.length>o;o++)a[i[o][2]]=i[o][6];r.descriptor=a}return r},Vr=function(e,t){return{type:"unit",name:e,value:t}},Wr=0,Ur=0,Hr=0,Yr={line:1,column:1,seenCR:!1},Gr=0,Xr=[],Kr=0;if("startRule"in J){if(!(J.startRule in $))throw Error("Can't start parsing from rule \""+J.startRule+'".');Z=$[J.startRule]}var Jr={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},$r={"+":"toNumber","-":"neg","!":"not","^":"parent"},Zr={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},Qr={":":"assign","<-":"bind","<->":"bind2"};if(K=Z(),null!==K&&Wr===e.length)return K;throw r(Xr),Ur=Math.max(Wr,Gr),new t(Xr,e.length>Ur?e.charAt(Ur):null,Ur,n(Ur).line,n(Ur).column)}return e(t,Error),{SyntaxError:t,parse:n}}()}});