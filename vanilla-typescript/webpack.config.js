module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/../../assets`,
    filename: 'pre-order.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
