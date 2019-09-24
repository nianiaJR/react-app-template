const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base');

const devConfig = {
  devtool: 'inline-source-map',

  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, './src/index.tsx'),
    ],
  },

  output: {
    filename: '[name].js',
    publicPath: 'http://127.0.0.1:8888',
  },

  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: 'localhost',
    disableHostCheck: true,
  },
};

module.exports = merge({
  customizeArray(_, b, key) {
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  },
})(commonConfig, devConfig);
