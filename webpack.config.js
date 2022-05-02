const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
                template: "./src/index.html"
            }
        )
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
}