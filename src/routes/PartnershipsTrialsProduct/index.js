import { getReferenceField } from 'lib/contentful';
import routeWrapper from 'lib/route-wrapper';
import get from 'lodash/get';
import unescape from 'lodash/unescape';
import slugify from 'slugify';
import React from 'react';
import styleName from 'lib/style-name';

import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import JumpNav from 'components/JumpNav';
import Link from 'components/Link';
import ProductTopper from 'components/ProductTopper';
import Sidekick from 'components/Sidekick';
import ContentfulImage from 'components/ContentfulImage';
import PageHelmet from 'components/PageHelmet';

const SECTION1_FIGURE_SIZES = `
  (min-width: 1335px) 710px,
  (min-width: 1070px) calc(59vw - 100px),
  (min-width: 768px) calc(43vw - 100px),
  (min-width: 600px) calc(100vw - 100px),
  calc(100vw - 50px)
`;

class DataTrialsProduct extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('dataSmartTrials', { include: 2 });
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
    const section1FigureMicroHeading = get(page, 'fields.section1FigureMicroHeading');
    const section1FigureHeading = get(page, 'fields.section1FigureHeading');
    const section1FigureText = get(page, 'fields.section1FigureText');
    const section2LinkLabel = get(page, 'fields.section2LinkLabel');
    const section2Title = get(page, 'fields.section2Title');
    const section2Text = get(page, 'fields.section2Text');
    const section2DiagramText = get(page, 'fields.section2DiagramText');
    const section2DiagramCheckmarks = get(page, 'fields.section2DiagramCheckmarks');
    const section3LinkLabel = get(page, 'fields.section3LinkLabel');
    const section3Title = get(page, 'fields.section3Title');
    const section3Text = get(page, 'fields.section3Text');
    const section3FigureHeading = get(page, 'fields.section3FigureHeading');
    const section3FigureText = get(page, 'fields.section3FigureText');
    const section3FigureBorderedText = get(page, 'fields.section3FigureBorderedText');
    const bottomLinkCaption = get(page, 'fields.bottomLinkCaption');
    const bottomLinkText = get(page, 'fields.bottomLinkText');
    const bottomLinkUrl = get(page, 'fields.bottomLinkUrl');
    const footnotes = get(page, 'fields.footnotes');

    const section1FigureImage = getReferenceField(page, 'section1FigureImage');
    const section2DiagramImage = getReferenceField(page, 'section2DiagramImage');
    const sidekicks = getReferenceField(page, 'sidekicks');

    const section1Label = unescape(section1LinkLabel || section1Title);
    const section2Label = unescape(section2LinkLabel || section2Title);
    const section3Label = unescape(section3LinkLabel || section3Title);

    const section1Slug = slugify(section1Label).toLowerCase();
    const section2Slug = slugify(section2Label).toLowerCase();
    const section3Slug = slugify(section3Label).toLowerCase();

    return (
      <div className="trials">
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

        <div className="data-insights__section base-layout">
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

        <section className="trials__section trials__overview" id={section1Slug}>
          <div className="base-layout">
            <h2 className="head-secondary">{ section1Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section1Text} />
            </div>
          </div>
          <div className="trials__overview-two-up">
            <h4 className="head-micro">{ section1FigureMicroHeading }</h4>
            <h3 className="head-tertiary">{ section1FigureHeading }</h3>
            <div className="base-layout trials__overview-two-up--inner">
              <div className="trials__overview-image">
                { section1FigureImage &&
                  <ContentfulImage entry={section1FigureImage} sizes={SECTION1_FIGURE_SIZES} />
                }
              </div>
              <div className="trials__overview-card">
                <ContentfulText text={section1FigureText} />
              </div>
            </div>
          </div>
        </section>

        <div className="base-layout base-layout--pad-bottom">

          <section className="trials__section trials__solutions" id={section2Slug}>
            <h2 className="head-secondary">{ section2Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section2Text} />
            </div>
            <figure className="solutions-diagram">
              <div className="solutions-diagram__lists">
                <div className="solutions-diagram__list--left">
                  <ContentfulText text={section2DiagramText} />
                </div>
                <div className="solutions-diagram__image">
                  { section2DiagramImage &&
                    <ContentfulImage entry={section2DiagramImage} />
                  }
                </div>
                <ul className="solutions-diagram__list solutions-diagram__list--right">
                  {
                    section2DiagramCheckmarks.map(checkmarkText => (
                      <li className="solutions-diagram__item" key={checkmarkText}>
                        <h5 className="solutions-diagram__item-head">{ unescape(checkmarkText) }</h5>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </figure>
          </section>

          <section className="trials__section trials__enrollment" id={section3Slug}>
            <h2 className="head-secondary">{ section3Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section3Text} />
            </div>

            <div className="trials__precision-enrollment">
              <h3 className="trials__precision-enrollment__head">{ section3FigureHeading }</h3>
              <div className="secondary-section trials__precision-enrollment__secondary">
                <ContentfulText text={section3FigureText} />
              </div>
              <div className="precision-enrollment__how-chart">
                <div className="how-chart--inner">
                  <ContentfulText text={section3FigureBorderedText} />
                </div>
              </div>
            </div>

            { sidekicks && sidekicks[0] &&
              <Sidekick entry={sidekicks[0]} />
            }

            { sidekicks && sidekicks[1] &&
              <Sidekick entry={sidekicks[1]} className="sidekick--reverse" />
            }
          </section>

          <div className="cta">
            <h2 className="cta__desc line-under">{ bottomLinkCaption }</h2>
            <p><Link className="link-cta-big" to={bottomLinkUrl}>{ bottomLinkText }</Link></p>
          </div>

          { footnotes &&
            <section className="assay-single-footnotes">
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

export default routeWrapper(DataTrialsProduct, routeOptions);
