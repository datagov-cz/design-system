# gov-breadcrumbs

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                            | Type      | Default     |
| ---------------- | ----------------- | -------------------------------------------------------------------------------------- | --------- | ----------- |
| `collapsible`    | `collapsible`     | Defines whether the components can be collapsible when element doesn't fit in one row. | `boolean` | `false`     |
| `isExpanded`     | `is-expanded`     | Defines whether the breadcrumbs are open or closed by button                           | `boolean` | `false`     |
| `wcagLabel`      | `wcag-label`      | Adds accessible label for the pagination that is only shown for screen readers.        | `string`  | `undefined` |
| `wcagLabelledBy` | `wcag-labeled-by` | Indicates the id of a component that labels the pagination.                            | `string`  | `undefined` |


## Events

| Event        | Description                               | Type                                     |
| ------------ | ----------------------------------------- | ---------------------------------------- |
| `gov-change` | Called when the Breadcrumbs state changes | `CustomEvent<GovBreadcrumbsChangeEvent>` |


## Methods

### `validateWcag() => Promise<void>`

Validate the WCAG attributes of the component

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
