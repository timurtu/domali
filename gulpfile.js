const gulp = require('gulp')
const babel = require('gulp-babel')
const Server = require('karma').Server
const webpack = require('webpack-stream')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))
const eslint = require('gulp-eslint')


const paths = {
  
  src: 'src/**/*.js',
  dist: 'lib',
  build_src: 'gulpfile.js',
  
  test_entry: 'test/domali.test.js',
  test_src: 'test/*.test.js',
  test_dist: 'test/dist',
  webpack_conf: __dirname + '/webpack.conf.js'
}

gulp.task('watch', ['test'], () => {
  gulp.watch([paths.src, paths.test_src], ['test'])
})

gulp.task('test', ['build-tests'], (done) =>
  new Server({
    configFile: paths.karma_conf,
    singleRun: true
  }, () => done()).start()
)

gulp.task('build-tests', ['build'], () =>
  gulp.src(paths.test_entry)
    .pipe(webpack(paths.webpack_conf))
    .pipe(gulp.dest(paths.test_dist))
)

gulp.task('build', ['lint'], () =>
  gulp.src(paths.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist))
)

gulp.task('lint', ['clean'], () =>
  gulp.src([paths.src, paths.build_src])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task('clean', () => Promise.join(rimrafAsync(paths.dist), rimrafAsync(paths.test_dist)))
