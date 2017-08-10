import React from 'react';
import ContentfulText from 'components/ContentfulText';


const Factoid = ({ className = 'factoid', questionText, bodyText }) => {
  return (
    <div className={className}>
      <h3 className="factoid__question">{questionText}</h3>
      <div className="factoid__body">
        <ContentfulText text={bodyText} />
      </div>
    </div>
  );
};

export default Factoid;
