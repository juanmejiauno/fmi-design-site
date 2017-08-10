/* eslint-disable react/jsx-boolean-value */
import get from 'lodash/get';
import React from 'react';

import routeWrapper from 'lib/route-wrapper';
import ContactForm from 'components/ContactForm';
import ContentfulText from 'components/ContentfulText';
import PageHeader from 'components/PageHeader';
import PageSubheader from 'components/PageSubheader';
import ServiceBlock from 'routes/Contact/ServiceBlock';
import LocationBlock from 'routes/Contact/LocationBlock';
import Distributors from 'components/Distributors';

class Contact extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('contact');
    const distributors = await client.getEntries({ content_type: 'internationalDistributor' });
    return { page, distributors };
  }

  render() {
    const distributors = get(this, 'props.route.data.distributors');
    const page = get(this, 'props.route.data.page');
    const title = get(page, 'fields.pageTitle');
    const introText = get(page, 'fields.introText');

    const clientService1 = {
      title: get(page, 'fields.clientService1Title'),
      phone: get(page, 'fields.clientService1Phone'),
      email: get(page, 'fields.clientService1Email'),
      fax: get(page, 'fields.clientService1Fax'),
    };
    const clientService2 = {
      title: get(page, 'fields.clientService2Title'),
      phone: get(page, 'fields.clientService2Phone'),
      email: get(page, 'fields.clientService2Email'),
    };
    const location1 = {
      title: get(page, 'fields.location1Title'),
      address: get(page, 'fields.location1Address'),
      phone: get(page, 'fields.location1Phone'),
      fax: get(page, 'fields.location1Fax'),
    };
    const location2 = {
      title: get(page, 'fields.location2Title'),
      address: get(page, 'fields.location2Address'),
      phone: get(page, 'fields.location2Phone'),
    };
    const location3 = {
      title: get(page, 'fields.location3Title'),
      address: get(page, 'fields.location3Address'),
      phone: get(page, 'fields.location3Phone'),
    };

    const outroText = get(page, 'fields.outro');


    return (
      <div>
        <div className="base-layout">
          <PageHeader heading={title} />

          { introText &&
            <div className="basic-page__intro-group">
              <PageSubheader subheading={introText} />
            </div>
          }

          <section className="contact__section">
            <h2 className="contact__h2">Client Services</h2>
            <div className="contact__groups">
              <div className="contact__group contact__group--main">
                <ServiceBlock service={clientService1} showPhoneNote={true} />
              </div>
              <div className="contact__group contact__group--side">
                <ServiceBlock service={clientService2} showPhoneNote={false} />
              </div>
            </div>
          </section>

          <div className="contact__form">
            <ContactForm />
          </div>

          <section className="contact__section">
            <h2 className="contact__h2">Our Locations</h2>

            <div className="contact__groups">
              <div className="contact__group contact__group--main">
                <LocationBlock location={location1} />
              </div>
              <div className="contact__group contact__group--side">
                <LocationBlock location={location2} />
                <LocationBlock location={location3} />
              </div>
            </div>
          </section>
        </div>

        <div className="contact__distributors">
          <div className="base-layout">
            <section className="contact__section">
              <h2 className="contact__h2">International Distributors</h2>

              <Distributors entries={distributors} />

            </section>

            {outroText &&
              <div className="contact__distributors-outro">
                <ContentfulText text={outroText} />
              </div>
            }

          </div>
        </div>


      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['page', 'distributors'],
};

export default routeWrapper(Contact, routeOptions);
