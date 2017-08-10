const nameMatcher = /^(FOUNDATION)([^™©®]+)(™|©|®)?(.+)?$/;

function styleName(name = '') {
  const parts = name.match(nameMatcher);
  if (!parts) return name;
  const brand1 = parts[2];
  const symbol = parts[3] || '';
  const brand2 = parts[4] || '';
  return `FOUNDATION<strong>${brand1}</strong>${symbol}${brand2}`;
}

export default styleName;
