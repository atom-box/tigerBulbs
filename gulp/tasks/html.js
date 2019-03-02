let gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('./src/html/**/*.html').pipe(gulp.dest('./build/html/'));
});