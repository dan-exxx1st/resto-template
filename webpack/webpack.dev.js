const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

const devWebpackConfig = merge(baseWebpackConfig, {
	// DEV config
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		port: 3000,
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
	],
});

module.exports = new Promise((resolve) => {
	resolve(devWebpackConfig);
});
