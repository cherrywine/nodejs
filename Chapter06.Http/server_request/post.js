/**
 * POST 요청 매개 변수 추출
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	// 최초 접속시에는 GET 방식이므로 입력페이지 출력, 입력페이지에서는 POST 방식을 사용하여 입력 데이터 출력
	if (request.method == 'GET') {
		// GET 요청
		fs.readFile('post.html', function (error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	} else if (request.method == 'POST') {
		request.on('data', function (data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end('<h1>' + data + '</h1>');
		});
		
	}
}).listen(49757, function() {
	console.log('Server Running at http://127.0.0.1:49757/');
});
