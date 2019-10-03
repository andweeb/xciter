const path = require('path');
const withWorkers = require('@zeit/next-workers');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = withWorkers({
    webpack(config, options) {
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        return config;
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/xciter' : '',
});
