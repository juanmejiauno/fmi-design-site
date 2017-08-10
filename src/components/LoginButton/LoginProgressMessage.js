import React, { PropTypes } from 'react';

function Attempting() {
  return (
    <div className="login-dialog__pad login-dialog__status login-dialog__status--attempting-login">
      <h2 className="login-dialog__head">Please Wait</h2>
      <h3 className="login-dialog__subhead">Signing into your account.</h3>
      <img className="login-dialog__spinner" src="/img/progress.svg" alt="Please wait" />
    </div>
  );
}

function Success() {
  return (
    <div className="login-dialog__pad login-dialog__status login-dialog__status--success">
      <h2 className="login-dialog__head">Please Wait</h2>
      <h3 className="login-dialog__subhead">You are now logged in.</h3>
      <img className="login-dialog__spinner" src="/img/progress.svg" alt="Please wait" />
    </div>
  );
}

function LoggedIn() {
  return (
    <span>you are already logged in</span>
  );
}

/**
 * displays login spinner or login success message.
 *
 * @public
 * @param {string} {loginProgress='LOGGED_OUT'} state of login from LoginUI
 */
const LoginProgressMessage = ({ loginProgress = 'LOGGED_OUT' }) => {
  if (loginProgress === 'ATTEMPTING') {
    return (<Attempting />);
  } else if (loginProgress === 'SUCCESS') {
    return (<Success />);
  } else if (loginProgress === 'LOGGED_IN') {
    return (<LoggedIn />);
  }

  return null;
};

LoginProgressMessage.propTypes = {
  loginProgress: PropTypes.string.isRequired,
};

export default LoginProgressMessage;
