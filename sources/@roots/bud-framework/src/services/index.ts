import type {Service} from '../service.js'
import type * as Api from './api/index.js'
import type * as Build from './build/index.js'
import type * as Cache from './cache/index.js'
import type * as Dashboard from './dashboard/index.js'
import type * as Env from './env/index.js'
import type * as Extensions from './extensions/index.js'
import type * as Hooks from './hooks/index.js'
import type * as Peers from './peers/index.js'
import type * as Project from './project/index.js'
import type * as Server from './server/index.js'

export type {
  Api,
  Build,
  Cache,
  Dashboard,
  Env,
  Extensions,
  Hooks,
  Peers,
  Project,
  Server,
}

/**
 * Registered services
 *
 * @virtual @public
 */
export interface Registry extends Partial<Record<string, Service>> {}
