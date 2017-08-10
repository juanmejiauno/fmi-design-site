import React from 'react';
import ContentfulText from 'components/ContentfulText';

function parseContentType(file) {
  const types = file.fields.file.contentType.split('/');
  return types[1] ? types[1] : types[0];
}

function createListItems(files) {
  return files.map((file, index) => {
    const fileType = parseContentType(file);
    const { url, filename } = file.fields.file;
    const { title } = file.fields;
    const keyName = `${filename}-${index}`;

    return (
      <li className="filelist__item" key={keyName}>
        <a href={url} download className={`filelist__link filelist__link--${fileType}`}><ContentfulText text={title} /></a>
      </li>
    );
  });
}

const FileList = ({ files, heading }) => {
  if (!files || !files.length) {
    return null;
  }

  return (
    <div className="filelist">
      {heading &&
      <h2 className="h2 filelist__head js-filelist-heading"><ContentfulText text={heading} /></h2>
      }
      <ul className="filelist__list js-filelist">
        {createListItems(files)}
      </ul>
    </div>
  );
};

export default FileList;
