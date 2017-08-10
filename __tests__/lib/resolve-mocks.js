import ContentfulClient from 'lib/contentful';

const client = new ContentfulClient();

function mockProps(props) {
  const location = { query: { } };
  return Object.assign({}, { client, location }, props);
}

export { client, mockProps };
