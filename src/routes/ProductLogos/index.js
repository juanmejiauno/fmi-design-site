/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import PageHelmet from 'components/PageHelmet';
import PageHeader from 'components/PageHeader';
import ContentfulText from 'components/ContentfulText';
import RouteWrapper from 'lib/route-wrapper';

class ProductLogos extends Component {
  render() {
    const introductionHeadingTextSection = `<h2>The product identities remain consistent across their respective brand pillars.</h2>
<p>Here we lay out the specifications for using the product logos within the brand architecture: The integrity of these product lockups and their elements, should be maintained. Always keep product logo usage within the confines of our guides and specifications. <a href="#">Find and download our product logo assets here.</a></p>`;
    const logosAppearTextSection = `<h2>The product logos should most often appear in their  full-color form.</h2>
<p>The lockups have only their primary color option; a white-scale knock out logo is provided for situations where it must appear on a dark or colored background. Never change the color of the product logos, even within the brand color palettes: this is key in categorizing each product within the brand architecture. For example, FoundationONE® is always presented in FM Fire as an assay, while FoundationINSIGHTS™ is always presented in FM Sea as a data product.</p>`;
    const logoReflectTextSection = `<h2>Product logos should always reflect  the architecture.</h2>
<p>All product logos are horizontal lockups, but individual elements can be used at the design team’s discretion. As needed, we can use the brand pillar logomark and the product wordmark separately from one another. It should be noted that the brand pillar logomarks used as a solitary graphic elements represent the entire brand pillar and not individual products. Never re-create, alter or distort  the product identity elements in any way.</p>`;
    const logoCorporateLockupTextSection = `<h2>As with the corporate lockup, it’s important to ensure legibility & consistency when presenting the product logos.</h2>
<p>The product logos must also always have minimum surrounding clear space, determined by the x-height of the logomark itself. This space should be free of text, graphics, and borders established by the edge of the page, screen, etc.</p>`;
    const logoMaintainSectionText = `<h2>Maintain the consistency and visual integrity of the product logos.</h2>
<p>The product logos accompany all product communications and must always be presented in original form. When using the them, never re-create, alter or distort the lockups in any way.</p>`;
    const logoProductTextSection = `<h2>On all product-specific communications, include both the product logo and the primary identity lockup.</h2>
<p>Product logos should accompany all corresponding marketing and communication materials. To avoid any confusion or disconnect between FMI and its products, some form of the corporate logo should also be present on any and all communication materials: this way we always link all pillars and pieces of the brand architecture back to our primary identity. To maintain consistency across platforms, printed and digital materials require the product logos accompanied by the registered trademark or the trademark symbol; only swag materials use the logos without.
All product logos are left-justified horizontal lockups, so positioning options are more limited. The logos should appear at the top left of communication materials
In conjunction with the primary lockup: While all product communications should include both the product and the corporate logos, they should never be placed side-by-side.
If a piece requires two or more product logos, they must appear at the same scale/size.</p>`;
    const logoTypographicTextSection = `<h2>Keep typographic treatment of product names consistent outside the context of a lockup.</h2>
<p>When the product names appear in text outside of their respective logos, they must always be expressed as listed below. Trademarks need only appear once per page, first instance. If it’s web-based (email, product page, etc.) the trademark only needs to appear once.</p>`;

    return (
      <div className="product-logos base-section">
        <PageHelmet title="Product Logos" description="Product Logos"/>
        <div className="introduction-section base-layout section no-border">
          <PageHeader
            preheading="Identity system"
            heading="Product Logos"
            className="logo-header-text"/>
          <div className="header-logo-subsection flex-row">
            <ContentfulText text={introductionHeadingTextSection} className="logo-text"/>
            <div className="logo-container flex-row">
              <div className="img-responsive">
                <img src="/img/FoundationONELogo.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-appear-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logosAppearTextSection}/>
          </div>
          <div className="flex-row">
            <div className="column flex-vertical">
              <div className="basic-text">
                <h4 className="lockup-header">ORIGINAL COLOR FORM</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/FoundationONE.png" alt=""/>
              </div>
            </div>
            <div className="column flex-vertical">
              <div className="basic-text">
                <h4 className="lockup-header">KNOCK OUT LOGO FORM</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/Group 2.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-reflect-section base-layout section">
          <div className="flex-row">
            <div className="header-text">
              <ContentfulText text={logoReflectTextSection}/>
            </div>
            <div className="flex-vertical">
              <div className="line">
                <div className="basic-text">
                  <h4 className="lockup-header">PRODUCT LOCKUP</h4>
                </div>
                <div className="img-responsive">
                  <img src="/img/FoundationONE.png" alt=""/>
                </div>
              </div>
              <div className="line">
                <div className="basic-text">
                  <h4 className="lockup-header">WORDMARK</h4>
                </div>
                <div className="img-responsive">
                  <img src={encodeURI('/img/FoundationONE withoutLogo.png')} alt=""/>
                </div>
              </div>
              <div className="line">
                <div className="basic-text">
                  <h4 className="lockup-header">LOGOMARK</h4>
                </div>
                <div className="img-responsive">
                  <img src="/img/FoundationONELogo.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-corporate-lockup-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoCorporateLockupTextSection}/>
          </div>
          <div className="flex-row">
            <div className="column">
              <div className="img-responsive">
                <img src={encodeURI('/img/data logomark.png')} alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="img-responsive">
                <img src="/img/FoundationINSIGHTS.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-maintain-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoMaintainSectionText}/>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container column">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T RE-COLOR</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/recoloredACT.png" alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container column">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T STRETCH OR SKEW</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/skewACT.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container column">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T RESIZE ELEMENTS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/resized elementsACT.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container column">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T USE DROP-SHADOWS OR FILTERS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/drop shadowACT.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-communication-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoProductTextSection}/>
          </div>
          <div className="banner-section flex-row">
            <div className="column no-border">
              <div className="img-responsive">
                <img src="/img/FACT_LiquidBiopsySummit_Banner_01-00_HH-01.png" alt=""/>
              </div>
            </div>
            <div
              className="column basic-text no-border banner-logo-communication-description">
              <h4 className="left-border">TRADESHOW BANNER USE-CASE</h4>
              <p>Here we use the FoundationACT® lockup prominently at the top of the banner as
                it is a product-specific event display piece. The primary lockup is presented in
                FM Slate because it represents the corporate identity on an assay-specific
                marketing piece.</p>
            </div>
          </div>
          <div className="banner-specimen flex-row">
            <div className="banner-specimen-image-container">
              <div className="img-responsive">
                <img src="/img/sample_kits_guidelines.png" alt=""/>
              </div>
            </div>
            <div
              className="column basic-text no-border banner-logo-communication-description">
              <h4 className="left-border">SPECIMEN COLLECTION KIT USE-CASE</h4>
              <p>The specimen collection kits are designed for clear legibility and ease of
                recognition/distinction between different assays. Here the full FoundationONE®
                lockup sits prominently on the face of the kit, and then we use repetition of
                the product logo’s individual elements (logomark and wordmark) for layout and
                emphasis purposes.</p>
            </div>
          </div>
        </div>
        <div className="logo-typographic-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoTypographicTextSection}/>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src="/img/FoundationONE.png" alt=""/>
              </div>
              <div className="border-separator"></div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationOne®</h4>
              <h4>FoundationOne</h4>
              <p>No spaces; only the F and O are capitalized; ® after One</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src="/img/FoundationFOCUS.png" alt=""/>
              </div>
              <div className="border-separator"></div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationFocus™ CDx BRCA</h4>
              <h4>FoundationFocus CDx BRCA</h4>
              <p>No spaces; Both F’s, CD and BRCA are capitalized; BRCA is italicized because
                it’s a gene name; ™ and a space between CDx and BRCA</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src={encodeURI('/img/FoundationONE®HEME.png')} alt=""/>
              </div>
              <div className="border-separator"></div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationOne®Heme</h4>
              <h4>FoundationOneHeme</h4>
              <p>No spaces; only the F, O and H are capitalized; ® between One and Heme</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src="/img/FoundationACT.png" alt=""/>
              </div>
              <div className="border-separator"></div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationACT®</h4>
              <h4>FoundationACT</h4>
              <p>No spaces; ACT is all-caps because it’s an acronym; ® after ACT</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src="/img/FMI_logo_FoundationInsights_RGB300ppi-14.png" alt=""/>
              </div>
              <div className="border-separator"></div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationInsights™</h4>
              <h4>FoundationInsights</h4>
              <p>No spaces; only the F and I are capitalized; ™ after Insights</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="flex-row column logo-typographic-image-container no-border">
              <div className="img-responsive">
                <img src="/img/FMI_logo_FoundationSmartTrials_RGB300ppi-23.png" alt=""/>
              </div>
            </div>
            <div className="column basic-text no-border">
              <h4 className="">FoundationSmartTrials™</h4>
              <h4>FoundationSmartTrials</h4>
              <p>No spaces; only the F, S and T are capitalized; ™ after Trials</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RouteWrapper(ProductLogos);
