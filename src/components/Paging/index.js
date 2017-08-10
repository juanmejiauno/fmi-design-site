import React from 'react';
import Link from 'components/Link';
import _range from 'lodash/range';

function range(start, end) {
  return _range(start, (end + 1));
}

function getPageRange(current, total) {
  const rangeLimit = 5;
  const rangeTotal = 7;
  const offset = 2;
  let pages = [];

  if (total <= rangeTotal) {
    return range(1, total);
  } else if (current <= (1 + offset)) {
    const start = 2;
    const end = 1 + rangeLimit;
    pages = range(start, end);
  } else if (current >= (total - offset)) {
    const start = total - rangeLimit;
    const end = total - 1;
    pages = range(start, end);
  } else {
    const start = current - offset;
    const end = current + offset;
    pages = range(start, end);
  }

  return [1, ...pages, total];
}

function getClassName(number, current, total, showEndLinks) {
  const base = 'paging__link';
  let theClass = base;
  if (showEndLinks && number === 1) {
    theClass += ` ${base}--first`;
  }
  if (number === current) {
    theClass += ` ${base}--current`;
  }
  if (showEndLinks && number === total) {
    theClass += ` ${base}--last`;
  }
  return theClass;
}

function getLink(path, number) {
  return number > 1
    ? `${path}/page/${number}`
    : path;
}

const Paging = ({ currentPageNum, totalItemCount, itemsPerPage, basePath }) => {
  const totalPages = Math.ceil((totalItemCount / itemsPerPage));

  // Booleans:
  const showEndLinks = totalPages > 7;
  const showPrevPage = currentPageNum > 1;
  const showNextPage = totalPages > currentPageNum;
  const showPagingLinks = totalPages > 1;

  const prevPageNum = showPrevPage ? currentPageNum - 1 : false;
  const nextPageNum = showNextPage ? currentPageNum + 1 : false;

  // Paging list is an array of numbers

  return (
    <div>
      <nav className="paging">
        <div className="paging__step paging__step--left">
          { prevPageNum &&
            <Link className="paging__step-link paging__step-link--prev" to={getLink(basePath, prevPageNum)}>
              Previous
            </Link>
          }
        </div>
        { showPagingLinks &&
          <ul className="paging__list">
            {
              getPageRange(currentPageNum, totalPages).map((number) => {
                const className = getClassName(number, currentPageNum, totalPages, showEndLinks);
                const link = getLink(basePath, number);
                return (
                  <li key={link} className="paging__item">
                    <Link className={className} to={link}>{number}</Link>
                  </li>
                );
              })
            }
          </ul>
        }
        <div className="paging__step paging__step--right">
          { nextPageNum &&
            <Link className="paging__step-link paging__step-link--next" to={getLink(basePath, nextPageNum)}>
              Next
            </Link>
          }
        </div>
      </nav>
    </div>
  );
};
export default Paging;
