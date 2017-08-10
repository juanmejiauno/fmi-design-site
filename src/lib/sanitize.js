import unescape from 'lodash/unescape';
import sanitizeHtml from 'sanitize-html';

// whitelist elements and attributes
const defaults = {
  allowedTags: [
    'p',
    'a',
    'b',
    'i',
    'em',
    'strong',
    'sup',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'del',
    'br',
    'hr',
    'ul',
    'ol',
    'li',
    'table',
    'tr',
    'td',
    'th',
    'pre',
    'blockquote',
    'img',
    'figure',
    'figcaption',
    'iframe',
  ],
  allowedAttributes: {
    '*': ['style'],
    a: ['href', 'target', 'rel'],
    img: ['src', 'width', 'height', 'style', 'alt'],
    iframe: ['src', 'alt'],
  },
};

/**
 * sanitizes strings for rendering safely
 *
 * @public
 * @param {string} str string to sanitize
 * @param {object} opts={} optional settings
 * @returns {string}
 */
function sanitize(str, opts = {}) {
  if (!str) {
    return str;
  }

  const options = Object.assign({}, defaults, opts);

  return sanitizeHtml(unescape(str.toString()), options);
}

function sanitizeArray(arr) {
  return arr.map((item) => {
    return typeof item === 'string' ? sanitize(item) : sanitizeData(item);
  });
}

function sanitizeObj(obj) {
  const sanitized = {};

  Object.keys(obj).forEach((key) => {
    const item = obj[key];
    if (typeof item === 'string' || typeof item === 'number') {
      sanitized[key] = sanitize(item);
    }
    const isStringOrNum = (typeof item === 'string' || typeof item === 'number');

    sanitized[key] = isStringOrNum ? sanitize(item) : sanitizeData(item);
  });

  return sanitized;
}

/**
 * sanitizes properties in an object
 * recursively calls sanitize on object props
 *
 * @public
 * @param {object} data data to sanitize
 * @returns {object}
 */
function sanitizeData(data) {
  if (!data) {
    return data;
  }

  if (typeof data === 'string') {
    return sanitize(data);
  }

  if (Array.isArray(data)) {
    return sanitizeArray(data);
  }

  return sanitizeObj(data);
}

export default sanitize;
export { sanitize, sanitizeData };
