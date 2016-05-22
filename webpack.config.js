module.exports = {

  entry: {
    domali: './src/domali',
    test: './test/unit/index.test'
  },

  output: {
    filename: 'lib/[name].js',
    sourceMapFilename: 'lib/[name].js.map'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        include: /(src|test)/,
        loader: 'babel-loader?cacheDirectory'
      }
    ]
  }
}
