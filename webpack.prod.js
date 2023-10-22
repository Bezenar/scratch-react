const { merge } = require('webpack-merge');
const BASE_CONFIG = require('./webpack.base.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(BASE_CONFIG, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js?/,
                exclude: ['/node_modules/', '/__tests__/'],
                parallel: true,
                extractComments: false,
                terserOptions: {
                    nameCache: null,
                },
            }),
        ],
    }
});
