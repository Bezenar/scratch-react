const { merge } = require('webpack-merge');
const BASE_CONFIG = require('./webpack.base.js')
const path = require('path');

module.exports = merge(BASE_CONFIG, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'static/'),
        },
        hot: true,
    }
});
