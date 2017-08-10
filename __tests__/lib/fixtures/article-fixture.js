import slugify from 'slugify';
import { categoryFixture } from './category-fixture';

const [linkedCategory] = categoryFixture.items;

function makeArticle(name) {
  return {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 't9yfje9x18mx',
        },
      },
      id: `article-${name}-id`,
      type: 'Entry',
      createdAt: '2017-01-10T17:11:53.950Z',
      updatedAt: '2017-01-11T15:07:45.628Z',
      revision: 3,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'basicArticle',
        },
      },
      locale: 'en-US',
    },
    fields: {
      identifier: `Article ${name}`,
      pageTitle: `Basic Article ${name}`,
      publishedAt: '2017-02-11',
      slug: slugify(`Basic Article ${name}`),
      mainText: 'Article text.',
      authorName: 'Author Name',
      authorTitle: 'Author Title',
      footnotes: 'footnotes',
      linkedCategories: [
        {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: linkedCategory.sys.id,
          },
        },
      ],
    },
  };
}

const articleFixture = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    makeArticle('1'),
  ],
  includes: {
    Entry: [linkedCategory],
  },
};

const articlesFixture = {
  sys: {
    type: 'Array',
  },
  total: 2,
  skip: 0,
  limit: 100,
  items: [
    makeArticle('1'),
    makeArticle('2'),
  ],
  includes: {
    Entry: [linkedCategory],
  },
};

function mockArticles(quantity) {
  const articles = [];
  for (let i = 0; i < quantity; i++) { // eslint-disable-line no-plusplus
    articles.push(makeArticle(i));
  }
  return articles;
}

export {
  articleFixture,
  articlesFixture,
  mockArticles,
};
