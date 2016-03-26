var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    cssnano = require('gulp-cssnano');

var pages = [
    "results/results.html",
    "vote/vote.html",
    "voteSetup/voteSetup.html"
];

gulp.task('copy', function () {
    gulp.src(pages, {cwd: 'app/**'})
        .pipe(gulp.dest('dist'));
});


gulp.task('fonts', function () {
    return gulp.src('app/bower_components/todc-bootstrap/dist/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        //.pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('prod', ['clean', 'copy', 'useref', 'fonts']);
