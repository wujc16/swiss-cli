const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 这个插件是用来讲 css 打包成单独文件的
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$|\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 这个 loader 是用来针对 css module 生成 d.ts 文件的
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (filePath) => /\.scss$|\.css$/.test(filePath),
                localIdentName: '[local]__[hash:base64:5]'
              },
            }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
};
