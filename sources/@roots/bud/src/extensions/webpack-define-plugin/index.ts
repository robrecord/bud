import {Extension} from '@roots/bud-framework'
import {
  bind,
  label,
  plugin,
} from '@roots/bud-framework/extension/decorators'
import Webpack from 'webpack'

@label('webpack:define-plugin')
@plugin(Webpack.DefinePlugin)
export default class BudDefine extends Extension<
  Record<string, any>,
  Webpack.DefinePlugin
> {
  @bind
  public async init() {
    this.setOptions(this.app.env.getPublicEnv())
  }

  /**
   * `when` callback
   *
   * @public
   * @decorator `@bind`
   */
  @bind
  public async when() {
    return this.options && Object.keys(this.options).length > 0
  }
}
