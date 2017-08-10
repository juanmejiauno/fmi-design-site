describe('Error Page', () => {
  it('unmatched url should render 404 page', (done) => {
    nightmare
      .goto('http://localhost:4001/asdf')
      .evaluate(() => {
        const status = document.querySelector('.js-err-status').innerText.trim();
        const message = document.querySelector('.js-err-msg').innerText.trim();

        return {
          status,
          message,
        };
      })
      .then(({ status, message }) => {
        expect(status).to.equal('404');
        expect(message).to.equal('Page Not Found');
        done();
      })
      .catch(done);
  });

  it('should show 400 error by default at /error', (done) => {
    nightmare
      .goto('http://localhost:4001/error')
      .evaluate(() => {
        const status = document.querySelector('.js-err-status').innerText.trim();
        const message = document.querySelector('.js-err-msg').innerText.trim();

        return {
          status,
          message,
        };
      })
      .then(({ status, message }) => {
        expect(status).to.equal('400');
        expect(message).to.equal('Not Found');
        done();
      })
      .catch(done);
  });

  it('should show status and message passed in as query params', (done) => {
    nightmare
      .goto('http://localhost:4001/error?status=500&message=Good%20News%20Everyone')
      .evaluate(() => {
        const status = document.querySelector('.js-err-status').innerText.trim();
        const message = document.querySelector('.js-err-msg').innerText.trim();

        return {
          status,
          message,
        };
      })
      .then(({ status, message }) => {
        expect(status).to.equal('500');
        expect(message).to.equal('Good News Everyone');
        done();
      })
      .catch(done);
  });
});
