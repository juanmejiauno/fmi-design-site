/**
 * stub console.error so we can test Component.PropTypes
 * * errors not involving prop types pass throught
 * * this stub MUST be reset when the test is complete
 *
 * @private
 */
function stubConsoleError() {
  sinon.stub(console, 'error').callsFake((warning) => {
    if (warning && !warning.includes('Warning: Failed prop type')) {
      process.nextTick(() => {
        throw new Error(warning);
      });
    }
  });
}

/**
 * restores stubbed console.error function
 * must be called in afterEach hooks when console.error is stubbed
 *
 * @public
 */
function restoreConsoleError() {
  if (typeof console.error.restore === 'function') {
    console.error.restore();
  }
}

export { stubConsoleError, restoreConsoleError };
