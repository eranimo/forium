const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
	entry: './src/index.tsx',
	module: {

		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			}
		]
	},

	output: {
		path: path.resolve('dist'),
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
	},

	mode: 'development',
	devtool: 'source-map',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: './tsconfig.json'
			}),
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Forium',
			template: 'src/index.html',
		}),
	]
};
