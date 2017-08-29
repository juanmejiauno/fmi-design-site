import React from 'react';

const ColorSwatch = ({ imgSrc, colorName, subName, colorClass = '', hex, rgb, pms, platforms = '' }) => {
  return (
    <div className={`content-sidekick ${platforms}`} data-platforms={platforms}>
      <div className="content__image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="content__text">
        <span className={`list-title ${colorClass}`}>{colorName}</span>
        {subName &&
        <span className="list-title sub">{subName}</span>
        }
        <ul>
          <li><span className="slate">HEX</span> {hex}</li>
          {rgb &&
          <li><span className="slate">RGB</span> {rgb}</li>
          }
          {pms &&
          <li><span className="slate">PMS</span> {pms}</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default ColorSwatch;
