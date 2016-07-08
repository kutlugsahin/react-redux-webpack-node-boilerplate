import express from 'express';
import path from 'path';
var app = express();

var bootstrap = path.join(__dirname, '../../node_modules/', "bootstrap", "dist");
var jquery = path.join(__dirname, '../../node_modules/', "jquery", "dist");
var client = path.join(__dirname, '..', "client");

app.use('/bootstrap', express.static(bootstrap));
app.use('/jquery', express.static(jquery));
app.use('/client', express.static(client));

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname,'../../', '/index.html'));
});

app.listen(3535, function () {
    console.log('server listenting @ 3535');
})
