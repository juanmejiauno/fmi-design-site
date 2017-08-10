import { TabPanel } from 'react-aria-tabpanel';
import get from 'lodash/get';
import React from 'react';
import ContentfulText from 'components/ContentfulText';

function Distributor({ entry, activeId }) {
  const active = entry.sys.id === activeId;
  const title = get(entry, 'fields.title');
  const mainInfo = get(entry, 'fields.mainContactInformation');
  const section1Title = get(entry, 'fields.section1Title');
  const section1Info = get(entry, 'fields.section1ContactInformation');
  const section2Title = get(entry, 'fields.section2Title');
  const section2Info = get(entry, 'fields.section2ContactInformation');

  return (
    <TabPanel tabId={entry.sys.id} active={active}>
      {(title || mainInfo) &&
        <article className="distributor-panel">
          <h2 className="distributors__title">{ title }</h2>
          {mainInfo &&
            <address className="contact-block__set contact-block__set--contentful">
              <ContentfulText text={mainInfo} />
            </address>
          }
        </article>
      }

      {(section1Title || section1Info) &&
        <article className="contact-block__set">
          {section1Title &&
            <h3 className="contact-block__name">{section1Title}</h3>
          }
          {section1Info &&
            <address className="contact-block__set contact-block__set--contentful">
              <ContentfulText text={section1Info} />
            </address>
          }
        </article>
      }

      {(section2Title || section2Info) &&
        <article className="contact-block__set">
          {section2Title &&
            <h3 className="contact-block__name">{section2Title}</h3>
          }
          {section2Info &&
            <address className="contact-block__set contact-block__set--contentful">
              <ContentfulText text={section2Info} />
            </address>
          }
        </article>
      }
    </TabPanel>
  );
}

export default Distributor;
