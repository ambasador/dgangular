var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(requirejsOptimize(function(file) {
            return {
                name: 'js/scripts/*',
                optimize: 'none',
                useStrict: true,
                baseUrl: 'path/to/base',
                include: 'subdir/' + file.relative
            };
        }))
        .pipe(gulp.dest('dist'));
});