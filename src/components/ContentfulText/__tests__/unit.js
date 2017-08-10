/* eslint-disable no-underscore-dangle */
import React from 'react';
import escape from 'lodash.escape';
import { mount } from 'enzyme';
import sanitize from 'lib/sanitize';
import unescape from 'lodash.unescape';

import ContentfulText from 'components/ContentfulText';

const escapedMarkup = escape(`
  <h1 id="heading">Heading</h1>
  <p>2nd paragraph. <em>Italic</em>, <strong>bold</strong>, and . Itemized list look like:</p>
  <ul>
    <li>this one</li>
    <li>that one</li>
    <li>the other one</li>
  </ul>
  <p>Note that --- not considering the asterisk --- the actual text content starts at 4-columns in.</p>
  <blockquote>
    <p>Block quotes are written like so.</p>
    <p>They can span multiple paragraphs, if you like.</p>
  </blockquote>
  <p>Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., &quot;it&#39;s all in chapters 12--14&quot;). Three dots ... will be converted to an ellipsis. Unicode is supported. ☺</p>
`);

describe('ContentfulText component', () => {
  it('should return null if no text passed in', () => {
    const wrapper = mount(<ContentfulText />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should have prop text', () => {
    const wrapper = mount(<ContentfulText text={escapedMarkup} />);

    expect(wrapper.props().text).to.have.string(escapedMarkup);
  });

  it('should render markdown string as sanitized html', () => {
    const wrapper = mount(<ContentfulText text={escapedMarkup} isMarkdown />);

    const innerHTML = wrapper.find('.contentful-text').props().dangerouslySetInnerHTML.__html;

    expect(innerHTML).to.equal(sanitize(unescape(escapedMarkup)));
  });

  it('should add classNames passed as props to default class names', () => {
    const wrapper = mount(<ContentfulText text={escapedMarkup} className="class-to-find" />);

    expect(wrapper.find('.class-to-find').html()).to.be.ok;
  });

  it('should wrap iframes with .iframe-wrap class', () => {
    const iframe = '<iframe></iframe>';
    const escapediframe = escape(iframe);
    const wrapper = mount(<ContentfulText text={escapediframe} />);

    // we have to do this awkward check because enzyme can't find('.iframe-wrap')
    expect(wrapper.html()).to.contain('<div class="iframe-wrap"><iframe></iframe></div>');
  });
});

