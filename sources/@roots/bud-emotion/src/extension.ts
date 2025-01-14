import {Extension} from '@roots/bud-framework'
import {
  bind,
  dependsOn,
  label,
} from '@roots/bud-framework/extension/decorators'

/**
 * Emotion extension
 *
 * @public
 * @decorator `@label`
 * @decorator `@dependsOnOptional`
 */
@label('@roots/bud-emotion')
@dependsOn(['@roots/bud-babel'])
export default class BudEmotion extends Extension {
  /**
   * `beforeBuild` callback
   *
   * @public
   * @decorator `@bind`
   */
  @bind
  public async beforeBuild() {
    const plugin = await this.resolve('@emotion/babel-plugin')
    this.app.babel.setPlugin('@emotion/babel-plugin', plugin)
  }
}
