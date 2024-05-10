[@faasjs/func](../README.md) / InvokeData

# Type alias: InvokeData\<TEvent, TContext, TResult\>

> **InvokeData**\<`TEvent`, `TContext`, `TResult`\>: `object`

## Type parameters

• **TEvent** = `any`

• **TContext** = `any`

• **TResult** = `any`

## Index signature

 \[`key`: `string`\]: `any`

## Type declaration

### callback

> **callback**: `any`

### config

> **config**: [`Config`](Config.md)

### context

> **context**: `TContext`

### event

> **event**: `TEvent`

### handler?

> `optional` **handler**: [`Handler`](Handler.md)\<`TEvent`, `TContext`, `TResult`\>

### logger

> **logger**: `Logger`

### response

> **response**: `any`
