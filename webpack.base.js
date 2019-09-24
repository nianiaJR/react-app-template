const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const commonConfig = {
  entry: {
    app: [path.join(__dirname, './src/index.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader?cacheDirectory=true', 'ts-loader'],
        // include: path.join(__dirname, '../app/assets'),
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NO_INTL: JSON.stringify(process.env.npm_config_nointl ? '1' : '0'),
      },
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
};

module.exports = commonConfig;
