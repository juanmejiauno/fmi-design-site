import { sanitizeData } from 'lib/sanitize';
import * as _ from 'lib/route-data';
import mockRenderProps from '__tests__/lib/mock-render-props';
import MockClient from '__tests__/lib/mock-client';

import homeFixture from '__tests__/lib/fixtures/homepage-fixture';

const client = new MockClient();
const homeEntry = homeFixture.items[0];

client.mockAsync('getSingleton', homeFixture.items[0]);

/***********************************
  getDataFromRoutes
***********************************/

describe('getDataFromRoutes', () => {
  it('should fetch data for all routes', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const data = await _.getDataFromRoutes(client, renderProps);
    const expectation = [null, null, { page: homeEntry }];
    expect(data).to.deep.equal(expectation);
  });
});

/***********************************
  addDataToRoutes
***********************************/

describe('addDataToRoutes', () => {
  it('should add route data to their respective route objects', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const data = await _.getDataFromRoutes(client, renderProps);
    _.addDataToRoutes(renderProps, data);
    data.forEach((value, i) => {
      expect(renderProps.routes[i].data).to.deep.equal(value);
    });
  });
});


/***********************************
  createPreload
***********************************/

describe('createPreload', () => {
  it('should stringify the payload as expected', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const data = await _.getDataFromRoutes(client, renderProps);
    const preload = _.createPreload(data);
    const expectation = JSON.stringify(sanitizeData(data.slice(1), 2));
    expect(preload).to.equal(expectation);
  });
});

/***********************************
  createOnEnter
***********************************/

describe('createOnEnter', () => {
  const onEnter = _.createOnEnter(client);

  it('should return a function', () => {
    expect(typeof onEnter).to.equal('function');
  });

  it('onEnter should prefer PRELOAD_DATA', async () => {
    const PRELOAD_DATA = '__PRELOADED_DATA__';
    const renderProps = await mockRenderProps(client, '/');
    const data = await _.getDataFromRoutes(client, renderProps);

    global.window = { [PRELOAD_DATA]: data };

    return new Promise((resolve) => {
      const route = renderProps.routes[2];
      const routeData = data[2];

      onEnter.call(renderProps.routes[2], renderProps, null, () => {
        expect(route.data).to.deep.equal(routeData);
        delete global.window[PRELOAD_DATA];
        resolve();
      });
    });
  });

  it('onEnter should call fetchData when no PRELOAD_DATA', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const route = renderProps.routes[2];
    const fetchDataSpy = sinon.spy(route.component, 'fetchData');
    return new Promise((resolve) => {
      onEnter.call(route, renderProps, null, () => {
        expect(fetchDataSpy).to.have.been.called;
        resolve();
      });
    });
  });

  it('onEnter should fetch expected data when no PRELOAD_DATA', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const data = await _.getDataFromRoutes(client, renderProps);
    const route = renderProps.routes[2];
    const routeData = data[2];
    return new Promise((resolve) => {
      onEnter.call(route, renderProps, null, () => {
        expect(route.data).to.deep.equal(routeData);
        resolve();
      });
    });
  });

  it('onEnter should redirect on error', async () => {
    const renderProps = await mockRenderProps(client, '/');
    const route = renderProps.routes[2];
    const replaceSpy = sinon.spy();
    route.component.fetchData = () => { throw new Error(); };
    return new Promise((resolve) => {
      onEnter.call(route, renderProps, replaceSpy, () => {
        expect(replaceSpy).to.have.been.calledWith({
          pathname: '/error',
          query: {
            status: 404,
            message: 'Resource not found.',
          },
        });
        resolve();
      });
    });
  });
});
