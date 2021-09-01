import type {WebpackPluginInstance} from 'webpack'

import type {Framework, Module, Service, WebpackPlugin} from './'

interface Extensions
  extends Service<Partial<Framework.Extensions>> {
  /**
   * Add an extension
   */
  add(extension: Module | WebpackPlugin): void

  /**
   * Get {@link WebpackPluginInstance} instances to be included in compilation
   */
  make(): Extensions.PluginOutput[]

  /**
   * Get {@link Extension} instances slated for inclusion in compilation
   */
  getEligibleWebpackModules(): (Module | WebpackPlugin)[]
}

namespace Extensions {
  export type PluginOutput = WebpackPluginInstance[]
}

export {Extensions}
