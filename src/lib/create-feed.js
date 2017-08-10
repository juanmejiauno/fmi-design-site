import get from 'lodash/get';
import escape from 'lodash/escape';
import unescape from 'lodash/unescape';
import moment from 'moment';
import stripTags from 'lib/strip-tags';
import truncate from 'lib/truncate-text';
import RSS from 'rss';

function getPubDate(article) {
  const date = get(article, 'fields.publishedAt') || get(article, 'sys.updatedAt');
  return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
}

function createFeed(articles = []) {
  const feed = new RSS({
    title: 'Foundation Medicine',
    description: 'Foundation Medicine is leading a transformation in cancer care, where each patient’s treatment is informed by a deep understanding of the molecular changes that contribute to their disease.',
    image_url: `${process.env.siteUrl}/img/og-logo.jpg`,
    feed_url: `${process.env.siteUrl}/feed`,
    site_url: process.env.siteUrl,
    copyright: `${moment().year()} Foundation Medicine, Inc.`,
    language: 'en',
  });

  articles.forEach((article) => {
    feed.item(createItem(article));
  });

  return feed.xml();
}

function createItem(article) {
  const slug = get(article, 'fields.slug');
  const title = get(article, 'fields.pageTitle');
  const text = get(article, 'fields.mainText');
  const authorName = get(article, 'fields.authorName');

  const link = `${process.env.siteUrl}/blog/${slug}`;
  const author = authorName || 'Foundation Medicine';
  const description = truncate(stripTags(unescape(text), 200));
  const date = getPubDate(article);

  return {
    title: unescape(title),
    description: unescape(description),
    author: unescape(author),
    url: unescape(link),
    date: escape(date),
    categories: ['News'],
  };
}

function fetchArticles(client) {
  return client.getEntries({
    content_type: 'basicArticle',
    order: '-fields.publishedAt,-sys.updatedAt',
  });
}

export { createFeed, fetchArticles };
