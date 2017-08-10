import React from 'react';
import ContentfulText from 'components/ContentfulText';
import DateLine from 'components/DateLine';
import Link from 'components/Link';
import { getReferenceField } from 'lib/contentful';
import { sanitize } from 'lib/sanitize';
import trunc from 'trunc-html';

function BlogModule({ entry, className }) {
  if (!entry || !entry.fields) {
    return null;
  }
  const contentType = entry.sys.contentType.sys.id;

  let microHeading = null;
  let heading = null;
  let authorName = null;
  let authorTitle = null;
  let excerpt = null;
  let linkPath = null;
  let linkText = null;

  switch (contentType) {
    case 'blogModule': {
      microHeading = entry.fields.microHeading;
      heading = entry.fields.heading;
      excerpt = entry.fields.excerpt;

      const article = getReferenceField(entry, 'blogArticle');

      if (article) {
        authorName = article.fields.authorName;
        authorTitle = article.fields.authorTitle;
        linkPath = `/blog/${article.fields.slug}`;
      }

      linkText = 'Read the Article';
      break;
    }
    case 'basicArticle': {
      const content = entry.fields.mainText;
      const date = entry.fields.publishedAt || entry.sys.updatedAt;

      const autoExcerptCharCount = 520;

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
      excerpt = trunc(contentClean, autoExcerptCharCount).html;
      microHeading = <DateLine dateStr={date} />;

      heading = entry.fields.pageTitle;
      authorName = entry.fields.authorName ? entry.fields.authorName : 'Foundation Medicine';
      authorTitle = entry.fields.authorTitle;
      linkPath = `/blog/${entry.fields.slug}`;

      linkText = 'Continue Reading';
      break;
    }
    default:
      break;
  }

  return (
    <section className={className}>
      <div className="flex-module__box flex-module__box--left">
        { microHeading && (
          <h4 className="flex-module__microhead">{microHeading}</h4>
        )}
        <h3 className="flex-module__head"><Link to={linkPath}><ContentfulText text={heading} /></Link></h3>
        <div className="flex-module__line">|</div>
        <div className="flex-module__author">
          <ContentfulText text={authorName} />
          {authorTitle &&
            <span><br /><em><ContentfulText text={authorTitle} /></em></span>
            }
        </div>
      </div>
      <div className="flex-module__box flex-module__box--right flex-module__box--blog-tease">
        <ContentfulText text={excerpt} />
        <p className="flex-module__cta"><Link to={linkPath}>{linkText}</Link></p>
      </div>
    </section>
  );
}

export default BlogModule;
