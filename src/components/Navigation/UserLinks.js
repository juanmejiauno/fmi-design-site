import React from 'react';

const DASHBOARD_LINK = process.env.dashboardLink;
const ACCOUNT_LINK = process.env.accountLink;

function UserLinks({ onLogout }, { session, user }) {
  if (!user) return null;
  const onClick = () => session.logout().then(onLogout).catch(onLogout);
  return (
    <li className="mobile-user-links">
      <p className="navbar__submenu-heading">Welcome, {user.firstName}</p>
      <div className="navbar__submenu-section navbar__submenu-section--top">
        <ul className="navbar__submenu-items">
          <li className="navbar__submenu-item">
            <a className="navbar__submenu-link" href={DASHBOARD_LINK}>Applications</a>
          </li>
          <li className="navbar__submenu-item">
            <a className="navbar__submenu-link" href={ACCOUNT_LINK}>Account</a>
          </li>
          <li className="navbar__submenu-item">
            <a className="navbar__submenu-link" onClick={onClick} tabIndex="0">Log Out</a>
          </li>
        </ul>
      </div>
    </li>
  );
}

UserLinks.contextTypes = {
  session: React.PropTypes.object,
  user: React.PropTypes.object,
};

export default UserLinks;
