let gulp = require('gulp');

gulp.task('images', function() {
  return gulp.src('./src/images/**/*.png').pipe(gulp.dest('./build/images/'));
});