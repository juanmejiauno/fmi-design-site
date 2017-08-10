const { gray, green } = require('chalk');
const chokidar = require('chokidar');
const closeOnExit = require('./close-on-exit');
const logMessage = require('./log');
const run = require('run-sequence');

/**
 * Because Gulp watchers are terrible
 */
function watch(paths, tasks, opts) {
  const defaults = { persistent: true, ignoreInitial: true };
  const options = Object.assign({}, defaults, opts);
  const watcher = chokidar.watch(paths, options);
  closeOnExit(watcher, 'close', `Closing watcher for files ${gray(paths)}`);

  watcher.on('ready', () => {
    logMessage(green(`Watching files ${gray(paths)}`));
  });

  watcher.on('add', (path) => {
    logMessage(green(`Adding file ${gray(path)} to watch`));
    watcher.add(path);
  });

  watcher.on('unlink', (path) => {
    logMessage(green(`Removing file ${gray(path)} from watch`));
    watcher.unwatch(path);
  });

  watcher.on('change', (path) => {
    logMessage(green(`Detected change on file ${gray(path)}`));
    if (typeof tasks === 'function') tasks();
    else run(...tasks);
  });
}

module.exports = watch;
