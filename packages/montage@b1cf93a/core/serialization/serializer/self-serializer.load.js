montageDefine("b1cf93a","core/serialization/serializer/self-serializer",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,r=n.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function r(){}},initWithMalkerAndVisitorAndObject:{value:function(e,t,n){return this._malker=e,this._visitor=t,this._object=n,this}},getObjectLabel:{value:function(e){return this._visitor.labeler.getObjectLabel(e)}},addObject:{value:function(e){return"object"==typeof e?(this._malker.visit(e),e):void 0}},addObjectReference:{value:function(e){var t=this._visitor.builder,n=this._visitor.labeler,r=n.getObjectLabel(e);return{thisIsAReferenceCreatedByMontageSerializer:!0,reference:t.createObjectReference(r)}}},setProperty:{value:function(e,t,n){var r,i=this._visitor.builder;r=i.top.getProperty("properties"),i.push(r),this._visitor.setProperty(this._malker,e,t,n),i.pop()}},setAllProperties:{value:function(){var e,t=this._visitor.builder;e=t.top.getProperty("properties"),t.push(e),this._visitor.setSerializableObjectProperties(this._malker,this._object),t.pop()}},setUnit:{value:function(e){this._visitor.setObjectCustomUnit(this._malker,this._object,e)}},setAllUnits:{value:function(){this._visitor.setObjectCustomUnits(this._malker,this._object)}}});t.SelfSerializer=r}});