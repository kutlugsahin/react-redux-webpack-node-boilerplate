'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var bootstrap = _path2.default.join(__dirname, '../../node_modules/', "bootstrap", "dist");
var jquery = _path2.default.join(__dirname, '../../node_modules/', "jquery", "dist");
var client = _path2.default.join(__dirname, '..', "client");

app.use('/bootstrap', _express2.default.static(bootstrap));
app.use('/jquery', _express2.default.static(jquery));
app.use('/client', _express2.default.static(client));

app.get('/', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, '../../', '/index.html'));
});

app.listen(3535, function () {
    console.log('server listenting @ 3535');
});