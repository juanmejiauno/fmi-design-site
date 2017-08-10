// We have to use importScripts here or only precache works as expected
// all caching by route fails if you attempt to require or ES6 import sw-toolbox
importScripts('/sw-toolbox.js');

const hour = 60 * 60;
const day = hour * 24;
const week = day * 7;

// TODO come up with strategy to support offline and cache js assets

// index.css, only hold most recent version
toolbox.router.get('/index.css', toolbox.cacheFirst, {
  cache: {
    name: 'css',
    maxAgeSeconds: week,
  },
});

// images from app server
toolbox.router.get('/img/(.*)', toolbox.cacheFirst, {
  cache: {
    name: 'images',
    maxAgeSeconds: week,
  },
});

// fonts
toolbox.router.get('/fonts/(.*)', toolbox.cacheFirst, {
  cache: {
    name: 'fonts',
    maxAgeSeconds: week,
  },
});

// typography.com font css
toolbox.router.get('(.*)', toolbox.cacheFirst, {
  origin: /https:\/\/cloud.typography.com/,
  cache: {
    name: 'fonts',
    maxAgeSeconds: week,
  },
});

// contentful images
toolbox.router.get('(.*)', toolbox.cacheFirst, {
  origin: /http:\/\/images.contentful.com/,
  cache: {
    name: 'contentful',
    maxAgeSeconds: day,
  },
});

// contentful entries
toolbox.router.get('(.*)', toolbox.cacheFirst, {
  origin: /https:\/\/cdn.contentful.com/,
  cache: {
    name: 'contentful',
    maxAgeSeconds: day,
  },
});

self.addEventListener('message', ({ data }) => {
  if (data === 'CLEAR_ALL_CACHES') {
    caches.delete('contentful');
    caches.delete('images');
    caches.delete('css');

    console.info('cleared all caches');
  }

  if (data === 'CLEAR_CONTENTFUL_CACHES') {
    caches.delete('contentful');

    console.info('clear contentful caches');
  }
});
