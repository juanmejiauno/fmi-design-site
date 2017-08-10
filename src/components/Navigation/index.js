import autobind from 'lib/autobind';
import content from 'components/Navigation/content.json';
import React from 'react';

import DesktopNav from 'components/Navigation/DesktopNav';
import MobileNav from 'components/Navigation/MobileNav';

const MEDIA_QUERY = '(max-width: 1024px)';

class Navigation extends React.Component {

  static renderDesktop() {
    return (<DesktopNav content={content} />);
  }

  static renderMobile() {
    return (<MobileNav content={content} />);
  }

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      mobile: true,
    };
  }

  updateNavigation({ matches }) {
    this.setState({ mobile: matches });
  }

  componentDidMount() {
    if (window.matchMedia) {
      const mediaMatcher = matchMedia(MEDIA_QUERY);
      this.updateNavigation(mediaMatcher);
      mediaMatcher.addListener(this.updateNavigation);
    }
  }

  render() {
    return (
      <div className="navigation">
        {
          this.state.mobile
            ? Navigation.renderMobile()
            : Navigation.renderDesktop()
        }
      </div>
    );
  }
}

export default Navigation;
