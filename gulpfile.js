'use strict';

var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function() {
	var server = new LiveServer('server.js');
	server.start();
})

gulp.task('bundle', function() {
	return browserify({
		entries:'views/main.jsx',
		debug: true,

	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));
})

gulp.task('default',['live-server'], function() {

})