var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    common: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.web.js',
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/, /server/],
        loader: 'react-hot!babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /server/],
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0']
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.jpg/,
        loader: "url-loader",
        query: { mimetype: "image/jpg" }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build',
    hot: true
  },
  modulesDirectories: [
    'node_modules'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin(
      {
        filename: './index.html',
        title: 'My App',
        template: './templates/index.html'
      }
    ),
    //new ExtractTextPlugin('./css/styles.css')
  ]
};
