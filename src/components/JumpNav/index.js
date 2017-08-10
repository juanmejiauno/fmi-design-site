import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';

const JumpNav = ({ links }, { router }) => {
  const location = router.location.pathname;
  return (
    <nav className="jump-nav">
      <h4 className="jump-nav__head">Jump to a section</h4>
      <ul className="jump-nav__list">
        {
          links.map((link) => {
            return (
              <li key={link.target} className="jump-nav__item">
                <Link className="jump-nav__link link-jump-nav" to={`${location}#${link.target}`}>
                  {link.label}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

JumpNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    target: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

JumpNav.contextTypes = {
  router: PropTypes.object,
};

export default JumpNav;
