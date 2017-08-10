import assetFixture from './asset-fixture';

function makeMediaModule(name, youtubeLink, pullQuote = false) {
  const response = {
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
          id: 'mediaModule',
        },
      },
      locale: 'en-US',
    },
    fields: {
      microHeading: 'Lorem ipsum',
      heading: 'Lorem ipsum',
      styleAsPullQuote: Boolean(pullQuote),
      tease: 'Lorem ipsum',
      image: assetFixture,
    },
  };
  if (youtubeLink) response.fields.youtubeLink = youtubeLink;
  return response;
}

function makeResponse(...items) {
  return {
    sys: { type: 'Array' },
    total: items.length,
    skip: 0,
    limit: 100,
    items: [...items],
  };
}

const mediaModuleFixtureNoVideo = makeMediaModule('2', null, false);
const mediaModuleFixtureVideo = makeMediaModule('1', 'https://www.youtube.com/watch?v=1BOERqwHcEo', true);
const mediaModuleResponse = makeResponse(mediaModuleFixtureNoVideo, mediaModuleFixtureVideo);

export { mediaModuleFixtureNoVideo, mediaModuleFixtureVideo, mediaModuleResponse };
