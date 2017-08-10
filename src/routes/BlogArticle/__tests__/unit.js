import { wrapEntryCollection } from 'contentful/dist/entities/entry';
import MockClient from '__tests__/lib/mock-client';

import BlogArticle from 'routes/BlogArticle';
import { articleFixture } from '__tests__/lib/fixtures/article-fixture';

const client = new MockClient();
const expectedArticle = wrapEntryCollection(articleFixture, true).items[0];
const routerState = { params: { slug: expectedArticle.fields.slug } };

client.mockAsync('getEntry', expectedArticle);

describe('BlogArticle Component', () => {
  it('fetchData should return expected article from Contentful', async () => {
    const expectation = { article: expectedArticle };
    const result = await BlogArticle.fetchData(client, routerState);
    expect(result).to.deep.equal(expectation);
  });

  it('fetchData should call client.getEntry with correct arguments', async () => {
    const args = [expectedArticle.fields.slug, 'basicArticle'];
    const spy = sinon.spy(client, 'getEntry');
    await BlogArticle.fetchData(client, routerState);
    expect(spy).to.have.been.calledWith(...args);
  });
});
