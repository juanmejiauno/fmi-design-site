import { getReferenceField } from 'lib/contentful';
import { get } from 'lodash';
import React from 'react';

import ArticleHeader from 'routes/BlogArticle/ArticleHeader';
import PageHelmet from 'components/PageHelmet';
import CategoryTagList from 'components/CategoryTagList';
import ContentfulText from 'components/ContentfulText';
import SocialShares from 'components/SocialShares';
import routeWrapper from 'lib/route-wrapper';

class BlogArticle extends React.Component {
  static async fetchData(client, { params }) {
    const article = await client.getEntry(params.slug, 'basicArticle');
    return { article };
  }

  render() {
    const article = get(this, 'props.route.data.article');

    const pageTitle = get(article, 'fields.pageTitle');
    const publishedAt = get(article, 'fields.publishedAt');
    const authorName = get(article, 'fields.authorName');
    const authorTitle = get(article, 'fields.authorTitle');
    const mainText = get(article, 'fields.mainText');
    const footnotes = get(article, 'fields.footnotes');
    const updatedAt = get(article, 'sys.updatedAt');

    const linkedCategories = getReferenceField(article, 'linkedCategories');
    const displayDate = publishedAt || updatedAt;

    return (
      <article className="blog-article base-layout base-layout--pad-bottom">
        <PageHelmet
          title={pageTitle}
          description={mainText}
          ogType="article"
          published_time={displayDate}
          modified_time={updatedAt}
        />

        <div className="blog-article__header">
          <ArticleHeader
            title={pageTitle}
            date={displayDate}
            authorName={authorName}
            authorTitle={authorTitle}
          />
        </div>
        <section className="blog-article__main">
          <aside className="blog-article__sharing">
            <SocialShares title={pageTitle} image={null} />
          </aside>
          <div className="blog-article__content">
            <div className="blog-article__inner">
              <div className="basic-text">
                <ContentfulText text={mainText} isMarkdown className="js-article-main" />
              </div>
              <footer className="blog-article__footer">
                { footnotes &&
                  <div className="blog-article__footnotes">
                    <h5 className="h5">Notes</h5>
                    <ContentfulText text={footnotes} isMarkdown className="js-article-footnotes" />
                  </div>
                }
                { linkedCategories &&
                  <div className="article__topics">
                    <CategoryTagList categories={linkedCategories} />
                  </div>
                }
              </footer>
            </div>
          </div>
        </section>
      </article>
    );
  }
}

const routeOptions = {
  requiredProps: ['article'],
};

export default routeWrapper(BlogArticle, routeOptions);
