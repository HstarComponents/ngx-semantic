const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

let baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  debug: true,
  entry: {
    'ng2-semantic': ['./index.ts'],
    vendor: './demo/vendor.ts',
    demo: './demo/demo.ts'
  },
  output: {
    path: './dist',
    publichPath: 'http://127.0.0.1:7410/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['ng2-semantic', 'vendor']
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './demo/index.html',
      inject: true
    })
  ],
  devServer: {
    host: '0.0.0.0', //允许IP访问
    port: 7410,
    contentBase: './demo',
    historyApiFallback: true, // history fallback
    stats: 'minimal',
    index: 'demo/index.html'
    // open: true
  }
});