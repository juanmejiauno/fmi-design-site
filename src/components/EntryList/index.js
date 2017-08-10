import React from 'react';
import ContentfulText from 'components/ContentfulText';
import Link from 'components/Link';

function makeEntriesItems(entries) {
  return entries.map((entry) => {
    return (
      <li className="entry-list__item js-entry-item" key={entry.sys.id}>
        <div>
          <h2 className="entry-list__heading">
            <Link className="entry-list__title-link" to={`/pages/${entry.fields.slug}`}>
              <ContentfulText text={entry.fields.pageTitle} />
            </Link>
          </h2>
        </div>
        <div>
          {entry.fields.introText &&
            <ContentfulText text={entry.fields.introText} />
          }
          <p><Link className="entry-list__read-link" to={`/pages/${entry.fields.slug}`}>Read More</Link></p>
        </div>
      </li>
    );
  });
}

const EntryList = ({ entries }) => {
  if (!entries || !entries.length) {
    return null;
  }
  return (
    <ul className="entry-list">
      {makeEntriesItems(entries)}
    </ul>
  );
};

export default EntryList;
