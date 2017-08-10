import React from 'react';

import Dropdown from 'components/AriaMenu/Dropdown';
import LoginDropdown from 'components/Navigation/LoginDropdown';
import Menubar from 'components/AriaMenu/Menubar';
import MenubarItem from 'components/AriaMenu/MenubarItem';
import Submenu from 'components/AriaMenu/Submenu';
import SubmenuItem from 'components/AriaMenu/SubmenuItem';

function renderMenubaritem(item) {
  const props = item.internal ? { to: item.href } : { href: item.href };
  return (
    <li key={item.text}>
      {item.submenu && (
        <Dropdown className="navbar__dropdown">
          <MenubarItem activeClassName="navbar__link--current" className="navbar__link" {...props}>{item.text}</MenubarItem>
          <Submenu className="navbar__submenu">
            { item.submenu.map(renderSubmenuSection) }
          </Submenu>
        </Dropdown>
      )}
    </li>
  );
}

function renderSubmenuSection(section, i) {
  const modifier = i === 0 ? 'top' : 'bottom';
  return (
    <div
      className={`navbar__submenu-section navbar__submenu-section--${modifier}`}
      key={section.heading}
    >
      <p className="navbar__submenu-heading">{section.heading}</p>
      <ul className="navbar__submenu-items">
        { section.items.map(renderSubmenuItem) }
      </ul>
    </div>
  );
}

function renderSubmenuItem(item) {
  const props = item.internal ? { to: item.href } : { href: item.href };
  return (
    <li className="navbar__submenu-item" key={item.text}>
      <SubmenuItem className="navbar__submenu-link" {...props}>{item.text}</SubmenuItem>
    </li>
  );
}


function DesktopNav({ content }) {
  return (
    <nav className="navbar" role="navigation">
      <Menubar className="navbar__menubar" role="menubar">
        { content.map(renderMenubaritem) }
        <li><LoginDropdown /></li>
      </Menubar>
    </nav>
  );
}

export default DesktopNav;
