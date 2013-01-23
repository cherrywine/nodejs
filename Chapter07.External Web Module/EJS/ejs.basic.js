/**
 * EJS Template Basic
 */
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request, response){
	fs.readFile('EJSPage.ejs', 'utf8', function(error, data) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(ejs.render(data, {
			name: 'CherryWine',
			description: 'Hello EJS With Node.js .. !'
		}));
	});
}).listen(49757, function() {
	console.log('\u001b[1m', 'Server Running at http://127.0.0.1:49757');
});