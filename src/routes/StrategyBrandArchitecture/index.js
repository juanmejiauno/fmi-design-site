/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';

class BrandArchitecture extends Component {
  render() {
    return (
      <div className="base-layout base-layout--pad-bottom">
        <div>
          <div className="brand-architecture-page-header">
            <PageHeader preheading={'Identity System'} heading={'Brand Architecture'} />
          </div>
        </div>

        <div className="our-architecture">
          <div className="our-architecture__text">
            <span className="our-architecture__text-inner">
              <h3>Our brand architecture reflects our patient-centered universe.</h3>
              When communicating what it is we do, we should be wary of describing the offering based on how we are siloed internally. We should rather describe what we do in terms of how we help patients. <a href="/">Find and download the Foundation Medicine Ecosystem of Care diagram here.</a>
            </span>
          </div>
          <div className="our-architecture__image">
            <img src="../img/architecture.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default routeWrapper(BrandArchitecture);
