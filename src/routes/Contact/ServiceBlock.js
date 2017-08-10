import unescape from 'lodash/unescape';
import React from 'react';
import { Link } from 'react-router';

function ServiceBlock({ service = {}, showPhoneNote = false }) {
  const { title, phone, email, fax } = service;
  return (
    <article className="contact-block__set">
      <h3 className="contact-block__name">{ unescape(title) }</h3>
      <address>
        { phone &&
          <div>
            <h4>Phone</h4>
            <p>{phone}
              { showPhoneNote &&
                <span><br /><em className="contact-block__phone-note">We are available Monday through Friday, 8 am to 8 pm Eastern Time.</em></span>
              }
            </p>
          </div>
        }
        { fax &&
          <div>
            <h4>Fax</h4>
            <p>{ fax }</p>
          </div>
        }
        { email &&
          <div>
            <h4>Email</h4>
            <p><Link href={`mailto:${email}`}>{ email }</Link></p>
          </div>
        }
      </address>
    </article>
  );
}

export default ServiceBlock;
