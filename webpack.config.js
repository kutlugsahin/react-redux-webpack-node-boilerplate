var path = require('path');

var APP_DIR = path.resolve(__dirname + '/client');
var BUILD_DIR = path.resolve(__dirname + '/build/client');

module.exports = {
    entry:  APP_DIR + '/App.jsx',
    output: {
        path:     BUILD_DIR,
        filename: 'bundle.js'        
    },
    devtools: ['source-map'],
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: APP_DIR,
            }
        ],
    }
};
