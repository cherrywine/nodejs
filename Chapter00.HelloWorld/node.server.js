/**
 * http Server 생성
 */
// 모듈을 추출합니다.
var http = require('http');

// 웹 서버를 생성 및 실행합니다.
http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello World ... !</h1>');
}).listen(30009, function() {
	console.log('Server running at http://127.0.0.1:30009/\r\n');
	
	console.log('filename: ', __filename);
	console.log('dirname: ', __dirname);
	
	// REPL 예제
	// %d : 숫자, %s : 문자열, %j : JSON
	var replNumber = 33;
	var replString = 'Hello World?';
	var replJSON = { name: 'CherryWine' };
	console.log('[REPL NUMBER] output: %d', replNumber);
	console.log('[REPL String] output: %s', replString);
	console.log('[REPL JSON] output: %j', replJSON);
	
	// console.time 예제
	// 시간 측정을 시작합니다.
	console.time('alpha');
	
	var output = 1;
	for (var i = 1; i < 100000000; i++) {
		output += 1;
	}
	
	console.log('Result: ', output);
	
	// 시간측정을 종료합니다.
	console.timeEnd('alpha');
	
	// 출력 글자에 색 적용 ---> Eclipse Console 미적용, Windows CMD 확인 가능
	console.log('\u001b[31m', 'Hello World?');
	console.log('\u001b[32m', 'Hello World?');
	console.log('\u001b[33m', 'Hello World?');
	console.log('\u001b[34m', 'Hello World?');
	console.log('\u001b[35m', 'Hello World?');
	console.log('\u001b[36m', 'Hello World?');
	
	// 밝게!
	console.log('\u001b[1m');
	console.log('\u001b[31m', 'Hello World?');
	console.log('\u001b[32m', 'Hello World?');
	console.log('\u001b[33m', 'Hello World?');
	console.log('\u001b[34m', 'Hello World?');
	console.log('\u001b[35m', 'Hello World?');
	console.log('\u001b[36m', 'Hello World?');
	
	// 초기화	
	console.log('\u001b[0m');
	console.log('Hello World?');
});