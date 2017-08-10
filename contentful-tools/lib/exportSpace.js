const spaceExport = require('contentful-export');
const argv = require('yargs').argv;
const fs = require('fs');
require('dotenv').config();

const { red, green } = require('chalk');
const { resolve } = require('path');
const { spaceName } = require('yargs').argv;

function getOptions() {
  const managementToken = process.env.managementToken;
  const space = typeof spaceName === 'undefined' ? 'production' : spaceName;
  const spaceId = process.env[`${space}SpaceId`];

  return {
    spaceId: spaceId,
    managementToken: managementToken,
    exportDir: resolve('./contentful-tools/content-exports/')
  }
}

function makeFilename({ spaceId }) {
  const timestamp  = new Date().toISOString().replace(/\:/gi, '_');
  console.log(timestamp)
  return `dl-${spaceId}-${timestamp}.json`;
}

function exportSpace() {
  const options = getOptions();
  const filename = makeFilename(options);

  return spaceExport(options)
    .then((output) => {
      fs.writeFile(`${options.exportDir}/${filename}`, JSON.stringify(output), (err) => {
        if (err) {
          throw err;
        }
        console.log('space data', output);
        console.log(green('successfully downloaded content'));
      });
    })
    .catch((err) => {
      console.log(red('oh no! errors occurred!', err));
    });
}

module.exports = exportSpace;
