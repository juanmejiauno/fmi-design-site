
import React from 'react';
import ContentfulText from 'components/ContentfulText';
import ContentfulImage from 'components/ContentfulImage';

const INDEX_TOPPER_SIZES = `
  (min-width: 1335px) 815px,
  (min-width: 768px) calc(66vw - 100px),
  calc(100vw - 50px)
`;


const IndexTopper = ({ className = 'index-topper', pageTitle, heroImage, heroText }) => {
  return (
    <div className={className}>
      <header className="index-topper__header">
        <h1 className="index-topper__head"><ContentfulText text={pageTitle} /></h1>
        <div className="index-topper__hero">

          {heroImage && typeof heroImage === 'object' &&
            <ContentfulImage entry={heroImage} sizes={INDEX_TOPPER_SIZES} />
          }
          {heroImage && typeof heroImage === 'string' &&
            <img src={heroImage} alt="" />
          }
        </div>
      </header>
      <div className="index-topper__text">
        <ContentfulText text={heroText} />
      </div>
    </div>

  );
};

export default IndexTopper;
