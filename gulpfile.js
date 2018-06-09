var gulp = require('gulp'),
    html = require('gulp-html'),    
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('html', function(){
  return gulp.src('src/html/*.html')
    .pipe(html())
    .pipe(gulp.dest('dist/'))
});

gulp.task('scss', function(){
  return gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function(){
  return gulp.src('src/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch('src/html/**/*.ext', ['liquid']);
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/javascript/**/*.js', ['js']);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

gulp.task('default', [ 'html', 'liquid', 'sass', 'js' ]);
