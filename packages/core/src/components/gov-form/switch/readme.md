# gov-form-switch

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                                                                                                        | Type                        | Default     |
| ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `checked`         | `checked`           | Switch button state                                                                                                                                                                                                                                                                                | `boolean`                   | `false`     |
| `disabled`        | `disabled`          | Makes the switch component disabled. This prevents users from being able to interact with the switch, and conveys its inactive state to assistive technologies.                                                                                                                                    | `boolean`                   | `false`     |
| `identifier`      | `identifier`        | Custom switch identifier.                                                                                                                                                                                                                                                                          | `string`                    | `undefined` |
| `invalid`         | `invalid`           | Indicates the entered value does not conform to the format expected by the application.                                                                                                                                                                                                            | `boolean`                   | `undefined` |
| `name`            | `name`              | Name of the switch.                                                                                                                                                                                                                                                                                | `string`                    | `undefined` |
| `noLabel`         | `no-label`          | When you can't use the form label.                                                                                                                                                                                                                                                                 | `boolean`                   | `false`     |
| `required`        | `required`          | Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them. When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors. | `boolean`                   | `false`     |
| `size`            | `size`              | Switch's size.                                                                                                                                                                                                                                                                                     | `"l" \| "m" \| "s" \| "xs"` | `"m"`       |
| `value`           | `value`             | Value of switch                                                                                                                                                                                                                                                                                    | `string`                    | `undefined` |
| `wcagDescribedBy` | `wcag-described-by` | Indicates the id of a component that describes the input.                                                                                                                                                                                                                                          | `string`                    | `undefined` |
| `wcagLabelledBy`  | `wcag-labelled-by`  | Indicates the id of a component that labels the input.                                                                                                                                                                                                                                             | `string`                    | `undefined` |


## Events

| Event        | Description                           | Type                           |
| ------------ | ------------------------------------- | ------------------------------ |
| `gov-blur`   | Emitted when the switch loses focus.  | `CustomEvent<FormSwitchEvent>` |
| `gov-change` | Emitted when the switch change value. | `CustomEvent<FormSwitchEvent>` |
| `gov-focus`  | Emitted when the switch has focus.    | `CustomEvent<FormSwitchEvent>` |


## Methods

### `getRef() => Promise<HTMLInputElement>`

Returns the reference of the native element

#### Returns

Type: `Promise<HTMLInputElement>`



### `validateWcag() => Promise<void>`

Validate the WCAG attributes of the component

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
