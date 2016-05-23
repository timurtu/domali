module.exports = {

  entry: {
    test: './lib/test/domali.test.js'
  },

  output: {
    filename: 'lib/[name].js'
  }

  // module: {
  //   loaders: [
  //     {
  //       loaders: ['babel-loader?cacheDirectory'],
  //       test: /\.js/,
  //       include: /(test)/
  //     }
  //   ]
  // }
}
