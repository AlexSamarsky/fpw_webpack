const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3001,
        hot: true,
    },
    stats: 'none',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Development',
            template: path.join(__dirname, 'index.html'),
            scriptLoading: "blocking"
        }),
    ],
    output: {
        filename: 'main.js'
    }
}