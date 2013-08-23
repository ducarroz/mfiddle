montageDefine("9a2d78b","lib/Tokenizer",{dependencies:[],factory:function(t,e,n){function i(t){return" "===t||"	"===t||"\r"===t||"\n"===t}function a(t,e){this._state=s,this._buffer="",this._sectionStart=0,this._index=0,this._options=t,this._special=0,this._cbs=e,this._running=!0}n.exports=a;var r=0,s=r++,o=r++,l=r++,c=r++,h=r++,u=r++,d=r++,p=r++,g=r++,m=r++,f=r++,v=r++,L=r++,_=r++,y=r++,C=r++,b=r++,w=r++,M=r++,x=r++,z=r++,S=r++,E=r++,T=r++,P=r++,D=r++,O=r++,B=r++,k=r++,A=r++,j=r++,I=r++,R=r++,N=r++,F=r++,q=r++,V=r++,U=r++,W=r++,Y=r++,H=r++,X=r++,G=r++,K=r++,Z=r++,J=r++,$=r++,Q=r++,te=r++;a.prototype.write=function(t){for(this._buffer+=t;this._index<this._buffer.length&&this._running;){var e=this._buffer.charAt(this._index);this._state===s?"<"===e&&(this._emitIfToken("text"),this._state=o,this._sectionStart=this._index):this._state===o?"/"===e?this._state=c:">"===e||this._special>0?this._state=s:i(e)||("!"===e?(this._state=_,this._sectionStart=this._index+1):"?"===e?(this._state=C,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==e&&"S"!==e?(this._state=l,this._sectionStart=this._index):(this._state=A,this._sectionStart=this._index)):this._state===l?"/"===e?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=u):">"===e?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=s,this._sectionStart=this._index+1):i(e)&&(this._emitToken("opentagname"),this._state=d):this._state===c?i(e)||(">"===e?this._state=s:this._special>0?("s"===e||"S"===e)&&(this._state=j):(this._state=h,this._sectionStart=this._index)):this._state===h?">"===e?(this._emitToken("closetag"),this._state=s,this._sectionStart=this._index+1,this._special=0):i(e)&&(this._emitToken("closetag"),this._state=u,this._special=0):this._state===u?">"===e&&(this._state=s,this._sectionStart=this._index+1):this._state===d?">"===e?(this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===e?(this._cbs.onselfclosingtag(),this._state=u):i(e)||(this._state=p,this._sectionStart=this._index):this._state===p?"="===e?(this._emitIfToken("attribname"),this._state=m):i(e)?(this._emitIfToken("attribname"),this._state=g):("/"===e||">"===e)&&(this._emitIfToken("attribname"),this._state=d,this._index--):this._state===g?"="===e?this._state=m:"/"===e||">"===e?(this._state=d,this._index--):i(e)||(this._state=p,this._sectionStart=this._index):this._state===m?'"'===e?(this._state=f,this._sectionStart=this._index+1):"'"===e?(this._state=v,this._sectionStart=this._index+1):i(e)||(this._state=L,this._sectionStart=this._index):this._state===f?'"'===e&&(this._emitToken("attribvalue"),this._state=d):this._state===v?"'"===e&&(this._emitToken("attribvalue"),this._state=d):this._state===L?">"===e?(this._emitToken("attribvalue"),this._state=s,this._cbs.onopentagend(),this._sectionStart=this._index+1):i(e)&&(this._emitToken("attribvalue"),this._state=d):this._state===_?this._state="["===e?z:"-"===e?b:y:this._state===y?">"===e&&(this._emitToken("declaration"),this._state=s,this._sectionStart=this._index+1):this._state===C?">"===e&&(this._emitToken("processinginstruction"),this._state=s,this._sectionStart=this._index+1):this._state===b?"-"===e?(this._state=w,this._sectionStart=this._index+1):this._state=y:this._state===w?"-"===e&&(this._state=M):this._state===M?this._state="-"===e?x:w:this._state===x?">"===e?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=w:this._state===z?this._state="C"===e?S:y:this._state===S?this._state="D"===e?E:y:this._state===E?this._state="A"===e?T:y:this._state===T?this._state="T"===e?P:y:this._state===P?this._state="A"===e?D:y:this._state===D?"["===e?(this._state=O,this._sectionStart=this._index+1):this._state=y:this._state===O?"]"===e&&(this._state=B):this._state===B?this._state="]"===e?k:O:this._state===k?">"===e?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=s,this._sectionStart=this._index+1):this._state=O:this._state===A?"c"===e||"C"===e?this._state=I:"t"===e||"T"===e?this._state=X:(this._state=l,this._index--):this._state===j?this._state=1!==this._special||"c"!==e&&"C"!==e?2!==this._special||"t"!==e&&"T"!==e?s:J:V:this._state===I?"r"===e||"R"===e?this._state=R:(this._state=l,this._index--):this._state===R?"i"===e||"I"===e?this._state=N:(this._state=l,this._index--):this._state===N?"p"===e||"P"===e?this._state=F:(this._state=l,this._index--):this._state===F?"t"===e||"T"===e?this._state=q:(this._state=l,this._index--):this._state===q?(("/"===e||">"===e||i(e))&&(this._special=1),this._state=l,this._index--):this._state===V?this._state="r"===e||"R"===e?U:s:this._state===U?this._state="i"===e||"I"===e?W:s:this._state===W?this._state="p"===e||"P"===e?Y:s:this._state===Y?this._state="t"===e||"T"===e?H:s:this._state===H?">"===e||i(e)?(this._state=h,this._sectionStart=this._index-6,this._index--):this._state=s:this._state===X?"y"===e||"Y"===e?this._state=G:(this._state=l,this._index--):this._state===G?"l"===e||"L"===e?this._state=K:(this._state=l,this._index--):this._state===K?"e"===e||"E"===e?this._state=Z:(this._state=l,this._index--):this._state===Z?(("/"===e||">"===e||i(e))&&(this._special=2),this._state=l,this._index--):this._state===J?this._state="y"===e||"Y"===e?$:s:this._state===$?this._state="l"===e||"L"===e?Q:s:this._state===Q?this._state="e"===e||"E"===e?te:s:this._state===te?">"===e||i(e)?(this._state=h,this._sectionStart=this._index-5,this._index--):this._state=s:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===s?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},a.prototype.pause=function(){this._running=!1},a.prototype.resume=function(){this._running=!0},a.prototype.end=function(t){t&&this.write(t),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===O||this._state===B||this._state===k?this._emitIfToken("cdata"):this._state===w||this._state===M||this._state===x?this._emitIfToken("comment"):this._state===l?this._emitIfToken("opentagname"):this._state===h?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},a.prototype.reset=function(){a.call(this,this._options,this._cbs)},a.prototype._emitToken=function(t){this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},a.prototype._emitIfToken=function(t){this._index>this._sectionStart&&this._cbs["on"+t](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1}}});