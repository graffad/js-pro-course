const path = require('path');
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

    ],
  },
  plugins: [
    new HTMLWebpackPlugin(
      {
        template: './src/index.html',
      },
    ),

  ],

};
