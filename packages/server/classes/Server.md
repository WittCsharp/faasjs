# Class: Server

FaasJS Server.

```ts
const server = new Server(process.cwd(), {
 port: 8080,
 cache: false,
})

server.listen()
```

## Table of contents

### Constructors

- [constructor](Server.md#constructor)

### Properties

- [logger](Server.md#logger)
- [opts](Server.md#opts)
- [root](Server.md#root)

### Methods

- [close](Server.md#close)
- [listen](Server.md#listen)
- [processRequest](Server.md#processrequest)

## Constructors

### constructor

• **new Server**(`root`, `opts?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `string` | Project path |
| `opts?` | `Object` | Options |
| `opts.cache?` | `boolean` | Enable cache, default is false |
| `opts.port?` | `number` | Port, default is 3000 |

## Properties

### logger

• `Readonly` **logger**: `Logger`

___

### opts

• `Readonly` **opts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache` | `boolean` |
| `port` | `number` |

___

### root

• `Readonly` **root**: `string`

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

___

### listen

▸ **listen**(): `Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>

Start server.

#### Returns

`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>

___

### processRequest

▸ **processRequest**(`path`, `req`, `res`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`<`IncomingMessage`\> & { `end`: () => `void` ; `setHeader`: (`key`: `string`, `value`: `string`) => `void` ; `statusCode`: `number` ; `write`: (`body`: `string` \| `Buffer`) => `void`  } |

#### Returns

`Promise`<`void`\>
