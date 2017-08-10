const isString = input => typeof input === 'string';
const trimString = input => input.trim();

function concatClass(...classNames) {
  return classNames
    .filter(isString)
    .filter(Boolean)
    .map(trimString)
    .join(' ');
}

export default concatClass;
