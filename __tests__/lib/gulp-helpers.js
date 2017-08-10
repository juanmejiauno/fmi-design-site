const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const mocha = require('gulp-spawn-mocha');
const runSequence = require('run-sequence');

const { argv } = require('yargs');
const { red, bgYellow, green, black, bgRed } = require('chalk');

let exitCodes = [];

/**
 * runs all gulp test tasks in sequence
 * returns promise that resolves when tests are complete
 *
 * @public
 * @returns {promise}
 */
function runAllTests() {
  const testTypes = getTestTypes();

  return new Promise((resolve) => {
    exitCodes = [];

    runSequence(...testTypes, () => {
      reportExitCodes();
      resolve();
    });
  });
}

/**
 * gets the names of gulp tasks to run for testing
 * defaults to unit-test and acceptance-test
 *
 * @public
 * @returns {array} names of gulp tasks to run
 */
function getTestTypes() {
  const testDefaults = ['unit-test', 'acceptance-test'];
  const { unit, acceptance } = argv;
  const testTypes = [];

  if (typeof unit === 'undefined' && typeof acceptance === 'undefined') {
    return testDefaults;
  }

  if (acceptance) {
    testTypes.push('acceptance-test');
  }

  if (unit) {
    testTypes.push('unit-test');
  }

  return testTypes;
}

/**
 * gets globs representing the files we want to run in our tests
 * used to isolate tests to components
 *
 * @public
 * @param {string} testType comma-separated names of components to test
 * @returns {array} globs or strings of file names to test
 */
function getFilesToTest(testType) {
  const defaultFiles = [`./src/**/${testType}.js`, `./src/**/${testType}/*.js`, `./__tests__/${testType}/**/*.js`];
  const { components } = argv;

  if (typeof components === 'undefined') {
    return defaultFiles;
  }

  const componentFiles = components.split(',').map(dir => path.resolve('./src/components/', dir, `__tests__/${testType}.js`));
  const routeFiles = components.split(',').map(dir => path.resolve('./src/routes/', dir, `__tests__/${testType}.js`));
  const libFiles = components.split(',').map(dir => path.resolve(`./src/lib/__tests__/${testType}/${dir}.js`));

  return [].concat(componentFiles).concat(routeFiles).concat(libFiles);
}

function errorsDidOccur() {
  return exitCodes.length && exitCodes.includes(1);
}

function exitTests() {
  const code = argv.ci && errorsDidOccur() ? 1 : 0;
  process.exit(code);
}

function reportExitCodes() {
  if (errorsDidOccur()) {
    gutil.log(bgRed('tests did not pass. '), black(bgYellow(':(')));
  } else {
    gutil.log(green('all tests pass! '), black(bgYellow(':D')));
  }
}

function handleMochaError() {
  exitCodes.push(1);
  this.emit('end');
}

function handleTestFailure(err, type = '') {
  exitCodes.push(1);
  gutil.log(red(err));
  gutil.log(bgRed(`${type} tests failed...`));
}

function runMochaTests(type) {
  const files = getFilesToTest(type);
  files.push(`./__tests__/${type}/mocha-entrypoint.js`);

  const defaultTimeout = argv.debug ? 30000 : 10000;

  const mochaConfig = {
    debugNightmare: argv.debug,
    slow: 1200,
    r: `./__tests__/${type}/.setup.js`,
    timeout: defaultTimeout,
  };

  return gulp.src(files, { read: false })
    .pipe(babel())
    .pipe(mocha(mochaConfig).on('error', handleMochaError))
    .on('error', err => handleTestFailure(err, type));
}

module.exports = {
  runMochaTests,
  exitTests,
  runAllTests,
};
