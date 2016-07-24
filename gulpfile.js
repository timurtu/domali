const gulp = require('gulp');
const Server = require('karma').Server
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const changed = require('gulp-changed')

const paths = {

  source: 'src/**/*.js',
  output: 'lib',

  unitTestEntry: 'test/unit/src/domali.test.js',
  unitTestOutput: './test',

  appEntry: 'test/app/src/app.js',
  appOutput: './test',

  unitTestSrc: 'test/unit/src/**/*.js',
  appSrc: 'test/app/src/**/*.js',
  notNodeModules: '!**/*node_modules'
}

gulp.task('watch', ['test', 'build-app'], () => {
  gulp.watch([paths.source, paths.unitTestSrc, paths.appSrc], ['test', 'build-app'])
})

gulp.task('test', ['build-unit-tests'], (done) => {
  new Server({
    configFile: __dirname + '/test/unit/karma.conf.js',
    singleRun: true
  }, () => done()).start()
})

gulp.task('build-unit-tests', ['build'], () => {
  return gulp.src(paths.unitTestEntry)
    .pipe(changed(paths.unitTestOutput + '/*'))
    .pipe(webpack(require('./test/unit/webpack.config')))
    .pipe(gulp.dest(paths.unitTestOutput))
})

gulp.task('build-app', () => {
  return gulp.src(paths.appEntry)
    .pipe(changed(paths.appOutput + '/*'))
    .pipe(webpack(require('./test/app/webpack.config.js')))
    .pipe(gulp.dest(paths.appOutput))
})

gulp.task('build', () => {
  return gulp.src(paths.source)
    .pipe(changed(paths.output))
    .pipe(babel())
    .pipe(gulp.dest(paths.output))
})
