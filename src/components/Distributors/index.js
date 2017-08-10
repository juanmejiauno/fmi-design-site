import { Wrapper } from 'react-aria-tabpanel';
import autobind from 'lib/autobind';
import get from 'lodash/get';
import React from 'react';
import Distributor from 'components/Distributors/Distributor';
import Selector from 'components/Distributors/Selector';

const REGIONS_ORDER = [
  'Asia-Pacific',
  'Europe',
  'Middle East',
  'North America',
  'South America',
];

class Distributors extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.options = getOptions(props.entries);
    this.state = { activeId: this.options[0].entries[0].value };
  }

  updateActive(value) {
    this.setState({ activeId: value });
  }

  render() {
    const { activeId } = this.state;
    const { entries } = this.props;
    return (
      <div className=" distributors">
        <Wrapper activeTabId={activeId} onChange={this.updateActive}>
          <div className="distributors__picker">
            <Selector
              className=""
              activeId={activeId}
              options={this.options}
              onUpdate={this.updateActive}
            />
          </div>
          <div className="distributors__content">
            {
              entries.map(entry => (
                <Distributor
                  entry={entry}
                  key={entry.sys.id}
                  activeId={activeId}
                />
              ))
            }
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Distributors;

/***********************************
  Utility Functions
***********************************/

function getOptions(entries) {
  // group entries by region
  const groups = groupByRegion(entries, 'fields.region', toOption);
  // convert groups object to array
  const regions = mapRegions(groups);
  // sort regions
  return regions.sort(sortByRegion);
}

function groupByRegion(entries) {
  // sort the entries by alpha first
  entries.sort(sortEntryByTitleProp);
  return entries.reduce((regions, entry) => {
    const region = get(entry, 'fields.region');
    if (!regions[region]) regions[region] = []; // eslint-disable-line no-param-reassign
    regions[region].push(toOption(entry));
    return regions;
  }, {});
}

function toOption(entry) {
  const label = get(entry, 'fields.sidebarLabel');
  const value = get(entry, 'sys.id');
  return { label, value };
}

function sortEntryByTitleProp(a, b) {
  if (a.fields.sidebarLabel < b.fields.sidebarLabel) {
    return -1;
  }
  if (a.fields.sidebarLabel > b.fields.sidebarLabel) {
    return 1;
  }
  return 0;
}

function mapRegions(regions) {
  return Object.keys(regions).map((region) => {
    const entries = regions[region];
    return { region, entries };
  });
}

function sortByRegion(a, b) {
  const indexA = REGIONS_ORDER.indexOf(a.region);
  const indexB = REGIONS_ORDER.indexOf(b.region);
  return (indexA < indexB) ? -1 : 1;
}
