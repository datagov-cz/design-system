# gov-skeleton



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                   | Type                                                            | Default       |
| ----------- | ------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------- | ------------- |
| `animation` | `animation`  | Animation type                                                                | `"false" \| "progress" \| "pulse"`                              | `"progress"`  |
| `count`     | `count`      | Number of rows of current skeleton type                                       | `number`                                                        | `1`           |
| `height`    | `height`     | Height of the skeleton ex. 100px, 100%, auto etc.                             | `string`                                                        | `null`        |
| `shape`     | `shape`      | Shape of the skeleton                                                         | `"circle" \| "rect" \| "text"`                                  | `"text"`      |
| `variant`   | `variant`    | Style variation of the skeleton.                                              | `"error" \| "primary" \| "secondary" \| "success" \| "warning"` | `"secondary"` |
| `wcagLabel` | `wcag-label` | Adds accessible label for the skeleton that is only shown for screen readers. | `string`                                                        | `undefined`   |
| `width`     | `width`      | Width of the skeleton ex. 100px, 100%, auto etc.                              | `string`                                                        | `null`        |


## Methods

### `validateWcag() => Promise<void>`

Validate the WCAG attributes of the component

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
