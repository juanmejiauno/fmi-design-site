function makeStoryBlock(name) {
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
          id: 'storyBlock',
        },
      },
      locale: 'en-US',
    },
    fields: {
      microHeading: 'Lorem ipsum',
      heading: 'Lorem ipsum',
      text: 'Lorem Ipsum',
    },
  };
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

const storyBlockFixture = makeStoryBlock('1');
const storyBlockResponse = makeResponse(storyBlockFixture);

export { storyBlockFixture, storyBlockResponse };
