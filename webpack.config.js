'use strict';

let path = require('path');

let webpack = require('webpack');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

//通过查找命令行中是否有webpack-dev-server来判断是否是执行的webpack-dev-server
let isWebpackDevServer = process.argv.join('').indexOf('webpack-dev-server') >= 0;

var config = {
  debug: true,
  context: path.join(__dirname, ''),
  entry: {
    'ng2-semantic': ['./src/ng2-semantic.ts'],
    polyfills: './demo/polyfills.ts',
    vendor: './demo/vendor.ts',
    demo: './demo/demo.ts'
  },
  output: {
    path: 'dist/',
    publicPath: 'http://localhost:7410/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html']
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
    contentBase: './demo/public',
    // hot: true,
    historyApiFallback: true,
    open: true
  }
};

//如果是webpack-dev-server，那么则特殊处理
if (isWebpackDevServer) {
  config.plugins.pop();
  config.plugins.push(
    new CopyWebpackPlugin([
      { from: './demo/index.html', to: '/' },
      { from: './assets/', to: '/assets/' },
      { from: './demo/components/', to: '/components/' }
    ])
  );
}

module.exports = config;