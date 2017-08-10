/* eslint-disable react/react-in-jsx-scope */

import { mount } from 'enzyme';
import Session from 'components/Session';
import data from '__tests__/lib/fixtures/user-fixture';

describe('Session component: componentDidMount', () => {
  it('should call verifyLoggedIn', () => {
    const verifySpy = sinon.spy(Session.prototype, 'verifyLoggedIn');
    mount(<Session />);

    expect(verifySpy.calledOnce).to.equal(true);

    verifySpy.restore();
  });
});

describe('Session component: verifyLoggedIn', () => {
  it('should send a get request to /api/v1/user with axios', async () => {
    const session = new Session();
    const axiosSpy = sinon.spy(session, 'axios');

    const expectedRequest = {
      url: '/api/v1/user',
      method: 'get',
      timeout: 10000,
    };

    await session.verifyLoggedIn();

    expect(axiosSpy.calledWith(expectedRequest)).to.equal(true);

    axiosSpy.restore();
  });
});

describe('Session component: setUser', () => {
  it('should set state.user to user and state.loginProgress to LOGGED_IN when a user is passed in', () => {
    const wrapper = mount(<Session />);

    wrapper.instance().setUser(data.user);

    expect(wrapper.state('loginProgress')).to.equal('LOGGED_IN');
    expect(wrapper.state('user')).to.deep.equal(data.user);
  });

  it('should not set state.user and state.loginProgress when no user is passed in', () => {
    const wrapper = mount(<Session />);

    wrapper.instance().setUser();

    expect(wrapper.state('loginProgress')).to.equal('LOGGED_OUT');
    expect(wrapper.state('user')).to.be.null;
  });
});
