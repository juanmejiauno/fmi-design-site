import React from 'react';
import ContentfulText from 'components/ContentfulText';

const PageSubheader = ({ subheading }) => (
  <section className="page-subheader">
    {subheading &&
      <h2 className="h2 basic-page__page-subhead js-page-subheading"><ContentfulText text={subheading} /></h2>
    }
  </section>
);

export default PageSubheader;
