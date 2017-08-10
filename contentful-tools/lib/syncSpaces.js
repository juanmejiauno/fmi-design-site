const spaceSync = require('contentful-space-sync');
const { spaceName } = require('yargs').argv;
const { resolve } = require('path');
require('dotenv').config()

const {
  productionSpaceId,
  productionDeliveryToken
} = process.env;

const defaultSyncOptions = getSyncOptions();

function getSyncOptions() {
  const space = typeof spaceName === 'undefined' ? process.env.defaultSpaceName : spaceName;

  const destinationSpaceId = process.env[`${space}SpaceId`];
  const managementToken = process.env.managementToken;

  return {
    sourceSpace: productionSpaceId,
    sourceDeliveryToken: productionDeliveryToken,
    destinationSpace: destinationSpaceId,
    managementToken: managementToken,
    syncTokenDir: resolve('./contentful-tools/sync-tokens')
  };
}

function syncSpaces(syncOptions) {
  syncOptions = syncOptions || defaultSyncOptions;

  return spaceSync({ opts: syncOptions })
    .then(output => {
      console.log('sync token', output.nextSyncToken);
    })
    .catch((err) => {
      console.log('oh no! errors occurred!', err)
    });
}

module.exports = syncSpaces;
