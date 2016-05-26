module.exports = {

  entry: {
    test: './test/unit/src/domali.test.js'
  },

  output: {
    filename: 'unit/dist/[name].js'
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
