/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';

import PageHelmet from 'components/PageHelmet';
import PageHeader from 'components/PageHeader';
import ContentfulText from 'components/ContentfulText';
import RouteWrapper from 'lib/route-wrapper';

class Iconography extends Component {
  render() {
    const introductionHeadingTextSection = `<h2>Our iconography reinforces the visual expression of our products, services and tools.</h2>
<p>The Foundation Medicine custom icon library utilizes a distinctly simplified style: abstracted and 2-dimensional with a strict stress on consistent line-weight. The library covers both icons to support print and digital branded materials, as well as icons for functional UI design work. Follow these guides for icon implementation across all platforms. <a>Find and download our icon library assets here.</a></p>`;
    const abstractedIconTextSection = `<h2>Icons are a key part of our digital and print communication.</h2>
<p>Using solely a mono-line weight as the overall aesthetic for the icons highlights our scientific heritage yet simplifies it. Our tone is reflected in our iconography: in their paired-back straightforwardness the icons are frank, humble (unpretentious, no frills), and simple yet informative.</p>`;
    const distinctIconTextSection = `<h2>Each icon should be distinct in the literal object or abstracted idea/feature it represents.</h2>
<p>The icons should always be represented in one color only; two colors may be used when employing partial-fills. Icon representation and color usage should always reflect the Foundation Medicine brand identity. Partial fills can be utilized when an icon, though functional in supporting text and concepts, holds more weight as a graphic element in a branded piece. Avoid using partial fills when icons are implemented at small scale, and never with UI essential icons.</p>`;
    const customHeaderIconTextSection = `<h2>All custom icons should be unified through concept and execution.</h2>`;
    const customContentIconTextSection = `
<p><strong>SPECS:</strong>&nbsp;New custom icons should be designed at 2pt line weight within a 1”x1” artboard, and must be outlined before scaling.</p>
<p><strong>FILLS:</strong>&nbsp;Fills should never be applied to the entirety of an icon; we instead opt for partial fills when appropriate. This way, the icons retain their simplicity and emphasis on mono-line weights. While the <strong>UI essential icons</strong> can be used against colored backgrounds, <strong><em>never use fills or partial fills with them.</em></strong></p>
<p><strong>CAPS:</strong>&nbsp;Line-weights should always have rounded caps: this gives the icon a finished look and takes away the potential harshness of unrounded stroke caps.</p>
<p><strong>DETAILS:</strong>&nbsp;Icons may have 3pt breaks in contours enclosing a figure: this helps to abstract the icon, create an accent of visual interest, whilst leaving the figure’s base simplicity in tact.</p>
<p><strong>HUMANS:</strong>&nbsp;In representing people, we want to always avoid showing a whole human figure.</p>
<p><strong>UI:</strong>&nbsp;Essential icons reflect the nature and aesthetic of the custom icons, but are simplified further to be read and understood clearly at small scale for functional user interactivity.</p>`;
    const naturalIconTextSection = `<h2>While an icon is in nature a visual element, it is most significantly functional in purpose.</h2>
<p>Our iconography serves to support the information being presented, not to create graphic illustrations. Once usage reaches the threshold of graphic and visual imagery as opposed to functional information support, please reference our <a href="#">illustration guidelines</a>, as usage conditions no longer fit in the realm of iconography.</p>`;
    const systemIconTextSection = `<h2>The icon system is flexible, but structure and consistency are vital.</h2>
<p>While there is room for versatility in usage and opportunity for the library to grow, it’s important to maintain the integrity of the styles and content we do and do not want to employ when using and creating new icons. Avoid using entire fills, and avoid filling UI essential icons altogether. Never apply textures, gradients or shadowing: these effects take away from the simplicity and abstraction of our iconography. Always keeps lineweights consistent within each icon, and keep the size of icons consistent on any given piece. Avoid utilizing iconography as illustration, depicting too many organs or body parts, and never represent the whole human body as an icon.</p>`;
    const lookAndFeelTextSection = `<h2>Iconography should have a consistent look and feel across all applications.</h2>
<p>Implementation of brand and UI icons should always function to support the corresoponding text or interaction, while also upholding the look and feel of our brand.</p>`;

    return (
      <div className="iconography base-section">
        <PageHelmet title="Iconography" description="Iconography"/>
        <div className="introduction-section base-layout section">
          <PageHeader
            preheading="Graphic Library"
            heading="Iconography"
            className="logo-header-text"/>
          <div className="header-logo-subsection flex-row">
            <ContentfulText text={introductionHeadingTextSection} className="logo-text"/>
            <div className="logo-container">
              <div className="img-responsive">
                <img src="/img/letter.png" alt=""/>
              </div>
              <div className="img-responsive">
                <img src="/img/dna.png" alt=""/>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/pie chart.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="abstracted-icon-section section base-layout">
          <div className="header-text">
            <ContentfulText text={abstractedIconTextSection}/>
          </div>
          <div className="flex-row">
            <div className="column">
              <div className="img-responsive">
                <img src={encodeURI('/img/test tube.png')} alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="img-responsive">
                <img src="/img/pencil.png" alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="img-responsive">
                <img src="/img/liver.png" alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="img-responsive">
                <img src="/img/hand.png" alt=""/>
              </div>
            </div>
            <div className="column">
              <div className="img-responsive">
                <img src="/img/immunoncology.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="distinct-icon-section section base-layout">
          <div className="header-text">
            <ContentfulText text={distinctIconTextSection}/>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">ONE COLOR, LINE-WEIGHT ONLY</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/DNA detail, line-weight.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">TWO COLORS, LINE-WEIGHT WITH PARTIAL FILL</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/DNA detail, with fill.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-icon-section section base-layout">
          <div className="header-text">
            <ContentfulText text={customHeaderIconTextSection}/>
          </div>
          <div className="flex-row">
            <div className="header-text column">
              <ContentfulText text={customContentIconTextSection}/>
            </div>
            <div className="column">
              <div className="logo-maintain-container">
                <div className="basic-text">
                  <h4 className="lockup-header">CUSTOM ICON SPECS AND DETAILS</h4>
                </div>
                <div className="img-responsive">
                  <img src="/img/specs.png" alt=""/>
                </div>
              </div>
              <div className="logo-maintain-container">
                <div className="basic-text">
                  <h4 className="lockup-header">PEOPLE IN ICONOGRAPHY</h4>
                </div>
                <div className="flex-row">
                  <div className="basic-text">
                    <h4 className="lockup-header">*FPO: FINAL ARTWORK IN PROCESS</h4>
                  </div>
                  <div className="img-responsive">
                    <img src="/img/community.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="logo-maintain-container">
                <div className="basic-text">
                  <h4 className="lockup-header">UI ESSENTIAL</h4>
                </div>
                <div className="flex-row no-filled">
                  <div className="img-responsive">
                    <img src={encodeURI('/img/Group 12_iconography.png')} alt=""/>
                  </div>
                  <div className="img-responsive">
                    <img src={encodeURI('/img/Group 13_iconography.png')} alt=""/>
                  </div>
                  <div className="img-responsive">
                    <img src="/img/Alert.png" alt=""/>
                  </div>
                </div>
                <div className="flex-row filled">
                  <div className="img-responsive">
                    <img src={encodeURI('/img/Group 12_fill_iconography.png')} alt=""/>
                  </div>
                  <div className="img-responsive">
                    <img src={encodeURI('/img/Group 13_fil_iconography.png')} alt=""/>
                  </div>
                  <div className="img-responsive">
                    <img src="/img/Alert_fill.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="system-icon-section section base-layout">
          <div className="header-text">
            <ContentfulText text={systemIconTextSection}/>
          </div>
          <div className="flex-row">
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">X – ENTIRE FILLS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/clock fill.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">X – UI ICON FILLS</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/lock fill.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">X – GRADIENTS, SHADOWS, TEXTURES</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/beaker.png" alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">X – VARIED LINE-WEIGHTS</h4>
              </div>
              <div className="img-responsive">
                <img src="/img/pills.png" alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container">
              <div className="basic-text">
                <h4 className="lockup-header">X – HUMAN BODY FIGURE</h4>
              </div>
              <div className="img-responsive">
                <img src={encodeURI('/img/Page 1.png')} alt=""/>
              </div>
            </div>
            <div className="logo-maintain-container"></div>
          </div>
        </div>
        <div className="natural-icon-section section base-layout">
          <div className="header-text">
            <ContentfulText text={naturalIconTextSection}/>
          </div>
        </div>
        <div className="look-and-fell-section section base-layout">
          <div className="header-text">
            <ContentfulText text={lookAndFeelTextSection}/>
          </div>
          <div className="flex-row">
            <div className="position-image-container column">
              <div className="img-responsive">
                <img src={encodeURI('/img/Group 4_iconography.png')} alt=""/>
              </div>
            </div>
            <div className="column basic-text">
              <h4 className="left-border">PATIENT BROCHURE USE-CASE</h4>
              <p>For this branded print piece we utilize brand icons in consistent proportions
                and single color. The icons provide a visual graphic element to the piece as
                well as functionally support the corresponding text in their imagery.
              </p>
            </div>
          </div>
          <div className="flex-row">
            <div className="position-image-container column">
              <div className="img-responsive">
                <img src="/img/Reskin@2x.png" alt=""/>
              </div>
            </div>
            <div className="column basic-text">
              <h4 className="left-border">MEDICAL REPORTING USE-CASE</h4>
              <p>Here we employ the essential icons for functional UI, constant in size and
                stroke color, with and without colored backgrounds. The icons provide a simple
                and informational visual element to support the various interactive functions on
                the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RouteWrapper(Iconography);
