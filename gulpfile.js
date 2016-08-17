const gulp = require('gulp')
const babel = require('gulp-babel')
const Promise = require('bluebird')
const rimrafAsync = Promise.promisify(require('rimraf'))
const eslint = require('gulp-eslint')


const paths = {
  src: 'src/**/*.js',
  dist: 'lib',
  build_src: 'gulpfile.js'
}

gulp.task('watch', ['build'], () => gulp.watch(paths.src, ['build']))

gulp.task('build', ['lint'], () =>
  gulp.src(paths.src)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist))
)

gulp.task('lint', ['clean'], () =>
  gulp.src([paths.src, paths.build_src])
    .pipe(eslint())
    .pipe(eslint.format())
)

gulp.task('clean', () => rimrafAsync(paths.dist))
