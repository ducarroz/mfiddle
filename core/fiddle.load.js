montageDefine("663b209","core/fiddle",{dependencies:["montage","montage/core/template","montage/core/promise","gist"],factory:function(e,t){var i=e("montage").Montage,l=e("montage/core/template").Template,n=e("montage/core/promise").Promise,a=e("gist").gist,o=t.Fiddle=i.specialize({constructor:{value:function o(){this.super()}},id:{value:null},css:{value:null},serialization:{value:null},html:{value:null},settings:{value:null},init:{value:function(e,t,i,n){var a,o,r;return e||(e={version:1}),i&&(r=new l,a=r.createHtmlDocumentWithHtml(i),o=r.getInlineObjectsString(a),i=a.body.innerHTML,o=o.replace(/\n    /g,"\n"),i=i.replace(/\n    /g,"\n").replace(/^\s*\n|\n\s*$/g,"")),this.settings=e,this.css=t,this.serialization=o,this.html=i,this.javascript=n,this}}},{fromId:{value:function(e){var t=n.defer();return a.load(e,null,function(i,l,n,a){var r;r=(new o).init(i,l,n,a),r.id=e,t.resolve(r)}),t.promise}}})}});