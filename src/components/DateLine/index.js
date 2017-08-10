import React from 'react';
import moment from 'moment';

const DateLine = ({ dateStr, format = 'MMMM D, YYYY' }) => (
  <time className="date-line js-date-line" dateTime={dateStr}>
    {moment(dateStr).format(format)}
  </time>
);

export default DateLine;
