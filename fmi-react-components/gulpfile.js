const gulp = require('gulp');
const lazy = require('lazy-cache')(require);

const run = lazy('run-sequence');
const sourcemaps = lazy('gulp-sourcemaps');
const rename = lazy('gulp-rename');
const sass = lazy('gulp-sass');
const sassglob = lazy('gulp-sass-glob');
const postcss = lazy('gulp-postcss');

const handleError = lazy('../gulp-helpers/handle-error');

const root = './src';
const scssRoot = `${root}/scss`;
const styleVendorAppPath = '../src/styles/vendor';

gulp.task('style:base-theme', () => (
  gulp.src(`${scssRoot}/application.scss`)
   .pipe(sourcemaps().init())
    .pipe(sassglob()())
    .on('error', handleError())
    .pipe(sass()())
    .on('error', handleError())
    .pipe(postcss()())
    .on('error', handleError())
    .pipe(sourcemaps().write())
    .pipe(rename()({
      basename: 'standard-theme',
    }))
    .pipe(gulp.dest(styleVendorAppPath))
));

gulp.task('style:dark-theme', () => (
  gulp.src(`${scssRoot}/themes/dark.scss`)
   .pipe(sourcemaps().init())
    .pipe(sassglob()())
    .on('error', handleError())
    .pipe(sass()())
    .on('error', handleError())
    .pipe(postcss()())
    .on('error', handleError())
    .pipe(sourcemaps().write())
    .pipe(rename()({
      basename: 'dark-theme',
    }))
    .pipe(gulp.dest(styleVendorAppPath))
));

gulp.task('watch', () => {
  gulp.watch(`${scssRoot}/**/*.scss`, ['style:base-theme', 'style:dark-theme']);
});

gulp.task('start', () => {
  run()(['style:base-theme', 'style:dark-theme'], 'watch');
});
