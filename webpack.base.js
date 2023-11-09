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
        alias: {
            '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
            '@icons': path.resolve(__dirname, 'src/components/icons'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@helpers': path.resolve(__dirname, 'src/helpers/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@t': path.resolve(__dirname, 'src/types/'),
        }
    },
    cache: {
        type: 'filesystem',
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
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
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/assets/styles/main.scss'),
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './img/[name].[ext]',
                        },
                    },
                ],
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
