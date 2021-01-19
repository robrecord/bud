import fetchExternals from './fetchExternals'
import externalsPlugin from './externalsPlugin'

import {RawSource} from 'webpack-sources'
import Webpack, {ExternalsPlugin} from 'webpack'
import path from 'path'

import {WordPressExternals} from './interfaces'

export * from './interfaces'
export class Plugin {
  public name = 'WordPressExternalsWebpackPlugin'

  public stage = Infinity

  public output: WordPressExternals.Output = {
    dir: '',
    name: '',
    file: '',
    publicPath: '',
    content: {},
  }

  public options: WordPressExternals.Options

  public externalsPlugin: ExternalsPlugin

  /**
   * Class constructor
   */
  constructor(
    options: WordPressExternals.Options = {
      name: 'wordpress.json',
      writeToFileEmit: true,
      useElementAsReact: true,
    },
  ) {
    this.options = options

    this.output.name = this.options.name

    this.externalsPlugin = new ExternalsPlugin(
      'wp',
      externalsPlugin.bind(this),
    )

    this.emit = this.emit.bind(this)
  }

  apply(compiler: Webpack.Compiler): void {
    this.output.dir = compiler.options.output.path
    this.output.publicPath = compiler.options.output.publicPath

    this.output.file = path.resolve(
      this.output.dir,
      this.output.name,
    )

    this.output.name = path.relative(
      this.output.dir,
      this.output.file,
    )

    this.externalsPlugin.apply(compiler)

    compiler.hooks.emit.tapAsync(
      this.constructor.name,
      this.emit.bind(this),
    )
  }

  public async emit(
    compilation: Webpack.compilation.Compilation,
    callback: () => void,
  ): Promise<void> {
    const externals: WordPressExternals.Hash = await fetchExternals()

    compilation.entrypoints.forEach(entry => {
      entry.chunks.forEach(chunk => {
        this.output.content[entry.name] = Array.from(
          chunk.modulesIterable,
        ).reduce(
          (acc: any, module: any) =>
            externals[module.userRequest]
              ? [...acc, externals[module.userRequest].enqueue]
              : acc,
          [],
        )
      })
    })

    compilation.assets[this.output.name] = new RawSource(
      JSON.stringify(this.output.content),
    )

    callback()
  }
}
