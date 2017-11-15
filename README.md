# WordPress HookDoc
Automate documentation of [**Actions**](https://codex.wordpress.org/Plugin_API/Action_Reference) and [**Filters**](https://codex.wordpress.org/Plugin_API/Filter_Reference) in WordPress. This npm module needs the [**JSDoc3**](https://github.com/jsdoc3/jsdoc) module as dependency. It uses JSDoc3 as comment parser and generates a documentation with the power of JSDoc.

## Getting started
Simply install via:
```sh
$ npm install jsdoc -g
$ npm install wp-hookdoc --save-dev
```

In your JSDoc configuration file `hookdoc-conf.json` the following options are essential (create a seperate configuration file if you already use JSDoc):
```js
{
    "opts": {
        "template": "node_modules/wp-hookdoc/template"
    },
    "source": {
        "includePattern": ".+\\.(php|inc)?$"
    },
    "plugins": [
        "node_modules/wp-hookdoc/plugin"
    ]
}
```

Run your `jsdoc` command with the input files and `-c hookdoc-conf.json`.

## Generate example documentation
To generate an example documentation change to the `node_modules/wp-hookdoc` folder and run:
```sh
npm run example
```

You will find the output in `node_modules/wp-hookdoc/example/out`:
![example output](https://i.imgur.com/oXInOFP.png)

## License
This module is MIT licensed.