/**
 * Connect Module MiddleWare - Error Handler
 */

var connect = require('connect');
// var connect_router = require('connect_router'); 

// create Server
var server = connect.createServer();

// use Logger MiddleWare
server.use(connect.logger('short'));

// use MiddleWare
// server.use(connect_router(function (app) {}));

server.use(connect.static(__dirname + '/static.resource'));

// Set Request Event Handler

server.use(function (request, response) {
	// response
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<img src="/cat.jpg" width="100%">');
});


// use Error Handler MiddleWare
// server.use(connect.errorHandler({stack: true, message: true, dump: true}));

server.listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});