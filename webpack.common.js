const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
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