var gulp = require('gulp');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rev = require('gulp-rev');

gulp.task('debug-javascript', function () {
    return gulp
        .src('source/js/**/*.js')
        .pipe(react({}))
        .pipe(rev())
        .pipe(gulp.dest('build/debug/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/debug/js'));
});

gulp.task('release-javascript', function() {
    return gulp
        .src('source/js/**/*.js')
        .pipe(react({}))
        .pipe(rev())
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/release/js'));
});