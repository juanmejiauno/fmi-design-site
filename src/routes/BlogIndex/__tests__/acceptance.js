import { articlesFixture } from '__tests__/lib/fixtures/article-fixture';

const url = 'http://localhost:4001/blog';

describe('BlogIndex', () => {
  it('should exist at /blog', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });

  it('should display list of articles except the most recent', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelectorAll('.js-entry-item').length;
      })
      .then((pageCount) => {
        const expectedCount = articlesFixture.items.slice(1).length;
        expect(pageCount).to.equal(expectedCount);
        done();
      })
      .catch(done);
  });

  it('should render big tease', (done) => {
    nightmare
      .goto(url)
      .visible('.js-big-tease')
      .then((teaseIsVisible) => {
        expect(teaseIsVisible).to.be.ok;
        done();
      })
      .catch(done);
  });

  it('should display NewsletterSignup form', (done) => {
    nightmare
      .goto(url)
      .visible('.js-newsletter-container')
      .then((newsletterIsVisible) => {
        expect(newsletterIsVisible).to.be.ok;
        done();
      });
  });
});
