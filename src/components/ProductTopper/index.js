import React from 'react';
import ContentfulText from 'components/ContentfulText';
import Link from 'components/Link';
import concat from 'lib/concat-class';

function ProductTopper({ className, preheadingLink, preheadingText, head, text, children }) {
  return (
    <section className={concat('product-topper', className)}>
      <div className="product-topper__content base-layout">
        <div className="product-topper__text">
          <h2 className="page-preheading"><Link className="page-preheading__link" to={preheadingLink}>{preheadingText}</Link></h2>
          <h1 className="product-topper__head"><ContentfulText text={head} /></h1>
          <div className="product-topper__line" />
          <div className="product-topper__desc">
            <ContentfulText text={text} />
          </div>
        </div>

        { children }

      </div>
    </section>
  );
}

export default ProductTopper;
