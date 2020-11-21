import {Bud, Cache as Abstract} from '@roots/bud-typings'

/**
 * ## bud.cache [🏠 Internal]
 *
 * Cache utlity for Webpack modules.
 *
 * [🏡 Project home](https://roots.io/bud)
 * [🧑‍💻 roots/bud](#)
 * [📦 @roots/bud-cache](#)
 * [🔗 Documentation](#)
 */
export class Cache implements Abstract.Contract {
  /**
   * Class constructor.
   */
  constructor(bud: Bud.Bud) {
    this.enabled = this.enabled.bind(bud)
    this.setCache = this.setCache.bind(bud)
  }

  /**
   * ## bud.cache.enabled [🏠 Internal]
   *
   * Returns boolean true if cache is enabled
   *
   * Cache is enabled when there is a cache record to read on disk and
   * the buildCache feature is enabled.
   *
   * ```js
   * bud.cache.enabled()
   * // => true if cache is enabled
   * ```
   */
  public enabled(this: Bud.Bud): boolean {
    return (
      this.features.enabled('buildCache') &&
      this.fs.exists(
        this.config.get('webpack.recordsPath') as string,
      )
    )
  }

  /**
   * ## bud.cache.setCache [🏠 Internal]
   *
   * Sets the cache object in the webpack configuration.
   */
  public setCache(this: Bud.Bud): void {
    this.cache.enabled() &&
      this.hooks.on('webpack.cache', (bud: Bud.Bud) =>
        bud.disk
          .get('project')
          .readJson(this.config.get('webpack.recordsPath')),
      )
  }
}