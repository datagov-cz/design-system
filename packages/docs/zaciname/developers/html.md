---
title: Usage with basic HTML
---

```shell
# WEB components for HTML, Vue.js, Ember, and Vanilla JS
npm install @gov-design-system-ce/components
```

After you've installed the `@gov-design-system-ce/components` package in your project, it's advisable to set up a copy
task that transfers the component library from `node_modules` to a location of your choice. An effective tool for this
purpose is [copyfiles](https://www.npmjs.com/package/copyfiles). To install `copyfiles`, use the following command:

```shell
npm install copyfiles --save-dev
```

Once NCP is installed, you can add a script to your package.json file that copies the component library from Gov Design
System CE's
package to a location you've designated:

```shell
"scripts": {
  "copy:components": "copyfiles --flat node_modules/@gov-design-system-ce/components/dist src/SPECIFY_PATH"
}
```

Once you have a copy task in place and have copied the component library over, you can put script tags similar to these
in the `<head>` of your `index.html`:

```html
<script type="module" src="SPECIFY_PATH/core/core.esm.js"></script>
<script nomodule src="SPECIFY_PATH/core/core.js"></script>
```

Once incorporated, you can utilize the components in your standard HTML markup, just like in the following example:

```html
<gov-button variant="primary" type="solid">Click me</gov-button>
```
