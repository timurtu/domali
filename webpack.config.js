const path = require('path')

module.exports = {

  context: path.resolve(__dirname, 'src'),

  entry: {
    filename: './index'
  },

  output: {
    filename: 'lib/domali.js',
    sourceMapFilename: 'lib/domali.js.map'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        include: /src/,
        loader: 'babel-loader'
      }
    ]
  }
}
