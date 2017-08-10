/* eslint-disable jsx-a11y/no-static-element-interactions */
import autobind from 'lib/autobind';
import React from 'react';

const ESCAPE = 27;

class Submenu extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === ESCAPE) {
      e.preventDefault();
      this.context.dropdown.closeSubmenu(0);
      this.context.dropdown.focusMenubarItem();
    }
  }

  render() {
    const { isOpen } = this.context.dropdown;
    return (
      <div
        {...this.props}
        role="menu"
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
        onKeyDown={this.onKeyDown}
      >
        {this.props.children}
      </div>
    );
  }
}

Submenu.contextTypes = {
  dropdown: React.PropTypes.object,
};

export default Submenu;
