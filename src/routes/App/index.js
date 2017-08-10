/* eslint-disable no-param-reassign, dot-notation */
import React from 'react';
import { get } from 'lodash';

import autobind from 'lib/autobind';
import PageHelmet from 'components/PageHelmet';
import Footer from 'components/Footer';
import GridToggle from 'components/GridToggle';
import Header from 'components/Header';
import ScrollController from 'components/ScrollController';
import Session from 'components/Session';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { user: null };

    autobind(this, ['handleLogin', 'handleLogout']);
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window['__PRELOADED_DATA__']) {
      delete window['__PRELOADED_DATA__'];
    }
  }

  componentDidUpdate() {
    this.announcePageTitle(this.announcer);
  }

  /**
   * update js-page-announcer inner text to announce the page title for screen readers
   *
   * @public
   */
  announcePageTitle(target) {
    const title = get(document, 'title');

    if (target && title) {
      target.innerText = title;
    }
  }

  shouldShowLogin() {
    return !!get(this, 'props.location.query.login');
  }

  render() {
    return (
      <Session>
        <ScrollController>
          <div className="page-announcer js-page-announcer" ref={(announcer) => { this.announcer = announcer; }} aria-live="polite" />

          <PageHelmet
            title="Foundation Medicine"
            description="Foundation Medicine is leading a transformation in cancer care, where each patient’s treatment is informed by a deep understanding of the molecular changes that contribute to their disease."
            image="/img/og-logo.jpg"
            ogType="website"
            ogSite_name="Foundation Medicine"
            ogLocale="en_US"
            twitterSite="@FoundationATCG"
            twitterCard="summary"
          />

          <GridToggle />

          <Header />

          <main id="main-content" tabIndex="-1" className="main">
            {this.props.children}
          </main>

          <Footer />
        </ScrollController>
      </Session>
    );
  }
}

export default App;
