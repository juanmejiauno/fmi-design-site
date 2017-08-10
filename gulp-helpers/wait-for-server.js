const { magenta } = require('chalk');
// const handleError = require('./handle-error');
const log = require('./log');
const wait = require('wait-on');

const resources = ['http://localhost:4000'];

function waitForServer(message) {
  return new Promise((resolve, reject) => {
    wait({ resources }, (err) => {
      if (err) {
        reject(err);
      } else {
        if (message) log(magenta(message));
        resolve();
      }
    });
  });
}

module.exports = waitForServer;
