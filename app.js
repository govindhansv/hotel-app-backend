const http = require('http');



var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Welcome Cowboys!');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log(`Example app listening at http://localhost:${port}`)
})