const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript', 'angular2-template'] },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, include: [path.resolve(__dirname, './../src/components')], loader: 'raw' }
    ]
  }
};