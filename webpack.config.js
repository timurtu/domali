module.exports = {

  entry: {
    test: './test/unit/domali.test.js'
  },

  output: {
    filename: 'lib/[name].js'
  },

  module: {
    loaders: [
      {
        loaders: ['babel-loader?cacheDirectory'],
        test: /\.js/,
        include: /(test)/
      }
    ]
  }
}
