const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    // show compile progress in client(browser)
    client: {
      progress: true,
    },
    // enable gzip compression
    compress: true,
    // index.html is likely to be served in place of any 404 response, otherwise
    // react-router-dom may not work well
    historyApiFallback: true
  }
});
