const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraktPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './main.html',
      }),
      new MiniCssExtractPlugin({
        filename: './main.css',
      }),
    ],
  };