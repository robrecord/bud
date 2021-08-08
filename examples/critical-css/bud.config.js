// @ts-check

/**
 * @function config
 * @param {import('@roots/bud').Bud} app
 */
module.exports = app =>
  app
    .use([
      require('@roots/bud-postcss'),
      require('@roots/bud-tailwindcss'),
      require('@roots/bud-criticalcss'),
    ])
    .template({
      template: 'public/index.html',
    })
    .critical({
      replace: '%INLINE_CSS%',
      criticalOptions: {
        html: 'public/index.html',
      },
    })
    .hash()
    .entry('app', ['app.css'])
    .entry('app2', ['app2.css'])
    .splitChunks()
    .minimize()
