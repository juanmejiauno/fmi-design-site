import React from 'react';
import ContentfulText from 'components/ContentfulText';

const Footnotes = ({ text, className }) => {
  return (
    <div className={className}>
      <ContentfulText text={text} />
    </div>
  );
};

export default Footnotes;
