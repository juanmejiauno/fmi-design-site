const clientConfig = require('../webpack.client');
const serverConfig = require('../webpack.server');
const handleError = require('./handle-error');
const waitForServer = require('./wait-for-server');
const webpack = require('webpack');

const compiler = webpack([clientConfig, serverConfig]);
const watchOptions = { ignored: /node_modules/ };
const statsOptions = {
  chunks: false,
  colors: true,
  hash: false,
  version: false,
};

function run(callback) {
  compiler.run((err, stats) => {
    if (err) {
      handleError(err);
    } else {
      console.info(stats.toString(statsOptions));
      if (callback) callback();
    }
  });
}

function watch(callback) {
  compiler.watch(watchOptions, (err, stats) => {
    if (err) {
      handleError(err);
    } else {
      console.info(new Date());
      console.info(stats.toString(statsOptions));
      if (callback) {
        waitForServer().then(callback);
      }
    }
  });
}

exports.run = run;
exports.watch = watch;
