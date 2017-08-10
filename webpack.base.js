const { resolve } = require('path');

/**
 * Base Build
 * * generates sourcemaps
 * * adds 'use strict' pragma
 * * exposes environment variables
 */
module.exports = {
  devtool: 'cheap-source-map',
  stats: { timings: true },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: resolve('dist/public'),
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: {
      __tests__: resolve('__tests__'),
      ScrollMagic: resolve('node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'debug.addIndicators': resolve('node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
};
