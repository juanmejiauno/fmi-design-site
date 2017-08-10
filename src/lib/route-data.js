/* eslint-disable no-param-reassign */
import { sanitizeData } from 'lib/sanitize';
import { hasIn } from 'lodash';
import logger from 'lib/logger';

const PRELOADED_DATA = '__PRELOADED_DATA__';

/**
 * get data required to render route components
 *
 * @public
 * @param {ContentfulClient} client
 * @param {object} routerData - Either renderProps or nextState
 * @returns {Promise}
 * @resolve {(array|null)[]}
 */
async function getDataFromRoutes(client, routerData) {
  return Promise.all(routerData.routes.map((route) => {
    return hasFetchData(route)
      ? getRouteData(route, client, routerData)
      : null;
  }));
}

/**
 * Mutates the routerData to add fetched data to each route.
 *
 * @public
 * @param {object} routerData - Should be either renderProps or nextState
 * @param {array} data - The fecthed data for each route in order
 * @returns {object}
 */
function addDataToRoutes(routerData, data) {
  routerData.routes.forEach((route, i) => {
    route.data = data[i] ? data[i] : null;
  });
}

/**
 * Creates the PRELOADED_DATA for the client to consume.
 * Removes the first item of data since the first item of
 * renderProps.routes is the Router object and not a route.
 *
 * Sanitizes and serializes data
 *
 * @public
 * @param {array} data
 * @returns {array}
 */
function createPreload(data) {
  if (!Array.isArray(data)) {
    throw new Error(`data passed into createPreload must be array. data was ${typeof data}`);
  }

  return JSON.stringify(sanitizeData(data.slice(1)));
}

/**
 * Partially applies client to onEnter
 *
 * @public
 * @param {ContentfulClient} client
 * @returns {function}
 */
function createOnEnter(client) {
  /**
   * Handles the onEnter hook in React Router to invoke fetchData
   * for a route component and then append that data onto the route
   * will redirect to error page if an error is thrown while fetching data
   *
   * @public
   * @param {object} nextState - Exposes the location, params, and routes for the next router state
   * @param {function} replace - redirect to a different URL
   * @param {function} done
   * @param {ContentfulClient} client
   * @this {object} The current route
   *
   * @see https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#onenternextstate-replace-callback
   */
  return async function onEnter(nextState, replace, done) {
    if (windowHasData()) {
      addDataToRoutes(nextState, window[PRELOADED_DATA]);
      done();
    } else if (hasFetchData(this)) {
      try {
        this.data = await getRouteData(this, client, nextState);
        done();
      } catch (err) {
        logger.error('error rendering route component.', err);
        replace({
          pathname: '/error',
          query: {
            status: 404,
            message: 'Resource not found.',
          },
        });
        done();
      }
    } else {
      done();
    }
  };
}

export { getDataFromRoutes, addDataToRoutes, createPreload, createOnEnter };

/***********************************
  Internal Functions
***********************************/

/**
 * Checks whether a route component has a static method fetchData
 *
 * @private
 * @param {object} route
 * @returns {boolean}
 */
function hasFetchData(route) {
  return !!route
    && hasIn(route, 'component.fetchData')
    && typeof route.component.fetchData === 'function';
}

/**
 * Creates an imitation of the router state passed to onEnter handlers
 *
 * @private
 * @param {object} renderProps
 * @returns {object}
 */
function createRouterState({ location, params, routes }) {
  return { location, params, routes };
}

/**
 * Invokes the fetchData method for a route component
 *
 * @private
 * @param {object} route
 * @param {ContentfulClient} client
 * @param {object} routerData - Either renderProps or nextState
 * @returns {Promise}
 */
function getRouteData(route, client, routerData) {
  const routerState = createRouterState(routerData);
  return route.component.fetchData.call(route, client, routerState)
    .then(data => data);
}

/**
 * Looks on the window for PRELOADED_DATA
 *
 * @private
 * @returns {boolean}
 */
function windowHasData() {
  return global.window
  && window[PRELOADED_DATA]
  && Object.keys(window[PRELOADED_DATA]).length > 0;
}
