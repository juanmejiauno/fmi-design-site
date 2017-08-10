const yargs = require('yargs');

yargs.option('lint', {
  default: false,
  type: 'boolean',
});

/**
 * determines whether we want to lint then returns array of linting tasks
 *
 * @public
 * @param {string} lintType "scripts" or "styles"
 * @returns {array} linting task name to run
 */
function lintIfRequired(lintType) {
  if (yargs.argv.lint) {
    return [`lint:${lintType}`];
  }
  return null;
}

module.exports = lintIfRequired;
