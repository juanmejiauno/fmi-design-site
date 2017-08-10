const { magenta } = require('chalk');
const log = require('./log');
const onExit = require('exit-hook');

/**
 * Make sure all processes close
 */
function closeOnExit(item, method, message) {
  onExit(() => {
    if (item && typeof item[method] === 'function') {
      if (message) log(magenta(message));
      item[method]();
    }
  });
}

module.exports = closeOnExit;
