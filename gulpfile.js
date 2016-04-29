'use strict';

var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function() {
	var server = new LiveServer('app.js');
	server.start();
})

gulp.task('default',['live-server'], function() {

})