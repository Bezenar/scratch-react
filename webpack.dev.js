const { merge } = require('webpack-merge');
const BASE_CONFIG = require('./webpack.base.js')
const path = require('path');

module.exports = merge(BASE_CONFIG, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'static/'),
        },
        hot: true,
    },
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
                                localIdentName: '[name]__[local]',
                            }
                        }
                    },
                ],
            },
        ],
    }
});
