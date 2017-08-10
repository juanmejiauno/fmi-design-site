import { basicPageFixture } from '__tests__/lib/fixtures/basic-page-fixture';

const fixture = basicPageFixture.items[0];

const url = 'http://localhost:4001/pages/basicPage';

describe('Basic Page', () => {
  it('should exist at /pages/:id', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });

  it('should display page heading', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-page-heading').innerText.trim();
      })
      .then((heading) => {
        expect(heading).to.equal(fixture.fields.pageTitle);
        done();
      })
      .catch(done);
  });

  it('should display page subheading', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-page-subheading').innerText.trim();
      })
      .then((subheading) => {
        expect(subheading).to.equal(fixture.fields.subheading);
        done();
      })
      .catch(done);
  });

  it('should display introText', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-page-intro').innerText.trim();
      })
      .then((intro) => {
        expect(intro).to.have.string(fixture.fields.introText);
        done();
      })
      .catch(done);
  });

  it('should display mainText', (done) => {
    nightmare
      .goto(url)
      .evaluate(() => {
        return document.querySelector('.js-page-main').innerText.trim();
      })
      .then((text) => {
        expect(text).to.have.string(fixture.fields.mainText);
        done();
      })
      .catch(done);
  });

  it('should display a file list', (done) => {
    nightmare
      .goto(url)
      .visible('.js-filelist')
      .then((filelistIsVisible) => {
        expect(filelistIsVisible).to.equal(true);
        done();
      })
      .catch(done);
  });

  // it('should display a faqs', (done) => {
  //   nightmare
  //     .goto(url)
  //     .visible('.js-faqs')
  //     .then((faqsIsVisible) => {
  //       expect(faqsIsVisible).to.equal(true);
  //       done();
  //     })
  //     .catch(done);
  // });
});
