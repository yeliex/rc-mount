const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig) => {
  webpackConfig.entry.example = [
    './example/index.js'
  ];

  webpackConfig.plugins = webpackConfig.plugins || [];

  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    inject: 'body',
    template: './example/index.html',
    hash: false,
    cache: false,
    chunk: ['example']
  }));

  webpackConfig.devServer = {
    compress: false,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: '3000',
    overlay: {
      warnings: false,
      errors: true
    },
    publicPath: 'http://127.0.0.1:3000',
    historyApiFallback: {
      index: '/example.html'
    }
  };

  return webpackConfig;
};
