var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('watch', function() {
  watch('/Users/evan/Dropbox/code/p-buttercupPortfolioClean/src/html', function() {
    gulp.start('html');
  });
-------- 


gulp.task('styles', function() {
  return watch('/Users/evan/Dropbox/code/p-buttercupPortfolioClean/src/html', { ignoreInitial: false }).pipe(gulp.dest('build')) 
} );




  ::::::
  ::::::
  watch('./src/styles/**/*.css', function() {
    gulp.start('styles');
  });
  watch('./src/images/**/*.png', function() {
    gulp.start('images');
  })
});

/**TO DO:  **gulp.task('cssInject', ['styles'], function(){
	return gulp.src('ADD FROM 6:17');
} )*************/

