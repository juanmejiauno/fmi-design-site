const { red } = require('chalk');

/**
 * Keep pipes from breaking
 */
function handleError(err) {
  if (this && this.emit) this.emit('end');
  console.log(red(err)); // eslint-disable-line no-console
}

module.exports = handleError;
