const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../../webpack/dev')

const PORT = 3001

new WebpackDevServer(webpack(config), {

  publicPath: config.output.publicPath,
  hot: true,
  inline: false,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(PORT, 'localhost', function (error, result) {
  if (error) {
    console.log(error)
  }
  console.log(`Listening at http://localhost:${PORT}`)
})
