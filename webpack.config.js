var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app/assets/javascripts'),
    entry: './_application.js',
    output: {
        path: path.resolve(__dirname, 'app/assets/javascripts'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx'],
    },
};
