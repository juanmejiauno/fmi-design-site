import React from 'react';
import Link from 'components/Link';
import DateLine from 'components/DateLine';
import ContentfulText from 'components/ContentfulText';
import { sanitize } from 'lib/sanitize';
import trunc from 'trunc-html';


function constructExcerpt(content) {
  const autoExcerptCharCount = 320;

  const allowedTags = {
    allowedTags: [
      'em',
      'i',
      'strong',
      'b',
    ],
  };

  // Wrap in a single paragraph tag and add ellipsis
  const contentClean = content ? `<p>${sanitize(content, allowedTags, true)}&hellip;</p>` : '';
  const excerpt = trunc(contentClean, autoExcerptCharCount).html;
  return excerpt;
}

function makeArticleItems(entries) {
  return entries.map((entry) => {
    const date = entry.fields.publishedAt ? entry.fields.publishedAt : entry.sys.updatedAt;

    return (
      <li className="article-list__item js-entry-item" key={entry.sys.id}>
        <div>
          <h4 className="article-list__date"><DateLine dateStr={date} /></h4>
          <h2 className="article-list__title"><Link className="article-list__title-link" to={`/blog/${entry.fields.slug}`}><ContentfulText text={entry.fields.pageTitle} /></Link></h2>
          {entry.fields.authorName &&
            <div className="article-list__byline">
              { entry.fields.authorName &&
                <h3 className="article-list__author"><ContentfulText text={entry.fields.authorName} /></h3>
              }
              { entry.fields.authorTitle &&
                <h3 className="article-list__author-title"><ContentfulText text={entry.fields.authorTitle} /></h3>
              }
            </div>
          }
        </div>

        <div>
          <div className="article-list__excerpt">
            <ContentfulText text={constructExcerpt(entry.fields.mainText)} />
          </div>
          <p><Link className="article-list__read-link" to={`/blog/${entry.fields.slug}`}>Continue Reading</Link></p>
        </div>

      </li>
    );
  });
}

const ArticleList = ({ entries }) => {
  if (!entries || !entries.length) {
    return null;
  }
  return (
    <ul className="article-list">
      {makeArticleItems(entries)}
    </ul>
  );
};

export default ArticleList;
