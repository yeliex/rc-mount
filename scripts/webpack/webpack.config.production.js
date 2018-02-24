const webpack = require('webpack');
const _ = require('lodash');

module.exports = (webpackConfig) => {
  webpackConfig.externals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  };

  const minConfig = _.cloneDeep(webpackConfig);

  minConfig.plugins = webpackConfig.plugins || [];

  minConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    sourceMap: true,
    compress: {
      drop_console: true,
      collapse_vars: true,
      reduce_vars: true,
      drop_debugger: true,
      warnings: false
    }
  }));

  minConfig.output.filename = '[name].min.js';

  return [minConfig, webpackConfig];
};
