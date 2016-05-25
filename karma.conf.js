module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      {
        pattern: 'test/test.js',
        watched: true,
        served: true,
        included: true
      }
    ],

    reporters: ['spec', 'coverage']
  })
}
