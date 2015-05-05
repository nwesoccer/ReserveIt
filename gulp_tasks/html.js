var gulp         = require('gulp');
var revCollector = require('gulp-rev-collector');

gulp.task('debug-html', function () {
    return gulp
        .src(['build/debug/**/*.json', 'source/*.html'])
        .pipe(revCollector(
        {
            revSuffix: '-[0-9a-f]{8}'
        }))
        .pipe( gulp.dest('build/debug') );
});

gulp.task('release-html', function () {
    return gulp
        .src(['build/release/**/*.json', 'source/*.html'])
        .pipe(revCollector(
        {
            revSuffix: '-[0-9a-f]{8}.min'
        }))
        .pipe( gulp.dest('build/release') );
});



var whatever = require('gulp-whatever');

gulp.task('release-whatever', function () {
    return gulp
        .src(['source/*.html'])
        .pipe(whatever('build/release'))
        .pipe( gulp.dest('build/release') );
});