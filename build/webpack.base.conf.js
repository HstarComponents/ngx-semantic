const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript', 'angular2-template'] },
      { test: /\.html$/, loader: 'raw' }
    ]
  }
};