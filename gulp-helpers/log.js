const { gray } = require('chalk');
const dateformat = require('dateformat');

/**
 * Log Message
 */
function log(message) {
  const date = dateformat(Date.now(), '[HH:MM:ss]');
  console.log(`${gray(date)} ${message}`); // eslint-disable-line no-console
}

module.exports = log;
