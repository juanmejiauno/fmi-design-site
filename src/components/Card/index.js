import React from 'react';
import CardContent from 'components/Card/Content';

const Card = ({ children, ...contentProps }) => (
  <div className="card">
    <div className="card__inner">
      { children ?
        <div className="card__content">{children}</div> :
        <CardContent {...contentProps} /> }
    </div>
  </div>
);

export default Card;
