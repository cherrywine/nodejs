/**
 * Web Server!
 */
// 모듈을 추출합니다.
var http = require('http');

// 웹 서버를 생성합니다.
var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/html' });
	response.end('<h1>Hello Web Server with Node.js</h1>');
});

// Server 객체에 이벤트를 연결합니다.
server.on('request', function() {
	console.log('Request On');
});
server.on('connection', function() {
	console.log('Connection On');
});
server.on('close', function() {
	console.log('Close On');
});

// 웹 서버를 실행합니다.
server.listen(49757, function() {
	console.log('Server Running at http://127.0.0.1:49757');
});

/*
// 10초 후 함수를 실행합니다.
setInterval(function() {
	// 서버를 종료합니다.
	server.close();
}, 10000);
*/