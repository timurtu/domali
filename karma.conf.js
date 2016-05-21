module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    frameworks: ['mocha'],

    files: [
      {
        pattern: 'test/unit/*.spec.js',
        watched: true,
        served: true,
        included: true
      }
    ],
    reporters: ['spec', 'coverage']
  })
}
