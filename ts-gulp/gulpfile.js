var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json")
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourceMaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var gutil = require('gulp-util');
var path = require('path');
var browsersync = require('browser-sync').create();
var reload = browsersync.reload;
//貌似watchify没什么暖用，可以提高打包速度，然并暖，

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

gulp.task("default", ["copy-html"], function() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['src/main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourceMaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest("dist"))
})
watchedBrowserify.on("update", bundle)
    // gulp.task("default", function() {
    //     return tsProject.src()
    //         .pipe(tsProject())
    //         .js.pipe(gulp.dest("dist"))
    // })