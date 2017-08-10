import { mount } from 'enzyme';
import Home from 'routes/Home';
import homeFixture from '__tests__/lib/fixtures/homepage-fixture';
import MockClient from '__tests__/lib/mock-client';
import React from 'react';

const client = new MockClient();
const routeData = { data: { page: homeFixture.items[0] } };

client.mockAsync('getSingleton', homeFixture);

describe('Home Component', () => {
  it('fetchData should call client.getSingleton with expected arguments', async () => {
    const args = ['homePage', { include: 2 }];
    const spy = sinon.spy(client, 'getSingleton');
    await Home.fetchData(client);
    expect(spy).to.have.been.calledWith(...args);
  });

  it('fetchData should return expected content', async () => {
    const expectation = { page: homeFixture };
    const result = await Home.fetchData(client);
    expect(result).to.deep.equal(expectation);
  });

  it('component should render 3 home modules', () => {
    const wrapper = mount(<Home route={routeData} />);
    const homeModules = wrapper.find('FlexModule');
    expect(homeModules.length).to.equal(3);
  });

  it('component should render 6 story blocks', () => {
    const wrapper = mount(<Home route={routeData} />);
    const storyBlocks = wrapper.find('StoryBlock');
    expect(storyBlocks.length).to.equal(6);
  });
});
