var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json")
var watchify = require('watchify');
var gutil = require('gulp-util');
var path = require('path');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;

var path = {
    pages: ['src/*.html']
}

gulp.task("copy-html", function() {
    return gulp.src(path.pages)
        .pipe(gulp.dest('dist'))
})

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));



function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"))
}

gulp.task("budu", function() {
    return bundle()
})


gulp.task("default", ["copy-html", "budu"], function() {
        browsersync.init({
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        })
    }),
    watchedBrowserify.on("update", bundle)
watchedBrowserify.on("log", gutil.log)
    // gulp.task("default", function() {
    //     return tsProject.src()
    //         .pipe(tsProject())
    //         .js.pipe(gulp.dest("dist"))
    // })