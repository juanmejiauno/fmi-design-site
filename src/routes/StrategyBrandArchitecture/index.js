/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';

class BrandArchitecture extends Component {
  render() {
    return (
      <div className="brand-architecture base-layout--pad-bottom">
        <div className="base-layout base-layout--pad-bottom layout-content">
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
          <div className="separator" />

          <div className="content__text">
            <span className="content__text-inner">
              <h3>We define the architecture externally as our Foundation Medicine Ecosystem of Care.</h3>
              Our brand architecture translates into the ecosystem, sustaining each brand pillar by their respective value props. <em>Better Care Today</em> communicates the value of our Assays within the ecosystem; <em>Better Care Tomorrow</em>, the function of our Data; <em>Better Care Together</em>, the collaboration of our Community.
            </span>
          </div>
        </div>

        <div className="ecosystem-diagram base-layout--pad-bottom">
          <img src="../img/ecosystem backdrop.png" alt="" />
        </div>

        <div className="base-layout layout-content">
          <div className="content__text">
            <span className="content__text-inner">
              <h3>When branding Foundation Medicine products, use the corresponding brand pillar color.</h3>
              Our Products live within the brand pillars of Assays (our science), Data (our knowledge-base), and Collective (our people). Within each of those pillars, we offer contents and services. Assays are represented by FM Fire, data by FM Sea, and community by FM Slate.
            </span>
          </div>

          <div className="brand-architecture__row">
            <div className="brand-architecture__row-title">Brand Pillars</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col">
                <img className="brand-pillar-assays" src="../img/group 3.png" alt="" />
              </div>
              <div className="brand-architecture__row-col">
                <img className="brand-pillar-data" src="../img/group 12.png" alt="" />
              </div>
              <div className="brand-architecture__row-col">
                <img className="brand-pillar-community" src="../img/group 14.png" alt="" />
              </div>
            </div>
          </div>
          <div className="brand-architecture__row product-logos">
            <div className="brand-architecture__row-title">Product Logos</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col">
                <img src="../img/FoundationONE.png" alt="" />
                <img src="../img/FoundationACT.png" alt="" />
                <img src="../img/FoundationONE®HEME.png" alt="" />
                <img src="../img/FoundationFOCUS.png" alt="" />
              </div>
              <div className="brand-architecture__row-col">
                <img src="../img/FMI_logo_FoundationInsights_RGB300ppi-14.png" alt="" />
                <img src="../img/FMI_logo_FoundationSmartTrials_RGB300ppi-23.png" alt="" />
              </div>
              <div className="brand-architecture__row-col" />
            </div>
          </div>


          <div className="brand-architecture__row services">
            <div className="brand-architecture__row-title">Services</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col col-assays">
                <p>Print & digital reports, Access, Ask an expert</p>
              </div>
              <div className="brand-architecture__row-col col-data">
                <p>Trial Planner, Trial Matchmaker
                  <span>Concierge Enrollment, Network Enrollment, Collective Enrollment, Trial Matchmaker for Patients</span>
                </p>
              </div>
              <div className="brand-architecture__row-col col-community">
                <p>Events, publications, collaborative research intiatives, networking, resources, advocacy, etc.</p>
              </div>
            </div>
          </div>
          <div className="brand-architecture__row primary-stakeholders">
            <div className="brand-architecture__row-title">Primary Stakeholders</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col col-assays">
                <p>Oncologist, Nurses, & Pathologists</p>
              </div>
              <div className="brand-architecture__row-col col-data">
                <p>Pharma, Research, Partners, & Payors</p>
              </div>
              <div className="brand-architecture__row-col col-community">
                <p>All, Including advocacy orgs, Staff, & thought leaders</p>
              </div>
            </div>
          </div>
          <div className="brand-architecture__row value-prop">
            <div className="brand-architecture__row-title">Value Prop</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col col-assays">
                <p>Better care Today.</p>
              </div>
              <div className="brand-architecture__row-col col-data">
                <p>Better care tomorrow.</p>
              </div>
              <div className="brand-architecture__row-col col-community">
                <p>Better care tomorrow.</p>
              </div>
            </div>
          </div>
          <div className="brand-architecture__row brand-promise">
            <div className="brand-architecture__row-title">Brand Promise</div>
            <div className="brand-architecture__row-body">
              <div className="brand-architecture__row-col">
                The Relentless Pursuit of Better
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default routeWrapper(BrandArchitecture);
