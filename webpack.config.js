const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './_index.js',
  output: {
    filename: 'index.js',
  	path: path.resolve(__dirname),
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
    })
  ]
};