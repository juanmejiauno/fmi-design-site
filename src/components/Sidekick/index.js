import { getReferenceField } from 'lib/contentful';
import get from 'lodash/get';
import React from 'react';
import ContentfulText from 'components/ContentfulText';
import ContentfulImage from 'components/ContentfulImage';
import concat from 'lib/concat-class';

function Sidekick({ className, entry, img, text }) {
  const image = entry ? getReferenceField(entry, 'image') : img;
  const content = entry ? get(entry, 'fields.text') : text;
  const SIDEKICK_SIZES = `
    (min-width: 1335px) 710px,
    (min-width: 1070px) calc((100vw - 100px) * .58),
    (min-width: 768px) calc((100vw - 100px) * .49 ),
    (min-width: 600px) calc((100vw - 100px) * .83),
    calc(100vw - 50px)
  `;


  return (
    <div className={concat('sidekick', className)}>
      <div className="sidekick__image">
        { entry && image && <ContentfulImage entry={image} sizes={SIDEKICK_SIZES} /> }
        { !entry && image && <img src={image} alt="" /> }
      </div>
      <div className="sidekick__text">
        <ContentfulText className="sidekick__text-inner" text={content} />
      </div>
    </div>
  );
}

export default Sidekick;
