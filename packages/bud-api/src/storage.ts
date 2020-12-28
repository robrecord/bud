import {Api} from '@roots/bud-typings'

export const storage: Api.Storage = function (path?) {
  if (path) {
    this.config.set('recordsPath', path)
    this.extensions
      .get('webpack-config-dump-plugin')
      .set('outputPath', this.project('storage/bud'))
  }

  this.features.set('buildCache', true)

  return this
}