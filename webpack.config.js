const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true

    },
    module: {
        rules: [
            {
                test:/\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },

        ]
    },

    devServer: {
        port: 3000,
        hot: false,
        liveReload: true,
        static:{
            directory:'./'
        },
        open: true
    }
};