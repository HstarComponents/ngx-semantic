const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

let baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'ng2-semantic': ['./index.ts'],
    vendor: './demo/vendor.ts'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'ng2-semantic',
    libraryTarget: 'umd'
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['ng2-semantic', 'vendor']
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});