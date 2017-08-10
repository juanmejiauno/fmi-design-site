import React from 'react';
import ContentfulText from 'components/ContentfulText';
import ContentfulImage from 'components/ContentfulImage';
import get from 'lodash/get';
import { getReferenceField } from 'lib/contentful';

const EcosystemDiagram = ({ entry }) => {
  const microheading = get(entry, 'fields.microHeading');
  const heading = get(entry, 'fields.heading');
  const circleGraphic = getReferenceField(entry, 'circleGraphic');
  const todayBody = get(entry, 'fields.betterCareTodayBody');
  const tomorrowBody = get(entry, 'fields.betterCareTomorrowBody');
  const togetherBody = get(entry, 'fields.betterCareTogetherBody');

  const CIRCLEGRAPHIC_SIZES = `
    (min-width: 1300px) 650px,
    (min-width: 1000) 440px,
    (min-width: 400px) 400px,
    calc(100vw - 50px)
  `;

  return (
    <figure className="ecosystem-diagram">
      {microheading &&
        <h3 className="ecosystem-diagram__microhead">{microheading}</h3>
      }
      {heading &&
        <h3 className="ecosystem-diagram__head">{heading}</h3>
      }

      <div className="ecosystem-diagram__circle">
        {circleGraphic &&
          <ContentfulImage entry={circleGraphic} sizes={CIRCLEGRAPHIC_SIZES} />
        }
      </div>

      <div className="ecosystem-diagram__groups">

        {todayBody &&
          <div className="ecosystem-diagram__group ecosystem-diagram__group--today">
            <h3>Better Care <em>Today</em></h3>
            <ContentfulText text={todayBody} />
          </div>
        }

        {tomorrowBody &&
          <div className="ecosystem-diagram__group ecosystem-diagram__group--tomorrow">
            <h3>Better Care <em>Tomorrow</em></h3>
            <ContentfulText text={tomorrowBody} />

          </div>
        }

        {togetherBody &&
          <div className="ecosystem-diagram__group ecosystem-diagram__group--together">
            <h3>Better Care <em>Together</em></h3>
            <ContentfulText text={togetherBody} />
          </div>
        }
      </div>
    </figure>
  );
};

export default EcosystemDiagram;
