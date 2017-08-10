/* eslint-disable no-underscore-dangle, no-else-return */
import ContentfulClient from 'lib/contentful';
import isPromise from 'is-promise';

const METHOD_ALREADY_ADDED = method => `Method ${method} has already been added`;
const METHOD_ALREADY_MOCKED = method => `Method ${method} has already been mocked.`;
const METHOD_NOT_YET_MOCKED = method => `Method ${method} has not yet been mocked`;

class MockClient {
  constructor() {
    this.__mocks = {};
    this.__methods = [];

    const methods = getPrototypeMethods(ContentfulClient);
    methods.forEach((method) => {
      this.__addMethod(method);
    });
  }

  /**
   * Makes a method available for mocking
   *
   * @private
   * @param {string} method
   */
  __addMethod(method) {
    if (this.__methods.indexOf(method) === -1) {
      this.__methods.push(method);
      this[method] = (...input) => {
        if (this.__isMocked(method)) {
          return this.__mocks[method](...input);
        } else {
          console.warn(METHOD_NOT_YET_MOCKED(method));
          return null;
        }
      };
    } else {
      console.warn(METHOD_ALREADY_ADDED(method));
    }
  }

  /**
   * Creates a mock for a given method
   *
   * @private
   * @param {string} method
   * @param {function} mock
   */
  __addMock(method, mock) {
    if (this.__isMockable(method)) {
      this.__mocks[method] = mock;
    } else {
      console.warn(METHOD_ALREADY_MOCKED(method));
    }
  }

  /**
   * Checks whether a mock exists for a given method
   *
   * @private
   * @param {string} method
   */
  __isMocked(method) {
    return Object.prototype.hasOwnProperty.call(this.__mocks, method);
  }

  /**
   * Checks whether a given method can be mocked
   *
   * @private
   * @param {string} method
   */
  __isMockable(method) {
    if (this.__methods.indexOf(method) === -1) return false;
    else if (this.__isMocked(method)) return false;
    else return true;
  }

  /**
   * Determines what sort
   */
  __handleResponse(response, input, shouldInvoke = true) {
    return shouldInvoke && typeof response === 'function'
      ? response(...input)
      : response;
  }

  /**
   * Creates a mock for a given method to return the given response
   *
   * @public
   * @param {string} method
   * @param {} response
   * @param {bool} [shouldInvoke=true] - Whether to invoke response if it is a function
   * @return {} The response, or its output if response is a function and should be invoked
   */
  mock(method, response, shouldInvoke = true) {
    this.__addMock(method, (...input) => {
      return this.__handleResponse(response, input, shouldInvoke);
    });
  }

  /**
   * Creates a mock for a given method to return the given response
   * The mock will be removed the first time it is called
   *
   * @public
   * @param {string} method
   * @param {} response
   * @param {bool} [shouldInvoke=true] - Whether to invoke response if it is a function
   * @return {} The response, or its output if response is a function and should be invoked
   */
  mockOnce(method, response, shouldInvoke = true) {
    this.mock(method, (...input) => {
      this.unmock(method);
      return this.__handleResponse(response, input, shouldInvoke);
    });
  }

  /**
   * Creates a mock for a given method to resolve to the given response
   *
   * @public
   * @param {string} method
   * @param {} response
   * @param {bool} [shouldInvoke=true] - Whether to invoke response if it is a function
   * @return {Promise}
   */
  mockAsync(method, response, shouldInvoke = true) {
    this.__addMock(method, (...input) => {
      return isPromise(response)
        ? response
        : new Promise(resolve => resolve(this.__handleResponse(response, input, shouldInvoke)));
    });
  }

  /**
   * Creates a mock for a given method to resolve to the given response
   * The mock will be removed the first time it is called
   *
   * @public
   * @param {string} method
   * @param {} response
   * @param {bool} [shouldInvoke=true] - Whether to invoke response if it is a function
   * @return {Promise}
   */
  mockOnceAsync(method, response, shouldInvoke = true) {
    this.mockAsync(method, (...input) => {
      this.unmock(method);
      return isPromise(response)
        ? response
        : new Promise(resolve => resolve(this.__handleResponse(response, input, shouldInvoke)));
    });
  }

  /**
   * Removes the mock for the given method
   *
   * @public
   * @param {string} method
   */
  unmock(method) {
    if (this.__isMocked(method)) {
      delete this.__mocks[method];
    } else {
      console.warn(METHOD_NOT_YET_MOCKED(method));
    }
  }
}

/**
 * Get the methods of a class prototype
 *
 * @private
 * @param {class} input
 * @returns {array}
 */
function getPrototypeMethods(input) {
  return Object.getOwnPropertyNames(input.prototype)
    .filter(name => typeof input.prototype[name] === 'function')
    .filter(name => name !== 'constructor');
}

export default MockClient;
