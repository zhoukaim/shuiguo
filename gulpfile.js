var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
var server = require("gulp-webserver");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var minImg = require("gulp-imagemin");
var minHtml = require("gulp-htmlmin");


//编译scss
gulp.task("sass", function () {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
})

//监听scss
gulp.task("watch", function () {
    gulp.watch("./src/scss/*.scss", gulp.series("sass"));
})

//启服务
gulp.task("server",function(){
    gulp.src("./src/")
    .pipe(server({
        port:3001,
        open:true,
        livereload:true
    }))
})

gulp.task("dev",gulp.series("sass","server","watch"));
//Gulp合并文件，压缩js
gulp.task("uglify", function () {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: "es2015"
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./build/js/"))
})

//合并js
gulp.task("concat", function () {
    return gulp.src("./src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./src/js/"))
})


//打包环境
gulp.task("copycss", function () {
    return gulp.src("./src/css/*.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("./build/css"))
})

//压缩html
gulp.task("html", function () {
    return gulp.src("./src/*.html")
        .pipe(minHtml({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./build"))
})

//压缩img
gulp.task("img", function () {
    return gulp.src("./src/img/*.{png,jpg,gif}")
        .pipe(minImg({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest("./build/img"))
})

gulp.task("build", gulp.series("copycss","uglify","img"))