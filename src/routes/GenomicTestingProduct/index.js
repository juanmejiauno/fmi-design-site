import { getReferenceField } from 'lib/contentful';
import JumpNav from 'components/JumpNav';
import Card from 'components/Card';
import ContentfulText from 'components/ContentfulText';
import FlexModule from 'components/FlexModule';
import Footnotes from 'components/Footnotes';
import get from 'lodash/get';
import FileList from 'components/FileList';
import Link from 'components/Link';
import PageHelmet from 'components/PageHelmet';
import ProductTopper from 'components/ProductTopper';
import PublicationModule from 'routes/GenomicTestingProduct/PublicationModule';
import React from 'react';
import routeWrapper from 'lib/route-wrapper';
import slugify from 'slugify';
import styleName from 'lib/style-name';
import unescape from 'lodash/unescape';

function removeSymbols(input = '') {
  return input.replace(/(™|©|®)/g, '');
}

function renderRelatedLink(entry, i, related) {
  const name = get(entry, 'fields.testName');
  const slug = get(entry, 'fields.slug');
  return (
    <span key={`${slug}`}>
      <Link to={`/genomic-testing/${slug}`}>{ name }</Link>
      { i < related.length - 1 ? ', ' : null }
    </span>
  );
}

class GenomicTestingProduct extends React.Component {
  static async fetchData(client, { params }) {
    const order = 'fields.testName';
    const product = await client.getEntry(params.slug, 'genomicTest');
    const related = await client.getRelatedEntries(product, 3, { order }).catch(console.warn);
    return { product, related };
  }

