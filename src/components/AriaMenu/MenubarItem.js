import React from 'react';
import { findDOMNode } from 'react-dom';
import Link from 'components/Link';
import autobind from 'lib/autobind';

const ENTER = 13;
const ESCAPE = 27;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;
const ARROW_DOWN = 40;

function isReactElement(element) {
  if (!element) return false;
  else if (element instanceof React.PureComponent) return true;
  else if (element instanceof React.Component) return true;
  return false;
}

class MenubarItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);
    this.type = null;
  }

  componentDidMount() {
    this.context.menubar.registerItem(this.element);
    if (this.context.dropdown) {
      this.context.dropdown.registerItem(this.element, true);
    }
  }

  componentWillUnmount() {
    this.context.menubar.unregisterItem(this.element);
  }

  addReference(element) {
    this.element = isReactElement(element)
      ? findDOMNode(element)
      : element;
  }

  onBlur() {
    if (this.context.dropdown) {
      this.context.dropdown.closeSubmenu();
    }
  }

  onFocus() {
    this.context.menubar.updateActiveItem(this.element);
    if (this.context.dropdown) {
      this.context.dropdown.updateActiveItem(this.element);
    }
  }

  onEnter(e) {
    const { dropdown } = this.context;
    if (dropdown && !dropdown.isOpen) {
      e.preventDefault();
      dropdown.openSubmenu();
    }
  }

  onEscape(e) {
    const { dropdown } = this.context;
    if (dropdown) {
      e.preventDefault();
      dropdown.closeSubmenu(0);
    }
  }

  onArrowLeft(e) {
    const { dropdown, menubar } = this.context;
    e.preventDefault();
    if (dropdown) dropdown.closeSubmenu(0);
    menubar.focusPrevItem();
  }

  onArrowRight(e) {
    const { dropdown, menubar } = this.context;
    e.preventDefault();
    if (dropdown) dropdown.closeSubmenu(0);
    menubar.focusNextItem();
  }

  onArrowDown(e) {
    const { dropdown } = this.context;
    e.preventDefault();
    if (dropdown) {
      if (dropdown.isOpen) dropdown.focusNextItem();
      else dropdown.openSubmenu();
    }
  }

  onKeyUp(e) {
    switch (e.keyCode) {
      case ENTER:
        this.onEnter(e);
        break;
      case ESCAPE:
        this.onEscape(e);
        break;
      case ARROW_LEFT:
        this.onArrowLeft(e);
        break;
      case ARROW_RIGHT:
        this.onArrowRight(e);
        break;
      case ARROW_DOWN:
        this.onArrowDown(e);
        break;
      // no default
    }
  }

  determineType() {
    if (this.props.type) return this.props.type;
    else if (this.props.href) return 'a';
    else if (this.props.to) return Link;
    return 'button';
  }

  render() {
    const Type = this.determineType();
    return (
      <Type
        ref={this.addReference}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyUp}
        {...this.props}
      >
        {this.props.children}
      </Type>
    );
  }
}

MenubarItem.contextTypes = {
  dropdown: React.PropTypes.object,
  menubar: React.PropTypes.object,
};

export default MenubarItem;
