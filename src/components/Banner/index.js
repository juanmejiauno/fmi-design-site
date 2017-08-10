import React from 'react';
import autobind from 'lib/autobind';

export default class Banner extends React.Component {
  constructor() {
    super(...arguments);
    Object.assign(this, {
      state: {
        isClosedBanner: false,
      },
    });
    autobind(this, ['handleCloseButtonClick']);
  }

  handleCloseButtonClick(event) {
    event.preventDefault();
    this.setState({
      isClosedBanner: true,
    });
  }

  render() {
    const { isClosedBanner } = this.state;

    return (
      <div className={`Banner${isClosedBanner ? ' hide' : ' '}`}>
        <div className="legend-wrapper">
          <h2 className="legend">FoundationOne CDx has now received FDA approval.</h2>
        </div>
        <button className="close-btn" onClick={this.handleCloseButtonClick}>close button</button>
      </div>
    );
  }
}
