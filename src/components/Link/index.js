import React from 'react';
import { Link as ReactLink } from 'react-router';
import pickBy from 'lodash/pickBy';

const linkProps = ['activeClassName', 'activeStyle', 'onClick', 'onlyActiveOnIndex'];

function removeLinkProps(props) {
  return pickBy(props, (value, key) => {
    return linkProps.indexOf(key) === -1;
  });
}

export function isInternalUrl(url) {
  return url.indexOf(process.env.siteUrl) >= 0 ||
    (/^https?:\/\/|\/\//.test(url) === false && /^mailto|tel/.test(url) === false);
}

class Link extends React.PureComponent {
  render() {
    const { to, href, children, ...props } = this.props;
    const url = to || href;

    if (!url) return null;
    return isInternalUrl(url) ?
      <ReactLink to={url} {...props}>{children}</ReactLink> :
      <a href={url} {...removeLinkProps(props)}>{children}</a>;
  }
}

export default Link;
