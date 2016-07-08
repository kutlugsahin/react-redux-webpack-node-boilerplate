var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname + '/client');
var BUILD_DIR = path.resolve(__dirname + '/build/client');

module.exports = {
  entry: [
    //'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/only-dev-server',
    //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    APP_DIR + '/main.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath : '/static/'
  },
  devtools: ['source-map'],
  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['react-hot','babel'],
      include: APP_DIR,
    }]
    //,{ test : /\.html?/, loader : 'file', include : __dirname }
    //,{ test: /\.js?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(__dirname, 'client') }
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
