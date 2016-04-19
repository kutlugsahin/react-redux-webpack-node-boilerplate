import express from 'express';
import path from 'path';
var app = express();

app.use(express.static(publicPath));

// app.get('/', function (req,res) {
//     res.sendFile(publicPath + '/index.html');
// });

app.listen(3535, function () {
    console.log('server listenting @ 3535');
})
