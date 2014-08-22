var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var exec = require('gulp-exec');
var livereload = require('gulp-livereload');

gulp.task('dev', function(){
  // Start a server
  connect.server({
    root: '_site',
    port: 3000,
    livereload: true
  });

  console.log('Server running at http://localhost:3000/');

  watch({
    glob: ['public/**', '_posts/**']
  })
    .pipe(exec('jekyll build'))
    .pipe(connect.reload());
});