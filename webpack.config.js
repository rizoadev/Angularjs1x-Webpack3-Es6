const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './app/main.js'),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.(html)$/,
            loaders: ['html-loader']
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'file-loader?name=[name].[ext]&publicPath=../fonts/&outputPath=/assets/fonts/'
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'file-loader?name=/assets/images/[name].[ext]'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }],
                fallback: 'style-loader'
            })
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.(json)$/,
            loader: 'file-loader?name=[path][name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'assets/css/styles.css', allChunks: false, disable: false }),
        new CopyWebpackPlugin([]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                context: __dirname
            },
            sourceMap: false
        }),
        //https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
        new UglifyJSPlugin({
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                mangle: {
                    properties: {
                        // mangle property options
                    }
                },
                output: {
                    comments: false,
                    beautify: false
                },
                compress: {},
                warnings: false
            }
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: "./dev",
        hot: false
    }
};