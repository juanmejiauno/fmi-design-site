const url = 'http://localhost:4001';

const loginButton = '#login-open-modal-button';
const loginModal = '.login-dialog';
const closeLoginModalButton = '#login-close-modal-button';

const ESC_KEY = '\u001b';

const expectToBeVisible = visible => expect(visible).to.equal(true);
const expectNotToBeVisible = visible => expect(visible).to.equal(false);

// Skip tests when login is disabled.
describe('LoginLogout component', () => {
  beforeEach(async () => {
    await nightmare
      .goto(url)
      .cookies.clear('ice.sid');
  });

  it('should open login modal when login button clicked', async () => {
    await nightmare
      .click(loginButton)
      .wait(loginModal)
      .visible(loginModal)
      .then(expectToBeVisible);
  });

  it('should close login modal when close button clicked', async () => {
    await nightmare
      .click(loginButton)
      .wait(loginModal)
      .click(closeLoginModalButton)
      .wait(500)
      .visible(loginModal)
      .then(expectNotToBeVisible);
  });

  it('should close login modal when ESC key pressed', async () => {
    await nightmare
      .click(loginButton)
      .wait(loginModal)
      .type('body', ESC_KEY)
      .wait(500)
      .visible(loginModal)
      .then(expectNotToBeVisible);
  });

  it('should show error message if login fails', async () => {
    await nightmare
      .click(loginButton)
      .wait(loginModal)
      .type('#login-email', 'foo@example.com')
      .type('#login-password', 'nope')
      .click('.login-dialog__login-button')
      .visible('.login-dialog__general-error')
      .then(expectToBeVisible);
  });

  it('should close modal if login succeeds', async () => {
    await nightmare
      .click(loginButton)
      .wait(loginModal)
      .type('#login-email', 'james.muspratt@upstatement.com')
      .type('#login-password', 'password')
      .click('.login-dialog__login-button')
      .wait(1000)
      .visible(loginModal)
      .then(expectNotToBeVisible);
  });
});
