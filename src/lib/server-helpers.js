/* eslint-disable comma-dangle */
import React from 'react';
import Helmet from 'react-helmet';
import logger from 'lib/logger';

import { get } from 'lodash';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { addDataToRoutes, createPreload, getDataFromRoutes } from 'lib/route-data';
import { createFeed, fetchArticles } from 'lib/create-feed';

import App from 'routes/App';
import ContentfulClient from 'lib/contentful';
import createMarkup from 'lib/create-markup';
import ErrorPage from 'routes/ErrorPage';
import Routes from 'routes';

const AUTH_TOKEN = 'relentless';

global.PREVIEW_TOKEN = process.env.previewToken;

const previewClient = new ContentfulClient(true);
const deliveryClient = new ContentfulClient();

function handleClientRender(req, res) {
  const options = getMarkupOptions(req);
  res.status(201).send(createMarkup(options));
}

function handleUniversalRender(req, res) {
  const client = getContentfulClient(req);

  match({ routes: Routes(client), location: req.url }, async (error, redirect, renderProps) => {
    if (error) {
      logger.error(error);
      serverErrorResponse(res);
    } else if (redirect) {
      redirectResponse(redirect, res);
    } else if (renderProps) {
      try {
        const data = await getDataFromRoutes(client, renderProps);
        addDataToRoutes(renderProps, data);

        const options = getMarkupOptions(req, data, renderProps);
        const status = getRouteStatus(renderProps.routes);

        res.status(status).send(createMarkup(options));
      } catch (err) {
        logger.warn(err);
        serverErrorResponse(res);
      }
    } else {
      notFoundResponse(res);
    }
  });
}

function notFoundResponse(res) {
  const status = 404;
  const message = 'Page Not Found';
  const content = renderAppError(message, status);
  const options = { content };

  res.status(status).send(createMarkup(options));
}

function redirectResponse(redirect, res) {
  const status = get(redirect, 'query.status', 301);
  const message = get(redirect, 'query.message', '');

  const content = renderAppError(message, status);
  const options = { content };

  res.status(status).send(createMarkup(options));
}

function serverErrorResponse(res) {
  const status = 500;
  const content = renderAppError('Server Error', status);
  const options = { content };

  res.status(status).send(createMarkup(options));
}

/**
 * Render the application shell with an error page.
 * * only use to display errors, not application
 * * status code should match code sent by server
 *
 * @private
 * @param {string} msg message to display
 * @param {number} code http status code to display
 * @returns {string} html for app shell and error page
 */
function renderAppError(message, status) {
  try {
    const content = renderToString(
      <App>
        <ErrorPage message={message} status={status} />
      </App>
    );
    Helmet.rewind();
    return content;
  } catch (err) {
    logger.error('Failed to render error application error.', err);
    return err.toString();
  }
}

// check if any routes have status prop and return that status
function getRouteStatus(routes) {
  const routeWithStatus = routes.find((route) => {
    if (route.component) {
      return typeof route.status !== 'undefined';
    }
    return false;
  });

  return routeWithStatus ? routeWithStatus.status : 200;
}

/**
 * get the correct contentful sdk client for the request
 * verifies query.preview and qeury.auth
 *
 * @private
 * @returns {object}
 */
function getContentfulClient(req) {
  const auth = get(req, 'query.auth');
  const preview = get(req, 'query.preview');

  const usePreviewClient = (preview === 'true' && verifyPreviewAuthToken(auth));
  return usePreviewClient ? previewClient : deliveryClient;
}

/**
 * merges options with defaults for createMarkup
 *
 * @private
 * @param {object} req express request
 * @param {data} data for the route
 * @param {object} renderProps props from react-router
 * @returns {object}
 */
function getMarkupOptions(req, data, renderProps) {
  const options = {
    content: '',
  };

  if (verifyPreviewAuthToken(req.query.auth)) {
    options.previewToken = process.env.previewToken;
  }

  if (data) {
    options.serializedData = createPreload(data);
  }

  if (renderProps) {
    options.content = renderToString(<RouterContext {...renderProps} />);
    options.helmet = Helmet.rewind();
  }

  return options;
}

function verifyPreviewAuthToken(token) {
  return token === AUTH_TOKEN;
}

function forceHTTPS(req, res, next) {
  const isCompbio = req.path.startsWith('/compbio');
  if (isSecure(req) || isCompbio) {
    next();
  } else {
    res.status(301).redirect(`https://${req.headers.host}${req.originalUrl}`);
  }
}

function isSecure(req) {
  return req.secure
    || req.protocol === 'https'
    || req.headers['x-forwarded-proto'] === 'https';
}

async function handleRssFeed(req, res) {
  const articles = await fetchArticles(deliveryClient);
  res.set('Content-Type', 'application/rss+xml');
  res.status(200).send(createFeed(articles));
}

export {
  getContentfulClient,
  handleClientRender,
  handleUniversalRender,
  handleRssFeed,
  forceHTTPS,
};
