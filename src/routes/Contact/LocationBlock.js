import React from 'react';

function newlinesToBreaks(string) {
  const lines = string.split('\n');
  return lines.map((line) => {
    return (
      <span key={line}>{line}<br /></span>
    );
  });
}

const LocationBlock = ({ location = {} }) => {
  const { title, address, phone, fax } = location;
  return (
    <article className="contact-block__set">
      <h3 className="contact-block__name">{ title }</h3>
      <address>
        { address &&
          <div>
            <h4>Address</h4>
            <p>{ newlinesToBreaks(address) }</p>
          </div>
        }
        { phone &&
          <div>
            <h4>Phone</h4>
            <p>{ phone }</p>
          </div>
        }
        { fax &&
          <div>
            <h4>Fax</h4>
            <p>{ fax }</p>
          </div>
        }
      </address>
    </article>
  );
};

export default LocationBlock;
