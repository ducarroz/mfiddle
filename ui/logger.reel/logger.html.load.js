montageDefine("27de9f6","ui/logger.reel/logger.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <title>Logger</title>\n    <link rel=stylesheet href=logger.css>\n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"logger"},"_scroller":{"@":"scroller"},"_output":{"#":"output"}},"bindings":{"isOpen":{"<-":"@toggle.pressed"}}},"toggle":{"prototype":"matte/ui/toggle-button.reel","properties":{"element":{"#":"toggle"},"pressedLabel":"▲ Console"}},"clear":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"clear"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"scroller":{"prototype":"matte/ui/scroller.reel","properties":{"element":{"#":"scroller"},"axis":"both"}}}</script>\n</head>\n<body>\n    <div data-montage-id=logger class=Logger>\n        <div data-montage-id=scroller class=Logger-scroller>\n            <div data-montage-id=output class=Logger-output></div>\n        </div>\n        <div data-montage-id=buttons class=Logger-buttons>\n            <button data-montage-id=clear class=Logger-clear>Clear</button>\n            <button data-montage-id=toggle class=Logger-toggle>◀ Console</button>\n        </div>\n    </div>\n  \n</body>\n</html>'});