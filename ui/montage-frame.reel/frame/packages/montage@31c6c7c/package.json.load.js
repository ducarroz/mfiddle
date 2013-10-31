montageDefine("31c6c7c","package.json",{exports:{name:"montage",version:"0.13.7",description:"A UI Framework",repository:{type:"git",url:"https://github.com/montagejs/montage.git"},main:"core/core",dependencies:{collections:"~0.2.1",frb:"~0.2.15",mousse:"~0.1.2",htmlparser2:"~3.0.5"},devDependencies:{"montage-testing":"~0.2.0",mr:"~0.13.0",q:"0.9.6","q-io":"~1.7.2",jshint:"~2.0.1"},scripts:{test:"node test/node/node-spec.js",jsdoc:"node ../montagejs.org/build/jsdoc/jsdoc.js -out $PWD/builds/jsdoc/ montage@npm-link"},exclude:["etc","lab","node.js","test","tools"],readme:'#MontageJS Readme\nMontageJS is a new type of application framework powered by standard web technologies. Designed with an eye toward maintainability and performance, MontageJS simplifies the development of rich HTML5 applications by providing modular components, real-time two-way data binding, object serialization with DOM mapping, event handling, a managed component draw cycle, CommonJS dependency management, and many more conveniences to help build robust single-page web applications.\n\n> **Note**: MontageJS is still in alpha.\n \n##Encapsulated Components\nMontageJS has a clean interface for creating custom user interface components. Each component can stand alone or be composed of other components. Each component is modeled as a stand-alone web application with its own HTML template, JavaScript, CSS, serialized component object model, and resources. With few exceptions, a component can stand on the web platform like any other web page. There are no fully JavaScript-driven templates in MontageJS. This separation of concerns allows designers to use the technologies they are comfortable with (without having to dig into the JavaScript) and developers to isolate and test individual components using familiar techniques.\n\n##Declarative Data Binding\nMontageJS makes it easier to manage your application and UI state with data bindings. A UI component or MontageJS object can establish a simple or bi-directional binding with another component or object. When the bound property, or deeper property path, of the bound object is updated then the source object is kept in sync.\n\nMontageJS uses functional reactive bindings ([FRB](https://github.com/montagejs/frb)). Unlike “traditional” bindings, FRB can gracefully bind long property paths and the contents of collections. They can also incrementally update the results of chains of queries including maps, flattened arrays, sums, and averages as well as add and remove elements from sets based on the changes to a flag. FRB makes it easy to incrementally ensure consistent state. FRB is built from a combination of powerful functional and generic building blocks, making it reliable, easy to extend, and easy to maintain.\n\nFor more information, see [FRB](https://github.com/montagejs/frb).\n\n##CommonJS\nMontageJS fully supports [CommonJS](http://www.commonjs.org/) modules and is a part of the Node and NPM package ecosystem.\n\nFor more information, see [CommonJS](https://github.com/montagejs/...[TBD]).\n\n#Requirements\nTo get started with MontageJS, you will need the following:\n\n* Node.js and npm. MontageJS application development depends on npm, the Node package manager, which is distributed with Node.js.\n* A recent stable release of Chrome, Safari or Firefox. MontageJS is intended to leverage the evolving web platform of modern browsers.\n* To contribute: A Git client and public SSH key. For details on installing Git and creating your key, see the setup guides on github.com.\n\n#Quick Setup\nTo start using MontageJS, follow these steps:\n\n1. [Download](http://nodejs.org/download/) and run the prebuilt Node.js installer for your platform from the Node.js website.\n\n2. Install `minit`, the MontageJS Initializer.\n\n    `minit` is a command line utility that will help kickstart your MontageJS project by generating prebuilt MontageJS application templates and components and placing the associated files inside the proper directories of your project.\n\n    **Mac OS X / Linux**\n\n    ```\n    $ mkdir -p ~/.npm\n    $ sudo npm install -gq minit@latest\n    ```\n\n    **Windows**\n\n    Run the "Node.js command prompt"\n\n    ```\n    $ npm install -gq minit@latest\n    ```\n\n3. Use `minit` to create your MontageJS project:\n\n    ```\n    $ minit create:app -n yourappname\n    ```\n\n    **Note**: If you get an EACCES warning when trying to run `minit:create`, use `sudo chown -R <username> ~/.npm` and then use `$ minit create:app -n hello`. This is a workaround due to a bug in npm.\n\n    This generates a new directory—yourappname, which contains the default MontageJS application template, including the production dependencies—in your current directory.\n\n4. To verify your installation, switch to yourappname directory and serve your new MontageJS project using `minit`:\n\n    ```\n    $ cd yourappname\n    $ minit serve &\n    ```\n\n5. Point your browser to http://localhost:8083/.\n\n    You should see the contents of the Welcome component—a simple single-page application, which is explicitly loaded to accompany our two-part [quick start tutorial](http://montagejs.org/docs/montagejs-setup.html) tutorial.\n\n##Where to Go from Here\nFor a quick introduction on how to assemble MontageJS components into a user interface, refer to [“Hello MontageJS”](http://montagejs.org/docs/hello-montagejs.html) in our Quick Start tutorial.\nFor more information on MontageJS components, bindings, event handling, serialization etc. refer to the [documentation](http://montagejs.org/docs/) (be patient: we are currently in the process of updating the docs).\n',readmeFilename:"README.md",bugs:{url:"https://github.com/montagejs/montage/issues"},_id:"montage@0.13.7",dist:{shasum:"5a60173443f9cfe42fa187805708f5eb86b47e65"},_from:"montage@0.13.7",_resolved:"https://registry.npmjs.org/montage/-/montage-0.13.7.tgz",mappings:{mr:{name:"mr",hash:"15de206",location:"../mr@15de206/"},q:{name:"q",hash:"13a66b6",location:"../q@13a66b6/"},collections:{name:"collections",hash:"81f8f49",location:"../collections@81f8f49/"},frb:{name:"frb",hash:"7204e6b",location:"../frb@7204e6b/"},mousse:{name:"mousse",hash:"b50f120",location:"../mousse@b50f120/"},htmlparser2:{name:"htmlparser2",hash:"babdafd",location:"../htmlparser2@babdafd/"}},directories:{lib:"./"},hash:"31c6c7c",production:!0,useScriptInjection:!0}});