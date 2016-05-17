var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var batch = require('gulp-batch');

gulp.task('dist', function() {
  return gulp.src('./app/**/*.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss', ['styles']);
});