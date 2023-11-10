# gov-stepper

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                       | Type                                                            | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| `annotation` | `annotation`  | Item annotation of the stepper                                                    | `string`                                                        | `undefined` |
| `identifier` | `identifier`  | Custom stepper item identifier. Otherwise, it will be generated                   | `string`                                                        | `undefined` |
| `label`      | `label`       | Item name of the stepper                                                          | `string`                                                        | `undefined` |
| `size`       | `size`        | Size of stepper                                                                   | `"m" \| "s" \| "xs"`                                            | `'m'`       |
| `triggerTag` | `trigger-tag` | Used to change the HMTL tag in the stepper trigger for correct semantic structure | `string`                                                        | `'h3'`      |
| `variant`    | `variant`     | Style variation of the button.                                                    | `"error" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |


## Events

| Event        | Description                             | Type                                     |
| ------------ | --------------------------------------- | ---------------------------------------- |
| `gov-change` | Called when the accordion state changes | `CustomEvent<GovStepperItemChangeEvent>` |


## Methods

### `currentState() => Promise<boolean>`

Returns the current state of the component

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
