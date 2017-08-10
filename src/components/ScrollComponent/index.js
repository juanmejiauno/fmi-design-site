/* eslint-disable global-require */
import React, { Component, PropTypes } from 'react';
import autobind from 'lib/autobind';
import logger from 'lib/logger';

/**
 * Component that wraps ScrollMagic.Scene
 * * use this to create an element that the ScrollMagicController can track
 * * the props that you pass are modelled on the arguments and methods of ScrollMagic.Scene
 *
 * see http://scrollmagic.io/docs/ScrollMagic.Scene.html
 *
 * @public
 *
 * @extends {Component}
 *
 * @param {object} props.options - options to pass to ScrollMagic.Scene()
 * @param {object} props.events - events and callbacks to execute. key is event name, value is callback
 * @param {boolean|string} props.addIndicators - add debugging indicators to scene, if string that will be the name of the indicator
 * @param {string} props.setClassToggle - class name to toggle when element enters/exits scene
 *
 * @example
 * // will call ScrollMagic.Scene({ duration: 100, offset: 50 })
 * <ScrollComponent options={{ duration: 100, offset: 50 }} />
 *
 * @example
 * // will add indicators to scene with { name: "my scene" }
 * <ScrollComponent addIndicators="my scene" />
 *
 * @example
 * // will toggle ".is-in-viewport" when element enters or leaves scene
 * <ScrollComponent setClassToggle="is-in-viewport" />
 *
 * @example
 * // add an event callback that logs "hello" when component enters scene and goodbye when it leaves
 * <ScrollComponent events={[["enter", () => console.log('hello')], ["leave", () => console.log("goodbye") ]]} />
 */
class ScrollComponent extends Component {
  constructor(...props) {
    super(...props);

    this.scene = null;

    autobind(this);
  }

  componentDidMount() {
    this.scene = this.buildScene();

    if (this.context && this.context.scrollMagicController) {
      this.scene.addTo(this.context.scrollMagicController);
    }
  }

  componentWillUnmount() {
    this.destroyScene();
  }

  /**
   * builds a ScrollMagic.Scene from props passed in
   *
   * @param {object} options - options to pass to ScrollMagic.Scene()
   * @param {object} events - events and callbacks to execute. key is event name, value is callback
   * @param {boolean|string} addIndicators - add debugging indicators to scene, if string that will be the name of the indicator
   * @param {string} setClassToggle - class name to toggle when element enters/exits scene
   *
   * @public
   * @returns {ScrollMagic.Scene}
   */
  buildScene() {
    const {
      addIndicators,
      setClassToggle,
      events,
      options,
    } = this.props;

    // we have to require ScrollMagic here to avoid a server-side render error
    const ScrollMagic = require('ScrollMagic');
    const defaults = { triggerElement: this.triggerElement };
    const sceneOptions = Object.assign(defaults, options);
    const scene = new ScrollMagic.Scene(sceneOptions);

    if (addIndicators) {
      scene.addIndicators(addIndicators);
    }

    if (setClassToggle) {
      scene.setClassToggle(this.triggerElement, setClassToggle);
    }

    addEvents(scene, events);

    return scene;
  }

  /**
   * destroys the scene and removes it from the ScrollMagic Controller
   *
   * @public
   */
  destroyScene() {
    if (this.scene && typeof this.scene.remove === 'function') {
      this.scene.remove();
    }

    if (this.scene && typeof this.scene.destroy === 'function') {
      this.scene.destroy(true);
    }
    this.scene = null;
  }

  render() {
    const classes = this.props.className || 'scrollmagic-component';
    // use refs to set triggerElement for ScrollMagic
    return (
      <div className={classes} ref={(el) => { this.triggerElement = el; }}>
        {this.props.children}
      </div>
    );
  }
}

ScrollComponent.contextTypes = {
  scrollMagicController: PropTypes.object,
};

ScrollComponent.defaultProps = {
  options: {},
  addIndicators: null,
  setClassToggle: null,
  className: null,
  events: null,
};

ScrollComponent.propTypes = {
  options: PropTypes.shape({
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.func,
    ]),
    loglevel: PropTypes.number,
    offset: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    triggerHook: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    reverse: PropTypes.bool,
  }),
  addIndicators: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  setClassToggle: PropTypes.string,
  className: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.array),
};

function addEvents(scene, events) {
  if (events && Array.isArray(events)) {
    events.forEach((eventTuple) => {
      try {
        const [event, callback] = eventTuple;

        if (typeof event !== 'string') {
          throw new Error(`event name was not a string. ${event} is typeof ${typeof event}`);
        }

        if (typeof callback !== 'function') {
          throw new Error(`event callback was not a function. ${callback} is typeof ${typeof callback}`);
        }

        scene.on(event, callback);
      } catch (err) {
        logger.warn('there was a problem creating a ScrollMagic.Scene event callback', err);
      }
    });
  }
}

export default ScrollComponent;
