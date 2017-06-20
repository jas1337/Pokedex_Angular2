'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    maps= require("gulp-sourcemaps");
var cssGlobbing = require('gulp-css-globbing');


gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['compileSass']);
});

gulp.task("compileSass", function(){
 gulp.src(['src/scss/styles.scss',
 ])
 .pipe(maps.init())
 .pipe(sass())
 .pipe(maps.write('./'))
 .pipe(gulp.dest('src/css'));
});



gulp.task("default", [], function () {

console.log("gulp dziala");
});

