module.exports=function () {
	
	$.gulp.task ("img", function() {
		return $.gulp.src('src/img/**/*')
			.pipe($.gp.imagemin([
				$.gp.imagemin.mozjpeg({
					progressive: true
				}),
				$.gp.imagemin.optipng({
					optimizationLevel: 5
				})
			]))
			.pipe($.gulp.dest('build/img'))
	})
}