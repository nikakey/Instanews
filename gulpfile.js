var gulp = require('gulp'), //load gulp first!
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');

//gulp lint task

gulp.task('lint', function(){
    return gulp.src(['./js/*.js'])
        .pipe(eslint()) 
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())

});

//Script task to minify, rename and put in build folder

gulp.task('scripts', gulp.series('lint', function(){
    return gulp.src('./js/*.js')  
        .pipe(uglify()) //call uglify function on files
        .pipe(rename({ extname: '.min.js' })) //rename the ugly file
        .pipe(gulp.dest('./build/js'))
}));

//gulp watch task

gulp.task('watch', function() {
    gulp.watch('js/*.js', gulp.parallel('scripts'));
});

//gulp browser sync task

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch('./build/js/*.js').on('change', browserSync.reload);



// Default task method contain an array of task names, usually it is in the bottom

gulp.task('default', gulp.parallel('watch', 'browser-sync'));