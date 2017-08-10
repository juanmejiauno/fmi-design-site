/* eslint-disable global-require */

import { Component, PropTypes } from 'react';
import { get, has } from 'lodash';
import autobind from 'lib/autobind';
import logger from 'lib/logger';

const SUCCESS_MESSAGE_DURATION = 800;

class Session extends Component {
  constructor() {
    super(...arguments);

    const loginProgress = 'LOGGED_OUT';

    this.state = {
      user: null,
      loginProgress,
      error: null,
    };

    // if in a testing environment we want to use the fake axios adaptor
    if (process.env.NODE_ENV === 'test') {
      this.axios = require('__tests__/lib/mock-adapter').axios;
    } else {
      this.axios = require('axios');
    }

    autobind(this);
  }

  getChildContext() {
    return {
      session: {
        logout: this.logout,
        login: this.login,
        verifyLoggedIn: this.verifyLoggedIn,
        loginProgress: this.state.loginProgress,
        error: this.state.error,
      },
      user: this.state.user,
    };
  }

  componentDidMount() {
    // makes an api req to see if the user has already logged in
    // if logged in set state.user to the user returned by the payload
    this.verifyLoggedIn()
      .then((payload) => {
        this.setUser(get(payload, 'data.user'));
      })
      .catch(logger.warn);
  }

  /**
   * set the state of the component to have a logged in user
   *
   * @public
   * @param {object} user user from login api payload
   */
  setUser(user) {
    if (user) {
      this.setState({
        user,
        loginProgress: 'LOGGED_IN',
        error: null,
      });
      logger.info('logged in as', this.state.user);
    } else {
      logger.info('not logged in');
    }
  }

  verifyLoggedIn() {
    return this.axios({
      url: '/api/v1/user',
      method: 'get',
      timeout: 10000,
    });
  }

  /**
   * Attempts to login using creds then sets state.user or handles error messages
   *
   * @public
   * @param {object} creds - email and password for user
   *
   * @returns Promise
   */
  login(creds) {
    this.setState({ loginProgress: 'ATTEMPTING' });

    return this.sendLoginReq(creds)
      .then(this.handleLoginSuccess)
      .catch(this.handleLoginFail);
  }

  sendLoginReq({ email, password }) {
    return this.axios({
      url: '/api/v1/login',
      method: 'post',
      data: { email, password },
      timeout: 10000,
    });
  }

  /**
   * when the login api response is successful, show the success message and set state.user
   *
   * @public
   * @param {object} payload api response
   *
   * @return Promise
   */
  handleLoginSuccess(payload) {
    logger.info('request to login successful', payload);

    if (!this.verifyLoginStatusCode(payload)) {
      throw new Error('There was a problem with your login credentials.');
    }

    return this.showSuccessMessage()
      .then(() => {
        this.setUser(get(payload, 'data.user'));
        return true;
      });
  }

  /**
   * checks the payload for any error objects or an error status code
   *
   * @public
   * @param {object} payload payload from login api
   * @returns {boolean}
   */
  verifyLoginStatusCode(payload) {
    return payload.status === 200 && !('errors' in payload);
  }

  /**
   * used to show a success message for a duration of time after login
   *
   * @public
   * @returns {Promise} promise which resolves after
   */
  showSuccessMessage() {
    this.setState({ loginProgress: 'SUCCESS' });

    // timeout to display success message
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, SUCCESS_MESSAGE_DURATION);
    });
  }

  /**
   * handles error by assigning an error message to state and resetting loginProgress
   *
   * @public
   * @param {object} {errors} errors to display: email, password, and/or general
   */
  handleLoginFail(err) {
    logger.error('login failure', err);
    const status = get(err, 'response.status');

    const message = status === 401
      ? 'There was a problem with your login credentials.'
      : err.message;

    this.setState({
      error: message,
      loginProgress: 'ERROR',
    });

    return false;
  }

  logout() {
    return this.sendLogoutReq()
      .then(this.handleLogoutSuccess)
      .catch(this.handleLogoutFailure);
  }

  sendLogoutReq() {
    return this.axios({
      url: '/api/v1/logout',
      method: 'post',
      data: {},
      timeout: 10000,
    });
  }

  /**
   * if logout was successful, reset the state of the component
   *
   * @public
   * @param {object} payload login api response
   */
  handleLogoutSuccess(payload) {
    logger.info('logout request successful', payload);
    this.resetLoginState();
    logger.info('logged out', this.state.user);
  }

  /**
   * if the logout api request fails, let's still reset the component and delete the cookie
   * we don't want to leave the user logged in just because the api request fails
   *
   * @public
   * @param {error} err
   */
  handleLogoutFailure(err) {
    logger.error('logout request failed', err);

    // reset the login state and delete the cookie even if logout failed
    this.resetLoginState();
    logger.info('logged out', this.state.user);
  }

  resetLoginState() {
    this.deleteCookie();

    this.setState({
      user: null,
      loginProgress: 'LOGGED_OUT',
      error: null,
    });
  }

  deleteCookie() {
    document.cookie = `ice.sid=; expires=${Date('1970')}`;
  }

  render() {
    return has(this, 'props.children')
      ? this.props.children
      : null;
  }
}

Session.childContextTypes = {
  session: PropTypes.object,
  user: PropTypes.object,
};

export default Session;
