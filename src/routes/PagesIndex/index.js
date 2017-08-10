import get from 'lodash/get';
import React from 'react';
import routeWrapper from 'lib/route-wrapper';

import EntryList from 'components/EntryList';
import PageHeader from 'components/PageHeader';

class PagesIndex extends React.Component {
  static async fetchData(client) {
    const pages = await client.getEntries({ content_type: 'basicPage' });
    return { pages };
  }

  render() {
    const pages = get(this, 'props.route.data.pages');
    return (
      <section className="base-layout">
        <PageHeader heading="Pages" />
        <EntryList entries={pages} />
      </section>
    );
  }
}

const routeOptions = {
  requiredProps: ['pages'],
};

export default routeWrapper(PagesIndex, routeOptions);
