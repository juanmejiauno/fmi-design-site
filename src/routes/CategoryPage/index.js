import get from 'lodash/get';
import React from 'react';

import ArticleList from 'components/ArticleList';
import PageHelmet from 'components/PageHelmet';
import PageHeader from 'components/PageHeader';
import routeWrapper from 'lib/route-wrapper';

class CategoryPage extends React.Component {
  static async fetchData(client, { params }) {
    const order = '-fields.publishedAt,-sys.updatedAt';
    const category = await client.getEntry(params.slug, 'category');
    const articles = await client.getEntriesByCategory(category, 'basicArticle', { order });
    return { category, articles };
  }

  render() {
    const articles = get(this, 'props.route.data.articles');
    const category = get(this, 'props.route.data.category');

    const categoryTitle = get(category, 'fields.pageTitle');
    const introText = get(category, 'fields.introText');

    return (
      <div className="blog-index base-layout">
        <PageHelmet
          title={categoryTitle}
          description={introText}
        />

        <PageHeader heading="Foundation Forward" preheading="Blog" preheadingUrl="/blog" />

        <div className="blog-index__content">
          <div className="blog-category-heads">
            <h3 className="blog-category-heads__micro">Topic</h3>
            <h4 className="blog-category-heads__category js-category-name">{categoryTitle}</h4>
          </div>
          <ArticleList entries={articles} />
        </div>
      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['category', 'articles'],
};

export default routeWrapper(CategoryPage, routeOptions);
