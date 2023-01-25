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
        // TODO: https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
        // Add `{ runtime: 'automatic' }` babel-loader option to support react jsx transform in runtime
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
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
