montageDefine("0d641c0","deserialization/deserializer",{dependencies:["q","./interpreter"],factory:function(t,e){(function(e){function n(t){this._serializationString=t}function i(t){return new n(t).deserializeObject()}var a=t("q"),r=t("./interpreter").Interpreter;Object.defineProperties(n.prototype,{_interpreter:{value:new r},_serializationString:{value:null,writable:!0},deserialize:{value:function(t){var e;try{e=JSON.parse(this._serializationString)}catch(n){return a.reject(n)}return this._interpreter.instantiate(e,t)}},deserializeObject:{value:function(t){return this.deserialize(t).then(function(t){return t.root})}}}),e.Deserializer=n,e.deserialize=i})(e)}});