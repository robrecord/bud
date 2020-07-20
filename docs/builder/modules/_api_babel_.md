[@roots/budpack](../README.md) › [Globals](../globals.md) › ["api/babel"](_api_babel_.md)

# Module: "api/babel"

## Index

### Functions

* [babel](_api_babel_.md#const-babel)

## Functions

### `Const` babel

▸ **babel**(`options`: object): *["index"](_index_.md)*

*Defined in [api/babel.js:16](https://github.com/roots/bud-support/blob/5f43850/src/budpack/builder/api/babel.js#L16)*

Configure Babel.

If you prefer, you may utilize a babel.config.js file in the project root,
either alongside or in lieue of this configuration.

Conflicts between supplied configs will be resolved in favor of bud.config.js.

**`see`** https://babeljs.io/docs/en/configuration

**Parameters:**

▪ **options**: *object*

Name | Type |
------ | ------ |
`enabled` | boolean |
`plugins` | any[] |
`presets` | any[] |

**Returns:** *["index"](_index_.md)*

bud