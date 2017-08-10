import assetFixture from './asset-fixture';

function makePerson(name) {
  return {
    sys: {
      space: {
        sys: {
          type: 'Link',
          linkType: 'Space',
          id: 't9yfje9x18mx',
        },
      },
      id: `person-${name}-id`,
      type: 'Entry',
      createdAt: '2017-01-10T17:11:53.950Z',
      updatedAt: '2017-01-11T15:07:45.628Z',
      revision: name,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'person',
        },
      },
      locale: 'en-US',
    },
    fields: {
      name,
      description: `description of ${name}`,
      slug: name,
      image: assetFixture,
    },
  };
}

const personFixture = makePerson('nick');

export { makePerson, personFixture };
