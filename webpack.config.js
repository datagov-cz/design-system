var path = require('path');

module.exports = {
	entry: {
		app: './packages/core-react/src/lib/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'packages/core-react/src/cjs'),
		filename: 'index.js'
	},
	mode:'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: path.resolve(__dirname, 'packages/core-react/src/lib'),
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			}
		]
	}
};
