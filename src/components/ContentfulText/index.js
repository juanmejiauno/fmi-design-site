/* eslint-disable react/no-danger */
import React from 'react';
import sanitize from 'lib/sanitize';
import unescape from 'lodash.unescape';

/**
 * Component for rendering text from Contentful API
 *
 * @public
 * @param {string} {text text to render into component
 * @param {string} className} optional class to assign to component
 * @returns {React.Component} component with text sanitzed and passed as dangerouslySetInnerHtml prop
 */
function ContentfulText({ text, className }) {
  if (!text) return null;
  return (
    <span ref={wrapiframes} dangerouslySetInnerHTML={{ __html: sanitize(unescape(text.toString())) }} className={getClassNames(className)} />
  );
}

function getClassNames(classesToAdd) {
  return classesToAdd && classesToAdd.length ? `contentful-text ${classesToAdd}` : 'contentful-text';
}

/**
 * wrap iframes in .iframe-wrap div to allow styling.
 * * finds all iframes in target and inserts iframe-wrap div
 * * then moves iframe into iframe-wrap div
 *
 * @public
 * @param {React.Element} target
 */
function wrapiframes(target) {
  if (!target) {
    return;
  }

  const iframes = target.querySelectorAll('iframe');

  if (iframes.length) {
    [].forEach.call(iframes, (iframe) => {
      const wrap = document.createElement('div');
      wrap.classList.add('iframe-wrap');

      iframe.parentNode.insertBefore(wrap, iframe);
      wrap.appendChild(iframe);
    });
  }
}

export default ContentfulText;
