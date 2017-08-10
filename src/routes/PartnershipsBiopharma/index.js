import { getReferenceField } from 'lib/contentful';
import get from 'lodash/get';
import React from 'react';
import routeWrapper from 'lib/route-wrapper';

import BorderedQuote from 'components/BorderedQuote';
import ContentfulText from 'components/ContentfulText';
import FlexModule from 'components/FlexModule';
import Footnotes from 'components/Footnotes';
import PageHelmet from 'components/PageHelmet';
import HeroTopper from 'components/HeroTopper';
import Link from 'components/Link';
import PageHeader from 'components/PageHeader';
import Sidekick from 'components/Sidekick';
import Trikick from 'components/Trikick';

const PAGE_SECTIONS = [
  'molecular-profiling',
  'biopharma-development',
  'companion-diagnostics',
];

class PartnershipsBiopharma extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('dataDrugDevelopment', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroTitle = get(page, 'fields.heroTitle');
    const heroText = get(page, 'fields.heroText');
    const overviewSectionTitle = get(page, 'fields.overviewSectionTitle');
    const overviewCard1Title = get(page, 'fields.overviewCard1Title');
    const overviewCard1Text = get(page, 'fields.overviewCard1Text');
    const overviewCard2Title = get(page, 'fields.overviewCard2Title');
    const overviewCard2Text = get(page, 'fields.overviewCard2Text');
    const overviewCard3Title = get(page, 'fields.overviewCard3Title');
    const overviewCard3Text = get(page, 'fields.overviewCard3Text');
    const section1Title = get(page, 'fields.section1Title');
    const section1Text = get(page, 'fields.section1Text');
    const section2Title = get(page, 'fields.section2Title');
    const section2Text = get(page, 'fields.section2Text');
    const section2Content = get(page, 'fields.section2Content');
    const section2Aside = get(page, 'fields.section2Aside');
    const section3Title = get(page, 'fields.section3Title');
    const section3Content = get(page, 'fields.section3Content');
    const section3Aside = get(page, 'fields.section3Aside');
    const bottomLinkCaption = get(page, 'fields.bottomLinkCaption');
    const bottomLinkText = get(page, 'fields.bottomLinkText');
    const bottomLinkUrl = get(page, 'fields.bottomLinkUrl');
    const footnotes = get(page, 'fields.footnotes');

    const heroImage = getReferenceField(page, 'heroImage');
    const section1Sidekicks = getReferenceField(page, 'section1Sidekicks');
    const borderedQuote = getReferenceField(page, 'borderedQuote');
    const section2Image = getReferenceField(page, 'section2Image');
    const flexModule = getReferenceField(page, 'module');

    const overviewCardTitles = [overviewCard1Title, overviewCard2Title, overviewCard3Title];
    const overviewCardTexts = [overviewCard1Text, overviewCard2Text, overviewCard3Text];

    return (
      <div className="biopharma">
        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImage}
        />

        <div className="base-layout">
          <PageHeader
            className="page-header page-header--equal-padding page-header--data"
            preheadingUrl="/insights-and-partnerships"
            preheading={'Insights & Partnerships'}
            heading={pageTitle}
          />
          <HeroTopper
            heroImage={heroImage}
            prefaceHead={heroTitle}
            prefaceText={heroText}
          />
        </div>

        <section className="biopharma-outline">
          <div className="base-layout">
            <h3 className="biopharma-outline__microhead">Overview</h3>
            <h2 className="biopharma-outline__head head-tertiary">{ overviewSectionTitle }</h2>
            <ul className="biopharma-outline__list">
              {
                PAGE_SECTIONS.map((slug, i) => (
                  <li className="biopharma-outline__item" key={slug}>
                    <h4 className="biopharma-outline__item-head">
                      <Link to={`/insights-and-partnerships/biopharma-partnerships/#${slug}`}>
                        { overviewCardTitles[i] }
                      </Link>
                    </h4>
                    <div className="biopharma-outline__item-desc">
                      <ContentfulText text={overviewCardTexts[i]} />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>

        <section className="biopharma-research" id={PAGE_SECTIONS[0]}>
          <div className="base-layout">
            <div className="secondary-section secondary-section--centered">
              <h2 className="head-secondary">{ section1Title }</h2>
              <ContentfulText text={section1Text} />
            </div>
            <div className="biopharma-sidekicks">
              { section1Sidekicks && section1Sidekicks[0] &&
                <Sidekick entry={section1Sidekicks[0]} className="sidekick--overlap" />
              }
              { section1Sidekicks && section1Sidekicks[1] &&
                <Sidekick entry={section1Sidekicks[1]} className="sidekick--overlap sidekick--reverse" />
              }
            </div>
            { borderedQuote &&
              <BorderedQuote entry={borderedQuote} smartQuotes />
            }
          </div>
        </section>

        <section className="biopharma-development" id={PAGE_SECTIONS[1]}>
          <div className="base-layout">
            <div className="secondary-section secondary-section--centered">
              <h2 className="head-secondary">{ section2Title }</h2>
              <ContentfulText text={section2Text} />
            </div>
            <div className="biopharma-devservices">
              <Trikick
                mainText={section2Content}
                sidebarText={section2Aside}
                image={section2Image}
              />
            </div>
          </div>
        </section>

        <section className="biopharma-commercial" id={PAGE_SECTIONS[2]}>
          <div className="base-layout">
            <h2 className="head-secondary">{ section3Title }</h2>

            <div className="biopharma-commercial__text">

              <div className="biopharma-commercial__main">
                <ContentfulText text={section3Content} />
              </div>
              <aside className="biopharma-commercial__sidebar">
                <ContentfulText text={section3Aside} />
              </aside>
            </div>
          </div>
        </section>

        { flexModule &&
          <FlexModule entry={flexModule} className="flex-module flex-module--blue-rich" />
        }

        <div className="base-layout">

          <div className="biopharma-cta">
            <div className="cta">
              <h2 className="cta__desc line-under">{ bottomLinkCaption }</h2>
              <p>
                <Link className="link-cta-big" to={bottomLinkUrl}>
                  { bottomLinkText }
                </Link>
              </p>
            </div>
          </div>

          { footnotes &&
            <section className="biopharma-footnotes">
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

export default routeWrapper(PartnershipsBiopharma, routeOptions);
