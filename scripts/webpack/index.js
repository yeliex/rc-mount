const minimist = require('minimist');
const prodConfig = require('./webpack.config.production');
const devConfig = require('./webpack.config.development');
const commonConf = require('./webpack.config');

const args = Object.assign({}, minimist(process.argv), minimist(JSON.parse(process.env.npm_config_argv).original));

let config = commonConf({});

if (args.prod) {
  module.exports = prodConfig(config);
} else if (args.dev || args.env === 'dev') {
  module.exports = devConfig(config);
} else {
  module.exports = config;
}
