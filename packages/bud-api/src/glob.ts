import {Framework} from '@roots/bud-framework'
import {GlobTask, isArray} from '@roots/bud-support'

declare module '@roots/bud-framework' {
  interface Framework {
    /**
     * ## glob  [💁 Fluent]
     *
     * Generate an entrypoint from assets matching a
     * [fast-glob](https://git.io/JkGbw) formatted string.
     *
     * ### Globbing
     *
     * **Supported patterns**
     *
     * - `*` matches any number of characters, but not `/`
     * - `?` matches a single character, but not `/`
     * - `**` matches any number of characters, including `/`, as long as it's theonly thing in a path part
     * - `{}` allows for a comma-separated list of "or" expressions
     * - `!` at the beginning of a pattern will negate the match
     *
     * ### Usage
     *
     * Create an app bundle comprised of all js assets in the src root:
     *
     * ```js
     * app.glob('app', '*.js')
     * ```
     */
    glob: Framework.Api.Glob
  }

  namespace Framework.Api {
    export type Glob = (
      this: Framework,
      name: string,
      pattern: GlobTask['pattern'],
    ) => Framework
  }
}

export const glob: Framework.Api.Glob = function (
  name,
  pattern,
) {
  const options = {
    cwd: this.src(),
    expandDirectories: true,
  }

  /**
   * Add entrypoints
   */
  const task = isArray(pattern) ? pattern : [pattern]
  const assets = this.disk.glob.sync(task, options)
  const valid = assets?.length && assets?.length > 0

  valid &&
    this.hooks.on(`webpack.entry`, entry => ({
      ...entry,
      [name]: assets,
    }))

  return this
}
