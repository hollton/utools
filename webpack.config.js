const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: `utools.min.js`,
  	path: path.resolve(__dirname, 'dist'),
    library: 'utools',
    libraryTarget: "umd"
  },
  module: {
  	loaders: [{
  		test: /\.js$/,
  		exclude: /node_modules/,
  		loader: 'babel-loader'
  	}]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};