import React from 'react';

import autobind from 'lib/autobind';

class GridToggle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isShowingGrid: false,
    };

    autobind(this, ['toggleGrid', 'handleKeydown']);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  getGridClass() {
    return this.state.isShowingGrid ? 'grid is-showing-grid' : 'grid';
  }

  handleKeydown(e) {
    // OPTION SHIFT L toggles grid
    if (e.altKey && e.shiftKey && e.keyCode === 76) {
      e.preventDefault();
      this.toggleGrid();
    }
  }

  toggleGrid() {
    const isShowing = this.state.isShowingGrid;
    this.setState({
      isShowingGrid: !isShowing,
    });
  }

  render() {
    return (
      <div>
        <div className={this.getGridClass()}>
          <div className="grid__content base-layout">
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
            <div className="grid__col" />
          </div>
        </div>
      </div>
    );
  }
}
export default GridToggle;
