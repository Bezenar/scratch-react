const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.ts'),
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            title: 'React Rick and Morty123',
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'static/index.html'),
            templateParameters: {
                css: 'main.css',
                js: 'js/bundle.main.js',
            },
        }),
    ],
};
