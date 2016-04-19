'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(publicPath));

// app.get('/', function (req,res) {
//     res.sendFile(publicPath + '/index.html');
// });

app.listen(3535, function () {
    console.log('server listenting @ 3535');
});