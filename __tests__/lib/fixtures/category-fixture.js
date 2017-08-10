import slugify from 'slugify';

function makeCategory(name) {
  return {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 't9yfje9x18mx',
        },
      },
      id: `page-${name}-id`,
      type: 'Entry',
      createdAt: '2017-01-10T17:11:53.950Z',
      updatedAt: '2017-01-11T15:07:45.628Z',
      revision: name,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'basicPage',
        },
      },
      locale: 'en-US',
    },
    fields: {
      identifier: 'Category',
      pageTitle: `category ${name}`,
      slug: slugify(`category ${name}`),
      introText: 'introduction text',
    },
  };
}

const categoryFixture = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    makeCategory('pharma'),
  ],
};

const categoriesFixture = {
  sys: {
    type: 'Array',
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    makeCategory('pharma'),
    makeCategory('patients'),
  ],
};

export {
  categoryFixture,
  categoriesFixture,
};
