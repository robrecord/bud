import type {Framework} from '@roots/bud-framework'
import {SetOptional} from 'type-fest'

import Bud from './Bud'
import {services} from './Bud/services'
import config from './config'

/**
 * {@link Bud} ctor property overrides
 *
 * @core @public
 */
interface Options
  extends SetOptional<Framework.Options, 'name'> {}

/**
 * Create a {@link Bud} instance programatically
 *
 * @example Simple usage
 * ```ts
 * const bud = factory()
 * ```
 *
 * @public @core @config
 */
function factory(overrides?: Options): Bud {
  const options: Framework.Options = {
    name: overrides?.name ?? 'bud',
    mode: overrides?.mode ?? 'production',
    config,
    services,
  }

  overrides?.services &&
    Object.assign(options.services, overrides.services)

  overrides?.config &&
    Object.assign(options.config, overrides.config)

  process.env.BABEL_ENV = options.mode
  process.env.NODE_ENV = options.mode

  return new Bud(options).bootstrap()
}

export {factory as default}
