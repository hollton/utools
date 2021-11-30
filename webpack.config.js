const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'es-utools.min.js',
    library: 'utools',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: 'head',
      scriptLoading: 'blocking'
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    open: true,
    port: 8888,
    inline: true,
    hot: true
  }
};
module.exports = config;
