var gulp = require('gulp');
var useref = require('gulp-useref');
var del = require('del');

var pages = [
    "results/results.html",
    "vote/vote.html",
    "voteSetup/voteSetup.html"
];

gulp.task('copy', function () {
    gulp.src(pages, {cwd: 'app/**'})
        .pipe(gulp.dest('dist'));
});

gulp.task('hello', function () {
    console.log('Hello1')
});

gulp.task('fonts', function () {
    return gulp.src('app/bower_components/todc-bootstrap/dist/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('prod', ['clean', 'copy', 'useref' ,'fonts']);
