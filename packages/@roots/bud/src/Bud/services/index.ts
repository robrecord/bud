import {Framework} from '@roots/bud-framework'

import {Api} from './Api'
import {Build} from './Build'
import {Cache} from './Cache'
import {Compiler} from './Compiler'
import {Dashboard} from './Dashboard'
import {Dependencies} from './Dependencies'
import {Discovery} from './Discovery'
import {Env} from './Env'
import {Extensions} from './Extensions'
import {Hooks} from './Hooks'
import {Logger} from './Logger'
import {Server} from './Server'

const services: Framework.Services = {
  api: Api,
  build: Build,
  cache: Cache,
  compiler: Compiler,
  dashboard: Dashboard,
  dependencies: Dependencies,
  discovery: Discovery,
  env: Env,
  extensions: Extensions,
  hooks: Hooks,
  logger: Logger,
  server: Server,
}

export {services}
