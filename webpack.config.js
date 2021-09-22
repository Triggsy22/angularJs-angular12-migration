const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'html': './client/index.html',
        'ts': './client/main.ts',
    },
    output: {
        filename: function(obj){
            if(obj.chunk.name === 'html') {
                return 'temp/index.html';
            }else if(obj.chunk.name === 'ts') {
                return 'main.js';
            }
        },
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: false,
            template: 'client/index.html',
            inject: false,
            scriptLoading: 'blocking',
            xhtml: true,
        }),
    ],
    resolve:{
        extensions: ['.js', '.ts'],
        modules: [path.resolve(__dirname,'node_modules'), path.resolve(__dirname,'client')],
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-typescript'],
                            /*cacheDirectory: true*/
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            /*cacheDirectory: true*/
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                include:[
                    path.resolve(__dirname, 'client'),
                ],
                exclude:[
                    path.resolve(__dirname, 'client/index.html'),
                    /node_modules/
                ],
                use:[
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                        }
                    },
                ],
            },
            {
                test: /index\.html$/i,
                include:[
                    path.resolve(__dirname, 'client/index.html'),
                ],
                use:[
                    {
                        loader: 'html-webpack-plugin/lib/loader.js',
                        options: {
                            minimize: false,
                        }
                    },
                ],
            },
        ]
    }
}