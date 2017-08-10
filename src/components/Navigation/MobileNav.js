import React from 'react';
import AriaModal from 'react-aria-modal';
import LoginButton from 'components/LoginButton';
import UserLinks from 'components/Navigation/UserLinks';
import Link from 'components/Link';
import autobind from 'lib/autobind';

const DASHBOARD_LINK = process.env.dashboardLink;

function userButton() {
  return (
    <a className="mobile-nav__apps-link" href={DASHBOARD_LINK}>Apps</a>
  );
}

function renderMenuitem(item) {
  const prop = item.internal ? 'to' : 'href';
  return (
    <li key={item.text}>
      <Link className="mobile-nav__menu-link" activeClassName="mobile-nav__menu-link--current" {...{ [prop]: item.href }}>{item.text}</Link>
      {item.submenu && (
        <div className="mobile-nav__menu-section">
          { item.submenu.map(renderSection) }
        </div>
      )}
    </li>
  );
}

function renderSection(section, i) {
  const modifier = i === 0 ? 'top' : 'bottom';
  return (
    <div key={section.heading} className={`mobile-nav__menu-subsection mobile-nav__menu-subsection--${modifier}`}>
      <p className="mobile-nav__section-subheading">{section.heading}</p>
      <ul className="mobile-nav__section-list">
        { section.items.map(renderMenuitem) }
      </ul>
    </div>
  );
}

class MobileNav extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);
    this.unlisten = null;
    this.state = { isOpen: false };
  }

  openMenu() {
    this.setState({ isOpen: true });
  }

  closeMenu() {
    this.setState(
      { hasEntered: false },
      () => {
        setTimeout(() => {
          this.setState({
            isOpen: false,
          });
        }, 300);
      },
    );
  }

  componentDidMount() {
    if (this.context.router) {
      this.unlisten = this.context.router.listen(this.closeMenu);
    }
  }

  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }

  onEnter() {
    this.setState({ hasEntered: true });
  }

  render() {
    let modalClassName = 'modal-content--animated';
    let underlayClassName = 'modal-underlay--animated';
    if (this.state.hasEntered) {
      modalClassName += ' modal-content--animated--has-entered';
      underlayClassName += ' modal-underlay--animated--has-entered';
    }

    return (
      <div className="mobile-nav">
        <div className="mobile-navbar">
          <LoginButton>{ userButton }</LoginButton>
          <button onClick={this.openMenu} className="mobile-nav__menu-button">Menu</button>
        </div>

        <AriaModal
          mounted={this.state.isOpen}
          onEnter={this.onEnter}
          onExit={this.closeMenu}
          underlayClass={underlayClassName}
          titleText={'site navigation menu'}
        >
          <nav className={`js-mobile-nav mobile-nav__overlay ${modalClassName}`} tabIndex="0">

            <button className="mobile-nav__close-btn" onClick={this.closeMenu}>Close</button>

            <div className="mobile-nav__logo">
              <h1 className="mobile-nav__logo-h1">
                <Link className="mobile-nav__logo-link" to="/">Foundation Medicine</Link>
              </h1>
            </div>

            <div className="mobile-nav__content">
              <ul className="mobile-nav__menu-items">
                <UserLinks onLogout={this.closeMenu} />
                { this.props.content.map(renderMenuitem) }
              </ul>
            </div>

          </nav>
        </AriaModal>
      </div>
    );
  }
}

MobileNav.contextTypes = {
  router: React.PropTypes.object,
};

export default MobileNav;
