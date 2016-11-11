var gulp = require('gulp');
var bs = require('browser-sync').create();//浏览器刷新
var bsReload = bs.reload;
gulp.task('copy-easyui', function () {
    return gulp.src(['./bower_components/easyui/jquery-easyui-1.5/*'])
        .pipe(gulp.dest('lib/easyui'));
});
gulp.task('serve', ()=> {
    bs.init({
        server: './',
        startPath:'index.html'
    });

    gulp.watch("index.html").on('change', bsReload);
    gulp.watch("js/**/*.js").on('change', bsReload);
});

gulp.task('default',['serve']);
