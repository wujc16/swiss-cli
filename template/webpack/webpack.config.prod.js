const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
});
