/* eslint-disable comma-dangle */
import 'babel-polyfill';
import { resolve } from 'path';
import logger from 'lib/logger';
import fs from 'fs';

import BodyParser from 'body-parser';
import compression from 'compression';
import CookieParser from 'cookie-parser';
import express from 'express';
import favicon from 'serve-favicon';
import helmet from 'helmet';

import {
  login,
  logout,
  verifyLoggedIn,
} from 'lib/login-helpers';

import {
  getContentfulClient,
  handleClientRender,
  handleUniversalRender,
  handleRssFeed,
  forceHTTPS,
} from 'lib/server-helpers';

const server = express();
const { NODE_ENV } = process.env;

process.env.version = getVersion();

if (NODE_ENV !== 'development' && NODE_ENV !== 'test') {
  server.use(forceHTTPS);
}

// Permanent redirects
server.get('/pages/contact', (req, res) => {
  res.redirect(301, '/contact');
});
server.get('/pages/order', (req, res) => {
  res.redirect(301, '/genomic-testing/order');
});
server.get('/blog/category/:slug', (req, res) => {
  res.redirect(301, `/blog/topic/${req.params.slug}`);
});

// Add middleware
server.use(helmet());
server.use(compression());
server.use(favicon(resolve('dist/public/img/touch-icons/favicon.ico')));
server.use(express.static(resolve('dist/public')));
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({ extended: false }));
server.use(CookieParser());

// Remove Vary header from login api responses
server.use('/api/v1', (req, res, next) => {
  res.removeHeader('Vary');
  next();
});

// Handle auth request
server.post('/api/v1/login', login);
server.post('/api/v1/logout', logout);
server.get('/api/v1/user', verifyLoggedIn);

// Handle RSS feed request
server.get('/feed', handleRssFeed);

// in development environments let's not use server-side rendering
// this helps us debug and hot reload
// to always use server side rendering: npm start -- --universal
if (process.env.NODE_ENV === 'development' && process.env.UNIVERSAL_REACT === 'false') {
  server.get('*', handleClientRender);
} else {
  server.get('*', handleUniversalRender);
}

// in test env we don't want to start the server
if (process.env.NODE_ENV !== 'test') {
  getContentfulClient().initialize()
    .then(() => {
      logger.info('server starting');
      return server.listen(4000);
    })
    .catch((err) => {
      logger.error('Could not intialize contentful sdk client.', err);
    });
}

function getVersion() {
  const path = resolve('package.json');
  const pkg = fs.readFileSync(path, 'utf8');
  const json = JSON.parse(pkg);
  return json.version;
}

export default server;
