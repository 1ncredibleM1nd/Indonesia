module.exports=function () {
	
	$.gulp.task ('watch', function () {
		$.gulp.watch ('src/pug/**/*.pug', $.gulp.series ('pug'));
		$.gulp.watch ('src/**/*.sass', $.gulp.series ('sass'));
		$.gulp.watch ('src/js/index.js', $.gulp.series ('scripts'));
		$.gulp.watch ('src/img/**.*', $.gulp.series ('img'));
	});

};