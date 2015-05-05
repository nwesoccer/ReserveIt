var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');
var rev = require('gulp-rev');

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');

gulp.task('debug-bower', function() {
    return gulp
        .src(mainBowerFiles({ checkExistence: true }))

        .pipe(jsFilter)
        .pipe(rev())
        .pipe(gulp.dest('build/debug/vendor/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/debug/vendor/js'))

        .pipe(jsFilter.restore())

        .pipe(cssFilter)
        .pipe(rev())
        .pipe(gulp.dest('build/debug/vendor/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/debug/vendor/css'));
});

gulp.task('release-bower', function() {
    return gulp
        .src(mainBowerFiles({ checkExistence: true }))

        .pipe(jsFilter)
        .pipe(rev())
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/vendor/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/release/vendor/js'))

        .pipe(jsFilter.restore())

        .pipe(cssFilter)
        .pipe(rev())
        .pipe(minifycss())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest('build/release/vendor/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/release/vendor/css'));
});