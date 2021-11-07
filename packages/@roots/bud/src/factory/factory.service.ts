import {Configuration} from '@roots/bud-framework'
import {container} from '@roots/bud-support'

import {Bud} from '../Bud'

/**
 * Create a {@link Bud} instance programatically
 *
 * @example
 * ```ts
 * const bud = factory()
 * ```
 *
 * @public
 */
export async function factory(
  overrides?: Partial<Configuration>,
): Promise<Bud> {
  const bud = container.resolve<Bud>('bud')

  bud.time('bud')
  return await bud.lifecycle()
}
