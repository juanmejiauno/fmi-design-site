/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import routeWrapper from 'lib/route-wrapper';

class DesignPrinciples extends Component {
  render() {
    return (
      <div className="dp">Design Principles</div>
    );
  }
}

export default routeWrapper(DesignPrinciples);
