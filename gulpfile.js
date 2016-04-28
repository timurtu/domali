const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
  src: "./src/**/*.js"
  dest: "./lib"
}

gulp.task('build', () => {
  return gulp.src(paths.src)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dest));
})
