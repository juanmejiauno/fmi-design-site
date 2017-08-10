import lint from 'mocha-eslint';

const paths = [
  './__tests__/**/*.js',
  './src/**/*.js',
  '!./src/assets/**/*',
];

const options = {
  formatter: 'codeframe',
  alwaysWarn: true,
  timeout: 5000,
  slow: 1000,
  strict: true,
};

lint(paths, options);
