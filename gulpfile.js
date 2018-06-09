var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

 
gulp.task('images', function(){
 return gulp.src('./src/images/*')
  .pipe(gulp.dest('./dist/images/'))
  .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', function(){
 return gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('sass', function () {
 return gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(sourcemaps.write('./maps'))  
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('default', ['browserSync', 'images'], function(){
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});