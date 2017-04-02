const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglifyjs')

gulp.task('default', gulp.series(
  compress,
  bundle
))

function compress() {
  return gulp.src('www/build/bundle.js')
    .pipe(uglify('bundle.js'))
    .pipe(gulp.dest('www/build'))
}

function bundle() {
  return gulp.src([
    'www/build/polyfills.js',
    'www/build/main.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('www/build'))
}
