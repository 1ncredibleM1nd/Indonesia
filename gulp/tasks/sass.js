module.exports=function () {
	
	$.gulp.task ('sass', function () {
		return $.gulp.src ('src/sass/style.sass')
			.pipe ($.gp.sourcemaps.init ())
			.pipe ($.gp.sass ({
				'include css':true
			}))
			.pipe ($.gp.autoprefixer (
				['last 10 versions']
			))
			.on ('error', $.gp.notify.onError ({
				message: 'Error: <%=error.message %>',
				title: "style"
			}))
			.pipe ($.gp.csso ())
			.pipe ($.gp.sourcemaps.write ())
			.pipe ($.gulp.dest ('build/css'))
			.pipe ($.browserSync.reload ({
				stream: true
			}));
	});
};