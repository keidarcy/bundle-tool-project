const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
