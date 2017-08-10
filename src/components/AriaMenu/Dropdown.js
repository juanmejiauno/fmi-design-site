/* eslint-disable jsx-a11y/no-static-element-interactions */
import autobind from 'lib/autobind';
import React from 'react';
import concat from 'lib/concat-class';

class Dropdown extends React.Component {
  constructor(props, context) {
    super(props, context);
    autobind(this);

    this.menubarItem = null;
    this.submenuItems = [];
    this.timeoutID = null;
    this.unlisten = null;

    this.state = {
      activeItem: null,
      isOpen: false,
    };
  }

  getChildContext() {
    return {
      dropdown: {
        closeSubmenu: this.closeSubmenu,
        focusMenubarItem: this.focusMenubarItem,
        focusNextItem: this.focusNextItem,
        focusPrevItem: this.focusPrevItem,
        isOpen: this.state.isOpen,
        openSubmenu: this.openSubmenu,
        registerItem: this.registerItem,
        updateActiveItem: this.updateActiveItem,
      },
    };
  }

  getSubMenuItemsLastIndex() {
    return this.submenuItems.length - 1;
  }

  closeSubmenu(delay = 50) {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.setState({ isOpen: false });
    }, delay);
  }

  focusMenubarItem() {
    this.menubarItem.focus();
  }

  focusNextItem() {
    const { activeItem } = this.state;
    const lastIndex = this.getSubMenuItemsLastIndex();
    const current = this.submenuItems.indexOf(activeItem);
    const next = (current === -1 || current === lastIndex) ? 0 : current + 1;
    this.submenuItems[next].focus();
  }

  focusPrevItem() {
    const { activeItem } = this.state;
    const lastIndex = this.getSubMenuItemsLastIndex();
    const current = this.submenuItems.indexOf(activeItem);
    const next = (current === 0) ? lastIndex : current - 1;
    this.submenuItems[next].focus();
  }

  openSubmenu() {
    clearTimeout(this.timeoutID);
    this.setState({ isOpen: true });
  }

  registerItem(element, isMenubarItem = false) {
    if (isMenubarItem) this.menubarItem = element;
    else this.submenuItems.push(element);
  }

  updateActiveItem(element) {
    this.setState({ activeItem: element });
  }

  onMouseEnter() {
    this.openSubmenu();
  }

  onMouseLeave() {
    this.closeSubmenu();
  }

  componentDidMount() {
    if (this.context.router) {
      this.unlisten = this.context.router.listen(() => {
        this.closeSubmenu(0);
      });
    }
  }

  componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
  }

  render() {
    const { className, ...props } = this.props;
    const hoverClass = this.state.isOpen ? 'navbar__dropdown--dropdown-is-open' : '';
    return (
      <div
        {...props}
        className={concat(className, hoverClass)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </div>
    );
  }
}

Dropdown.contextTypes = {
  router: React.PropTypes.object,
};

Dropdown.childContextTypes = {
  dropdown: React.PropTypes.object,
};

export default Dropdown;
