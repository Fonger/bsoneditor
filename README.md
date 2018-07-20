# JSON Editor

[![Version](https://img.shields.io/npm/v/bsoneditor.svg)](https://www.npmjs.com/package/bsoneditor)
[![Downloads](https://img.shields.io/npm/dm/bsoneditor.svg)](https://www.npmjs.com/package/bsoneditor)
![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
[![License](https://img.shields.io/github/license/Fonger/bsoneditor.svg)](https://github.com/Fonger/bsoneditor/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjosdejong%2Fbsoneditor.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjosdejong%2Fbsoneditor?ref=badge_shield)

JSON Editor is a web-based tool to view, edit, format, and validate JSON.
It has various modes such as a tree editor, a code editor, and a plain text
editor.

The editor can be used as a component in your own web application. The library
can be loaded as CommonJS module, AMD module, or as a regular javascript file.

Supported browsers: Chrome, Firefox, Safari, Opera, Edge, Internet Explorer 11.

<img alt="json editor" src="https://raw.github.com/Fonger/bsoneditor/master/misc/bsoneditor.png"> &nbsp; <img alt="code editor" src="https://raw.github.com/Fonger/bsoneditor/master/misc/codeeditor.png">

Cross browser testing for BSONEditor is generously provided by <a href="https://www.browserstack.com" target="_blank">BrowserStack</a>

<a href="https://www.browserstack.com" target="_blank"><img alt="BrowserStack" src="https://raw.github.com/Fonger/bsoneditor/master/misc/browserstack.png"></a>

## Features

### Tree editor
- Edit, add, move, remove, and duplicate fields and values.
- Change type of values.
- Sort arrays and objects.
- Colorized code.
- Search & highlight text in the tree view.
- Undo and redo all actions.
- JSON schema validation (powered by [ajv](https://github.com/epoberezkin/ajv)).

### Code editor
- Colorized code (powered by [Ace](https://ace.c9.io)).
- Inspect JSON (powered by [Ace](https://ace.c9.io)).
- Format and compact JSON.
- JSON schema validation (powered by [ajv](https://github.com/epoberezkin/ajv)).

### Text editor
- Format and compact JSON.
- JSON schema validation (powered by [ajv](https://github.com/epoberezkin/ajv)).


## Documentation

- Documentation:
  - [API](https://github.com/Fonger/bsoneditor/tree/master/docs/api.md)
  - [Usage](https://github.com/Fonger/bsoneditor/tree/master/docs/usage.md)
  - [Shortcut keys](https://github.com/Fonger/bsoneditor/tree/master/docs/shortcut_keys.md)
- [Examples](https://github.com/Fonger/bsoneditor/tree/master/examples)
- [Source](https://github.com/Fonger/bsoneditor)
- [History](https://github.com/Fonger/bsoneditor/blob/master/HISTORY.md)


## Install

with npm (recommended):

    npm install bsoneditor

with bower:

    bower install bsoneditor


#### More


There is a directive available for using BSONEditor in AngularJS:

[https://github.com/isonet/angular-bsoneditor](https://github.com/isonet/angular-bsoneditor)

Directive for Angular 5.x as well:

[https://github.com/mariohmol/ang-bsoneditor](https://github.com/mariohmol/ang-bsoneditor)


## Use

```html
<!DOCTYPE HTML>
<html>
<head>
    <!-- when using the mode "code", it's important to specify charset utf-8 -->
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">

    <link href="bsoneditor/dist/bsoneditor.min.css" rel="stylesheet" type="text/css">
    <script src="bsoneditor/dist/bsoneditor.min.js"></script>
</head>
<body>
    <div id="bsoneditor" style="width: 400px; height: 400px;"></div>

    <script>
        // create the editor
        var container = document.getElementById("bsoneditor");
        var options = {};
        var editor = new BSONEditor(container, options);

        // set json
        var json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        };
        editor.set(json);

        // get json
        var json = editor.get();
    </script>
</body>
</html>
```


## Build

The code of the JSON Editor is located in the folder `./src`. To build 
bsoneditor:

- Install dependencies:

  ```
  npm install
  ```

- Build JSON Editor:

  ```
  npm run build
  ```

  This will generate the files `./bsoneditor.js`, `./bsoneditor.css`, and  
  minified versions in the dist of the project.

- To automatically build when a source file has changed:

  ```
  npm run watch
  ```

  This will update `./bsoneditor.js` and `./bsoneditor.css` in the dist folder
  on every change, but it will **NOT** update the minified versions as that's
  an expensive operation.


## Custom builds

The source code of BSONEditor consists of CommonJS modules. BSONEditor can be bundled in a customized way using a module bundler like [browserify](http://browserify.org/) or [webpack](http://webpack.github.io/). First, install all dependencies of bsoneditor:

    npm install

To create a custom bundle of the source code using browserify:

    browserify ./index.js -o ./bsoneditor.custom.js -s BSONEditor

The Ace editor, used in mode `code`, accounts for about 75% of the total
size of the library. To exclude the Ace editor from the bundle:

    browserify ./index.js -o ./bsoneditor.custom.js -s BSONEditor -x brace -x brace/mode/json -x brace/ext/searchbox

To minify the generated bundle, use [uglifyjs](https://github.com/mishoo/UglifyJS2):

    uglifyjs ./bsoneditor.custom.js -o ./bsoneditor.custom.min.js -m -c

