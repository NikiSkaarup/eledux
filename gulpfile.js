var gulp = require('gulp');
var pkg = require('./package.json');
var minify = require('gulp-minify');
var comment = "/*\r\n * Eledux " + pkg.version + "\r\n * MIT License\r\n * Copyright 2016, Niki Skaarup\r\n*/\r\n";
var $ = require('gulp-load-plugins')();

gulp.task('build', function() {
  return gulp.src('src/eledux.js')
    .pipe(minify({
        ext:{
            src: '.js',
            min: '.min.js'
        },
        preserveComments: "some"
    }))
    .pipe($.header(comment))
    .pipe($.size({
        showFiles: true
    }))
    .pipe(gulp.dest('dist'))
});
