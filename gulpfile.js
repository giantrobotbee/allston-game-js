var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minifyify = require('minifyify');

gulp.task('browserify', function() {
  var basePath = 'assets/';
  var bundleStream = new browserify('./assets/js/main.js').bundle({debug: true});

  bundleStream
    .pipe(minifyify())
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['browserify'], function() {
  gulp.watch('assets/js/**/*.js', ['browserify']);
});
