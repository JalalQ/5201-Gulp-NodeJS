//Written by Jalaluddin Qureshi, as part http5201, lab9. Winter 2021, Humber College, Toronto, Canada.

//modules necessary for this gulpfile
var gulp = require('gulp');
var minifyCss = require('gulp-clean-css'); //to minify a css file
var concatCss = require('gulp-concat-css'); //to concatenate multiple css files
var imageminify = require('gulp-imagemin'); //to compress the size of image(s).

//to combine the css files first, and then minify the combined css file.
gulp.task('combineMinifyCss', function() {
    
    var combMinCssFile = gulp.src('dev/css/*.css')
						.pipe(concatCss('stylesheet.css'))
						.pipe(minifyCss())
						.pipe(gulp.dest('production/css'));
						
	return combMinCssFile;
});

//minifies images in the dev/images folder.
gulp.task('minifyImages', function() {
	
    gulp.src('dev/images/*')
	.pipe(imageminify())
	.pipe(gulp.dest('production/images'));
	
});


//Listeners. Type gulp watch (wait for the ||Starting 'watch'...|| display), 
//and then make any changes in the css or images folder,
//the changes would be reflected in the css/ images folders of the production.
 gulp.task('watch', function() {
	
    gulp.watch('dev/css/*.css', gulp.series('combineMinifyCss'));
	gulp.watch('dev/images/*', gulp.series('minifyImages'));
	
});