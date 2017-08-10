import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

/**
 * Sets url-related meta tags in document head
 *
 * @public
 * @param {object} props props for component
 * @param {object} context context for component, includes router
 * @returns {ReactElement}
 */
const RouteHelmet = (props, context) => {
  const url = getCanonicalUrl(context);
  const links = [{ rel: 'canonical', href: url }];
  const metas = [{ property: 'og:url', content: url }];

  return (
    <Helmet
      {...props}
      link={links}
      meta={metas}
    />
  );
};

RouteHelmet.contextTypes = {
  router: PropTypes.any,
};

function getHostname() {
  return process.env.siteUrl;
}

function getCanonicalUrl(context) {
  if (!context || !context.router) {
    return getHostname();
  }
  const pathname = context.router.location.pathname;
  return `${getHostname()}${pathname}`;
}

export default RouteHelmet;
