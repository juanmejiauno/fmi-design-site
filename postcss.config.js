const { resolve } = require('path');

const path = resolve('src/img');

module.exports = {
  plugins: [
    require('postcss-inline-svg')({ path }),
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 4 versions',
      ]
    }),
    require('cssnano')
  ]
}
