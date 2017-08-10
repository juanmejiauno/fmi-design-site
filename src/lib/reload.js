import logger from 'lib/logger';

const io = require('socket.io-client');

if (location.origin === 'http://localhost:4000') {
  const socket = io('http://localhost:4444', { path: '/socket.io' });
  const stylesLink = document.querySelector('link[href^="/index.css"]');
  const stylesPath = stylesLink.getAttribute('href');

  socket.on('connect', () => {
    logger.info('Connected to reload socket');

    socket.on('reload-page', () => {
      // automagically reload page
      window.location.reload(true);
    });

    socket.on('reload-styles', () => {
      // update query on stylesheet [href] to force reload
      stylesLink.setAttribute('href', `${stylesPath}&d=${Date.now()}`);
    });
  });

  socket.on('error', (error) => {
    logger.warn('Socket closing due to error: ', error);
    socket.close();
  });
}
