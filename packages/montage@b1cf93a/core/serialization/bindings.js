var Bindings=require("frb"),parse=require("frb/parse"),stringify=require("frb/stringify"),expand=require("frb/expand"),Scope=require("frb/scope"),Serializer=require("core/serialization").Serializer,Deserializer=require("core/serialization").Deserializer;Serializer.defineSerializationUnit("bindings",function(e,t){var n,r=Bindings.getBindings(t),i={};for(var a in r){var o=r[a],s={};if(!("serializable"in o)||o.serializable){var l=o.sourcePath,u=o.sourceSyntax;if(o.source!==t){var c=e.getObjectLabel(o.source),h=new Scope({type:"component",label:c});h.components=e,u=expand(u,h)}var h=new Scope;h.components=e,l=stringify(u,h),o.twoWay?s["<->"]=l:s["<-"]=l,o.converter?s.converter=o.converter:(s.convert=o.convert,s.revert=o.revert),o.trace&&(s.trace=!0),i[a]=s,n=!0}}return n?i:void 0}),Deserializer.defineDeserializationUnit("bindings",function(e,t,n){for(var r in n){var i=n[r];if("object"!=typeof i)throw Error("Binding descriptor must be an object, not "+typeof i);"boundObject"in i?(i.source=e.getObjectByLabel(i.boundObject),i.oneway?i["<-"]=i.boundPropertyPath:i["<->"]=i.boundPropertyPath,delete i.boundObject,delete i.boundObjectPropertyPath,delete i.oneway):i["<<->"]&&(console.warn("WARNING: <<-> in bindings is deprectated, use <-> only, please update now."),i["<->"]=i["<<->"],delete i["<<->"])}Bindings.defineBindings(t,n,{components:e})});