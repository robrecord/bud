/* eslint-disable simple-import-sort/imports */
// Copyright (c) Roots Foundation, LLC. All rights reserved.
// Licensed under the MIT license.

/**
 * This package is a collection of internal dependencies utilized by the build system.
 *
 * @see https://roots.io/bud
 * @see https://github.com/roots/bud
 *
 * @remarks
 * This package is bundled with \@vercel/ncc. Sometimes type definitions can be a little iffy.
 *
 * It is recommended for extension authors to include their type definitions separately. You can
 * ensure that these packages are included in the runtime by specifying your type imports with
 * `import type` syntax.
 *
 * @remarks
 * - 💁 Composable - Build exceptional applications with a modular, configurable build system
 *
 * - 💪 Modern - Modern framework written in TypeScript with an expressive API
 *
 * - 🌱 Easy - Low bundle size and fast build times
 *
 * @core @packageDocumentation @betaDocumentation
 */
/**
 * Container
 */
//

import 'reflect-metadata'

import {
  container,
  inject,
  injectable,
  scoped,
  singleton,
  Lifecycle,
} from 'tsyringe'

/**
 * `@bind`
 */
import {bind} from 'helpful-decorators'
container.register('decorators', {
  useValue: {
    bind,
  },
})

/**
 * LoDash
 */
import lodash, {LoDashStatic} from 'lodash'
container.register<LoDashStatic>('lodash', {useValue: lodash})
export {LoDashStatic, lodash}

/**
 * Execa
 */
import execa from 'execa'
container.register<typeof execa>('execa', {useValue: execa})
export {execa as Execa}

export {container}
export {inject, injectable, scoped, singleton, Lifecycle}

/**
 * Dependencies
 */

export {chalk} from './external/chalk'
export {chokidar} from './external/chokidar'
export {
  cosmiconfig,
  cosmiconfigTsLoader,
} from './external/cosmiconfig'
export {dotenv} from './external/dotenv'
export {dotenvExpand} from './external/dotenv-expand'
export {Express} from './external/express'
export {fs} from './external/fs-extra'
export * as globby from './external/globby'
export {humanReadable} from './external/human-readable'
export {IgnoreEmitWebpackPlugin} from './external/ignore-emit-webpack-plugin'
export {json5} from './external/json5'
export {nanoid} from './external/nanoid'
export {NodeNotifier} from './external/node-notifier'
export {patchConsole} from './external/patch-console'
export {pkgUp} from './external/pkg-up'
export {prettier} from './external/prettier'
export {ProvidePlugin} from './external/webpack-provide-plugin'
export {safeResolve} from './external/safe-resolve'
export {safeRequire} from './external/safe-require'
export {Signale} from './external/signale'
export {toml} from './external/toml'
export {yaml} from './external/yaml'

/**
 * Utilities
 */
//

export {dump} from './util/dump'
export {killPort} from './util/killPort'
export * as wpPkgs from './util/wordpressPkgs'

/**
 * Decorators
 */
//

export {bind} from 'helpful-decorators'
