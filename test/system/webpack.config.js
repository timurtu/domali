/**
 * Created by timur on 5/24/16.
 */

module.exports = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'bundle.js'
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