  render() {
    const product = get(this, 'props.route.data.product');
    const related = get(this, 'props.route.data.related');

    const name = removeSymbols(get(product, 'fields.testName'));
    const styledName = styleName(get(product, 'fields.testUppercaseName'));

    const cancerType = get(product, 'fields.cancerType');
    const biopsyType = get(product, 'fields.biopsyType');
    const resultsIn = get(product, 'fields.resultsIn');
    const heroText = get(product, 'fields.heroText');
    const section1Title = get(product, 'fields.section1Title');
    const section1LinkLabel = get(product, 'fields.section1LinkLabel');
    const section1Body = get(product, 'fields.section1Body');
    const section2Title = get(product, 'fields.section2Title');
    const section2LinkLabel = get(product, 'fields.section2LinkLabel');
    const section2Body = get(product, 'fields.section2Body');
    const section3Title = get(product, 'fields.section3Title');
    const section3LinkLabel = get(product, 'fields.section3LinkLabel');
    const section3Body = get(product, 'fields.section3Body');
    const footnotes = get(product, 'fields.footnotes');

    const geneList = getReferenceField(product, 'geneList');
    const overviewCard = getReferenceField(product, 'overviewCard');
    const flexModule = getReferenceField(product, 'flexModule');
    const clinicalSummary = getReferenceField(product, 'clinicalSummaryOfEvidence');
    const publications = getReferenceField(product, 'publications');
    const patientInfoKit = getReferenceField(product, 'patientInfoKit');
    const providerDownloads = getReferenceField(product, 'providerDownloads');
    const patientDownloads = getReferenceField(product, 'patientDownloads');

    const section1Label = unescape(section1LinkLabel || section1Title);
    const section2Label = unescape(section2LinkLabel || section2Title);
    const section3Label = unescape(section3LinkLabel || section3Title);

    const section1Slug = slugify(section1Label).toLowerCase();
    const section2Slug = slugify(section2Label).toLowerCase();
    const section3Slug = slugify(section3Label).toLowerCase();

    const clinicalSummaryUrl = get(clinicalSummary, 'fields.file.url');
    const patientInfoKitUrl = get(patientInfoKit, 'fields.file.url');
    const geneListUrl = get(geneList, 'fields.file.url');

    return (
      <div className="assay-single">
        <PageHelmet
          title={name}
          description={heroText}
        />

        <ProductTopper
          className="product-topper__fire"
          preheadingLink="/genomic-testing"
          preheadingText="Genomic Testing"
          head={styledName}
          text={heroText}
        >
          <div className="assay-single__intro-content__mini-overview">
            <ul className="assay-single__mini-overview-list">
              <li className="assay-single__mini-overview-item">
                <div className="mini-overview-item__top">Cancer Type</div>
                <div className="mini-overview-item__bottom">{ cancerType }</div>
              </li>
              <li className="assay-single__mini-overview-item">
                <div className="mini-overview-item__top">Biopsy Type</div>
                <div className="mini-overview-item__bottom">{ biopsyType }</div>
              </li>
              <li className="assay-single__mini-overview-item">
                <div className="mini-overview-item__top">Results Expected</div>
                <div className="mini-overview-item__bottom">{ resultsIn }</div>
              </li>
            </ul>
          </div>
        </ProductTopper>

        <div className="assay-single__section base-layout">
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

        <section className="assay-single__section" id={section1Slug}>
          <div className="base-layout">
            <h2 className="head-secondary">{ section1Title }</h2>
            <div className="secondary-section secondary-section--centered">
              <ContentfulText text={section1Body} />
            </div>
          </div>
          <div className="assay-single-overview">
            <h4 className="assay-single-overview__prehead">Overview</h4>
            <h3 className="assay-single-overview__head head-tertiary">{ name }</h3>

            { overviewCard && geneListUrl &&
              <div className="base-layout">
                <Card
                  {...overviewCard.fields}
                  linkLabel="Gene List →"
                  link={geneListUrl}
                />
              </div>
            }

          </div>
        </section>

        { flexModule &&
          <section className="assay-single__module assay-single__section">
            <FlexModule entry={flexModule} className="flex-module flex-module--green" />
          </section>
        }

        <div className="base-layout base-layout--pad-bottom">

          <section className="assay-single-reports assay-single__section" id={section2Slug}>
            <h2 className="assay-single-reports__head head-secondary">{ section2Title }</h2>
            <div className="assay-single-reports__body secondary-section secondary-section--centered">
              <ContentfulText text={section2Body} />
              { clinicalSummary && clinicalSummaryUrl &&
                <p><a className="link-mini-caps" href={clinicalSummaryUrl}>
                  Clinical Summary of Evidence →
                </a></p>
              }
            </div>

            <div className="assay-single-reports__studies">
              { publications && publications[0] &&
                <PublicationModule entry={publications[0]} />
              }

              { publications && publications[1] &&
                <PublicationModule entry={publications[1]} />
              }
            </div>

            <div className="assay-single-reports__outro cta">
              <h2 className="cta__desc line-under">Interested in learning more about how a Comprehensive Genomic Profiling test might help your patient? Our publications can help:</h2>
              <p><Link className="link-cta-medium" to="/pages/publications">View all reports &amp; validation</Link></p>
            </div>
          </section>

          <section className="assay-single-order assay-single__section" id={section3Slug}>
            <h2 className="assay-single-order__head head-secondary">{ section3Title }</h2>

            <div className="assay-single-order__intro">
              <div className="assay-single-order__body secondary-section secondary-section--centered">
                <ContentfulText text={section3Body} />
              </div>
              <div className="assay-single-order__image">
                <img src="/img/single-assay-doctor.jpg" alt="A doctor looking at the camera" />
              </div>
            </div>


            <div className="assay-single-order__info-card">
              <div className="assay-single-order__info-card__wrapper">
                <div className="assay-single-order__info-card__inner">
                  <div className="assay-single-order__info-card__group">
                    <div className="assay-single-order__info-card__text">
                      <h3 className="assay-single-order__info-card__head head-tertiary">Patients</h3>
                      <p>{name} is ordered by your healthcare provider. Our patient info kit has all the information you and your doctor need to discuss {name} testing.</p>
                      <p><a className="link-cta-medium" href={patientInfoKitUrl}>Download Patient Brochure</a></p>
                    </div>

                    <div className="assay-single-order__info-card__filelist">
                      {patientDownloads &&
                        <FileList files={patientDownloads} heading="Patient Resources" />
                      }
                    </div>
                  </div>
                  <div className="assay-single-order__info-card__group">
                    <div className="assay-single-order__info-card__text">
                      <h3 className="assay-single-order__info-card__head head-tertiary">Providers</h3>
                      <p>FoundationOne® can be ordered online, by fax, or by phone. Please review and complete the provider resources before ordering.</p>
                      <p><Link className="link-cta-medium" to="/genomic-testing/order">Order Now</Link></p>
                    </div>
                    <div className="assay-single-order__info-card__filelist">
                      {providerDownloads &&
                        <FileList files={providerDownloads} heading="Provider Resources" />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="assay-single-order__contact secondary-section secondary-section--centered">
              <h3 className="head-tertiary">Questions? We&#8217;re here to help.</h3>
              <p>Call Foundation Medicine Client Services at (888) 988-3639 between 8:00 am ET and 8:00 pm ET, Monday through Friday. You can also send us an email and a representative will respond during regular business hours.</p>
              <p><Link className="link-mini-caps" to="/contact">Contact</Link></p>
            </div>


          </section>

          { related && related.length === 3 &&
            <section className="page-outro">
              <h2 className="page-outro__head">We have even more to offer.</h2>
              <div className="page-outro__body">
                <p>Learn more about our other tests, { related.map(renderRelatedLink) }, or explore our <Link to="/insights-and-partnerships">insights&nbsp;partnerships</Link>.</p>
              </div>
            </section>
          }

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
  requiredProps: ['product'],
};

export default routeWrapper(GenomicTestingProduct, routeOptions);
