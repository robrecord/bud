import type {Compiler} from 'webpack'

/**
 * Webpack plugin.
 *
 * @public
 */
export interface ApplyPlugin {
  /**
   * Loose defined
   *
   * @public
   */
  [key: string]: any

  /**
   * Apply callback
   *
   * @see {@link https://webpack.js.org/contribute/writing-a-plugin/#basic-plugin-architecture}
   *
   * @public
   */
  apply: (compiler?: Compiler) => unknown
}

/**
 * Newable function or class that returns
 * an {@link ApplyPlugin} instance.
 *
 * @public
 */
export interface ApplyPluginConstructor {
  new (...args: any[]): ApplyPlugin
}
/**
 * A decorator that adds a plugin property to the class.
 *
 * @param plugin - {@link ApplyPlugin}
 */
export const plugin =
  (plugin: new (...args: any[]) => {apply: CallableFunction}) =>
  <Type extends {new (...args: any[]): any}>(constructor: Type) =>
    class extends constructor {
      public plugin = plugin
    }
