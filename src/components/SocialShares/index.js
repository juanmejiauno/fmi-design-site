import React, { PropTypes } from 'react';
import AriaShareButton from './AriaShareButton';

const defaultPlatforms = [
  'Facebook',
  'Twitter',
  'GooglePlus',
  'Linkedin',
];

/**
 * renders array of list items with individual social share buttons from defaultPlatforms
 *
 * @public
 * @param {object} props
 * @returns {ReactElement}
 */
function createShareButtons(props) {
  return defaultPlatforms.map(platform => (
    <li className="social-shares__item" key={`${platform}`}>
      <AriaShareButton platform={platform} {...props} />
    </li>
  ));
}

/**
 * Component that renders a list of social media share buttons
 * buttons to render are set by const defaultPlatforms
 *
 * @public
 * @param {object} props
 * @returns {ReactElement}
 */
const SocialShares = (props) => {
  return (
    <div className="social-shares js-social-shares">
      <ul className="social-shares__list">
        {createShareButtons(props)}
      </ul>
    </div>
  );
};

SocialShares.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

SocialShares.defaultProps = {
  description: '',
  image: '/img/og-logo.jpg',
};

export default SocialShares;
