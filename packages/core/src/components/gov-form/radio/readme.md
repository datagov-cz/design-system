# gov-form-radio

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                                                                                                        | Type                        | Default     |
| ----------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `checked`         | `checked`           | Radio button state                                                                                                                                                                                                                                                                                 | `boolean`                   | `false`     |
| `disabled`        | `disabled`          | Makes the radio component disabled. This prevents users from being able to interact with the radio, and conveys its inactive state to assistive technologies.                                                                                                                                      | `boolean`                   | `false`     |
| `identifier`      | `identifier`        | Custom radio identifier.                                                                                                                                                                                                                                                                           | `string`                    | `undefined` |
| `invalid`         | `invalid`           | Indicates the entered value does not conform to the format expected by the application.                                                                                                                                                                                                            | `boolean`                   | `undefined` |
| `name`            | `name`              | Name of the radio.                                                                                                                                                                                                                                                                                 | `string`                    | `undefined` |
| `noLabel`         | `no-label`          | When you can't use the form label.                                                                                                                                                                                                                                                                 | `boolean`                   | `false`     |
| `required`        | `required`          | Set whether the input is required or not. Please note that this is necessary for accessible inputs when the user is required to fill them. When using this property you need to also set “novalidate” attribute to your form element to prevent browser from displaying its own validation errors. | `boolean`                   | `false`     |
| `size`            | `size`              | Radio's size.                                                                                                                                                                                                                                                                                      | `"l" \| "m" \| "s" \| "xs"` | `"m"`       |
| `value`           | `value`             | Value of radio                                                                                                                                                                                                                                                                                     | `string`                    | `undefined` |
| `wcagDescribedBy` | `wcag-described-by` | Indicates the id of a component that describes the input.                                                                                                                                                                                                                                          | `string`                    | `undefined` |
| `wcagLabelledBy`  | `wcag-labelled-by`  | Indicates the id of a component that labels the input.                                                                                                                                                                                                                                             | `string`                    | `undefined` |


## Events

| Event        | Description                          | Type                          |
| ------------ | ------------------------------------ | ----------------------------- |
| `gov-blur`   | Emitted when the radio loses focus.  | `CustomEvent<FormRadioEvent>` |
| `gov-change` | Emitted when the radio change value. | `CustomEvent<FormRadioEvent>` |
| `gov-focus`  | Emitted when the radio has focus.    | `CustomEvent<FormRadioEvent>` |


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
