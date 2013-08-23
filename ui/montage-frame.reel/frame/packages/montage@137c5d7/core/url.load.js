montageDefine("137c5d7","core/url",{dependencies:[],factory:function(e,t){(function(n){"undefined"!=typeof bootstrap?bootstrap("core/url",n):n(e,t)})(function(e,t){var n=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","port","path","root","directory","file","search","query","hash"],r=RegExp("^(?:([^:/?#]+):)?(?:(//)((?:(([^:@]*):?([^@]*))?@)?([^:/?#]*)(?::(\\d*))?))?((/?)((?:[^?#/]*/)*)([^?#]*))(\\?([^#]*))?(?:#(.*))?$");t.parse=function(e){e+="";var t,i={},a=r.exec(e);for(t=0;a.length>t;t++)i[n[t]]=a[t]?a[t]:"";i.root=i.root||i.authorityRoot?"/":"",i.directories=i.directory.split("/"),""==i.directories[i.directories.length-1]&&i.directories.pop();var o=[];for(t=0;i.directories.length>t;t++){var s=i.directories[t];"."==s||(".."==s?o.length&&".."!=o[o.length-1]?o.pop():o.push(".."):o.push(s))}return i.directories=o,i.domains=i.domain.split("."),i},t.format=function(e){if(e===void 0)throw Error("UrlError: URL undefined for urls#format");if(e instanceof String||"string"==typeof e)return e;var t=e.domains?e.domains.join("."):e.domain,n=e.user||e.password?(e.user||"")+(e.password?":"+e.password:""):e.userInfo,r=n||t||e.port?(n?n+"@":"")+(t||"")+(e.port?":"+e.port:""):e.authority,i=e.directories?e.directories.join("/"):e.directory,a=i||e.file?(i?i+"/":"")+(e.file||""):e.path,o=e.query?"?"+e.query:e.search||"";return(e.scheme?e.scheme+":":"")+(r?"//"+r:"")+(e.root||r&&a?"/":"")+(a?a:"")+o+(e.hash?"#"+e.hash:"")||e.url||""},t.resolveObject=function(e,n){if(!e)return n;if(e=t.parse(e),n=t.parse(n),""==n.url)return e;if(delete e.url,delete e.authority,delete e.domain,delete e.userInfo,delete e.path,delete e.directory,delete e.search,delete e.query,delete e.hash,n.authorityRoot)n.scheme||(n.scheme=e.scheme),e=n;else if(n.scheme&&n.scheme!=e.scheme||n.authority&&n.authority!=e.authority)e=n;else if(n.root)e.directories=n.directories;else{var r=e.directories.concat(n.directories);e.directories=[];for(var i=0;r.length>i;i++){var a=r[i];""==a||"."==a||(".."==a?e.directories.length?e.directories.pop():e.directories.push(".."):e.directories.push(a))}"."==n.file?n.file="":".."==n.file&&(e.directories.pop(),n.file="")}return n.root&&(e.root=n.root),n.protcol&&(e.scheme=n.scheme),(n.path||!n.hash)&&(e.file=n.file),n.query&&(e.query=n.query),n.hash&&(e.hash=n.hash),e},t.relativeObject=function(e,n){if(n=t.parse(n),e=t.parse(e),delete n.url,n.scheme==e.scheme&&n.authority==e.authority&&(delete n.scheme,delete n.authority,delete n.userInfo,delete n.user,delete n.password,delete n.domain,delete n.domains,delete n.port,!!n.root==!!e.root&&(!n.root||n.directories[0]==e.directories[0]))){for(delete n.path,delete n.root,delete n.directory;e.directories.length&&n.directories.length&&n.directories[0]==e.directories[0];)n.directories.shift(),e.directories.shift();for(;e.directories.length;)e.directories.shift(),n.directories.unshift("..");n.root||n.directories.length||n.file||!e.file||n.directories.push("."),e.file==n.file&&delete n.file,e.query==n.query&&delete n.query,e.hash==n.hash&&delete n.hash}return n},t.resolve=function(e,n){return t.format(t.resolveObject(e,n))},t.relative=function(e,n){return t.format(t.relativeObject(e,n))}})}});