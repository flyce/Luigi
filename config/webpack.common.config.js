const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './src/index.js',
    framework: ['react','react-dom', 'react-router-dom', 'antd'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].[hash:8].js',
    chunkFilename: './js/[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 8192,
          },
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
         loader: 'file-loader',
         options: {
          name: '[name]_[hash:8].[ext]',
          outputPath: 'font/'
         }
        }
      }
    ]
  }
}
