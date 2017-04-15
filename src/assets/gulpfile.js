var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Concat and minify the javascript
gulp.task('build', function(){
  return gulp.src([
        'js/ng/blog.module.js',
        'js/ng/blog.service.js',
        'js/ng/blog.controller.js',
        'js/ng/blog.components.js',
        'js/ng/routes.js'
    ])
    .pipe(concat('blog.js'))
    .pipe(rename('blog.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});


// build minified js. ToDo: Add watcher
gulp.task('default', ['build']);


