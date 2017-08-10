import React, { Component, PropTypes } from 'react';
import { sendLoginEvent } from 'lib/analytics';
import { get } from 'lodash';

import autobind from 'lib/autobind';
import LoginProgressMessage from './LoginProgressMessage';

const DASHBOARD_LINK = process.env.dashboardLink;
const SIGNUP_LINK = process.env.signupLink;
const FORGOT_PASSWORD_LINK = process.env.forgotPasswordLink;

class LoginForm extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      email: null,
      password: null,
    };

    autobind(this);
  }

  componentDidMount() {
    document
      .querySelector('#login-email')
      .focus();
  }

  /**
  * try to login through the proxy api
  * updates login progress by updating this.state.loginProgress
  * submits requests to proxy and handles errors
  *
  * @public
  * @param {event} evt
  */
  attemptLogin(evt) {
    evt.preventDefault();

    const creds = {
      email: this.state.email,
      password: this.state.password,
    };

    this
      .context
      .session
      .login(creds)
      .then((success) => {
        if (success) {
          sendLoginEvent();
          window.location = DASHBOARD_LINK;
        }
      });
  }

  updatePassword(evt) {
    this.setState({ password: evt.target.value });
  }

  updateEmail(evt) {
    this.setState({ email: evt.target.value });
  }

  isDisabled() {
    const { email, password } = this.state;
    return !(email && email.length && (password && password.length));
  }

  render() {
    const defaultEmail = get(this, 'state.email') || get(this, 'context.user.email');
    const generalError = get(this, 'context.session.error');
    const loginProgress = get(this, 'context.session.loginProgress');
    const showProgress = !['LOGGED_OUT', 'ERROR'].includes(loginProgress);

    return showProgress
      ? <LoginProgressMessage loginProgress={loginProgress} />
      : <div className="login-dialog__content">
        <form
          className="login-dialog__pad login-dialog__login-form"
          onSubmit={this.attemptLogin}
        >
          <h2 className="login-dialog__head">Welcome Back</h2>
          <h3 className="login-dialog__subhead">Sign into your account.</h3>

          <div className="login-dialog__fields">
            {generalError && <p className="login-dialog__general-error">
              {generalError}
            </p>}

            <div className="login-dialog__field-set">
              <label
                className="login-dialog__label login-dialog__label--email label"
                htmlFor="login-email"
              >
                Email address
              </label>
              <input
                type="email"
                name="login-email"
                id="login-email"
                className="login-dialog__input login-dialog__input--email js-login-email"
                defaultValue={defaultEmail}
                onChange={this.updateEmail}
                placeholder=""
                required
              />
            </div>

            <div className="login-dialog__field-set">
              <label
                className="login-dialog__label login-dialog__label--password label"
                htmlFor="login-password"
              >
                Password
              </label>
              <input
                type="password"
                name="login-password"
                id="login-password"
                className="login-dialog__input login-dialog__input--password js-login-password"
                placeholder=""
                onChange={this.updatePassword}
                required
              />
            </div>

            <p className="login-dialog__forgot">
              <a className="login-dialog__forgot-link" href={FORGOT_PASSWORD_LINK}>
                Forgot password?
              </a>
            </p>
          </div>
          <p className="login-dialog__login-p"><button className="button login-dialog__login-button" type="submit" disabled={this.isDisabled()}>Log In</button></p>
        </form>

        <div className="login-dialog__pad login-dialog__sign-up-prompt">
          <div>
            <h3 className="login-dialog__sign-up-head">
              Don’t Have an Account?
            </h3>
            <p>
              <em>You can sign up online</em>
            </p>
          </div>

          <p>
            <a className="login-dialog__sign-up-link" href={SIGNUP_LINK}>
              Sign up
            </a>
          </p>
        </div>
      </div>;
  }
}

LoginForm.contextTypes = {
  session: PropTypes.object.isRequired,
  user: PropTypes.object,
};

export default LoginForm;
