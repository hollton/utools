const path = require('path')

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
  }
};