const { resolve } = require('path');
const { smart } = require('webpack-merge');
const base = require('./webpack.base');

const NodeExternals = require('webpack-node-externals');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const IS_OPTIMIZED = process.env.NODE_ENV !== 'development';

/**
 * Client Build
 * * targets Node platform
 * * preserves CommonJS syntax
 * * avoids bundling node_modules
 * * transpiles to ES6
 */
const general = {
  target: 'node',
  entry: {
    index: [resolve('src/server.js')],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: resolve('./dist/server'),
  },
  externals: [NodeExternals()],
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
 * * stops build on error
 * * avoids generating sourcemaps
 * * removes module path comments
 */
const optimized = {
  bail: IS_OPTIMIZED,
  devtool: false,
  output: {
    pathinfo: false,
  },
  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ],
};

module.exports = IS_OPTIMIZED
  ? smart(base, general, optimized)
  : smart(base, general);
