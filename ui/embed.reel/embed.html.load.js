montageDefine("b46785c","ui/embed.reel/embed.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=embed.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"embed"}}},"anchor":{"prototype":"matte/ui/anchor.reel","properties":{"element":{"#":"anchor"},"textContent":"Edit"},"bindings":{"href":{"<-":"@owner.mfiddleUrl + \'#!/\' + @owner.fiddle.id"}}},"content":{"prototype":"ui/code-mirror.reel","properties":{"element":{"#":"content"},"lineNumbers":true,"matchBrackets":true,"mode":"json","readOnly":true},"bindings":{"mode":{"<-":"@owner.activeTab == \'html\' ? \'htmlmixed\' : (@owner.activeTab == \'serialization\' ? \'json\' : @owner.activeTab)"}}},"cssTab":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"cssTab"},"identifier":"tab","label":"CSS","type":"button"},"bindings":{"classList.has(\'mfiddle-Embed-tab--selected\')":{"<-":"@owner.activeTab == \'css\'"},"detail.get(\'tab\')":{"<-":"\'css\'"}}},"htmlTab":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"htmlTab"},"enabled":true,"identifier":"tab","label":"HTML"},"bindings":{"classList.has(\'mfiddle-Embed-tab--selected\')":{"<-":"@owner.activeTab == \'html\'"},"detail.get(\'tab\')":{"<-":"\'html\'"}}},"javascriptTab":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"javascriptTab"},"enabled":true,"identifier":"tab","label":"JavaScript"},"bindings":{"classList.has(\'mfiddle-Embed-tab--selected\')":{"<-":"@owner.activeTab == \'javascript\'"},"detail.get(\'tab\')":{"<-":"\'javascript\'"}}},"serializationTab":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"serializationTab"},"enabled":true,"identifier":"tab","label":"Serialization"},"bindings":{"classList.has(\'mfiddle-Embed-tab--selected\')":{"<-":"@owner.activeTab == \'serialization\'"},"detail.get(\'tab\')":{"<-":"\'serialization\'"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=embed class=mfiddle-Embed>\n        <div class=mfiddle-Embed-tabs>\n            <span class=mfiddle-Embed-tab data-montage-id=serializationTab></span>\n            <span class=mfiddle-Embed-tab data-montage-id=htmlTab></span>\n            <span class=mfiddle-Embed-tab data-montage-id=javascriptTab></span>\n            <span class=mfiddle-Embed-tab data-montage-id=cssTab></span>\n            <a data-montage-id=anchor class=mfiddle-Embed-edit href="" target=_blank></a>\n        </div>\n        <div data-montage-id=content class=mfiddle-Embed-content></div>\n    </div>\n</body>\n</html>'});