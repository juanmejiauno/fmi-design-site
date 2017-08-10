import sanitizeHtml from 'sanitize-html';
import logger from 'lib/logger';

/**
 * strips all html tags from a string
 *
 * @public
 * @param {string} str
 * @returns {string}
 */
function stripTags(str) {
  if (!str || typeof str !== 'string') {
    logger.warn('argument is not a string. argument was: ', str);
    return str;
  }

  const opts = {
    allowedTags: [],
    allowedAttributes: [],
  };

  return sanitizeHtml(str, opts);
}

export default stripTags;
