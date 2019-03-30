var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');

var path = require('path');



module.exports = {

    devServer: {

        inline: true,

        contentBase: './src',

        port: 3000

    },

    devtool: 'cheap-module-eval-source-map',

    entry: './dev/js/index.jsx',

    resolve: {

        extensions: ['', '.js', '.jsx']

    },

    module: {

        loaders: [

            {

                test: /\.jsx?$/,

                exclude: /(node_modules|bower_components)/,

                loader: 'babel-loader',

                query: {

                    presets: ['react', 'es2015', 'stage-0'],

                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],

                }

            },

            {

                test: /\.scss/,

                loader: 'style-loader!css-loader!sass-loader'

            }

        ]

    },

    output: {

        path: 'src',

        filename: 'js/bundle.min.jsx'

    },

    plugins: debug ? [] : [

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({

            mangle: false,

            sourcemap: false

        }),

  ],

};