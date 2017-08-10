import { getReferenceField } from 'lib/contentful';
import { get } from 'lodash';
import React from 'react';
import routeWrapper from 'lib/route-wrapper';

import ContentfulText from 'components/ContentfulText';
import Footnotes from 'components/Footnotes';
import PageHeader from 'components/PageHeader';
import PageHelmet from 'components/PageHelmet';
import PageSubheader from 'components/PageSubheader';
import FileList from 'components/FileList';
import FaqRepeater from 'components/FaqRepeater';

class BasicPage extends React.Component {
  static async fetchData(client, { params }) {
    const page = await client.getEntry(params.slug, 'basicPage');
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const subheading = get(page, 'fields.subheading');
    const introText = get(page, 'fields.introText');
    const mainText = get(page, 'fields.mainText');
    const footnotes = get(page, 'fields.footnotes');

    const sidebarFiles = getReferenceField(page, 'sidebarFiles');
    const faq = getReferenceField(page, 'faq');

    return (
      <article className="base-layout base-layout--pad-bottom">
        <PageHelmet
          title={pageTitle}
          description={introText}
        />

        <PageHeader heading={pageTitle} />

        <div className="basic-page__intro-group">

          { subheading &&
            <PageSubheader subheading={subheading} />
          }

          { introText &&
            <section className="basic-page__introduction">
              <ContentfulText text={introText} className="basic-page__intro-text basic-text js-page-intro" />
            </section>
          }

        </div>

        <div className="basic-page__content">

          <section className="basic-page__main">

            { mainText &&
              <ContentfulText text={mainText} className="basic-page__main-col basic-text js-page-main" />
            }

            {sidebarFiles &&
              <aside className="basic-page__sidebar">
                <FileList files={sidebarFiles} heading="Downloads" />
              </aside>
            }
          </section>

          { faq &&
            <section>
              <div className="faq-set">
                <FaqRepeater faq={faq} />
              </div>
            </section>
          }

          { footnotes &&
            <section className="basic-page-footnotes">
              <Footnotes text={footnotes} className="page-footnotes page-footnotes--pad-top" />
            </section>
          }

        </div>
      </article>
    );
  }
}

const routeOptions = {
  requiredProps: ['page'],
};

export default routeWrapper(BasicPage, routeOptions);
