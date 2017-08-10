const { resolve } = require('path');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');

const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const IS_OPTIMIZED = process.env.NODE_ENV !== 'development';

/**
 * Client Build
 * * targets web platform
 * * transpiles to ES5
 */
const general = {
  target: 'web',
  entry: {
    index: [resolve('src/client.js')],
    'service-worker': [resolve('src/service-worker.js')],
  },
  output: {
    libraryTarget: 'var',
    path: resolve('./dist/public'),
  },
  node: {
    process: false,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [resolve('node_modules')],
      loader: 'babel-loader',
      options: {
        babelrc: false,
        retainLines: !IS_OPTIMIZED,
        cacheDirectory: !IS_OPTIMIZED,
        presets: [
          'react',
          'es2015',
          'es2016',
          'es2017',
        ],
        plugins: [
          'transform-strict-mode',
          'transform-object-rest-spread',
        ],
      },
    }],
  },
};

/**
 * Optimized Build
 * * avoids generating sourcemaps
 * * removes module path comments
 * * compresses and mangles code
 * * strips debugger statements
 * * stops build on error (production only)
 * * strips nonlegal comments (production only)
 * * strips console statements (production only)
 */
const optimized = {
  bail: !IS_OPTIMIZED,
  devtool: false,
  output: {
    pathinfo: false,
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [resolve('node_modules')],
      loader: 'babel-loader',
      options: {
        babelrc: false,
        retainLines: !IS_OPTIMIZED,
        cacheDirectory: !IS_OPTIMIZED,
        plugins: ['transform-remove-console'],
      },
    }],
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new UglifyJSPlugin({
      output: {
        beautify: false,
        comments: !IS_OPTIMIZED,
      },
      compress: {
        drop_console: false,
        drop_debugger: true,
        warnings: false,
      },
    }),
  ],
};

module.exports = IS_OPTIMIZED
  ? smart(base, general, optimized)
  : smart(base, general);
