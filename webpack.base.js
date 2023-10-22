const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
require('dotenv').config({ path: './.env' });

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/bundle.[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: '/node_modules/',
            },
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
                                localIdentName: '[name]__local[local]',
                            }
                        }
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/assets/styles/main.scss'),
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            title: process.env.REACT_APP_TITLE,
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'static/index.html'),
            templateParameters: {
                css: 'css/styles.css',
                js: 'js/bundle.main.js',
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
    ],
};
