# gov-form-message

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                     | Type                                               | Default       |
| --------- | --------- | ------------------------------- | -------------------------------------------------- | ------------- |
| `variant` | `variant` | Style variation of the message. | `"error" \| "secondary" \| "success" \| "warning"` | `'secondary'` |


## Methods

### `identifier() => Promise<string>`

Returns unique identfiier of message

#### Returns

Type: `Promise<string>`




## Dependencies

### Used by

 - [gov-form-file](../file)

### Graph
```mermaid
graph TD;
  gov-form-file --> gov-form-message
  style gov-form-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
