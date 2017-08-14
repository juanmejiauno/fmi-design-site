/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

class BrandArchitecture extends Component {
  render() {
    return (
      <div className="base-layout base-layout--pad-bottom">
        Brand Architecture
      </div>
    );
  }
}

export default routeWrapper(BrandArchitecture);
