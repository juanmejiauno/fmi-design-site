import ContentfulText from 'components/ContentfulText';
import React from 'react';

function StoryBlock({ entry, number, className }) {
  return (
    <div className={className}>
      <h6 className="home-story-block__number">{number}</h6>
      <h4 className="home-story-block__h4"><ContentfulText text={entry.fields.microHeading} /></h4>
      <h5 className="home-story-block__h5"><ContentfulText text={entry.fields.heading} /></h5>
      <div className="home-story-block__text"><ContentfulText text={entry.fields.text} /></div>
    </div>
  );
}

export default StoryBlock;
