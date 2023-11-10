---
title: Usage with Angular
---

The preferred method for utilizing Gov Design System CE's components in Angular is through
the `@gov-design-system-ce/angular` package. This package
provides Angular-specific wrappers for Gov Design System CE's Web Components, ensuring seamless integration with Angular
features, such
as reactive forms. To install this package, execute the following command:

```shell
npm install @gov-design-system-ce/angular --save-dev
```

Once you’ve installed the package, you can import Gov Design System CE’s Angular components in your application:

```javascript
import { GovDesignSystemModule } from "@gov-design-system-ce/angular";

@NgModule({
  //...
  imports: [
    GovDesignSystemModule
  ],
  //...
})
export class AppModule {
}
```

## Using Web Components in Angular

While we recommend using the `@gov-design-system-ce/angular` package, you also have the option to use our Web Components
directly. To begin, install our Web Components package with the following command:

```shell
npm install @gov-design-system-ce/components
```

To enable the use of Web Components in Angular, you must import and include Angular's `CUSTOM_ELEMENTS_SCHEMA`. This
schema permits the utilization of Web Components in HTML markup without triggering compiler errors. You should include
the `CUSTOM_ELEMENTS_SCHEMA` in any module that employs custom elements. Typically, you can add it to the `AppModule`
like
so:

```javascript
// ...
// Import custom elements schema
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  // ...
  // Add custom elements schema to NgModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
```

The last step involves loading and registering Gov Design System CE's components in the browser.
The `@gov-design-system-ce/components` package includes a central function for this purpose, known
as `defineCustomElements()`. It's essential to call this function
once during the initialization of your application. A convenient location to do this is in your `main.ts` file, as shown
below:

```javascript
import { defineCustomElements } from "@gov-design-system-ce/components/dist/loader";

defineCustomElements(window);
```

Once integrated, you can use the components in your HTML markup, as demonstrated in the following example:

```html

<gov-button variant="primary" type="solid">Click me</gov-button>
```

## Edge and IE11 polyfills

If you want your custom elements to function on older browsers, it's advisable to include the `applyPolyfills()` method
around the `defineCustomElements()` function, like this:

```javascript
import { defineCustomElements, applyPolyfills } from "@gov-design-system-ce/components/dist/loader";
applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

More information on [StencilJS](https://stenciljs.com/docs/angular) website.
