const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/wwwroot/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './wwwroot/index.html'
        })
    ]
};
