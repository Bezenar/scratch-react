const { merge } = require('webpack-merge');
const path = require('path');
const BASE_CONFIG = require('./webpack.base.js');

module.exports = merge(BASE_CONFIG, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.module.scss$/,
                include: path.resolve(__dirname, 'src'),
                exclude: ['/node_modules/', path.resolve(__dirname, 'src/assets/styles/main.scss')],
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64]',
                            }
                        }
                    },
                ],
            },
        ],
    },
});
