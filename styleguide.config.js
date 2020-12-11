module.exports = {
	components: './src/components/**/*.js',
	ignore: ['./components/Layout.js'],
	// propsParser: require('react-docgen-typescript').parse,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.tsx/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
			],
		},
	},
	webpackConfig: {
		module: {
			rules: [
				// Babel loader will use your project’s babel.config.js
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				// Other loaders that are needed for your components
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
	},
};
