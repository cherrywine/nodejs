/**
 * Connect Module MiddleWare - Query
 */

 var connect = require('connect');
 
 connect.createServer(connect.query(), function (request, response) {
 	// response
 	response.writeHead(200, {'Content-Type' : 'text/html'});
 	response.end('<h1>' + JSON.stringify(request.query) + '</h1>');
 }).listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});