const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-source-map',
	cache: true,
	profile: true,
	resolve: {
		extensions: ['.js', '.ts']
	},
	module: {
		rules: [
			{ test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'], exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract({ loader: 'css-loader' }) },
			{ test: /\.styl$/, loader: ExtractTextPlugin.extract({ loader: 'css-loader!stylus-loader' }) }
		]
	},
	plugins: [
		new CheckerPlugin()
	]
};