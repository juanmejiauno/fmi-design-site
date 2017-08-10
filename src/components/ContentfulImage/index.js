/* eslint-disable no-param-reassign */
import get from 'lodash/get';
import React from 'react';
import isEqual from 'lodash/isEqual';

const $widths = [300, 450, 650, 900, 1200, 1250];

function createSRC(url, width) {
  return width ? `${url}?w=${width}` : url;
}

function createSRCSET(url, widths) {
  const candidateString = width => `${url}?w=${width} ${width}w`;
  return widths.filter(Number).map(candidateString).join(', ');
}

function ContentfulImage({ entry, width, widths = [...$widths], ...props }) {
  // If we're using the default set of $widths,
  // filter them to less than or equal to the native width size
  if (isEqual(widths, $widths)) {
    const nativeWidth = get(entry, 'fields.file.details.image.width');
    widths.push(nativeWidth);
    widths = widths.filter(w => w <= nativeWidth);
  }

  const url = get(entry, 'fields.file.url');
  const alt = get(entry, 'fields.description') || '';
  return !url ? null : (
    <img
      alt={alt}
      src={createSRC(url, width)}
      srcSet={createSRCSET(url, widths)}
      {...props}
    />
  );
}

export default ContentfulImage;
