import {Dashboard as Base} from '@roots/bud-framework'
import {Service} from '@roots/bud-framework'
import {bind, logUpdate} from '@roots/bud-support'
import {StatsCompilation} from 'webpack'

import {Line} from './line'
import {reporter} from './stats'

/**
 * Dashboard service
 *
 * @public
 */
export class Dashboard extends Service implements Base.Service {
  protected hash: string

  public interval: NodeJS.Timer

  public progress = new Line()

  protected output: Array<string>

  protected percent: number

  protected frame: string = ''

  /**
   * @override
   */
  @bind
  public render(str: string) {
    this.app.context.stdout.write(str)
  }

  @bind
  public async register() {
    if (this.app.context.args.ci || this.app.env.has('TS_JEST')) {
      return
    }

    this.render = logUpdate.createLogUpdate(this.app.context.stdout)
    this.interval = setInterval(this.update, 80)

    this.app.hooks.action('event.app.close', async () =>
      this.interval.unref(),
    )
  }

  @bind
  public update() {
    !this.progress.isComplete &&
      this.progress.frame &&
      this.render(this.progress.frame)

    return this
  }

  /**
   * Run dashboard
   *
   * @public
   * @decorator `@bind`
   */
  @bind
  public stats({
    stats,
    errors,
    warnings,
  }: {
    stats: StatsCompilation
    errors: any
    warnings: any
  }): this {
    this.progress.complete(true)

    this.frame = this.app.context.args.ci
      ? this.app.compiler.stats.string.trim()
      : reporter.report({stats, errors, warnings, app: this.app})

    this.app.context.stdout.write(this.frame)

    return this
  }

  /**
   * Progress callback
   *
   * @public
   * @decorator `@bind`
   */
  @bind
  public progressCallback(percent: number, scope: string) {
    try {
      this.percent = Math.ceil((percent ?? 0) * 100)
      this.progress.complete(this.percent >= 99)

      const update = scope.includes(`]`)
        ? scope.split(`]`).pop()?.trim()
        : scope

      this.progress.update(`${this.percent}%`, update)
      this.update()
    } catch (error) {
      this.app.warn(error)
    }
  }
}
