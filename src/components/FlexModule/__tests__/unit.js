import { mount } from 'enzyme';
import React from 'react';

import FlexModule from 'components/FlexModule';
import MediaModule from 'components/FlexModule/MediaModule';
import BlogModule from 'components/FlexModule/BlogModule';

import { blogModuleFixture } from '__tests__/lib/fixtures/blog-module-fixture';
import { articleFixture } from '__tests__/lib/fixtures/article-fixture';
import { mediaModuleFixtureNoVideo, mediaModuleFixtureVideo } from '__tests__/lib/fixtures/media-module-fixture';

describe('FlexModule', () => {
  it('should use BlogModule component for blogModule content type', () => {
    const wrapper = mount(<FlexModule entry={blogModuleFixture} />);
    expect(wrapper.find('MediaModule')).to.have.length(0);
    expect(wrapper.find('BlogModule')).to.have.length(1);
  });
  it('should use BlogModule component for blogArticle content type', () => {
    const [expectedArticle] = articleFixture.items;
    const wrapper = mount(<FlexModule entry={expectedArticle} />);
    expect(wrapper.find('MediaModule')).to.have.length(0);
    expect(wrapper.find('BlogModule')).to.have.length(1);
  });

  it('should use MediaModule component for mediaModule content type', () => {
    const wrapper = mount(<FlexModule entry={mediaModuleFixtureNoVideo} />);
    expect(wrapper.find('BlogModule')).to.have.length(0);
    expect(wrapper.find('MediaModule')).to.have.length(1);
  });
});

describe('MediaModule', () => {
  it('should not include VideoModal if no YouTube link provided', () => {
    const wrapper = mount(<MediaModule entry={mediaModuleFixtureNoVideo} />);
    expect(wrapper.find('VideoModal')).to.have.length(0);
  });

  it('should include VideoModal if YouTube link provided', () => {
    const wrapper = mount(<MediaModule entry={mediaModuleFixtureVideo} />);
    expect(wrapper.find('VideoModal')).to.have.length(1);
  });
});

describe('BlogModule component', () => {
  it('should return null if there are no entries passed in', () => {
    const wrapper = mount(<BlogModule />);
    expect(wrapper.html()).to.equal(null);
  });

  // it('should display entry title and link to entry for blogArticle contentType', () => {
  //   const [expectedArticle] = articleFixture.items;
  //   const wrapper = mount(<BlogModule entry={expectedArticle} />);
  //   const heading = wrapper.find('h2').text();
  //   const link = wrapper.find('Link').first().props().to;

  //   expect(heading).to.have.string(expectedArticle.fields.pageTitle);
  //   expect(link).to.have.string(`blog/${expectedArticle.fields.slug}`);
  // });

  // it('should display entry title and link to entry for blogModule contentType', () => {
  //   const wrapper = mount(<BlogModule entry={blogModuleFixture} />);
  //   const heading = wrapper.find('h2').text();
  //   const link = wrapper.find('Link').first().props().to;

  //   expect(heading).to.have.string(expectedArticle.fields.pageTitle);
  //   expect(link).to.have.string(`blog/${expectedArticle.fields.slug}`);
  // });
});
