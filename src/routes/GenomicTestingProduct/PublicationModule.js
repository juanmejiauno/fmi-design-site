import ContentfulText from 'components/ContentfulText';
import get from 'lodash/get';
import React from 'react';

function PublicationModule({ entry }) {
  const category = get(entry, 'fields.category');
  const title = get(entry, 'fields.title');
  const description = get(entry, 'fields.description');
  const link = get(entry, 'fields.link');
  return (
    <div className="assay-single-reports__study">
      <h4 className="assay-single-reports__study__microhead">Published <ContentfulText text={category} /></h4>
      <h3 className="assay-single-reports__study__head"><ContentfulText text={title} /></h3>
      <p className="assay-single-reports__study__tease"><ContentfulText text={description} /></p>
      <p><a className="assay-single-reports__study__link link-cta-medium" href={link}>View the Published Paper</a></p>
    </div>
  );
}

export default PublicationModule;
