/* eslint-disable no-param-reassign */
const { config } = require('dotenv');
const yargs = require('yargs');
const fs = require('fs');

function getVersion() {
  const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  return json.version;
}

/**
 * modifies envirnoment object based on options set in .env and flags
 *
 * @public
 * @param {object} env process.env
 * @returns {object} modified process.env
 */
function configureEnvironment(env = {}) {
  // import .env variables
  config();

  const defaultSpaceName = process.env.defaultSpaceName || 'production';

  // parse flags
  // this is called flags opposed to `argv` due to mysterious name conflicts in Travis
  const flags = yargs
    .boolean('universal')
    .default('universal', false)
    .default('spaceName', defaultSpaceName)
    .argv;

  // set environment variables


  env.UNIVERSAL_REACT = flags.universal;
  env.spaceName = flags.spaceName;
  env.spaceId = process.env[`${flags.spaceName}SpaceId`];
  env.deliveryToken = process.env[`${flags.spaceName}DeliveryToken`];
  env.previewToken = process.env[`${flags.spaceName}PreviewToken`];
  env.siteUrl = process.env.siteUrl || 'https://www.foundationmedicine.com';
  env.version = getVersion();

  return env;
}

module.exports = configureEnvironment;
