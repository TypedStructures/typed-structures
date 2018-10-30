const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname);
const DESTINATION = path.resolve( __dirname);

module.exports = {
    context: ROOT,

    entry: {
        'main': './index    .ts'
    },
    
    output: {
        filename: 'index.js',
        path: DESTINATION
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * PRE-LOADERS
            *****************/
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /****************
            * LOADERS
            *****************/
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'source-map',
    devServer: {}
};

