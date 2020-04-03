module.exports= function(){
$.gulp.task('svg', ()=>{
	return $.gulp.src('./src/img/svg/*.svg')
		.pipe($.gp.svgmin({
		js2svg:{
			pretty:true
		}
	}))
		.pipe($.gp.cheerio({
			run:function($){
			$('[fill]').remove('fill');
			$('[stroke]').remove('stroke');
			$('[style]').remove('style');
			},
			parserOptions:{xmlNode:true}
		}))
		.pipe($.gp.replace('&gt;','>'))
		.pipe($.gp.svgSprite({
			mode:{
				symbol:{
					sprite:'sprite.svg'
				}
			}
		}))
		.pipe($.gulp.dest('./build/img/svg/'));
	
})
};