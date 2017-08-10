import React from 'react';
import LoginButton from 'components/LoginButton';
import Dropdown from 'components/AriaMenu/Dropdown';
import MenubarItem from 'components/AriaMenu/MenubarItem';
import Submenu from 'components/AriaMenu/Submenu';
import SubmenuItem from 'components/AriaMenu/SubmenuItem';

const DASHBOARD_LINK = process.env.dashboardLink;
const ACCOUNT_LINK = process.env.accountLink;

function getUserName({ firstName, lastName }) {
  const name = `${firstName} ${lastName.charAt(0)}.`;
  return name.trim() || 'Welcome';
}

function LoginMenuItem(props, { session, user }) {
  if (!user) return (<LoginButton type={MenubarItem} />);
  return (
    <Dropdown className="navbar__dropdown">
      <MenubarItem className="navbar__link navbar__link--button navbar__link--logged-in" href={DASHBOARD_LINK}>{ getUserName(user) }</MenubarItem>
      <Submenu className="navbar__submenu navbar__submenu--last">
        <p className="navbar__submenu-heading">Your Account</p>
        <div className="navbar__submenu-section navbar__submenu-section--top">
          <ul className="navbar__submenu-items">
            <li className="navbar__submenu-item">
              <SubmenuItem className="navbar__submenu-link" href={DASHBOARD_LINK}>
                Applications
              </SubmenuItem>
            </li>
            <li className="navbar__submenu-item">
              <SubmenuItem className="navbar__submenu-link" href={ACCOUNT_LINK}>
                Account
              </SubmenuItem>
            </li>
            <li className="navbar__submenu-item">
              <SubmenuItem className="navbar__submenu-link" onClick={session.logout} tabIndex="0">
                Log Out
              </SubmenuItem>
            </li>
          </ul>
        </div>
      </Submenu>
    </Dropdown>
  );
}

LoginMenuItem.contextTypes = {
  session: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default LoginMenuItem;
