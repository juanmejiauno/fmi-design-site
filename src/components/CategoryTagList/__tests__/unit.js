import { mount } from 'enzyme';

import React from 'react';

import CategoryTagList from 'components/CategoryTagList';
import { categoriesFixture } from '__tests__/lib/fixtures/category-fixture';

const categories = categoriesFixture.items;

describe('CategoryTagList component', () => {
  it('should return null if there are no categories passed in', () => {
    const wrapper = mount(<CategoryTagList />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should contain li for each file', () => {
    const wrapper = mount(<CategoryTagList categories={categories} />);

    const items = wrapper.find('li');

    expect(items).to.have.length(categories.length);
  });

  it('should display entry title and link to entry', () => {
    const [firstCategory] = categories;

    const wrapper = mount(<CategoryTagList categories={categories} />);
    const text = wrapper.find('li').first().find('a').text();
    const link = wrapper.find('Link').first().props().to;

    expect(text).to.have.string(firstCategory.fields.pageTitle);
    expect(link).to.have.string(`topic/${firstCategory.fields.slug}`);
  });
});
