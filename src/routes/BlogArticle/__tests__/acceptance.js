import { articleFixture } from '__tests__/lib/fixtures/article-fixture';
import moment from 'moment';

const fixture = articleFixture.items[0];

const url = 'http://localhost:4001/blog/basicArticle';

describe('Blog Article', () => {
  it('should exist at /blog/:id', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });

  it('should display article title', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-article-title').innerText.trim();
      })
      .then((title) => {
        expect(title).to.equal(fixture.fields.pageTitle);
        done();
      })
      .catch(done);
  });

  it('should display byline', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        const author = document.querySelector('.js-article-author').innerText.trim();
        const authorTitle = document.querySelector('.js-article-author-title').innerText.trim();

        return { author, authorTitle };
      })
      .then(({ author, authorTitle }) => {
        expect(author).to.equal(fixture.fields.authorName);
        expect(authorTitle).to.equal(fixture.fields.authorTitle);
        done();
      })
      .catch(done);
  });

  it('should display publish date readable MMMM D, YYYY format', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-article-date').innerText;
      })
      .then((createdAt) => {
        const readablePublishedAt = moment(fixture.fields.publishedAt).format('MMMM D, YYYY').toLowerCase();
        expect(createdAt.toLowerCase()).to.equal(readablePublishedAt);
        done();
      })
      .catch(done);
  });

  it('should display mainText', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-article-main').innerText.trim();
      })
      .then((text) => {
        expect(text).to.have.string(fixture.fields.mainText);
        done();
      })
      .catch(done);
  });

  it('should display footnotes', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-article-footnotes').innerText.trim();
      })
      .then((text) => {
        expect(text).to.have.string(fixture.fields.footnotes);
        done();
      })
      .catch(done);
  });

  it('should display a list of categories', (done) => {
    nightmare
      .goto(url)
      .visible('.js-category-tag-list')
      .then((listIsVisible) => {
        expect(listIsVisible).to.be.ok;
        done();
      })
      .catch(done);
  });
});
