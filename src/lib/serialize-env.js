/* eslint-disable no-param-reassign */
import has from 'lodash/has';

const whitelist = [
  'accountLink',
  'cookieDomain',
  'dashboardLink',
  'deliveryToken',
  'forgotPasswordLink',
  'gaTrackingCode',
  'loginEndpoint',
  'NODE_ENV',
  'previewToken',
  'signupLink',
  'spaceId',
  'siteUrl',
  'version',
  'displayApprovalBanner',
];

function serializeEnv() {
  return JSON.stringify(whitelist.reduce((env, key) => {
    if (has(global.process.env, key)) {
      env[key] = global.process.env[key];
    }
    return env;
  }, { isClient: true }));
}

export default serializeEnv;
