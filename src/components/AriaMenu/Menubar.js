/* eslint-disable jsx-a11y/no-static-element-interactions */
import autobind from 'lib/autobind';
import React from 'react';
import pull from 'lodash/pull';

class Menubar extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);

    this.items = [];

    this.state = {
      activeItem: null,
    };
  }

  getChildContext() {
    return {
      menubar: {
        registerItem: this.registerItem,
        unregisterItem: this.unregisterItem,
        focusNextItem: this.focusNextItem,
        focusPrevItem: this.focusPrevItem,
        updateActiveItem: this.updateActiveItem,
      },
    };
  }

  registerItem(element) {
    this.items.push(element);
  }

  unregisterItem(element) {
    pull(this.items, element);
  }

  focusNextItem() {
    const { activeItem } = this.state;
    const lastIndex = this.items.length - 1;
    const current = this.items.indexOf(activeItem);
    const next = (current === lastIndex) ? 0 : current + 1;
    this.items[next].focus();
  }

  focusPrevItem() {
    const { activeItem } = this.state;
    const lastIndex = this.items.length - 1;
    const current = this.items.indexOf(activeItem);
    const next = (current === 0) ? lastIndex : current - 1;
    this.items[next].focus();
  }

  updateActiveItem(element) {
    this.setState({ activeItem: element });
  }

  render() {
    return (
      <ul {...this.props} role="menubar">
        {this.props.children}
      </ul>
    );
  }
}

Menubar.childContextTypes = {
  menubar: React.PropTypes.object,
};

export default Menubar;
