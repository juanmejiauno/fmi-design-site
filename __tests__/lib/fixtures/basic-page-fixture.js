import slugify from 'slugify';
import assetFixture from './asset-fixture';

function makePage(name) {
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
      identifier: 'Basic',
      pageTitle: `page ${name} title`,
      slug: slugify(`page ${name} title`),
      subheading: 'subheading',
      mainText: `page ${name} main text`,
      introText: 'introduction text',
      faqs: [
        {
          fields: {
            id: 1234,
            question: 'question?',
            answer: 'answer',
            slug: 'question-answer',
          },
        },
      ],
      sidebarFiles: [
        {
          sys: {
            type: 'Link',
            linkType: 'Asset',
            id: assetFixture.sys.id,
          },
        },
      ],
    },
  };
}

const pagesFixture = {
  sys: {
    type: 'Array',
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    makePage('1'),
    makePage('2'),
  ],
};

const basicPageFixture = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    makePage('1'),
  ],
  includes: {
    Asset: [assetFixture],
  },
};

export {
  pagesFixture,
  basicPageFixture,
};
