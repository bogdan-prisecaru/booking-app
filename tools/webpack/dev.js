const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: [
      path.join(process.cwd(), 'src/app'),
      path.join(process.cwd(), 'dist')
    ],
    hot: true,
    port: 3000
  },
  module: {}
}
