/* eslint-disable no-param-reassign */
import React, { PropTypes } from 'react';
import { get, hasIn } from 'lodash';
import RouteHelmet from 'components/RouteHelmet';
import logger from 'lib/logger';

/**
 * HOC creates a new component that extends the component passed in
 * * used to handle errors when client sdk fails or returns a bad response
 * * sets propTypes based on prop names passed in
 * * will redirect to /error if a required prop is missing
 * * will render null if required prop is missing
 *
 * @public
 * @param {React.Component} ComponentToExtend - a route component
 * @param {object} options
 * @param {array} options.requiredProps=[] names of props to require
 * @param {boolean} options.shouldScroll=true whether to scroll to top when page tranisiton occurs
 * @returns {React.Component}
 */
function routeWrapper(ComponentToExtend, options = {}) {
  const requiredProps = get(options, 'requiredProps');

  // inherit from the route component we want to extend
  class RouteComponent extends ComponentToExtend {
    async componentWillMount() {
      if (typeof ComponentToExtend.componentWillMount === 'function') {
        ComponentToExtend.componentWillMount();
      }

      // redirect if any props are missing
      if (requiredProps && !verifyProps(this.props, requiredProps)) {
        try {
          this.props.router.replace('/error');
        } catch (err) {
          logger.error('Failed to redirect to error page.', err);
        }
      }
    }

    componentDidMount() {
      // if this is the first page load, we don't want to focus on #main-content
      if (global.FIRST_PAGE_LOAD) {
        this.focusOnMain();
      } else {
        global.FIRST_PAGE_LOAD = true;
      }
    }

    /**
     * attempt to focus on #main-content for accessibility
     *
     * @public
     */
    focusOnMain() {
      const main = document.querySelector('#main-content');
      if (main) {
        main.focus();
      } else {
        logger.warn('Unable to focus on #main-content. This may cause accessibility issues');
      }
    }

    /**
     * render null if any required props are missing
     * is necessary to prevent error when calling render method of parent
     */
    render() {
      if (requiredProps && !verifyProps(this.props, requiredProps)) {
        return null;
      }
      return (
        <div>
          <RouteHelmet />
          {super.render()}
        </div>
      );
    }
  }

  // we can't rely on class extends in IE10, so we must assign the fetchData property directly
  if (hasIn(ComponentToExtend, 'fetchData')) {
    RouteComponent.fetchData = ComponentToExtend.fetchData;
  }

  if (requiredProps) {
    RouteComponent.propTypes = getPropTypes(requiredProps);
  }

  return RouteComponent;
}

function getPropTypes(requiredProps) {
  const dataShape = {};

  if (Array.isArray(requiredProps)) {
    requiredProps.forEach((prop) => {
      dataShape[prop] = PropTypes.any.isRequired;
    });
  }

  return {
    route: PropTypes.shape({
      data: PropTypes.shape(dataShape).isRequired,
    }).isRequired,
  };
}

/**
 * Checks that component has all required props
 *
 * @private
 * @param {object} props component props
 * @param {array} requiredProps prop names
 * @returns {boolean} false if required props are missing
 */
function verifyProps(props, requiredProps) {
  if (!props.route || !props.route.data) {
    return false;
  }

  return requiredProps.some(prop => props.route.data[prop]);
}


export default routeWrapper;
