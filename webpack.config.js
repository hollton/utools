module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/es-utools.min.js',
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