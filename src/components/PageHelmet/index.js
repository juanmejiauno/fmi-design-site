import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import unescape from 'lodash.unescape';
import stripTags from 'lib/strip-tags';
import truncateText from 'lib/truncate-text';

function trunc(input = '') {
  if (!input.length) return input;
  const text = unescape(input);
  const plainText = stripTags(text);
  return truncateText(plainText);
}

function getImage(image) {
  return get(image, 'fields.file.url')
    || '/img/og-logo.jpg';
}

function formatProperty(name) {
  return name.replace(/[A-Z]/g, (match) => {
    return `:${match.toLowerCase()}`;
  });
}

function convertMeta({ children, ...props }) {
  return Object.keys(props).map((key) => {
    const property = formatProperty(key);
    const content = props[key];
    return { property, content };
  });
}

function PageHelmet({ title, description, image, ...props }) {
  const $title = unescape(title);
  const $description = trunc(description);
  const $image = getImage(image);
  return (
    <Helmet
      titleTemplate="%s - Foundation Medicine"
      title={$title}
      meta={[
        { name: 'description', content: $description },
        { property: 'og:title', content: $title },
        { property: 'og:description', content: $description },
        { property: 'og:image', content: $image },
        { property: 'twitter:image', content: $image },
        ...convertMeta(props),
      ]}
    />
  );
}

export default PageHelmet;
