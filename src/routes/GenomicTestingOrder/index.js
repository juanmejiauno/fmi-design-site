import React from 'react';
import { get } from 'lodash';

import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import FileList from 'components/FileList';
import PageHeader from 'components/PageHeader';
import PageHelmet from 'components/PageHelmet';
import PageSubheader from 'components/PageSubheader';
import routeWrapper from 'lib/route-wrapper';
import { getReferenceField } from 'lib/contentful';


function renderDetailsBlocks(entries) {
  return entries.map((entry) => {
    const title = get(entry, 'fields.title');
    const body = get(entry, 'fields.body');
    const notes = get(entry, 'fields.notes');
    const downloads = get(entry, 'fields.formsAndDownloads');
    const keyName = entry.sys.id;

    return (
      <div className="order-block" key={keyName}>
        <div className="order-block__text">
          {title &&
            <h3 className="order-block__title">{title}</h3>
          }
          {body &&
            <div className="order-block__body">
              <ContentfulText text={body} />
            </div>
          }
          {notes &&
            <div className="order-block__notes">
              <ContentfulText text={notes} />
            </div>
          }
        </div>
        {downloads &&
          <div className="order-block__filelist">
            <FileList files={downloads} heading="Forms &amp; Downloads" />
          </div>
        }
      </div>
    );
  });
}

class GenomicTestingOrder extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('orderPage', { include: 1 });
    return { page };
  }


  render() {
    const page = get(this, 'props.route.data.page');
    const pageTitle = get(page, 'fields.pageTitle');
    const subheading = get(page, 'fields.subHeading');
    const introText = get(page, 'fields.introText');
    const overviewPart1 = get(page, 'fields.overviewPart1');
    const overviewPart2 = get(page, 'fields.overviewPart2');
    const detailBlocks = getReferenceField(page, 'genomicTestOrderingDetails');

    return (
      <div>
        <PageHelmet
          title={pageTitle}
          description={introText}
        />
        <div className="base-layout base-layout--pad-bottom">
          <PageHeader heading={pageTitle} preheading="Genomic Testing" preheadingUrl="/genomic-testing" />


          <div className="basic-page__intro-group">

            { subheading &&
              <PageSubheader subheading={subheading} />
            }

            { introText &&
              <section className="basic-page__introduction">
                <ContentfulText text={introText} className="basic-page__intro-text basic-text" />
              </section>
            }

          </div>

          <div className="order-overview">
            <Card>
              <h3 className="order-overview__head">Ordering Overview</h3>
              <div className="order-overview__parts">
                {overviewPart1 &&
                  <div className="order-overview__part order-overview__part--1"><ContentfulText text={overviewPart1} /></div>
                }

                {overviewPart2 &&
                  <div className="order-overview__part order-overview__part--2"><ContentfulText text={overviewPart2} /></div>
                }
              </div>
            </Card>
          </div>

          {detailBlocks &&
            <div>
              {renderDetailsBlocks(detailBlocks)}
            </div>
          }

        </div>
      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['page'],
};

export default routeWrapper(GenomicTestingOrder, routeOptions);
