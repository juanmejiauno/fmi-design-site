import 'babel-polyfill';
import { render } from 'react-dom';
import ContentfulClient from 'lib/contentful';
import { sendPageview } from 'lib/analytics';
import Routes from 'routes';
import logger from 'lib/logger';

// if the preview api token is available, let's use the preview API
const usePreviewAPI = !!window.PREVIEW_TOKEN;

const client = new ContentfulClient(usePreviewAPI);

// initialize contentful client in background and report success/failure if dev env
client.initialize()
  .then(() => { logger.info('Contentful client initialized'); })
  .catch(err => logger.error('Unable to initialize Contentful client', err));

render(Routes(client, sendPageview), document.getElementById('fmi-react'));

if ('serviceWorker' in navigator) {
  initializeServiceWorker();
  clearServiceWorkerCaches();
} else {
  logger.info('service worker not supported');
}

function initializeServiceWorker() {
  // TODO hook up cache busting for service worker
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => { logger.info('Service Worker Registered'); });
}

function clearServiceWorkerCaches() {
  if (navigator.serviceWorker.controller) {
    // in dev environment we want to clear the caches every page load
    if (process.env.NODE_ENV === 'development') {
      // remove this message to test sw in dev environment
      navigator.serviceWorker.controller.postMessage('CLEAR_ALL_CACHES');
    } else {
      // ontly clear contentful caches in non-dev env
      navigator.serviceWorker.controller.postMessage('CLEAR_CONTENTFUL_CACHES');
    }
  }
}

/***********************************
  Development Utilities
***********************************/

// always log version for QA
logger.info(`version: ${process.env.version}`);

// include reload script if dev environment only
if (process.env.NODE_ENV === 'development') {
  require('lib/reload'); // eslint-disable-line global-require
}
