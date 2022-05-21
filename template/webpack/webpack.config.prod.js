const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const path = require('path');
const fs = require('fs');

// 之前先删除掉 dist 文件夹以及里面所有的东西
const outputPath = path.resolve(__dirname, '../dist');
fs.rmdirSync(outputPath, { recursive: true });

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: outputPath,
  }
});
