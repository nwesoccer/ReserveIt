var gulp         = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

gulp.task('debug', function(callback) {
    runSequence('debug-clean', ['debug-less', 'debug-javascript', 'debug-bower'], 'debug-html', callback);
});

gulp.task('debug-clean', function() {
    return gulp
        .src('build/debug')
        .pipe(clean());
});