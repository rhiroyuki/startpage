let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(cleanCSS({ level: 2 }))
  .pipe(gulp.dest('./css'));
});
