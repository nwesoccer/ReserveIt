var gulp         = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

gulp.task('release', function(callback) {
    runSequence('release-clean', ['release-less', 'release-javascript', 'release-bower'], 'release-html', callback); //, 'release-jsx'], 'rev', callback);
});

gulp.task('release-clean', function() {
    return gulp
        .src('build/release')
        .pipe(clean());
});