var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,NativeProgress=require("native/ui/progress.reel").Progress;exports.Progress=Montage.create(NativeProgress,{hasTemplate:{value:!0},_barElement:{enumerable:!1,value:null},_value:{enumerable:!1,value:null},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value="string"==typeof e?parseInt(e,10):e,this._max&&this._value>this._max&&(this._value=this._max),0>this._value&&(this._value=0),this.needsDraw=!0)}},_max:{enumerable:!1,value:null},max:{get:function(){return this._max},set:function(e){e!==this._max&&(this._max="string"==typeof e?parseInt(e,10):e,0>=this._max&&(this._max=1),this.needsDraw=!0)}},didCreate:{value:function(){NativeProgress.didCreate&&NativeProgress.didCreate.call(this)}},draw:{enumerable:!1,value:function(){var e=this._value/this._max;e=Math.min(Math.max(e,0),1);var t=100*e;this._barElement.style.width=t+"%"}}});