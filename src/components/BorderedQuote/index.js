import { escape, unescape } from 'lodash';
import ContentfulText from 'components/ContentfulText';
import React from 'react';
import get from 'lodash/get';

const quoteParser = /(^<[^>]+>)?(.+)(<\/[^>]+>$)?/;

function insertSmartQuotes(match, openingTag = '', innerContent = '', closingTag = '') {
  return `${openingTag}“${innerContent.trim()}”${closingTag}`;
}

function useSmartQuotes(text = '') {
  return escape(unescape(text).replace(quoteParser, insertSmartQuotes));
}

const BorderedQuote = ({ entry, smartQuotes }) => {
  const quoteText = smartQuotes
    ? useSmartQuotes(get(entry, 'fields.text'))
    : get(entry, 'fields.text');
  return (
    <section className="bordered-quote">
      <div className="bordered-quote__content">
        <p className="bordered-quote__text"><ContentfulText text={quoteText} /></p>
        <p className="bordered-quote__person">{entry.fields.sourceName}</p>
        <p className="bordered-quote__description">{entry.fields.sourceDescriptor}</p>
      </div>
    </section>
  );
};

export default BorderedQuote;
