import React from 'react';
import { get, has } from 'lodash';
import Link from 'components/Link';

const ErrorPage = (props) => {
  const status = getQueryStatus(props);
  const message = getQueryMessage(props);

  return (
    <div className="error-page base-layout">
      <div className="error-page__content">
        <div className="basic-text">
          <h2 className="error-page__subhead">Error <span className="js-err-status">{status}</span>: <em className="js-err-msg">{message}</em></h2>
          <p>Sorry, it looks like something went wrong. Please try the navigation links below or <Link to="/">head back to the home&nbsp;page</Link>.</p>
        </div>
      </div>
    </div>
  );
};

function getQueryStatus({ location, route, status }) {
  if (has(location, 'query.status')) {
    return get(location, 'query.status');
  }

  if (has(route, 'status')) {
    return get(route, 'status');
  }

  if (status) {
    return status;
  }

  return 404;
}

function getQueryMessage({ location, route, message }) {
  if (has(location, 'query.message')) {
    return get(location, 'query.message');
  }

  if (has(route, 'message')) {
    return get(route, 'message');
  }

  if (message) {
    return message;
  }

  return 'Not Found';
}

export default ErrorPage;
