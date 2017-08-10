import React from 'react';
import Link from 'components/Link';
import ContentfulText from 'components/ContentfulText';

function makeCategoryItems(categories) {
  return categories.map((category) => {
    return (
      <li className="article-topics__item" key={category.sys.id}>
        <Link className="article-topics__link" to={`/blog/topic/${category.fields.slug}`}>
          <ContentfulText text={category.fields.pageTitle} />
        </Link>
      </li>
    );
  });
}

const CategoryTagList = ({ categories }) => {
  if (!categories || !categories.length) {
    return null;
  }

  return (
    <div className="article-topics">
      <h5 className="h5">Topics</h5>
      <ul className="article-topics__list js-category-tag-list">
        {makeCategoryItems(categories)}
      </ul>
    </div>
  );
};

export default CategoryTagList;
