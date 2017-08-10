/* eslint-disable global-require */
import { get, has } from 'lodash';
import logger from 'lib/logger';

const createClient = getCreateClient();

class ContentfulClient {
  constructor(usePreviewAPI = false) {
    this.options = getClientOptions(usePreviewAPI);
    this.client = createClient(this.options);
    this.authorized = false;
  }

  /**
   * initialize the contentful sdk client
   *
   * @public
   * @returns {Promise} resolves to state of client authorization
   */
  initialize() {
    if (this.authorized) {
      return Promise.resolve();
    }

    return this.client.getSpace()
      .then(() => {
        this.authorized = true;
        return true;
      })
      .catch(logger.error);
  }

  /**
   * get a single entry
   *
   * @public
   * @param {string} slug entry.fields.slug
   * @param {string} contentType
   * @param {object} [options]
   * @returns {Promise} resolves to first entry in payload.items
   */
  getEntry(slug, contentType, options = {}) {
    const forced = { limit: 1, 'fields.slug': slug, content_type: contentType };
    return this.getEntries({ ...options, ...forced })
      .then(provideSingleEntry);
  }

  /**
   * get a collection of entries
   *
   * @public
   * @param {object} query params to pass to client.getEntries
   * @returns {Promise} resolves to payload from contentful sdk
   */
  getEntries(query) {
    return this.client.getEntries(query)
      .then(provideMultipleEntries);
  }

  /**
   * get singleton entry
   *
   * @public
   * @param {string} contentType name of content_type to get
   * @param {object} [options]
   * @returns {Promise} resolves to first entry in payload.items
   *
   * @example
   * getSingleton('homePage') // fetches homepage entry
   */
  getSingleton(contentType, options = {}) {
    const forced = { content_type: contentType, limit: 1 };
    return this.getEntries({ ...options, ...forced })
      .then(provideSingleEntry);
  }

  /**
   * Get all entries of a content_type linked to a given category
   *
   * @public
   * @param {(object|string)} category - An entry representing a category, or the id of a category
   * @param {string} contentType
   * @param {object} [options]
   * @returns {Promise} resolves to the entries linked to the given category
   */
  getEntriesByCategory(category, contentType, options = {}) {
    const catid = typeof category === 'string' ? category : category.sys.id;
    const defaults = { include: 0 };
    const forced = { content_type: contentType, 'fields.linkedCategories.sys.id': catid };
    return this.getEntries({ ...defaults, ...options, ...forced });
  }

  /**
   * Get sibling entries related to a given entry
   *
   * @public
   * @param {object} entry - A Contentful entry
   * @param {number} [number] - The number of sibling entries to fetch
   * @param {object} [options]
   * @returns {Promise} resolves to the fetched sibling entries
   */
  getRelatedEntries(entry, number = 3, options = {}) {
    const contentType = get(entry, 'sys.contentType.sys.id');
    return this.getEntries({
      content_type: contentType,
      'sys.id[ne]': entry.sys.id,
      limit: number,
      ...options,
    });
  }
}

/***********************************
  Helper Functions
***********************************/

/**
 * get the `createClient` method from contentful
 *
 * @private
 * @returns {function} standard createClient method, except in tests where a mock createClient method is given
 */
function getCreateClient() {
  if (process.env.NODE_ENV === 'test') {
    const coreCreateClient = require('contentful/dist/contentful').default;
    const axios = require('__tests__/lib/mock-adapter').axios;

    return options => coreCreateClient(axios, options);
  }

  return require('contentful').createClient;
}

/**
 * takes a payload from contentful client sdk and returns single entry
 * * throws an error if the payload is falsy or not in useable format
 *
 * @private
 * @param {object|array} payload
 * @returns {(object|undefined)}
 */
function provideSingleEntry(payload) {
  if (payload && payload.items && payload.items.length > 0) return payload.items[0];
  else if (Array.isArray(payload) && payload.length > 0) return payload[0];
  throw new Error('Contentful failed to return a useable payload to the client. Check query params and contentful client settings.');
}

/**
 * takes a payload from contentful client sdk and returns array of entries
 * * throws an error if the payload is falsy or not in useable format
 *
 * @private
 * @param {object|array} payload
 * @returns {(object[]|undefined)}
 */
function provideMultipleEntries(payload) {
  if (payload && payload && payload.items && payload.items.length > 0) return payload.items;
  else if (Array.isArray(payload) && payload.length > 0) return payload;
  throw new Error('Contentful failed to return a useable payload to the client. Check query params and contentful client settings.');
}

/**
 * get options to pass to contentful client sdk
 * will set options based on whether we want to use content preview API or content delivery API
 *
 * @private
 * @returns {object}
 */
function getClientOptions(usePreviewAPI) {
  // set options conditionally depending on whether we are using the preview API
  const host = usePreviewAPI ? 'preview.contentful.com' : 'cdn.contentful.com';
  const accessToken = usePreviewAPI ? global.PREVIEW_TOKEN : process.env.deliveryToken;
  const space = process.env.spaceId;

  const options = {
    host,
    accessToken,
    space,
    resolveLinks: true,
  };

  return options;
}

/**
 * Safely retrieve a reference field for an entry, ensuring it has fields.
 *
 * The Contentful client will return objects for fields reference deleted or
 * unpublished entries that are missing a `fields` prop. this function
 * provides a safe way to access reference fields that treats these
 * entries as null.
 *
 * @param  {object} entry
 * @param  {string} fieldName
 * @return {object|array}
 */
export function getReferenceField(entry, fieldName) {
  if (!has(entry, `fields.${fieldName}`)) {
    return null;
  }

  const reference = entry.fields[fieldName];

  if (Array.isArray(reference)) {
    return reference.filter(ref => ref.fields);
  }

  return reference.fields ? reference : null;
}

export default ContentfulClient;
