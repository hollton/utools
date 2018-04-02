const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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