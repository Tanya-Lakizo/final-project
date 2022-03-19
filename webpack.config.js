'use strict'

let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Генерит HTML
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Очищает папку dist при каждой сборке
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        assetModuleFilename: 'assets/images/[name][ext]'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            template: path.resolve(__dirname, './src/pages/about.html'), // шаблон
            filename: 'pages/about.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Workouts',
            template: path.resolve(__dirname, './src/pages/workouts.html'), // шаблон
            filename: 'pages/workouts.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'Shop',
            template: path.resolve(__dirname, './src/pages/shop.html'), // шаблон
            filename: 'pages/shop.html', // название выходного файла
        }),
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public'),
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                },
            ],
        }),

        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],

    //watch: true,

    devtool: "source-map",

    module: {
        rules: [
            // Добавляет CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    }
};