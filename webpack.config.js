const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',

  devServer: {
    historyApiFallback: true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
    ],
  },

  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx'],
      exclude: ['/node_modules/'],
    }),
    new HtmlWebPackPlugin({
      hash: true,
      template: './public/index.html',
      favicon: './src/icons/favicon.svg',
    }),
    new Dotenv(),
  ],
};
