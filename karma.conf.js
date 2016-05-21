module.exports = function (config) {

  config.set({

    browsers: ['Chrome'],

    frameworks: []

      files: [
      {
        pattern: 'test/unit/*.spec.js',
        watched: true,
        served: true,
        included: true
      }
    ]

  })
}
