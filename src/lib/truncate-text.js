import logger from 'lib/logger';

/**
 * truncates string to given maximum words
 * only truncates if string is longer that maxWords + offset
 *
 * @public
 * @param {string} originalStr
 * @param {number} maxWords=25 optional maximum words to truncate
 * @param {number} offset=5 optional extra words to maybe include
 * @returns {string}
 *
 * @example truncateText(stringThatIs30Words, 20, 5);
 * // returns string truncated to 20 words
 *
 * @example truncateText(stringThatIs40Words, 30, 10);
 * // returns original string because length is equal to maxWords + offset
 */
function truncateText(originalStr, maxWords = 25, offset = 5) {
  if (!originalStr || typeof originalStr !== 'string') {
    logger.warn('first argument is not a string. argument was: ', originalStr);
    return originalStr;
  }
  const words = originalStr.trim().split(' ');
  const maxWordsWithOffset = maxWords + offset;

  if (maxWordsWithOffset >= words.length) {
    return originalStr;
  }

  let truncatedStr = words.splice(0, maxWords).join(' ');

  // Add ellipsis if text is truncated before the sentence ends.
  if (truncatedStr.substr(truncatedStr.length - 1) !== '.') {
    truncatedStr += '…';
  }

  return truncatedStr;
}

export default truncateText;
