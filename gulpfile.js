//用到的各个插件
var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var rename = require("gulp-rename");
//压缩html
gulp.task('minify-html', () => {
    return gulp.src('./hello.html')
        .pipe(htmlclean())
		.pipe(rename("./index.html"))
        .pipe(htmlmin({
            removeComments: true, //清除html注释
            collapseWhitespace: true, //压缩html
            collapseBooleanAttributes: true,
            //省略布尔属性的值，例如：<input checked="true"/> ==> <input />
            removeEmptyAttributes: true,
            //删除所有空格作属性值，例如：<input id="" /> ==> <input />
            removeScriptTypeAttributes: true,
            //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,
            //删除<style>和<link>的 type="text/css"
            minifyJS: true, //压缩页面 JS
            minifyCSS: true, //压缩页面 CSS
            minifyURLs: true  //压缩页面URL
        }))
        .pipe(gulp.dest('./'))
});
// 运行gulp命令时依次执行以下任务
gulp.task('default', gulp.parallel(
  'minify-html'
))