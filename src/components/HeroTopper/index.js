import React from 'react';
import ContentfulText from 'components/ContentfulText';
import ContentfulImage from 'components/ContentfulImage';

const HERO_TOPPER_SIZES = `
  (min-width: 1335px) 1235px,
  (min-width: 600px) calc(100vw - 100px),
  calc(100vw - 50px)
`;


const HeroTopper = ({ heroImage, prefaceHead, prefaceText }) => {
  return (
    <div className="hero-topper">
      {heroImage && typeof heroImage === 'object' &&
        <div className="hero-topper__image">
          <ContentfulImage entry={heroImage} className="js-hero-topper-image" sizes={HERO_TOPPER_SIZES} />
        </div>
      }

      {heroImage && typeof heroImage === 'string' &&
        <div className="hero-topper__image">
          <img src={heroImage} className="js-hero-topper-image" alt="" />
        </div>
      }

      <section className="hero-topper__intro">
        <div className="hero-topper__intro-content">
          {prefaceHead &&
            <h2 className="hero-topper__preface js-hero-topper-text"><ContentfulText text={prefaceHead} /></h2>
          }
          {prefaceText &&
            <p className="secondary-text secondary-text--centered"><ContentfulText text={prefaceText} /></p>
          }
        </div>
      </section>
    </div>
  );
};

export default HeroTopper;
