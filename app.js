var express = require('express');
var app = express();
var router = require('./router');

app.use(router);

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log("Rabbitshoe running on port: " + port + ".");
});