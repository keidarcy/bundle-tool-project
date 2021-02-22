const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const currentTask = process.env.npm_lifecycle_event;

console.log({ currentTask });

const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true // enable hot module
  },
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};

if (currentTask === 'build') {
  config.mode = 'production';
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  );
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
}

module.exports = config;
