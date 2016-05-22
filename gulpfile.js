const gulp = require('gulp');
const Server = require('karma').Server
const webpack = require('gulp-webpack')

const paths = {
  allJS: ['src/**/*.js', 'test/**/*.js'],
  entry: 'src/domali.js',
  output: './',
  testEntry: 'test/index.test.js'
}

gulp.task('watch', ['test'], () => {
  gulp.watch(paths.allJS, ['test'])
})

gulp.task('test', ['build'], (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done()
  }).start()
})

gulp.task('build', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output))
})
