const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname),
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, '..', 'django', 'groupstudy_dashboard', 'static'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /.jsx?$/, loaders: 'babel-loader', exclude: /node_modules/ },
        ],
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            actions: path.resolve(__dirname, 'actions'),
        },
    },
};
