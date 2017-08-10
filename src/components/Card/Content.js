import React from 'react';
import unescape from 'lodash/unescape';
import CardStats from 'components/CardStats';
import CardList from 'components/CardList';
import ContentfulText from 'components/ContentfulText';
import Link from 'components/Link';

const STAT_DELIMITER = '|';

export function parseStat(text, delimiter = STAT_DELIMITER) {
  const statText = text.trim();
  const splitOn = (statText.indexOf(delimiter) > -1) ? delimiter : ' ';
  const number = statText.substr(0, statText.indexOf(splitOn)).trim();
  const noun = statText.substr(statText.indexOf(splitOn) + 1).trim();
  return { number, noun };
}

const CardContent = ({ microHeading, heading, caption, stats, body, link, linkLabel }) => (
  <div className="card__content">

    { (microHeading || heading || caption) &&
      <header className="card__header">
        { microHeading &&
          <h4 className="card__microhead">{microHeading}</h4> }

        { heading &&
          <h3 className="card__head">{heading}</h3> }

        { caption &&
          <ContentfulText className="card__caption" text={caption} /> }
      </header> }

    { stats &&
      <CardStats stats={stats.slice(0, 3).map(unescape).map(stat => parseStat(stat))} /> }

    { body &&
      <CardList text={body} /> }

    { link && linkLabel &&
      <div className="card__cta-tab">
        <Link className="link-cta-tab" to={link}>{linkLabel}</Link>
      </div> }
  </div>
);

export default CardContent;
