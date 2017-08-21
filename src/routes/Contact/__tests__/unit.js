import MockClient from '__tests__/lib/mock-client';
import mount from 'enzyme/mount';
import React from 'react';

import CategoryPage from 'routes/CategoryPage';
import { categoryFixture } from '__tests__/lib/fixtures/category-fixture';
import { articlesFixture } from '__tests__/lib/fixtures/article-fixture';

const expectedCategory = categoryFixture.items[0];
const expectedArticles = articlesFixture.items;

const routeData = { data: { category: expectedCategory, articles: expectedArticles } };
const routerState = { params: { slug: expectedCategory.fields.slug } };
const client = new MockClient();

client.mockAsync('getEntry', expectedCategory);
client.mockAsync('getEntriesByCategory', expectedArticles);

describe('CategoryPage Component', () => {
  it('component should create ArticleList with expected articles', () => {
    const wrapper = mount(<CategoryPage route={routeData} />);
    const entries = wrapper.find('ArticleList').prop('entries');
    expect(entries).to.deep.equal(expectedArticles);
  });

  it('fetchData should return expected category and articles', async () => {
    const result = await CategoryPage.fetchData(client, routerState);
    expect(result.category).to.deep.equal(expectedCategory);
    expect(result.articles).to.deep.equal(expectedArticles);
  });

  it('fetchData should call client.getEntry with correct arguments', async () => {
    const args = [expectedCategory.fields.slug, 'category'];
    const spy = sinon.spy(client, 'getEntry');
    await CategoryPage.fetchData(client, routerState);
    expect(spy).to.have.been.calledWith(...args);
  });

  it('fetchData should call client.getEntriesByCategory with correct arguments', async () => {
    const args = [expectedCategory, 'basicArticle'];
    const spy = sinon.spy(client, 'getEntriesByCategory');
    await CategoryPage.fetchData(client, routerState);
    expect(spy).to.have.been.calledWith(...args);
  });
});
