const isClient = process.env.isClient === true;
const isTest = process.env.NODE_ENV === 'test';
const isProduction = process.env.NODE_ENV === 'production';

const shouldLog = !isTest && (!isClient || !isProduction);

const logger = {
  info() {
    if (shouldLog) {
      console.info.apply(null, arguments);
    }
  },
  warn() {
    if (shouldLog) {
      console.warn.apply(null, arguments);
    }
  },
  error() {
    if (shouldLog) {
      console.error.apply(null, arguments);
    }
  },
};

export default logger;
