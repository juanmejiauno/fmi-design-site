import { mediaModuleFixtureVideo } from '__tests__/lib/fixtures/media-module-fixture';

const { youtubeLink } = mediaModuleFixtureVideo.fields;
const youtubeId = youtubeLink.match(/v=([\d\w]+)/)[1];
const url = 'http://localhost:4001';

const playButton = 'button.flex-module__play-btn';
const youtubeIframe = `iframe[src^="https://www.youtube.com/embed/${youtubeId}"]`;

describe('VideoModal', () => {
  it('should display play button', (done) => {
    nightmare
      .goto(url)
      .visible(playButton)
      .then(shouldExist)
      .then(done)
      .catch(done);
  });

  it('should not initially display YouTube embed', (done) => {
    nightmare
      .goto(url)
      .visible(youtubeIframe)
      .then(shouldNotExist)
      .then(done)
      .catch(done);
  });

  it('should display YouTube embed when pay button clicked', (done) => {
    nightmare
      .goto(url)
      .click(playButton)
      .visible(youtubeIframe)
      .then(shouldExist)
      .then(done)
      .catch(done);
  });

  it('should remove YouTube embed when close button clicked', (done) => {
    nightmare
      .goto(url)
      .click(playButton)
      .wait(youtubeIframe)
      .click('button.flex-module__close-btn')
      .wait(500)
      .visible(youtubeIframe)
      .then(shouldNotExist)
      .then(done)
      .catch(done);
  });

  it('should remove YouTube embed when underlay clicked', (done) => {
    nightmare
      .goto(url)
      .click(playButton)
      .wait(youtubeIframe)
      .click('.flex-module__video-modal-bg')
      .wait(500)
      .visible(youtubeIframe)
      .then(shouldNotExist)
      .then(done)
      .catch(done);
  });
});

function shouldExist(existence) {
  expect(existence).to.be.true;
}

function shouldNotExist(existence) {
  expect(existence).to.be.false;
}
