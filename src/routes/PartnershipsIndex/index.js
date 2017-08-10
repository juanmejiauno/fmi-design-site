import React from 'react';
import get from 'lodash/get';
import { getReferenceField } from 'lib/contentful';
import routeWrapper from 'lib/route-wrapper';

import IndexTopper from 'components/IndexTopper';
import Link from 'components/Link';
import ContentfulText from 'components/ContentfulText';
import ContentfulImage from 'components/ContentfulImage';
import Footnotes from 'components/Footnotes';
import PageHelmet from 'components/PageHelmet';

const TEASE_SIZES = `
  (min-width: 1335px) 605px,
  (min-width: 600px) calc(49vw - 100px),
  calc(100vw - 50px)
`;

class PartnershipsIndex extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('dataIndex', { include: 2 });
    const institutions = await client.getSingleton('dataInstitutions', { include: 2 });
    const drugDevelopment = await client.getSingleton('dataDrugDevelopment', { include: 2 });
    return { page, institutions, drugDevelopment };
  }

  render() {
    const page = get(this, 'props.route.data.page');
    const institutions = get(this, 'props.route.data.institutions');
    const drugDevelopment = get(this, 'props.route.data.drugDevelopment');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroTitle = get(page, 'fields.heroTitle');
    const heroText = get(page, 'fields.heroText');
    const heroImage = get(page, 'fields.heroImage');
    const institutionsText = get(page, 'fields.institutionalPartnershipsText');
    const drugDevelopmentText = get(page, 'fields.drugDevelopmentText');
    const footnotes = get(page, 'fields.footnotes');

    const institutionsImage = getReferenceField(institutions, 'heroImage');
    const drugDevelopmentImage = getReferenceField(drugDevelopment, 'heroImage');

    return (
      <div className="partnershipsindex base-layout base-layout--pad-bottom">

        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImage}
        />

        <section className="partnershipsindex-topper">
          <IndexTopper
            className="index-topper index-topper--data"
            pageTitle={heroTitle}
            heroImage={heroImage}
            heroText={heroText}
          />
        </section>

        <section className="partnershipsindex-teases">

          <div className="partnershipsindex-teases__tease">
            <h3 className="partnershipsindex-teases__tease-head head-tertiary">Institutional Partnerships</h3>
            <Link className="partnershipsindex-teases__tease-image" to="/insights-and-partnerships/institutional-partnerships">
              { institutionsImage &&
                <ContentfulImage entry={institutionsImage} sizes={TEASE_SIZES} />
              }
            </Link>

            <div className="partnershipsindex-teases__tease-text">
              <ContentfulText text={institutionsText} />
              <p><Link to="/insights-and-partnerships/institutional-partnerships">More about Institutional Partnerships</Link></p>
            </div>
          </div>

          <div className="partnershipsindex-teases__tease">
            <h3 className="partnershipsindex-teases__tease-head head-tertiary">Biopharma Partnerships</h3>
            <Link className="partnershipsindex-teases__tease-image" to="/insights-and-partnerships/biopharma-partnerships">
              { drugDevelopmentImage &&
                <ContentfulImage entry={drugDevelopmentImage} sizes={TEASE_SIZES} />
              }
            </Link>
            <div className="partnershipsindex-teases__tease-text">
              <ContentfulText text={drugDevelopmentText} />
              <p><Link to="/insights-and-partnerships/biopharma-partnerships">More about Biopharma Partnerships</Link></p>
            </div>
          </div>

        </section>

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
  requiredProps: ['page', 'institutions', 'drugDevelopment'],
};

export default routeWrapper(PartnershipsIndex, routeOptions);
