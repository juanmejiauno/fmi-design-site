import { getReferenceField } from 'lib/contentful';
import get from 'lodash/get';
import unescape from 'lodash/unescape';
import slugify from 'slugify';
import React from 'react';
import styleName from 'lib/style-name';
import routeWrapper from 'lib/route-wrapper';

import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import JumpNav from 'components/JumpNav';
import Link from 'components/Link';
import ProductTopper from 'components/ProductTopper';
import ContentfulImage from 'components/ContentfulImage';
import Sidekick from 'components/Sidekick';
import PageHelmet from 'components/PageHelmet';

const SECTION2_SIZES = `
  (min-width: 1335px) 720px,
  (min-width: 768px) calc(58vw - 90px),
  (min-width: 600px) calc(100vw - 130px),
  calc(100vw - 90px)
`;

class PartnershipsInsightsProduct extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('dataInsights', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');
    const pageTitle = get(page, 'fields.pageTitle');
    const heroUppercaseTitle = get(page, 'fields.heroUppercaseTitle');
    const heroText = get(page, 'fields.heroText');
    const section1LinkLabel = get(page, 'fields.section1LinkLabel');
    const section1Title = get(page, 'fields.section1Title');
    const section1Text = get(page, 'fields.section1Text');
    const section2LinkLabel = get(page, 'fields.section2LinkLabel');
    const section2Title = get(page, 'fields.section2Title');
    const section2Subtitle = get(page, 'fields.section2Subtitle');
    const section2Text = get(page, 'fields.section2Text');
    const section2Image = get(page, 'fields.section2Image');
    const section2LinkCaption = get(page, 'fields.section2LinkCaption');
    const section2LinkText = get(page, 'fields.section2LinkText');
    const section2LinkUrl = get(page, 'fields.section2LinkUrl');
    const section3LinkLabel = get(page, 'fields.section3LinkLabel');
    const section3Title = get(page, 'fields.section3Title');
    const section3Text = get(page, 'fields.section3Text');
    const bottomLinkCaption = get(page, 'fields.bottomLinkCaption');
    const bottomLinkText = get(page, 'fields.bottomLinkText');
    const bottomLinkUrl = get(page, 'fields.bottomLinkUrl');
    const footnotes = get(page, 'fields.footnotes');

    const overviewCard = getReferenceField(page, 'overviewCard');
    const section1Sidekick = getReferenceField(page, 'section1Sidekick');
    const section3Sidekick = getReferenceField(page, 'section3Sidekick');

    const section1Label = unescape(section1LinkLabel || section1Title);
    const section2Label = unescape(section2LinkLabel || section2Title);
    const section3Label = unescape(section3LinkLabel || section3Title);

    const section1Slug = slugify(section1Label).toLowerCase();
    const section2Slug = slugify(section2Label).toLowerCase();
    const section3Slug = slugify(section3Label).toLowerCase();

    return (
      <div className="insights">

        <PageHelmet
          title={pageTitle}
          description={heroText}
        />

        <ProductTopper
          className="product-topper__green"
          preheadingLink="/insights-and-partnerships"
          preheadingText="Insights &amp; Partnerships"
          head={styleName(heroUppercaseTitle)}
          text={heroText}
        />

        <div className="insights__section base-layout">
          <div className="product__jump-nav">
            <JumpNav
              links={[
                { target: section1Slug, label: section1Label },
                { target: section2Slug, label: section2Label },
                { target: section3Slug, label: section3Label },
              ]}
            />
          </div>
        </div>

        <div className="base-layout base-layout--pad-bottom">

          <section className="insights__section insights__overview" id={section1Slug}>
            <h2 className="head-secondary">{ section1Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section1Text} />
            </div>

            { overviewCard &&
              <Card {...overviewCard.fields} /> }

            { section1Sidekick &&
              <Sidekick entry={section1Sidekick} />
            }
          </section>

          <section className="insights__section insights__explore" id={section2Slug}>
            <div className="insights__explore--inner">
              <h2 className="head-secondary insights__explore__head">{ section2Title }</h2>
              <div className="secondary-section secondary-section--centered insights__explore__secondary">
                <p>{ section2Subtitle }</p>
              </div>
              <div className="insights__explore__image">
                { section2Image &&
                  <ContentfulImage entry={section2Image} sizes={SECTION2_SIZES} />
                }
              </div>
              <div className="insights__explore__text">
                <ContentfulText text={section2Text} />
              </div>
            </div>
            <div className="insights__explore__cta cta">
              <h2 className="cta__desc line-under">{ section2LinkCaption }</h2>
              <p className="link-cta-medium">
                <Link to={section2LinkUrl} className="link-cta-medium">
                  { section2LinkText }
                </Link>
              </p>
            </div>
          </section>

          <section className="insights__section insights__contact" id={section3Slug}>
            <h2 className="head-secondary">{ section3Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section3Text} />
            </div>
            { section3Sidekick &&
              <Sidekick className="sidekick--reverse" entry={section3Sidekick} />
            }
          </section>

          <div className="cta">
            <h2 className="cta__desc line-under">{ bottomLinkCaption }</h2>
            <p>
              <Link to={bottomLinkUrl} className="link-cta-big">
                { bottomLinkText }
              </Link>
            </p>
          </div>

          { footnotes &&
            <section className="insights-footnotes">
              <Footnotes text={footnotes} className="page-footnotes page-footnotes--pad-top" />
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

export default routeWrapper(PartnershipsInsightsProduct, routeOptions);
