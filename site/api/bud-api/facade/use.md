---
id: bud-api.facade.use
title: use property
sidebar_label: use property
hide_title: true
sidebar: "api"
slug: use
---

## Facade.use property

Register an extension or set of extensions

Signature:

```typescript
use: use;
```

## Remarks

This function is used to register an extension or set of extensions.

- If the extension is a webpack plugin, it will be registered as a webpack plugin

- If the extension is an array of extensions, they will be registered as webpack plugins

## Example 1

Add packaged bud extensions

```ts
bud.use([require("@roots/bud-babel"), require("@roots/bud-react")]);
```

## Example 2

Add a bud extension inline

```ts
bud.use({
  name: "my-webpack-plugin",
  make: () => new MyWebpackPlugin(),
});
```

## Example 3

Add a webpack plugin inline

```ts
bud.use(new MyWebpackPlugin());
```