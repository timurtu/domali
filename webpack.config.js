module.exports = {

  entry: {
    test: './test/domali.test.js'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel?cacheDirectory',
        test: /\.js$/,
        include: /(test)/
      }
    ]
  }
}
