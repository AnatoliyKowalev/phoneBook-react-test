var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var reload       = browserSync.reload;
var rename       = require('gulp-rename');
var cssmin       = require('gulp-minify-css');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
         .pipe(sass({
            sourceMap: false,
            errLogToConsole: true,
            includePaths: ['node_modules']
        }))
        .pipe(cssmin())
        .pipe(postcss(
            [autoprefixer({
                remove:false
                })
            ]
        ))
        .pipe(gulp.dest("./src/"))
        .pipe(browserSync.stream())
});

// Static server

gulp.task('server', function() {

    browserSync.init({
        server: {
            baseDir: "./../react-phonebook"
        }
    });
    gulp.watch("./src/scss/*.scss").on("change", gulp.series('sass'));
});









