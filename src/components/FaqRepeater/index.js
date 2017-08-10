import React from 'react';
import ContentfulText from 'components/ContentfulText';
import Link from 'components/Link';

function renderItems(items, linkTo = '') {
  return items.map((item) => {
    return (
      <li className="faq-set__item" key={item.fields.slug} id={item.fields.slug}>
        { linkTo && linkTo !== '' ? (
          <Link name={item.fields.slug} to={`${linkTo}#${item.fields.slug}`}>
            <ContentfulText text={item.fields.question} />
          </Link>
        ) : (
          <div key={item.fields.slug}>
            <h3 className="faq-set__q"><ContentfulText text={item.fields.question} /></h3>
            <p className="faq-set__a"><ContentfulText text={item.fields.answer} /></p>
          </div>
        )}
      </li>
    );
  });
}

const FaqRepeater = ({ faq, linkTo = '' }) => {
  if (!faq) {
    return null;
  }

  return (
    <ul className="faq-set__list">
      {renderItems(faq, linkTo)}
    </ul>
  );
};

export default FaqRepeater;
