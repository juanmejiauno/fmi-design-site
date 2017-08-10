import React from 'react';
import get from 'lodash/get';

import ArticleList from 'components/ArticleList';
import PageHeader from 'components/PageHeader';
import NewsletterSignup from 'components/NewsletterSignup';
import routeWrapper from 'lib/route-wrapper';
import FlexModule from 'components/FlexModule';
import Paging from 'components/Paging';
import PageHelmet from 'components/PageHelmet';

class BlogIndex extends React.Component {
  static async fetchData(client, { params }) {
    const articlesPerPage = 10;
    const pageNum = parseInt(params.pageNum, 10) || 1;
    const skipCount = articlesPerPage * (pageNum - 1);

    const response = await client.client.getEntries({
      content_type: 'basicArticle',
      order: '-fields.publishedAt,-sys.updatedAt',
      limit: articlesPerPage,
      skip: skipCount,
    });

    const totalArticleCount = response.total;
    const articles = response.items;
    return { pageNum, articles, totalArticleCount, articlesPerPage };
  }

  render() {
    const articles = get(this, 'props.route.data.articles');
    const pageNum = parseInt(get(this, 'props.route.data.pageNum'), 10);
    const totalArticleCount = parseInt(get(this, 'props.route.data.totalArticleCount'), 10);
    const articlesPerPage = get(this, 'props.route.data.articlesPerPage');

    const [mostRecentArticle, ...otherArticles] = articles;
    const articlesForList = pageNum > 1 ? articles : otherArticles;

    const isLandingPage = pageNum && (pageNum <= 1);
    const preheading = isLandingPage ? null : 'Blog';
    const preheadingUrl = isLandingPage ? null : '/blog';

    return (
      <div className="blog-index">
        <div className="base-layout">
          <PageHelmet
            title="Foundation Forward"
            description="At Foundation Medicine, we are strong believers in the power of a community to make change. The sharing of ideas, opinions, stories, and discoveries can lead to new insights and important connections that wouldn’t otherwise be made."
          />

          <PageHeader heading="Foundation Forward" preheading={preheading} preheadingUrl={preheadingUrl} />

          { isLandingPage &&
            <p className="blog-index__summary">Through our blog, we hope to create a community where we can support and challenge each other through conversations, discussions and storytelling, and work together to move the field of oncology forward.</p>
          }
        </div>

        { isLandingPage &&
          <div className="blog-index__featured">
            <FlexModule entry={mostRecentArticle} className="flex-module flex-module--blog-module flex-module--blue-rich js-big-tease" />
          </div>
        }

        <div className="base-layout">
          <div className="blog-index__content">

            { isLandingPage &&
              <aside className="blog-index__signup">
                <NewsletterSignup id="articles-index-signup" />
              </aside>
            }

            <div className="blog-index__teases">
              <ArticleList entries={articlesForList} />
            </div>

          </div>

          <Paging currentPageNum={pageNum} totalItemCount={totalArticleCount} itemsPerPage={articlesPerPage} basePath="/blog" />

        </div>
      </div>
    );
  }
}

const routeOptions = {
  requiredProps: ['pageNum', 'articles'],
};

export default routeWrapper(BlogIndex, routeOptions);
