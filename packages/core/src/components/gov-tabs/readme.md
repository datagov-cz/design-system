# gov-tabs

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                         | Type      | Default     |
| ------------------- | -------------------- | ------------------------------------------------------------------- | --------- | ----------- |
| `default`           | `default`            | Default selected tab                                                | `boolean` | `false`     |
| `identifier`        | `identifier`         | Custom tab item identifier. Otherwise, it will be generated         | `string`  | `undefined` |
| `label`             | `label`              | Item name of the tab                                                | `string`  | `undefined` |
| `triggerIdentifier` | `trigger-identifier` | Custom tab trigger item identifier. Otherwise, it will be generated | `string`  | `undefined` |


## Methods

### `getIdentifier() => Promise<string>`

Returns a unique tab content identifier

#### Returns

Type: `Promise<string>`



### `getTriggerIdentifier() => Promise<string>`

Returns a unique tab trigger identifier

#### Returns

Type: `Promise<string>`



### `setActiveStatus(status: boolean) => Promise<void>`

Set status of tab-item

#### Parameters

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| `status` | `boolean` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
