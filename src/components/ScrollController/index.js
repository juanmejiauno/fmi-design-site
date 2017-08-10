/* eslint-disable global-require */
import React, { Component, PropTypes } from 'react';

class ScrollController extends Component {
  getChildContext() {
    return {
      scrollMagicController: this.controller,
    };
  }

  componentWillMount() {
    // prevent server-side render error
    if (typeof window === 'undefined' || !window) {
      return;
    }
    // we must include scrollmagic in componentWillMount to prevent race condition where scroll component intializes before the controller is created
    const ScrollMagic = require('ScrollMagic');

    // require debug only in dev and test environments
    if (process.env.NODE_ENV === 'development') {
      require('debug.addIndicators');
    }

    this.controller = new ScrollMagic.Controller();
  }

  render() {
    return (
      <div className="ScrollMagicController">
        {this.props.children}
      </div>
    );
  }
}

ScrollController.childContextTypes = {
  scrollMagicController: PropTypes.object,
};

export default ScrollController;
