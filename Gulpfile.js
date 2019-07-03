'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', done => {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
  done();
});

//Watch task
gulp.task('default',  () => {
  gulp.watch('scss/**/*.scss', gulp.series('styles'));
});