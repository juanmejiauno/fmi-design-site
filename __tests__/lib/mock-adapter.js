import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import homepageFixture from './fixtures/homepage-fixture';
import spaceFixture from './fixtures/space-fixture';
import userFixture from './fixtures/user-fixture';
import { articleFixture, articlesFixture } from './fixtures/article-fixture';
import { basicPageFixture, pagesFixture } from './fixtures/basic-page-fixture';
import { categoryFixture } from './fixtures/category-fixture';

const mock = new MockAdapter(axios);

// TODO be smarter about creating these fixtures and wrapping them as contentful responses
const entriesSwitch = {
  one: {
    category: [200, categoryFixture],
    basicArticle: [200, articleFixture],
    basicPage: [200, basicPageFixture],
  },
  many: {
    basicArticle: [200, articlesFixture],
    basicPage: [200, pagesFixture],
    homePage: [200, homepageFixture],
  },
  default: [400],
};

mock
  .onGet('')
  .reply(() => [200, Object.create(spaceFixture)])
  .onGet(/entries\/(.*)/)
  .reply((req) => {
    const [fixture] = getUriSegments(req.url).slice(-1);
    return entriesSwitch.single[fixture];
  })
  .onGet('entries')
  .reply(({ params }) => getResponse(params))
  .onGet('/api/v1/user')
  .reply(200, {})
  .onPost('/api/v1/login')
  .reply(config => getLoginResponse(config))
  .onPost('/api/v1/logout')
  .reply([200, {}]);

function getResponse(params) {
  const fixtureName = params['sys.id'] ? params['sys.id'] : params.content_type;
  const fixtureQty = (params['sys.id'] || params['fields.slug']) ? 'one' : 'many';
  return entriesSwitch[fixtureQty][fixtureName] || entriesSwitch.default;
}

function getLoginResponse(config) {
  const { email, password } = JSON.parse(config.data);
  let response = [401, { message: { message: 'Invalid credentials.', details: 'Invalid credentials.' } }];

  if (email === 'james.muspratt@upstatement.com' && password === 'password') {
    response = [200, userFixture, { Cookie: 'ice.sid=12345' }];
  }

  return response;
}

function teardownMockAdapter() {
  return mock.restore();
}

function getUriSegments(url) {
  return url.split('/');
}

export { teardownMockAdapter, axios };
