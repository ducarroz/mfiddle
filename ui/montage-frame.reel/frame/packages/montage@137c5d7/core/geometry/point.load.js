montageDefine("137c5d7","core/geometry/point",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage;t.Point=n.specialize({init:{enumerable:!1,value:function(e,t){return this.x=null===e?0:e,this.y=null===t?0:t,this}},x:{enumerable:!0,value:0},y:{enumerable:!0,value:0}},{interpolate:{enumerable:!1,value:function(e,n,r,i){var o,a;return o=n.x+(r.x-n.x)*e,a=n.y+(r.y-n.y)*e,i>0&&(o=Math.round(o*i)/i,a=Math.round(a*i)/i),(new t.Point).init(o,a)}}})}});