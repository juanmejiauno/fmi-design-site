import React from 'react';
import AriaModal from 'react-aria-modal';

import autobind from 'lib/autobind';

class BrowseOpenPosition extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this, [
      'handleAnchorClick',
      'handleFormSubmit',
      'isLoggedIn',
      'closeModal',
      'composeWithCssClasses',
      'changeAbsoluteLocationUrl',
    ]);
    Object.assign(this, {
      url: 'https://careers-foundationmedicine.icims.com',
      state: {
        shouldShowModal: false,
        hasEntered: false,
      },
    });
  }

  displayModal(shouldShowModal) {
    this.setState({ shouldShowModal });
  }

  closeModal() {
    this.setState({
      hasEntered: false,
    }, () => {
      setTimeout(() => {
        this.setState({ shouldShowModal: false });
      }, 300);
    });
  }

  composeWithCssClasses(hasEntered = false, cssDefaultClasses = '', cssHasEnteredClasses = '') {
    return `${cssDefaultClasses} ${!hasEntered
      ? ''
      : cssHasEnteredClasses}`;
  }

  isLoggedIn(status = 'LOGGED_OUT') {
    return status === 'LOGGED_IN';
  }

  handleAnchorClick(event) {
    event.preventDefault();
    this.displayModal(true);
  }

  changeAbsoluteLocationUrl(url) {
    location.href = url;
  }

  async handleFormSubmit(event) {
    event.preventDefault();

    const {
      session: {
        logout,
        loginProgress,
      },
    } = this.context;

    this.isLoggedIn(loginProgress) && await logout();
    this.changeAbsoluteLocationUrl(this.url);
  }

  render() {
    const {
      session: {
        loginProgress,
      },
    } = this.context;
    const { hasEntered } = this.state;
    const modalClassName = this.composeWithCssClasses(hasEntered, 'login-dialog modal-content--animated browse-open-position', 'modal-content--animated--has-entered');
    const underlayClassName = this.composeWithCssClasses(hasEntered, 'modal-underlay--animated`, `modal-underlay--animated--has-entered');

    return (
      <section className="cta">
        <AriaModal
          focusDialog
          verticallyCenter
          titleText="Leaving page"
          mounted={this.state.shouldShowModal}
          onEnter={() => {
            this.setState({ hasEntered: true });
          }}
          onExit={this.closeModal}
          initialFocus=".outside-continue-button"
          dialogClass={modalClassName}
          underlayClass={underlayClassName}
          underlayColor="rgba(255,255,255,0.75)"
        >
          <button
            id="login-close-modal-button"
            className="login-dialog__close-btn"
            onClick={this.closeModal}
          >close dialog</button>
          <div className="login-dialog__content">
            <form
              className="login-dialog__pad login-dialog__login-form"
              onSubmit={this.handleFormSubmit}
            >
              <h2 className="login-dialog__head">Now leaving</h2>
              <h3 className="login-dialog__subhead">You are now leaving Foundation Medicine&apos;s website for an external job portal.{this.isLoggedIn(loginProgress) && ' For security purposes, you are being logged out of you app dashboard.'}</h3>
              <p className="login-dialog__login-p">
                <button className="button login-dialog__login-button" type="submit">Continue</button>
              </p>
            </form>
          </div>
        </AriaModal>
        <p className="cta__desc line-under">Browse open positions</p>
        <p>
          <a href={this.url} onClick={this.handleAnchorClick} className="link-cta-big">Job Listings</a>
        </p>
      </section>
    );
  }
}

BrowseOpenPosition.contextTypes = {
  session: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default BrowseOpenPosition;
