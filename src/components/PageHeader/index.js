import React from 'react';
import ContentfulText from 'components/ContentfulText';
import Link from 'components/Link';

const PageHeader = ({ preheading, preheadingUrl, heading, className = 'page-header' }) => (
  <header className={className}>
    {(preheading && !preheadingUrl) &&
      <h2 className="page-preheading"><ContentfulText text={preheading} /></h2>
    }
    {(preheading && preheadingUrl) &&
      <h2 className="page-preheading">
        <Link className="page-preheading__link" to={preheadingUrl}><ContentfulText text={`${preheading}`} /></Link>
      </h2>
    }
    <h1 className="h1 page-title js-page-heading"><ContentfulText text={heading} /></h1>
  </header>
);

export default PageHeader;
