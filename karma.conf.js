module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai'],

    files: [
      {
        pattern: 'lib/test.js',
        watched: true,
        served: true,
        included: true
      },
      {
        pattern: 'lib/**/*.js',
        watched: true,
        served: false,
        included: false
      }
    ],

    reporters: ['spec', 'coverage']
  })
}
