import { mount } from 'enzyme';

import React from 'react';
import NewsletterSignup from 'components/NewsletterSignup';

describe('NewsletterSignup Component', () => {
  it('should call setupHubspotForm when component is mounted', () => {
    const spy = sinon.spy(NewsletterSignup.prototype, 'setupHubspotForm');

    mount(<NewsletterSignup />);

    expect(spy.calledOnce).to.equal(true);
  });

  it('should set formTargetClass in component state', () => {
    const wrapper = mount(<NewsletterSignup />);

    const state = wrapper.state('formTargetClass');

    expect(state).to.isString;
    expect(state).to.contain('js-newsletter-target');
  });

  it('should call initializeHubspot', () => {
    const spy = sinon.spy(NewsletterSignup.prototype, 'initializeHubspot');

    mount(<NewsletterSignup />);

    expect(spy.calledOnce).to.equal(true);
  });

  it('initializeHubspot should call maybeInjectHubspotScript', () => {
    const signup = new NewsletterSignup();
    const spy = sinon.spy(signup, 'maybeInjectHubspotScript');
    signup.initializeHubspot();

    expect(spy.calledOnce).to.equal(true);
  });

  it('maybeInjectHubspotScript injects script if it is not already present', () => {
    const signup = new NewsletterSignup();

    let hubspotScript = document.querySelector('#js-hubspot-script');
    expect(hubspotScript).to.equal(null);

    signup.maybeInjectHubspotScript();

    hubspotScript = document.querySelector('#js-hubspot-script');
    expect(hubspotScript).to.be.ok;
  });

  it('maybeInjectHubspotScript does not call createHubspotScript if script is present', () => {
    const signup = new NewsletterSignup();
    const newScript = signup.createHubspotScript();
    document.head.appendChild(newScript);
    const spy = sinon.spy(signup, 'createHubspotScript');

    const hubspotScript = document.querySelector('#js-hubspot-script');
    expect(hubspotScript).to.be.ok;

    signup.maybeInjectHubspotScript();

    expect(spy.notCalled).to.equal(true);
  });

  it('maybeInjectHubspotScript returns script element', () => {
    const signup = new NewsletterSignup();

    const scriptReturned = signup.maybeInjectHubspotScript();
    const hubspotScript = document.querySelector('#js-hubspot-script');

    expect(scriptReturned).to.equal(hubspotScript);
  });

  it('createHubspotScript should return script with attrs for injecting hubspot', () => {
    const signup = new NewsletterSignup();
    const script = signup.createHubspotScript();

    expect(script.getAttribute('src')).to.equal('//js.hsforms.net/forms/v2.js');
    expect(script.getAttribute('id')).to.equal('js-hubspot-script');
    expect(script.getAttribute('async')).to.equal('true');
  });

  it('initializeHubspot should call injectHubspotForm', () => {
    const signup = new NewsletterSignup();
    const spy = sinon.spy(signup, 'injectHubspotForm');
    const newScript = signup.createHubspotScript();
    document.head.appendChild(newScript);
    window.hbspt = { forms: { create: () => true } };

    signup.initializeHubspot();

    expect(spy.calledOnce).to.equal(true);

    window.hbspt = null;
  });

  it('should call hbspt.forms.create passing in options', () => {
    window.hbspt = { forms: { create: () => true } };
    const spy = sinon.spy(window.hbspt.forms, 'create');

    const wrapper = mount(<NewsletterSignup />);

    const expectedOptions = {
      css: '',
      portalId: '174278',
      formId: 'ed5a55aa-f40d-4bd1-88bb-87884e4d1757',
      inlineMessage: 'Thank you for subscribing!',
      submitButtonClass: 'button button--standard',
      errorClass: 'input--error',
      target: `.${wrapper.state('formTargetClass')}`,
      formInstanceId: wrapper.state('formTargetClass'),
    };

    expect(spy.calledOnce).to.equal(true);
    expect(spy.calledWith(expectedOptions)).to.equal(true);

    window.hbspt = null;
  });
});
