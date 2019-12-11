const merge = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
  },

  plugins: [

    new HotModuleReplacementPlugin(),
  ],
});
