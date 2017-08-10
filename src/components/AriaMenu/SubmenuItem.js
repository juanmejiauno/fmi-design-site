import React from 'react';
import { findDOMNode } from 'react-dom';
import Link from 'components/Link';
import autobind from 'lib/autobind';

const ARROW_LEFT = 37;
const ARROW_UP = 38;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

class SubmenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);
  }

  componentDidMount() {
    if (this.context && this.context.dropdown) {
      this.context.dropdown.registerItem(this.element);
    }
  }

  addReference(element) {
    this.element = this.props.href || this.props.to
      ? findDOMNode(element)
      : element;
  }

  onBlur() {
    this.context.dropdown.closeSubmenu();
  }

  onFocus() {
    this.context.dropdown.updateActiveItem(this.element);
    this.context.dropdown.openSubmenu();
  }

  onArrowLeft(e) {
    e.preventDefault();
    this.context.dropdown.closeSubmenu(0);
    this.context.menubar.focusPrevItem();
  }

  onArrowUp(e) {
    e.preventDefault();
    this.context.dropdown.focusPrevItem();
  }

  onArrowRight(e) {
    e.preventDefault();
    this.context.dropdown.closeSubmenu(0);
    this.context.menubar.focusNextItem();
  }

  onArrowDown(e) {
    e.preventDefault();
    this.context.dropdown.focusNextItem();
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case ARROW_LEFT:
        this.onArrowLeft(e);
        break;
      case ARROW_UP:
        this.onArrowUp(e);
        break;
      case ARROW_RIGHT:
        this.onArrowRight(e);
        break;
      case ARROW_DOWN:
        this.onArrowDown(e);
        break;
      default:
    }
  }

  render() {
    let Type = 'button';

    if (this.props.to) Type = Link;
    else if (this.props.href) Type = 'a';

    return (
      <Type
        {...this.props}
        ref={this.addReference}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex={this.context.dropdown.isOpen ? 0 : -1}
      >
        {this.props.children}
      </Type>
    );
  }
}

SubmenuItem.contextTypes = {
  menubar: React.PropTypes.object,
  dropdown: React.PropTypes.object,
};

export default SubmenuItem;
