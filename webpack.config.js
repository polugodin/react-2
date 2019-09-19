const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: join(__dirname, 'index.jsx'),
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',

            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'encode test',
            template: 'index.html'
        }),
    ]
};
