import React from 'react';
import DateLine from 'components/DateLine';
import ContentfulText from 'components/ContentfulText';

const ArticleHeader = ({ title, date, authorName, authorTitle }) => (
  <header className="article-header">
    {date &&
      <h4 className="h4 article-header__date js-article-date"><DateLine dateStr={date} /></h4>
    }

    {title &&
      <h1 className="article-header__title js-article-title"><ContentfulText text={title} /></h1>
    }

    {authorName &&
      <h2 className="article-header__author js-article-author"><ContentfulText text={authorName} /></h2>
    }

    {authorTitle &&
      <h3 className="article-header__author-title js-article-author-title"><ContentfulText text={authorTitle} /></h3>
    }
  </header>
);

export default ArticleHeader;
