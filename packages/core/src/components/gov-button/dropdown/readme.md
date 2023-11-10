# gov-dropdown



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description           | Type                | Default         |
| ---------- | ---------- | --------------------- | ------------------- | --------------- |
| `open`     | `open`     | Dropdown open state   | `boolean`           | `false`         |
| `position` | `position` | Menu display position | `"left" \| "right"` | `Position.LEFT` |


## Events

| Event        | Description                            | Type                         |
| ------------ | -------------------------------------- | ---------------------------- |
| `gov-change` | Emitted when the dropdown change state | `CustomEvent<DropdownEvent>` |


## Methods

### `getState() => Promise<boolean>`

Returns the current state of the dropdown

#### Returns

Type: `Promise<boolean>`



### `setOpen(state: boolean) => Promise<void>`

Sets the dropdown state

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
