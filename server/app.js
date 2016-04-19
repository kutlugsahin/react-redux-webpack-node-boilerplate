import express from 'express';
import path from 'path';
var app = express();
<<<<<<< HEAD
=======

>>>>>>> 39ce34550be24fc24b3e4f661194140ab4bafaf0
var publicPath = path.resolve(__dirname + './../../build/client');

var webpack = require('webpack');
var webpackConfig = require('../../webpack.config.js');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static(publicPath));

// app.get('/', function (req,res) {
//     res.sendFile(publicPath + '/index.html');
// });

app.listen(3535, function () {
    console.log('server listening @ 3535');
})
