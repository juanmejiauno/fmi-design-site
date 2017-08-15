/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import PageHelmet from 'components/PageHelmet';
import PageHeader from 'components/PageHeader';
import ContentfulText from 'components/ContentfulText';
import RouteWrapper from 'lib/route-wrapper';

class CorporateLogos extends Component {
  render() {
    const introductionHeadingText = `<h2>There are two parts that make up the identity system for Foundation Medicine: The wordmark (logotype), and a logomark.</h2>
                                      <p>Here we lay out the specifications for using the logo: Although the system is flexible, the integrity of the  logo and its elements should be maintained. Don’t stretch or skew them.&nbsp;<a>Find and download FMI’s corporate logo assets here.</a></p>`;
    const logoColorsSectionText = `<h2>The logo should most often be in FM Slate, black or white, but certain situations may call for FM Fire.</h2>
<p>More specifically, when the logo is being used functionally to communicate hierarchy within the brand architecture, it should be in FM Slate. When it’s being used as a visual piece or as a stand-alone (on a splash page for example), it can be portrayed in FM Fire. Only if a piece cannot be printed in full color should it appear in black, and the knockout logo (in white) can be used when appearing on a color, image or dark background.</p>`;
    const logoLegibilitySectionText = `<h2>Ensure legibility & consistency when presenting the logo.</h2>
<p>The logo must always have minimum surrounding clear space, determined by the x-height of the logomark itself. This space should be free of text, graphics, and borders established by the edge of the page, screen, etc., excluding instances where the logo is overprinted on color or full-image.</p>`;
    const logoMaintainSectionText = `<h2>Maintain the visual integrity of the logo.</h2>
<p>The logo is our primary visual representation, accompanying all corporate and product communications. When using the logo, never re-create, alter or distort the logo in any way.</p>`;
    const positionImagesSectionText = `<h2>Positioning, medium & context inform which lockup to use and how: vertical v. horizontal, FM Slate v. FM Fire.</h2>
<p>The primary FMI logo is the vertical lockup; this is our go-to. The horizontal lockup expands the flexibility of the identity system, creating a horizontal solution when needed. To maintain consistency across platforms, printed materials require the logo accompanied by the registered trademark symbol; digital and swag materials use the logo without.</p>`;
    return (
      <div className="corporate-logos">
        <PageHelmet title="Corporate Logos" description="Corporate Logos"/>
        <div className="introduction-section base-layout">
          <PageHeader
            preheading="Identity system"
            heading="Corporate Logo"
            className="logo-header-text"/>
          <div className="header-logo-subsection flex-row">
            <ContentfulText text={introductionHeadingText} className="logo-text width-40"/>
            <div className="logo-container width-40">
              <div className="img-responsive">
                <img src={encodeURI('/img/Corp Logos Assets.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="primary-lockup-section base-layout">
          <div className="basic-text">
            <h4 className="lockup-header">Primary lockup</h4>
          </div>
          <div className="lockup-content-section">
            <div className="img-responsive lockup-background-image arrows-icons">
              <img src="/img/Group.png" alt=""/>
            </div>
            <div className="img-responsive lockup-background-image content-logo-white">
              <img src={encodeURI('/img/Primary lockup.png')} alt=""/>
            </div>
            <ul className="lockup-content-list no-margin no-padding">
              <li className="lockup-content-container flex-row first-container">
                <p className="lockup-content-item column-start">A slightly thicker line weight
                  gives the mark more impact and enables it to hold up at small sizes.</p>
                <p className="lockup-content-item column-end">Straight-end caps highlight
                  geometry, and reinforce the idea of an architectural cornerstone.</p>
              </li>
              <li className="lockup-content-container flex-row second-container">
                <p className="lockup-content-item column-start">A tighter corner radius, and
                  straighter end caps, makes the mark feel more precise, and brings out the
                  geometry of the shape.</p>
                <p className="lockup-content-item column-end column-vertical-align-end">60 degree angles allows the faces of the cube to stand out.</p>
              </li>
              <li className="lockup-content-container flex-row third-container">
                <p className="lockup-content-item column-start">Line weight matches counter
                  spaces for visual consistency and scientific precision.</p>
              </li>
              <li className="lockup-content-container flex-row forth-container">
                <p className="lockup-content-item column-start">The type family (Gotham) is the
                  same, but the weights are boosted so that there’s cohesion with the mark—moving
                  from three visual weights to two.</p>
                <p className="lockup-content-item">“Medicine” is boosted in size so that it no
                  longer reads as a company type (corp, inc, ltd) and now like an integral part of
                  the brand name. It’s slightly smaller than “Foundation” for visual balance.</p>
                <p className="lockup-content-item column-end">The identity can appear in black,
                  white, or FM Slate. This lends a sophisticated feel while allowing the
                  sub-brands to work better as color-coded entities.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondary-lockup-section base-layout">
          <div className="flex-row">
            <div className="column">
              <div className="basic-text">
                <h4 className="lockup-header">Vertical lockup</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/structure.png" alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="basic-text">
                <h4 className="lockup-header">Horizontal lockup</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/structure.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-colors-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoColorsSectionText}/>
          </div>
          <div className="logo-colors-content">
            <div className="flex-row">
              <div className="logo-colors-container">
                <div className="basic-text">
                  <h4 className="lockup-header">FM Slate</h4>
                </div>
                <div className="img-responsive">
                  <img src={encodeURI('/img/logo slate.png')} alt=""/>
                </div>
              </div>
              <div className="logo-colors-container">
                <div className="basic-text">
                  <h4 className="lockup-header">FM Fire</h4>
                </div>
                <div className="img-responsive">
                  <img src={encodeURI('/img/logo fire.png')} alt=""/>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className="logo-colors-container">
                <div className="basic-text">
                  <h4 className="lockup-header">Black</h4>
                </div>
                <div className="img-responsive">
                  <img src={encodeURI('/img/logo black.png')} alt=""/>
                </div>
              </div>
              <div className="logo-colors-container">
                <div className="basic-text">
                  <h4 className="lockup-header">White</h4>
                </div>
                <div className="img-responsive">
                  <img src={encodeURI('/img/logo white.png')} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-legibility-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoLegibilitySectionText}/>
          </div>
          <div className="flex-row">
            <div className="logo-legibility-container">
              <div className="img-responsive">
                <img src={encodeURI('/img/vertical logo clear space.png')} alt=""/>
              </div>
            </div>
            <div className="logo-legibility-container">
              <div className="img-responsive">
                <img src={encodeURI('/img/horizontal logo clear space.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-maintain-section base-layout section">
          <div className="header-text">
            <ContentfulText text={logoMaintainSectionText}/>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T RE-COLOR</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/recolor.png" alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T STRETCH OR SKEW</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/stretch&skew.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T RESIZE ELEMENTS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/resized elements.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">DON’T USE DROP-SHADOWS OR FILTERS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/resized elements.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="position-images-section base-layout section">
          <div className="header-text">
            <ContentfulText text={positionImagesSectionText}/>
          </div>
          <div className="flex-row">
            <div className="position-image-container column">
              <div className="img-responsive">
                <img src="/img/macbook-1999633_960_720.png" alt=""/>
              </div>
            </div>
            <div className="column basic-text">
              <h4 className="left-border">HEADER NAVIGATION USE-CASE</h4>
              <p>Here we use the horizontal lockup due to the horizontal nature of a header
                navigation. The logo is presented in FM Slate because it functions to
                communicate the primary identity on the corporate site. We don’t use the
                registered trademark symbol as this is a digital setting.</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="position-image-container column">
              <div className="img-responsive">
                <img src="/img/760150_FMI_pg11.png" alt=""/>
              </div>
            </div>
            <div className="column basic-text">
              <h4>CORPORATE BROCHURE USE-CASE</h4>
              <p className="left-border">Here we use the vertical lockup because the space and
                placement doesn’t require a horizontal format. The logo is presented in white
                because it is placed on a dark background for this corporate marketing piece. As
                this is a printed communication material, the registered trademark symbol
                accompanies the logo.</p>
            </div>
          </div>
          <div className="flex-row">
            <div className="position-image-container column">
              <div className="img-responsive">
                <img src="/img/mock_tote.png" alt=""/>
              </div>
            </div>
            <div className="column basic-text">
              <h4 className="left-border">TOTE BAG USE-CASE</h4>
              <p>Here we again use the vertical lockup because the space and placement doesn’t
                necessitate a horizontal format. The logo can be presented in FM Fire because
                it’s being used as a visual element, and does not conflict the function of the
                brand pillars (which we dive into next). We don’t need to include the registered
                trademark symbol on swag.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RouteWrapper(CorporateLogos);
