module.exports = () => ({
  bail: true,
  cache: { type: 'memory' },
  context: '/Volumes/Samsung/Code/roots/bud/examples/html-template',
  entry: { app: { import: [ 'index.js' ] } },
  infrastructureLogging: {
    level: 'none',
    appendOnly: true,
    stream: {
      _readableState: {
        highWaterMark: 16384,
        constructed: true,
        sync: true,
        autoDestroy: true,
        defaultEncoding: 'utf8'
      },
      _eventsCount: 1,
      _writableState: {
        highWaterMark: 16384,
        defaultEncoding: 'utf8',
        sync: true,
        allBuffers: true,
        allNoop: true,
        constructed: true,
        autoDestroy: true
      },
      _type: 'pipe',
      fd: 2,
      _isStdio: true
    }
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.[cm]?(jsx?|tsx?)$/ },
      {
        oneOf: [
          {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /(node_modules|bower_components)/,
            type: 'asset/resource',
            generator: { filename: 'assets/[hash][ext][query]' }
          },
          {
            test: /\.(ttf|otf|eot|woff2?|ico)$/,
            use: [
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/resolve-url-loader/index.js',
                options: {
                  root: '/Volumes/Samsung/Code/roots/bud/examples/html-template/src'
                }
              }
            ],
            exclude: /(node_modules|bower_components)/
          },
          {
            test: /\.svg$/,
            exclude: /(node_modules|bower_components)/,
            type: 'asset/resource',
            generator: { filename: 'assets/[hash][ext][query]' }
          },
          {
            test: /\.(html?)$/,
            use: [
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/html-loader/dist/cjs.js'
              }
            ]
          },
          {
            test: /\.(csv|tsv)$/,
            use: [
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/csv-loader/index.js'
              }
            ]
          },
          {
            test: /\.xml$/,
            use: [
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/xml-loader/index.js'
              }
            ]
          },
          { test: /\.toml$/, type: 'json' },
          { test: /\.(yaml|yml)$/, type: 'json' },
          { test: /\.json5$/, type: 'json' },
          {
            test: /\.css$/,
            use: [
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Volumes/Samsung/Code/roots/bud/node_modules/css-loader/dist/cjs.js',
                options: { importLoaders: 1 }
              }
            ],
            exclude: /(node_modules|bower_components)/
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/
          }
        ]
      }
    ]
  },
  name: 'bud',
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      {
        options: {
          test: /\.css(\?.*)?$/i,
          parallel: true,
          minimizerOptions: {
            preset: [ 'default', { discardComments: { removeAll: true } } ]
          }
        }
      },
      {
        options: {
          test: /\.css(\?.*)?$/i,
          parallel: true,
          minimizerOptions: "<<Circular reference to 'config.optimization.minimizer.[1].options.minimizerOptions'>>"
        }
      }
    ],
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          priority: -10,
          filename: 'vendor/[name].js'
        }
      },
      defaultSizeTypes: [ '...' ]
    }
  },
  output: {
    enabledChunkLoadingTypes: [ '...' ],
    enabledLibraryTypes: [ '...' ],
    enabledWasmLoadingTypes: [ '...' ],
    filename: '[name].js',
    path: '/Volumes/Samsung/Code/roots/bud/examples/html-template/dist'
  },
  plugins: [
    {
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: [ '**/*', '!dll' ],
      outputPath: '/Volumes/Samsung/Code/roots/bud/examples/html-template/dist'
    },
    {
      outputPath: '/Volumes/Samsung/Code/roots/bud/examples/html-template/.budfiles',
      name: 'bud.webpack.config.js',
      depth: 8,
      keepCircularReferences: true
    },
    { ignorePatterns: [ /.?.map$/ ] },
    {
      options: {
        fileName: 'manifest.json',
        removeKeyHash: /([a-f0-9]{16,32}\.?)/gi,
        transformExtensions: /^(gz|map)$/i,
        writeToFileEmit: true
      }
    },
    {
      options: { filename: '[name].css', chunkFilename: '[name].[id].css' },
      runtimeOptions: { linkType: 'text/css' }
    },
    {
      userOptions: {
        template: '/Volumes/Samsung/Code/roots/bud/packages/@roots/bud-support/templates/template.html',
        alwaysWriteToDisk: true,
        inject: true,
        favicon: '/Volumes/Samsung/Code/roots/bud/examples/html-template/src/favicon.ico',
        replace: {
          APP_TITLE: 'Demo',
          APP_DESCRIPTION: 'html templating example'
        }
      },
      version: 5
    },
    {
      name: 'interpolate-html-plugin',
      replacements: { APP_TITLE: 'Demo', APP_DESCRIPTION: 'html templating example' }
    }
  ],
  recordsInputPath: '/Volumes/Samsung/Code/roots/bud/examples/html-template/.budfiles/bud-modules.json',
  recordsOutputPath: '/Volumes/Samsung/Code/roots/bud/examples/html-template/.budfiles/bud-modules.json',
  resolve: {
    extensions: [
      '.wasm',  '.mjs',
      '.js',    '.jsx',
      '.css',   '.json',
      '.json5', '.toml',
      '.xml',   '.csv',
      '.tsv',   '.yml',
      '.yaml',  '.xml'
    ],
    modules: [
      'src',
      'node_modules',
      '/Volumes/Samsung/Code/roots/bud/packages/@roots/bud'
    ]
  }
})