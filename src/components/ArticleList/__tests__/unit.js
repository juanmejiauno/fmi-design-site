import { mount } from 'enzyme';
import moment from 'moment';

import React from 'react';
import ArticleList from 'components/ArticleList';
import { articlesFixture } from '__tests__/lib/fixtures/article-fixture';

describe('ArticleList component', () => {
  it('should return null if there are no entries passed in', () => {
    const wrapper = mount(<ArticleList />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should contain li for each file', () => {
    const entries = articlesFixture.items;
    const wrapper = mount(<ArticleList entries={entries} />);

    const items = wrapper.find('li');

    expect(items).to.have.length(entries.length);
  });

  it('should display entry title, author and link to entry', () => {
    const entries = articlesFixture.items;
    const [firstEntry] = entries;
    const wrapper = mount(<ArticleList entries={entries} />);

    const heading = wrapper.find('li').first().find('h2 a').text();
    const link = wrapper.find('Link').first().props().to;

    expect(heading).to.have.string(firstEntry.fields.pageTitle);
    expect(link).to.have.string(`blog/${firstEntry.fields.slug}`);
  });

  it('should render article.fields.publishedAt as MMMM D, YYYY', () => {
    const entries = articlesFixture.items;
    const [firstEntry] = entries;
    const wrapper = mount(<ArticleList entries={entries} />);

    const date = wrapper
      .find('li')
      .first()
      .find('.js-date-line')
      .text()
      .toLowerCase();

    const readablePublishedAt = moment(firstEntry.fields.publishedAt).format('MMMM D, YYYY').toLowerCase();

    expect(date).to.equal(readablePublishedAt);
  });
});
