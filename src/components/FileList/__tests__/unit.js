import { mount } from 'enzyme';

import React from 'react';
import FileList from 'components/FileList';
import assetFixture from '__tests__/lib/fixtures/asset-fixture';

describe('FileList component', () => {
  it('should return null if there are no files passed in', () => {
    const wrapper = mount(<FileList />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should contain li for each file', () => {
    const files = [assetFixture];
    const wrapper = mount(<FileList files={files} />);

    const items = wrapper.find('li');

    expect(items).to.have.length(files.length);
  });

  it('should display heading', () => {
    const files = [assetFixture];
    const wrapper = mount(<FileList files={files} heading="heading" />);
    const heading = wrapper.find('.js-filelist-heading').text();

    expect(heading).to.have.string('heading');
  });
});
