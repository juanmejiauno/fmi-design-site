import MockClient from '__tests__/lib/mock-client';

import BasicPage from 'routes/BasicPage';
import { basicPageFixture } from '__tests__/lib/fixtures/basic-page-fixture';

const client = new MockClient();
const expectedPage = basicPageFixture.items[0];
const routerState = { params: { slug: expectedPage.fields.slug } };

client.mockAsync('getEntry', expectedPage);

describe('BasicPage Component', () => {
  it('fetchData should return expected page from Contentful', async () => {
    const expectation = { page: expectedPage };
    const result = await BasicPage.fetchData(client, routerState);
    expect(result).to.deep.equal(expectation);
  });

  it('fetchData should call client.getEntry with the correct arguments', async () => {
    const args = [expectedPage.fields.slug, 'basicPage'];
    const spy = sinon.spy(client, 'getEntry');
    await BasicPage.fetchData(client, routerState);
    expect(spy).to.have.been.calledWith(...args);
  });
});
