montageDefine("b1cf93a","core/serialization",{dependencies:["./serialization/serializer/montage-serializer","./serialization/deserializer/montage-deserializer"],factory:function(e,t){var n=e("./serialization/serializer/montage-serializer").MontageSerializer,r=e("./serialization/serializer/montage-serializer").serialize,i=e("./serialization/deserializer/montage-deserializer").MontageDeserializer,a=e("./serialization/deserializer/montage-deserializer").deserialize;t.Serializer=n,t.serialize=r,t.Deserializer=i,t.deserialize=a}});