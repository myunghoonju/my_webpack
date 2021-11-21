var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production, development, none
  entry: './index.js', 
  output: {
    filename: 'bundle.js', //filename: '[chunkhash].js'
    path: path.resolve(__dirname, 'dist')
  },
  module: { // loader settings
    rules: [
      /*{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //read right to left ['style-loader', 'css-loader', 'sass-loader']
      },*/
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] //read right to left ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // plugins: [
  //   new MiniCssExtractPlugin()
  // ],
}