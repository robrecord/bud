import {Bud} from '@roots/bud-framework'

import BudTypeCheck from './fork-ts-checker-webpack-plugin'

/**
 * @public
 */
export interface OptionsFactory {
  (app: Bud): BudTypeCheck['options']
}

/**
 * Configuration to use when bud.mode is `production`.
 *
 * @public
 */
export const production: OptionsFactory = (app: Bud) => ({
  async: false,
  typescript: {
    useTypescriptIncrementalApi: true,
    memoryLimit: 4096,
    typescriptPath: require.resolve('typescript'),
    diagnosticOptions: {
      semantic: true,
      syntactic: true,
    },
  },
})
/*
 *
 * options to use when bud.mode is `development`.
 *
 * @public
 */
export const development: OptionsFactory = (app: Bud) => ({
  async: false,
  typescript: {
    useTypescriptIncrementalApi: true,
    typescriptPath: require.resolve('typescript'),
    diagnosticOptions: {
      semantic: true,
      syntactic: true,
    },
  },
})
