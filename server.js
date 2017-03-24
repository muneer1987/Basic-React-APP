var express = require('express');

var server = express();
	, server = require('http').createServer(app)
  	, io = io.listen(server);
server.use(express.static(__dirname + '/src'));

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});