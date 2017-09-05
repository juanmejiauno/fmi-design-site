import { categoryFixture } from '__tests__/lib/fixtures/category-fixture';
import { articlesFixture } from '__tests__/lib/fixtures/article-fixture';

const categoryFields = categoryFixture.items[0].fields;
const url = 'http://localhost:4001/blog/topic/category';

describe('CategoryPage', () => {
  it('should exist at /blog/topic/:slug', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });

  it('should display category heading', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-category-name').innerText.trim();
      })
      .then((heading) => {
        expect(heading).to.equal(categoryFields.pageTitle);
        done();
      })
      .catch(done);
  });

  it('should display list of all articles in category', (done) => {
    nightmare
      .goto(url)
      .visible('.js-entry-item')
      .evaluate(() => {
        return document.querySelectorAll('.js-entry-item').length;
      })
      .then((articleCount) => {
        const expectedArticlesCount = articlesFixture.items.length;

        expect(articleCount).to.equal(expectedArticlesCount);
        done();
      })
      .catch(done);
  });
});
