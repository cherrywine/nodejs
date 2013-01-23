/**
 * GET 요청 매개 변수 추출
 */
var http = require('http');
var url = require('url');

http.createServer(function(request, response){
	var query = url.parse(request.url, true).query;
	
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(49757, function(){
	console.log('Server Running at http://127.0.0.1:49757');
});