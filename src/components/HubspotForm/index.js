import React from 'react';
import autobind from 'lib/autobind';

const formTargetClassName = 'js-hubspot-form-target';


/**
 * Creates a component embedded Hubspot form
 * lazily instantiates hbspt on window object
 * @public
 *
 * @extends {Component}
 */
class HubspotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { formTargetClass: null };

    autobind(this, ['setupHubspotForm', 'injectHubspotForm']);
  }

  componentWillUnmount() {
    // remove event listeners on hubspot script element when component unmounts
    if (typeof document !== 'undefined') {
      const hubspotScript = document.querySelector('#js-hubspot-script');
      hubspotScript.removeEventListener('load', this.injectHubspotForm);
    }
  }

  /**
   * Adds Hubspot form to component
   * will lazily add hubspot script to the document.head if it doesn't exist
   * then intializes hubspot for and injects into target element
   *
   * @public
   * @param {Element} target element to inject Hubspot form
   */
  setupHubspotForm(target) {
    if (target && target.classList) {
      const formTargetClass = createClassName();
      target.classList.add(formTargetClass);

      this.setState({ formTargetClass }, this.initializeHubspot);
    }
  }

  /**
   * will inject hubspot script if not in page
   * then injects hubspot form
   *
   * @public
   */
  initializeHubspot() {
    const injectedScript = this.maybeInjectHubspotScript();

    // we're waiting for the injected hubspot script to load
    if (injectedScript && !window.hbspt) {
      injectedScript.addEventListener('load', this.injectHubspotForm);
    } else if (window.hbspt) {
      // we already loaded the script and we can skip to injecting the form
      this.injectHubspotForm();
    }
  }

  /**
   * appends script to document.head if it doesn't exist, returns reference to injected script
   * if script already exists, return that script instead of injecting a new script
   *
   * @public
   * @returns {Element} hubspot script
   */
  maybeInjectHubspotScript() {
    const hubspotScript = document.querySelector('#js-hubspot-script');

    // if the script has already been injected, just return that script
    if (hubspotScript) {
      return hubspotScript;
    }

    const newScript = this.createHubspotScript();
    document.head.appendChild(newScript);
    return newScript;
  }

  /**
   * calls window.hbspt.create to add form to component
   *
   * @public
   */
  injectHubspotForm() {
    if (!window.hbspt) {
      return;
    }

    const formOptions = this.props.formOptions || {};

    const finalFormOptions = Object.assign({}, formOptions, {
      target: `.${this.state.formTargetClass}`,
      formInstanceId: this.state.formTargetClass,
    });

    window.hbspt.forms.create(finalFormOptions);
  }

  /**
  * creates hubspot script element
  *
  * @public
  * @returns {Element} hubspot script element
  */
  createHubspotScript() {
    const script = document.createElement('script');
    script.setAttribute('src', '//js.hsforms.net/forms/v2.js');
    script.setAttribute('id', 'js-hubspot-script');
    script.setAttribute('async', true);

    return script;
  }

  render() {
    return (
      <div id={this.props.id} className="hubspot-form js-hubspot-container">
        <div ref={this.setupHubspotForm} />
      </div>
    );
  }
}

/**
 * create a unique className for the target div to render hbspt into
 *
 * @public
 * @returns {string}
 */
function createClassName() {
  return `${formTargetClassName}-${generateRandomHash()}`;
}

/**
 * generates random "unique" string
 *
 * @public
 * @returns {string}
 */
function generateRandomHash() {
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';

  for (let i = 0; i < 5; i += 1) {
    str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return str;
}

export default HubspotForm;
