import { shallow } from 'enzyme';
import React from 'react';
import MockClient from '__tests__/lib/mock-client';
import logger from 'lib/logger';

import { mockArticles } from '__tests__/lib/fixtures/article-fixture';
import BlogIndex from 'routes/BlogIndex';

const client = new MockClient();
const pageNum = 1;
const articlesPerPage = 10;
const totalArticleCount = 35;
const payload = mockArticles(totalArticleCount);
const routeData = {
  data: {
    pageNum,
    totalArticleCount,
    articlesPerPage,
    articles: payload,
  },
};

client.mockAsync('getEntries', payload);

describe('BlogIndex Component', () => {
  it('should render ArticleList passing in all entries after the first entry route.data.articles as props.entries', () => {
    const wrapper = shallow(<BlogIndex route={routeData} />);
    const entries = wrapper.find('ArticleList').props().entries;
    const [, ...restOfArticles] = payload;

    expect(entries).to.deep.equal(restOfArticles);
  });

  it('should render FlexModule passing in first entry in route.data.articles', () => {
    const wrapper = shallow(<BlogIndex route={routeData} />);
    const entry = wrapper.find('FlexModule').props().entry;
    const [firstArticle] = payload;

    expect(entry).to.deep.equal(firstArticle);
  });

  it('fetchData should return articles from contentful', async () => {
    const expectedData = { articles: payload };

    try {
      const articles = await BlogIndex.fetchData(client);
      expect(articles).to.deep.equal(expectedData);
    } catch (err) {
      logger.error(err);
    }
  });
});
