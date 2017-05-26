const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.css$/,
            loader: "css-loader"
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devtool: "inline-source-map"
};
