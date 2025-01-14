/* eslint-disable no-console */
import type {Config} from '@roots/bud-framework'
import {Builtins, Cli} from 'clipanion'
import {execa} from 'execa'
import {platform} from 'node:os'
import {join} from 'node:path'

import {makeContext} from '../context/index.js'
import {BuildCommand} from './commands/build.js'
import {CleanCommand} from './commands/clean.js'
import {DevCommand} from './commands/dev.js'
import {DoctorCommand} from './commands/doctor.js'
import {InstallCommand} from './commands/install.js'

/**
 * Ensure notifier permissions (macOS)
 * @param context - application context
 * @public
 */
const notifier = async (context: Config.Context) => {
  if (platform() === 'darwin') {
    try {
      const notifierPath = join(
        context.application.dir,
        'vendor',
        'mac.no-index',
        'roots-notifier.app',
        'Contents',
        'MacOS',
        'roots-notifier',
      )

      await execa(`chmod`, [`u+x`, notifierPath])
    } catch (err) {}
  }
}

/**
 * Run Bud CLI
 *
 * @public
 */
const bud = async () => {
  /**
   * Execution context
   * @see {@link https://mael.dev/clipanion/docs/contexts}
   */
  const context = await makeContext()
  await notifier(context)

  const application = new Cli({
    binaryLabel: context.application.label,
    binaryName: context.application.label,
    binaryVersion: context.application.version,
    enableCapture: false,
    enableColors: true,
  })

  application.register(Builtins.HelpCommand)
  application.register(Builtins.DefinitionsCommand)
  application.register(Builtins.VersionCommand)

  application.register(BuildCommand)
  application.register(CleanCommand)
  application.register(DevCommand)
  application.register(DoctorCommand)
  application.register(InstallCommand)

  application.runExit(process.argv.slice(2), context)
}

/* ⚡️ */ bud()
