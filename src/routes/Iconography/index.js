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
        <div className="abstracted-icon-section section base-layout section">
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
      </div>
    );
  }
}
export default RouteWrapper(Iconography);
