/**
 * Jade Template Basic
 */

 var http = require('http');
 var jade = require('jade');
 var fs = require('fs');
 
 http.createServer(function(request, response){
 	fs.readFile('JadePage.jade', 'utf8', function(error, data){
 		var fn = jade.compile(data);
 		
 		response.writeHead(200, {'Content-Type': 'text/html'});
 		response.end(fn({
 			name: 'CherryWine',
 			description: 'Hello HAML & Jade With Node.js .. !'
 		}));
 	});
 }).listen(49757, function() {
	console.log('\u001b[1m', '\u001b[32m', 'Server Running at', '\u001b[31m', 'http://127.0.0.1:49757', '\u001b[0m');
});