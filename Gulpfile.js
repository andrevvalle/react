var gulp		= require('gulp'),
	connect		= require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		port: 8000,
		root: './',
		livereload: true
	});
});

gulp.task('js', function(){
	return gulp.src('./assets/js/*.js')
		.pipe(connect.reload());
});

gulp.task('html', function(){
	return gulp.src('./**/*.html')
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('./assets/js/*.js', ['js']);
	gulp.watch('./**/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);