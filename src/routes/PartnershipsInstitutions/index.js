import { getReferenceField } from 'lib/contentful';
import React from 'react';
import get from 'lodash/get';
import routeWrapper from 'lib/route-wrapper';

import BorderedQuote from 'components/BorderedQuote';
import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import HeroTopper from 'components/HeroTopper';
import Link from 'components/Link';
import PageHeader from 'components/PageHeader';
import Sidekick from 'components/Sidekick';
import Trikick from 'components/Trikick';
import PageHelmet from 'components/PageHelmet';
import ContentfulImage from 'components/ContentfulImage';

class PartnershipsInstitutions extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('dataInstitutions', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroTitle = get(page, 'fields.heroTitle');
    const heroText = get(page, 'fields.heroText');
    const heroImageUrl = get(page, 'fields.heroImage.fields.file.url');
    const section1Title = get(page, 'fields.section1Title');
    const section2Title = get(page, 'fields.section2Title');
    const section2Text = get(page, 'fields.section2Text');
    const section2SharingContent = get(page, 'fields.section2SharingContent');
    const section2SharingAside = get(page, 'fields.section2SharingAside');
    const section2SharingImage = get(page, 'fields.section2SharingImage');
    const section3Title = get(page, 'fields.section3Title');
    const section3Text = get(page, 'fields.section3Text');
    const section3Feature1Heading = get(page, 'fields.section3Feature1Heading');
    const section3Feature1Text = get(page, 'fields.section3Feature1Text');
    const section3Feature1Link = get(page, 'fields.section3Feature1Link');
    const section3Feature1LinkText = get(page, 'fields.section3Feature1LinkText');
    const section3Feature2Heading = get(page, 'fields.section3Feature2Heading');
    const section3Feature2Text = get(page, 'fields.section3Feature2Text');
    const section3Feature2Link = get(page, 'fields.section3Feature2Link');
    const section3Feature2LinkText = get(page, 'fields.section3Feature2LinkText');
    const bottomLinkCaption = get(page, 'fields.bottomLinkCaption');
    const bottomLinkText = get(page, 'fields.bottomLinkText');
    const bottomLinkUrl = get(page, 'fields.bottomLinkUrl');
    const footnotes = get(page, 'fields.footnotes');

    const section1Sidekicks = getReferenceField(page, 'section1Sidekicks');
    const section2Card = getReferenceField(page, 'section2Card');
    const section2Quote = getReferenceField(page, 'section2Quote');
    const section3Feature1Image = getReferenceField(page, 'section3Feature1Image');
    const section3Feature2Image = getReferenceField(page, 'section3Feature2Image');

    return (
      <div className="institutional-partnerships">
        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImageUrl}
        />

        <div className="base-layout base-layout--pad-bottom">

          <PageHeader className="page-header page-header--equal-padding page-header--data" preheadingUrl="/insights-and-partnerships" preheading={'Insights & Partnerships'} heading={pageTitle} />

          <HeroTopper heroImage={heroImageUrl} prefaceHead={heroTitle} prefaceText={heroText} />

          <div className="secondary-section secondary-section--centered">
            <h2 className="head-secondary">{ section1Title }</h2>
          </div>

          <section className="institutional-sidekicks">
            { section1Sidekicks && section1Sidekicks[0] &&
              <Sidekick className="sidekick--overlap" entry={section1Sidekicks[0]} />
            }
            { section1Sidekicks && section1Sidekicks[1] &&
              <Sidekick className="sidekick--overlap sidekick--reverse" entry={section1Sidekicks[1]} />
            }
          </section>

          <section className="institutional-research">

            <div className="secondary-section secondary-section--centered">
              <h2 className="head-secondary">{ section2Title }</h2>
              <ContentfulText text={section2Text} />
            </div>

            { section2Card &&
              <Card {...section2Card.fields} />
            }

            <div className="institutional-sharing">
              <Trikick image={section2SharingImage} mainText={section2SharingContent} sidebarText={section2SharingAside} />
            </div>

            { section2Quote &&
              <BorderedQuote entry={section2Quote} smartQuotes />
            }

          </section>

          <section className="institutional-trials">
            <div className="secondary-section secondary-section--centered">
              <h2 className="head-secondary">{ section3Title }</h2>
              <ContentfulText text={section3Text} />
            </div>

            <div className="institutional-trials__features">

              <div className="institutional-trials__feature institutional-trials__feature--jit">
                { section3Feature1Image &&
                  <ContentfulImage entry={section3Feature1Image} />
                }
                <h4 className="head-tertiary">{ section3Feature1Heading }</h4>
                <ContentfulText text={section3Feature1Text} />
                <p><a href={section3Feature1Link}>{ section3Feature1LinkText }</a></p>
              </div>

              <div className="institutional-trials__feature institutional-trials__feature--reporting">
                { section3Feature2Image &&
                  <ContentfulImage entry={section3Feature2Image} />
                }
                <h4 className="head-tertiary">{ section3Feature2Heading }</h4>
                <ContentfulText text={section3Feature2Text} />
                <p><a href={section3Feature2Link}>{ section3Feature2LinkText }</a></p>
              </div>

            </div>

          </section>

          <div className="cta">
            <h2 className="cta__desc line-under">{ bottomLinkCaption }</h2>
            <p><Link to={bottomLinkUrl} className="link-cta-big">{ bottomLinkText }</Link></p>
          </div>

          { footnotes &&
            <section className="assay-single-footnotes">
              <Footnotes text={footnotes} className="page-footnotes" />
            </section>
          }

        </div>
      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['page'],
};

export default routeWrapper(PartnershipsInstitutions, routeOptions);
