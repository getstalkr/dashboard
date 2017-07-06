'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function makeWebpackConfig (options) {
  let entry;
  let plugins;
  let devtool;

  if (options.prod) {
    entry = [
      path.resolve(__dirname, '../src/index.js')
    ]

    plugins = [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ]
  } else {
    devtool = 'cheap-eval-source-map'

    entry = [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/index.js')
    ]

    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      })
    ]
  }

  return {
    devtool,
    entry,
    output: {
      path: path.resolve(__dirname, '../', 'build'),
      filename: 'js/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: path.join(__dirname, '../', '/node_modules/')
        }, {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      ]
    },
    plugins,
    postcss() {
      return [
        require('postcss-import')({
          onImport: files => {
            files.forEach(this.addDependency)
          }
        }),
        require('postcss-simple-vars')(),
        require('postcss-focus')(),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'IE > 8']
        }),
        require('postcss-reporter')({
          clearMessages: true
        })
      ]
    },
    target: 'web',
    stats: false,
    progress: true
  }
}

module.exports = makeWebpackConfig
