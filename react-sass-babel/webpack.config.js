const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 8080,
    // hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // style-loader => mount css to dom, css-loader => load css to js
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};

if (currentTask == 'build') {
  config.mode = 'production';
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' }),
    new CleanWebpackPlugin()
  );
}

module.exports = config;
