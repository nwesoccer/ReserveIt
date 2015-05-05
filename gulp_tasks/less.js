var gulp = require('gulp');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var rev = require('gulp-rev');

gulp.task('debug-less', function () {
    return gulp
        .src('source/less/**/*.less')
        .pipe(less())
        .pipe(rev())
        .pipe(gulp.dest('build/debug/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/debug/css'));
});

gulp.task('release-less', function() {
    return gulp
        .src('source/less/**/*.less')
        .pipe(less())
        .pipe(rev())
        .pipe(minifycss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/release/css'));
});