import express from 'express';
import path from 'path';
var app = express();

var publicPath = path.resolve(__dirname + './../../build/client');

app.use(express.static(publicPath));

app.get('/', function (req,res) {
    res.sendFile(publicPath + '/index.html');
});

app.listen(3535, function () {
    console.log('server listening @ 3535');
})
