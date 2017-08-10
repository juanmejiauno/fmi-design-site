const { argv } = require('yargs');
const gulp = require('gulp');
const watch = require('../gulp-helpers/watch');

const {
  runMochaTests,
  exitTests,
  runAllTests,
} = require('./lib/gulp-helpers.js');

if (argv.debug) {
  process.env.DEBUG = 'info,warn,error,server';
}

gulp.task('acceptance-test', ['build'], () => {
  return runMochaTests('acceptance');
});

gulp.task('unit-test', () => {
  return runMochaTests('unit');
});

gulp.task('test', (done) => {
  if (argv.watch) {
    watch(['./src/**/*.{js,jsx,scss}', './__tests__/**/*.js'], runAllTests);
  } else {
    runAllTests()
      .then(() => {
        done();
        exitTests();
      });
  }
});

module.exports = gulp;
