const contentful = require('contentful-management');
const syncSpaces = require('./syncSpaces');
const argv = require('yargs').argv;
const request = require('request');
require('dotenv').config()

const { red, green, cyan } = require('chalk');
const { resolve } = require('path');
const { spaceName, noSync } = require('yargs').argv;

const {
  organizationId,
  productionSpaceId,
  productionDeliveryToken,
  managementToken
} = process.env;

const client = contentful.createClient({
  accessToken: managementToken
});

function getSyncOptions(destinationSpaceId) {
  if (!destinationSpaceId) {
    throw 'space id not supplied by contentful.';
  }

  return {
    sourceSpace: productionSpaceId,
    sourceDeliveryToken: productionDeliveryToken,
    destinationSpace: destinationSpaceId,
    managementToken: managementToken,
    syncTokenDir: resolve('./contentful-tools/sync-tokens')
  };
}

function getPreviewKey(space, apiKey) {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url: `https://api.contentful.com/spaces/${space.sys.id}/preview_api_keys/${apiKey.preview_api_key.sys.id}`,
      headers: {
        'Authorization': `Bearer ${managementToken}`
      }
    }, (error, response, body) => {
      if (error) {
        reject(error);
      }

      const previewKey = JSON.parse(body);

      resolve({ apiKey, previewKey });
    });
  });
}

function createApiKey(space) {
  let keyName = `${Date.now().toString()}-${spaceName}`;
  return new Promise((resolve) => {
    space.createApiKey({name: keyName})
      .then(apiKey => {
        return getPreviewKey(space, apiKey);
      })
      .then(({ apiKey, previewKey }) => {
        resolve({ space, apiKey, previewKey });
      })
      .catch(err => console.log(red('error', err)));
  });
}

function syncNewSpace({ space, apiKey, previewKey }) {
  const syncOptions = getSyncOptions(space.sys.id);

  if (noSync) {
    reportSuccess(space.sys.id, space.name, apiKey.accessToken, previewKey.accessToken);
    return;
  }

  return syncSpaces(syncOptions).then(() => {
    console.log(green('space created and content imported'));
    reportSuccess(space.sys.id, space.name, apiKey.accessToken, previewKey.accessToken);
  })
}

function reportSuccess(id, name, accessToken, previewToken) {
  console.log(cyan('\nadd the following keys to your .env'));
  console.log(green('space name: ', name));
  console.log(green('space id: ', id));
  console.log(green('space deliveryToken: ', accessToken));
  console.log(green('space previewToken: ', previewToken));
}

// TODO use this to create unique production spaces when new code is deployed.
// TODO could use timestamp to create unique space id
function createSpace() {
  if (!spaceName) {
    throw 'name not supplied. use --spaceName=your-space-name';
    return;
  }
  return client.createSpace({ name: spaceName }, organizationId)
    .then(createApiKey)
    .then(syncNewSpace)
    .catch(err => console.error(red('error creating space', err)))
}

module.exports = createSpace;
