/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

import PageHeader from 'components/PageHeader';

class Colors extends Component {
  render() {
    return (
      <div className="colors base-layout--pad-bottom">
        <div className="base-layout layout-content">
          <div className="colors-page-header">
            <PageHeader preheading={'Brand Palette'} heading={'Colors'} />
          </div>
          <div className="colors-page-content">
            <div className=" base-layout--pad-bottom">
              Our color palette differentiates the brand and defines our presence in the healthcare tech space.
              The Foundation Medicine color palette balances black and white photography and white backgrounds with bold, warm and modern colors. In print materials, gold foil can act as an accent. Color usage should always be reflective of the overarching brand architecture: here we lay out the specifications and hierarchy for proper color usage. <a href="https://brandfolder.com/s/ouobb9-584xm8-35z9v2" target="_blank">Find our brand color assets here.</a>

            </div>

            <div className="separator" />

            <div className=" base-layout--pad-bottom">primary colors</div>

            <div className="separator" />

            <div className=" base-layout--pad-bottom">secondary colors</div>

            <div className="separator" />
          </div>
        </div>
      </div>
    );
  }
}

export default routeWrapper(Colors);
