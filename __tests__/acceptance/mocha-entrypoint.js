import { argv } from 'yargs';

import appServer from 'dist/server/index.js';
import chalk from 'chalk';
import Nightmare from 'nightmare';

const nightmareConfig = setNightmareConfig();

let httpServer;
let nightmare = null;

// initialize contentful client & api mocks
before((done) => {
  startAppServer().then(() => done());
});

// teardown api mocks
after(() => {
  stopAppServer();
});

beforeEach(() => {
  const defaults = {};

  nightmare = Nightmare(Object.assign(defaults, nightmareConfig));
  global.nightmare = nightmare;
});

afterEach((done) => {
  nightmare.end(done);
});

function stopAppServer() {
  if (typeof httpServer.close === 'function') {
    log('\nclosing app server...');
    httpServer.close();
  }
}

function startAppServer() {
  return new Promise((resolve) => {
    process.on('SIGINT', () => {
      stopAppServer();
    });

    httpServer = appServer.listen(4001, () => {
      log('\nstarted app server...');
      resolve();
    });
  });
}

function setNightmareConfig() {
  const config = {};

  // set nightmareConfig
  if (argv.debugNightmare) {
    config.show = true;
    config.openDevTools = {
      mode: 'detach',
    };
  }

  return config;
}

function log(...messages) {
  return console.warn(chalk.cyan(messages));
}
