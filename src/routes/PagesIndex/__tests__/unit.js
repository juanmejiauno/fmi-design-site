import mount from 'enzyme/mount';
import MockClient from '__tests__/lib/mock-client';
import React from 'react';

import PagesIndex from 'routes/PagesIndex';
import { pagesFixture } from '__tests__/lib/fixtures/basic-page-fixture';

const expectedPages = pagesFixture.items;
const routeData = { data: { pages: expectedPages } };
const client = new MockClient();

client.mockAsync('getEntries', expectedPages);

describe('PagesIndex Component', () => {
  it('component should create EntryList with expected pages', () => {
    const wrapper = mount(<PagesIndex route={routeData} />);
    const entries = wrapper.find('EntryList').prop('entries');
    expect(entries).to.deep.equal(expectedPages);
  });

  it('fetchData should return the expected pages', async () => {
    const result = await PagesIndex.fetchData(client);
    expect(result).to.deep.equal({ pages: expectedPages });
  });

  it('fetchData should call client.getEntries with correct arguments', async () => {
    const args = [{ content_type: 'basicPage' }];
    const spy = sinon.spy(client, 'getEntries');
    await PagesIndex.fetchData(client);
    expect(spy).to.have.been.calledWith(...args);
  });
});
