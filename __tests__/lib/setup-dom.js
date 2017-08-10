const { jsdom } = require('jsdom');

function setupDom() {
  const exposedProperties = ['window', 'navigator', 'document'];

  global.document = jsdom('', {
    features: {
      FetchExternalResources: false,
      ProcessExternalResources: false,
    },
  });

  // make window stuff global
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });
}

module.exports = setupDom;
