'use strict';

let path = require('path');

let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  debug: true,
  context: path.join(__dirname, ''),
  entry: {
    'ng2-semantic': ['./src/ng2-semantic.ts'],
    polyfills: './demo/polyfills.ts',
    vendor: './demo/vendor.ts',
    demo: './demo/demo.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new CommonsChunkPlugin({
      name: ['ng2-semantic', 'vendor', 'polyfills'] //vendor和polyfills设置为公共代码块
    }),
    new CopyWebpackPlugin([
      { from: './demo/index.html', to: path.join(__dirname, 'dist') },
      { from: './assets/', to: path.join(__dirname, 'dist/assets') }
    ])
  ],
  devServer: {
    host: 'localhost',
    port: 7410,
    contentBase: 'assets/',
    // hot: true,
    historyApiFallback: true,
    open: true,
    outputPath: path.join(__dirname, '..', 'dist')
  }
};