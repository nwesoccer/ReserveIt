var gulp = require('gulp');

gulp.task('default', function() {
    console.log('default task')
});

gulp.task('watch', function() {
    gulp.watch('source/**/*', ['debug']);
});