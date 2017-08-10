import React from 'react';
import { get } from 'lodash';

import PageHelmet from 'components/PageHelmet';
import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import FlexModule from 'components/FlexModule';
import Footnotes from 'components/Footnotes';
import HeroTopper from 'components/HeroTopper';
import PageHeader from 'components/PageHeader';
import Sidekick from 'components/Sidekick';
import routeWrapper from 'lib/route-wrapper';
import { getReferenceField } from 'lib/contentful';

class AboutCulture extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('aboutCulture', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heading = get(page, 'fields.heroHeading');
    const heroText = get(page, 'fields.heroText');
    const heroImage = getReferenceField(page, 'heroImage');

    const section1Title = get(page, 'fields.section1Title');
    const section1Text = get(page, 'fields.section1Text');
    const section1Pillars = get(page, 'fields.section1Pillars');

    const section2Title = get(page, 'fields.section2Title');
    const section2Text = get(page, 'fields.section2Text');
    const section2Card = getReferenceField(page, 'section2Card');
    const section2Sidekick = getReferenceField(page, 'section2Sidekick');
    const section2Outro = get(page, 'fields.section2Outro');

    const flexModule = get(page, 'fields.flexModule');
    const footnotes = get(page, 'fields.footnotes');

    return (
      <div className="culture">
        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImage}
        />

        <div className="base-layout">

          <PageHeader preheadingUrl="/about" preheading="About Us" heading={heading} className="page-header page-header--equal-padding" />

          <HeroTopper heroImage={heroImage} prefaceHead={heroText} />

          <div className="secondary-section secondary-section--centered">
            <h2 className="head-secondary">{section1Title}</h2>
            <ContentfulText text={section1Text} />
          </div>

          <div className="culture-pillars">
            <div className="cultural-pillars__content">
              <ContentfulText text={section1Pillars} />
            </div>
          </div>

        </div>

        <div className="culture-people">
          <div className="base-layout">
            <div className="secondary-section secondary-section--centered">
              <h2 className="head-secondary">{section2Title}</h2>
              <ContentfulText text={section2Text} />
            </div>

            { section2Card &&
              <Card {...section2Card.fields} /> }
          </div>
        </div>

        <div className="base-layout">
          <div className="culture-uniquely">
            { section2Sidekick &&
              <Sidekick className="sidekick sidekick--overlap" entry={section2Sidekick} />
            }

            <div className="culture-uniquely__follow-us secondary-section secondary-section--centered">
              <ContentfulText text={section2Outro} />
            </div>

          </div>
        </div>


        { flexModule &&
          <FlexModule entry={flexModule} className="flex-module flex-module--green flex-module--no-offset" />
        }

        { footnotes &&
          <section className="culture-footnotes">
            <Footnotes text={footnotes} className="page-footnotes page-footnotes--pad-top" />
          </section>
        }

      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['page'],
};

export default routeWrapper(AboutCulture, routeOptions);
