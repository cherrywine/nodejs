/**
 * Connect Module Basic
 */
var connect = require('connect');

connect.createServer(function (request, response, next) {
	// 1st arg function
	console.log('First Function');
	
	// call 2nd arg function
	next();
}, function (request, response, next) {
	// 2nd arg function
	console.log('Second Function');
	
	// call next arg function
	next();
}, function (request, response, next) {
	// response
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello Connect Module!</h1>');
}).listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});