# Class: Http<TParams, TCookie, TSession\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends `Record`<`string`, `any`\> = `any` |
| `TCookie` | extends `Record`<`string`, `string`\> = `any` |
| `TSession` | extends `Record`<`string`, `string`\> = `any` |

## Implements

- `Plugin`

## Table of contents

### Constructors

- [constructor](Http.md#constructor)

### Properties

- [body](Http.md#body)
- [config](Http.md#config)
- [cookie](Http.md#cookie)
- [headers](Http.md#headers)
- [name](Http.md#name)
- [params](Http.md#params)
- [session](Http.md#session)
- [type](Http.md#type)

### Methods

- [onDeploy](Http.md#ondeploy)
- [onInvoke](Http.md#oninvoke)
- [onMount](Http.md#onmount)
- [setBody](Http.md#setbody)
- [setContentType](Http.md#setcontenttype)
- [setHeader](Http.md#setheader)
- [setStatusCode](Http.md#setstatuscode)

## Constructors

### constructor

• **new Http**<`TParams`, `TCookie`, `TSession`\>(`config?`)

创建 Http 插件实例

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TParams` | extends `Record`<`string`, `any`\> = `any` |
| `TCookie` | extends `Record`<`string`, `string`\> = `any` |
| `TSession` | extends `Record`<`string`, `string`\> = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`HttpConfig`](../modules.md#httpconfig)<`TParams`, `TCookie`, `TSession`\> | 配置项 |

## Properties

### body

• **body**: `any`

___

### config

• **config**: [`HttpConfig`](../modules.md#httpconfig)<`TParams`, `TCookie`, `TSession`\>

___

### cookie

• **cookie**: [`Cookie`](Cookie.md)<`TCookie`, `TSession`\>

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

___

### name

• `Readonly` **name**: `string` = `Name`

#### Implementation of

Plugin.name

___

### params

• **params**: `TParams`

___

### session

• **session**: [`Session`](Session.md)<`TSession`, `TCookie`\>

___

### type

• `Readonly` **type**: `string` = `Name`

#### Implementation of

Plugin.type

## Methods

### onDeploy

▸ **onDeploy**(`data`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DeployData` |
| `next` | `Next` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Plugin.onDeploy

___

### onInvoke

▸ **onInvoke**(`data`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `InvokeData`<`any`, `any`, `any`\> |
| `next` | `Next` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Plugin.onInvoke

___

### onMount

▸ **onMount**(`data`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MountData` |
| `next` | `Next` |

#### Returns

`Promise`<`void`\>

#### Implementation of

Plugin.onMount

___

### setBody

▸ **setBody**(`body`): [`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

设置 body

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | 内容 |

#### Returns

[`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

___

### setContentType

▸ **setContentType**(`type`, `charset?`): [`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

设置 Content-Type

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` | `undefined` | 类型 |
| `charset` | `string` | `'utf-8'` | 编码 |

#### Returns

[`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

___

### setHeader

▸ **setHeader**(`key`, `value`): [`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

设置 header

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | key |
| `value` | `string` | value |

#### Returns

[`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

___

### setStatusCode

▸ **setStatusCode**(`code`): [`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>

设置状态码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 状态码 |

#### Returns

[`Http`](Http.md)<`TParams`, `TCookie`, `TSession`\>