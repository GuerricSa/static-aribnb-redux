const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html',
    }),
  ],
  devtool: 'source-map', // Modifié la valeur de devtool
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // Utiliser 'use' au lieu de 'loaders'
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Utiliser 'use' au lieu de 'loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
