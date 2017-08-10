import { mount } from 'enzyme';

import React from 'react';
import EntryList from 'components/EntryList';
import { pagesFixture } from '__tests__/lib/fixtures/basic-page-fixture';

describe('EntryList component', () => {
  it('should return null if there are no entries passed in', () => {
    const wrapper = mount(<EntryList />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should contain li for each file', () => {
    const entries = pagesFixture.items;
    const wrapper = mount(<EntryList entries={entries} />);

    const items = wrapper.find('li');

    expect(items).to.have.length(entries.length);
  });

  it('should display entry title and link to entry', () => {
    const entries = pagesFixture.items;
    const [firstEntry] = entries;

    const wrapper = mount(<EntryList entries={entries} />);
    const heading = wrapper.find('li').first().find('h2 a').text();
    const link = wrapper.find('Link').first().props().to;

    expect(heading).to.have.string(firstEntry.fields.pageTitle);
    expect(link).to.have.string(`pages/${firstEntry.fields.slug}`);
  });
});
