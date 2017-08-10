import React, { PropTypes } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import logger from 'lib/logger';

/**
 * Component for displaying an accessible social share button
 * inserts a button into a react-share ShareButton component to make it accessible
 *
 * @public
 * @param {string} props.platform
 * @param {string} props.title
 * @param {string} props.description=''
 * @param {string} props.image=''
 * @returns {ReactElement}
 */
const AriaShareButton = ({ platform, title, image = '', description = '' }) => {
  // if platform is falsy, not a string, we need to return null to prevent react-share errors
  if (!platform || typeof platform !== 'string') {
    return null;
  }

  const classNames = `social-shares__button-wrap social-shares__item--${platform}`;
  const ShareButton = getShareButton(platform);
  const Icon = getIcon(platform);

  // if we don't find a component for the social platform return null
  if (!ShareButton || !Icon) {
    logger.error(`Platform "${platform}" is not included in react-share.`);
    return null;
  }

  return (
    <ShareButton
      className={classNames}
      url={getUrl()}
      picture={image}
      image={image}
      description={description}
      via="foundationatcg"
      title={title}
    >

      <button id={`${platform}-share-button`} className="social-shares__button" type="button" title={`share on ${platform}`}>
        <Icon size={36} logoFillColor="#f79737" iconBgStyle={{ fill: 'none' }} round />
        <span className="aria-hidden-text">Share on {platform}</span>
      </button>
    </ShareButton>
  );
};

AriaShareButton.propTypes = {
  platform: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

AriaShareButton.defaultProps = {
  description: '',
  image: '/img/og-logo.jpg',
};

/**
 * gets the share button component for a given platform
 *
 * @public
 * @param {string} platform
 * @returns {React.Component}
 */
function getShareButton(platform) {
  const buttonName = `${platform}ShareButton`;
  return ShareButtons[buttonName];
}

/**
 * generate Icon component for social media platform
 *
 * @public
 * @param {string} platform
 * @returns {React.Component}
 */
function getIcon(platform) {
  const platformName = platform === 'GooglePlus' ? 'google' : platform;
  const iconName = platformName.toLowerCase();

  try {
    return generateShareIcon(iconName);
  } catch (err) {
    logger.error(`Unable to generate social share button for ${iconName} platform`, err);
  }

  return null;
}

function getUrl() {
  return typeof window !== 'undefined' ? window.location.href : '';
}

export default AriaShareButton;
