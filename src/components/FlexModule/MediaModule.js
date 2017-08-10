import concat from 'lib/concat-class';
import ContentfulText from 'components/ContentfulText';
import React from 'react';
import VideoModal from 'components/FlexModule/VideoModal';
import { getReferenceField } from 'lib/contentful';
import ContentfulImage from 'components/ContentfulImage';

function MediaModule({ entry, className }) {
  const pullquoteClass = entry.fields.styleAsPullQuote ? 'flex-module__head--pullquote' : '';
  const containClass = entry.fields.fullBleedImage ? '' : 'flex-module--contain-image';
  const image = getReferenceField(entry, 'image');

  const MEDIA_MODULE_SIZES = `
    (min-width: 1655px) 828px,
    (min-width: 768px) 50vw,
    calc(100vw)
  `;

  return (
    <section className={concat(className, containClass)}>
      <div className="flex-module__box flex-module__box--left">
        { entry.fields.microHeading && (
          <h4 className="flex-module__microhead">{entry.fields.microHeading}</h4>
        )}
        <h3 className={concat('flex-module__head', pullquoteClass)}>
          {entry.fields.heading}
        </h3>
        <div className="flex-module__line">|</div>
        <div className="flex-module__tease">
          <ContentfulText text={entry.fields.tease} />
        </div>
      </div>
      <div className="flex-module__box flex-module__box--right">
        {image && <ContentfulImage entry={image} sizes={MEDIA_MODULE_SIZES} />}
        {entry.fields.youtubeLink && <VideoModal link={entry.fields.youtubeLink} />}
      </div>
    </section>
  );
}

export default MediaModule;
