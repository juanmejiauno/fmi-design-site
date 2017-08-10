const url = 'http://localhost:4001/';

describe('Home Page', () => {
  it('should exist at /', (done) => {
    nightmare
      .goto(url)
      .url()
      .then((actualUrl) => {
        expect(actualUrl).to.equal(url);
        done();
      })
      .catch(done);
  });
});
