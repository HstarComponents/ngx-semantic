'use strict';

const path = require('path');
const webpack = require('webpack');


/*eslint no-process-env:0, camelcase:0*/
const isProduction = (process.env.NODE_ENV || 'development') === 'production';
const devtool = process.env.NODE_ENV === 'test' ? 'inline-source-map' : 'source-map';
const dest = 'demo-build';
const absDest = root(dest);

const config = {
  // isProduction ? 'source-map' : 'evale',
  devtool,
  debug: false,

  verbose: true,
  displayErrorDetails: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    cache: false,
    root: __dirname,
    extensions: ['', '.ts', '.js', '.json']
  },

  entry: {
    angular2: [
      // Angular 2 Deps
      'es6-shim',
      'es6-promise',
      'zone.js',
      'reflect-metadata',
      '@angular/common',
      '@angular/core'
    ],
    'ng2-semantic': ['ng2-semantic']
  },

  output: {
    path: absDest,
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  // our Development Server configs
  // devServer: {
  //   inline: true,
  //   colors: true,
  //   historyApiFallback: true,
  //   contentBase: dest,
  //   //publicPath: dest,
  //   outputPath: dest,
  //   watchOptions: {aggregateTimeout: 300, poll: 1000}
  // },

  module: {
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts',
        query: {
          compilerOptions: {
            removeComments: true,
            noEmitHelpers: false
          }
        },
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/,
      /zone\.js\/dist\/zone-microtask/
    ]
  },

  plugins: [
    //new Clean([dest]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    }),
    // static assets
    new CopyWebpackPlugin([{from: 'demo/favicon.ico', to: 'favicon.ico'}]),
    new CopyWebpackPlugin([{from: 'demo/assets', to: 'assets'}]),
    // generating html
    new HtmlWebpackPlugin({template: 'demo/index.html'}),
    new HtmlWebpackPlugin({
      template: 'demo/index-bs4.html',
      filename: 'index-bs4.html'
    })
  ]
};


module.exports = config;

function root(partialPath) {
  return path.join(__dirname, partialPath);
}