var gulp = require('gulp');
var notify = require("gulp-notify");
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['sass-watch'])

gulp.task('sass-watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(sass({ 
      errLogToConsole: true
    }))
    .pipe(gulp.dest('public/css/'));
});
