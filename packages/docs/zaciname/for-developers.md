---
title: Developers
---

Gov Design System CE simplifies the implementation and utilization of its components across various frameworks or even
without any
framework. This is achieved through the utilization of standardized web platform APIs and Web Components.

## Installation

Each of the [following usage options](#use-of-the-gov-design-system-ce) installs the following packages.

```shell
npm install @gov-design-system-ce/styles
npm install @gov-design-system-ce/icons
npm install @gov-design-system-ce/fonts
```

### Styles

For proper functioning you need to import the styles from the `@gov-design-system-ce/styles` package into your project.

```css
@import '@gov-design-system-ce/styles/lib/styles.css';
```

The `@gov-design-system-ce/styles` package also contains the following files.

```css
/* Support for components that have not yet been hydrated */
@import '@gov-design-system-ce/styles/lib/critical.css';

/* Basic support for print styles */
@import '@gov-design-system-ce/styles/lib/print.css';

/* Support for content styles. Correct display of spaces between elements and text. */
@import '@gov-design-system-ce/styles/lib/content.css';

/* Styles for basic layout and containers. */
@import '@gov-design-system-ce/styles/lib/layout.css';

/* Styles of individual components when the component itself cannot be used. */
@import '@gov-design-system-ce/styles/lib/components/*.css';
```

### Fonts

You will need to copy the individual fonts from the `@gov-design-system-ce/fonts` package into your project structure
and then link them.

For example, you can use the NPM [copyfiles](https://www.npmjs.com/package/copyfiles) package for copying.

The command may look like this:

```json
{
  "scripts": {
    "copy:fonts": "copyfiles --flat ./node_modules/@gov-design-system-ce/fonts/lib/* YOUR_PATH_TO_ASSETS"
  }
}
```

You will then need to link the fonts to your project. Below we list the most commonly used preprocessor language SCSS. However, you can use others.

```scss
/* The public path to your fonts. */
$gov-font-path: '/assets/fonts';
$version: '0.0.1';
@import '@gov-design-system-ce/fonts/libs/roboto';
```

### Icons

Similar to fonts, you will need to copy the icons from the `@gov-design-system-ce/icons` package into your structure.

The command can look like this:

```json
{
  "scripts": {
    "copy:icons": "copyfiles --flat ./node_modules/@gov-design-system-ce/icons/libs/basic/* YOUR_PATH_TO_ICONS && copyfiles --flat ./node_modules/@gov-design-system-ce/icons/libs/complex/* YOUR_PATH_TO_ICONS"
  }
}
```

## Config

The design system offers a basic configuration to influence its behaviour.

```javascript
window.GOV_DS_CONFIG = {
    canValidateWcagOnRender: true,
    // ...
}
```

### `canValidateWcagOnRender`

The default value is set to `false`.
When set to `true`, the components will validate their accessibility settings and print any errors to your console browser.
**Be sure to have this option turned off in production mode.**

### `iconsLazyLoad`

The default value is set to `true`.
Icons in the [gov-icon](/dokumentace/ikony) component will be downloaded and displayed only when they are displayed in the viewport.

### `iconsPath`

The default value is set to `./assets/icons`.
This setting can be changed depending on your project directory structure.

## Use of the Gov Design System CE

<gov-spacer size="xl"></gov-spacer>

<gov-tiles columns="2">
    <gov-tile href="/zaciname/developers/html">
        <h3 slot="title">Usage with basic HTML</h3>
        <gov-icon type="custom" name="html" slot="icon"></gov-icon>
    </gov-tile>
    <gov-tile href="/zaciname/developers/angular">
        <h3 slot="title">Usage with Angular</h3>
        <gov-icon type="custom" name="angular" slot="icon"></gov-icon>
    </gov-tile>
    <gov-tile href="/zaciname/developers/vue">
        <h3 slot="title">Usage with Vue</h3>
        <gov-icon type="custom" name="vue" slot="icon"></gov-icon>
    </gov-tile>
    <gov-tile href="/zaciname/developers/react">
        <h3 slot="title">Usage with React</h3>
        <gov-icon type="custom" name="react" slot="icon"></gov-icon>
    </gov-tile>
</gov-tiles>
