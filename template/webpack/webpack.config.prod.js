const { merge } = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');

// 之前先删除掉 dist 文件夹以及里面所有的东西
const outputPath = path.resolve(__dirname, '../dist');
fs.rmdirSync(outputPath, { recursive: true });

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: outputPath,
  },
  optimization: {
    minimizer: [
      // 用来进行 css 压缩的插件
      new CssMinimizerPlugin(),
    ],
  },
});
