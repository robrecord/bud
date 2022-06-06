import lodash from 'lodash-es'

import {Bud} from '../bud.js'

const {isFunction} = lodash

/**
 * @internal
 */
export interface maybeCall {
  <I = Bud>(maybeCallable: maybeCallable<I>, value?: I): I
}

export type maybeCallable<I = unknown> = ((param: Bud) => I) | I

/**
 * Calls a given value if it is a function. The function will be bound to
 * Budbefore it is called.
 *
 * If it is not a function, returns the value without doing anything to it.
 *
 * @typeParam I - Type of the value expected to be returned
 * @public
 */
export function maybeCall<I = Bud>(maybeCallable: maybeCallable): I {
  const app = this as Bud

  return isFunction(maybeCallable)
    ? maybeCallable.call(app, app)
    : maybeCallable
}
