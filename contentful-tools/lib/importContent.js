const spaceImport = require('contentful-import');
const argv = require('yargs').argv;
require('dotenv').config()

const { red, green } = require('chalk');
const { resolve } = require('path');
const { spaceName, file } = require('yargs').argv;

function getOptions() {
  if (!file) {
    throw 'file must be specified';
  }

  const space = typeof spaceName === 'undefined' ? process.env.defaultSpaceName : spaceName;
  const destinationSpaceId = process.env[`${space}SpaceId`];
  const managementToken = process.env.managementToken;

  return {
    spaceId: destinationSpaceId,
    managementToken: managementToken,
    content: require(resolve(`./contentful-tools/content-exports/${file}`))
  }
}

function importSpace() {
  const options = getOptions();

  return spaceImport(options)
    .then(() => {
      console.log(green('successfully imported content'));
    })
    .catch((err) => {
      console.log(red('oh no! errors occurred!', err));
    });
}

module.exports = importSpace;
