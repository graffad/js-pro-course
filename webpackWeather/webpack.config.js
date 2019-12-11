const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/main.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',

        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',

        ],
      },
      {
        test: /\.(woff|woff2|)$/,
        use: [
          'file-loader',

        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        title: 'webpackWeather',
        template: './src/index.html',
      },
    ),
    new CleanWebpackPlugin(),
  ],
};
