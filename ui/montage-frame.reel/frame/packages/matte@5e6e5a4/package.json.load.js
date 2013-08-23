montageDefine("5e6e5a4","package.json",{exports:{name:"matte",version:"0.1.3",repository:{type:"git",url:"https://github.com/montagejs/matte.git"},dependencies:{montage:"~0.13.0","native":"~0.1.1"},devDependencies:{"montage-testing":"~0.2.0"},exclude:["overview.html","overview","run-tests.html","test"],readme:'matte\n==============\n\nThis is the Montage package template.\n\nNote: Before working on your package you will need to add montage to it.\n\n```\nnpm install .\n```\n\nLayout\n------\n\nThe template contains the following files and directories:\n\n* `ui/` – Directory containing all the UI .reel directories.\n* `package.json` – Describes your app and its dependencies\n* `README.md` – This readme. Replace the current content with a description of your app\n* `overview.html`\n* `overview/` – Directory that contains the files for the overview page. This is a different package so you will need to require the component using matte/*.\n  * `main.reel` – The main interface component where you can add the components to show.\n* `node_modules/` – Directory containing all npm packages needed, including Montage. Any packages here must be included as `dependencies` in `package.json` for the Montage require to find them.\n* `test/` – Directory containing tests for your package.\n  * `all.js` – Module that point the test runner to all your jasmine specs.\n* `run-tests.html` – Page to run jasmine tests manually in your browser\n* `testacular.conf.js` – This is the testacular configuration file. You can start testacular by running `node_modules/testacular/bin/testacular start`\n\nCreate the following directories if you need them:\n\n* `locale/` – Directory containing localized content.\n* `scripts/` – Directory containing other JS libraries. If a library doesn’t support the CommonJS "exports" object it will need to be loaded through a `<script>` tag.\n\n',readmeFilename:"README.md",description:"matte ==============",bugs:{url:"https://github.com/montagejs/matte/issues"},_id:"matte@0.1.3",_from:"matte@0.1.3",dist:{shasum:"d7ce4c0111173cd1a2cb798abd87e199c5dbcad6"},_resolved:"https://registry.npmjs.org/matte/-/matte-0.1.3.tgz",directories:{lib:"./"},hash:"5e6e5a4",mappings:{montage:{name:"montage",hash:"137c5d7",location:"../montage@137c5d7/"},"native":{name:"native",hash:"c0d90b0",location:"../native@c0d90b0/"}},production:!0,useScriptInjection:!0}});