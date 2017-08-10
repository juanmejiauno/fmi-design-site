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
                <li className="primary-footer__nav-item primary-footer__nav-item--testing">
                  <Link className="primary-footer__nav-link" to="/genomic-testing">Genomic Testing</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--insights">
                  <Link className="primary-footer__nav-link" to="/insights-and-partnerships">Insights &amp;&nbsp;Partnerships</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--about">
                  <Link className="primary-footer__nav-link" to={'/about'}>About Us</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--blog">
                  <Link className="primary-footer__nav-link" to={'/blog'}>Blog</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--investors">
                  <a className="primary-footer__nav-link" href="http://investors.foundationmedicine.com">Press &amp;&nbsp;Investors</a>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--careers">
                  <Link className="primary-footer__nav-link" to={'/about/careers'}>Careers</Link>
                </li>
                <li className="primary-footer__nav-item primary-footer__nav-item--contact">
                  <Link className="primary-footer__nav-link" to={'/contact'}>Contact Us</Link>
                </li>
              </ul>

              <div className="primary-footer__sets">

                <div className="primary-footer__set">
                  <h3 className="primary-footer__h">Genomic Testing</h3>
                  <ul className="primary-footer__mini-list">
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/genomic-testing">Testing Overview</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/genomic-testing#support-services">Financial Services &amp;&nbsp;Support</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" href="/genomic-testing/order">Order a Test</Link>
                    </li>
                  </ul>
                </div>

                <div className="primary-footer__set">
                  <h3 className="primary-footer__h">Insights &amp; Partnerships</h3>
                  <ul className="primary-footer__mini-list">
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/insights-and-partnerships">Overview</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/insights-and-partnerships/institutional-partnerships">Institutional Partnerships</Link>
                    </li>
                    <li className="primary-footer__mini-item">
                      <Link className="primary-footer__mini-link" to="/insights-and-partnerships/biopharma-partnerships">Biopharma Partnerships</Link>
                    </li>
                  </ul>
                </div>

              </div>

            </div>


            <div className="primary-footer__social">
              <ul className="primary-footer__social-list">
                <li className="primary-footer__social-item">
                  <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/company/foundation-medicine" className="primary-footer__social-link primary-footer__social-link--linkedin">LinkedIn</a>
                </li>
                <li className="primary-footer__social-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/foundationatcg" className="primary-footer__social-link primary-footer__social-link--twitter">Twitter</a>
                </li>
                <li className="primary-footer__social-item">
                  <a target="_blank" rel="noopener noreferrer" href="http://youtube.com/FoundationMedicine" className="primary-footer__social-link primary-footer__social-link--youtube">YouTube</a>
                </li>
              </ul>
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
