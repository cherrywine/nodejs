/**
 * Connect Module MiddleWare Basic
 */

var connect = require('connect');

connect.createServer(connect.logger(), function (request, response, next) {
	
}).listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});