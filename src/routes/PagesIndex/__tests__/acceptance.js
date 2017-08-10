import { pagesFixture } from '__tests__/lib/fixtures/basic-page-fixture';

const url = 'http://localhost:4001/pages';

describe('PagesIndex', () => {
  it('should exist at /pages', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });

  it('should display list of all pages', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelectorAll('.js-entry-item').length;
      })
      .then((pageCount) => {
        expect(pageCount).to.equal(pagesFixture.items.length);
        done();
      })
      .catch(done);
  });
});
