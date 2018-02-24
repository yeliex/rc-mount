const webpack = require('webpack');
const { resolve } = require('path');

module.exports = (webpackConfig) => {
  webpackConfig.entry = {
    index: ['./src/index.js']
  };

  webpackConfig.output = {
    path: resolve(__dirname, '../../dist'),
    library: 'rc-mount',
    libraryTarget: 'umd',
    filename: '[name].js'
  };

  webpackConfig.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('babel-preset-es2015'),
              require.resolve('babel-preset-react'),
              require.resolve('babel-preset-stage-0')
            ],
            plugins: [
              require.resolve('babel-plugin-add-module-exports'),
              require.resolve('babel-plugin-transform-decorators-legacy')
            ]
          }
        }]
      }
    ]
  };

  webpackConfig.devtool = '#source-map';

  return webpackConfig;
};
