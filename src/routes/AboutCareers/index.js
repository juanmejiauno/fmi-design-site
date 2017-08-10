import { get } from 'lodash';
import React from 'react';

import { getReferenceField } from 'lib/contentful';
import routeWrapper from 'lib/route-wrapper';
import PageHelmet from 'components/PageHelmet';
import HeroTopper from 'components/HeroTopper';
import BorderedQuote from 'components/BorderedQuote';
import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import PageHeader from 'components/PageHeader';
import ContentfulImage from 'components/ContentfulImage';
import BrowseOpenPosition from 'components/BrowseOpenPosition';

const TOP_SECTION_SIZES = `
  (min-width: 1335px) 395px,
  (min-width: 950px) calc(33v - 100px),
  (min-width: 760px) calc(50vw - 100px),
  (min-width: 600px) calc(100vw - 100px),
  calc(100vw - 50px)
`;

class AboutCareers extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('aboutCareers', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroHeading = get(page, 'fields.heroHeading');
    const heroText = get(page, 'fields.heroText');
    const topSectionText = get(page, 'fields.topSectionText');
    const footnotes = get(page, 'fields.footnotes');

    const heroImage = getReferenceField(page, 'heroImage');
    const topSectionImage = getReferenceField(page, 'topSectionImage');
    const borderedQuote = getReferenceField(page, 'borderedQuote');

    return (
      <div className="base-layout base-layout--pad-bottom">
        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImage}
        />

        <PageHeader preheading={'About Us'} preheadingUrl={'/about'} heading={heroHeading} className="page-header page-header--equal-padding" />

        <HeroTopper heroImage={heroImage} prefaceHead={heroText} />

        <section className="careers__main">
          { topSectionText &&
            <div className="careers__main-col">
              <ContentfulText text={topSectionText} />
            </div>
          }

          { topSectionImage &&
            <figure className="careers__image">
              <ContentfulImage entry={topSectionImage} sizes={TOP_SECTION_SIZES} />
            </figure>
          }
        </section>
        {/* <a className="link-cta-big" href={this.icimsUrl} onClick={this.handleAnchorClick}>Job Listings</a> */}
        <BrowseOpenPosition />

        { borderedQuote &&
          <BorderedQuote entry={borderedQuote} smartQuotes />
        }

        { footnotes &&
          <section className="careers-footnotes">
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

export default routeWrapper(AboutCareers, routeOptions);
