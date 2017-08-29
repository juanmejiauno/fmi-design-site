import React from 'react';
import content from 'components/LeftNav/content.json';

const openNav = () => {
  document.getElementById('openNav').style.visibility = 'hidden';
  document.getElementById('mySidenav').style.left = '0';
};

const closeNav = () => {
  document.getElementById('mySidenav').style.left = '-220px';
  document.getElementById('openNav').style.visibility = 'visible';
};

const renderLink = (item, href) => {
  return (
    <a href={href + item.href}>{ item.text }</a>
  );
};

const renderSection = (section) => {
  return (
    <div>
      <span className="section">{ section.section }</span>
      { section.menu.map((item) => { return renderLink(item, section.href); }) }
    </div>
  );
};

const LeftNav = () => {
  return (
    <div className="left-nav">
      <nav id="mySidenav" className="sidenav">
        <button className="closebtn" onClick={closeNav}>&times;</button>
        { content.map(renderSection) }
      </nav>

      <button id="openNav" className="openbtn" onClick={openNav}>
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};

export default LeftNav;
