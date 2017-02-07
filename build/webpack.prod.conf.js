require('shelljs/global');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let baseConfig = require('./webpack.base.conf');

// 清空dist目录
rm('-rf', 'dist');

module.exports = webpackMerge(baseConfig, {
	entry: {
		'ng2-semantic': './index.ts'
	},
	externals: [
		'@angular/core',
		'@angular/common',
		'@angular/compiler',
		'@angular/forms'
	],
	output: {
		path: './dist',
		filename: '[name].js',
		library: 'ng2-semantic',
		libraryTarget: 'umd'
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'ng2-semantic.css', disable: false, allChunks: true }),
		new UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
});