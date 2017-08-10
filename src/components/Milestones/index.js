import React from 'react';
import ContentfulText from 'components/ContentfulText';
import get from 'lodash/get';
import ContentfulImage from 'components/ContentfulImage';

const MILESTONE_KEYS = [1, 2, 3, 4, 5];
const MILESTONE_IMAGE_SIZES = '80px';

function renderMilestones(entry) {
  return (key) => {
    const image = get(entry, `fields.milestonesItem${key}Image`);
    const text = get(entry, `fields.milestonesItem${key}Text`);
    return (
      <li className="milestones__item" key={`milestone__item--${key}`}>
        { image && <ContentfulImage entry={image} sizes={MILESTONE_IMAGE_SIZES} /> }
        <ContentfulText text={text} />
      </li>
    );
  };
}

const Milestones = ({ entry }) => (
  <figure className="milestones">
    {entry.fields.milestonesHeading && <h3 className="milestones__head">{entry.fields.milestonesHeading}</h3> }

    <div className="milestones__content">
      <ol className="milestones__list">
        {
          MILESTONE_KEYS.map(renderMilestones(entry))
        }
      </ol>
    </div>
  </figure>
);

export default Milestones;
