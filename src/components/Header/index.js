import React from 'react';
import Link from 'components/Link';
import Navigation from 'components/Navigation';

function Header() {
  return (
    <div className="primary-header-wrapper">
      <a href="#main-content" id="skip-to-content" className="skip-to-content js-skip-to-content">skip to content</a>
      <header className="primary-header">
        <div className="primary-header__content base-layout">
          <div className="primary-header__logo">
            <h1 className="primary-header__logo-h1">
              <Link className="primary-header__logo-h1-link" to="/">Foundation Medicine</Link>
            </h1>
          </div>
          <Navigation />
        </div>
      </header>
    </div>
  );
}

export default Header;
