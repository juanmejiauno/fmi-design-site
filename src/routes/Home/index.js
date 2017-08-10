import { getReferenceField } from 'lib/contentful';
import { get } from 'lodash';
import React from 'react';
import routeWrapper from 'lib/route-wrapper';

import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import FlexModule from 'components/FlexModule';
import Link from 'components/Link';
import ScrollComponent from 'components/ScrollComponent';
import StoryBlock from 'routes/Home/StoryBlock';
import TriangleSVG from 'components/TriangleSVG';
import ContentfulImage from 'components/ContentfulImage';
import Banner from 'components/Banner';

const SCENE_OPTIONS = {
  reverse: false,
  triggerHook: 'onEnter',
  offset: 150,
};

const HOME_HERO_SIZES = `
  (min-width: 1235px) 710px,
  (min-width: 1200px) 58vw,
  (min-width: 600px) 50vw,
  100vw
`;

class Home extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('homePage', { include: 2 });
    return { page };
  }

  shouldDisplayBanner() {
    const { displayApprovalBanner } = process.env;
    return displayApprovalBanner === 'true';
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const heroHeading = get(page, 'fields.heroHeading');
    const heroText = get(page, 'fields.heroText');
    const heroPreface = get(page, 'fields.heroPreface');
    const footnotes = get(page, 'fields.footnotes');

    const heroImage = getReferenceField(page, 'heroImage');
    const todayBlocks = getReferenceField(page, 'todayStoryBlocks');
    const tomorrowBlocks = getReferenceField(page, 'tomorrowStoryBlocks');
    const togetherBlocks = getReferenceField(page, 'togetherStoryBlocks');
    const interstitials = getReferenceField(page, 'homeModuleInterstitials');

    return (
      <div className="home">

        { this.shouldDisplayBanner() && <Banner />}

        <div className="home-hero">
          <div className="home-hero__content">
            {heroImage &&
              <div className="home-hero__image">
                <ContentfulImage entry={heroImage} sizes={HOME_HERO_SIZES} />
              </div>
            }

            <header className="home-hero__header">
              <h1 className="home-hero__h1"><ContentfulText text={heroHeading} /></h1>
              <div className="home-hero__text"><ContentfulText text={heroText} /></div>
            </header>
          </div>
          <div className="home-hero__background" />
        </div>

        <section className="home-preface">
          <div className="home-preface__content">
            <ContentfulText text={heroPreface} />
          </div>
        </section>

        <section className="home-story-block home-story-block--today">

          <ScrollComponent setClassToggle="is-in-viewport" options={SCENE_OPTIONS}>
            <TriangleSVG className="home-story-block__triangle home-story-block__triangle--today" />
          </ScrollComponent>

          <div className="home-story-block__content">
            <h3 className="home-story-block__h3 home-story-block__h3--today">Better Care <em>Today</em></h3>
            <div className="home-story-block__offer-set">
              { todayBlocks && todayBlocks[0] &&
                <StoryBlock entry={todayBlocks[0]} number="1" className="home-story-block__offer home-story-block__offer--today" />
              }
              { todayBlocks && todayBlocks[1] &&
                <StoryBlock entry={todayBlocks[1]} number="2" className="home-story-block__offer home-story-block__offer--today" />
              }
            </div>
          </div>
        </section>

        { interstitials && interstitials[0] &&
          <FlexModule entry={interstitials[0]} className="flex-module flex-module--fire" />
        }

        <section className="home-story-block home-story-block--tomorrow">
          <ScrollComponent setClassToggle="is-in-viewport" options={SCENE_OPTIONS}>
            <TriangleSVG className="home-story-block__triangle home-story-block__triangle--tomorrow" />
          </ScrollComponent>

          <div className="home-story-block__content">
            <h3 className="home-story-block__h3 home-story-block__h3--tomorrow">Better Care <em>Tomorrow</em></h3>
            <div className="home-story-block__offer-set">
              { tomorrowBlocks && tomorrowBlocks[0] &&
                <StoryBlock entry={tomorrowBlocks[0]} number="3" className="home-story-block__offer home-story-block__offer--tomorrow" />
              }
              { tomorrowBlocks && tomorrowBlocks[1] &&
                <StoryBlock entry={tomorrowBlocks[1]} number="4" className="home-story-block__offer home-story-block__offer--tomorrow" />
              }
            </div>
          </div>

        </section>

        { interstitials && interstitials[1] &&
          <FlexModule entry={interstitials[1]} className="flex-module flex-module--green" />
        }

        <section className="home-story-block home-story-block--together">
          <ScrollComponent setClassToggle="is-in-viewport" options={SCENE_OPTIONS}>
            <TriangleSVG className="home-story-block__triangle home-story-block__triangle--together" />
          </ScrollComponent>

          <div className="home-story-block__content">
            <h3 className="home-story-block__h3 home-story-block__h3--together">Better Care <em>Together</em></h3>
            <div className="home-story-block__offer-set">
              { togetherBlocks && togetherBlocks[0] &&
                <StoryBlock entry={togetherBlocks[0]} number="5" className="home-story-block__offer home-story-block__offer--together" />
              }
              { togetherBlocks && togetherBlocks[1] &&
                <StoryBlock entry={togetherBlocks[1]} number="6" className="home-story-block__offer home-story-block__offer--together" />
              }
            </div>
          </div>
        </section>

        { interstitials && interstitials[2] &&
          <FlexModule entry={interstitials[2]} className="flex-module flex-module--blue-rich" />
        }

        <div className="base-layout">

          <section className="page-outro">
            <h2 className="page-outro__head">Join Us in the Pursuit of Better</h2>
            <p className="page-outro__body">Find out more about <Link to="/genomic-testing">genomic testing</Link>, learn more <Link to={'/about/'}>about us</Link>, or read the latest <Link to={'/blog/'}>updates from our blog</Link>.</p>
          </section>
        </div>

        { footnotes &&
          <section className="assay-single-footnotes">
            <Footnotes text={footnotes} className="page-footnotes" />
          </section>
        }

      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['page'],
};

export default routeWrapper(Home, routeOptions);
