exports.examples = [
    {
        label: "Simple component",
        css: "",
        serialization: {
            "owner": {
                "properties": {
                    "element": {"#": "component"}
                }
            },
            "button": {
                "prototype": "digit/ui/button.reel",
                "properties": {
                    "element": {"#": "button"},
                    "label": "Click Me!"
                }
            }
        },
        html: '<div data-montage-id="component">\n\t<button data-montage-id="button"></button>\n</div>',
        javascript: 'var Component = require("montage/ui/component").Component;\n\nexports.Owner = Component.specialize({\n    templateDidLoad: {\n        value: function() {\n            console.log("templateDidLoad");\n        }\n    }\n});\n'
    },
    {
        label: "Simple button",
        css: "",
        serialization: {
            "button": {
                "prototype": "digit/ui/button.reel",
                "properties": {
                    "element": {"#": "button"},
                    "label": "Click Me!"
                }
            }
        },
        html: '<button data-montage-id="button"></button>',
        javascript: ""
    },
    {
        label: "Simple binding",
        css: ".slider {\n    width: 50%;\n}",
        serialization: {
            "slider": {
                "prototype": "digit/ui/slider.reel",
                "properties": {
                    "element": {"#": "slider"},
                    "value": 50
                }
            },

            "text": {
                "prototype": "montage/ui/text.reel",
                "properties": {
                    "element": {"#": "text"}
                },
                "bindings": {
                    "value": {"<-": "@slider.value"}
                }
            }
        },
        html: '<input type="slider" data-montage-id="slider" class="slider">\n<h2 data-montage-id="text"></h2>',
        javascript: ""
    },
    {
        label: "Simple listener",
        css: "",
        serialization: {
            "owner": {
                "properties": {
                    "element": {"#": "component"}
                }
            },

            "button": {
                "prototype": "digit/ui/button.reel",
                "properties": {
                    "element": {"#": "button"},
                    "label": "Click Me!"
                },
                "listeners": [{
                    "type": "action",
                    "listener": {"@": "owner"}
                }]
            }
        },
        html: '<div data-montage-id="component">\n	<button data-montage-id="button"></button>\n</div>',
        javascript: 'var Component = require("montage/ui/component").Component;\n\nexports.Owner = Component.specialize({\n    handleButtonAction: {\n        value: function() {\n            console.log("action!");\n        }\n    }\n});\n'
    },
    {
        label: "Simple condition",
        css: "",
        serialization: {
            "owner": {
                "properties": {
                    "element": {"#": "component"}
                }
            },

            "toggle": {
                "prototype": "digit/ui/checkbox.reel",
                "properties": {
                    "element": {"#": "toggle"},
                    "checked": true
                }
            },

            "hideBlockCondition": {
                "prototype": "montage/ui/condition.reel",
                "properties": {
                    "element": {"#": "block"}
                },
                "bindings": {
                    "condition": {"<-": "@toggle.checked"}
                }
            }
        },
        html: '<div data-montage-id="component">\n	<label><input type="checkbox" data-montage-id="toggle">Show</label>\n    <div data-montage-id="block">\n        <h2>Hello There!</h2>\n    </div>\n</div>',
        javascript: 'var Component = require("montage/ui/component").Component;\n\nexports.Owner = Component.specialize({\n});\n'
    },
    {
        label: "Two-way bindings",
        css: ".slider2 {\n    width: 50%;\n}",
        serialization: {
            "number": {
                "prototype": "digit/ui/number-field.reel",
                "properties": {
                    "element": {"#": "number"},
                    "value": 50
                }
            },

            "slider1": {
                "prototype": "digit/ui/slider.reel",
                "properties": {
                    "element": {"#": "slider1"}
                },
                "bindings": {
                    "value": {"<->": "@number.value"}
                }
            },

            "slider2": {
                "prototype": "digit/ui/slider.reel",
                "properties": {
                    "element": {"#": "slider2"}
                },
                "bindings": {
                    "value": {"<->": "@number.value"}
                }
            }
        },
        html: '<p>\n    <input type="number" data-montage-id="number">\n    <input type="slider" data-montage-id="slider1" class="slider1">\n</p>\n<p>\n    <input type="slider" data-montage-id="slider2" class="slider2">\n</p>',
        javascript: ""
    },
    {
        label: "Accessing repetition objects",
        css: "",
        serialization: {
            "repetition": {
                "prototype": "montage/ui/repetition.reel",
                "properties": {
                    "content": ["Mike", "François", "Afonso", "Heather"],
                    "element": {"#": "repetition"}
                }
            },
            "text": {
                "prototype": "montage/ui/text.reel",
                "properties": {
                    "element": {"#": "text"}
                },
                "bindings": {
                    "value": {"<-": "@repetition.objectAtCurrentIteration"}
                }
            }
        },
        html: '<ul data-montage-id="repetition">\n  <li>\n    Hello there <span data-montage-id="text"></span>!\n  </li>\n</ul>',
        javascript: ""
    },
    {
        label: "Listening on repeated buttons",
        css: "",
        serialization: {
            "owner": {
                "properties": {
                    "element": {"#": "owner"}
                }
            },

            "repetition": {
                "prototype": "montage/ui/repetition.reel",
                "properties": {
                    "content": [
                        "One",
                        "Two",
                        "Three"
                    ],
                    "element": {"#": "repetition"}
                }
            },

            "button": {
                "prototype": "digit/ui/button.reel",
                "properties": {
                    "element": {"#": "button"}
                },
                "bindings": {
                    "label": {"<-": "@repetition.objectAtCurrentIteration"}
                },
                "listeners": [{
                    "type": "action",
                    "listener": {"@": "owner"}
                }]
            }
        },
        html: '<div data-montage-id="owner">\n    <ul data-montage-id="repetition">\n        <button data-montage-id="button"></button>\n    </ul>\n</div>',
        javascript: 'var Component = require("montage/ui/component").Component;\n\nexports.Owner = Component.specialize({\n    handleAction: {\n        value: function(event) {\n            console.log("action: " + event.target.element.textContent);\n        }\n    }\n});\n'
    }
];