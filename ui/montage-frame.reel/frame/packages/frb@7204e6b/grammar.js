module.exports=function(){function e(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function t(e,t,n,i,r){function a(e,t){function n(e){function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+t(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+t(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+t(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+t(e)})}var i,r;switch(e.length){case 0:i="end of input";break;case 1:i=e[0];break;default:i=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return r=t?'"'+n(t)+'"':"end of input","Expected "+i+" but "+r+" found."}this.expected=e,this.found=t,this.offset=n,this.line=i,this.column=r,this.name="SyntaxError",this.message=a(e,t)}function n(e){function n(t){function n(t,n,i){var r,a;for(r=n;i>r;r++)a=e.charAt(r),"\n"===a?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===a||"\u2028"===a||"\u2029"===a?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return Wr!==t&&(Wr>t&&(Wr=0,Ur={line:1,column:1,seenCR:!1}),n(Ur,Wr,t),Wr=t),Ur}function i(e){Hr>qr||(qr>Hr&&(Hr=qr,Yr=[]),Yr.push(e))}function r(e){var t=0;for(e.sort();e.length>t;)e[t-1]===e[t]?e.splice(t,1):t++}function a(){var e,t;return Gr++,e=l(),Gr--,null===e&&(t=null,0===Gr&&i(Z)),e}function o(){var t,n,r,o,s,l,u;if(t=qr,n=a(),null!==n){for(r=[],o=qr,44===e.charCodeAt(qr)?(s=et,qr++):(s=null,0===Gr&&i(tt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q);null!==o;)r.push(o),o=qr,44===e.charCodeAt(qr)?(s=et,qr++):(s=null,0===Gr&&i(tt)),null!==s?(l=F(),null!==l?(u=a(),null!==u?(s=[s,l,u],o=s):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q);null!==r?(Vr=t,n=nt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function s(){var t,n,r,a;return t=qr,40===e.charCodeAt(qr)?(n=it,qr++):(n=null,0===Gr&&i(rt)),null!==n?(r=F(),null!==r?(41===e.charCodeAt(qr)?(a=at,qr++):(a=null,0===Gr&&i(ot)),null!==a?(Vr=t,n=st(),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,40===e.charCodeAt(qr)?(n=it,qr++):(n=null,0===Gr&&i(rt)),null!==n?(r=o(),null!==r?(41===e.charCodeAt(qr)?(a=at,qr++):(a=null,0===Gr&&i(ot)),null!==a?(Vr=t,n=lt(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)),t}function l(){var t,n,r,o,s,l,c,h,d,p,f;return t=qr,n=u(),null!==n?(r=F(),null!==r?(o=qr,63===e.charCodeAt(qr)?(s=ct,qr++):(s=null,0===Gr&&i(ht)),null!==s?(l=F(),null!==l?(c=a(),null!==c?(h=F(),null!==h?(58===e.charCodeAt(qr)?(d=dt,qr++):(d=null,0===Gr&&i(pt)),null!==d?(p=F(),null!==p?(f=a(),null!==f?(s=[s,l,c,h,d,p,f],o=s):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q),null===o&&(o=ut),null!==o?(Vr=t,n=ft(n,o),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),t}function u(){var t,n,r,a,o,s,l,u;if(t=qr,n=c(),null!==n){for(r=[],a=qr,o=F(),null!==o?(e.substr(qr,2)===mt?(s=mt,qr+=2):(s=null,0===Gr&&i(vt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(e.substr(qr,2)===mt?(s=mt,qr+=2):(s=null,0===Gr&&i(vt)),null!==s?(l=F(),null!==l?(u=c(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function c(){var t,n,r,a,o,s,l,u;if(t=qr,n=h(),null!==n){for(r=[],a=qr,o=F(),null!==o?(e.substr(qr,2)===_t?(s=_t,qr+=2):(s=null,0===Gr&&i(bt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(e.substr(qr,2)===_t?(s=_t,qr+=2):(s=null,0===Gr&&i(bt)),null!==s?(l=F(),null!==l?(u=h(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function h(){var t,n,r,a,o,s,l,u,c;return t=qr,n=d(),null!==n?(r=qr,a=F(),null!==a?(o=qr,e.substr(qr,3)===yt?(s=yt,qr+=3):(s=null,0===Gr&&i(wt)),null===s&&(e.substr(qr,2)===Ct?(s=Ct,qr+=2):(s=null,0===Gr&&i(Et)),null===s&&(e.substr(qr,2)===St?(s=St,qr+=2):(s=null,0===Gr&&i(Tt)),null===s&&(s=qr,60===e.charCodeAt(qr)?(l=xt,qr++):(l=null,0===Gr&&i(Pt)),null!==l?(u=qr,Gr++,45===e.charCodeAt(qr)?(c=Ot,qr++):(c=null,0===Gr&&i(Mt)),Gr--,null===c?u=ut:(qr=u,u=Q),null!==u?(l=[l,u],s=l):(qr=s,s=Q)):(qr=s,s=Q),null===s&&(62===e.charCodeAt(qr)?(s=Dt,qr++):(s=null,0===Gr&&i(kt)),null===s&&(e.substr(qr,2)===Lt?(s=Lt,qr+=2):(s=null,0===Gr&&i(At)),null===s&&(e.substr(qr,2)===jt?(s=jt,qr+=2):(s=null,0===Gr&&i(It)))))))),null!==s&&(s=e.substring(o,qr)),o=s,null!==o?(s=F(),null!==s?(l=d(),null!==l?(a=[a,o,s,l],r=a):(qr=r,r=Q)):(qr=r,r=Q)):(qr=r,r=Q)):(qr=r,r=Q),null===r&&(r=ut),null!==r?(Vr=t,n=zt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),t}function d(){var t,n,r,a,o,s,l,u;if(t=qr,n=p(),null!==n){for(r=[],a=qr,o=F(),null!==o?(s=qr,43===e.charCodeAt(qr)?(l=Rt,qr++):(l=null,0===Gr&&i(Bt)),null===l&&(45===e.charCodeAt(qr)?(l=Ot,qr++):(l=null,0===Gr&&i(Mt))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(s=qr,43===e.charCodeAt(qr)?(l=Rt,qr++):(l=null,0===Gr&&i(Bt)),null===l&&(45===e.charCodeAt(qr)?(l=Ot,qr++):(l=null,0===Gr&&i(Mt))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=p(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function p(){var t,n,r,a,o,s,l,u;if(t=qr,n=f(),null!==n){for(r=[],a=qr,o=F(),null!==o?(s=qr,42===e.charCodeAt(qr)?(l=Nt,qr++):(l=null,0===Gr&&i(Ft)),null===l&&(47===e.charCodeAt(qr)?(l=qt,qr++):(l=null,0===Gr&&i(Vt)),null===l&&(37===e.charCodeAt(qr)?(l=Wt,qr++):(l=null,0===Gr&&i(Ut)),null===l&&(e.substr(qr,3)===Ht?(l=Ht,qr+=3):(l=null,0===Gr&&i(Yt))))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(s=qr,42===e.charCodeAt(qr)?(l=Nt,qr++):(l=null,0===Gr&&i(Ft)),null===l&&(47===e.charCodeAt(qr)?(l=qt,qr++):(l=null,0===Gr&&i(Vt)),null===l&&(37===e.charCodeAt(qr)?(l=Wt,qr++):(l=null,0===Gr&&i(Ut)),null===l&&(e.substr(qr,3)===Ht?(l=Ht,qr+=3):(l=null,0===Gr&&i(Yt))))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=f(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function f(){var t,n,r,a,o,s,l,u;if(t=qr,n=m(),null!==n){for(r=[],a=qr,o=F(),null!==o?(s=qr,e.substr(qr,2)===Gt?(l=Gt,qr+=2):(l=null,0===Gr&&i(Xt)),null===l&&(e.substr(qr,2)===Kt?(l=Kt,qr+=2):(l=null,0===Gr&&i(Jt)),null===l&&(e.substr(qr,2)===$t?(l=$t,qr+=2):(l=null,0===Gr&&i(Zt)))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(s=qr,e.substr(qr,2)===Gt?(l=Gt,qr+=2):(l=null,0===Gr&&i(Xt)),null===l&&(e.substr(qr,2)===Kt?(l=Kt,qr+=2):(l=null,0===Gr&&i(Jt)),null===l&&(e.substr(qr,2)===$t?(l=$t,qr+=2):(l=null,0===Gr&&i(Zt)))),null!==l&&(l=e.substring(s,qr)),s=l,null!==s?(l=F(),null!==l?(u=m(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function m(){var t,n,r,a,o,s,l,u;if(t=qr,n=v(),null!==n){for(r=[],a=qr,o=F(),null!==o?(e.substr(qr,2)===Qt?(s=Qt,qr+=2):(s=null,0===Gr&&i(en)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,o=F(),null!==o?(e.substr(qr,2)===Qt?(s=Qt,qr+=2):(s=null,0===Gr&&i(en)),null!==s?(l=F(),null!==l?(u=v(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=gt(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function v(){var t,n,r;return t=qr,n=qr,33===e.charCodeAt(qr)?(r=tn,qr++):(r=null,0===Gr&&i(nn)),null===r&&(43===e.charCodeAt(qr)?(r=Rt,qr++):(r=null,0===Gr&&i(Bt)),null===r&&(45===e.charCodeAt(qr)?(r=Ot,qr++):(r=null,0===Gr&&i(Mt)))),null!==r&&(r=e.substring(n,qr)),n=r,null!==n?(r=v(),null!==r?(Vr=t,n=rn(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=g()),t}function g(){var e,t,n,i;if(e=qr,t=y(),null!==t){for(n=[],i=_();null!==i;)n.push(i),i=_();null!==n?(Vr=e,t=an(t,n),null===t?(qr=e,e=t):e=t):(qr=e,e=Q)}else qr=e,e=Q;return e}function _(){var t,n,r,o;return t=qr,46===e.charCodeAt(qr)?(n=on,qr++):(n=null,0===Gr&&i(sn)),null!==n?(r=b(),null!==r?(Vr=t,n=ln(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,91===e.charCodeAt(qr)?(n=un,qr++):(n=null,0===Gr&&i(cn)),null!==n?(r=a(),null!==r?(93===e.charCodeAt(qr)?(o=hn,qr++):(o=null,0===Gr&&i(dn)),null!==o?(Vr=t,n=pn(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)),t}function b(){var t,n,r,o,l;return t=qr,n=w(),null!==n?(123===e.charCodeAt(qr)?(r=fn,qr++):(r=null,0===Gr&&i(mn)),null!==r?(o=a(),null!==o?(125===e.charCodeAt(qr)?(l=vn,qr++):(l=null,0===Gr&&i(gn)),null!==l?(Vr=t,n=_n(n,o),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,n=w(),null!==n?(r=s(),null!==r?(Vr=t,n=bn(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,n=z(),null!==n&&(Vr=t,n=yn(n)),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,n=w(),null!==n&&(Vr=t,n=wn(n)),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,n=P(),null!==n&&(Vr=t,n=Cn(n)),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,n=O(),null!==n&&(Vr=t,n=Cn(n)),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,40===e.charCodeAt(qr)?(n=it,qr++):(n=null,0===Gr&&i(rt)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(qr)?(o=at,qr++):(o=null,0===Gr&&i(ot)),null!==o?(Vr=t,n=Cn(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q))))))),t}function y(){var t,n,r,o;return t=P(),null===t&&(t=O(),null===t&&(t=C(),null===t&&(t=k(),null===t&&(t=qr,e.substr(qr,4)===En?(n=En,qr+=4):(n=null,0===Gr&&i(Sn)),null!==n&&(Vr=t,n=Tn()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,4)===xn?(n=xn,qr+=4):(n=null,0===Gr&&i(Pn)),null!==n&&(Vr=t,n=On()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,5)===Mn?(n=Mn,qr+=5):(n=null,0===Gr&&i(Dn)),null!==n&&(Vr=t,n=kn()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,4)===Ln?(n=Ln,qr+=4):(n=null,0===Gr&&i(An)),null!==n&&(Vr=t,n=jn()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,64===e.charCodeAt(qr)?(n=In,qr++):(n=null,0===Gr&&i(zn)),null!==n?(r=w(),null!==r?(Vr=t,n=Rn(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,36===e.charCodeAt(qr)?(n=Bn,qr++):(n=null,0===Gr&&i(Nn)),null!==n?(r=w(),null!==r?(Vr=t,n=Fn(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,36===e.charCodeAt(qr)?(n=Bn,qr++):(n=null,0===Gr&&i(Nn)),null!==n&&(Vr=t,n=qn()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,35===e.charCodeAt(qr)?(n=Vn,qr++):(n=null,0===Gr&&i(Wn)),null!==n?(r=w(),null!==r?(Vr=t,n=Un(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,38===e.charCodeAt(qr)?(n=Hn,qr++):(n=null,0===Gr&&i(Yn)),null!==n?(r=w(),null!==r?(o=s(),null!==o?(Vr=t,n=Gn(r,o),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,94===e.charCodeAt(qr)?(n=Xn,qr++):(n=null,0===Gr&&i(Kn)),null!==n?(r=y(),null!==r?(Vr=t,n=Jn(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,40===e.charCodeAt(qr)?(n=it,qr++):(n=null,0===Gr&&i(rt)),null!==n?(r=a(),null!==r?(41===e.charCodeAt(qr)?(o=at,qr++):(o=null,0===Gr&&i(ot)),null!==o?(Vr=t,n=$n(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,n=b(),null!==n&&(Vr=t,n=Zn(n)),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,n=[],null!==n&&(Vr=t,n=Qn()),null===n?(qr=t,t=n):t=n)))))))))))))))),t}function w(){var t,n,r;if(Gr++,t=qr,n=[],ti.test(e.charAt(qr))?(r=e.charAt(qr),qr++):(r=null,0===Gr&&i(ni)),null!==r)for(;null!==r;)n.push(r),ti.test(e.charAt(qr))?(r=e.charAt(qr),qr++):(r=null,0===Gr&&i(ni));else n=Q;return null!==n&&(Vr=t,n=ii(n)),null===n?(qr=t,t=n):t=n,Gr--,null===t&&(n=null,0===Gr&&i(ei)),t}function C(){var t,n,r,a;if(Gr++,t=qr,39===e.charCodeAt(qr)?(n=ai,qr++):(n=null,0===Gr&&i(oi)),null!==n){for(r=[],a=E();null!==a;)r.push(a),a=E();null!==r?(39===e.charCodeAt(qr)?(a=ai,qr++):(a=null,0===Gr&&i(oi)),null!==a?(Vr=t,n=si(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)}else qr=t,t=Q;if(null===t)if(t=qr,34===e.charCodeAt(qr)?(n=li,qr++):(n=null,0===Gr&&i(ui)),null!==n){for(r=[],a=S();null!==a;)r.push(a),a=S();null!==r?(34===e.charCodeAt(qr)?(a=li,qr++):(a=null,0===Gr&&i(ui)),null!==a?(Vr=t,n=si(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)}else qr=t,t=Q;return Gr--,null===t&&(n=null,0===Gr&&i(ri)),t}function E(){var t,n;return ci.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(hi)),null===t&&(t=qr,e.substr(qr,2)===di?(n=di,qr+=2):(n=null,0===Gr&&i(pi)),null!==n&&(Vr=t,n=fi()),null===n?(qr=t,t=n):t=n,null===t&&(t=T())),t}function S(){var t,n;return mi.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(vi)),null===t&&(t=qr,e.substr(qr,2)===gi?(n=gi,qr+=2):(n=null,0===Gr&&i(_i)),null!==n&&(Vr=t,n=bi()),null===n?(qr=t,t=n):t=n,null===t&&(t=T())),t}function T(){var t,n,r,a,o,s,l,u;return t=qr,e.substr(qr,2)===yi?(n=yi,qr+=2):(n=null,0===Gr&&i(wi)),null!==n&&(Vr=t,n=Ci()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Ei?(n=Ei,qr+=2):(n=null,0===Gr&&i(Si)),null!==n&&(Vr=t,n=Ti()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===xi?(n=xi,qr+=2):(n=null,0===Gr&&i(Pi)),null!==n&&(Vr=t,n=Oi()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Mi?(n=Mi,qr+=2):(n=null,0===Gr&&i(Di)),null!==n&&(Vr=t,n=ki()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Li?(n=Li,qr+=2):(n=null,0===Gr&&i(Ai)),null!==n&&(Vr=t,n=ji()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Ii?(n=Ii,qr+=2):(n=null,0===Gr&&i(zi)),null!==n&&(Vr=t,n=Ri()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Bi?(n=Bi,qr+=2):(n=null,0===Gr&&i(Ni)),null!==n&&(Vr=t,n=Fi()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===qi?(n=qi,qr+=2):(n=null,0===Gr&&i(Vi)),null!==n&&(Vr=t,n=Wi()),null===n?(qr=t,t=n):t=n,null===t&&(t=qr,e.substr(qr,2)===Ui?(n=Ui,qr+=2):(n=null,0===Gr&&i(Hi)),null!==n?(r=qr,a=qr,o=x(),null!==o?(s=x(),null!==s?(l=x(),null!==l?(u=x(),null!==u?(o=[o,s,l,u],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q),null!==a&&(a=e.substring(r,qr)),r=a,null!==r?(Vr=t,n=Yi(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q))))))))),t}function x(){var t;return Gi.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(Xi)),t}function P(){var t,n,r,a;return t=qr,91===e.charCodeAt(qr)?(n=un,qr++):(n=null,0===Gr&&i(cn)),null!==n?(r=F(),null!==r?(93===e.charCodeAt(qr)?(a=hn,qr++):(a=null,0===Gr&&i(dn)),null!==a?(Vr=t,n=Ki(),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,91===e.charCodeAt(qr)?(n=un,qr++):(n=null,0===Gr&&i(cn)),null!==n?(r=o(),null!==r?(93===e.charCodeAt(qr)?(a=hn,qr++):(a=null,0===Gr&&i(dn)),null!==a?(Vr=t,n=Ji(r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)),t}function O(){var t,n,r,a,o,s;return t=qr,123===e.charCodeAt(qr)?(n=fn,qr++):(n=null,0===Gr&&i(mn)),null!==n?(r=F(),null!==r?(125===e.charCodeAt(qr)?(a=vn,qr++):(a=null,0===Gr&&i(gn)),null!==a?(o=F(),null!==o?(Vr=t,n=$i(),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,123===e.charCodeAt(qr)?(n=fn,qr++):(n=null,0===Gr&&i(mn)),null!==n?(r=F(),null!==r?(a=M(),null!==a?(125===e.charCodeAt(qr)?(o=vn,qr++):(o=null,0===Gr&&i(gn)),null!==o?(s=F(),null!==s?(Vr=t,n=Zi(a),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)),t}function M(){var t,n,r,a,o,s,l;if(t=qr,n=D(),null!==n){for(r=[],a=qr,44===e.charCodeAt(qr)?(o=et,qr++):(o=null,0===Gr&&i(tt)),null!==o?(s=F(),null!==s?(l=D(),null!==l?(o=[o,s,l],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==a;)r.push(a),a=qr,44===e.charCodeAt(qr)?(o=et,qr++):(o=null,0===Gr&&i(tt)),null!==o?(s=F(),null!==s?(l=D(),null!==l?(o=[o,s,l],a=o):(qr=a,a=Q)):(qr=a,a=Q)):(qr=a,a=Q);null!==r?(Vr=t,n=Qi(n,r),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;return t}function D(){var t,n,r,o,s;return t=qr,n=w(),null!==n?(58===e.charCodeAt(qr)?(r=dt,qr++):(r=null,0===Gr&&i(pt)),null!==r?(o=F(),null!==o?(s=a(),null!==s?(Vr=t,n=er(n,s),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),t}function k(){var t,n,r;return Gr++,t=qr,n=qr,r=L(),null!==r&&(r=e.substring(n,qr)),n=r,null!==n&&(Vr=t,n=nr(n)),null===n?(qr=t,t=n):t=n,Gr--,null===t&&(n=null,0===Gr&&i(tr)),t}function L(){var e,t,n,i;return e=qr,t=A(),null!==t?(n=j(),null!==n?(i=I(),null!==i?(t=[t,n,i],e=t):(qr=e,e=Q)):(qr=e,e=Q)):(qr=e,e=Q),null===e&&(e=qr,t=A(),null!==t?(n=j(),null!==n?(t=[t,n],e=t):(qr=e,e=Q)):(qr=e,e=Q),null===e&&(e=qr,t=A(),null!==t?(n=I(),null!==n?(t=[t,n],e=t):(qr=e,e=Q)):(qr=e,e=Q),null===e&&(e=A()))),e}function A(){var t,n,r,a;return t=qr,n=N(),null!==n?(r=z(),null!==r?(n=[n,r],t=n):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=B(),null===t&&(t=qr,45===e.charCodeAt(qr)?(n=Ot,qr++):(n=null,0===Gr&&i(Mt)),null!==n?(r=N(),null!==r?(a=z(),null!==a?(n=[n,r,a],t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,45===e.charCodeAt(qr)?(n=Ot,qr++):(n=null,0===Gr&&i(Mt)),null!==n?(r=B(),null!==r?(n=[n,r],t=n):(qr=t,t=Q)):(qr=t,t=Q)))),t}function j(){var t,n,r;return t=qr,46===e.charCodeAt(qr)?(n=on,qr++):(n=null,0===Gr&&i(sn)),null!==n?(r=z(),null!==r?(n=[n,r],t=n):(qr=t,t=Q)):(qr=t,t=Q),t}function I(){var e,t,n;return e=qr,t=R(),null!==t?(n=z(),null!==n?(t=[t,n],e=t):(qr=e,e=Q)):(qr=e,e=Q),e}function z(){var e,t;if(e=[],t=B(),null!==t)for(;null!==t;)e.push(t),t=B();else e=Q;return e}function R(){var t,n,r;return t=qr,ir.test(e.charAt(qr))?(n=e.charAt(qr),qr++):(n=null,0===Gr&&i(rr)),null!==n?(ar.test(e.charAt(qr))?(r=e.charAt(qr),qr++):(r=null,0===Gr&&i(or)),null===r&&(r=ut),null!==r?(n=[n,r],t=n):(qr=t,t=Q)):(qr=t,t=Q),t}function B(){var t;return sr.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(lr)),t}function N(){var t;return ur.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(cr)),t}function F(){var e,t;for(e=[],t=q(),null===t&&(t=V());null!==t;)e.push(t),t=q(),null===t&&(t=V());return e}function q(){var t,n;return Gr++,dr.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(pr)),null===t&&(fr.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(mr))),Gr--,null===t&&(n=null,0===Gr&&i(hr)),t}function V(){var t,n;return Gr++,gr.test(e.charAt(qr))?(t=e.charAt(qr),qr++):(t=null,0===Gr&&i(_r)),Gr--,null===t&&(n=null,0===Gr&&i(vr)),t}function W(){var e,t,n,i;if(e=qr,t=F(),null!==t){for(n=[],i=U();null!==i;)n.push(i),i=U();null!==n?(i=F(),null!==i?(Vr=e,t=br(n),null===t?(qr=e,e=t):e=t):(qr=e,e=Q)):(qr=e,e=Q)}else qr=e,e=Q;return e}function U(){var t,n,r,a,o,s,l,u,c,h;return t=qr,64===e.charCodeAt(qr)?(n=In,qr++):(n=null,0===Gr&&i(zn)),null!==n?(r=w(),null!==r?(a=F(),null!==a?(o=H(),null===o&&(o=ut),null!==o?(123===e.charCodeAt(qr)?(s=fn,qr++):(s=null,0===Gr&&i(mn)),null!==s?(l=F(),null!==l?(u=Y(),null!==u?(125===e.charCodeAt(qr)?(c=vn,qr++):(c=null,0===Gr&&i(gn)),null!==c?(h=F(),null!==h?(Vr=t,n=yr(r,o,u),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),t}function H(){var t,n,r,o,s,l,u,c;return t=qr,60===e.charCodeAt(qr)?(n=xt,qr++):(n=null,0===Gr&&i(Pt)),null===n&&(58===e.charCodeAt(qr)?(n=dt,qr++):(n=null,0===Gr&&i(pt))),null!==n?(r=F(),null!==r?(o=C(),null===o&&(o=ut),null!==o?(s=F(),null!==s?(l=qr,u=qr,Gr++,123===e.charCodeAt(qr)?(c=fn,qr++):(c=null,0===Gr&&i(mn)),Gr--,null===c?u=ut:(qr=u,u=Q),null!==u?(c=a(),null!==c?(u=[u,c],l=u):(qr=l,l=Q)):(qr=l,l=Q),null===l&&(l=ut),null!==l?(u=F(),null!==u?(Vr=t,n=wr(n,o,l),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,n=F(),null!==n&&(Vr=t,n=Cr()),null===n?(qr=t,t=n):t=n),t}function Y(){var t,n,r,a,o,s,l,u,c;if(t=qr,n=G(),null!==n)if(r=F(),null!==r){for(a=[],o=qr,59===e.charCodeAt(qr)?(s=Er,qr++):(s=null,0===Gr&&i(Sr)),null!==s?(l=F(),null!==l?(u=G(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q);null!==o;)a.push(o),o=qr,59===e.charCodeAt(qr)?(s=Er,qr++):(s=null,0===Gr&&i(Sr)),null!==s?(l=F(),null!==l?(u=G(),null!==u?(c=F(),null!==c?(s=[s,l,u,c],o=s):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q)):(qr=o,o=Q);null!==a?(59===e.charCodeAt(qr)?(o=Er,qr++):(o=null,0===Gr&&i(Sr)),null===o&&(o=ut),null!==o?(s=F(),null!==s?(Vr=t,n=nt(n,a),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)}else qr=t,t=Q;else qr=t,t=Q;return null===t&&(t=qr,n=G(),null!==n?(r=F(),null!==r?(59===e.charCodeAt(qr)?(a=Er,qr++):(a=null,0===Gr&&i(Sr)),null===a&&(a=ut),null!==a?(o=F(),null!==o?(Vr=t,n=Tr(n),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t&&(t=qr,n=F(),null!==n&&(Vr=t,n=st()),null===n?(qr=t,t=n):t=n)),t}function G(){var t,n,r,o,s,l,u,c,h,d,p,f,m,v,g,_,b;if(t=qr,e.substr(qr,2)===xr?(n=xr,qr+=2):(n=null,0===Gr&&i(Pr)),null===n&&(e.substr(qr,6)===Or?(n=Or,qr+=6):(n=null,0===Gr&&i(Mr))),null!==n?(32===e.charCodeAt(qr)?(r=Dr,qr++):(r=null,0===Gr&&i(kr)),null!==r?(o=F(),null!==o?(s=w(),null!==s?(l=F(),null!==l?(e.substr(qr,2)===Lr?(u=Lr,qr+=2):(u=null,0===Gr&&i(Ar)),null!==u?(c=F(),null!==c?(h=a(),null!==h?(d=F(),null!==d?(Vr=t,n=jr(n,s,h),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q),null===t){if(t=qr,n=a(),null!==n)if(r=F(),null!==r)if(58===e.charCodeAt(qr)?(o=dt,qr++):(o=null,0===Gr&&i(pt)),null===o&&(e.substr(qr,3)===Ir?(o=Ir,qr+=3):(o=null,0===Gr&&i(zr)),null===o&&(e.substr(qr,2)===Rr?(o=Rr,qr+=2):(o=null,0===Gr&&i(Br)))),null!==o)if(s=F(),null!==s)if(l=a(),null!==l)if(u=F(),null!==u){for(c=[],h=qr,44===e.charCodeAt(qr)?(d=et,qr++):(d=null,0===Gr&&i(tt)),null!==d?(p=F(),null!==p?(f=w(),null!==f?(m=F(),null!==m?(58===e.charCodeAt(qr)?(v=dt,qr++):(v=null,0===Gr&&i(pt)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q);null!==h;)c.push(h),h=qr,44===e.charCodeAt(qr)?(d=et,qr++):(d=null,0===Gr&&i(tt)),null!==d?(p=F(),null!==p?(f=w(),null!==f?(m=F(),null!==m?(58===e.charCodeAt(qr)?(v=dt,qr++):(v=null,0===Gr&&i(pt)),null!==v?(g=F(),null!==g?(_=a(),null!==_?(b=F(),null!==b?(d=[d,p,f,m,v,g,_,b],h=d):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q)):(qr=h,h=Q);null!==c?(Vr=t,n=Nr(n,o,l,c),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)}else qr=t,t=Q;else qr=t,t=Q;else qr=t,t=Q;else qr=t,t=Q;else qr=t,t=Q;else qr=t,t=Q;null===t&&(t=qr,n=w(),null!==n?(r=F(),null!==r?(o=a(),null!==o?(s=F(),null!==s?(Vr=t,n=Fr(n,o),null===n?(qr=t,t=n):t=n):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q)):(qr=t,t=Q))}return t}var X,K=arguments.length>1?arguments[1]:{},J={expression:a,sheet:W},$=a,Z="expression",Q=null,et=",",tt='","',nt=function(e,t){for(var n=[e],i=0;t.length>i;i++)n.push(t[i][2]);return n},it="(",rt='"("',at=")",ot='")"',st=function(){return[]},lt=function(e){return e},ut="",ct="?",ht='"?"',dt=":",pt='":"',ft=function(e,t){if(t){var n=t[2],i=t[6];return{type:"if",args:[e,n,i]}}return e},mt="||",vt='"||"',gt=function(e,t){for(var n=0;t.length>n;n++)e={type:Xr[t[n][1]],args:[e,t[n][3]]};return e},_t="&&",bt='"&&"',yt="<=>",wt='"<=>"',Ct="<=",Et='"<="',St=">=",Tt='">="',xt="<",Pt='"<"',Ot="-",Mt='"-"',Dt=">",kt='">"',Lt="==",At='"=="',jt="!=",It='"!="',zt=function(e,t){if(t){var n=t[1],i=t[3];return"!="===n?{type:"not",args:[{type:"equals",args:[e,i]}]}:{type:Xr[n],args:[e,i]}}return e},Rt="+",Bt='"+"',Nt="*",Ft='"*"',qt="/",Vt='"/"',Wt="%",Ut='"%"',Ht="rem",Yt='"rem"',Gt="**",Xt='"**"',Kt="//",Jt='"//"',$t="%%",Zt='"%%"',Qt="??",en='"??"',tn="!",nn='"!"',rn=function(e,t){return{type:Kr[e],args:[t]}},an=function(e,t){for(var n=0;t.length>n;n++)e=t[n](e);return e},on=".",sn='"."',ln=function(e){return e},un="[",cn='"["',hn="]",dn='"]"',pn=function(e){return function(t){return{type:"property",args:[t,e]}}},fn="{",mn='"{"',vn="}",gn='"}"',_n=function(e,t){return Jr[e]?function(n){return{type:Jr[e],args:[n,t]}}:"value"===t.type?function(t){return{type:e,args:[t]}}:function(n){return{type:e,args:[{type:"mapBlock",args:[n,t]}]}}},bn=function(e,t){return function(n){return{type:e,args:[n].concat(t)}}},yn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:+e.join("")}]}}},wn=function(e){return function(t){return{type:"property",args:[t,{type:"literal",value:e}]}}},Cn=function(e){return function(t){return{type:"with",args:[t,e]}}},En="this",Sn='"this"',Tn=function(){return{type:"value"}},xn="true",Pn='"true"',On=function(){return{type:"literal",value:!0}},Mn="false",Dn='"false"',kn=function(){return{type:"literal",value:!1}},Ln="null",An='"null"',jn=function(){return{type:"literal",value:null}},In="@",zn='"@"',Rn=function(e){return{type:"component",label:e}},Bn="$",Nn='"$"',Fn=function(e){return{type:"property",args:[{type:"parameters"},{type:"literal",value:e}]}},qn=function(){return{type:"parameters"}},Vn="#",Wn='"#"',Un=function(e){return{type:"element",id:e}},Hn="&",Yn='"&"',Gn=function(e,t){return{type:e,args:t,inline:!0}},Xn="^",Kn='"^"',Jn=function(e){return{type:"parent",args:[e]}},$n=function(e){return e},Zn=function(e){return e({type:"value"})},Qn=function(){return{type:"value"}},ei="word",ti=/^[a-zA-Z_0-9\-]/,ni="[a-zA-Z_0-9\\-]",ii=function(e){return e.join("")},ri="string",ai="'",oi='"\'"',si=function(e){return{type:"literal",value:e.join("")}},li='"',ui='"\\""',ci=/^[^'\\\0-\x1F]/,hi="[^'\\\\\\0-\\x1F]",di="\\'",pi='"\\\\\'"',fi=function(){return"'"},mi=/^[^"\\\0-\x1F]/,vi='[^"\\\\\\0-\\x1F]',gi='\\"',_i='"\\\\\\""',bi=function(){return'"'},yi="\\\\",wi='"\\\\\\\\"',Ci=function(){return"\\"},Ei="\\/",Si='"\\\\/"',Ti=function(){return"/"},xi="\\b",Pi='"\\\\b"',Oi=function(){return"\b"},Mi="\\f",Di='"\\\\f"',ki=function(){return"\f"},Li="\\n",Ai='"\\\\n"',ji=function(){return"\n"},Ii="\\r",zi='"\\\\r"',Ri=function(){return"\r"},Bi="\\t",Ni='"\\\\t"',Fi=function(){return"	"},qi="\\0",Vi='"\\\\0"',Wi=function(){return"\0"},Ui="\\u",Hi='"\\\\u"',Yi=function(e){return String.fromCharCode(parseInt(e,16))},Gi=/^[0-9a-fA-F]/,Xi="[0-9a-fA-F]",Ki=function(){return{type:"tuple",args:[]}},Ji=function(e){return{type:"tuple",args:e}},$i=function(){return{type:"record",args:[]}},Zi=function(e){return{type:"record",args:e}},Qi=function(e,t){var n={};n[e[0]]=e[1];for(var i=0;t.length>i;i++)n[t[i][2][0]]=t[i][2][1];return n},er=function(e,t){return[e,t]},tr="number",nr=function(e){return{type:"literal",value:+e}},ir=/^[eE]/,rr="[eE]",ar=/^[+\-]/,or="[+\\-]",sr=/^[0-9]/,lr="[0-9]",ur=/^[1-9]/,cr="[1-9]",hr="whitespace",dr=/^[\t\x0B\f \xA0\uFEFF]/,pr="[\\t\\x0B\\f \\xA0\\uFEFF]",fr=/^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,mr="[ \\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",vr="line terminator",gr=/^[\n\r\u2028\u2029]/,_r="[\\n\\r\\u2028\\u2029]",br=function(e){return{type:"sheet",blocks:e}},yr=function(e,t,n){return{type:"block",connection:t.connection,module:t.module,exports:t.exports,label:e,statements:n}},wr=function(e,t,n){return{connection:{"<":"prototype",":":"object"}[e],module:t&&t.value,exports:""!==n?n[1]:void 0}},Cr=function(){return{}},Er=";",Sr='";"',Tr=function(e){return[e]},xr="on",Pr='"on"',Or="before",Mr='"before"',Dr=" ",kr='" "',Lr="->",Ar='"->"',jr=function(e,t,n){return{type:"event",when:e,event:t,listener:n}},Ir="<->",zr='"<->"',Rr="<-",Br='"<-"',Nr=function(e,t,n,i){var r={type:$r[t],args:[e,n]};if(i.length){for(var a={},o=0;i.length>o;o++)a[i[o][2]]=i[o][6];r.descriptor=a}return r},Fr=function(e,t){return{type:"unit",name:e,value:t}},qr=0,Vr=0,Wr=0,Ur={line:1,column:1,seenCR:!1},Hr=0,Yr=[],Gr=0;if("startRule"in K){if(!(K.startRule in J))throw Error("Can't start parsing from rule \""+K.startRule+'".');$=J[K.startRule]}var Xr={"**":"pow","//":"root","%%":"log","*":"mul","/":"div","%":"mod",rem:"rem","+":"add","-":"sub","<":"lt",">":"gt","<=":"le",">=":"ge","==":"equals","<=>":"compare","??":"default","&&":"and","||":"or","<-":"bind","<->":"bind2",":":"assign"},Kr={"+":"toNumber","-":"neg","!":"not","^":"parent"},Jr={map:"mapBlock",filter:"filterBlock",some:"someBlock",every:"everyBlock",sorted:"sortedBlock",sortedSet:"sortedSetBlock",group:"groupBlock",groupMap:"groupMapBlock",min:"minBlock",max:"maxBlock"},$r={":":"assign","<-":"bind","<->":"bind2"};if(X=$(),null!==X&&qr===e.length)return X;throw r(Yr),Vr=Math.max(qr,Hr),new t(Yr,e.length>Vr?e.charAt(Vr):null,Vr,n(Vr).line,n(Vr).column)}return e(t,Error),{SyntaxError:t,parse:n}}();