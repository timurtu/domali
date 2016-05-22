const gulp = require('gulp');
const babel = require('gulp-babel');
const jasmine = require('gulp-jasmine');

const paths = {
  src: "src/**/*.js",
  dest: "lib",
  testsSrc: 'test/*.js',
  testsDist: 'test/dist'
}

gulp.task('watch', ['build', 'test'], () => {
  gulp.watch([paths.src, paths.testsSrc], ['build', 'test'])
})

gulp.task('build', () => {
  return gulp.src(paths.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dest))
})

gulp.task('test', () =>
  gulp.src(paths.testsSrc)
  // gulp-jasmine works on filepaths so you can't have any plugins before it
  .pipe(jasmine())
)
