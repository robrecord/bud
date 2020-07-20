[@roots/budpack](../README.md) › [Globals](../globals.md) › ["preset"](_preset_.md)

# Module: "preset"

## Index

### Functions

* [preset](_preset_.md#const-preset)

## Functions

### `Const` preset

▸ **preset**(`relativePath`: string): *string*

*Defined in [preset.js:25](https://github.com/roots/bud-support/blob/5f43850/src/budpack/builder/api/preset.js#L25)*

## bud.preset

Retrieve a Bud framework preset.

### Examples

```js
bud.preset('babel/postcss')
```

```js
bud.preset('babel/preset-react')
```

```js
bud.preset('tsconfig')
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`relativePath` | string | relative path |

**Returns:** *string*

absolutePath