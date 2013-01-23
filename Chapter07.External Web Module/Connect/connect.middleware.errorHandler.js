/**
 * Connect Module MiddleWare - Error Handler
 */

var connect = require('connect');

/*
connect.createServer(function (request, response) {
	// throw force exception
	throw new Error('Page Not Found');
}, connect.errorHandler({
	// locate at last (after exception function)
	stack: true,
	message: true,
	dump: true
})).listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});
*/

// create Server
var server = connect.createServer();

// use Logger MiddleWare
server.use(connect.logger('short'));

// Set Request Event Handler
server.use(function (request, response) {
	// response
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello Connect Module</h1>');
});

// use Error Handler MiddleWare
server.use(connect.errorHandler({
	stack: true,
	message: true,
	dump: true
}));

server.listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});