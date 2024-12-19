const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'; // Check if the mode is 'production'

  return {
    entry: './src/index.jsx',

    output: {
      filename: '[name].[contenthash].js', // Files are named with hashes to ensure better caching
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    }, // Configuration explicitly to ensure bundled files go to the right place

    stats: 'detailed',

    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 8080,
    },

    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map', // Different source maps for dev and prod

    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      new ESLintWebpackPlugin({
        extensions: ['js', 'jsx', 'tsx'],
        exclude: ['/node_modules/'],
      }),
      new HtmlWebPackPlugin({
        hash: true,
        template: './public/index.html',
        favicon: './src/icons/favicon.svg',
      }),
      new Dotenv(),
      new CleanWebpackPlugin(), // Ensures the dist folder is cleaned up before each build
    ],

    resolve: {
      extensions: ['.js', '.jsx', '.tsx'],
    },

    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
      },
    }, // For minification during production builds and optimize devtool for faster builds
  };
};
