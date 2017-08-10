import React from 'react';
import { get } from 'lodash';

import PageHelmet from 'components/PageHelmet';
import BorderedQuote from 'components/BorderedQuote';
import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import EcosystemDiagram from 'components/EcosystemDiagram';
import FlexModule from 'components/FlexModule';
import Footnotes from 'components/Footnotes';
import ContentfulImage from 'components/ContentfulImage';
import Milestones from 'components/Milestones';
import PageHeader from 'components/PageHeader';
import routeWrapper from 'lib/route-wrapper';
import { getReferenceField } from 'lib/contentful';

const HERO_SIZES = [
  '(min-width: 1335px) 815px, (min-width: 600px) calc(66vw - 100px), (min-width: 400px) calc(66vw - 50px), calc(100vw - 50px)',
  '(min-width: 1335px) 395px, (min-width: 600px) calc(32vw - 100px), (min-width: 400px) calc(32vw - 50px), 0',
];

const CULTURE_SIZES = `
  (min-width: 1335px) 395px,
  (min-width: 1070px) calc((100vw - 100px) * .32),
  (min-width: 600px) calc((100vw - 100px) * .41),
  (min-width: 400px) calc((100vw - 50px) * .49),
  calc(100vw - 50px)
`;

class AboutIndex extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('aboutIndex', { include: 1 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroHeading = get(page, 'fields.heroHeading');
    const section1Heading = get(page, 'fields.section1Heading');
    const section1Text = get(page, 'fields.section1Text');
    const foundationFacts = get(page, 'fields.foundationFacts');
    const section2Heading = get(page, 'fields.section2Heading');
    const section2Text = get(page, 'fields.section2Text');
    const section3Text = get(page, 'fields.section3Text');
    const footnotes = get(page, 'fields.footnotes');

    const heroImages = getReferenceField(page, 'heroImages');
    const ecosystemDiagram = getReferenceField(page, 'ecosystemDiagram');
    const section2Images = getReferenceField(page, 'section2Images');
    const milestonesDiagram = getReferenceField(page, 'milestonesDiagram');
    const borderedQuote = getReferenceField(page, 'borderedQuote');
    const module = getReferenceField(page, 'module');

    return (
      <div>
        <PageHelmet
          title={pageTitle}
          description={section1Text}
          image={heroImages && heroImages[0]}
        />

        <div className="base-layout base-layout--pad-bottom">
          <div className="about-index-hero">
            {
              heroImages.map((image, i) => {
                const url = get(image, 'fields.file.url');
                return (
                  <div className="about-index-hero__image" key={url}>
                    { image &&
                      <ContentfulImage entry={image} sizes={HERO_SIZES[i]} />
                    }
                  </div>
                );
              })
            }
          </div>

          <div className="about-index-page-header">
            { heroHeading &&
              <PageHeader preheading={'About Us'} heading={heroHeading} />
            }
          </div>

          <section className="secondary-section secondary-section--intro">
            { section1Heading &&
              <h2 className="head-secondary">
                <ContentfulText text={section1Heading} />
              </h2>
            }
            { section1Text &&
              <ContentfulText text={section1Text} />
            }
          </section>

          { ecosystemDiagram &&
            <EcosystemDiagram entry={ecosystemDiagram} />
          }

        </div>


        { foundationFacts &&
          <section className="about-index-facts">
            <div className="base-layout">
              <Card {...foundationFacts.fields} />
            </div>
          </section> }

        <div className="base-layout">
          <section>
            <header>
              <h2 className="head-secondary">
                <ContentfulText text={section2Heading} />
              </h2>
              <figure className="about-index-culture-images">
                { section2Images &&
                  <div className="about-index-culture-images__images">
                    { section2Images && section2Images[0] &&
                      <ContentfulImage entry={section2Images[0]} sizes={CULTURE_SIZES} />
                    }
                    { section2Images && section2Images[1] &&
                      <ContentfulImage entry={section2Images[1]} sizes={CULTURE_SIZES} />
                    }
                  </div>
                }
              </figure>
            </header>
            { section2Text &&
              <div className="secondary-section">
                <ContentfulText text={section2Text} />
              </div>
            }
          </section>

          { milestonesDiagram &&
            <div className="about-index-milestones">
              <Milestones entry={milestonesDiagram} />
            </div>
          }

          { section3Text &&
          <div className="secondary-section">
            <ContentfulText text={section3Text} />
          </div>
        }

          { borderedQuote &&
            <BorderedQuote entry={borderedQuote} smartQuotes />
          }

        </div>

        { module &&
          <FlexModule entry={module} className="flex-module flex-module--no-offset flex-module--fire" />
        }

        { footnotes &&
          <section className="about-index-footnotes">
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

export default routeWrapper(AboutIndex, routeOptions);
