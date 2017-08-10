import { get } from 'lodash';
import axios from 'axios';
import logger from 'lib/logger';

const IAM_ENDPOINT = process.env.loginEndpoint || 'https://accounts.qa.foundationmedicine.com';
const COOKIE_DOMAIN = process.env.cookieDomain || '.qa.foundationmedicine.com';

const cookieOptions = { httpOnly: true, path: '/', domain: COOKIE_DOMAIN };

function login(req, res) {
  const data = req.body;

  axios
    .post(`${IAM_ENDPOINT}/session/login`, data)
    .then((response) => {
      // TODO - not be crazy brittle
      let cookie = get(response, 'headers["set-cookie"][0]');
      try {
        cookie = cookie.split(';')[0].split('=')[1];
        res.cookie('ice.sid', decodeURIComponent(cookie), cookieOptions);
        res.status(200).json({ user: response.data });
      } catch (err) {
        logger.error('failed to parse cookie sent by IAM', err);
        res.status(500).json({ error: 'failed to parse cookie from response.' });
      }
    })
    .catch((err) => {
      // TODO - need to handle error codes from server for things like bad username or password.
      const statusCode = get(err, 'response.status') || 500;
      const code = get(err, 'response.data.code');
      const message = get(err, 'response.data.message');

      res.status(statusCode).json({ code, message });
    });
}

function logout(req, res) {
  const cookie = get(req, 'cookies["ice.sid"]');

  axios({
    url: `${IAM_ENDPOINT}/session/logout`,
    method: 'POST',
    data: {},
    headers: {
      Cookie: `ice.sid=${cookie}`,
    },
  })
  .then(() => {
    res.cookie('ice.sid', null, { expires: new Date('1970') });
    res.status(200).json({});
  })
  .catch((err) => {
    // TODO - need to handle error codes from server for things like bad username or password.
    res.status(500).json({ error: err.message });
  });
}

function verifyLoggedIn(req, res) {
  const cookie = get(req, 'cookies["ice.sid"]');

  if (!cookie) {
    return res.status(200).json({});
  }

  return axios({
    method: 'get',
    url: `${IAM_ENDPOINT}/session/me`,
    headers: {
      Cookie: `ice.sid=${cookie}`,
    },
  })
  .then((response) => {
    res.status(200).json({ user: response.data });
  })
  .catch((err) => {
    const statusCode = get(err, 'response.status') || 500;
    const message = get(err, 'response.data.error');

    if (statusCode === 500) {
      logger.error('ERROR GETTING USER', err);
    }

    res.status(statusCode).json({ message });
  });
}

export { login, logout, verifyLoggedIn };
