import express from 'express';
import path from 'path';
var app = express();
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
    console.log('server listenting @ 3535');
})
