const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
    another: './src/moduleA.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};