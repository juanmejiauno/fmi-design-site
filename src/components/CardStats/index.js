import React from 'react';

const CardStats = ({ stats }) => (

  <div className="card-stats">
    <ul className="card-stats__list">
      {
        stats.map((stat) => {
          return (
            <li className="card-stats__item" key={stat.noun}>
              <h3 className="card-stats__number">{stat.number}</h3>
              <p className="card-stats__noun">{stat.noun}</p>
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default CardStats;
