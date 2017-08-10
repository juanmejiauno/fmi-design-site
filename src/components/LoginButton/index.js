import React from 'react';
import autobind from 'lib/autobind';
import AriaModal from 'react-aria-modal';
import get from 'lodash/get';
import LoginForm from './LoginForm.js';

class LoginButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);
    this.state = {
      shouldShowModal: this.checkLoginQuery(),
    };
  }

  openModal() {
    this.setState({ shouldShowModal: true });
  }

  closeModal() {
    this.setState(
      { hasEntered: false },
      () => {
        setTimeout(() => {
          this.setState({
            shouldShowModal: false,
          });
        }, 300);
      },
    );
  }

  onEnter() {
    this.setState({ hasEntered: true });
  }

  checkLoginQuery() {
    return Boolean(get(this, 'context.router.location.query.login'));
  }

  invokeChildren() {
    const renderer = this.props.children;
    return typeof renderer === 'function'
      ? renderer(this.props, this.context)
      : null;
  }

  render() {
    const { user } = this.context;
    const Button = this.props.type || 'button';
    if (user) return this.invokeChildren();
    let modalClassName = 'login-dialog modal-content--animated';
    let underlayClassName = 'modal-underlay--animated';
    if (this.state.hasEntered) {
      modalClassName += ' modal-content--animated--has-entered';
      underlayClassName += ' modal-underlay--animated--has-entered';
    }

    return (
      <div className="login-logout">
        <div className="login">
          <Button id="login-open-modal-button" className="navbar__link navbar__link--button" onClick={this.openModal}>
            Log In
          </Button>
          <AriaModal
            mounted={this.state.shouldShowModal}
            onEnter={this.onEnter}
            onExit={this.closeModal}
            titleText="login modal"
            initialFocus=".js-login-email"
            dialogClass={modalClassName}
            underlayClass={underlayClassName}
            underlayColor="rgba(255,255,255,0.75)"
            verticallyCenter
          >
            <button id="login-close-modal-button" className="login-dialog__close-btn" onClick={this.closeModal}>close dialog</button>
            <LoginForm />
          </AriaModal>
        </div>
      </div>
    );
  }
}

LoginButton.contextTypes = {
  router: React.PropTypes.object,
  session: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default LoginButton;
