import React from 'react';
import Link from 'components/Link';

const Footer = () => (
  <footer className="primary-footer">
    <div className="primary-footer__content base-layout">

      <div className="primary-footer__row">

        <div className="primary-footer__logo">
          <h1 className="primary-footer__logo-h1">
            <Link className="primary-footer__logo-h1-link" to="/">Foundation Medicine</Link>
          </h1>
        </div>

        <nav className="primary-footer__nav">

          <div className="primary-footer__nav-content">
            <div className="primary-footer__nav-links">

              <ul className="primary-footer__nav-list">
                <li className="primary-footer__nav-item primary-footer__nav-item--strategy">
                  <Link className="primary-footer__nav-link" to="/#">Strategy</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--guidance">
                  <Link className="primary-footer__nav-link" to="/#">Guidance</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--assets">
                  <Link className="primary-footer__nav-link" to="/#">Assets</Link>
                </li>
              </ul>

              <div className="primary-footer__sets">

                <div className="primary-footer__set">
                  <h3 className="primary-footer__h">Strategy</h3>
                  <ul className="primary-footer__mini-list">
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/strategy/design-principles">Design Principles</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/strategy/customer-insights">Customer Insights</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" href="/strategy/brand-architecture">Brand Architecture</Link>
                    </li>
                  </ul>
                </div>

                <div className="primary-footer__set">
                  <h3 className="primary-footer__h">Guidance</h3>
                  <ul className="primary-footer__mini-list">
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/guidance/corporate-logos">Corporate Logos</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/guidance/product-logos">Product Logos</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/guidance/type">Type</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/guidance/photography">Photography</Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </nav>
      </div>

      <div className="primary-footer__legal-privacy">
        <p className="primary-footer__legal"><Link className="primary-footer__legal-link" to="/pages/legal/">Legal &amp; Privacy</Link> | <Link className="primary-footer__legal-link" to="/pages/licenses">Licenses</Link></p>
        <p className="primary-footer__legal"><span className="primary-footer__legal__copyright">© 2017 Foundation Medicine, Inc.</span> <span className="primary-footer__legal__version"> v.{process.env.version}</span></p>
      </div>

    </div>
  </footer>
);

export default Footer;
