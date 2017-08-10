const configureEnv = require('./gulp-helpers/configure-env');
const gulp = require('gulp');
const lazy = require('lazy-cache')(require);
const lintIfRequired = require('./gulp-helpers/lint-if-required');

const chalk = lazy('chalk');
const http = lazy('http');
const io = lazy('socket.io');
const nodemon = lazy('nodemon');
const run = lazy('run-sequence');

// Gulp plugins
const eslint = lazy('gulp-eslint');
const postcss = lazy('gulp-postcss');
const reporter = lazy('postcss-reporter');
const sass = lazy('gulp-sass');
const sassglob = lazy('gulp-sass-glob');
const stylelint = lazy('stylelint');
const imagemin = lazy('gulp-imagemin');
const gif = lazy('gulp-if');
const sourcemaps = lazy('gulp-sourcemaps');

// Gulp helpers
const closeOnExit = lazy('./gulp-helpers/close-on-exit');
const handleError = lazy('./gulp-helpers/handle-error');
const log = lazy('./gulp-helpers/log');
const waitForServer = lazy('./gulp-helpers/wait-for-server');
const watch = lazy('./gulp-helpers/watch');
const webpack = lazy('./gulp-helpers/webpack');

/***********************************
  Manage Environment
***********************************/

// modify process.env
process.env = configureEnv(process.env);

/***********************************
  Task Variables
***********************************/

const isUniversal = (process.env.UNIVERSAL_REACT === 'true');
const isProduction = (process.env.NODE_ENV === 'production');
const testTasks = lazy('./__tests__/test-gulp-tasks.js');

let socket = null;
let socketServer = null;

// import testing tasks
if (process.env.NODE_ENV === 'test') {
  gulp.tasks = testTasks().tasks;
}

/******************************
  Build Tasks
******************************/

/**
 * Styles task
 */
gulp.task('styles', lintIfRequired('styles'), () => {
  return gulp.src('./src/styles/index.scss')
    .pipe(sourcemaps().init())
    .pipe(sassglob()())
    .on('error', handleError())
    .pipe(sass()())
    .on('error', handleError())
    .pipe(postcss()())
    .on('error', handleError())
    .pipe(sourcemaps().write())
    .pipe(gulp.dest('./dist/public'));
});

/**
 * Scripts task
 */
gulp.task('scripts', lintIfRequired('scripts'), (done) => {
  webpack().run(done);
});

gulp.task('sw-toolbox', () => {
  return gulp.src('./node_modules/sw-toolbox/sw-toolbox.js')
    .pipe(gulp.dest('./dist/public'));
});

/**
 * Images Task
 */
gulp.task('images', ['styles'], () => {
  return gulp.src('./src/img/**/*.{jpg,gif,png,svg,ico}')
    .pipe(gif()(isProduction, imagemin()()))
    .on('error', handleError())
    .pipe(gulp.dest('./dist/public/img'));
});

/**
 * Fonts Task
 */
gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/public/fonts'));
});

/**
 * Assets Task
 */
gulp.task('assets', () => {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/public'));
});

/**
 * Build task
 */
gulp.task('build', (done) => {
  run()(['sw-toolbox', 'scripts', 'styles', 'images', 'fonts', 'assets'], done);
});

/***********************************
  Linting Tasks
***********************************/

/**
 * Lint Styles task
 */
gulp.task('lint:styles', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(postcss()([stylelint()(), reporter()()]))
    .on('error', handleError());
});

/**
 * Lint Scripts task
 */
gulp.task('lint:scripts', () => {
  return gulp.src('./src/**/*.js')
    .pipe(eslint()())
    .on('error', handleError())
    .pipe(eslint().format());
});

/***********************************
  Nodemon Tasks
***********************************/

/**
 * Start Server task
 */
gulp.task('start-server', () => {
  log()(chalk().magenta('Starting server'));
  nodemon()('--watch dist/server/server.js --ext js dist/server').on('error', handleError());
  return waitForServer()('Server online');
});

/**
 * Restart Server task
 */
gulp.task('restart-server', () => {
  log()(chalk().magenta('Restarting server'));
  nodemon().emit('restart');
  return waitForServer()('Server back online');
});

/***********************************
  Socket IO Tasks
***********************************/

/**
 * Start Socket task
 */
gulp.task('start-socket', () => {
  if (!socketServer) {
    log()(chalk().magenta('Starting socket'));
    socketServer = http().createServer();
    socket = io()(socketServer, { origins: '*:*' });
    socketServer.listen(4444);
    closeOnExit()(socketServer, 'close', 'Closing socket server');
    closeOnExit()(socket, 'close', 'Closing socket');
  }
});

/**
 * Reload Pages task
 */
gulp.task('reload-pages', () => {
  if (socket) {
    log()(chalk().magenta('Reloading pages'));
    socket.emit('reload-page');
  }
});

/**
 * Reload Styles task
 */
gulp.task('reload-styles', () => {
  if (socket) {
    log()(chalk().magenta('Reloading styles'));
    socket.emit('reload-styles');
  }
});

/***********************************
  Other Tasks
***********************************/

/**
 * Watch task
 */
gulp.task('watch', () => {
  // watch scss files & refresh stylesheets for changes
  watch()('./src/**/*.scss', ['styles', 'reload-styles']);
  // watch image files and add to build
  watch()('./src/img/**/*', ['images', 'reload-pages']);
  if (isUniversal) {
    // watch all scripts & restart server for changes
    watch()('./src/**/*.js', ['scripts', 'restart-server', 'reload-pages']);
  } else {
    webpack().watch(() => run()(['reload-pages']));
  }
});

/**
 * Start task
 */
gulp.task('start', ['build'], () => {
  run()(['start-server', 'start-socket'], 'watch');
});
