/**
 * Webpack resolvers.
 *
 * @param {object}
 */
const webpackResolve = bud => ({
  bud,
  output: {},
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    modules: [bud.project('node_modules')],
    ...(bud.options.alias
      ? {alias: bud.options.alias}
      : []),
  },
  make: function () {
    bud.hooks.call('pre_resolve', this)
    this.output.resolve = this.resolve
    bud.hooks.call('post_resolve', this.output)

    return this.output
  },
})

export {webpackResolve}
