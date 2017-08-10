import { TabList, Tab } from 'react-aria-tabpanel';
import autobind from 'lib/autobind';
import React from 'react';

const MEDIA_QUERY = '(max-width: 1069px)';

class DistributorSelector extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      mobile: true,
    };
  }

  componentDidMount() {
    if (window.matchMedia) {
      const mediaMatcher = matchMedia(MEDIA_QUERY);
      this.updateMobile(mediaMatcher);
      mediaMatcher.addListener(this.updateMobile);
    }
  }

  updateMobile({ matches }) {
    this.setState({ mobile: matches });
  }

  render() {
    return this.state.mobile
      ? renderSelect(this.props)
      : renderTabList(this.props);
  }
}

export default DistributorSelector;

/***********************************
  Tab List Rendering
***********************************/

function renderTabList({ activeId, options }) {
  return (
    <TabList>
      <ul className="distributors__picker-outer-list">
        { options.map(renderTabGroup(activeId)) }
      </ul>
    </TabList>
  );
}

function renderTabGroup(activeId) {
  return ({ region, entries }) => (
    <li key={region}>
      <h3 className="distributors__picker-head">{ region }</h3>
      <ul className="distributors__picker-inner-list">{ entries.map(renderTab(activeId)) }</ul>
    </li>
  );
}

function renderTab(activeId) {
  return ({ label, value }) => (
    <li className="distributors__picker-item" key={value}>
      <Tab id={value} active={value === activeId}>
        { label }
      </Tab>
    </li>
  );
}

/***********************************
  Select Rendering
***********************************/

function renderSelect({ activeId, options, onUpdate }) {
  const onChange = event => onUpdate(event.target.value);
  return (
    <div>
      <label className="label" htmlFor="distributors-select">Choose a Country</label>
      <select name="distributors-select" className="distributors__picker-select" value={activeId} onChange={onChange}>
        { options.map(renderOptGroup) }
      </select>
    </div>
  );
}

function renderOptGroup({ region, entries }) {
  return (
    <optgroup label={region} key={region}>
      { entries.map(renderOpt) }
    </optgroup>
  );
}

function renderOpt({ label, value }) {
  return (
    <option value={value} key={value}>
      { label }
    </option>
  );
}
