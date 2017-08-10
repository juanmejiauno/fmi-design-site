import React from 'react';
import Link from 'components/Link';

const AssayTableRowCheckmark = ({ checked }) => {
  return (
    checked
      ? <span className="assay-table__checkmark assay-table__checkmark--yes">Yes</span>
      : <span className="assay-table__checkmark assay-table__checkmark--no">No</span>
  );
};

const AssayTableRow = ({ entry }) => {
  return (
    <ul className="assay-table__col">
      <li className="assay-table__th">{entry.fields.testName}</li>
      <li className="assay-table__td" data-label="Indications"><span>{entry.fields.indications}</span></li>
      <li className="assay-table__td" data-label="Biopsy Type"><span>{entry.fields.biopsyType}</span></li>
      <li className="assay-table__td" data-label="Tumor Mutational Burden (TMB)"><AssayTableRowCheckmark checked={entry.fields.includesTmb} /></li>
      <li className="assay-table__details"><Link className="assay-table__details-link link-cta-tab" to={`/genomic-testing/${entry.fields.slug}`}>Details →</Link></li>
    </ul>
  );
};

const AssayTable = ({ entries }) => {
  if (!entries.length) {
    return null;
  }

  return (
    <div className="assay-table">
      <ul className="assay-table__col assay-table__col--row-labels">
        <li className="assay-table__th"><span><img src="/img/fmi-logo-glyph--white.svg" alt="Foundation Medicien Symbol" /></span></li>
        <li className="assay-table__td assay-table__td--row-label"><span>Indications</span></li>
        <li className="assay-table__td assay-table__td--row-label"><span>Biopsy Type</span></li>
        <li className="assay-table__td assay-table__td--row-label"><span>Tumor Mutational Burden (TMB)*</span></li>
      </ul>
      {entries.map(entry => <AssayTableRow key={entry.sys.id} entry={entry} />)}
    </div>
  );
};

export default AssayTable;
