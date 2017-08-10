import React from 'react';
import HubspotForm from 'components/HubspotForm';

const contactFormOptions = {
  css: '',
  formId: '7813a2cc-e8ac-470b-bc5d-ebccf6715eff',
  inlineMessage: 'Thank you for contacting us!',
  submitButtonClass: 'button button--standard button--slate button--full-width',
  errorClass: 'input--error',
  portalId: '174278',
};

const formTargetClassName = 'js-contact-form-target';

const ContactForm = () => {
  return (
    <div className="contact-form js-contact-form-container">
      <h4 className="contact-form__head">You can also contact us via the form below and we’ll follow up by email.</h4>
      <HubspotForm formOptions={contactFormOptions} formTargetClassName={formTargetClassName} />
    </div>
  );
};


export default ContactForm;
