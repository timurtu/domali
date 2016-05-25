/**
 * Created by timur on 5/24/16.
 */

module.exports = {
  entry: './test.js',
  output: {
    path: './',
    filename: 'test.bundle.js'
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
