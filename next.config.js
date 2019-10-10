const path = require('path');
const withWorkers = require('@zeit/next-workers');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const assetPrefix = process.env.NODE_ENV === 'production' ? '/xciter' : '';

module.exports = withWorkers({
    webpack(config, options) {
        config.module.rules.unshift({
            test: /\.worker\.ts$/,
            loader: 'worker-loader',
            options: {
                name: 'static/[hash].worker.js',
                publicPath: `${assetPrefix}/_next/`,
            },
        });

        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
        }

        config.output.globalObject = 'this';

        return config;
    },
    assetPrefix,
});
