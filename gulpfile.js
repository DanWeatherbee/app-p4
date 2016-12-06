
// References to use and install gulp
// https://css-tricks.com/gulp-for-beginners/

// globals so we can use gulp
var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css');
    cache = require('gulp-cache');
    imagemin = require('gulp-imagemin');
    htmlmin = require('gulp-htmlmin');
    gzip = require('gulp-gzip');

    // documentation on interlaced gifs
    // http://vesta.astro.amu.edu.pl/Library/WWW/Tutorial1/graphics/gif_files.html

gulp.task('images', function(){
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('views-images', function(){
  return gulp.src('src/views/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    // Setting interlaced to true
      interlaced: true
    })))
  .pipe(gulp.dest('dist/views/images'))
  .pipe(gulp.dest('views/dist/images'))
});

gulp.task('css-min', function(){
  return gulp.src('src/css/*.css')
  // Minify CSS
  .pipe(cache(minifyCss({
    })))
  .pipe(gulp.dest('dist/css_minified'))
});

gulp.task('views-css-min', function(){
  return gulp.src('src/views/css/*.css')
  // Minify CSS
  .pipe(cache(minifyCss({
    })))
  .pipe(gulp.dest('dist/views/css_minified'))
});

gulp.task('html-min', function() {
  return gulp.src('src/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/html_minified'));
});

gulp.task('compress', function() {
    return gulp.src('src/html/*.html')
    .pipe(gzip({ skipGrowingFiles : true }))
    .pipe(gulp.dest('dist/html_compressed'));
});

gulp.task('build', [`views-images`, `images`, `css-min`, `html-min`, `views-css-min`, `compress`], function (){
  console.log('Building files, compressing images, minifying css and html.');
});