import React from 'react';
import ContentfulText from 'components/ContentfulText';
import concat from 'lib/concat-class';
import ContentfulImage from 'components/ContentfulImage';

function Trikick({ mainText, sidebarText, className, image }) {
  const TRIKICK_SIZES = `
    (min-width: 1335px) 1025px,
    (min-width: 1070px) calc(83vw - 100px),
    (min-width: 600px) calc(100vw - 100px),
    calc(100vw - 50px)
  `;

  return (
    <div className={concat('trikick', className)}>
      <div className="trikick__image">
        <ContentfulImage entry={image} sizes={TRIKICK_SIZES} />
      </div>
      <div className="trikick__text">
        <div className="trikick__main">
          <ContentfulText text={mainText} />
        </div>
        <aside className="trikick__sidebar">
          <ContentfulText text={sidebarText} />
        </aside>
      </div>
    </div>
  );
}

export default Trikick;
