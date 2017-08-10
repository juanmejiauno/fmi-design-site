import { getReferenceField } from 'lib/contentful';
import get from 'lodash/get';
import React from 'react';
import slugify from 'slugify';
import unescape from 'lodash/unescape';
import routeWrapper from 'lib/route-wrapper';

import AssayTable from 'components/AssayTable';
import JumpNav from 'components/JumpNav';
import FaqRepeater from 'components/FaqRepeater';
import FlexModule from 'components/FlexModule';
import Footnotes from 'components/Footnotes';
import ContentfulText from 'components/ContentfulText';
import IndexTopper from 'components/IndexTopper';
import ContentfulImage from 'components/ContentfulImage';
import PageHelmet from 'components/PageHelmet';

const SECTION3_SIZES = `
  (min-width: 1035px) 605px,
  (min-width: 600px) 49vw - 100px,
  calc(100vw - 50px)
`;

class GenomicTestingIndex extends React.Component {
  static async fetchData(client) {
    const page = await client.getSingleton('genomicTestingIndex', { include: 2 });
    return { page };
  }

  render() {
    const page = get(this, 'props.route.data.page');

    const pageTitle = get(page, 'fields.pageTitle');
    const heroText = get(page, 'fields.heroText');
    const section1Title = get(page, 'fields.section1Title');
    const section1LinkLabel = get(page, 'fields.section1LinkLabel');
    const section1Body = get(page, 'fields.section1Body');
    const section1Sidebar = get(page, 'fields.section1Sidebar');
    const faqTitle = get(page, 'fields.faqTitle');
    const faqOutro = get(page, 'fields.faqOutro');
    const section2Title = get(page, 'fields.section2Title');
    const section2LinkLabel = get(page, 'fields.section2LinkLabel');
    const section2Body = get(page, 'fields.section2Body');
    const section2DiagramText = get(page, 'fields.section2DiagramText');
    const section3Title = get(page, 'fields.section3Title');
    const section3LinkLabel = get(page, 'fields.section3LinkLabel');
    const section3TopCallout = get(page, 'fields.section3TopCallout');
    const section3BottomCallout = get(page, 'fields.section3BottomCallout');
    const section3Body = get(page, 'fields.section3Body');
    const footerTitle = get(page, 'fields.footerTitle');
    const footerBody = get(page, 'fields.footerBody');
    const footnotes = get(page, 'fields.footnotes');

    const heroImage = getReferenceField(page, 'heroImage');
    const flexModule = getReferenceField(page, 'flexModule');
    const assayTable = getReferenceField(page, 'assayTable');
    const faqPage = getReferenceField(page, 'faqPage');
    const faqPatients = getReferenceField(page, 'faqPatients');
    const faqPhysicians = getReferenceField(page, 'faqPhysicians');
    const faqBiopharma = getReferenceField(page, 'faqBiopharma');
    const section2DiagramImage = getReferenceField(page, 'section2DiagramImage');
    const sampleReportLinkText = get(page, 'fields.sampleReportLinkText');
    const sampleReportPdf = getReferenceField(page, 'sampleReportPdf');
    const section3TopImage = getReferenceField(page, 'section3TopImage');
    const section3BottomImage = getReferenceField(page, 'section3BottomImage');

    const section1Label = unescape(section1LinkLabel || section1Title);
    const section2Label = unescape(section2LinkLabel || section2Title);
    const section3Label = unescape(section3LinkLabel || section3Title);

    const section1Slug = slugify(section1Label).toLowerCase();
    const section2Slug = slugify(section2Label).toLowerCase();
    const section3Slug = slugify(section3Label).toLowerCase();

    const faqPageSlug = get(faqPage, 'fields.slug');
    const sampleReportUrl = get(sampleReportPdf, 'fields.file.url');

    return (
      <div className="assays-index">
        <PageHelmet
          title={pageTitle}
          description={heroText}
          image={heroImage}
        />

        <div className="base-layout">
          <section className="assays-index-section">

            <IndexTopper className="index-topper index-topper--genomic-testing" pageTitle={pageTitle} heroImage={heroImage} heroText={heroText} />

            <div className="index-topper__jump-nav">
              <JumpNav
                links={[
                  { target: section1Slug, label: section1Label },
                  { target: section2Slug, label: section2Label },
                  { target: section3Slug, label: section3Label },
                ]}
              />
            </div>
          </section>

          <section className="assays-index-how assays-index-section" id={section1Slug}>
            <h2 className="assays-index-how__head head-secondary">
              <ContentfulText text={section1Title} />
            </h2>

            <div className="assays-index-how__content">

              <div className="assays-index-how__body">
                <ContentfulText text={section1Body} />
              </div>

              <div className="assays-index-how__process">
                <ContentfulText text={section1Sidebar} />
              </div>
            </div>

            { assayTable &&
              <div className="assays-index-portfolio">
                <h4 className="assays-index-portfolio__prehead">Compare Foundation Tests</h4>
                <h3 className="assays-index-portfolio__head head-tertiary">Our Diagnostic Portfolio</h3>
                <div className="product-portfolio__table">
                  <AssayTable entries={assayTable} />
                </div>
              </div>
            }
          </section>

          { faqPage && faqPageSlug &&
            <div className="assays-index-faqs">
              <h2 className="assays-index-faqs__head">{faqTitle}</h2>
              <div className="assays-index-faqs__faq-sets">
                { faqPatients &&
                  <div className="assays-index-faqs__faq-set">
                    <h3 className="assays-index-faqs__subhead">Patients</h3>
                    <FaqRepeater faq={faqPatients} linkTo={`/pages/${faqPageSlug}`} />
                  </div>
                }
                { faqPhysicians &&
                  <div className="assays-index-faqs__faq-set">
                    <h3 className="assays-index-faqs__subhead">Physicians</h3>
                    <FaqRepeater faq={faqPhysicians} linkTo={`/pages/${faqPageSlug}`} />
                  </div>
                }
                { faqBiopharma &&
                  <div className="assays-index-faqs__faq-set">
                    <h3 className="assays-index-faqs__subhead">Biopharma</h3>
                    <FaqRepeater faq={faqBiopharma} linkTo={`/pages/${faqPageSlug}`} />
                  </div>
                }
              </div>
              <div className="assays-index-faqs__outro">
                <ContentfulText text={faqOutro} />
              </div>
            </div>
          }

          <section className="assays-index-results assays-index-section" id={section2Slug}>
            <h2 className="head-secondary">
              <ContentfulText text={section2Title} />
            </h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section2Body} />
            </div>
            <div className="assays-index-results-diagram">
              <ContentfulText text={section2DiagramText} />
              { section2DiagramImage &&
                <div className="assays-index-results-diagram__illo">
                  <ContentfulImage entry={section2DiagramImage} />
                </div>
              }
            </div>
            { sampleReportUrl && sampleReportLinkText &&
              <p className="assays-index-results__cta">
                <a className="link-cta-medium" target="_blank" rel="noopener noreferrer" href={sampleReportUrl}>{sampleReportLinkText}</a>
              </p>
            }

          </section>
        </div>

        <section className="assays-index__module assays-index-section">
          { flexModule &&
            <FlexModule entry={flexModule} className="flex-module flex-module--fire-beige" />
          }
        </section>

        <div className="base-layout">

          <section className="assays-index-support assays-index-section" id={section3Slug}>
            <h2 className="head-secondary">
              <ContentfulText text={section3Title} />
            </h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section3Body} />
            </div>

            <div className="assays-index-support__blocks">

              <div className="assays-index-support__block">
                <div className="assays-index-support__block-image">
                  { section3TopImage &&
                    <ContentfulImage entry={section3TopImage} sizes={SECTION3_SIZES} />
                  }
                </div>
                <div className="assays-index-support__block-body">
                  <ContentfulText text={section3TopCallout} />
                </div>
              </div>

              <div className="assays-index-support__block">
                <div className="assays-index-support__block-image">
                  { section3BottomImage &&
                    <ContentfulImage entry={section3BottomImage} sizes={SECTION3_SIZES} />
                  }
                </div>
                <div className="assays-index-support__block-body">
                  <ContentfulText text={section3BottomCallout} />
                </div>
              </div>

            </div>

          </section>

          { footerTitle && footerBody &&
            <div className="page-outro">
              <h2 className="page-outro__head">{footerTitle}</h2>
              <div className="page-outro__body">
                <ContentfulText text={footerBody} />
              </div>
            </div>
          }

          { footnotes &&
            <section className="assays-index-footnotes">
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

export default routeWrapper(GenomicTestingIndex, routeOptions);
