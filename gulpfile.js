const gulp = require('gulp');
const Server = require('karma').Server
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const changed = require('gulp-changed')

const paths = {
  allJS: 'src/**/*.js',
  output: 'lib',
  testEntry: 'src/test/domali.test.js',
  allTests: 'test/**/*.js',
  testOutput: './'
}

gulp.task('watch', ['test'], () => {
  gulp.watch([paths.allJS, paths.allTests], ['test'])
})

gulp.task('test', ['build-tests'], (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done()
  }).start()
})

gulp.task('build-tests', ['build'], () => {
  return gulp.src(paths.testEntry)
    .pipe(changed(paths.output))
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.testOutput))
})

gulp.task('build', () => {
  return gulp.src(paths.allJS)
    .pipe(changed(paths.output))
    .pipe(babel())
    .pipe(gulp.dest(paths.output))
})
