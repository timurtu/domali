module.exports = {

  entry: {
    test: './test/app/src/app.js'
  },

  output: {
    filename: 'test/app/dist/bundle.js'
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
